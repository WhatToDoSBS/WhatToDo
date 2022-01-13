package com.koreait.whattodo.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BoardCategoryEntity {
    private int icategory;
    private String nm;
    private String nmval;
    private int orderby;
}
