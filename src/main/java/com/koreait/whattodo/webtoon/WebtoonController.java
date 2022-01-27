package com.koreait.whattodo.webtoon;

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
        String naverWebtoonURL = "https://comic.naver.com/webtoon/weekdayList?week=mon&order=User&view=image";  // 월요일&인기순
        service.delWebtoon();
        service.insertWebtoon(naverWebtoonURL);

        return "redirect:/board/webtoon";
    }
}
