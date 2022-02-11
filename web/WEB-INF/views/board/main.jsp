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
                        <span>${randomWebtoon.nm}</span>
                        <div><a href="${randomWebtoon.link}"><img src="${randomWebtoon.img}" alt=""></a></div>
                    </div>
                    <div class="swiper-slide">
                        <span>${randomGame.gameNm}</span>
                        <div><a href="${randomGame.selLink}"><img src="${randomGame.imgsrc}" alt=""></a></div>
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
                    <label class="btn btn-light shadow-none" for="btnradio2"><a href="">순위</a> </label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio3"><a href="">RANDOM</a></label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio4"><a href="/board/webtoon">웹툰</a></label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                    <label class="btn btn-light shadow-none" for="btnradio5"><a href="/board/game">게임</a></label>
                </div>
            </div>

            <div class="page_info">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" dat    a-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                김태준
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                주무기 : JAVA / JAVASCRIPT
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                        <ul>
                                <li>
                                    <img src="/res/img/profile_taejun.jpg" alt="">
                                    <div><span>김태준</span></div>
                                </li>
                            <a href="">

                                <li>
                                    <img src="/res/img/profile_taejun.jpg" alt="">
                                    <div><span>손주영</span></div>
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <img src="/res/img/profile_taejun.jpg" alt="">
                                    <div><span>최성완</span></div>
                                </li>
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