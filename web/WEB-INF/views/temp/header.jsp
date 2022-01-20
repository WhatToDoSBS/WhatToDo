<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<tiles:importAttribute name="menuList"/>
<div class="header">
    <h1>뭐하Gee</h1>
    <c:choose>
        <c:when test="${sessionScope.loginUser != null}">
            <a class="login" href="/user/logout">로그아웃</a>
        </c:when>
        <c:otherwise>
            <a class="login" href="/user/login">로그인</a>
        </c:otherwise>
    </c:choose>

</div>
<div class="header_menu">
    <ul>
        <c:forEach items="${menuList}" var="item">
            <li>${item.nm}</li>
        </c:forEach>
    </ul>
</div>