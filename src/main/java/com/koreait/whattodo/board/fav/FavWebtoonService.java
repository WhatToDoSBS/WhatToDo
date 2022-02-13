package com.koreait.whattodo.board.fav;

import com.koreait.whattodo.UserUtils;
import com.koreait.whattodo.model.FavWebtoonEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavWebtoonService {
    @Autowired
    private FavWebtoonMapper mapper;
    @Autowired private UserUtils userUtils;

    public int insWebtoonFav(FavWebtoonEntity entity) {
        entity.setIuser(userUtils.getLoginUserPk());
        return mapper.insWebtoonFav(entity);
    }

    public FavWebtoonEntity selWebtoondFav(String nm) {
        return mapper.selWebtoondFav(createBoardFavEntity(nm));
    }

    public int delWebtoonFav(String nm) {
        return mapper.delWebtoonFav(createBoardFavEntity(nm));
    }

    private FavWebtoonEntity createBoardFavEntity(String nm) {
        FavWebtoonEntity entity = new FavWebtoonEntity();
        entity.setNm(nm);
        entity.setIuser(userUtils.getLoginUserPk());
        return entity;
    }
}
