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
        touchThreshold: 10,
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
        $('.nav, .nav-toggle, .burger').removeClass('active'); // при скролле по нажатию в меню убирать меню и менять бургер

        $('.header').removeClass('fixed')

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

    //* BUTTON

    $('.button')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });

    //* POPUP

    $('.popup-link').on('click', function (event) {
        event.preventDefault();

        $('.popup').toggleClass('active')
    })

    $('.popup__close').on('click', function (event) {
        event.preventDefault();

        $('.popup').removeClass('active')
        $('.popup__content').removeClass('_sending')
        $('#form').trigger("reset");
        $('.popup__form-input').removeClass('_error')
    })

    //* INTRO

    let intro = $('#intro'),
        headerH = $('#header').innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })


    function checkScroll(scrollOffset) {
        if (scrollOffset >= 1) {
            intro.addClass('visible');
        } else {
            intro.removeClass('visible')
        }
    };
})