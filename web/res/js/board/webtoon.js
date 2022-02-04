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

function webtoonGenreRandom(url) {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {// 사이즈 구하는 법 : Object.keys(data).length
        let randomNum = Math.floor((Math.random() * data.length));  // 랜덤 숫자
        let record2 = filterFunction(data, '스릴러');
        console.log(record2);
        resultDisplay(data[randomNum].img,data[randomNum].link,data[randomNum].nm,data[randomNum].writer);
    }).catch((err) => {
        console.log(err);
    });
}

function filterFunction(data, genre) {
    return data.filter(function(item, index, arr){ return item.genre == genre });
}

function resultDisplay(webtoonimg, webtoonLink, webtoonNm, webtoonWriter) {
    resultBox.innerHTML = `<div><a href="${webtoonLink}"><img src="${webtoonimg}"></a></div>
    <div><a href="${webtoonLink}"><span class="font-14px">${webtoonNm}</span></a></div>
    <div><span class="font-14px">${webtoonWriter}</span></div>
`;
}
randomSubmitBtn.addEventListener('click',function () {  // 랜덤버튼 누르면 무작위 랜덤웹툰 출력
    webtoonGenreRandom(webtoonGenreRandomUrl);
})

let btnName = null;
choiceBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let btnName1 = item.innerText;
        btnName = btnName1;
        switch (item.innerText) {
            case '일상':
                btnName = '일상 ';
                break;
            case '개그':
                bntName = '개그 ';
                break;
            case '판타지':
                bntName = '판타지';
                break;
            case '액션':
                bntName = '액션 ';
                break;
            case '드라마':
                bntName = '드라마';
                break;
            case '순정':
                bntName = '순정 ';
                break;
            case '감성':
                bntName = '감성 ';
                break;
            case '스릴러':
                bntName = '스릴러';
                break;
            case '시대극':
                bntName = '시대극';
                break;
            case '스포츠':
                bntName = '스포츠';
                break;
        }
    })
});

