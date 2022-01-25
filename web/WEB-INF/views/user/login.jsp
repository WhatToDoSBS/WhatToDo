<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="login_form">
    <h1>Login</h1>
<form class="login_container" method="post" action="/user/login" id="login-form">
    <div>ID : <input type="text" name="uid" class="login_input"></div>
    <div>PW : <input type="password" name="upw" class="login_input"></div>
    <div>
        <h5 class="msg_n" id="RegexLogin">아이디 또는 패스워드를 입력해주세요.</h5>
        <h5 class="msg_n" id="loginFailure">아이디 또는 비밀번호가 일치하지 않습니다. <br>다시 시도해 주세요.</h5>
    </div>
    <div>
        <input type="checkbox" > 아이디 저장 <input type="checkbox"> 자동 로그인
    </div>
    <div>
        <input class="login_btn" type="submit" value="Login">
    </div>
</form>
<div>
    <div><a>아이디</a> · <a>비밀번호찾기</a></div>
    <div><a href="/user/join">아직 계정이 없으신가요?</a></div>
</div>
</div>