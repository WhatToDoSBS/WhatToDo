<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<form action="" id="choiceBtnFrm">
    <!-- data 담아놓음 -->
    <div class="data"
         data-mecaRank="${requestScope.mecaRankList}"
         data-mecaRankNum="${requestScope.mecaRankList.rankNum}"
         data-mecaRankNm="${requestScope.mecaRankList.rankNm}"
         data-mecaRankCompany="${requestScope.mecaRankList.company}"
         data-steamRankNum="${requestScope.steamRankList.rankNum}"
         data-steamRankNm="${requestScope.steamRankList.rankNm}"
    ></div>
    <div class="choiceBtn_section">
        <div class="choiceBtn_section_line rating">
            <label id="rtLb">평가 :
                <button class="rtBtn">띵작</button>
                <button class="rtBtn">수작</button>
                <button class="rtBtn">중간 이상</button>
                <button class="rtBtn">망작</button>
            </label>
        </div>
        <div class="choiceBtn_section_line popular ">
            <label id="ppLb">인기 :
                <button class="ppBtn">많은</button>
                <button class="ppBtn">보통</button>
                <button class="ppBtn">적은</button>
            </label>
        </div>
        <div class="choiceBtn_section_line kinds">
            <label id="kdLb">종류 :
                <button class="kdBtn">RPG</button>
                <button class="kdBtn">FPS</button>
                <button class="kdBtn">MMORPG</button>
                <button class="kdBtn">리듬</button>
                <button class="kdBtn">생존</button>
                <button class="kdBtn">스포츠</button>
            </label>
        </div>
        <div class="choiceBtn_section_line theme">
            <label id="thmLb">테마 :
                <button class="thmBtn">오픈월드</button>
                <button class="thmBtn">생존</button>
                <button class="thmBtn">애니메이션</button>
                <button class="thmBtn">우주</button>
            </label>
        </div>
        <div class="choiceBtn_section_line playerNum">
            <label id="pnLb">플레이어수 :
                <button class="pnBtn">나 혼자</button>
                <button class="pnBtn">단 둘이</button>
                <button class="pnBtn">에블바디</button>
            </label>
        </div>
    </div>
    <div class="search_section">
        <button type="button" class="fun-btn">뭐하Gee?</button>
    </div>
</form>
<div class="display_result">
    <span class="result_span"></span>
</div>