package com.koreait.whattodo.user;

import com.koreait.whattodo.model.MecaRankEntity;
import com.koreait.whattodo.model.MecaRankSengEntity;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CrawlingGenreTest {
    public static void main(String[] args) {
        // 게임메카에서 크롤링해서 가져오는 과정

        final String RankURL = "https://www.gamemeca.com/ranking.php";
        Connection con = Jsoup.connect(RankURL);

        try {
            Document document = con.get();
            Elements rankNum = document.select("tr.ranking-table-rows").select("span.rank");    // 순위 번호(1,2,3...) 가져오기
            Elements rankNm = document.select("div.game-name > a"); // 게임 이름
            Elements company = document.select("div.game-info > span.company"); // 회사 명
            Elements genre = document.select("div.game-info > span:nth-child(2)"); // 장르 명
            Elements cash = document.select("div.game-info > span:nth-child(3)"); // 유료화 정책
            List rankNmList = new ArrayList<>();    // 게임 리스트
            List companyList = new ArrayList<>();   // 회사 리스트
            List genreList = new ArrayList<>();   // 장르 리스트
            List cashList = new ArrayList<>();   // 유료화 정책 리스트


            for(Element element : rankNum) {
                String num = element.text();
                rankNmList.add(num);

            }
            System.out.println();
            for(Element element : rankNm) {
                String name = element.text();
                rankNmList.add(name);

            }
            System.out.println();
            for(Element element : company) {
                String companyNm = element.text();
                companyList.add(companyNm);
            }

            System.out.println();
            for(Element element : genre) {
                String genreNm = element.text();
                genreList.add(genreNm);
            }

            System.out.println();
            for(Element element : cash) {
                String cashNm = element.text();
                cashList.add(cashNm);
            }

            // 통합 리스트
            List<MecaRankSengEntity> mecaRankEntityList = new ArrayList();

            for (int j=0; j<rankNmList.size(); j++) {
                for (int i=0; i<rankNmList.size(); i++) {
                    MecaRankSengEntity entity = new MecaRankSengEntity();
                    entity.setRankNm((String) rankNmList.get(i));
                    entity.setCompany((String) companyList.get(i));
                    entity.setGenre((String) genreList.get(i));
                    entity.setCash((String) cashList.get(i));
                    mecaRankEntityList.add(entity);
                }
                System.out.println(mecaRankEntityList.get(j));
            }





        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
