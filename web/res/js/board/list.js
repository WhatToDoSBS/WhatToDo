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
let pageIdxElem = document.querySelector(".pagination");
let firstPageNum = 1;
let firstPageData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1);




//페이징 표시

let pagingCount = 3;

if(Number(totalDataNum % pageSelectVal()) === 0) {
    pageCount = pageCount - 1;
}

let makeIdx = () => {
    if (pageCount > pagingCount) {
    pageIdxElem.innerHTML +=
        `
        <li class="pageNum page-item" data-idx="${firstPageNum}"><a class="page-preNext"> < </a></li>
        ` }
    for(let i=1; i<=pageCount; i++) {
            pageIdxElem.innerHTML +=
                `
        <li class="pageNum page-item" data-idx="${i}"><a class="page-link">${i}</a></li>
        `
    }
    if (pageCount > pagingCount) {
        pageIdxElem.innerHTML +=
            `
        <li class="pageNum page-item" data-idx="${pageCount}"><a class="page-preNext"> > </a></li>
        ` }
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
        let pageIdxElem = document.querySelectorAll("a.page-link");
        pageIdxElem.forEach(function (item) {
            item.classList.remove("selected")
        });
        // item.querySelector("a").classList.add("selected");
        let val = Number(item.dataset.idx);
        console.log(val);
        pageIdxElem[val-1].classList.add("selected");
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
    let pageCount = Math.floor(Number(totalDataNum / pageSelectVal())) + 1;
    if (pageCount > pagingCount) {
        pageIdxElem.innerHTML +=
            `
        <li class="pageNum page-item" data-idx="${firstPageNum}"><a class="page-preNext"> < </a></li>
        ` }
        for(let i=1; i<=pageCount; i++) {
            pageIdxElem.innerHTML +=
                `
        <li class="pageNum page-item" data-idx="${i}"><a class="page-link">${i}</a></li>
        `
        }
    if (pageCount > pagingCount) {
        pageIdxElem.innerHTML +=
            `
        <li class="pageNum page-item" data-idx="${pageCount}"><a class="page-preNext"> > </a></li>
        ` }
        let pageNumElem = document.querySelectorAll('.pageNum');
        totalDataArr.forEach(function(element) {
            element.style.display='none'});
        totalDataArr[0].style.display='';
        let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
        selData.forEach(function (element) {
            element.style.display=''});

        let pageNumVal = (item) => {
            item.addEventListener('click', ()=> {
                let pageIdxElem = document.querySelectorAll("a.page-link");
                pageIdxElem.forEach(function (item) {
                    item.classList.remove("selected")
                });
                // item.querySelector("a").classList.add("selected");
                totalDataArr.forEach(function(element) {
                    element.style.display='none'});
                let val = Number(item.dataset.idx);
                console.log(val);
                let currentPageNum = val;
                pageIdxElem[val-1].classList.add("selected");
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

})

let searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", ()=> {
    let searchTxt = document.querySelector(".searchTxt").value;

    document.querySelectorAll(".pageNum").forEach((item) => {
        item.remove();
    });

    let totalSelectedDataNum = document.querySelectorAll("tr.showList > td").length
    //여기서 포문 돌려서 4로 나눴을때 1이 남는 인덱스만 찾아내서 그 값을 얻는다
    let pageCount = Math.floor(Number(totalSelectedDataNum / pageSelectVal())) + 1;
    if (pageCount > pagingCount) {
        pageIdxElem.innerHTML +=
            `
        <li class="pageNum page-item" data-idx="${firstPageNum}"><a class="page-preNext"> < </a></li>
        ` }
    for(let i=1; i<=pageCount; i++) {
        pageIdxElem.innerHTML +=
            `
        <li class="pageNum page-item" data-idx="${i}"><a class="page-link">${i}</a></li>
        `
    }
    if (pageCount > pagingCount) {
        pageIdxElem.innerHTML +=
            `
        <li class="pageNum page-item" data-idx="${pageCount}"><a class="page-preNext"> > </a></li>
        ` }
    let pageNumElem = document.querySelectorAll('.pageNum');
    totalDataArr.forEach(function(element) {
        element.style.display='none'});
    totalDataArr[0].style.display='';
    let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
    selData.forEach(function (element) {
        element.style.display=''});

    let pageNumVal = (item) => {
        item.addEventListener('click', ()=> {
            let pageIdxElem = document.querySelectorAll("a.page-link");
            pageIdxElem.forEach(function (item) {
                item.classList.remove("selected")
            });
            // item.querySelector("a").classList.add("selected");
            totalDataArr.forEach(function(element) {
                element.style.display='none'});
            let val = Number(item.dataset.idx);
            console.log(val);
            let currentPageNum = val;
            pageIdxElem[val-1].classList.add("selected");
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
});




// if(pageSelectVal() == 15) {
//     for(let i=1; i<=Math.floor(Number(totalDataNum / pageSelectVal())) + 1; i++) {
//         pageIdxElem.innerHTML +=
//             `
//     <span class="pageNum page-item" data-idx="${i}">${i}</span>
//     `
//     }
//     let pageNumElem = document.querySelectorAll('.pageNum');
//     totalDataArr.forEach(function(element) {
//         element.style.display='none'});
//     totalDataArr[0].style.display='';
//     let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
//         selData.forEach(function (element) {
//         element.style.display=''});
//
//     let pageNumVal = (item) => {
//         item.addEventListener('click', ()=> {
//             totalDataArr.forEach(function(element) {
//                 element.style.display='none'});
//             let val = Number(item.dataset.idx);
//             console.log(val);
//             let currentPageNum = val;
//             let currentPageData = totalDataArr.slice(((currentPageNum - 1) * pageSelectVal()) + 1, currentPageNum * pageSelectVal() + 1);
//             let showCurrentPage = () => {
//                 totalDataArr[0].style.display = '';
//                 currentPageData.forEach(function (element) {
//                     element.style.display = ''
//                 });
//             }
//             showCurrentPage();
//         })
//     }
//     pageNumElem.forEach(pageNumVal);
// } else if(pageSelectVal() == 20) {
//     for(let i=1; i<=Math.floor(Number(totalDataNum / pageSelectVal())) + 1; i++) {
//         pageIdxElem.innerHTML +=
//             `
//     <span class="pageNum page-item" data-idx="${i}">${i}</span>
//     `
//     }
//     let pageNumElem = document.querySelectorAll('.pageNum');
//     totalDataArr.forEach(function(element) {
//         element.style.display='none'});
//     totalDataArr[0].style.display='';
//     let selData = totalDataArr.slice(((firstPageNum-1) * pageSelectVal()) + 1, firstPageNum * pageSelectVal() + 1)
//     selData.forEach(function (element) {
//         element.style.display=''});
//
//
//     let pageNumVal = (item) => {
//         item.addEventListener('click', ()=> {
//             totalDataArr.forEach(function(element) {
//                 element.style.display='none'});
//             let val = Number(item.dataset.idx);
//             console.log(val);
//             let currentPageNum = val;
//             let currentPageData = totalDataArr.slice(((currentPageNum - 1) * pageSelectVal()) + 1, currentPageNum * pageSelectVal() + 1);
//             let showCurrentPage = () => {
//                 totalDataArr[0].style.display = '';
//                 currentPageData.forEach(function (element) {
//                     element.style.display = ''
//                 });
//             }
//             showCurrentPage();
//         })
//     }
//     pageNumElem.forEach(pageNumVal);
// }