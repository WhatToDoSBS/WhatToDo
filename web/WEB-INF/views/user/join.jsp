<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="join_container">
    <h1>회원가입</h1>
    <form action="/user/join" method="post" id="join_frm">
        <div>
            <h4>아이디</h4>
            <input type="text" name="uid" class="textBox" placeholder="아이디는 대소문자, 숫자조합으로 4~15글자가 되어야 합니다.">
        </div>
        <div>
            <h4>패스워드</h4>
            <input type="password" name="upw" class="textBox" placeholder="비밀번호는 대소문자, 숫자, !@_ 조합으로 4~20글자가 되어야 합니다.">
        </div>
        <div>
            <h4>패스워드 확인</h4>
            <input type="password" name="upw-check" class="textBox">
        </div>
        <div>
            <h4>이름</h4>
            <input type="text" name="nm" class="textBox">
        </div>
        <div>
            <h4>성별</h4>
            <span>
                <select name="gender" class="selBox">
                    <option selected>성별</option>
                    <option value="1">남자</option>
                    <option value="2">여자</option>
                </select>
            </span>
        </div>
        <div>
            <input type="submit" value="회원가입">
        </div>
    </form>
</div>
