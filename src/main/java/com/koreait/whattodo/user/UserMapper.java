package com.koreait.whattodo.user;

import com.koreait.whattodo.model.user.UserDto;
import com.koreait.whattodo.model.user.UserEntity;
import com.koreait.whattodo.model.user.UserVo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    int insUser(UserDto dto); // 회원가입

    UserVo selUser(UserDto dto); // 로그인
}
