{
    var url = '/board/rankingjson';

    fetch(url).then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data.rankNm.get(0));
    }).catch(function (err) {
        console.log(err);
    });
}

