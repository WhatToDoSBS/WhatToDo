<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
    @font-face {
        font-family: 'SDSamliphopangche_Outline';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
</style>
<div class="container">
        <div class="choiceBtn_section">
<%--            <div class="choiceBtn_section_line rating">--%>
<%--                <label id="rtLb">평가--%>
<%--                    <button class="rtBtn">GOAT</button>--%>
<%--                    <button class="rtBtn">띵작</button>--%>
<%--                    <button class="rtBtn">수작</button>--%>
<%--                </label>--%>
<%--            </div>--%>
            <div class="choiceBtn_section_line popular">
                <label id="ppLb"><p class="btLb" style= "display: inline-block; font-family: 'SDSamliphopangche_Outline'">인기</p>
                    <button class="ppBtn" style="margin-left: 15px">TOP</button>
                    <button class="ppBtn">GREAT</button>
                    <button class="ppBtn">GOOD</button>
                </label>
                    <button id="ppRanBtn">RANDOM PICK</button>
            </div>
            <div class="choiceBtn_section_line kinds">
                <label id="kdLb"><p class="btLb" style= "display: inline-block; font-family: 'SDSamliphopangche_Outline'">장르</p>
                    <button class="kdBtn" style="margin-left: 15px">RPG</button>
                    <button class="kdBtn">FPS</button>
                    <button class="kdBtn">스포츠 / 레이싱</button>
                    <button class="kdBtn">액션</button>
                    <button class="kdBtn">전략</button>
                    <button class="kdBtn">기타</button>
                </label>
                <button id="kdRanBtn">RANDOM PICK</button>
            </div>
            <div class="choiceBtn_section_line theme">
                <label id="pfLb"><p class="btLb" style= "display: inline-block; font-family: 'SDSamliphopangche_Outline'">플랫폼</p>
                    <button class="pfBtn" style="margin-left: 15px">MOBILE</button>
                    <button class="pfBtn">PC온라인</button>
                    <button class="pfBtn">스팀</button>
                </label>
                <button id="pfRanBtn">RANDOM PICK</button>
            </div>
        </div>
        <div class="search_section">
            <button class="fun-btn">뭐하Gee?</button>
        </div>
    <div id="modal" class="modal-overlay" style="display: none">
        <div class="modal-window">
            <div class="modalTitle">
                오늘의 게임
            </div>
            <div class="close-area">X</div>
            <div class="selected-img">
            </div>
            <div class="modalContent">
            </div>
            <div class="gameLink">
            </div>
        </div>
    </div>
</div>