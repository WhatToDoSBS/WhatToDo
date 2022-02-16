package com.koreait.whattodo.game.like;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.BoardLikeEntity;
import com.koreait.whattodo.model.GameLikeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameLikeService {
    @Autowired
    private GameLikeMapper mapper;
    @Autowired
    private UserUtils userUtils;

    public int insGameLike(GameLikeEntity entity) {
        entity.setIuser(userUtils.getLoginUserPk());
        return mapper.insGameLike(entity);
    }

    public GameLikeEntity selGameLike(String gameNm) {
        return mapper.selGameLike(createGameLikeEntity(gameNm));
    }

    public GameLikeEntity gameLikeCount(GameLikeEntity entity) {
        return mapper.gameLikeCount(entity);
    }

    public int delGameLike(String gameNm) {
        return mapper.delGameLike(createGameLikeEntity(gameNm));
    }

    private GameLikeEntity createGameLikeEntity(String gameNm) {
        GameLikeEntity entity = new GameLikeEntity();
        entity.setGameNm(gameNm);
        entity.setIuser(userUtils.getLoginUserPk());
        return entity;
    }
}
