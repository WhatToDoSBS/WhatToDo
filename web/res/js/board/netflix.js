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

    function rtClickedRmv() {
        for (let i=0; i<rtBtns.length; i++) {
            rtBtns[i].classList.remove("clicked");
        }
    }
    function ppClickedRmv() {
        for (let i=0; i<ppBtns.length; i++) {
            ppBtns[i].classList.remove("clicked");
        }
    }
    function kdClickedRmv() {
        for (let i=0; i<kdBtns.length; i++) {
            kdBtns[i].classList.remove("clicked");
        }
    }
    function thmClickedRmv() {
        for (let i=0; i<thmBtns.length; i++) {
            thmBtns[i].classList.remove("clicked");
        }
    }

    function pnClickedRmv() {
        for (let i=0; i<pnBtns.length; i++) {
            pnBtns[i].classList.remove("clicked");
        }
    }

    for (let i = 0; i < rtBtns.length; i++) {
        rtBtns[i].addEventListener("click", function (e) {
            e.preventDefault();
            if(e.target.classList.contains("clicked")) {
                rtClickedRmv();
            } else {
                rtClickedRmv();
                rtBtns[i].classList.add("clicked");
            }
        })
    }
    let ppBtnReturnNum = 0;
    ppBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            switch (item.innerText) {
                case '많은':
                    ppBtnReturnNum = 1;
                    console.log(ppBtnReturnNum);
                    break;
                case '보통':
                    ppBtnReturnNum = 2;
                    console.log(ppBtnReturnNum);
                    break;
                case '적은':
                    ppBtnReturnNum = 3;
                    console.log(ppBtnReturnNum);
                    break;
                case '상관 무':
                    ppBtnReturnNum = 4;
                    console.log(ppBtnReturnNum);
                    break;
            }
            return ppBtnReturnNum;


            if(e.target.classList.contains("clicked")) {
                ppClickedRmv();
            } else {
                ppClickedRmv();
                item.classList.add("clicked");
            }

            console.log('결과값:'+ ppBtnReturnNum);
        })
    });
    


    kdBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if(e.target.classList.contains("clicked")) {
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
            if(e.target.classList.contains("clicked")) {
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
            if(e.target.classList.contains("clicked")) {
                pnClickedRmv();
            } else {
                pnClickedRmv();
                item.classList.add("clicked");
            }
        })
    });


    funBtn = document.querySelector('.fun-btn');
    funBtn.addEventListener('click', function (e) {
        e.preventDefault();

        getMecaRandomGame(mecaurl);
    })

    /* 랜덤값 도출 */

    var mecaurl = '/board/mecarankingjson';
    var steamurl = '/board/steamrankingjson';

    // 랜덤게임 서버에서 불러서(fetch) 출력해주는 함수
    function getMecaRandomGame(url) {
        fetch(url).then((res)=> {
            return res.json();
        }).then((data)=> {
            console.log(data);
            const meca = mecaRandomGame(data);
        }).catch((err)=> {
            console.log(err);
        });
    }

    const randomMecaRankNumArr = [];
    const randomMecaRankNmArr = [];
    const randomMeca = [];

    // mecarank 랜덤함수
    function mecaRandomGame(data) {
        data.forEach(function (item) {
            randomMecaRankNumArr.push(item.rankNum);
            randomMecaRankNmArr.push(item.rankNm);
            randomMeca.push(item);
        });
        // 랜덤 숫자 도출 및 게임 도출
        const randomNum = Math.floor((Math.random()*randomMecaRankNumArr.length)+1);
        let whatGame = randomMecaRankNmArr[randomNum];
        let whatRankNum = randomMecaRankNumArr[randomNum];

        gameRecommandDisplay(whatRankNum, whatGame);
        const randomMecaJson = JSON.stringify(randomMeca);
        return randomMecaJson;  // meca게임 List를 담은 배열 리턴
    }

    // 화면창에 결과값을 띄움
    function gameRecommandDisplay(whatRankNum, whatGame) {
        displayResultSpan.style.display = 'inline-block';
        displayResultSpan.innerHTML = '오늘 이 게임 어때요? <b>' + whatRankNum + '위 : ' + whatGame + '</b>';
    }
}