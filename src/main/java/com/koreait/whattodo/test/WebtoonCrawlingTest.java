package com.koreait.whattodo.test;

import com.koreait.whattodo.model.WebtoonEntity;
import com.koreait.whattodo.model.WebtoonGenreEntity;
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
        String naverWebtoonURL = "https://comic.naver.com/webtoon/finish";

        // 액세스 처리
        try {
            Document document = Jsoup.connect(naverWebtoonURL).userAgent("Chrome/5.0").get(); // 403 error 처리(권한 부여)

            Elements toonNm = document.select("div.thumb").select("a");
            Elements toonImg = document.select("div.thumb").select("a").select("img");  // 이미지, 완결 구분
            Elements toonWriter = document.select("ul.img_list").select("dd.desc").select("a");
            Elements toonLink = document.select("div.thumb").select("a");
            Elements genre = document.select("h3.sub_tit");
            List<String> toonNmList = new ArrayList<>();
            List<String> toonImgList = new ArrayList<>();
            List<String> toonWriterList = new ArrayList<>();
            List<String> toonLinkList = new ArrayList<>();

            System.out.println(genre.text().substring(0,3));
            for(Element element: toonNm) {    // 웹툰 이름
                String name =element.getElementsByAttribute("title").attr("title");
                toonNmList.add(name);

            }
            for(Element element: toonImg) {    // 웹툰 이미지
                String name =element.getElementsByAttribute("src").attr("src");
                if(!name.contains("https://ssl.pstatic.net/static/comic/images/migration/webtoon/ico_finish.gif")) { // jpg 있는 것만 빼내오기(아니면 완결 이미지도 포함됨)
                    toonImgList.add(name);
                    System.out.println(name);
                }
            }
            for(Element element: toonWriter) {    // 웹툰 작가
                String name =element.text();
                toonWriterList.add(name);
            }
            for(Element element: toonLink) {    // 웹툰 링크
                String name =element.getElementsByAttribute("href").attr("href");
                String fullLink = "https://comic.naver.com/" + name;
                toonLinkList.add(fullLink);
            }

            for(int i=0; i<toonImgList.size();i++) {
                List<WebtoonGenreEntity> list = new ArrayList<>();
                WebtoonGenreEntity entity = new WebtoonGenreEntity();
                entity.setNm(toonNmList.get(i));
                entity.setImg(toonImgList.get(i));
                entity.setWriter(toonWriterList.get(i));
                entity.setLink(toonLinkList.get(i));
                list.add(entity);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
}
    }
