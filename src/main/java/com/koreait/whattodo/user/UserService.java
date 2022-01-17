package com.koreait.whattodo.user;

import com.koreait.whattodo.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper mapper;

    public int join(UserEntity entity) {
        return mapper.insUser(entity);
    }

    public int login(UserEntity entity) {
        UserEntity result = mapper.selUser(entity);
        if (result == null) {
            return 0; // 로그인 실패
        } else if (result.getUpw().equals(entity.getUpw())) {
            return 1; // 성공
        }
        return 2; // 비번 오류
    }
}
