package com.koreait.whattodo.webtoon;

import com.koreait.whattodo.Const;
import com.koreait.whattodo.model.WebtoonEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Random;

@Controller
@RequestMapping(value = "/board", produces = "application/text; charset=UTF-8") // js 한글깨짐 방지
public class WebtoonController {
    @Autowired
    private WebtoonService service;

    @GetMapping("/webtoon")
    public void webtoon() {}

    @GetMapping("/webtooncrawling")
    public String webtoonCrawling(Model model) {

        service.delWebtoon();
        for(int i=i;i<=7;i++) {
            String webtoonLink = "NAVER_WEBTOON_" + i;
            service.insertWebtoon(Const.NAVER_WEBTOON_1);
        }
        service.insertWebtoon(Const.NAVER_WEBTOON_MON);
        service.insertWebtoon(Const.NAVER_WEBTOON_THU);

        return "redirect:/board/webtoon";
    }
}
