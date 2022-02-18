package com.koreait.whattodo.user.mypage;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.board.fav.FavWebtoonService;
import com.koreait.whattodo.game.cmt.GameCmtService;
import com.koreait.whattodo.model.user.UserPagingDTO;
import com.koreait.whattodo.model.user.UserPagingMaker;
import com.koreait.whattodo.review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
public class UserMypageController {
    @Autowired
    UserUtils userUtils = new UserUtils();
    @Autowired
    ReviewService reviewService = new ReviewService();
    @Autowired
    FavWebtoonService favWebtoonService = new FavWebtoonService();
    @Autowired
    GameCmtService gameCmtService = new GameCmtService();

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
    public void myreview(Model model, UserPagingDTO dto) {
        UserPagingMaker pageMaker = new UserPagingMaker();
        pageMaker.setUserPagingDTO(dto);
        pageMaker.setTotalCount(reviewService.selReviewAllMy().size());

        if(dto.getCategory()==2) {
            model.addAttribute("pageList", reviewService.selReviewWebtoonMyPaging(dto));
        } else if(dto.getCategory()==3) {
            model.addAttribute("pageList", reviewService.selReviewGameMyPaging(dto));
        } else {
            model.addAttribute("pageList", reviewService.selReviewAllMyPaging(dto));
        }

        model.addAttribute("pageMaker", pageMaker);
    }

    @GetMapping("/mypage/myfav")
    public void myfav(Model model) {
        model.addAttribute("webtoonFavMy",favWebtoonService.selWebtoonMyFav());
    }
}
