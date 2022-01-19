const idRegex = /^([a-zA-Z0-9]{4,15})$/; //대소문자+숫자 조합으로 4~15글자인 경우만 OK!
const pwRegex = /^([a-zA-Z0-9!@_]{4,20})$/; //대소문자+숫자+!@_ 조합으로 4~20글자인 경우만 OK!
const nmRegex = /^([가-힣]{2,5})$/;
const joinFrmElem = document.querySelector('#join_frm');

joinFrmElem.addEventListener('submit', (e) => {
    const uid = joinFrmElem.uid.value;
    const upw = joinFrmElem.upw.value;
    const upwChk = joinFrmElem.querySelector('#upw-chk').value;
    const nm = joinFrmElem.nm.value;

    if (!idRegex.test(uid)) {
        alert('아이디는 대소문자, 숫자조합으로 4~15글자가 되어야 합니다.');
    }else if (!pwRegex.test(upw)) {
        alert('올바른 비밀번호를 작성해 주세요..');
        e.preventDefault();
    } else if(upw !== upwChk) {
        alert('비밀번호가 맞지 않습니다.');
        e.preventDefault();
    } else if(!nmRegex.test(nm)) {
        alert('올바른 이름을 작성해주세요.');
        e.preventDefault();
    } else if(idChkState !== 1) {
        switch (idChkState) {
            case 0:
                alert('다른 아이디를 사용해 주세요!');
                break;
            case 2:
                alert('아이디 중복 체크를 해주세요!');
                break;
        }
        e.preventDefault();
    }
});
