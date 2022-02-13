<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="login_form">
    <h1>Login</h1>
<form class="login_container" method="post" action="/user/login" id="login-form">
    <div>ID : <input type="text" name="uid" class="login_input"></div>
    <div>PW : <input type="password" name="upw" class="login_input"></div>
    <div>
        <h5 class="err_msg_b">${requestScope.keymsg}</h5> <%--   아이디 또는 비밀번호가 일치하지 않습니다. <br>다시 시도해 주세요.     --%>
        <h5 class="err_msg_b">${requestScope.nmsg}</h5><%--   알 수 없는 이유로 로그인에 실패하였습니다.     --%>
        <h5 class="err_msg_b">${requestScope.rmsg}</h5><%--   아이디와 비밀번호를 바르게 작성해주세요.     --%>
    </div>
    <div>
        <label>
            <input type="checkbox" name="autoLogin"> 자동 로그인
        </label>
    </div>
    <div>
        <input class="login_btn" type="submit" value="Login">
    </div>
</form>
<div>
    <div><a>아이디</a> · <a>비밀번호찾기</a></div>
    <div><a href="/user/join">아직 계정이 없으신가요?</a></div>
</div>
    <div class="api_login">
        <ul>
            <img src="/res/img/kakao_login_medium_narrow.png" alt="" onclick="kakaoLogin();">
            <li onclick="kakaoLogout();">
                <a href="javascript:void(0)">
                    <span>카카오 로그아웃</span>
                </a>
            </li>
        </ul>
    </div>
</div>