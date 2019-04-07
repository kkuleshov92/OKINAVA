var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.header__pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.header-next-slide',
        prevEl: '.header-prev-slide',
    },

    swiper: new Swiper('.swiper-container', {
        pagination: {
            el: '.header__pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.header-next-slide',
            prevEl: '.header-prev-slide',
        },
    })
});