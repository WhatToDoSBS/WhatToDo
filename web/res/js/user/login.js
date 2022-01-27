{
    const loginFormElem = document.querySelector('#login-form');

    // 로그인 정규식 검사
    loginFormElem.addEventListener('submit', (e) => {
       const uid = loginFormElem.uid.value;
       const upw = loginFormElem.upw.value;

       if (!idRegex.test(uid)) {
            loginFormElem.querySelector('#RegexLogin').classList.remove('msg_n');
            loginFormElem.querySelector('#loginFailure').classList.remove('err_msg_b');
            loginFormElem.querySelector('#RegexLogin').classList.add('err_msg_b');
            loginFormElem.querySelector('#loginFailure').classList.add('msg_n');
            e.preventDefault();
       } else if (!pwRegex.test(upw)) {
            loginFormElem.querySelector('#RegexLogin').classList.remove('msg_n');
            loginFormElem.querySelector('#loginFailure').classList.remove('err_msg_b');
            loginFormElem.querySelector('#RegexLogin').classList.add('err_msg_b');
            loginFormElem.querySelector('#loginFailure').classList.add('msg_n');
            e.preventDefault();
        }
    });

    
}