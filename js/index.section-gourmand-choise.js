new Swiper('.section-gourmand-choice__roller', {
    // navigation:{
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    slidesPerView:3,
    loop: true,
    speed: 200,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        900:{
            slidesPerView:3
        }
    },
    simulateTouch: true
}
);