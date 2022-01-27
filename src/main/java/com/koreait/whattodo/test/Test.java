package com.koreait.whattodo.test;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Test {
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add(1);
        list.add(2);
        list.add(3);
        int num = randomNumOutput(list);
        System.out.println(list.size());
    }

    public static int randomNumOutput(List list) {
        Random random = new Random(); //랜덤 객체 생성(디폴트 시드값 : 현재시간)
        random.setSeed(System.currentTimeMillis()); // 시드값 설정을 따로 할수도 있음
        int randomNum = random.nextInt(list.size()); // 0부터 시작하므로 List는 인덱스가 0부터 시작하므로 1을 빼줌.
        return randomNum;
    }
}
