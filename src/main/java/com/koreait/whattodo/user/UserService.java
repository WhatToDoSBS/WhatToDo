package com.koreait.whattodo.user;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.UserEntity;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class UserService {

    @Autowired
    private UserMapper mapper;

    @Autowired
    private UserUtils userUtils;

    public int join(UserEntity entity) {
        UserEntity copyEntity = new UserEntity();
        BeanUtils.copyProperties(entity, copyEntity);

        String hashPw = BCrypt.hashpw(copyEntity.getUpw(), BCrypt.gensalt());
        copyEntity.setUpw(hashPw);
        return mapper.insUser(copyEntity);
    }

    public int idChk(String uid) {
        UserEntity entity = new UserEntity();
        entity.setUid(uid);
        UserEntity result = mapper.selUser(entity);
        return result == null ? 1 : 0;
    }

    public int login(UserEntity entity) {
        UserEntity dbUser = null;

        try {
            dbUser = mapper.selUser(entity);
        } catch (Exception e) {
            e.printStackTrace();
            return 0; // 알 수 없는 에러
        }

        if (dbUser == null) {
            return 2; // 계정없음
        } else if (BCrypt.checkpw(entity.getUpw(), dbUser.getUpw())) {
            userUtils.setLoginUser(dbUser);
            return 1; // 성공
        }
        return 3; // 비번 오류
    }
}
