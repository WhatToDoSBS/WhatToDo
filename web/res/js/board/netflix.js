{
    choiceBtnFrm = document.querySelector('#choiceBtnFrm');
    displayResultDiv = document.querySelector('.display_result');
    displayResultSpan = document.querySelector('.result_span');
    funBtn = choiceBtnFrm.querySelector('.fun-btn');
    dataList = document.querySelector('.data');

    mecaRankNum = dataList.dataset.mecaRankNum;

    funBtn.addEventListener('click',(e)=>{
        e.preventDefault();
    })
}