{
    const fileInputBtn = document.querySelector('#input_file');
    const fileInputLabel = document.querySelector('#input_for_label');

    fileInputLabel.addEventListener('click', () => {
        if (fileInputBtn) {
            fileInputBtn.click();
        }
    });

    fileInputBtn.addEventListener('change', () => {
        const img = fileInputBtn.files[0];
        if (img != null) {
            uploadProfileImg(img);
        }
    });



    const uploadProfileImg = (img) => {
        const fData = new FormData();
        fData.append('profileimg', img);

        fetch('/user/mypage/profileimg', {
            'method': 'post',
            'body': fData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    }
}