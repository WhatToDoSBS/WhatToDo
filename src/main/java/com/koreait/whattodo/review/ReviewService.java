package com.koreait.whattodo.review;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.ReviewEntity;
import com.koreait.whattodo.model.user.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired private ReviewMapper reviewMapper;
    @Autowired private UserUtils userUtils;

    public int insReviewWebtoon(ReviewEntity entity) {
        entity.setIuser(userUtils.getLoginUserPk());
        entity.setNickname(userUtils.getLoginUserNm());
        reviewMapper.insReviewWebtoon(entity);
        return entity.getRnum();
    }

    public List<ReviewEntity> selReviewWebtoon(String nm) {
        ReviewEntity entity = new ReviewEntity();
        entity.setNm(nm);
        return reviewMapper.selReviewWebtoon(entity);
    }

    public int delReviewWebtoon(ReviewEntity entity) {
        return reviewMapper.delReviewWebtoon(entity);
    }
}
