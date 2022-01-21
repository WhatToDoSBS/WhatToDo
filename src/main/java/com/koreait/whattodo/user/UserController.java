package com.koreait.whattodo.user;

import com.koreait.whattodo.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/login")
    public void login() {}

    @PostMapping("/login")
    public String loginPost(UserEntity entity, HttpSession session, Model model) {
        UserEntity loginUser = (UserEntity) session.getAttribute("loginUser");
        // 로그인한 유저의 경우 로그인창으로 접근 막음
        if (loginUser != null) {
            return "redirect:/board/list";
        }

        int result = service.login(entity);
        switch (result) {
            case 1:
                return "redirect:/board/list";
            case 2:
                model.addAttribute("msg", "로그인에 실패하였습니다.");
                return "redirect:/user/login";
        }
        model.addAttribute("msg", "계정이 존재하지 않습니다.");
        return "redirect:/user/login";
    }

    @GetMapping("/logout")
    public String logout(HttpSession hs) {
        hs.invalidate();
        return "redirect:/user/login";
    }

    @GetMapping("/join")
    public void join() {}

    @PostMapping("/join")
    public String joinPost(UserEntity entity, HttpSession session, Model model) {
        UserEntity loginUser = (UserEntity) session.getAttribute("loginUser");
        // 로그인 세션을 가져와서 로그인한 유저일경우 회원가입접근 막음
        if (loginUser != null) {
            return "redirect:/board/list";
        }

        int result = service.join(entity);
        if (result == 1) {
            return "redirect:/user/login";
        }
        model.addAttribute("msg", "회원가입에 실패하였습니다.");
        return "redirect:/user/join";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/user/login";
    }

}
