$(function () {

// Фильтр

    var mixer = mixitup('.directions__list');

    $(`.directions__filter-button`).on('click', function () {
        $('.directions__filter-button').removeClass('directions__filter-button--active')
        $(this).addClass('directions__filter-button--active')
    });

// Слайдер 1

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.team__slider-prev').on('click', function (e) {
        $('.team__slider').slick('slickPrev');
        e.preventDefault();
    });
    $('.team__slider-next').on('click', function (e) {
        $('.team__slider').slick('slickNext');
        e.preventDefault();
    });


//  Слайдер 2

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        responsive:
        [
            // {
            //     breakpoint: 768,
            //     settings: ,
            // }
        ]
    });
    $('.testimonials__arrow-prev').on('click', function (e) {
        $('.testimonials__slider').slick('slickPrev');
        e.preventDefault();
    });
    $('.testimonials__arrow-next').on('click', function (e) {
        $('.testimonials__slider').slick('slickNext');
        e.preventDefault();
    });


//  Аккордион

    $('.program__acc-link').on('click', function (e) {
        $(this).toggleClass('program__acc-link--active');
        $(this).children('.program__acc-text').slideToggle();
        e.preventDefault();
    });


//  Плавный скролл при нажатии на ссылку

    $("[data-scroll]").on("click", function (e) {
        var elId = $(this).data('scroll');
        var elOffset = $(elId).offset().top;
        $('.container__header').removeClass('open');
        $(".overlay").toggleClass("show");
        $('html, body').animate({
            scrollTop: elOffset - 60
        }, 900)
        e.preventDefault();
    });

//  Бургер меню

    setInterval(() => {
        if ($(window).scrollTop() > 100 && $(".container__header").hasClass("open") === false) {
            $('.header__burger').addClass("follow")
        } else {
            $('.header__burger').removeClass("follow");
        }
    }, 0);
    $('.header__burger, .overlay').on("click", function (e) {
        $(".container__header").toggleClass("open");
        $(".overlay").toggleClass("show");

        e.preventDefault();
    })
});