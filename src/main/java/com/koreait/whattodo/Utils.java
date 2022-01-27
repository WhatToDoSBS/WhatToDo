package com.koreait.whattodo;
import com.koreait.whattodo.webtoon.WebtoonService;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.List;
import java.util.Random;

public class Utils {

    // 네이버 웹툰 삭제 후 데이터베이스 삽입입(월~)
    public void insertWebtoon(WebtoonService service) {
        service.delWebtoon();
        service.delRecommandWebtoon();
        service.insertWebtoon(Const.NAVER_WEBTOON_1);
        service.insertWebtoon(Const.NAVER_WEBTOON_2);
        service.insertWebtoon(Const.NAVER_WEBTOON_3);
        service.insertWebtoon(Const.NAVER_WEBTOON_4);
        service.insertWebtoon(Const.NAVER_WEBTOON_5);
        service.insertWebtoon(Const.NAVER_WEBTOON_6);
        service.insertWebtoon(Const.NAVER_WEBTOON_7);
    }

    // 0부터 사이즈만큼의 랜덤 정수값을 반환환
    public static int randomNumOutput(int size) {
        Random random = new Random(); //랜덤 객체 생성(디폴트 시드값 : 현재시간)
        random.setSeed(System.currentTimeMillis()); // 시드값 설정을 따로 할수도 있음
        int randomNum = random.nextInt(size);
        return randomNum;
    }
}
