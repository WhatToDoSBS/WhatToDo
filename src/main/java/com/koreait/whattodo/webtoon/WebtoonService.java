package com.koreait.whattodo.webtoon;

import com.koreait.whattodo.model.WebtoonEntity;
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
public class WebtoonService {
    @Autowired
    private WebtoonMapper mapper;

    public void insertWebtoon(String url) {

        // 액세스 처리
        try {
            Document document = Jsoup.connect(url).userAgent("Chrome/5.0").get(); // 403 error 처리(권한 부여)

            Elements toonNm = document.select("ul.img_list").select("dt > a"); // 웹툰 이름(title), 링크(href)
            Elements toonWriter = document.select("ul.img_list").select("dd.desc > a");   // 작가
            Elements toonRating = document.select("ul.img_list").select("dd > div.rating_type").select("strong");    // 별점
            Elements toonImg = document.select("ul.img_list").select("div.thumb > a > img");    // 이미지
            Elements toonWeekend = document.select("ul.img_list").select("div.thumb > a > img");    // 이미지
            Elements toonLink = document.select("ul.img_list").select("dt > a"); // 링크

            List toonNmList = new ArrayList();
            List toonWriterList = new ArrayList();
            List toonRatingList = new ArrayList();
            List toonImgList = new ArrayList();
            List toonWeekendList = new ArrayList();
            List toonLinkList = new ArrayList();

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
            for(Element element: toonImg) {    // PC게임 이름 크롤링
                String name = element.getElementsByAttribute("src").attr("src");
                toonImgList.add(name);
            }
            for(Element element: toonImg) {    // 링크
                String name = element.getElementsByAttribute("src").attr("src");
                toonImgList.add(name);
            }

            System.out.println("toonNmList" + toonNmList);
            System.out.println("toonWriterList" + toonWriterList);
            System.out.println("toonRatingList" + toonRatingList);
            System.out.println("toonImgList" + toonImgList);


            for(int i=0;i<toonNmList.size();i++) {
                List<WebtoonEntity> list = new ArrayList<>();
                WebtoonEntity entity = new WebtoonEntity();
                entity.setNm((String)toonNmList.get(i));
                entity.setWriter((String)toonWriterList.get(i));
                entity.setRating((String)toonRatingList.get(i));
                entity.setImg((String)toonImgList.get(i));
                list.add(entity);
                mapper.insertWebtoon(list);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void delWebtoon() { mapper.delWebtoon(); }

    public List<WebtoonEntity> listWebtoon() { return mapper.webtoonList(); }
}
