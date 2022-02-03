{
    const loginFormElem = document.querySelector('#login-form');
    const RegexMsg = document.querySelector('#RegexLogin');
    const resultErr = document.querySelector('#resultErr');
    const loginErr = document.querySelector('#loginErr');

    loginFormElem.addEventListener('submit', (e) => {
        const uid = loginFormElem.uid.value;
        const upw = loginFormElem.upw.value;

        let result = document.querySelector('#result');
        console.log(result.value);
        if (!idRegex.test(uid) || !pwRegex.test(upw)) {
            RegexMsg.classList.remove('msg_n');
            RegexMsg.classList.add('err_msg_b');
            e.preventDefault();
        }
    });
}