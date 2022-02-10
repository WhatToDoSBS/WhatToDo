const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 3000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    // fade 효과일 때 슬라이드 이미지가 쌓이는 느낌
    // 그림자 이미지가 점점 진하게 드리움 위 현상을 막기 위해 옵션 추가
    effect : 'fade',
    fadeEffect: { crossFade: true },

    // swiper js display:none 상태에서 작동하지 않을 때
    // display:none 요소에서 block이 될 때 슬라이드는 작동되지 않는다. 아래 옵션값을 넣어 초기화 해준다.
    observer: true, observeParents: true,

    speed: 1000,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable : true,  // 버튼 클릭 여부
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});


