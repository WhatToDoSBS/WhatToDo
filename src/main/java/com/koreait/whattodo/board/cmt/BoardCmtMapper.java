package com.koreait.whattodo.board.cmt;

import com.koreait.whattodo.model.BoardCmtEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardCmtMapper {
    int insBoardCmt(BoardCmtEntity entity);
}
