{
    const fileInputBtn = document.querySelector('#input_file');
    const fileInputLabel = document.querySelector('#input_for_label');

    if (fileInputLabel) {
        fileInputLabel.addEventListener('click', () => {
            if (fileInputBtn) {
                fileInputBtn.click();
            }
        });
    }

    if (fileInputBtn) {
        fileInputBtn.addEventListener('change', () => {
            const img = fileInputBtn.files[0];
            if (img != null) {
                uploadProfileImg(img);
            }
        });
    }

    const uploadProfileImg = (img) => {
        const fData = new FormData();
        fData.append('profileimg', img);
        console.log(img);

        for (var pair of fData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        fetch('/user/mypage/profileimg', {
            method: 'POST',
            body: fData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.image);
            })
            .catch(e => {
                console.log(e);
            });
    }
}