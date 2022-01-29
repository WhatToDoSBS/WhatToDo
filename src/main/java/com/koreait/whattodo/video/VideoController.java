package com.koreait.whattodo.video;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/board", produces = "application/text; charset=UTF-8") // js 한글깨짐 방지
public class VideoController {
    @Autowired
    private VideoService service;

    @GetMapping("/video")
    public void video(Model model) {
        service.insertMovie();
    }
}
