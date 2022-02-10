<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <h3>${sessionScope.loginUser.nm}님의 웹툰 평가</h3>
    <table>
        <tr>
            <th>제목</th>
            <th>나의 평가</th>
        </tr>
        <c:forEach var="item" items="${webtoonReviewMy}">
            <tr>
                <td>${item.nm}</td>
                <td>${item.ctnt}</td>
            </tr>
        </c:forEach>
    </table>

</div>