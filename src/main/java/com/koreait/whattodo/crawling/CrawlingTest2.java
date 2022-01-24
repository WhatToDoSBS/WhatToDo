package com.koreait.whattodo.crawling;

import com.koreait.whattodo.model.MecaRankEntity;
import com.koreait.whattodo.model.MobileRankEntity;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CrawlingTest2 {
    public static void main(String[] args) throws IOException {
        // 크롤링해서 가져오는 과정

        final String mobileURL = "https://www.mobileindex.com/mi-chart/top-100/top-games";

        // 액세스 처리
        // Connection con = (Connection) Jsoup.connect(ratingURL).userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36").get();

        try {
            Document document = Jsoup.connect(mobileURL).userAgent("Chrome/5.0").get(); // 403 error 처리(권한 부여)
            Elements rankNum = document.select("td.center");    // 순위 번호(1,2,3...) 가져오기
            Elements gameNm = document.select("a"); // 게임 이름
            Elements company = document.select("span"); // 회사 명
            List rankNumList = new ArrayList<>();   // 순위 번호 리스트
            List gameNmList = new ArrayList<>();    // 게임 리스트
            List companyList = new ArrayList<>();   // 회사 리스트



//            Elements ratingGameNm = document.select("div.wiki-heading-content:last-child").select("td:nth-child(2)"); // PC게임 전체 이름
//            Elements ratingGameNum = document.select("div.wiki-heading-content:last-child").select("td:first-child");   // PC게임 순위
//            Elements ratingGameRating = document.select("div.wiki-heading-content:last-child").select("td:nth-child(3)");    // PC게임 평점
//            List rateNmList = new ArrayList();
//            List rateNumList = new ArrayList();
//            List rateRatingList = new ArrayList();


//            rateNmList.remove(0);   // 앞에 하나(텍스트) 삭제
//            System.out.println(gameNmList);

            for(Element element: rankNum) {    // 모바일 게임 순위 크롤링
                String mRankNum = element.text();
                rankNumList.add(mRankNum);
            }

            for(Element element: gameNm) {    // 모바일 게임 이름 크롤링
                String mGameNm = element.text();
                gameNmList.add(mGameNm);
            }

            // 앞에 두개(텍스트) 삭제
//            rateNumList.remove(0);
//            rateNumList.remove(0);

            for(Element element: company) {    // 모바일 게임 회사이름 크롤링
                String mCompany = element.text();
                companyList.add(mCompany);
            }
//            rateRatingList.remove(0);   // 앞에 하나(텍스트) 삭제
            System.out.println(companyList);


            /* for(Element element : rankNm) {
                String name = element.text();
                String nmLink = element.getElementsByAttribute("href").attr("href");
                rankNmList.add(name);
                System.out.println(name);
                System.out.println("이미지 태그 가져오기 : " + nmLink);
            } */
            MobileRankEntity entity = new MobileRankEntity();

            List<MobileRankEntity> list = new ArrayList<>();
            for(int i=0;i<gameNmList.size();i++) {
                entity.setRankNum((String)rankNumList.get(i));
                entity.setGameNm((String)gameNmList.get(i));
                entity.setCompany((String)companyList.get(i));
                list.add(entity);
                System.out.println(list);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}