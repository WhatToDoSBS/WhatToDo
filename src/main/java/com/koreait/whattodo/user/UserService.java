package com.koreait.whattodo.user;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.enums.user.LoginEnum;
import com.koreait.whattodo.model.user.UserDto;
import com.koreait.whattodo.model.user.UserEntity;
import com.koreait.whattodo.model.user.UserVo;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class UserService {

    @Autowired
    private UserMapper mapper;

    @Autowired
    private UserUtils userUtils;

    public static class Config{
        public static final int AUTO_LOGIN_KEY_EXPIRY_DATE = 7;
    }

    private static class Regex { // 정규식
        private static final String ID = "^([a-zA-Z0-9]{4,15})$";
        private static final String PASSWORD = "^([a-zA-Z0-9!@_]{4,20})$";
    }

    public static boolean checkUid (String uid) { // uid 정규식 체크
        return uid.matches(Regex.ID);
    }

    public static boolean checkUpw (String upw) { // upw 정규식 체크
        return upw.matches(Regex.PASSWORD);
    }

    public int join(UserEntity entity) { // 회원가입 로직
        UserDto copyEntity = new UserDto();
        BeanUtils.copyProperties(entity, copyEntity);

        String hashPw = BCrypt.hashpw(copyEntity.getUpw(), BCrypt.gensalt());
        copyEntity.setUpw(hashPw); // 비밀번호 해시화 해서 넣음
        return mapper.insUser(copyEntity);
    }

    public int idChk(String uid) { // 아이디 중복검사
        if (uid.length() < 4) { // 글자수 4자리 이상이여야 함
            return 2;
        }
        UserDto dto = new UserDto();
        dto.setUid(uid);
        UserVo result = mapper.selUser(dto);
        return result == null ? 1 : 0; // 계정이 없을시 사용가능
    }

    public UserVo login(UserDto dto) { // 로그인 로직
        UserVo vo = new UserVo();
        if (!UserService.checkUid(dto.getUid())) { // 정규식 검사
            vo.setLoginResult(LoginEnum.UID_REGEX_ERR);
            return vo; // 정규식 id 오류
        } else if (!UserService.checkUpw(dto.getUpw())) {
            vo.setLoginResult(LoginEnum.UPW_REGEX_ERR);
            return vo; // 정규식 pw 오류
        }

        try {
            vo = mapper.selUser(dto);
        } catch (Exception e) {
            e.printStackTrace();
            vo.setLoginResult(LoginEnum.FAILURE);
            return vo; // 알 수 없는 에러
        }

        if (vo.getUid() == null) {
            vo.setLoginResult(LoginEnum.UID_ERR);
            return vo; // 계정없음(아이디 오류)
        } else if (BCrypt.checkpw(dto.getUpw(), vo.getUpw())) {
            vo.setLoginResult(LoginEnum.SUCCESS);
            userUtils.setLoginUser(vo);
            return vo; // 성공
        }
        vo.setLoginResult(LoginEnum.UPW_ERR);
        return vo; // 비번 오류
    }

    public void insAutoLoginKey(UserVo vo) {
        String key = String.format("%s%s%s%f",
                vo.getUid(),
                vo.getUpw(),
                new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()),
                Math.random()); // String.format(uid+upw+생성날짜+0~9랜덤숫자1개)

        key = BCrypt.hashpw(key, BCrypt.gensalt()); // 암호화로 키생성
        mapper.insAutoLoginKey(key, vo.getUid(), Config.AUTO_LOGIN_KEY_EXPIRY_DATE);
        vo.setAutoLoginKey(key);
    }
}
