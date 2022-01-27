package com.koreait.whattodo.test;

import com.koreait.whattodo.model.WebtoonEntity;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class WebtoonCrawlingTest {
    public static void main(String[] args) throws IOException {
        // 크롤링해서 가져오는 과정

        String naverWebtoonURL = "https://comic.naver.com/webtoon/weekdayList?week=mon";

        // 액세스 처리

        try {
            Document document = Jsoup.connect(naverWebtoonURL).userAgent("Chrome/5.0").get(); // 403 error 처리(권한 부여)

            Elements toonNm = document.select("ul.img_list").select("dt > a"); // 웹툰 이름
            Elements toonWriter = document.select("ul.img_list").select("dd.desc > a");   // 작가
            Elements toonRating = document.select("ul.img_list").select("dd > div.rating_type").select("strong");    // 별점
            Elements toonImg = document.select("ul.img_list").select("div.thumb > a > img");    // PC게임 평점

            List toonNmList = new ArrayList();
            List toonWriterList = new ArrayList();
            List toonRatingList = new ArrayList();
            List toonImgList = new ArrayList();

            for(Element element: toonNm) {    // 웹툰 이름
                String name = element.getElementsByAttribute("title").attr("title");
                toonNmList.add(name);
            }
            for(Element element: toonWriter) {    // 작가이름
                String name = element.text();
                toonWriterList.add(name);
            }
            for(Element element: toonRating) {    // 별점
                String name = element.text();
                toonRatingList.add(name);
            }
            for(Element element: toonImg) {    // PC게임 이름 크롤링
                String name = element.getElementsByAttribute("src").attr("src");
                toonImgList.add(name);
            }
            System.out.println("toonNmList" + toonNmList);
            System.out.println("toonWriterList" + toonWriterList);
            System.out.println("toonRatingList" + toonRatingList);
            System.out.println("toonImgList" + toonImgList);


            /* for(Element element : rankNm) {
                String name = element.text();
                String nmLink = element.getElementsByAttribute("href").attr("href");
                rankNmList.add(name);
                System.out.println(name);
                System.out.println("이미지 태그 가져오기 : " + nmLink);
            } */

            /* List<MecaRankEntity> list = new ArrayList<>();
            for(int i=0;i<rankNmList.size();i++) {
                entity.setRankNum((String)rankNumList.get(i));
                entity.setRankNm((String)rankNmList.get(i));
                entity.setCompany((String)companyList.get(i));
                list.add(entity);
                System.out.println(list);
            } */
            List<WebtoonEntity> list = new ArrayList<>();

            for(int i=0;i<toonNmList.size();i++) {
                WebtoonEntity entity = new WebtoonEntity();
                entity.setNm((String)toonNmList.get(i));
                entity.setWriter((String)toonWriterList.get(i));
                entity.setRating((String)toonRatingList.get(i));
                entity.setImg((String)toonImgList.get(i));
                list.add(entity);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
