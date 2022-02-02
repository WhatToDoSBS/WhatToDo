{
    // let rtBtns = document.querySelectorAll(".rtBtn");
    let ppBtns = document.querySelectorAll(".ppBtn");
    let kdBtns = document.querySelectorAll(".kdBtn");
    let pfBtns = document.querySelectorAll(".pfBtn");



    //
    // function rtClickedRmv() {
    //     for (let i = 0; i < rtBtns.length; i++) {
    //         rtBtns[i].classList.remove("clicked");
    //     }
    // }

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

    function pfClickedRmv() {
        for (let i = 0; i < pfBtns.length; i++) {
            pfBtns[i].classList.remove("clicked");
        }
    }

    // for (let i = 0; i < rtBtns.length; i++) {
    //     rtBtns[i].addEventListener("click", function (e) {
    //         e.preventDefault();
    //         if (e.target.classList.contains("clicked")) {
    //             rtClickedRmv();
    //         } else {
    //             rtClickedRmv();
    //             rtBtns[i].classList.add("clicked");
    //         }
    //     })
    // }

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
    pfBtns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains("clicked")) {
                pfClickedRmv();
            } else {
                pfClickedRmv();
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
    const modalWindow = document.getElementById("modal")
    const modalXBtn = document.querySelector(".close-area")

    //뭐하지 버튼
    funBtn = document.querySelector('.fun-btn');
    ppBtn = document.querySelector('#ppRanBtn');
    kdBtn = document.querySelector('#kdRanBtn');
    pfBtn = document.querySelector('#pfRanBtn');

    ppBtn.addEventListener("click", function () {
        if (ppBtns[0].classList.contains("clicked")) {
            mecaData.getMrTopRandomGame();
        } else if (ppBtns[1].classList.contains("clicked")) {
            mecaData.getMrGreatRandomGame();
        } else if (ppBtns[2].classList.contains("clicked")) {
            mecaData.getMrGoodRandomGame();
        } else mecaData.getMrAllRandomGame();

        modalWindow.style.display = 'flex';
        modalXBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
        window.addEventListener("keyup", (e) => {
            if(modalWindow.style.display === "flex" && e.key === "Escape") {
                modalWindow.style.display = "none"
            }
        })
    })

    kdBtn.addEventListener("click", function () {
        if(kdBtns[0].classList.contains("clicked")) {
            genreData.getRpgRandomGame();
        } else if (kdBtns[1].classList.contains("clicked")) {
            genreData.getFpsRandomGame();
        } else if (kdBtns[2].classList.contains("clicked")) {
            genreData.getSportsRandomGame();
        } else if (kdBtns[3].classList.contains("clicked")) {
            genreData.getActionRandomGame();
        } else if (kdBtns[4].classList.contains("clicked")) {
            genreData.getStrRandomGame();
        } else if (kdBtns[5].classList.contains("clicked")) {
            genreData.getOthersRandomGame();
        } else pfData.getAllPfRandomGame();

        modalWindow.style.display = 'flex';
        modalXBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
        window.addEventListener("keyup", (e) => {
            if(modalWindow.style.display === "flex" && e.key === "Escape") {
                modalWindow.style.display = "none"
            }
        })
    })

    pfBtn.addEventListener("click", function () {
        if(pfBtns[0].classList.contains("clicked")) {
            pfData.getMobileRandomGame();
        } else if(pfBtns[1].classList.contains("clicked")) {
            pfData.getPcRandomGame();
        } else if(pfBtns[2].classList.contains("clicked")) {
            pfData.getStRandomGame();
        } else pfData.getAllPfRandomGame();

        modalWindow.style.display = 'flex';
        modalXBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
        window.addEventListener("keyup", (e) => {
            if(modalWindow.style.display === "flex" && e.key === "Escape") {
                modalWindow.style.display = "none"
            }
        })
    })

    funBtn.addEventListener('click', function () {

        // if (pfBtns[0].classList.contains("clicked")) {
        //     if (kdBtns[0].classList.contains("clicked")) {
        //
        //     }
        // }
        //
        // if (ppBtns[0].classList.contains("clicked")) {
        //     mecaData.getMrTopRandomGame();
        // } else if (ppBtns[1].classList.contains("clicked")) {
        //     mecaData.getMrGreatRandomGame();
        // } else if (ppBtns[2].classList.contains("clicked")) {
        //     mecaData.getMrGoodRandomGame();
        // } else mecaData.getMrAllRandomGame();

        let randomNum = Math.floor(Math.random()*2)
        console.log(randomNum)
        if(randomNum === 1) {
            mecaData.getMrAllRandomGame();
        } else pfData.getAllPfRandomGame();

        modalWindow.style.display = 'flex';
        modalXBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
        window.addEventListener("keyup", (e) => {
            if(modalWindow.style.display === "flex" && e.key === "Escape") {
                modalWindow.style.display = "none"
            }
        })
    })


    /* 랜덤값 도출 */
    //메카 순위별 랜덤함수 객체
let mecaData = {
    //메카순위 1~50
    getMrAllRandomGame : function () {
        fetch("/board/mecarankingjson"
).
    then((res) => {
        return res.json();
    }).then((data) => {
        let mrdata = [];
        for (let i = 0; i < 50; i++) {
            mrdata.push(data[i])
        }
        let mrRN = Math.floor(Math.random() * 50)
        // console.log(mrRN);
        console.log(JSON.stringify(mrdata[mrRN].rankNm));
        // let rGame = JSON.stringify(mrdata[mrRN])
        //     console.log(rGame);
        let selectedGameNm = JSON.stringify(mrdata[mrRN].rankNm).replace("\"", "").replace("\"", "")
        document.querySelector(".modalContent").innerHTML = `<a href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
        document.querySelector(".selected-img").innerHTML = `<img src=${mrdata[mrRN].imgsrc}>`
    }).catch((err) => {
        console.log(err);
    });
},

    //메카 1~10위
    getMrTopRandomGame : function() {
        fetch("/board/mecarankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mrdata = [];
            for (let i = 0; i < 10; i++) {
                mrdata.push(data[i])
            }
            let mrRN = Math.floor(Math.random() * 10)
            // console.log(mrRN);
            console.log(JSON.stringify(mrdata[mrRN].rankNm));
            // let rGame = JSON.stringify(mrdata[mrRN])
            //     console.log(rGame);
            let selectedGameNm = JSON.stringify(mrdata[mrRN].rankNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${mrdata[mrRN].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    },

    //메카 11~30위
    getMrGreatRandomGame : function () {   // 게임순위 데이터
        fetch("/board/mecarankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mrdata = [];
            for (let i = 10; i < 30; i++) {
                mrdata.push(data[i])
            }
            let mrRN = Math.floor(Math.random() * 20)

            let selectedGameNm = JSON.stringify(mrdata[mrRN].rankNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${mrdata[mrRN].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    },

    //메카 31~50위
    getMrGoodRandomGame : function () {   // 게임순위 데이터
        fetch("/board/mecarankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mrdata = [];
            for (let i = 30; i < 50; i++) {
                mrdata.push(data[i])
            }
            let mrRN = Math.floor(Math.random() * 20)

            let selectedGameNm = JSON.stringify(mrdata[mrRN].rankNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${mrdata[mrRN].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }
}

    //장르별 랜덤 함수 배열
let genreData = {
    //rpg 랜덤
    getRpgRandomGame : function () {
        fetch("/board/platformrankingjson"
).
    then((res) => {
        return res.json();
    }).then((data) => {
        let mdata = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            mdata.push(data[i])
        }
        let rpgdata = [];
        mdata.forEach((item) => {
            if (item.genre.includes("롤플레잉") || item.genre.includes("RPG")) {
                rpgdata.push(item)
            }
        })
        let randomNm = Math.floor(Math.random() * rpgdata.length)

        let selectedGameNm = JSON.stringify(rpgdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
        document.querySelector(".modalContent").innerHTML = `<a href="${rpgdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
        document.querySelector(".selected-img").innerHTML = `<img src=${rpgdata[randomNm].imgsrc}>`
    }).catch((err) => {
        console.log(err);
    });
},

    //FPS랜덤
    getFpsRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mdata = [];
            for (let i = 0; i < Object.keys(data).length; i++) {
                mdata.push(data[i])
            }
            let fpsdata = [];
            mdata.forEach((item) => {
                if (item.genre.includes("FPS") || item.genre.includes("슈팅")) {
                    fpsdata.push(item)
                }
            })
            let randomNm = Math.floor(Math.random() * fpsdata.length)

            let selectedGameNm = JSON.stringify(fpsdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${fpsdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${fpsdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }

,

    //액션랜덤
    getActionRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mdata = [];
            for (let i = 0; i < Object.keys(data).length; i++) {
                mdata.push(data[i])
            }
            let actiondata = [];
            mdata.forEach((item) => {
                if (item.genre.includes("액션")) {
                    actiondata.push(item)
                }
            })
            let randomNm = Math.floor(Math.random() * actiondata.length)

            let selectedGameNm = JSON.stringify(actiondata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${actiondata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${actiondata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }

,

    //전략 랜덤
    getStrRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mdata = [];
            for (let i = 0; i < Object.keys(data).length; i++) {
                mdata.push(data[i])
            }
            let strdata = [];
            mdata.forEach((item) => {
                if (item.genre.includes("전략") || item.genre.includes("RTS")) {
                    strdata.push(item)
                }
            })
            let randomNm = Math.floor(Math.random() * strdata.length)

            let selectedGameNm = JSON.stringify(strdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${strdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${strdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }

,

    //스포츠,레이싱 랜덤
    getSportsRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mdata = [];
            for (let i = 0; i < Object.keys(data).length; i++) {
                mdata.push(data[i])
            }
            let sportsdata = [];
            mdata.forEach((item) => {
                if (item.genre.includes("스포츠") || item.genre.includes("자동차") || item.genre.includes("레이싱")) {
                    sportsdata.push(item)
                }
            })
            let randomNm = Math.floor(Math.random() * sportsdata.length)

            let selectedGameNm = JSON.stringify(sportsdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${sportsdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${sportsdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }

,

    //기타 랜덤
    getOthersRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let mdata = [];
            for (let i = 0; i < Object.keys(data).length; i++) {
                mdata.push(data[i])
            }

            let othsData = mdata.filter((item) => !(item.genre.includes("전략") || item.genre.includes("RTS") || item.genre.includes("스포츠")
                || item.genre.includes("자동차") || item.genre.includes("레이싱") || item.genre.includes("액션")
                || item.genre.includes("FPS") || item.genre.includes("슈팅") || item.genre.includes("롤플레잉") || item.genre.includes("RPG")
            ))
            let randomNm = Math.floor(Math.random() * othsData.length)

            let selectedGameNm = JSON.stringify(mdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${mdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${mdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }
}

    //플랫폼 랜덤 함수 배열
let pfData = {
    getAllPfRandomGame : function () {
        fetch("/board/platformrankingjson"
            ).
        then((res) => {
            return res.json();
        }).then((data) => {
            let mdata = [];
            for (let i = 0; i < 120; i++) {
                mdata.push(data[i])
            }
            let randomNm = Math.floor(Math.random() * 120);

            let selectedGameNm = JSON.stringify(mdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${mdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${mdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    },
    // 모바일게임 랜덤
    getMobileRandomGame : function () {
        fetch("/board/platformrankingjson"
).
    then((res) => {
        return res.json();
    }).then((data) => {
        let mdata = [];
        for (let i = 0; i < 40; i++) {
            mdata.push(data[i])
        }
        let randomNm = Math.floor(Math.random() * 40);

            let selectedGameNm = JSON.stringify(mdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${mdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${mdata[randomNm].imgsrc}>`
    }).catch((err) => {
        console.log(err);
    });
},

// pc온라인 랜덤
    getPcRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let pdata = [];
            for (let i = 40; i < 80; i++) {
                pdata.push(data[i])
            }
            let randomNm = Math.floor(Math.random() * 40);

            let selectedGameNm = JSON.stringify(pdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${pdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${pdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }

,

// 스팀게임 랜덤
    getStRandomGame : function () {
        fetch("/board/platformrankingjson").then((res) => {
            return res.json();
        }).then((data) => {
            let sdata = [];
            for (let i = 80; i < 120; i++) {
                sdata.push(data[i])
            }
            let randomNm = Math.floor(Math.random() * 40);

            let selectedGameNm = JSON.stringify(sdata[randomNm].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a href="${sdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${sdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }
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
//     function getRatingRandomGame(url) {   // 게임메카 데이터
//         fetch(url).then((res) => {
//             return res.json();
//         }).then((data) => {
//             // 랜덤 숫자 도출 및 게임 도출
//             // min <= number <= max
//             // Math.floor(Math.random() * (max - min + 1)) + min;
//             let randomNum = Math.floor((Math.random() * data.length) + 1);
//             let numArrange = 15;    // 범위, 15개 도출
//             let min = 0;    // 최솟값
//             switch (rtBtnReturnNum) {
//                 case 1: // 1위~15위
//                     randomNum = Math.floor(Math.random() * numArrange);
//                     break;
//                 case 2: // 16위~45위
//                     min = 15;
//                     numArrange = 30;
//                     randomNum = Math.floor(Math.random() * numArrange) + min;
//                     break;
//                 case 3: // 46위~95위
//                     min = 45;
//                     numArrange = 50;
//                     randomNum = Math.floor(Math.random() * numArrange) + min;
//                     break;
//             }
//             gameRecommandDisplay(data[randomNum].gameNm);
//         }).catch((err) => {
//             console.log(err);
//         });
//     }
//
//     // 각 List의 요소들을 담는 randomList 변수 선언
//     const randomMecaRankNumArr = [];
//     const randomMecaRankNmArr = [];
//     const randomMeca = [];
//     const randomSteamRankNumArr = [];
//     const randomSteamRankNmArr = [];
//     const randomSteam = [];
//     const randomRatingRankNumArr = [];
//     const randomRatingRankNmArr = [];
//     const randomRatingScoreArr = [];
//     const randomRating = [];
//
//     // mobilerank 랜덤함수
//     function mobileRandomGame(data) {
//         data.forEach(function (item) {
//             randomMecaRankNumArr.push(item.rankNum);
//             randomMecaRankNmArr.push(item.gameNm);
//             randomMeca.push(item);
//         });
//         // 랜덤 숫자 도출 및 게임 도출
//         // min <= number <= max
//         // Math.floor(Math.random() * (max - min + 1)) + min;
//         let randomNum = Math.floor((Math.random() * randomMecaRankNumArr.length) + 1);
//         let numArrange = 10;    // 범위 10개 도출
//         let min = 0;    // 최솟값
//         switch (ppBtnReturnNum) {
//             case 1: // 1위~10위
//                 randomNum = Math.floor(Math.random() * numArrange);
//                 break;
//             case 2: // 11위~20위
//                 min = 10;
//                 randomNum = Math.floor(Math.random() * numArrange) + min;
//                 break;
//             case 3: // 21위~50위
//                 min = 20;
//                 numArrange = 30;
//                 randomNum = Math.floor(Math.random() * numArrange) + min;
//                 break;
//         }
//
//         let whatGame = randomMecaRankNmArr[randomNum];
//
//         gameRecommandDisplay(whatGame);
//         const randomMecaJson = JSON.stringify(randomMeca);  // Object를 String으로
//         return randomMecaJson;  // meca게임 List를 담은 배열 리턴
//     }
//     // steam 랜덤함수
//     function steamRandomGame(data) {
//         data.forEach(function (item) {
//             randomSteamRankNumArr.push(item.rankNum);
//             randomSteamRankNmArr.push(item.rankNm);
//             randomSteam.push(item);
//         });
//         // 랜덤 숫자 도출 및 게임 도출
//         // min <= number <= max
//         // Math.floor(Math.random() * (max - min + 1)) + min;
//         let randomNum = Math.floor((Math.random() * randomSteamRankNumArr.length) + 1);
//         let numArrange = 20;    // 범위, 10개 도출
//         let min = 0;    // 최솟값
//         switch (ppBtnReturnNum) {
//             case 1: // 1위~20위
//                 randomNum = Math.floor(Math.random() * numArrange);
//                 break;
//             case 2: // 21위~50위
//                 min = 20;
//                 numArrange = 30;
//                 randomNum = Math.floor(Math.random() * numArrange) + min;
//                 break;
//             case 3: // 51위~100위
//                 min = 50;
//                 numArrange = 50;
//                 randomNum = Math.floor(Math.random() * numArrange) + min;
//                 break;
//         }
//
//         let whatGame = randomSteamRankNmArr[randomNum];
//
//         gameRecommandDisplay(whatGame);
//         const randomSteamJson = JSON.stringify(randomSteam);  // Object를 String으로
//         return randomSteamJson;  // steam게임 List를 담은 배열 리턴
//     }
//
//     // rating 랜덤함수
//     /*function ratingRandomGame(data) {
//         data.forEach(function (item) {
//             randomRatingRankNumArr.push(item.gameRank);
//             randomRatingRankNmArr.push(item.gameNm);
//             randomRatingScoreArr.push(item.gameRating);
//             randomRating.push(item);
//         });
//     }*/
//
//
//
//     // 화면창에 결과값을 띄움
//     function gameRecommandDisplay(whatGame) {
//         displayResultSpan.style.display = 'inline-block';
//         displayResultSpan.innerHTML = '오늘 이 게임 어때요? <b>' + whatGame + '</b>';
//     }
}