package com.koreait.whattodo.crawling;

import com.koreait.whattodo.model.CrawlingMecaRankEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CrawlingMapper {
    public void insertName(List<CrawlingMecaRankEntity> list);
}
