package com.koreait.whattodo.video;

import com.koreait.whattodo.model.VideoMovieEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface VideoMapper {
    void insertBoxOffice(List<VideoMovieEntity> entity);
}
