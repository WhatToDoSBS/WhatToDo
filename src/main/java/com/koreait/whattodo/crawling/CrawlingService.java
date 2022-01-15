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

        // 크롤링 담을 CrawlingMecaRankEntity 객체 생성.
        CrawlingMecaRankEntity entity = new CrawlingMecaRankEntity();

        // 크롤링해서 가져온 값의 text만 뽑아서 리스트에 담음.
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
        // 반복해서 들어가지 않도록 테이블 안에 내용이 있으면 비우는 과정.
        mapper.delMecaRank();

        // for문이 한 번 돌 때마다 한 행씩 추가.
        for(int i=0;i<rankNmList.size();i++) {
            List<CrawlingMecaRankEntity> list = new ArrayList<>();
            entity.setRankNum((String)rankNumList.get(i));
            entity.setRankNm((String)rankNmList.get(i));
            entity.setCompany((String)companyList.get(i));
            list.add(entity);
            mapper.insertRankMecaDb(list);
        }

    }
}
