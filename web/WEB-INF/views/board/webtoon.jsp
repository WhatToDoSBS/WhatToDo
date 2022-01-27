<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <h1>웹툰</h1>
    <div>

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
