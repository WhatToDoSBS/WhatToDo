<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <h1>웹툰</h1>
    <div id="recommand_box">
        <ul class="slides">
            <c:set var="randomNum" value="${randomNum}"/>
            ${randomNum}
<%--            <img src="${webtoonRecommandList[randomNum].img}" alt="">--%>
            <c:forEach items="${webtoonRecommandList}" var="item" begin="0" end="2">
                <li><img src="${item.img}" alt=""></li>
            </c:forEach>
        </ul>
    </div>
    <div>
        <c:forEach items="${webtoonRecommandList}" var="item">
            <div>${item.nm}</div>
            <img src="${item.img}" alt="${item.nm}">
            <div><b>${item.rating}</b></div>
            <span>연재요일 : ${item.weekend}</span>
        </c:forEach>
    </div>
    <button class="crawlingBtn">크롤링</button>
</div>
