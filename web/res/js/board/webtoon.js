crawlingBtn = document.querySelector('.crawlingBtn');
resultBox = document.querySelector('.result_box');
resultNm = document.querySelector('.result_nm');
randomSubmitBtn = document.querySelector('#randomSubmitBtn');

crawlingBtn.addEventListener('click', function () {
    location.href = '/board/webtooncrawling';
})

var webtoonGenreRandomUrl = '/board/webtoonGenreRandom'

function webtoonGenreRandom(url) {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let randomNum = Math.floor((Math.random() * data.length));  // 랜덤 숫자
        console.log(data[randomNum]);  // 사이즈 구하는 법 : Object.keys(data).length
        resultDisplay(data[randomNum].img,data[randomNum].link,data[randomNum].nm,data[randomNum].writer);
    }).catch((err) => {
        console.log(err);
    });
}
function resultDisplay(webtoonimg, webtoonLink, webtoonNm, webtoonWriter) {
    resultBox.innerHTML = `<div><a href="${webtoonLink}"><img src="${webtoonimg}"></a></div>
    <div><a href="${webtoonLink}"><span class="font-14px">${webtoonNm}</span></a></div>
    <div><span class="font-14px">${webtoonWriter}</span></div>
`;
}
randomSubmitBtn.addEventListener('click',function () {
    webtoonGenreRandom(webtoonGenreRandomUrl);
})