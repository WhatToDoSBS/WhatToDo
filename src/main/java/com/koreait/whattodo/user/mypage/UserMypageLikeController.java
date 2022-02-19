package com.koreait.whattodo.user.mypage;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.board.like.LikeMapper;
import com.koreait.whattodo.game.like.GameLikeMapper;
import com.koreait.whattodo.model.BoardLikeEntity;
import com.koreait.whattodo.model.GameCmtEntity;
import com.koreait.whattodo.model.GameLikeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mypage/like")
public class UserMypageLikeController {

    @Autowired
    UserUtils userUtils;

    @Autowired
    GameLikeMapper gameLikeMapper;

    @Autowired
    LikeMapper likeMapper;

    @GetMapping("/game")
    public List<GameLikeEntity> gameLikeMyList(GameLikeEntity entity) {
        return gameLikeMapper.selGameLikeList(entity);
    }

    @GetMapping("/board")
    public List<BoardLikeEntity> boardLikeMyList(BoardLikeEntity entity) {
        return likeMapper.selBoardLikeList(entity);
    }

    @GetMapping("/all")
    public List<BoardLikeEntity> allLikeMyList(BoardLikeEntity entity) {
        return likeMapper.selAllLikeList(entity);
    }
}
