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

            Elements toonNm = document.select("ul.img_list").select("dt > a"); // 웹툰 이름(title), 링크(href)
            Elements toonWriter = document.select("ul.img_list").select("dd.desc > a");   // 작가
            Elements toonRating = document.select("ul.img_list").select("dd > div.rating_type").select("strong");    // 별점
            Elements toonImg = document.select("ul.img_list").select("div.thumb > a > img");    // 이미지
            Elements toonWeekend = document.select("div.view_type").select("h3.sub_tit");

            List toonNmList = new ArrayList();
            List toonWriterList = new ArrayList();
            List toonRatingList = new ArrayList();
            List toonImgList = new ArrayList();
            List toonWeekendList = new ArrayList();
            List toonLinkList = new ArrayList();
            String weekend = null;

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
            for(Element element: toonImg) {    // 이미지 링크
                String name = element.getElementsByAttribute("src").attr("src");
                toonImgList.add(name);
            }
            for(Element element: toonWeekend) {    // 요일
                String name = element.text();
                String[] nameArr = name.split("\\s");   // 공백(정규식 : \s)으로 구분
                String naming = nameArr[0] + "일"; // nameArr에 첫번째에는 월요, 화요 이런 식으로 담기는데 첫번째만 빼주고 '일'을 덧붙임
                toonWeekendList.add(name);
                weekend = naming;
                System.out.println(naming);
            }
            for(Element element: toonNm) {    // 링크
                String link = element.getElementsByAttribute("href").attr("href");
                toonLinkList.add(link);
            }

            System.out.println("toonNmList" + toonNmList);
            System.out.println("toonWriterList" + toonWriterList);
            System.out.println("toonRatingList" + toonRatingList);
            System.out.println("toonImgList" + toonImgList);
            System.out.println("toonWeekendList" + toonWeekendList);
            System.out.println("toonLinkList" + toonLinkList);
            System.out.println("weekend String : " + weekend);

            for(int i=0;i<toonNmList.size();i++) {
                List<WebtoonEntity> list = new ArrayList<>();
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
