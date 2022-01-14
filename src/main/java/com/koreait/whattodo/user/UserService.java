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

    public UserEntity login(UserEntity entity) {
        return mapper.selUser(entity);
    }
}
