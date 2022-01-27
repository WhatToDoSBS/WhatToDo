package com.koreait.whattodo;
import com.koreait.whattodo.webtoon.WebtoonService;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.List;

public class Utils {
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
    }   // 네이버 웹툰 삭제 후 데이터베이스 삽입입(월~)
}
