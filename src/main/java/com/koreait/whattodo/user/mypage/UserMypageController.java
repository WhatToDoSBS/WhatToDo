package com.koreait.whattodo.user.mypage;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserMypageController {
    @Autowired
    UserUtils userUtils = new UserUtils();
    @Autowired
    ReviewService reviewService = new ReviewService();

    @GetMapping("/mypage/main")
    public void main(Model model) {
        model.addAttribute("webtoonReviewMy",reviewService.selReviewWebtoonMy());
    }

    @GetMapping("/mypage/myreview")
    public void myreview(Model model) {
        model.addAttribute("webtoonReviewMy",reviewService.selReviewWebtoonMy());
    }
}
