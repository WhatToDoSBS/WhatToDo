<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<tiles:importAttribute name="menuList"/>
<c:set var="currentPagePath" value="${requestScope['javax.servlet.forward.request_uri']}" />
<c:set var="splitURI" value="${fn:split(currentPagePath, '/')}"/>
<c:set var="lastPath" value="${splitURI[fn:length(splitURI) - 1]}"/>
<div class="header">
    <a href="/board/main"><span class="main_title">뭐하Gee</span></a>
    <div id="data" data-iuser="${sessionScope.loginUser.iuser}"></div>
    <c:choose>
        <c:when test="${sessionScope.loginUser != null}">
            <ul class="list-group list-group-horizontal" id="header-login">
                <li class="list-group-item"><a href="/user/logout">로그아웃</a></li>
                <li class="list-group-item" id="mypageBtn"><span><a href="/user/mypage/main">My page</a></span></li>
            </ul>
        </c:when>
        <c:otherwise>
            <ul class="list-group list-group-horizontal" id="header-login">
                <li class="list-group-item"><span><a href="/user/login">로그인</a></span></li>
            </ul>
        </c:otherwise>
    </c:choose>
</div>
<div class="header_menu">
    <ul>
        <c:forEach items="${menuList}" var="item">
            <li class="${lastPath == ''.concat(item.nmval) ? 'menu-selected' : ''}" onclick= location.href="/board/${item.nmval}">${item.nm}</li>
        </c:forEach>
    </ul>
</div>