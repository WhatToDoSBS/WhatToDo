{
    choiceBtnFrm = document.querySelector('#choiceBtnFrm');
    displayResultDiv = document.querySelector('.display_result');
    displayResultSpan = document.querySelector('.result_span');
    funBtn = choiceBtnFrm.querySelector('.fun-btn');
    dataList = document.querySelector('.data');



    funBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let mecaRankList = dataList.dataset.mecaRank;
        let mecaRankNum = dataList.dataset.mecaRankNum;
        let mecaRankNm = dataList.dataset.mecaRankNm;
        let mecaCompany = dataList.dataset.mecaRankCompany;
        let steamRankNum = dataList.dataset.steamRankNum;
        let steamRankNm = dataList.dataset.steamRankNm;

        console.log(mecaRankList);
        var whatGame = document.createTextNode("test");
    })
}