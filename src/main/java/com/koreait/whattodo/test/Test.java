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

        int num2 = randomNumOutput(list);
        int num3 = randomNumOutput(list);

        System.out.println(num2);
        System.out.println(num3);

    }

    public static int randomNumOutput(List list) {
        Random random = new Random(); //랜덤 객체 생성(디폴트 시드값 : 현재시간)
        return random.nextInt(list.size());
    }
}
