package com.koreait.whattodo.user;

import com.koreait.whattodo.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserMypageController {
    @Autowired
    UserUtils userUtils = new UserUtils();

    @GetMapping("/infomain")
    public String infomain() {
        if(userUtils.getLoginUser()==null) {
            return "redirect:/board/main";
        }
    }
}
