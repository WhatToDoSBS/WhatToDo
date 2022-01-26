package com.koreait.whattodo.webtoon;

import com.koreait.whattodo.model.WebtoonEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface WebtoonMapper {
    // 네이버
    void insertWebtoon(List<WebtoonEntity> webtoonList);
    void delWebtoon();
    List<WebtoonEntity> webtoonList();
}
