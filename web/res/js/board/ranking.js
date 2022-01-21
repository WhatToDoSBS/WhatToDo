{
    var mecaurl = '/board/mecarankingjson';
    var steamurl = '/board/steamrankingjson';

    fetch(mecaurl).then((res)=> {
        return res.json();
    }).then((data)=> {
        console.log(data);
        mecarandomGame(data);
    }).catch((err)=> {
        console.log(err);
    });

    const randomMecaRankNumArr = [];
    const randomMecaRankNmArr = [];

    // mecarank 랜덤함수
    function mecarandomGame(data) {
        data.forEach(function (item) {
            randomMecaRankNumArr.push(item.rankNum);
            randomMecaRankNmArr.push(item.rankNm);
        });
        // 랜덤 숫자 도출 및 게임 도출
        const randomNum = Math.floor((Math.random()*randomMecaRankNumArr.length)+1);
        console.log('오늘 하실 게임은~ ' + randomMecaRankNumArr[randomNum] + '위인 '+ randomMecaRankNmArr[randomNum]);
    }
}

