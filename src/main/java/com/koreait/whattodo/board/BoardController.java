package com.koreait.whattodo.board;

import com.koreait.whattodo.crawling.CrawlingService;
import com.koreait.whattodo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService service;

    @Autowired
    private CrawlingService crawlingService;

    @GetMapping("/game")
    public void game() {}

    @GetMapping("/youtube")
    public void youtube() {}

    @GetMapping("/netflix")
    public void netflix() {}

    @GetMapping("/list")
    public String list(BoardEntity entity, Model model) {
        model.addAttribute("list", service.selBoardList(entity));
        return "board/list";
    }

    @GetMapping("/write")
    public void write() {}

    @PostMapping("/write")
    public String writeProc(BoardEntity entity) {
        int result = service.insBoard(entity);
        return "redirect:/board/list";
    }

    @GetMapping("/detail")
    public void detail(BoardEntity entity, Model model, HttpServletRequest req) {
        String lastIp = req.getHeader("X-FORWARDED-FOR");
        if(lastIp == null) {
            lastIp = req.getRemoteAddr();
        }
        entity.setLastip(lastIp);
        BoardVo vo = (BoardVo) service.selBoard(entity);
        BoardPrevNextVo pnVo = service.selPrevNext(vo);
        model.addAttribute("prevNext", pnVo);
        model.addAttribute("data", service.selBoard(entity));

    }

    @GetMapping("/mod")
    public String mod(BoardEntity entity, Model model) {
        model.addAttribute("data", service.selBoard(entity));
        return "board/write";
    }

    @PostMapping("/mod")
    public String modProc(BoardEntity entity) {
        int result = service.updBoard(entity);
        return "redirect:/board/detail?iboard=" + entity.getIboard();
    }

    @GetMapping("/del")
    public String delProc(BoardEntity entity) {
        int result = service.delBoard(entity);
        return "redirect:/board/list";
    }

    @GetMapping("/ranking")
    public String ranking(Model model, MecaRankEntity entity, SteamRankEntity steamRankEntity) {
        String mecaUrl = "https://www.gamemeca.com/ranking.php";
        String steamUrl = "https://store.steampowered.com/stats/?l=koreana";

        crawlingService.insertMeca(mecaUrl);
        crawlingService.insertSteam(steamUrl);

        model.addAttribute("mecaRankList", crawlingService.mecaRankList(entity));
        model.addAttribute("steamRankList", crawlingService.steamRankList(steamRankEntity));
        return "board/ranking";
    }
}
