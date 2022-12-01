$(document).ready(function () {

    let header = $('#header');

    var last;
    $(document).bind('touchmove', function (e) {
        var current = e.originalEvent.touches[0].clientY;
        if (current > last) {
            header.removeClass('fixed')
            header.addClass('opacity')
        } else if (current < last) {
            header.addClass('fixed')
            header.removeClass('opacity')
        }
        last = current;
    });

    var timer;
    $(window).on('wheel', function (e) {
        if (e.originalEvent.wheelDelta >= 0) {
            header.addClass('fixed')
            header.removeClass('opacity')
            if (scrollOffset == 0) {
                header.removeClass('fixed');

            }
            // clearTimeout(timer);
        } else {
            header.removeClass('fixed')
            header.addClass('opacity')
            // clearTimeout(timer);
        }

        // timer = window.setTimeout(function () {
        //     console.log('Остановлено');
        // }, 1);
    });

    let scrollOffset = $(window).scrollTop();

    checkHeader(scrollOffset);

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        checkHeader(scrollOffset);
    })

    function checkHeader(scrollOffset) {
        if (scrollOffset < 195 && scrollOffset > 0) {
            header.removeClass('fixed');
        }
        // else {
        //     header.addClass('fixed')
        // }
    };

});