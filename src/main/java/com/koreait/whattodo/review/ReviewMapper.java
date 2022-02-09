package com.koreait.whattodo.review;

import com.koreait.whattodo.model.ReviewEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {
    int insReviewWebtoon(ReviewEntity entity);
    List<ReviewEntity> selReviewWebtoon(ReviewEntity entity);
    int delReviewWebtoon(ReviewEntity entity);
    int updReviewWebtoon(ReviewEntity entity);
}
