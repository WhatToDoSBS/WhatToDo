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
let dataPerPage = document.querySelector('#paging > select');
let dataPerPageVal = document.querySelector('#paging > select').value; //화면에 나오는 게시물 갯수

function pageSelectVal() { // 갯수별로 보기 값 담는 함수

    let val = dataPerPage.options[dataPerPage.selectedIndex].value;
    return dataPerPageVal = val;
}

let pageCount = Math.floor(Number(totalDataNum / pageSelectVal())) + 1;
let pageIdxElem = document.querySelector("#pageIdx");
let firstPageNum = 1;
let firstPageData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1);




//페이징 표시

if(Number(totalDataNum % pageSelectVal()) === 0) {
    pageCount = pageCount - 1;
}

let makeIdx = () => {
    for(let i=1; i<=pageCount; i++) {
        pageIdxElem.innerHTML +=
        `
        <li class="pageNum page-item" data-idx="${i}">${i}</li>
        `
    }
}
makeIdx();

let showFirstPage = () => {
    totalDataArr.forEach(function(element) {
        element.style.display='none'});
    totalDataArr[0].style.display='';
    firstPageData.forEach(function (element) {
        element.style.display=''});
}
showFirstPage();



let pageNumElem = document.querySelectorAll('.pageNum');
let pageNumVal = (item) => {
    item.addEventListener('click', ()=> {
        let val = Number(item.dataset.idx);
        console.log(val);
        let currentPageNum = val;
        let currentPageData = totalDataArr.slice(((currentPageNum-1) * pageSelectVal()) + 1, currentPageNum * pageSelectVal() + 1);
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

let dataPerPageElem = document.querySelector("select");
dataPerPageElem.addEventListener('change', ()=> {

    document.querySelectorAll(".pageNum").forEach((item) => {
        item.remove();
    });

    if(pageSelectVal() == 15) {
        for(let i=1; i<=Math.floor(Number(totalDataNum / pageSelectVal())) + 1; i++) {
            pageIdxElem.innerHTML +=
                `
        <span class="pageNum page-item" data-idx="${i}">${i}</span>
        `
        }
        let pageNumElem = document.querySelectorAll('.pageNum');
        totalDataArr.forEach(function(element) {
            element.style.display='none'});
        totalDataArr[0].style.display='';
        let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
            selData.forEach(function (element) {
            element.style.display=''});

        let pageNumVal = (item) => {
            item.addEventListener('click', ()=> {
                totalDataArr.forEach(function(element) {
                    element.style.display='none'});
                let val = Number(item.dataset.idx);
                console.log(val);
                let currentPageNum = val;
                let currentPageData = totalDataArr.slice(((currentPageNum - 1) * pageSelectVal()) + 1, currentPageNum * pageSelectVal() + 1);
                let showCurrentPage = () => {
                    totalDataArr[0].style.display = '';
                    currentPageData.forEach(function (element) {
                        element.style.display = ''
                    });
                }
                showCurrentPage();
            })
        }
        pageNumElem.forEach(pageNumVal);
    } else if(pageSelectVal() == 20) {
        for(let i=1; i<=Math.floor(Number(totalDataNum / pageSelectVal())) + 1; i++) {
            pageIdxElem.innerHTML +=
                `
        <span class="pageNum page-item" data-idx="${i}">${i}</span>
        `
        }
        let pageNumElem = document.querySelectorAll('.pageNum');
        totalDataArr.forEach(function(element) {
            element.style.display='none'});
        totalDataArr[0].style.display='';
        let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
        selData.forEach(function (element) {
            element.style.display=''});


        let pageNumVal = (item) => {
            item.addEventListener('click', ()=> {
                totalDataArr.forEach(function(element) {
                    element.style.display='none'});
                let val = Number(item.dataset.idx);
                console.log(val);
                let currentPageNum = val;
                let currentPageData = totalDataArr.slice(((currentPageNum - 1) * pageSelectVal()) + 1, currentPageNum * pageSelectVal() + 1);
                let showCurrentPage = () => {
                    totalDataArr[0].style.display = '';
                    currentPageData.forEach(function (element) {
                        element.style.display = ''
                    });
                }
                showCurrentPage();
            })
        }
        pageNumElem.forEach(pageNumVal);
    } else {
        for(let i=1; i<=Math.floor(Number(totalDataNum / pageSelectVal())) + 1; i++) {
            pageIdxElem.innerHTML +=
                `
        <span class="pageNum page-item" data-idx="${i}">${i}</span>
        `
        }
        let pageNumElem = document.querySelectorAll('.pageNum');
        totalDataArr.forEach(function(element) {
            element.style.display='none'});
        totalDataArr[0].style.display='';
        let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
        selData.forEach(function (element) {
            element.style.display=''});

        let pageNumVal = (item) => {
            item.addEventListener('click', ()=> {
                totalDataArr.forEach(function(element) {
                    element.style.display='none'});
                let val = Number(item.dataset.idx);
                console.log(val);
                let currentPageNum = val;
                let currentPageData = totalDataArr.slice(((currentPageNum - 1) * pageSelectVal()) + 1, currentPageNum * pageSelectVal() + 1);
                let showCurrentPage = () => {
                    totalDataArr[0].style.display = '';
                    currentPageData.forEach(function (element) {
                        element.style.display = ''
                    });
                }
                showCurrentPage();
            })
        }
        pageNumElem.forEach(pageNumVal);
    }
})
