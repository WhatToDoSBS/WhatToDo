package com.koreait.whattodo.user;

import com.koreait.whattodo.model.user.UserDto;
import com.koreait.whattodo.model.user.UserEntity;
import com.koreait.whattodo.model.user.UserVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    int insUser(UserDto dto); // 회원가입

    void insAutoLoginKey(@Param("key") String key,
                         @Param("uid") String uid,
                         @Param("day") int day); // 자동로그인 키 생성

    void delAutoLoginKey(@Param("key") String key); // 자동로그인 키 만료

    UserVo selUser(UserEntity entity); // 로그인
}
