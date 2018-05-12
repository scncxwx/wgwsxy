/*
*官网改版-add-2017年5月5日22:33:31
*xwx
*/


$(function () {

    $('#goToTop').hide();
    $("#banner li:eq(0)").siblings().hide();
    $('#nav4-menu-btn').on('click', function () {
        var show = $("#nav4-menu").css('display');
        if (show == 'none') {
            $("#nav4-menu").show();
        } else {
            $("#nav4-menu").hide();
        }
    });

    bannerSwitch();


    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });

    $('#goToTop a').click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 300);
        return false;
    });

});

//banner图片切换
var bannerSwitch = function () {

    //上一张图
    $(".banner-btn-l").on('click', function () {
        var index = $(this).prev().children().find('.banner_a').index();
        if (index == '0') {
            nindex = '3';
            $(this).prev().children().children().eq(2).show().siblings().hide();
            $(this).prev().children().children().eq(2).addClass('banner_a').siblings().removeClass('banner_a');
        } else {
            $(this).prev().children().children().eq(index - 1).show().siblings().hide();
            $(this).prev().children().children().eq(index - 1).addClass('banner_a').siblings().removeClass('banner_a');
        }
    });

    //下一张图
    $(".banner-btn-r").on('click', function () {
        var index = $(this).prev().prev().children().find('.banner_a').index();
        if (index == '2') {
            $(this).prev().prev().children().children().eq(0).show().siblings().hide();
            $(this).prev().prev().children().children().eq(0).addClass('banner_a').siblings().removeClass('banner_a');
        } else {
            $(this).prev().prev().children().children().eq(index + 1).show().siblings().hide();
            $(this).prev().prev().children().children().eq(index + 1).addClass('banner_a').siblings().removeClass('banner_a');
        }
    });
};

