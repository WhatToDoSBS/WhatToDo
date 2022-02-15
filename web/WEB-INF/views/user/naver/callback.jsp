<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="ko">
<head>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
<div>로그인 중입니다.</div>
<script type="text/javascript">
    var naver_id_login = new naver_id_login("9CbEg9cxRUs7V2Q6_IMd", "http://localhost:8090/user/naver/callback");
    // 접근 토큰 값 출력
    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    function naverSignInCallback() {
        const email = naver_id_login.getProfileData('email');
        const name = naver_id_login.getProfileData('name');
        const gender = naver_id_login.getProfileData('gender');
        const profile_image = naver_id_login.getProfileData('profile_image');

        console.log(email);
        console.log(name);
        console.log(gender);
        console.log(profile_image);

        const naverUser = {
            uid : email,
            nm : name,
            gender : gender,
            profileimg : profile_image
        };

        fetch('/user/naver/callback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(naverUser),
        }).then((response) => console.log(response));

        console.log(naverUser);

        <%--if (email === null || email === undefined) {--%>
        <%--    var state = naver_id_login.getUniqState();--%>
        <%--    console.log(state);--%>
        <%--    alert('이메일 정보는 필수정보 입니다.');--%>
        <%--    var uri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=9CbEg9cxRUs7V2Q6_IMd&state=${state}&redirect_uri=http://localhost:8090/user/naver/callback&auth_type=reprompt`;--%>
        <%--    location.href = uri;--%>
        <%--} else if (name === null || name === undefined) {--%>
        <%--    var state = naver_id_login.getUniqState();--%>
        <%--    console.log(state);--%>
        <%--    alert('성함은 필수정보 입니다.');--%>
        <%--    var uri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=9CbEg9cxRUs7V2Q6_IMd&state=${state}&redirect_uri=http://localhost:8090/user/naver/callback&auth_type=reprompt`;--%>
        <%--    location.href = uri;--%>
        <%--} else if (gender === null || gender === undefined) {--%>
        <%--    var state = naver_id_login.getUniqState();--%>
        <%--    console.log(state);--%>
        <%--    alert('성별은 필수정보 입니다.');--%>
        <%--    var uri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=9CbEg9cxRUs7V2Q6_IMd&state=${state}&redirect_uri=http://localhost:8090/user/naver/callback&auth_type=reprompt`;--%>
        <%--    location.href = uri;--%>
        <%--}--%>



    }
</script>
</body>
</html>