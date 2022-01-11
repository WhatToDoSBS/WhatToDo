package com.koreait.whattodo;

import com.koreait.whattodo.model.BoardCategoryEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommonMapper {
    List<BoardCategoryEntity> selMenuCategoryList();
}
