//header-slider
$('.header__photo-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.header__text-slider'
});

$(".header__text-slider").on("init", function(event, slick){
    $(".header__pagination").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$(".header__text-slider").on("afterChange", function(event, slick, currentSlide){
    $(".header__pagination").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$('.header__text-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="header-prev-slide"></div>',
    nextArrow: '<div class="header-next-slide"></div>',
    asNavFor: '.header__photo-slider',
    adaptiveHeight: true
});

let menu = document.querySelector('.header__nav'),
    openMenu = document.querySelector('.nav-open'),
    closeMenu = document.querySelector('.nav-close');

openMenu.addEventListener('click', function () {
    menu.classList.toggle('showed');
});

closeMenu.addEventListener('click', function () {
    menu.classList.remove('showed');
});

//reviews slider

$('.reviews__photo-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.reviews__text-slider'
});

$(".reviews__text-slider").on("init", function(event, slick){
    $(".reviews__pagination").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$(".reviews__text-slider").on("afterChange", function(event, slick, currentSlide){
    $(".reviews__pagination").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$('.reviews__text-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="reviews-prev-slide"></div>',
    nextArrow: '<div class="reviews-next-slide"></div>',
    asNavFor: '.reviews__photo-slider',
    adaptiveHeight: true
});