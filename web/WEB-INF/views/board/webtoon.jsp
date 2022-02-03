<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <h1>웹툰</h1>
    <div id="recommand_box">
        <h3>추천 웹툰</h3>
        <ul class="recommend_section">
            <c:forEach var="item" items="${webtoonRecommandListRandom}">
                <li><img src="${item.img}" alt="">
                    <span><b>${item.nm}</b></span>
                    <span>${item.rating}</span></li>
            </c:forEach>
        </ul>
    </div>
    <div class="webtoon_box">
        <div class="naver_section">
            <ul>
                <c:forEach var="item" items="${webtoonListRandom}">
                    <div id="webtoon_databox">
                        <li><img src="${item.img}" alt=""></li>
                        <li class="font-14px webtoon_nm">${item.nm}</li>
                    </div>
                </c:forEach>
            </ul>
        </div>
        <div class="kakao_section">
            <ul>
                <c:forEach var="item" items="${nodatabaseWebtoonList}">
                    <div id="webtoon_databox">
                        <li><img src="${item.img}" alt=""></li>
                        <li class="font-14px webtoon_nm">${item.nm}</li>
                    </div>
                </c:forEach>
            </ul>
        </div>
    </div>
    <button class="crawlingBtn">크롤링</button>
</div>
