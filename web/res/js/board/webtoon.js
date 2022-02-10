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
        console.log(data[randomNum].img);
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
const modalContentLink = modalContent.querySelector('.webtoonLink');


webtoonModalElem.forEach(function (item) {
    item.addEventListener('click', function (e) {
        modalWindow.style.display = 'flex';

        modalContent.innerHTML = item.innerHTML;

        modalXBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })
        window.addEventListener("keyup", (e) => {
            if (modalWindow.style.display === "flex" && e.key === "Escape") {
                modalWindow.style.display = 'none';
            }
        })
        // 모달창 밖으로 마우스 클릭하면 닫힘
        window.addEventListener("mouseup", (e) => {
            if (modalWindow.style.display === "flex" && e.target === modalWindow) {
                modalWindow.style.display = 'none';
            }
        })
    })
})


