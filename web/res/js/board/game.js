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
        console.log(JSON.stringify(mrdata[mrRN].gameNm));
        // let rGame = JSON.stringify(mrdata[mrRN])
        //     console.log(rGame);
        let selectedGameNm = JSON.stringify(mrdata[mrRN].gameNm).replace("\"", "").replace("\"", "")
        document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            console.log(JSON.stringify(mrdata[mrRN].gameNm));
            // let rGame = JSON.stringify(mrdata[mrRN])
            //     console.log(rGame);
            let selectedGameNm = JSON.stringify(mrdata[mrRN].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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

            let selectedGameNm = JSON.stringify(mrdata[mrRN].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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

            let selectedGameNm = JSON.stringify(mrdata[mrRN].gameNm).replace("\"", "").replace("\"", "")
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mrdata[mrRN].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
        document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${rpgdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${fpsdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${actiondata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${strdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${sportsdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${mdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${pdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
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
            document.querySelector(".modalContent").innerHTML = `<a class="text-important" href="${sdata[randomNm].selLink}" target="_blank">` + selectedGameNm + " 어때요?" + "</a>"
            document.querySelector(".selected-img").innerHTML = `<img src=${sdata[randomNm].imgsrc}>`
        }).catch((err) => {
            console.log(err);
        });
    }
}

    let gameCmtListElem = document.querySelector(".gameCmtList");
    let dataElem = document.querySelector("#data");

    const getCmtList = () => {
        fetch(`/game`)
            .then(res => {
                return res.json();
            }).then(data => {
            console.log(data);
            setCmtList(data);
        });
    }

    const setCmtList = (list) => {

        if(list.length === 0) {
            gameCmtListElem.innerText = '댓글이 없습니다.';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
        <tr>
            <th>내용</th>
            <th>작성자</th>
            <th></th>
        </tr>
        `
        list.forEach(item => {
            makeTr(table, item);
        });
        gameCmtListElem.appendChild(table);
    }

    const makeTr = (table, item) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${item.ctnt}</td>
        <td>${item.iuser}</td>
        `;

        const td = document.createElement('td');
        tr.appendChild(td);

        if(parseInt(dataElem.dataset.iuser)===item.iuser) {
            const modBtn = document.createElement("input");
            modBtn.type = 'button';
            modBtn.value = '수정';
            modBtn.classList.add('boardBtn');
            modBtn.addEventListener('click', () => {
                const tdArr = tr.querySelectorAll('td');
                const tdCell = tdArr[1];//댓글 내용

                const modInput = document.createElement('input');
                modInput.value = item.ctnt;
                const saveBtn = document.createElement('input');
                saveBtn.type = 'button';
                saveBtn.value = '저장';
                saveBtn.classList.add('boardBtn');
                saveBtn.addEventListener('click', () => {
                    const param = {
                        icmt : item.icmt,
                        ctnt : modInput.value
                    }
                    fetch('/game', {
                        'method': 'put',
                        'headers': { 'Content-Type': 'application/json' },
                        'body': JSON.stringify(param)
                    })
                        .then(data => {
                            console.log(data);
                            tdCell.innerText = modInput.value;
                            item.ctnt = modInput.value;
                            removeCancelBtn();
                        })
                        .catch(data => {
                            alert("댓글 작성에 실패했습니다.");
                            console.log(data);
                        })
                });
                tdCell.innerHTML = null;
                tdCell.appendChild(modInput);
                tdCell.appendChild(saveBtn);

                const cancelBtn = document.createElement('input');
                cancelBtn.type = 'button';
                cancelBtn.value = '취소';
                cancelBtn.classList.add('boardBtn');
                cancelBtn.addEventListener('click', () => {
                    tdCell.innerText = item.ctnt;
                    removeCancelBtn();
                });

                const removeCancelBtn = () => {
                    modBtn.classList.remove('hidden');
                    delBtn.classList.remove('hidden');
                    cancelBtn.remove();
                }

                td.insertBefore(cancelBtn, modBtn);
                modBtn.classList.add('hidden');
                delBtn.classList.add('hidden');
            });



            const delBtn = document.createElement("input");
            delBtn.type = 'button';
            delBtn.value = '삭제';
            delBtn.classList.add('boardBtn');
            delBtn.addEventListener('click', ()=> {
                if(confirm("댓글을 삭제하시겠습니까?")) {
                    delCmt(item.icmt, tr);
                    // location.href='/board/detail?iboard='+iboard;
                }
            });

            td.appendChild(modBtn);
            td.appendChild(delBtn);
        }
        table.appendChild(tr);
    }
    getCmtList();



    const delCmt = (icmt, tr) => {
        fetch(`/board/cmt/${icmt}`,
            {'method': 'delete',
                'headers': { 'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(data => {
                console.log(data.result);
                const tableElem = document.querySelector('table');
                tableElem.remove();
                getCmtList();
            }).catch(e=> {
            console.log(e)
        });
    }

    const getTrLen = ()=> {
        const cmtListElem = document.querySelector('#cmt_list');
        const trArr = cmtListElem.querySelectorAll('table tr');
        return trArr.length;
    }


    let delBtnElem = document.querySelector("#delBtn");

    if(delBtnElem) {
        delBtnElem.addEventListener('click', () => {

            if(confirm("삭제하시겠습니까?")) {
                location.href=`/board/del/?iboard=${iboard}`;
            }
        });
    }
}