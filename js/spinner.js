$(document).ready(function () {

    let $spinner = $('.spinner');
    let $filter_tab = $('.filter-tab');

    setInterval(function () {
        nextSpinner($spinner);
    }, 5000);

    $spinner.find('.bullets .bullet').each(function () {
        $(this).on('click', function () {
            setSpinner($(this).index(), $spinner);
        });
    });

    $spinner.find('.pagination > span').each(function () {
        $(this).on('click', function () {
            setSpinner($(this).index(), $spinner);
        });
    });

    $filter_tab.find('>span').each(function () {
        $(this).on('click', function () {

            $filter_tab.find('span.active').removeClass('active');
            $(this).addClass('active');

            $('.product-list.active').removeClass('active');
            $('.product-list').eq($(this).index()).addClass('active');
        })
    });
});

function setSpinner(index, $spinner) {

    let $current = $spinner.find('.overlay.active');
    let $target = $spinner.find('.overlay').eq(index);

    $current.removeClass('active');
    $target.addClass('active');

    $spinner.find(".bullet.active").removeClass('active');
    $spinner.find('.bullet').eq(index).addClass('active');

    $spinner.find('.pagination > span.active').removeClass('active');
    $spinner.find('.pagination > span').eq(index).addClass('active');

    $spinner.find('.contents').css('background-image', 'url(' + $target.data('img') + ')');
}

function nextSpinner($spinner) {

    let index = 0;
    let $current = $spinner.find('.overlay.active');
    let $next = $current.next('.overlay');

    if ($next?.length !== 0) {
        index = $next.index();
    }

    setSpinner(index, $spinner);
}