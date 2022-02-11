<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <h3>${sessionScope.loginUser.nm}님의 웹툰 평가</h3>
    <select class="form-select" aria-label="Default select example" id="select_form" name="select_form" onchange="changeVal(this.value)">
        <option value="1">전체</option>
        <option value="2">웹툰</option>
        <option value="3">게임</option>
    </select>
    <table>
        <tr>
            <th>제목</th>
            <th>나의 평가</th>
            <th>작성 일시</th>
        </tr>
        <c:forEach var="item" items="${webtoonReviewMy}">
            <tr>
                <td>${item.nm}</td>
                <td>${item.ctnt}</td>
                <td>${item.rdt}</td>
            </tr>
        </c:forEach>
    </table>

</div>