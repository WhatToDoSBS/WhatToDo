package com.koreait.whattodo.crawling;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/crawling")
public class CrawlingController {

    @Autowired
    private CrawlingService service;

    @GetMapping("/meca")
    public void meca() {
        String url = "https://www.gamemeca.com/ranking.php";
        service.insert(url);
    }
}
