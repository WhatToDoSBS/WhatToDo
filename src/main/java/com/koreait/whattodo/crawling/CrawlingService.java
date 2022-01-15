package com.koreait.whattodo.crawling;

import com.koreait.whattodo.Utils;
import com.koreait.whattodo.model.CrawlingMecaRankEntity;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class CrawlingService {
    @Autowired
    private CrawlingMapper mapper;

    public void insert(String url) {
        Document doc = null;
        List rankNumList = new ArrayList<>();   // 순위 번호 리스트
        List rankNmList = new ArrayList<>();    // 게임 리스트
        List companyList = new ArrayList<>();   // 회사 리스트

        try {
            doc = Jsoup.connect(url).get();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 크롤링 과정
        Elements rankNum = doc.select("tr.ranking-table-rows").select("span.rank");    // 순위 번호(1,2,3...) 가져오기
        Elements rankNm = doc.select("div.game-name > a"); // 게임 이름
        Elements company = doc.select("div.game-info > span.company"); // 회사 명

        CrawlingMecaRankEntity entity = new CrawlingMecaRankEntity();
        List<CrawlingMecaRankEntity> list = new ArrayList<>();
        for(Element element : rankNum) {
            String num = element.text();

            rankNumList.add(num);
        }
        for(Element element : rankNm) {
            String name = element.text();

            rankNmList.add(name);
        }
        for(Element element : company) {
            String companyNm = element.text();

            companyList.add(companyNm);
        }
        for(int i=0;i<rankNmList.size();i++) {
            entity.setRankNum((String)rankNumList.get(i));
            entity.setRankNm((String)rankNmList.get(i));
            entity.setCompany((String)companyList.get(i));
            list.add(entity);
            mapper.insertRankMecaDb(list.get(i));
        }

    }
}
