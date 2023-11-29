$(document).ready(function () {

    toggleHeaderScroll();

    $('.collapsible').on('click', function () {

        if (matchMedia('screen and (max-width: 750px)').matches) {
            $(this).toggleClass('collapsed');
            $(this).find('.content').slideToggle();
        } else {
            $('.collapsible').each(function () {
                $(this).toggleClass('collapsed');
                $(this).find('.content').slideToggle();
            });
        }
    });

    $(document).on('scroll', function () {
        toggleHeaderScroll();
    })

    $('.a-img.search').on('click', function () {
        $('.flex-group-1 .search-wrapper').toggle();
        $('.flex-group-2').toggleClass('active');
    });

    $('.hamburger-wrapper').on('click', function (e) {

        let $p = $(e.target).parent();

        if ($p.hasClass('hamburger-wrapper') || $p.hasClass('hamburger')) {

            $(this).find('.menu').toggle();
        }
    });

    $('.item-wrapper.foldable').on('click', function (e) {

        let $p = $(e.target).parent();

        if ($p.hasClass('item') || $p.hasClass('item-wrapper')) {

            let $submenu = $(this).find('.submenu');
            $submenu.toggle();

            if ($submenu.css('display') === "none") {
                $(this).find('.item > span').html('+');
            } else {
                $(this).find('.item > span').html('-');
            }

        }
    });

    $('.language-wrapper select').on('change', function () {

        let $flag = $(this).siblings('img.flag');
        let src = $flag.attr('src');

        let src_split = src.split("/");
        src_split.pop();
        src_split.push($(this).val() + ".png");

        $flag.attr('src', src_split.join("/"));
        $(this).siblings('.country-name').html($(this).find("option:selected").text());
    });

    $('.search-wrapper img').on('click', function () {
        $(this).siblings('input#search').addClass('force-show').focus();
    });

    $('input#search').on('blur', function () {
        $(this).removeClass('force-show');
    });

    $('.categories-top .a-img').each(function () {

        $(this).on('mouseover', function () {
            let hoverMenu = $(this).data('hoverMenu');
            $(`.menu[data-hover-menu="${hoverMenu}"]`).fadeIn(150);
        });

        $(this).on('mouseleave', function (e) {

            let hoverMenu = $(this).data('hoverMenu');
            if ($(`.menu[data-hover-menu="${hoverMenu}"]:hover`).length === 0) {
                $(`.menu[data-hover-menu="${hoverMenu}"]`).fadeOut(150);
            }
        });
    });

    $('.categories-top .menu').each(function () {
        $(this).on('mouseleave', function () {
            $(this).fadeOut(150);
        })
    });

});

function toggleHeaderScroll() {

    if (window.scrollY === 0) {
        $('header').removeClass('scrolled');
    } else {
        $('header').addClass('scrolled');
    }
}

function setStickyObserver(selector) {

    new IntersectionObserver(
        function (e) {
            let entry = e[0];

            if (entry.intersectionRatio < 1) {

                $(entry.target).addClass('sticked');
            } else {
                $(entry.target).removeClass('sticked');
            }
        },
        {threshold: [1]}
    ).observe(
        document.querySelector(selector)
    );
}