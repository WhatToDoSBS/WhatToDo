<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
            <button class="crawlingBtn">크롤링</button>
        </div>
        <div class="result_box">
        </div>
    </div>
    <div id="recommand_box">
        <span class="webtoon_recommand_title">이런 웹툰 어때요?</span>

        <ul class="recommend_section">
            <c:forEach var="item" items="${webtoonRecommandListRandom}">
                <div class="card webtoonModalElement" id="card" data-nm="${item.nm}"
                     data-weekend="${item.weekend}"
                     data-iuser="${sessionScope.loginUser.iuser}"
                     data-writernm="${sessionScope.loginUser.nm}">
                    <img src="${item.img}" class="card-img-top">
                    <div class="card-body" id="card-body">
                        <span class="webtoonLink"><i class="fa-solid fa-heart-crack fav_icon"></i></span>
                        <span class="card-title card-nm" id="card-title">${item.nm}</span>
                        <span class="card-text card-writer" id="card-writer">${item.writer}</span>
                        <span class="card-text webtoonLink"><a href="${item.link}">>> 보러가기 <<</a></span>
                    </div>
                </div>
            </c:forEach>
        </ul>
    </div>
    <div class="naver_section">
        <ul>
            <c:forEach var="item" items="${webtoonListRandom}">
            <div class="webtoonModalElement"
                 data-nm="${item.nm}"
                 data-weekend="${item.weekend}"
                 data-iuser="${sessionScope.loginUser.iuser}"
            data-writernm="${sessionScope.loginUser.nm}">
                <li>
                    <div id="webtoon_img">
                        <img src="${item.img}">
                    </div>
                    <div id="webtoon_databox">
                        <span class="font-14px">${item.nm}</span>
                    </div>
                    <span class="webtoonLink"><i class="fa-solid fa-heart-crack"></i></span>
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
                    <input type="text" name="ctnt" class="reviewTextInput" placeholder="리뷰를 작성해주세요.">
                    <input type="button" id="btn_submit" value="작성">
                </form>
                <div id="review_list">

                </div>
            </div>

        </div>
    </div>
</div>
