{
    const loginFormElem = document.querySelector('#login-form');
    const RegexMsg = document.querySelector('#RegexLogin');
    const resultErr = document.querySelector('#resultErr');
    const loginErr = document.querySelector('#loginErr');

    loginFormElem.addEventListener('submit', (e)=> {
       const uid = loginFormElem.uid.value;
       const upw = loginFormElem.upw.value;

       let result = document.querySelector('#result');
       alert(result.value);
       if (!idRegex.test(uid) || !pwRegex.test(upw)) {
           resultErr.classList.remove('err_msg_b');
           loginErr.classList.remove('err_msg_b');
           RegexMsg.classList.remove('msg_n');
           resultErr.classList.add('msg_n');
           loginErr.classList.add('msg_n');
           RegexMsg.classList.add('err_msg_b');
           e.preventDefault();
       } else if (result.value === 2 || result.value === 3) {
           resultErr.classList.remove('err_msg_b');
           loginErr.classList.remove('msg_n');
           RegexMsg.classList.remove('err_msg_b');
           resultErr.classList.add('msg_n');
           loginErr.classList.add('err_msg_b');
           RegexMsg.classList.add('msg_n');
           e.preventDefault();
       } else if (result.value < 1) {
           resultErr.classList.remove('msg_n');
           loginErr.classList.remove('err_msg_b');
           RegexMsg.classList.remove('err_msg_b');
           resultErr.classList.add('err_msg_b');
           loginErr.classList.add('msg_n');
           RegexMsg.classList.add('msg_n');
           e.preventDefault();
       }

    });
}