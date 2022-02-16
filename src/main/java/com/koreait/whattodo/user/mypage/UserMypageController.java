package com.koreait.whattodo.user.mypage;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.board.fav.FavWebtoonService;
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
    @Autowired
    FavWebtoonService favWebtoonService = new FavWebtoonService();

    @GetMapping("/mypage/main")
    public String main(Model model) {
        model.addAttribute("webtoonReviewMy",reviewService.selReviewWebtoonMy());
        model.addAttribute("webtoonFavMy",favWebtoonService.selWebtoonMyFav());
        if(userUtils.getLoginUserPk()!=0) {
            return "user/mypage/main";
        }
        return "redirect:/user/login";
    }

    @GetMapping("/mypage/myreview")
    public void myreview(Model model) {
        model.addAttribute("webtoonReviewMy",reviewService.selReviewWebtoonMy());

    }

    @GetMapping("/mypage/myfav")
    public void myfav(Model model) {
        model.addAttribute("webtoonFavMy",favWebtoonService.selWebtoonMyFav());
    }
}
