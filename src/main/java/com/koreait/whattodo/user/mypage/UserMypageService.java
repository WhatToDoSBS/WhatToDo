package com.koreait.whattodo.user.mypage;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.user.UserVo;
import com.koreait.whattodo.model.user.mypage.ChaUpwEntity;
import com.koreait.whattodo.model.user.mypage.ChaUpwVo;
import com.koreait.whattodo.user.UserService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMypageService {

    @Autowired
    UserMypageMapper mapper;

    @Autowired
    UserUtils userUtils;

    public ChaUpwVo passwordChange(ChaUpwEntity entity) { // 패스워드 변경
        ChaUpwVo vo = new ChaUpwVo();
        if (!UserService.checkUpw(entity.getOldUpw()) ||
            !UserService.checkUpw(entity.getNewUpw()) ||
            !UserService.checkUpw(entity.getNewUpwChk())) {
            vo.setChaUpwResult("값을 올바르게 작성해 주세요.");
            return vo;
        }
        if (userUtils.getLoginUserPk() == 0) {
            vo.setChaUpwResult("잘못된 접근입니다.");
            return vo;
        }

        entity.setIuser(userUtils.getLoginUserPk());
        UserVo userVo = mapper.selUpw(entity);
        if (!BCrypt.checkpw(entity.getOldUpw(), userVo.getUpw())) {
            vo.setChaUpwResult("현재 비밀번호가 올바르지 않습니다.");
            return vo;
        }

        if (!entity.getNewUpw().equals(entity.getNewUpwChk())) {
            vo.setChaUpwResult("비밀번호와 비밀번호 확인이 같지 않습니다.");
            return vo;
        }
        entity.setNewUpw(BCrypt.hashpw(entity.getNewUpw(), BCrypt.gensalt()));

        try {
            mapper.updUpw(entity);
            vo.setChaUpwResult("성공");
        } catch (Exception e) {
            vo.setChaUpwResult("알 수 없는 오류로 실패하였습니다. 잠시 후 다시 시도해주세요.");
        }

        return vo;
    }
}
