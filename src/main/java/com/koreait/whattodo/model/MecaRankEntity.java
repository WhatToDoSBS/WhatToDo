package com.koreait.whattodo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MecaRankEntity {
    private int irank;
    private String rankNum;
    private String rankNm;
    private String company;//아니다 이거는저거고 지금하는건
    private String imgsrc;
    private String selLink;
}
