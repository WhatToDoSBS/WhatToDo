package com.koreait.whattodo.board;

import com.google.gson.Gson;
import com.koreait.whattodo.crawling.CrawlingService;
import com.koreait.whattodo.model.MecaRankEntity;
import com.koreait.whattodo.model.SteamRankEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping(value = "/board", produces = "application/text; charset=UTF-8") // js 한글깨짐 방지
public class BoardController2 {
    @Autowired
    private BoardService service;

    @Autowired
    private CrawlingService crawlingService;

    @GetMapping("/netflix")
    public void netflix() {}

    @GetMapping("/ranking")
    public String ranking(Model model, MecaRankEntity entity, SteamRankEntity steamRankEntity) throws IOException {
        String mecaUrl = "https://www.gamemeca.com/ranking.php";
        String steamUrl = "https://store.steampowered.com/stats/?l=koreana";

        crawlingService.insertMeca(mecaUrl);
        crawlingService.insertSteam(steamUrl);

        model.addAttribute("mecaRankList", crawlingService.mecaRankList(entity));
        model.addAttribute("steamRankList", crawlingService.steamRankList(steamRankEntity));
        return "board/ranking";
    }

    @GetMapping("/mecarankingjson")
    @ResponseBody
    public String mecarankingjson(MecaRankEntity entity, HttpServletResponse res) throws IOException {
        String mecaUrl = "https://www.gamemeca.com/ranking.php";
        String steamUrl = "https://store.steampowered.com/stats/?l=koreana";

        crawlingService.insertMeca(mecaUrl);
        crawlingService.insertSteam(steamUrl);

        // json ajax통신
        Gson gson = new Gson();

        String mecaListJson = gson.toJson(crawlingService.mecaRankList(entity));

        System.out.println(mecaListJson);
        return mecaListJson;
    }

}
