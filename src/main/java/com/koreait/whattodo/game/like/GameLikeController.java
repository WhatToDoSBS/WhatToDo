package com.koreait.whattodo.game.like;

import com.koreait.whattodo.model.BoardLikeEntity;
import com.koreait.whattodo.model.GameLikeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/game/like")
public class GameLikeController {

    @Autowired
    private GameLikeService service;

    @PostMapping
    public Map<String, Integer> insGameLike(@RequestBody GameLikeEntity entity) {
        Map<String, Integer> result = new HashMap<>();
        result.put("result", service.insGameLike(entity));
        return result;
    }

    @GetMapping("/{gameNm}")
    public Map<String, Integer> isLike(@PathVariable String gameNm) {
        GameLikeEntity entity = service.selGameLike(gameNm);
        int count = service.gameLikeCount(entity).getCount();
        Map<String, Integer> result = new HashMap<>();
        result.put("result", entity == null ? 0 : 1);
        result.put("count", count);
        return result;
    }

    @DeleteMapping("/{gameNm}")
    public Map<String, Integer> delGameLike(@PathVariable String gameNm) {
        Map<String, Integer> result = new HashMap<>();

        GameLikeEntity entity = service.selGameLike(gameNm);
        int count = service.gameLikeCount(entity).getCount();

        result.put("result", service.delGameLike(gameNm));
        result.put("count", count);
        return result;
    }
}
