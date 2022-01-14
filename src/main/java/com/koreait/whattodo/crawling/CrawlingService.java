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
        List<CrawlingMecaRankEntity> numList = new ArrayList<CrawlingMecaRankEntity>();
        List<CrawlingMecaRankEntity> nameList = new ArrayList<CrawlingMecaRankEntity>();
        List<CrawlingMecaRankEntity> companyList = new ArrayList<CrawlingMecaRankEntity>();


        try {
            doc = Jsoup.connect(url).get();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 크롤링 과정
        Elements rankNum = doc.select("tr.ranking-table-rows").select("span.rank");    // 순위 번호(1,2,3...) 가져오기
        Elements rankNm = doc.select("div.game-name > a"); // 게임 이름
        Elements company = doc.select("div.game-info > span.company"); // 회사 명

        for(Element element : rankNum) {
            CrawlingMecaRankEntity entity = new CrawlingMecaRankEntity();
            String name = element.text();

            entity.setRankNm(name);
            numList.add(entity);
        }
        for(Element element : rankNm) {
            CrawlingMecaRankEntity entity = new CrawlingMecaRankEntity();
            String name = element.text();

            entity.setRankNm(name);
            nameList.add(entity);
        }
        for(Element element : company) {
            CrawlingMecaRankEntity entity = new CrawlingMecaRankEntity();
            String name = element.text();

            entity.setRankNm(name);
            companyList.add(entity);
        }

        mapper.insertName(nameList);

    }
}
