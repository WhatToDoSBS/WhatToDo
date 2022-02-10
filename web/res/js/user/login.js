var naver_id_login = new naver_id_login("s8DDAYotRndJt05wXdOI", "http://localhost:8090/board/main");
var state = naver_id_login.getUniqState();
naver_id_login.setButton("green", 3,60);
naver_id_login.setDomain("http://localhost:8090/user/login");
naver_id_login.setState(state);
naver_id_login.setPopup();
naver_id_login.init_naver_id_login();


// 접근 토큰 값 출력
console.log(naver_id_login.oauthParams.access_token);
// 네이버 사용자 프로필 조회
naver_id_login.get_naver_userprofile("naverSignInCallback()");
// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
function naverSignInCallback() {
    alert(naver_id_login.getProfileData('email'));
    alert(naver_id_login.getProfileData('nickname'));
    alert(naver_id_login.getProfileData('age'));
}