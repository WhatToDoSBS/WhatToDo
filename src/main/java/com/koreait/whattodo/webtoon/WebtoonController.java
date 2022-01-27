package com.koreait.whattodo.webtoon;

import com.koreait.whattodo.Const;
import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.Utils;
import com.koreait.whattodo.model.WebtoonEntity;
import com.koreait.whattodo.model.WebtoonRecommandEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Random;

@Controller
@RequestMapping(value = "/board", produces = "application/text; charset=UTF-8") // js 한글깨짐 방지
public class WebtoonController {
    @Autowired
    private WebtoonService webtoonService;

    private Utils utils;

    @GetMapping("/webtoon")
    public void webtoon(Model model, RedirectAttributes rttr) {
        List<WebtoonRecommandEntity> webtoonRecommandEntityList = webtoonService.listRecommandWebtoon();
        if(webtoonRecommandEntityList.size()==0) { // 웹툰 리스트 없으면 크롤링해주고 값 넣어줌
            utils.insertWebtoon(webtoonService);
            webtoonRecommandEntityList = webtoonService.listRecommandWebtoon(); // 추천웹툰 리스트 전체
        }
        int randomNum = utils.randomNumOutput(webtoonRecommandEntityList.size());
        model.addAttribute("webtoonRecommandList", webtoonRecommandEntityList);
        model.addAttribute("randomNum", randomNum);
    }

    @GetMapping("/webtooncrawling")
    public String webtoonCrawling(Model model) {
        utils.insertWebtoon(webtoonService);

        return "redirect:/board/webtoon";
    }

}
