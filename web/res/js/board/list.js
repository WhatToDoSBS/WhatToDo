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
let totalDataNum = document.querySelectorAll('tr').length - 1; //게시물 갯수
let dataPerPage = Number(document.querySelector('#paging select').value); //화면에 나오는 게시물 갯수
let pageCount = Math.floor(Number(totalDataNum / dataPerPage)) + 1;
let pageIdxElem = document.querySelector("#pageIdx");
let firstPageNum = 1;
let firstPageData = totalDataArr.slice(((firstPageNum-1) * dataPerPage) + 1, firstPageNum * dataPerPage + 1);


//페이징 표시

if(Number(totalDataNum % dataPerPage) === 0) {
    pageCount = pageCount - 1;
}

let makeIdx = () => {
    for(let i=1; i<=pageCount; i++) {
        pageIdxElem.innerHTML +=
        `
        <span class="pageNum" data-idx="${i}">${i}</span>
        `
    }
}
makeIdx();

let showFirsttPage = () => {
    totalDataArr.forEach(function(element) {
        element.style.display='none'});
    totalDataArr[0].style.display='';
    firstPageData.forEach(function (element) {
        element.style.display=''});
}
showFirsttPage();



let pageNumElem = document.querySelectorAll('.pageNum');
let pageNumVal = (item) => {
    item.addEventListener('click', ()=> {
        let val = Number(item.dataset.idx);
        console.log(val);
        let currentPageNum = val;
        let currentPageData = totalDataArr.slice(((currentPageNum-1) * dataPerPage) + 1, currentPageNum * dataPerPage + 1);
        let showCurrentPage = () => {
            totalDataArr.forEach(function(element) {
                element.style.display='none'});
            totalDataArr[0].style.display='';
            currentPageData.forEach(function (element) {
                element.style.display=''});
        }
        showCurrentPage();
    })
};
pageNumElem.forEach(pageNumVal);
