<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--bootstrap--%>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link
        rel="stylesheet"
        href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>
<div class="main_box">
    <div class="left_section">
        <div class="recommend_section">
            <!-- Slider main container -->
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <span>뭐하Gee의 WEBTOON Pick</span>
                        <span>${randomWebtoon.nm}</span>
                        <div><img src="${randomWebtoon.img}" alt=""></div>
                    </div>
                    <div class="swiper-slide">
                        <span>뭐하Gee의 GAME Pick</span>
                    </div>
                    <div class="swiper-slide">
                        <span>뭐하Gee의 Pick</span>
                    </div>
                    ...
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
                    <label class="btn btn-light shadow-none" for="btnradio2">ALL RANK</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio3">RANDOM</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio4"><a href="/board/webtoon">WEBTOON</a></label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio5"><a href="/board/game">GAME</a></label>
                </div>
            </div>

            <div class="page_info">
                <div class="member_section info_section">
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

                <div class="tech_section info_section">
                    <div class="member_title title">
                        <h3>Tech</h3>
                    </div>
                    <div class="tech_list">
                        <ul>
                            <a href="">
                                <li>JAVA</li>
                            </a>
                            <a href="">
                                <li>Spring</li>
                            </a>
                            <a href="">
                                <li>JavaScript</li>
                            </a>
                            <a href="">
                                <li>REST API</li>
                            </a>
                            <a href="">
                                <li>NAVER API</li>
                            </a>
                        </ul>
                    </div>
                </div>
        </div>
    </div>

    </div>
</div>

<%-- swiper --%>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>