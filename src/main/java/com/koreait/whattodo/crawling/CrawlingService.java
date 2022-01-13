package com.koreait.whattodo.crawling;

import com.koreait.whattodo.Utils;
import com.koreait.whattodo.model.CrawlingMecaRankEntity;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
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
        Connection con = Jsoup.connect(url);

        try {
            Document document = con.get();

            // 크롤링 과정
            Elements rankNum = document.select("tr.ranking-table-rows").select("span.rank");    // 순위 번호(1,2,3...) 가져오기
            Elements rankNm = document.select("div.game-name > a"); // 게임 이름
            Elements company = document.select("div.game-info > span.company"); // 회사 명

            /*
            List<CrawlingMecaRankEntity> rankNumList = new ArrayList<CrawlingMecaRankEntity>();   // 순위 번호 리스트
            List<CrawlingMecaRankEntity> rankNmList = new ArrayList<CrawlingMecaRankEntity>();    // 게임 리스트
            List<CrawlingMecaRankEntity> companyList = new ArrayList<CrawlingMecaRankEntity>();   // 회사 리스트

            // 리스트에 크롤링을 넣는 작업
            Utils utils = new Utils();
            List<String> crawlingRankNum = utils.crawling(rankNum, rankNumList);
            List<String> crawlingRankNm = utils.crawling(rankNm, rankNmList);
            List<String> crawlingCompany = utils.crawling(company, companyList);

             */

            // String[][] mecaRankList = new String[crawlingRankNm.size()][];

            for(int i=0; i<crawlingRankNm.size();i++) {
                CrawlingMecaRankEntity entity = new CrawlingMecaRankEntity();
                String name = crawlingRankNm.get(i);


                System.out.println(name);

                entity.setRankNm(crawlingRankNm.get(i));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
