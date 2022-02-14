<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="now" class="java.util.Date"/>
<fmt:formatDate value="${now}" pattern="yyyy-MM-dd HH:mm:ss" var="today"/>
<style>
    @font-face {
        font-family: 'SDSamliphopangche_Outline';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
</style>
<div class="container">
    <div hidden id="data" data-iuser="${sessionScope.loginUser.iuser}"></div>
        <div class="choiceBtn_section">
            <div class="choiceBtn_section_line popular">
                <label id="ppLb"><p class="btLb" style= "display: inline-block; font-family: 'SDSamliphopangche_Outline'">인기</p>
                    <div class="btn-group">
                    <button class="ppBtn" style="margin-left: 15px">TOP</button>
                    <button class="ppBtn">GREAT</button>
                    <button class="ppBtn">GOOD</button>
                    </div>
                </label>
                    <button id="ppRanBtn">인기 RANDOM</button>
            </div>
            <div class="choiceBtn_section_line kinds">
                <label id="kdLb"><p class="btLb" style= "display: inline-block; font-family: 'SDSamliphopangche_Outline'">장르</p>
                    <div class="btn-group">
                    <button class="kdBtn" style="margin-left: 15px">RPG</button>
                    <button class="kdBtn">FPS</button>
                    <button class="kdBtn">스포츠 / 레이싱</button>
                    <button class="kdBtn">액션</button>
                    <button class="kdBtn">전략</button>
                    <button class="kdBtn">기타</button>
                    </div>
                </label>
                <button id="kdRanBtn">장르 RANDOM</button>
            </div>
            <div class="choiceBtn_section_line theme">
                <label id="pfLb"><p class="btLb" style= "display: inline-block; font-family: 'SDSamliphopangche_Outline'">플랫폼</p>
                    <div class="btn-group">
                    <button class="pfBtn" style="margin-left: 15px">MOBILE</button>
                    <button class="pfBtn">PC온라인</button>
                    <button class="pfBtn">스팀</button>
                    </div>
                </label>
                <button id="pfRanBtn">플랫폼 RANDOM</button>
            </div>
        </div>
        <div class="search_section">
            <button class="fun-btn">뭐하Gee?</button>
        </div>
    <div id="modal" class="modal-overlay" style="display: none">
        <div class="modal-window modal">
            <div class="modalTitle">오늘의 게임</div>
            <div class="close-area close text-important">X</div>
            <div class="selected-img"></div>
            <div class="modalContent"></div>
            <div class="gameLink"></div>
            <div class="gameCmtList"></div>
            <c:if test="${sessionScope.loginUser != null}">
                <div>
                    <form id="gameCmtFrm" class="form-group">
                        <input class="form-control" id="gameCmtCtnt" type="text" name="ctnt">
                        <input style="font-weight: bolder; color: white" class="btn btn-outline-dark" type="button" id="cmt_submit" value="나의 평가 쓰기">
                    </form>
                </div>
            </c:if>
        </div>
    </div>
</div>

<div class="rank_section">
    <div class="meca_game_rank">
        <h4>MECA TOP 50</h4>
        <ul>
            <c:forEach var="item" items="${gameList}" begin="0" end="49">
                <li>
                    <div>
                        <a href="${item.selLink}"><img style="width: 100px; height: 100px" src="${item.imgsrc}" alt=""></a>
                    </div>
                    <div class="rank_info rank_info_game">
                        <span>${item.rankNum}위</span>
                        <span>${item.gameNm}</span>
                        <span>${item.company}</span>
                    </div>
                </li>
            </c:forEach>
        </ul>
    </div>
        <div class="mobile_game_rank">
            <h4>MOBILE TOP 40</h4>
            <ul>
                <c:forEach var="item" items="${pfGameList}" begin="0" end="39">
                    <li>
                        <div>
                            <a href="${item.selLink}"><img style="width: 100px; height: 100px" src="${item.imgsrc}" alt=""></a>
                        </div>
                        <div class="rank_info rank_info_game">
                            <span>${item.rankNum}위</span>
                            <span>${item.gameNm}</span>
                            <span>${item.company}</span>
                        </div>
                    </li>
                </c:forEach>
            </ul>
        </div>
        <div class="pc_game_rank">
            <h4>PC TOP 40</h4>
            <ul>
                <c:forEach var="item" items="${pfGameList}" begin="40" end="79">
                    <li>
                        <div>
                            <a href="${item.selLink}"><img style="width: 100px; height: 100px" src="${item.imgsrc}" alt=""></a>
                        </div>
                        <div class="rank_info rank_info_game">
                            <span>${item.rankNum}위</span>
                            <span>${item.gameNm}</span>
                            <span>${item.company}</span>
                        </div>
                    </li>
                </c:forEach>
            </ul>
        </div>
        <div class="st_game_rank">
            <h4>STEAM TOP 40</h4>
            <ul>
                <c:forEach var="item" items="${pfGameList}" begin="80">
                    <li>
                        <div>
                            <a href="${item.selLink}"><img style="width: 100px; height: 100px" src="${item.imgsrc}" alt=""></a>
                        </div>
                        <div class="rank_info rank_info_game">
                            <span>${item.rankNum}위</span>
                            <span>${item.gameNm}</span>
                            <span>${item.company}</span>
                        </div>
                    </li>
                </c:forEach>
            </ul>
        </div>
</div>
