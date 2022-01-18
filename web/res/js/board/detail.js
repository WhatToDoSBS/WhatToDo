let cmtFrmElem = document.querySelector("#cmtFrm");
let dataElem = document.querySelector("#data");

if(cmtFrmElem) {
    cmtFrmElem.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    cmtFrmElem.cmt_submit.addEventListener('click', () => {
        let cmtVal = cmtFrmElem.ctnt.value;
        if(cmtVal.length === 0) {
            alert("내용을 입력해 주세요.");
        } else if (cmtVal.includes("<") || cmtVal.includes(">")) {
            alert("내용에 < 혹은 >를 사용하실 수 없습니다.");
        } else {
            insBoardCmtAjax(cmtVal);
        }
    });

    let insBoardCmtAjax = (val) => {
        let param = {
            'iboard' : dataElem.dataset.iboard,
            'ctnt' : val
        };
        fetch('/board/cmt', {
            'method' : 'post',
            'headers': { 'Content-Type': 'application/json' },
            'body' : JSON.stringify(param)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch(e => {
                console.log(e);
        })
    }
}

const item = {
    icmt: data.result,
    iuser: parseInt(dataElem.dataset.iuser),
    ctnt: cmtFrmElem.ctnt.value,
}

let cmtListElem = document.querySelector("#cmt_list");
if(cmtListElem) {
    const iboard = dataElem.dataset.iboard;
    const getCmtList = () => {
        fetch(`/board/cmt/${iboard}`, {
            method: 'GET',
        })
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setCmtList(list)
        });
    }

    const setCmtList = (list) => {

        if(list.length === 0) {
            cmtListElem.innerText = '댓글 없음';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
        <tr>
            <th>NO</th>
            <th>내용</th>
            <th>필명</th>
            <th></th>
        </tr>
        `
        list.forEach(item => {
            makeTr(table, item);
        });
        cmtListElem.appendChild(table);
    }

    const makeTr = (table, item) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${item.icmt}</td>
        <td>${item.ctnt}</td>
        <td>${item.iuser}</td>
        `;

        const td = document.createElement('td');
        tr.appendChild(td);

        // if(parseInt(dataElem.dataset.iuser)===item.iuser) {
        const modBtn = document.createElement("input");
        modBtn.type = 'button';
        modBtn.value = '수정';

        const delBtn = document.createElement("input");
        delBtn.type = 'button';
        delBtn.value = '삭제';

        delBtn.addEventListener('click', ()=> {
            if(confirm("삭제하시겠습니가?")) {
                delCmt(item.icmt, tr);
            }
        });

        td.appendChild(modBtn);
        td.appendChild(delBtn);
        // }
        table.appendChild(tr);
    }
}

const delCmt = (icmt, tr) => {
    fetch(`/board/cmt/${icmt}`,
        {'method': 'delete',
        'headers': { 'Content-Type': 'application/json' }
        },)
}

let delBtnElem = document.querySelector("#delBtn");

if(delBtnElem) {
    delBtnElem.addEventListener('click', () => {
        let iboard = dataElem.dataset.iboard;

        if(confirm("삭제하시겠습니까?")) {
            location.href=`/board/del/?iboard=${iboard}`;
        }
    });
}

let lastPBtnElem = document.querySelector('.lastPBtn');
let lastNBtnElem = document.querySelector('.lastNBtn');

if(lastPBtnElem) {
    lastPBtnElem.addEventListener('click', (e) => {
        e.preventDefault();
        alert("마지막 글입니다.");
    })
}

if(lastNBtnElem) {
    lastNBtnElem.addEventListener('click', (e) => {
        e.preventDefault();
        alert("최신 글입니다.");
    })
}
