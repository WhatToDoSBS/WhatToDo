var naver_id_login = new naver_id_login("s8DDAYotRndJt05wXdOI", "http://localhost:8090/board/main");
var state = naver_id_login.getUniqState();
naver_id_login.setButton("green", 3,60);
naver_id_login.setDomain("http://localhost:8090/user/login");
naver_id_login.setState(state);
naver_id_login.setPopup();
naver_id_login.init_naver_id_login();