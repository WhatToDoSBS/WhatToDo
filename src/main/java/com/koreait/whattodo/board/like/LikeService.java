package com.koreait.whattodo.board.like;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.BoardLikeEntity;
import com.koreait.whattodo.model.GameLikeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    @Autowired
    private LikeMapper mapper;
    @Autowired
    private UserUtils userUtils;

    public int insBoardLike(BoardLikeEntity entity) {
        entity.setIuser(userUtils.getLoginUserPk());
        return mapper.insBoardLike(entity);
    }

    public BoardLikeEntity selBoardLike(int iboard) {
        return mapper.selBoardLike(createBoardLikeEntity(iboard));
    }

    public BoardLikeEntity boardLikeCount(BoardLikeEntity entity) {
        return mapper.boardLikeCount(entity);
    }

    public int delBoardLike(int iboard) {
        return mapper.delBoardLike(createBoardLikeEntity(iboard));
    }

    private BoardLikeEntity createBoardLikeEntity(int iboard) {
        BoardLikeEntity entity = new BoardLikeEntity();
        entity.setIboard(iboard);
        entity.setIuser(userUtils.getLoginUserPk());
        return entity;
    }
}
