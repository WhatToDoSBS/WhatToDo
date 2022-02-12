package com.koreait.whattodo.board.fav;

import com.koreait.whattodo.model.FavWebtoonEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FavMapper {
    int insWebtoonFav(FavWebtoonEntity entity);
    FavWebtoonEntity selWebtoondFav(FavWebtoonEntity entity);
    int delWebtoonFav(FavWebtoonEntity entity);
}
