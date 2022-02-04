<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<div class="listContainer">

    <h1 id="listTitle">자유게시판</h1>
    <div id="paging">
    <select>
        <option value=10>10개씩 보기</option>
        <option value=15>15개씩 보기</option>
        <option value=20>20개씩 보기</option>
    </select>
    </div>
    <div>
        <c:choose>
            <c:when test="${fn:length(requestScope.list) == 0}">
                글이 없습니다.
            </c:when>
            <c:otherwise>
                <table>
                    <tr class="showList">
                        <th>NO</th>
                        <th id="lTitle">제목</th>
                        <th>조회수</th>
                        <th>작성자</th>
                    </tr>
                    <c:forEach items="${requestScope.list}" var="item">
                        <tr class="record showList" data-iboard="${item.iboard}">
                            <td>${item.iboard}</td>
                            <td><c:out value="${item.title}"/></td>
                            <td>${item.hits}</td>
                            <td>${item.iuser}</td>
                        </tr>
                    </c:forEach>
                </table>
            </c:otherwise>
        </c:choose>
        <div id="pageIdx">

        </div>
        <c:if test="${sessionScope.loginUser != null}">
        <div id="writeBtnContainer">
        <div id="writeBtn" onclick="location.href='/board/write'">글쓰기</div>
        </div>
        </c:if>
    </div>
</div>
