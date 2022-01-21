{
    const joinFrmElem = document.querySelector('#join-frm');
    const upwChkInput = joinFrmElem.querySelector('#upw-chk');

    const idRegex = /^([a-zA-Z0-9]{4,15})$/;
    const pwRegex = /^([a-zA-Z0-9!@_]{4,20})$/;
    const nmRegex = /^([가-힣]{2,5})$/;


    if(joinFrmElem) {
        joinFrmElem.addEventListener('submit', (e) => {
            const uid = joinFrmElem.uid.value;
            const upw = joinFrmElem.upw.value;
            const upwChk = joinFrmElem.querySelector('#upw-chk').value;
            const nm = joinFrmElem.nm.value;
            const gender = joinFrmElem.gender.value;

            if(!idRegex.test(uid)) {
                alert('아이디를 바르게 적어주세요');
                e.preventDefault();
            } else if (!pwRegex.test(upw)) {
                alert('비밀번호는 대소문자, 숫자, !@_ 조합으로 4~20글자가 되어야 합니다.');
                e.preventDefault();
            } else if(upw !== upwChk) {
                alert('비밀번호와 체크 비밀번호를 확인해 주세요.');
                e.preventDefault();
            } else if(!nmRegex.test(nm)) {
                alert('성함을 올바르게 작성해 주세요.');
                console.log(nm);
                e.preventDefault();
            } else if(gender === '0') {
                alert('성별을 선택해주세요');
                e.preventDefault();
            }

        });

        upwChkInput.addEventListener('blur', (e) => {
            const upw = joinFrmElem.upw.value;
            const upwChk = joinFrmElem.querySelector('#upw-chk').value;

            if (upw !== upwChk) {
                joinFrmElem.querySelector('#err-pwChkMsg').classList.remove('err_msg_n');
                joinFrmElem.querySelector('#good-pwChkMsg').classList.remove('successMsg');
                joinFrmElem.querySelector('#err-pwChkMsg').classList.add('err_msg_b');
                e.preventDefault();
            } else if (upw === upwChk) {
                joinFrmElem.querySelector('#good-pwChkMsg').classList.remove('err_msg_n');
                joinFrmElem.querySelector('#err-pwChkMsg').classList.remove('err_msg_b');
                joinFrmElem.querySelector('#good-pwChkMsg').classList.add('successMsg');
            }

        });

    }
}