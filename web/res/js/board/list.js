{
    const recordList = document.querySelectorAll('.record');
    const recordEvent = (item) => {
        item.addEventListener('click', () => {
            const iboard = item.dataset.iboard;
            console.log(iboard);
            location.href = `/board/detail?iboard=${iboard}`;
        });
    };
    recordList.forEach(recordEvent);
}

let totalData = document.querySelectorAll('tr'); //게시판 전제 tr
let totalDataArr = Array.prototype.slice.call(totalData); //게시판 tr 배열로 변환
let totalDataNm = document.querySelectorAll('tr').length - 1; //게시물 갯수
let dataPerPage = Number(document.querySelector('#paging select').value); //화면에 나오는 게시물 갯수
let pageCount = Math.floor(Number(totalDataNm / dataPerPage)) + 1;
let pageIdxElem = document.querySelector("#pageIdx");
let currentPageNm = Number(pageIdxElem.dataset.idx);
let currentPageData = totalDataArr.slice(((currentPageNm-1) * dataPerPage) + 1, currentPageNm * dataPerPage + 1);

//페이징 표시

if(Number(totalDataNm % dataPerPage) === 0) {
    pageCount = pageCount - 1;
}

let makeIdx = () => {
    for(let i=1; i<=pageCount; i++) {
        pageIdxElem.innerHTML +=
        `
        <span class="pageNm" data-idx="${i}">${i}</span>
        `
    }
}
makeIdx();

