package com.koreait.whattodo.user;

import com.koreait.whattodo.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/login")
    public void login() {}

    @PostMapping("/login")
    public String loginPost(UserEntity entity) {
        UserEntity result = service.login(entity);
        if (result == null) {
            return "redirect:/user/login";
        }
        return "redirect:/board/list";
    }

    @GetMapping("/join")
    public void join() {}

    @PostMapping("/join")
    public String joinPost(UserEntity entity) {
        int result = service.join(entity);
        if (result == 1) {
            return "redirect:/user/login";
        }
        return "redirect:/user/join";
    }
}
