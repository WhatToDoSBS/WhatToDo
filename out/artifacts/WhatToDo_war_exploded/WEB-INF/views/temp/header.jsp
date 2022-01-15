<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<tiles:importAttribute name="menuList"/>
<div class="header">
    <h1>뭐하Gee</h1>
    <span class="login"><a href="/user/login">로그인</a></span>
</div>
<div class="header_menu">
    <ul>
    <c:forEach items="${menuList}" var="item">
        <li onclick= location.href="/board/${item.nmval}">${item.nm}</li>
    </c:forEach>
    </ul>
</div>