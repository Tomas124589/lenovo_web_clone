$(document).ready(function () {

    $('.product-data section h2').each(function () {

        $(this).on('click', function () {
            $(this).toggleClass('active');
            $(this).siblings('.content').toggle()[0].scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $('.bullets .bullet').each(function () {
        $(this).on('click', function () {
            $('.product-showcase .images img.active').removeClass('active');
            $('.product-showcase .images img').eq($(this).index()).addClass('active');

            $('.bullets .bullet.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    $('.content-tab a').each(function () {
        $(this).on('click', function () {
            $('.content-tab a.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    setStickyObserver('.content-tab');
});