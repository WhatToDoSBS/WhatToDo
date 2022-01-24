<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="left_section">
        <h3 class="title">오늘 뭐하Gee?</h3>
    <div class="recommend_section">
        <div class="flex-center flex-direction-column ranking">
            <div class="ranking_title">게임</div>
            <div>이 게임 어때요? ${requestScope.randomGame}</div>
        </div>
        <div class="flex-center flex-direction-column ranking">
            <div class="ranking_title">유튜브</div>
            <div><img src="/res/img/board/youtube.jpg" alt="" class="random_img"></div>
        </div>
        <div class="flex-center flex-direction-column ranking">
            <div class="ranking_title">넷플릭스</div>
            <div><img src="/res/img/board/netflix.jpg" alt="" class="random_img"></div>
        </div>
        <div class="flex-center flex-direction-column ranking">
            <div class="ranking_title">책</div>
            <div><img src="/res/img/board/book.jpg" alt="" class="random_img"></div>
        </div>
        <div class="flex-center flex-direction-column ranking">
            <div class="ranking_title">액티비티</div>
            <div><img src="/res/img/board/activity.jpg" alt="" class="random_img"></div>
        </div>
        <div class="flex-center flex-direction-column ranking">
            <div class="ranking_title">아무거나</div>
            <div><img src="/res/img/board/random.jpg" alt="" class="random_img"></div>
        </div>
    </div>


</div>
<div class="right_section">
    <div class="member_section">
        <div class="member_title title">
            <h3>Member</h3>
        </div>
        <div class="member_list">
            <ul>
                <a href="">
                    <li>김태준</li>
                </a>
                <a href="">
                    <li>손주영</li>
                </a>
                <a href="">
                    <li>최성완</li>
                </a>
            </ul>
        </div>
    </div>
    <div class="tech_section">
        <div class="tech_title title">
            <h3>Tech</h3>
        </div>
        <div class="tech_list">
            <button>Java</button>
            <button>Javascript</button>
            <button>Spring</button>
            <button>Jsp</button>
            <button>MariaDB</button>
        </div>
    </div>
</div>