{
    let rtBtns = document.querySelectorAll(".rtBtn");
    let ppBtns = document.querySelectorAll(".ppBtn");
    let kdBtns = document.querySelectorAll(".kdBtn");
    let thmBtns = document.querySelectorAll(".thmBtn");
    let pnBtns = document.querySelectorAll(".pnBtn");

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

    for (let i = 0; i < rtBtns.length; i++) {
        rtBtns[i].addEventListener("click", function (e) {
            e.preventDefault();
            if (e.target.classList.contains("clicked")) {
                rtClickedRmv();
            } else {
                rtClickedRmv();
                rtBtns[i].classList.add("clicked");
            }
        })
    }

    ppBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
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

    // gameBtnFrm = document.querySelector('#gameBtnFrm');
    // if (gameBtnFrm) {
    //     let aaa = gameBtnFrm.querySelector('#aaa')
    //     aaa.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         aaa.classList.add('plusBtn');
    //     })
    // }

    let randomMobileJson = null;
    // 뭐하Gee 버튼 관련
    funBtn = document.querySelector('.fun-btn');
    funBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // let random = Math.floor(Math.random()*2)+1;
        // console.log('random:' + random);
        /*switch (random) {
            case 1:
                getMecaRandomGame(mecaurl);
                break;
            case 2:
                getSteamRandomGame(steamurl);
                break;
        }*/
        getMobileRandomGame(mobileUrl);
    })

    /* 랜덤값 도출 */

    var mobileUrl = "https://www.mobileindex.com/mi-chart/top-100/top-games";

    // 랜덤게임 서버에서 불러서(fetch) 출력해주는 함수
    function getMobileRandomGame(url) {   // 모바일게임 순위 데이터
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            mobileRandomGame(data);
        }).catch((err) => {
            console.log(err);
        });
    }

    // 랜덤게임 서버에서 불러서(fetch) 출력해주는 함수
    // function getRandomGame(url) {   // 게임메카 데이터
    //     fetch(url).then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log(data);
    //         steamRandomGame(data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    // 랜덤게임 서버에서 불러서(fetch) 출력해주는 함수
    function getRatingRandomGame(url) {   // 게임메카 데이터
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            // 랜덤 숫자 도출 및 게임 도출
            // min <= number <= max
            // Math.floor(Math.random() * (max - min + 1)) + min;
            let randomNum = Math.floor((Math.random() * data.length) + 1);
            let numArrange = 15;    // 범위, 15개 도출
            let min = 0;    // 최솟값
            switch (rtBtnReturnNum) {
                case 1: // 1위~15위
                    randomNum = Math.floor(Math.random() * numArrange);
                    break;
                case 2: // 16위~45위
                    min = 15;
                    numArrange = 30;
                    randomNum = Math.floor(Math.random() * numArrange) + min;
                    break;
                case 3: // 46위~95위
                    min = 45;
                    numArrange = 50;
                    randomNum = Math.floor(Math.random() * numArrange) + min;
                    break;
            }
            gameRecommandDisplay(data[randomNum].gameNm);
        }).catch((err) => {
            console.log(err);
        });
    }

    // 각 List의 요소들을 담는 randomList 변수 선언
    const randomMecaRankNumArr = [];
    const randomMecaRankNmArr = [];
    const randomMeca = [];
    const randomSteamRankNumArr = [];
    const randomSteamRankNmArr = [];
    const randomSteam = [];
    const randomRatingRankNumArr = [];
    const randomRatingRankNmArr = [];
    const randomRatingScoreArr = [];
    const randomRating = [];

    // mobilerank 랜덤함수
    function mobileRandomGame(data) {
        data.forEach(function (item) {
            randomMecaRankNumArr.push(item.rankNum);
            randomMecaRankNmArr.push(item.gameNm);
            randomMeca.push(item);
        });
        // 랜덤 숫자 도출 및 게임 도출
        // min <= number <= max
        // Math.floor(Math.random() * (max - min + 1)) + min;
        let randomNum = Math.floor((Math.random() * randomMecaRankNumArr.length) + 1);
        let numArrange = 10;    // 범위 10개 도출
        let min = 0;    // 최솟값
        switch (ppBtnReturnNum) {
            case 1: // 1위~10위
                randomNum = Math.floor(Math.random() * numArrange);
                break;
            case 2: // 11위~20위
                min = 10;
                randomNum = Math.floor(Math.random() * numArrange) + min;
                break;
            case 3: // 21위~50위
                min = 20;
                numArrange = 30;
                randomNum = Math.floor(Math.random() * numArrange) + min;
                break;
        }

        let whatGame = randomMecaRankNmArr[randomNum];

        gameRecommandDisplay(whatGame);
        const randomMecaJson = JSON.stringify(randomMeca);  // Object를 String으로
        return randomMecaJson;  // meca게임 List를 담은 배열 리턴
    }
    // steam 랜덤함수
    function steamRandomGame(data) {
        data.forEach(function (item) {
            randomSteamRankNumArr.push(item.rankNum);
            randomSteamRankNmArr.push(item.rankNm);
            randomSteam.push(item);
        });
        // 랜덤 숫자 도출 및 게임 도출
        // min <= number <= max
        // Math.floor(Math.random() * (max - min + 1)) + min;
        let randomNum = Math.floor((Math.random() * randomSteamRankNumArr.length) + 1);
        let numArrange = 20;    // 범위, 10개 도출
        let min = 0;    // 최솟값
        switch (ppBtnReturnNum) {
            case 1: // 1위~20위
                randomNum = Math.floor(Math.random() * numArrange);
                break;
            case 2: // 21위~50위
                min = 20;
                numArrange = 30;
                randomNum = Math.floor(Math.random() * numArrange) + min;
                break;
            case 3: // 51위~100위
                min = 50;
                numArrange = 50;
                randomNum = Math.floor(Math.random() * numArrange) + min;
                break;
        }

        let whatGame = randomSteamRankNmArr[randomNum];

        gameRecommandDisplay(whatGame);
        const randomSteamJson = JSON.stringify(randomSteam);  // Object를 String으로
        return randomSteamJson;  // steam게임 List를 담은 배열 리턴
    }

    // rating 랜덤함수
    /*function ratingRandomGame(data) {
        data.forEach(function (item) {
            randomRatingRankNumArr.push(item.gameRank);
            randomRatingRankNmArr.push(item.gameNm);
            randomRatingScoreArr.push(item.gameRating);
            randomRating.push(item);
        });
    }*/



    // 화면창에 결과값을 띄움
    function gameRecommandDisplay(whatGame) {
        displayResultSpan.style.display = 'inline-block';
        displayResultSpan.innerHTML = '오늘 이 게임 어때요? <b>' + whatGame + '</b>';
    }
}