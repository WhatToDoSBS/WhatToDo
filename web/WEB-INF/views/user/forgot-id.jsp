<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <form method="post" action="/user/forgot-id">
        <label>
            <span>이름</span>
            <input type="text" name="nm" class="textBox" required>
        </label>
        <br>
        <label>
            <span>휴대폰</span>
            <input type="text" name="contact" class="textBox" maxlength="8" placeholder="010 제외, '-'빼고 휴대폰 번호">
        </label>
        <br>
        <c:choose>
            <c:when test="${requestScope.list != null}">
            <textarea>
            <c:forEach var="list" items="${requestScope.list}">
                ${list.uid}
            </c:forEach>
            </textarea>
            </c:when>
            <c:when test="${requestScope.list == null}">
                <div></div>
            </c:when>
        </c:choose>
        <div>
            <input type="submit" value="아이디 찾기">
            <a href="/user/login">로그인 하러</a>
        </div>
    </form>
</div>
