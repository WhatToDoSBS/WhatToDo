package com.koreait.whattodo.review;

import com.koreait.whattodo.model.ReviewEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board/review")
public class ReviewController {
    @Autowired private ReviewService reviewService;

    @PostMapping
    public Map<String, Integer> insReviewWebtoon(@RequestBody ReviewEntity entity) {
        System.out.println(entity);
        Map<String, Integer> result = new HashMap<>();
        result.put("result", reviewService.insReviewWebtoon(entity));
        return result;
    }

    @GetMapping("/{nm}")
    public List<ReviewEntity> selReviewWebtoonList(@PathVariable ReviewEntity entity) {
        System.out.println("nm : " + entity.getNm());
        return reviewService.selReviewWebtoon(entity);
    }
}
