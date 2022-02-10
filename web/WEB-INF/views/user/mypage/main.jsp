<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<div class="container">
    <div class="row row-cols-2">
        <div class="col info">
            <div class="card" style="width: 18rem;">
                <div class="card-body info_profileCard">
                    <h5 class="card-title">Profile Card</h5>
                    <div>
                        <img src="/res/img/board/lol.jpg" alt="" class="wh-80 circular--img">
                        <span class="nickname">별명 : ${sessionScope.loginUser.nm}</span>
                    </div>
                    <div class="btn-link">
                        <a href="#" class="card-link"><button>수정</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col info"><div class="card" style="width: 18rem;">
            <div class="card-body info_profileCard">
                <h5 class="card-title">사용자 정보</h5>
                <div>
                    <img src="/res/img/board/lol.jpg" alt="" class="wh-80 circular--img">
                    <span class="nickname">별명 : </span>
                </div>
                <div class="btn-link">
                    <a href="#" class="card-link"><button>수정</button></a>
                </div>
            </div>
        </div></div>
        <div class="col info">
            <div class="card" style="width: 18rem;">
                <div class="card-body info_profileCard">
                    <h5 class="card-title">비밀번호 변경</h5>
                    <div>
                        <img src="/res/img/board/lol.jpg" alt="" class="wh-80 circular--img">
                        <span class="nickname">별명 : </span>
                    </div>
                    <div class="btn-link">
                        <a href="#" class="card-link"><button>수정</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col info">
            <div class="card" style="width: 18rem;">
                <div class="card-body info_profileCard">
                    <h5 class="card-title">Click History</h5>
                    <div>
                        최근 평가
                    </div>
                    <div>
                        <c:forEach var="item" items="${webtoonReviewMy}" begin="0" end="0">
                            <span>${item.nm} | </span>
                            <span>${item.ctnt}</span>
                        </c:forEach>
                    </div>
                    <div class="btn-link">
                        <a href="/user/mypage/myreview" class="card-link"><button>확인하기</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>