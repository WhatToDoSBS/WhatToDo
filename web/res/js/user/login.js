var naver_id_login = new naver_id_login("9CbEg9cxRUs7V2Q6_IMd", "http://localhost:8090/user/naver/callback");
var state = naver_id_login.getUniqState();
console.log(state);
naver_id_login.setButton("green", 3,60);
naver_id_login.setDomain("http://localhost:8090/user/login");
naver_id_login.setState(state);
naver_id_login.init_naver_id_login();





