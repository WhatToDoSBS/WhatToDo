function changeVal(val) {
    console.log(val);
    if (val == 1) {
        console.log('전체');
    } else if (val == 2) {
        webtoonCmtList();
        console.log('웹툰만');
    } else if (val == 3) {
        gameCmtList();
        console.log('게임만');
    } else {
        console.log('처음 상태');
    }
}
const myReview = document.getElementById('my_review');
const gameCmtList = () => {
    myFetch.get(`/webtoon/mypage/cmt-game-mylist`, (data) => {
        setCmtList(data);
    });
}


const webtoonCmtList = () => {
    myFetch.get(`/webtoon/mypage/cmt-webtoon-mylist`, (data) => {
        setWebtoonList(data);
    });
}

const setCmtList = (list)=> {
    if(list.length===0) {
        myReview.innerHTML = '<span>아직 리뷰를 적지 않았습니다.</span>';
        return;
    }
    const table = makeTable();
    myReview.appendChild(table);

    list.forEach(item => {
        const tr = makeTr(item);
        table.appendChild(tr);
    });
}

const setWebtoonList = (list)=> {
    if(list.length===0) {
        myReview.innerHTML = '<span>아직 리뷰를 적지 않았습니다.</span>';
        return;
    }
    const table = makeTable();
    myReview.appendChild(table);

    list.forEach(item => {
        const tr = makeWebtoonTr(item);
        table.appendChild(tr);
    });
}

const makeTable = () => {
    const table = document.createElement('table');
    myReview.innerHTML = '';
    table.innerHTML = `
            <tr>
                <th>제목</th>
                <th>나의 평가</th>
                <th>작성 일시</th>
            </tr>`;
    return table;
}

const makeTr = item => {
    console.log(item);
    const tr =document.createElement('tr');
    console.log(item.gameNm);
    console.log(item.ctnt);
    console.log(item.rdt);
    tr.innerHTML = `
            <td>${item.gameNm}</td>
                <td>${item.ctnt}</td>
                <td>${item.rdt}</td>
    `;
    const td = document.createElement('td');    // 이부분왜 tr 안에 이미 넣어줬는데 td를 또 넣어야하나?
    tr.appendChild(td);
    return tr;
}

const makeWebtoonTr = item => {
    console.log(item);
    const tr =document.createElement('tr');
    console.log(item.gameNm);
    console.log(item.ctnt);
    console.log(item.rdt);
    tr.innerHTML = `
            <td>${item.nm}</td>
                <td>${item.ctnt}</td>
                <td>${item.rdt}</td>
    `;
    const td = document.createElement('td');    // 이부분왜 tr 안에 이미 넣어줬는데 td를 또 넣어야하나?
    tr.appendChild(td);
    return tr;
}
