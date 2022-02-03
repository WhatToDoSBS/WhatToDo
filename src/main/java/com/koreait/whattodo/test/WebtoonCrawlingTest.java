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
        String naverWebtoonURL = "https://comic.naver.com/index";

        // 액세스 처리
        try {
            Document document = Jsoup.connect(naverWebtoonURL).userAgent("Chrome/5.0").get(); // 403 error 처리(권한 부여)

            Elements toonNm = document.select("ul#genreRecommand").select("div.genreRecomInfo2").select("h6 > a").select("span");
            Elements toonImg = document.select("ul#genreRecommand").select("div.genreRecomImg2").select("a").select("img");
            Elements toonWriter = document.select("ul#genreRecommand").select("div.genreRecomInfo2").select("span.user").select("a");
            Elements toonLink = document.select("ul#genreRecommand").select("div.genreRecomImg2 > a");
            List<String> toonNmList = new ArrayList<>();
            List<String> toonImgList = new ArrayList<>();
            List<String> toonWriterList = new ArrayList<>();
            List<String> toonLinkList = new ArrayList<>();

            List<WebtoonEntity> webtoonList = new ArrayList<>();


            for(Element element: toonImg) {    // 웹툰 이미지
                String name =element.getElementsByAttribute("src").attr("src");
                toonImgList.add(name);
            }

            for(Element element: toonNm) {    // 웹툰 이름
                String name =element.text();
                toonNmList.add(name);
            }
            for(Element element: toonWriter) {    // 웹툰 작가
                String name =element.text();
                toonWriterList.add(name);
            }
            for(Element element: toonWriter) {    // 웹툰 작가
                String name =element.text();
                toonWriterList.add(name);
            }
            for(Element element: toonLink) {    // 웹툰 작가
                String name =element.getElementsByAttribute("href").attr("href");
                String fullLink = "comic.naver.com" + name;
                toonLinkList.add(fullLink);
                System.out.println("링크 : " + fullLink);
            }

            for(int i=0; i<toonNmList.size();i++) {
                WebtoonEntity entity = new WebtoonEntity();
                entity.setImg(toonImgList.get(i));
                entity.setWriter(toonWriterList.get(i));
                entity.setNm(toonNmList.get(i));
                webtoonList.add(entity);
                System.out.println(webtoonList.get(i).getNm());
            }


        } catch (IOException e) {
            e.printStackTrace();
        }
}
    }
