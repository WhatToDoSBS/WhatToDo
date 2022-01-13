package com.koreait.whattodo.crawling;

import com.koreait.whattodo.Utils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CrawlingTest {
    public static void main(String[] args) {

        // 게임메카에서 크롤링해서 가져오는 과정

        final String RankURL = "https://www.gamemeca.com/ranking.php";
        Connection con = Jsoup.connect(RankURL);

        try {
            Document document = con.get();
            Elements rankNum = document.select("tr.ranking-table-rows").select("span.rank");    // 순위 번호(1,2,3...) 가져오기
            Elements rankNm = document.select("div.game-name > a"); // 게임 이름
            Elements company = document.select("div.game-info > span.company"); // 회사 명
            List rankNumList = new ArrayList<>();   // 순위 번호 리스트
            List rankNmList = new ArrayList<>();    // 게임 리스트
            List companyList = new ArrayList<>();   // 회사 리스트

            // 리스트에 크롤링을 넣는 작업
            Utils utils = new Utils();
            List crawlingRankNum = utils.crawling(rankNum, rankNumList);
            List crawlingRankNm = utils.crawling(rankNm, rankNmList);
            List crawlingCompany = utils.crawling(company, companyList);

            String[][] mecaRankList = new String[crawlingRankNm.size()][];

            for(int i=0; i<crawlingRankNm.size();i++) {
                for (int j=0; j<3;j++) {
                    mecaRankList[i][0] = (String) crawlingRankNum.get(j);
                    mecaRankList[i][1] = (String) crawlingRankNm.get(j);
                    mecaRankList[i][2] = (String) crawlingCompany.get(j);
                    System.out.println(mecaRankList[i][0] + mecaRankList[i][1] + mecaRankList[i][2]);
                }
                System.out.println();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
