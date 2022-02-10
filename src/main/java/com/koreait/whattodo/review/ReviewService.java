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

    public ReviewEntity insReviewWebtoon(ReviewEntity entity) {
        entity.setIuser(userUtils.getLoginUserPk());
        entity.setNickname(userUtils.getLoginUserNm());
        reviewMapper.insReviewWebtoon(entity);
        return entity;
    }

    public List<ReviewEntity> selReviewWebtoon(String nm) {
        ReviewEntity entity = new ReviewEntity();
        entity.setNm(nm);
        return reviewMapper.selReviewWebtoon(entity);
    }

    public List<ReviewEntity> selReviewWebtoonMy() {
        ReviewEntity entity = new ReviewEntity();
        entity.setIuser(userUtils.getLoginUserPk());
        return reviewMapper.selReviewWebtoonMy(entity);
    }

    public int delReviewWebtoon(int rnum) {
        ReviewEntity entity = new ReviewEntity();
        entity.setRnum(rnum);
        entity.setIuser(userUtils.getLoginUserPk());
        return reviewMapper.delReviewWebtoon(entity);
    }

    public int updReviewWebtoon(ReviewEntity entity) {
        entity.setIuser(userUtils.getLoginUserPk());
        return reviewMapper.updReviewWebtoon(entity);
    }
}
