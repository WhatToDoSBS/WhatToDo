<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <h3><i class="fa-solid fa-heart"></i>${sessionScope.loginUser.nm}님의 좋아요</h3>
    <select class="form-select" aria-label="Default select example" id="select_form" name="select_form"
            onchange="changeVal(this.value)">
        <option value="1">전체</option>
        <option value="2">웹툰</option>
        <option value="3">게임</option>
        <option value="4">게시글</option>
    </select>
    <div class="myLike">
        <table class="table table-bordered">
            <tr style="background-color : lightgray">
                <th>게임 & 웹툰 & 게시판 제목</th>
                <th>누른 일자</th>
            </tr>
            <c:forEach var="item" items="${likeAll}">
                <tr class="likeAllList" data-iboard="${item.iboard}">
                    <td>${item.nm}</td>
                    <td>${item.rdt}</td>
                </tr>
            </c:forEach>
        </table>
    </div>


</div>

<div id="modal-like" class="modal modal-overlay">
    <div class="modal-window modal">
        <div class="modalTitle">오늘의 게임</div>
        <div class="close-area close text-important">X</div>
        <div class="selected-img"></div>
        <div class="modalContent"></div>
        <div class="gameLink"></div>
        <div class="heart_section">
            <div class="like_count"></div>
            <span><i id="likeBtn" class="far fa-heart fav_icon"></i></span>
        </div>
        <div class="modalContent">
            <div class="gameCmtList"></div>
            <div>
                <form id="gameCmtFrm" class="form-group">
                    <input class="form-control" id="gameCmtCtnt" type="text" name="ctnt">
                    <input style="font-weight: bolder; color: white" class="btn btn-outline-dark" type="button"
                           id="cmt_submit" value="나의 평가 쓰기">
                </form>
            </div>
        </div>
    </div>
</div>
