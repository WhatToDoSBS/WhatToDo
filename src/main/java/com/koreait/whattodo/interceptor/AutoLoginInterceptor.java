package com.koreait.whattodo.interceptor;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.user.UserDto;
import com.koreait.whattodo.model.user.UserEntity;
import com.koreait.whattodo.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class AutoLoginInterceptor implements HandlerInterceptor {
    private final UserService service;
    private final UserUtils userUtils;

    @Autowired
    public AutoLoginInterceptor(UserService service, UserUtils userUtils) {
        this.service = service;
        this.userUtils = userUtils;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        UserEntity entity = userUtils.getLoginUser();
        if (entity == null && request.getCookies() != null) {
            Cookie autoLoginCookie = null;
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals("loginKey")) {
                    autoLoginCookie = cookie;
                }
            }
            if (autoLoginCookie != null) {
                entity = service.login(autoLoginCookie.getValue());
                if (entity != null) {
                    userUtils.setLoginUser(entity);

                    service.updAutoLoginKey(autoLoginCookie.getValue());
                    autoLoginCookie.setMaxAge(60*60*24*UserService.Config.AUTO_LOGIN_KEY_EXPIRY_DATE);
                    autoLoginCookie.setPath("/");
                    response.addCookie(autoLoginCookie);
                    if (request.getRequestURI().equals("/user/login") || request.getRequestURI().equals("/user/join")) {
                            response.sendRedirect("/board/main");
                            return false;
                    }
                }
            }
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
