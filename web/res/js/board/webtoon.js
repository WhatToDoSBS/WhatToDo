crawlingBtn = document.querySelector('.crawlingBtn');
resultBox = document.querySelector('.result_box');
resultNm = document.querySelector('.result_nm');
randomSubmitBtn = document.querySelector('#randomSubmitBtn');
choiceBtnSection = document.querySelector('.choiceBtn_section');
choiceBtn = choiceBtnSection.querySelectorAll('button');

crawlingBtn.addEventListener('click', function () {
    location.href = '/board/webtooncrawling';
})

var webtoonGenreRandomUrl = '/board/webtoonGenreRandom'


choiceBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let btnName = null;
        console.log('실행');
        if (e.target.innerText == '일상') {
            btnName = '일상 ';
        } else if (e.target.innerText == '개그') {
            btnName = '개그 ';
        } else if (e.target.innerText == '판타지') {
            btnName = '판타지';
        } else if (e.target.innerText == '액션') {
            btnName = '액션 ';
        } else if (e.target.innerText == '드라마') {
            btnName = '드라마';
        } else if (e.target.innerText == '순정') {
            btnName = '순정 ';
        } else if (e.target.innerText == '감성') {
            btnName = '감성 ';
        } else if (e.target.innerText == '스릴러') {
            btnName = '스릴러';
        } else if (e.target.innerText == '시대극') {
            btnName = '시대극';
        } else if (e.target.innerText == '스포츠') {
            btnName = '스포츠';
        } else if (e.target.innerText == '완결') {
            btnName = '완결';
        }

        console.log('선택 버튼 : ' + btnName);
        webtoonGenreBtnClickRandom(webtoonGenreRandomUrl, btnName);
    })
});

// RANDOM 버튼 눌렀을 때
function webtoonGenreRandom(url) {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {// 사이즈 구하는 법 : Object.keys(data).length
        let randomNum = Math.floor((Math.random() * data.length));  // 랜덤 숫자
        resultDisplay(data[randomNum].img, data[randomNum].link, data[randomNum].nm, data[randomNum].writer, 'RANDOM');
    }).catch((err) => {
        console.log(err);
    });
}

// 장르 버튼 눌렀을 때
function webtoonGenreBtnClickRandom(url, btnGenre) {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let record = filterFunction(data, btnGenre);
        let randomNum = Math.floor((Math.random() * record.length));  // 랜덤 숫자
        resultDisplay(record[randomNum].img, record[randomNum].link, record[randomNum].nm, record[randomNum].writer, btnGenre);
    }).catch((err) => {
        console.log(err);
    });
}

function filterFunction(data, genre) {
    return data.filter(function (item, index, arr) {
        if(genre=='완결') {
            return item.state = genre;
        } else return item.genre == genre;
    });
}


function resultDisplay(webtoonimg, webtoonLink, webtoonNm, webtoonWriter, btnGenre) {
    resultBox.innerHTML = `<div id="genre_title"><b>${btnGenre}</b></div>
<div><a href="${webtoonLink}"><img src="${webtoonimg}"></a></div>
    <div><a href="${webtoonLink}"><span class="font-14px"><b>${webtoonNm}</b></span></a></div>
    <div><span class="font-14px">${webtoonWriter}</span></div>
`;
}

randomSubmitBtn.addEventListener('click', function () {  // 랜덤버튼 누르면 무작위 랜덤웹툰 출력
    webtoonGenreRandom(webtoonGenreRandomUrl);
})

const modalWindow = document.getElementById("modal");
const modalXBtn = document.querySelector(".close-area");
const webtoonModalElem = document.querySelectorAll('.webtoonModalElement');
const modalContent = document.querySelector('.modalContent');
const webtoonInfoHidden = modalContent.querySelector('.webtoonInfoHidden');

webtoonModalElem.forEach(function (item) {

    item.addEventListener('click', function (e) {
        //e.stopPropagation();

        console.log(item);
        console.log(item.dataset.nm);


        modalWindow.style.display = 'flex';

        modalContent.innerHTML = item.innerHTML;

        /*
        modalXBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
        window.addEventListener("keyup", (e) => {
            if (modalWindow.style.display === "flex" && e.key === "Escape") {
                modalWindow.style.display = 'none';
            }
        });
        // 모달창 밖으로 마우스 클릭하면 닫힘
        window.addEventListener("mouseup", (e) => {
            if (modalWindow.style.display === "flex" && e.target === modalWindow) {
                modalWindow.style.display = 'none';
            }
        });

         */
    })
})

const reviewFrm = document.querySelector('#reviewFrm');
const modalIuser = modalContent.querySelector('.webtoonIuser');
const modalWeekend = modalContent.querySelector('.weebtoonWeekend');
//input-text ctnt에서 엔터치면 submit날아가기 때문에 막는다.
reviewFrm.addEventListener('submit', (e)=> {
    e.preventDefault();
});

reviewFrm.btn_submit.addEventListener('click', () => {
    const reviewVal = reviewFrm.ctnt.value;
    if(reviewVal.length === 0) {
        alert('리뷰 내용을 작성해 주세요.');
    } else if(isWrongWith('ctnt', reviewVal)) {
        alert(msg.ctnt);
    } else { //리뷰 insert 시도
        insReviewWebtoonAjax(reviewVal);
    }
});

const insReviewWebtoonAjax = (val) => {
    console.log(modalWeekend.innerText);
    const param = {
        'weekend': modalWeekend.innerText,
        'iuser': modalIuser.innerText,
        'ctnt': val
    };
    myFetch.post('/board/review', (data) => {
        console.log('result : ' + data.result);
        switch(data.result) {
            case 0:
                alert('리뷰 등록에 실패하였습니다.');
                break;
            default:
                //기존 table태그가 있는지 확인
                const reviewListElem = document.querySelector('#review_list');
                let table = reviewListElem.querySelector('table');
                if(!table) {
                    reviewListElem.innerHTML = null;
                    table = makeTable();
                    reviewListElem.appendChild(table);
                }
                const item = {
                    icmt: data.result,
                    iuser: parseInt(dataElem.dataset.iuser),
                    writernm: dataElem.dataset.nm,
                    ctnt: cmtFrmElem.ctnt.value,
                }
                const tr = makeTr(item);
                table.appendChild(tr);

                reviewFrm.ctnt.value = null;
                break;
        }
    }, param);
}

// //통신 시작!!!
// const getCmtList = () => {
//     const iboard = dataElem.dataset.iboard;
//     myFetch.get(`/board/cmt/${nm}`, setCmtList);
// }
//
// //통신 결과물 세팅
// const setCmtList = (list) => {
//     const reviewListElem = document.querySelector('#review_list');
//
//     //댓글이 없으면 "댓글 없음"
//     if(list.length === 0) {
//         reviewListElem.innerText = '댓글 없음!';
//         return;
//     }
//
//     const table = makeTable();
//     reviewListElem.appendChild(table);
//
//     list.forEach(item => {
//         const tr = makeTr(item);
//         table.appendChild(tr);
//     });
// }
//
// const makeTable = () => {
//     const table = document.createElement('table');
//     table.innerHTML = `
//             <tr>
//                 <th>no</th>
//                 <th>content</th>
//                 <th>writer</th>
//                 <th></th>
//             </tr>`;
//     return table;
// }
//
// const makeTr = item => {
//     const tr = document.createElement('tr');
//
//     const imgSrc = item.profileimg === null
//         ? '/res/img/defaultProfile.png'
//         : `/images/user/${item.iuser}/${item.profileimg}`;
//
//     tr.innerHTML = `
//                 <td>${item.icmt}</td>
//                 <td>${item.ctnt}</td>
//                 <td>
//                     <span>${item.writernm}</span>
//                     <div class="circular--img wh-30">
//                         <img src="${imgSrc}" onerror="this.style.display='none';">
//                     </div>
//                 </td>
//             `;
//     const td = document.createElement('td');
//     tr.appendChild(td);
//
//     if(parseInt(dataElem.dataset.iuser) === item.iuser) {
//         const modBtn = document.createElement('input');
//         modBtn.type = 'button';
//         modBtn.value = '수정';
//
//         const delBtn = document.createElement('input');
//         delBtn.type = 'button';
//         delBtn.value = '삭제';
//
//         delBtn.addEventListener('click', () => {
//             if(confirm('삭제하시겠습니까?')) {
//                 delCmt(item.icmt, tr);
//             }
//         });
//
//         td.appendChild(modBtn);
//         td.appendChild(delBtn);
//     }
//     return tr;
// }
//
// const delCmt = (icmt, tr) => {
//     myFetch.delete(`/board/cmt/${icmt}`, data => {
//         if(data.result) {
//             tr.remove();
//         } else {
//             alert('댓글을 삭제할 수 없습니다.');
//         }
//     });
// }
//
// getCmtList();
//
// }