package com.koreait.whattodo.webtoon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/board", produces = "application/text; charset=UTF-8") // js 한글깨짐 방지
public class WebtoonController {
    @Autowired
    private WebtoonService service;

    @GetMapping("/webtoon")
    public void webtoon() {}

    @GetMapping("/webtooncrawling")
    public String webtoonCrawling() {
        String naverWebtoonURL = "https://comic.naver.com/webtoon/weekdayList?week=mon&order=User&view=image";
        service.delWebtoon();
        service.insertWebtoon(naverWebtoonURL);

        return "redirect:/board/webtoon";
    }
}
