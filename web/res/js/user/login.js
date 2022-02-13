Kakao.init('31a4b437d075fde689913e97c7d35df1'); //발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); // sdk초기화여부판단
//카카오로그인
function kakaoLogin() {
    try {
        return new Promise((resolve, reject)=> {
            if(!Kakao) {
                reject('Kakao 인스턴스가 존재하지 않습니다.')
            }
            Kakao.Auth.login({
                success: function (response) {
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: function (data) {
                            console.log(data);
                            loginKakao(data.id,data.id,data.properties.nickname,1,data.properties.profile_image);
                            insKakaoInfo(data.id,data.id,data.properties.nickname,1,data.properties.profile_image);
                            },
                        fail: function (error) {
                            console.log(error)
                        },
                    })
                },
                fail: function (error) {
                    console.log(error)
                }
            })
        })
    } catch (err) {
        console.log(err)
    }
}

//카카오로그아웃
function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url: '/v1/user/unlink',
            success: function (response) {
                console.log(response)
            },
            fail: function (error) {
                console.log(error)
            },
        })
        Kakao.Auth.setAccessToken(undefined)
    }
}

function insKakaoInfo(uid, upw, nm, gender, profileImg) {
    const param = {
        'uid' : uid,
        'upw' : upw,
        'nm' : nm,
        'gender' : gender,
        'profileImg' : profileImg
    };
    myFetch.post('/user/kakao', (data)=> {
        console.log('카카오 회원가입 결과 : ' + data.result);
        switch (data.result) {
            case 0:
                console.log('등록 실패');
                break;
            default:
                console.log('등록 성공');
                break;
        }
    }, param);
}

function loginKakao(uid, upw) {
    const param = {
        'uid' : uid,
        'upw' : upw
    };
    myFetch.post('/user/login', (data)=> {
        console.log('카카오 로그인 결과 : ' + data);
    }, param);
}