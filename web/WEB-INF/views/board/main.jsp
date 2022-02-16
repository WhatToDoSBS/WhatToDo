<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!-- 현재 날짜 사용시 -->
<%--bootstrap--%>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link
        rel="stylesheet"
        href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>
<jsp:useBean id="now" class="java.util.Date"/>
<fmt:formatDate value="${now}" pattern="yyyy-MM-dd HH:mm:ss" var="today"/>

<!-- Code -->
<div class="main_box">
    <div class="left_section">
        <div class="recommend_section">
            <!-- Slider main container -->
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <span>${randomWebtoon.nm}</span>
                        <div><a href="${randomWebtoon.link}"><img src="${randomWebtoon.img}" alt=""></a></div>
                    </div>
                    <div class="swiper-slide">
                        <span>${randomGame.gameNm}</span>
                        <div><a href="${randomGame.selLink}"><img src="${randomGame.imgsrc}" alt=""></a></div>
                    </div>
                    <div class="swiper-slide">
                        <c:forEach var="item" items="${weeklyMovieList}" begin="0" end="0">
                        <span>영화관 가서 ${item.movieNm} 어때요?</span>
                            <div>
                                <a href="https://www.cgv.co.kr/"><img src="${item.img}" alt=""></a>
                            </div>
                        </c:forEach>
                    </div>
                </div>


                <!-- If we need pagination -->
                <div class="swiper-pagination" id="pagination"></div>

                <!-- If we need navigation buttons -->
                <%--                <div class="swiper-button-prev"></div>--%>
                <%--                <div class="swiper-button-next"></div>--%>

                <!-- If we need scrollbar -->
                <%--<div class="swiper-scrollbar"></div>--%>
            </div>
            <!-- Button Box -->
            <div class="button-group">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                    <label class="btn btn-light shadow-none" for="btnradio1"><a href="/board/list">자유게시판</a></label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio2"><a href="">순위</a> </label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio3"><a href="">RANDOM</a></label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio4"><a href="/board/webtoon">웹툰</a></label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio5"><a href="/board/game">게임</a></label>
                </div>
            </div>
        </div>
    </div>
    <div class="page_info">
        <div class="member_section">
            <h4><i class="fa-solid fa-address-card"></i>Member</h4>
            <div class="flex-center">
                <ul>
                    <li>
                        <img src="/res/img/profile_taejun.jpg" alt="">
                        <div class="member_info">
                            <div class="member_name">
                                <span>김태준</span>
                            </div>

                            <ul>
                                <li>전체적인 구성/디자인(CSS) 담당</li>
                                <li>RANDOM, 크롤링 Logic 구현</li>
                                <li>Webtoon, Youtube, Main Part</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <img src="/res/img/profile_taejun.jpg" alt="">
                        <div class="member_info">
                            <div class="member_name">
                                <span>최성완</span>
                            </div>
                            <ul>
                                <li>한 일</li>
                                <li>한 일</li>
                                <li>한 일</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <img src="/res/img/profile_taejun.jpg" alt="">
                        <div class="member_info">
                            <div class="member_name">
                                <span>손주영</span>
                            </div>
                            <ul>
                                <li>한 일</li>
                                <li>한 일</li>
                                <li>한 일</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="rank_section">
            <div class="game_rank">
                <div class="rank_title">
                    <div class="rank_title_left">
                        <h4><i class="fa-solid fa-gamepad"></i>Hot Game</h4>
                        <span><c:out value="${today}"/>기준</span>
                    </div>

                    <a href="/board/game"><span>보러가기</span></a>
                </div>
                <ul>
                    <c:forEach var="item" items="${gameList}" begin="0" end="4">
                        <li>
                            <div>
                                <a href="${item.selLink}"><img src="${item.imgsrc}" alt=""></a>
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
            <div class="webtoon_rank">

                <div class="rank_title">
                    <div class="rank_title_left">
                        <h4><i class="fa-solid fa-pager"></i></i>이 웹툰들 어때요?</h4>
                    </div>

                    <a href="/board/webtoon"><span>보러가기</span></a>
                </div>
                <ul>
                    <c:forEach var="item" items="${webtoonListRandom}" begin="0" end="4">
                        <li>
                            <div>
                                <a href="${item.link}"><img src="${item.img}" alt=""></a>
                            </div>
                            <div class="rank_info rank_info_webtoon">
                                <span>${item.nm}</span>
                                <span>${item.writer}</span>
                            </div>
                        </li>
                    </c:forEach>
                </ul>
            </div>

        </div>
        <div class="youtube_section">
            <div class="youtube_section_title"><h4><i class="fa-brands fa-youtube"></i>이런 Youtube는 어때?</h4></div>
            <div id="video_section">

            </div>
        </div>

    </div>
</div>

<%-- swiper --%>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>