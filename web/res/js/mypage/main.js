{
    const fileInputBtn = document.querySelector('#input_file');
    const fileInputLabel = document.querySelector('#input_for_label');
    const dataSpan = document.querySelector('#data');

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

        fetch('/user/mypage/profileimg', {
            method: 'POST',
            body: fData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.image);
                setProfileImg(data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const setProfileImg = (data) => {
        if (!data.result) {
            return;
        }

        //프로필 이미지
        const iuser = dataSpan.dataset.iuser;
        const src = `/images/user/${iuser}/${data.result}`;

        const fileImg = fileInputLabel.querySelector('img');
        fileImg.src = src;
    }
}