package com.koreait.whattodo.crawling;

import com.google.gson.Gson;
import com.koreait.whattodo.board.BoardService;
import com.koreait.whattodo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Random;

@Controller
@RequestMapping(value = "/board", produces = "application/text; charset=UTF-8") // js 한글깨짐 방지
public class CrawlingController {
    @Autowired
    private BoardService service;

    @Autowired
    private CrawlingService crawlingService;

    @GetMapping("/netflix")
    public void netflix() {
//        String mecaUrl = "https://www.gamemeca.com/ranking.php";
//        String steamUrl = "https://store.steampowered.com/stats/?l=koreana";
//        String ratingUrl = "https://namu.wiki/w/%EB%A9%94%ED%83%80%ED%81%AC%EB%A6%AC%ED%8B%B1/MUST-PLAY%20%EB%AA%A9%EB%A1%9D";
//
//        crawlingService.insertMeca(mecaUrl);
//        crawlingService.insertSteam(steamUrl);
//        crawlingService.insertRating(ratingUrl);
    }

//    @GetMapping("/ranking")
//    public String ranking(Model model, MecaRankEntity entity, SteamRankEntity steamRankEntity, RatingEntity ratingEntity, PlatformRankEntity platEntity) throws IOException {
////        String mecaUrl = "https://www.gamemeca.com/ranking.php";
////        String steamUrl = "https://store.steampowered.com/stats/?l=koreana";
////        String ratingUrl = "https://namu.wiki/w/%EB%A9%94%ED%83%80%ED%81%AC%EB%A6%AC%ED%8B%B1/MUST-PLAY%20%EB%AA%A9%EB%A1%9D";
////
////        crawlingService.insertMeca(mecaUrl);
////        crawlingService.insertSteam(steamUrl);
////        crawlingService.insertRating(ratingUrl);
////
////        model.addAttribute("mecaRankList", crawlingService.mecaRankList(entity));
////        model.addAttribute("steamRankList", crawlingService.steamRankList(steamRankEntity));
////        model.addAttribute("ratingList", crawlingService.ratingList(ratingEntity));
////
////        return "board/ranking";
//    }

    @GetMapping("/main")
    public void main(Model model, RatingEntity ratingEntity) {
        String ratingUrl = "https://namu.wiki/w/%EB%A9%94%ED%83%80%ED%81%AC%EB%A6%AC%ED%8B%B1/MUST-PLAY%20%EB%AA%A9%EB%A1%9D";
        crawlingService.insertRating(ratingUrl);

        List<RatingEntity> list = crawlingService.ratingList(ratingEntity);

        // 1부터 List갯수만큼의 난수 생성
        Random random = new Random(); //랜덤 객체 생성(디폴트 시드값 : 현재시간)
        random.setSeed(System.currentTimeMillis()); //시드값 설정을 따로 할수도 있음
        int randomGameNum = random.nextInt(list.size())+1;
        System.out.println("랜덤 [게임] 숫자 : " + (random.nextInt(list.size())+1));
        model.addAttribute("randomGame", list.get(randomGameNum).getGameNm());
    }

    @GetMapping("/steamrankingjson")
    @ResponseBody
    public String steamrankingjson(SteamRankEntity entity, HttpServletResponse res) throws IOException {
        String steamUrl = "https://store.steampowered.com/stats/?l=koreana";

        crawlingService.insertSteam(steamUrl);

        // json ajax통신
        Gson gson = new Gson();

        String steamListJson = gson.toJson(crawlingService.steamRankList(entity));

        System.out.println(steamListJson);
        return steamListJson;
    }

    @GetMapping("/ratinggamejson")
    @ResponseBody
    public String ratinggamejson(RatingEntity entity, HttpServletResponse res) throws IOException {
        // String ratingUrl = "https://namu.wiki/w/%EB%A9%94%ED%83%80%ED%81%AC%EB%A6%AC%ED%8B%B1/MUST-PLAY%20%EB%AA%A9%EB%A1%9D";

        // json ajax통신
        Gson gson = new Gson();

        String ratingListJson = gson.toJson(crawlingService.ratingList(entity));

        System.out.println(ratingListJson);
        return ratingListJson;
    }

    @GetMapping("/mecarankingjson")
    @ResponseBody
    public String mecarankingjson(MecaRankEntity entity, HttpServletResponse res) throws IOException {

        // json ajax통신
        Gson gson = new Gson();

        String mecaListJson = gson.toJson(crawlingService.mecaRankList(entity));

//        System.out.println(mecaListJson);
        return mecaListJson;
    }

    //모바일, pc온라인, 스팀
    @GetMapping("/game")
    public void game() {
        String platformUrl = "https://trees.gamemeca.com/gamerank/";
        String mecaUrl = "https://www.gamemeca.com/ranking.php";
        crawlingService.insertMeca(mecaUrl);
        crawlingService.insertPlatform(platformUrl);
        PlatformRankEntity entity = new PlatformRankEntity();
        PlatformImgEntity imgEntity = new PlatformImgEntity();
//        crawlingService.insertPlatformImgList(entity);
    }

    @GetMapping("/platformrankingjson")
    @ResponseBody
    public String platformRankJson(PlatformRankEntity entity, HttpServletResponse res) throws IOException {

        // json ajax통신
        Gson gson = new Gson();

        String platformListJson = gson.toJson(crawlingService.platformList(entity));

//        System.out.println(platformListJson);
        return platformListJson;
    }

}
