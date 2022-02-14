package com.koreait.whattodo.board.fav;

import com.koreait.whattodo.model.FavWebtoonEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RestController
@RequestMapping("/webtoon/fav")
public class FavWebtoonController {
    @Autowired
    private FavWebtoonService service;

    @PostMapping
    public Map<String, Integer> insBoardFav(@RequestBody FavWebtoonEntity entity) {
        Map<String, Integer> result = new HashMap<>();
        result.put("result", service.insWebtoonFav(entity));
        return result;
    }

    @GetMapping("/{nm}")    // 좋아요 했는지 안했는 지 체크..하는 건데 제 생각엔 여기서 잘못가져오는건가 싶기도 하고..
    public Map<String, Integer> isFav(@PathVariable String nm) {
        FavWebtoonEntity dbEntity = service.selWebtoondFav(nm);
        Map<String, Integer> result = new HashMap<>();
        result.put("result", dbEntity == null ? 0 : 1);
        return result;
    }

    @DeleteMapping("/{nm}")
    public Map<String, Integer> delBoardFav(@PathVariable String nm) {
        Map<String, Integer> result = new HashMap<>();
        result.put("result", service.delWebtoonFav(nm));
        return result;
    }
}
