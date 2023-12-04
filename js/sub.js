$('.m1_slide ul').slick({
    arrows: false,
    variableWidth: true,
    infinite : false
});
$('.m3_slide').slick({
    arrows: false,
    variableWidth: true,
    infinite : false
});
$('.m2_slide').slick({
    dots : true,
    appendDots : '.ms_pager',
    prevArrow : '.ms_prev',
    nextArrow : '.ms_next',
    autoplay : true,
    autoplaySpeed : 3000,
    speed : 1000
});
$('.ms_pause').click(function(){
    $('.m2_slide').slick('slickPause');
    $(this).css({
        display: 'none'
    });
    $('.ms_play').css({
        display: 'block'
    });
});
$('.ms_play').click(function(){
    $('.m2_slide').slick('slickPlay');
    $(this).css({
        display: 'none'
    });
    $('.ms_pause').css({
        display: 'block'
    });
});