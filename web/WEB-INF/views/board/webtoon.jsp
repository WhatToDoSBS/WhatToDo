<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <div class="webtoon_box">
        <div class="choiceBtn_section">
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
            <button>완결</button>
            <button id="randomSubmitBtn" class="fun-btn">RANDOM</button>
        </div>
        <div class="result_box">
        </div>
    </div>
    <div id="recommand_box">
        <h3>이런 웹툰 어때요?
            <button class="crawlingBtn">크롤링</button>
        </h3>
        <ul class="recommend_section">
            <c:forEach var="item" items="${webtoonRecommandListRandom}">
                <div class="webtoonModalElement" data-nm="${item.nm}">
                    <li>
                        <img src="${item.img}" alt="">
                        <span>${item.nm}</span>
                        <span class="webtoonLink">작가 : ${item.writer}</span>
                        <span class="webtoonLink"><a href="${item.link}">>> 보러가기 <<</a></span>
                    </li>
                </div>
            </c:forEach>
        </ul>
    </div>
    <div class="naver_section">
        <ul>
            <c:forEach var="item" items="${webtoonListRandom}">
            <div class="webtoonModalElement" data-nm="${item.nm}">
                <li>
                    <div id="webtoon_img">
                        <img src="${item.img}">
                    </div>
                    <div id="webtoon_databox">
                        <span class="font-14px">${item.nm}</span>
                    </div>
                    <span class="webtoonLink webtoonWriter">작가 : ${item.writer}</span>
                    <span class="webtoonLink"><a href="${item.link}">>> 보러가기 <<</a></span>
                    <span class="webtoonInfoHidden webtoonWeekend">${item.weekend}</span>
                    <span class="webtoonInfoHidden webtoonIuser">${item.iuser}</span>
                </li>
            </div>
            </c:forEach>
    </div>

    <div id="modal" class="modal-overlay" style="display: none">
        <div class="modal-window">
            <div class="close-area">X</div>
            <div class="modalTitle">
                    웹툰 정보
            </div>
            <div class="modalContent">
            </div>
            <div class="gameLink">
            </div>
            <div>
                <form id="reviewFrm">
                    <input type="text" name="ctnt">
                    <input type="button" id="btn_submit" value="작성">
                </form>
            </div>
            <div id="review_list"></div>
        </div>
    </div>
</div>
