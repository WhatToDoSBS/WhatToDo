package com.koreait.whattodo.user.mypage;

import com.koreait.whattodo.model.ReviewEntity;
import com.koreait.whattodo.model.user.UserEntity;
import com.koreait.whattodo.review.ReviewService;
import com.koreait.whattodo.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user/kakao")
public class UserApiController {
    @Autowired
    private UserService userService;

    @PostMapping
    public Map<String, Integer> insReviewWebtoon(@RequestBody UserEntity entity) {
        Map<String, Integer> result = new HashMap<>();
        result.put("result", userService.join(entity));
        return result;
    }
}
