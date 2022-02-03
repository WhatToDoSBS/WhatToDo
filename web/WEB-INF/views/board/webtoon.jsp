<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <div id="recommand_box">
        <h3>이 웹툰 어때요?</h3>
        <ul class="recommend_section">
            <c:forEach var="item" items="${webtoonRecommandListRandom}">
                <div>
                    <li>
                        <a href="${item.link}">
                            <img src="${item.img}" alt=""></a>
                        <span><a href="${item.link}">${item.nm}</a></span>
                    </li>
                </div>
            </c:forEach>
            <c:forEach var="item" items="${nodatabaseWebtoonList}">
                <div id="webtoon_databox">
                    <li>
                        <a href="${item.link}">
                            <img src="${item.img}" alt=""></a>
                        <span><a href="${item.link}">${item.nm}</a></span>
                    </li>
                </div>
            </c:forEach>
        </ul>
    </div>
    <div class="webtoon_box">
        <div class="button_box">
            <label for="">장르</label>
            <button>일상</button>
            <button>개그</button>
            <button>판타지</button>
            <button>액션</button>
            <button>드라마</button>
            <button>순정</button>
            <button>감성</button>
            <button>스릴러</button>
            <button>시대극</button>
            <button>스포츠</button>
        </div>
        <div class="naver_section">
            <ul>
                <c:forEach var="item" items="${webtoonListRandom}">
                    <li>
                        <div id="webtoon_img">
                            <a href="${item.link}"><img src="${item.img}" alt=""></a>
                        </div>
                        <div id="webtoon_databox">
                            <a href="${item.link}"><span class="font-14px webtoon_nm">${item.nm}</span></a>
                        </div>
                    </li>
                </c:forEach>
        </div>
    </div>
    <button class="crawlingBtn">크롤링</button>
</div>
