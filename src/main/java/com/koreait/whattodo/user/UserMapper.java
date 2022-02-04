package com.koreait.whattodo.user;

import com.koreait.whattodo.model.UserEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    int insUser(UserEntity entity); // 회원가입

    UserEntity selUser(UserEntity entity); // 로그인
}
