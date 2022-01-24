{
    choiceBtnFrm = document.querySelector('#choiceBtnFrm');
    displayResultDiv = document.querySelector('.display_result');
    displayResultSpan = document.querySelector('.result_span');
    funBtn = choiceBtnFrm.querySelector('.fun-btn');
    dataList = document.querySelector('.data');

    /* common.js에서 가져온 버튼 클릭 관련 js */

    let rtBtns = document.querySelectorAll(".rtBtn");
    let ppBtns = document.querySelectorAll(".ppBtn");
    let kdBtns = document.querySelectorAll(".kdBtn");
    let thmBtns = document.querySelectorAll(".thmBtn");
    let pnBtns = document.querySelectorAll(".pnBtn");

    // 버튼 다시 클릭 시 버튼 해제
    function rtClickedRmv() {
        for (let i = 0; i < rtBtns.length; i++) {
            rtBtns[i].classList.remove("clicked");
        }
    }
    function ppClickedRmv() {
        for (let i = 0; i < ppBtns.length; i++) {
            ppBtns[i].classList.remove("clicked");
        }
    }
    function kdClickedRmv() {
        for (let i = 0; i < kdBtns.length; i++) {
            kdBtns[i].classList.remove("clicked");
        }
    }
    function thmClickedRmv() {
        for (let i = 0; i < thmBtns.length; i++) {
            thmBtns[i].classList.remove("clicked");
        }
    }
    function pnClickedRmv() {
        for (let i = 0; i < pnBtns.length; i++) {
            pnBtns[i].classList.remove("clicked");
        }
    }

    // 평가 버튼 값
    let rtBtnReturnNum = 0;
    rtBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            switch (item.innerText) {
                case '띵작':
                    rtBtnReturnNum = 3;
                    break;
                case '수작':
                    rtBtnReturnNum = 2;
                    break;
                case '평작':
                    rtBtnReturnNum = 1;
                    break;
            }

            if (e.target.classList.contains("clicked")) {
                rtClickedRmv();
            } else {
                rtClickedRmv();
                item.classList.add("clicked");
            }
        })
    });

    // 인기도 버튼 값
    let ppBtnReturnNum = 0;
    ppBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            switch (item.innerText) {
                case '많은':
                    ppBtnReturnNum = 3;
                    break;
                case '보통':
                    ppBtnReturnNum = 2;
                    break;
                case '적은':
                    ppBtnReturnNum = 1;
                    break;
            }

            if (e.target.classList.contains("clicked")) {
                ppClickedRmv();
            } else {
                ppClickedRmv();
                item.classList.add("clicked");
            }

        })
    });

    kdBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains("clicked")) {
                kdClickedRmv();
            } else {
                kdClickedRmv();
                item.classList.add("clicked");
            }
        })
    });
    thmBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains("clicked")) {
                thmClickedRmv();
            } else {
                thmClickedRmv();
                item.classList.add("clicked");
            }

        })
    });
    pnBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains("clicked")) {
                pnClickedRmv();
            } else {
                pnClickedRmv();
                item.classList.add("clicked");
            }
        })
    });

    // 뭐하Gee 버튼 관련
    funBtn = document.querySelector('.fun-btn');
    funBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let btnNumSum = rtBtnReturnNum + ppBtnReturnNum;
        console.log('btnNumSum:' + btnNumSum);
        console.log('rtBtnReturnNum : ' + rtBtnReturnNum);
        console.log('ppBtnReturnNum : ' + ppBtnReturnNum);
        /*let random = Math.floor(Math.random()*2)+1;
        console.log('random:' + random);
        switch (random) {
            case 1:
                getMecaRandomGame(mecaurl);
                break;
            case 2:
                getSteamRandomGame(steamurl);
                break;
        }*/
        if(btnNumSum>=4 && btnNumSum <=6) {
            return getRatingRandomGame(ratingurl);
        } else if(btnNumSum <=3 && btnNumSum>=1) {
            return getRankRandomGame(rankingurl);
        }
    })

    /* 랜덤값 도출 */

    var mecaurl = '/board/mecarankingjson';
    var steamurl = '/board/steamrankingjson';
    var ratingurl = '/board/ratinggamejson'
    var rankingurl = '/board/rankingjson'

    // 랜덤게임 서버에서 불러서(fetch) 출력해주는 함수
    function getRatingRandomGame(url) {   // 게임메카 데이터
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            // 랜덤 숫자 도출 및 게임 도출
            // min <= number <= max
            // Math.floor(Math.random() * (max - min + 1)) + min;
            let randomNum = Math.floor((Math.random() * data.length));
            btnSwitch(rtBtnReturnNum,randomNum)
            gameRecommandDisplay(data[randomNum].gameNm);
        }).catch((err) => {
            console.log(err);
        });
    }

    function getRankRandomGame(url) {   // 랭킹 데이터
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            // 랜덤 숫자 도출 및 게임 도출
            // min <= number <= max
            // Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(data);
            let randomNum = Math.floor((Math.random() * data.length));

            btnSwitch(rtBtnReturnNum,randomNum)
            gameRecommandDisplay(data[randomNum].rankNm);
        }).catch((err) => {
            console.log(err);
        });
    }


    function btnSwitch(btnNameNum, randomNum) {
        let numArrange = 10;    // 범위, 15개 도출
        let min = 0;    // 최솟값
        switch (btnNameNum) {
            case 3: // 1위~10위
                randomNum = Math.floor(Math.random() * numArrange);
                break;
            case 2: // 11위~30위
                min = 10;
                numArrange = 20;
                randomNum = Math.floor(Math.random() * numArrange) + min;
                break;
            case 1: // 31위~50위
                min = 30;
                randomNum = Math.floor(Math.random() * numArrange) + min;
                break;
        }
    }

    // 화면창에 결과값을 띄움
    function gameRecommandDisplay(whatGame) {
        displayResultSpan.style.display = 'inline-block';
        displayResultSpan.innerHTML = '오늘 이 게임 어때요? <b>' + whatGame + '</b>';
    }
}