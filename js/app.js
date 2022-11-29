$(document).ready(function () {

    //* BURGER ACTIVE

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    });

    //* ACCORDEON ACTIVE

    $('.faq-accordion__item').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
    })

    //* SLIDER

    $('.works__slider, .reviews__slider').slick({
        slidesToShow: 4,
        infinite: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    //* SMOOTH SCROLL

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');
        $('.nav, .nav-toggle').removeClass('active'); // при скролле по нажатию в меню убирать меню и менять бургер

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    })

    //* SERVICES

    $('.reviews__overflow').on('click', function (event) {
        event.preventDefault()

        $(this).closest('.reviews__item, .comments__item').toggleClass('opened')
    })

    //* SWITCH

    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
        $('.comments__selection-text').toggleClass('active');
        if ($(this).hasClass('switch-on')) {
            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
        }
    });
})