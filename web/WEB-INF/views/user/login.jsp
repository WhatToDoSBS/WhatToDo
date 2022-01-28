<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="login_form">
    <h1>Login</h1>
    <input type="hidden" value="${requestScope.result}" id="result">
<form class="login_container" method="post" action="/user/login" id="login-form">
    <div>ID : <input type="text" name="uid" class="login_input"></div>
    <div>PW : <input type="password" name="upw" class="login_input"></div>
    <div>
        <h5 class="msg_n" id="loginErr">아이디 또는 비밀번호가 일치하지 않습니다. <br>다시 시도해 주세요.</h5>
        <h5 class="msg_n" id="resultErr">알 수 없는 이유로 로그인에 실패하였습니다.</h5>
        <h5 class="msg_n" id="RegexLogin">아이디와 비밀번호를 바르게 작성해주세요.</h5>
    </div>
    <div>
        <input type="checkbox" name="uidChk"> 아이디 저장 <input type="checkbox" name="loginChk"> 자동 로그인
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