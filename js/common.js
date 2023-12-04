
$(window).scroll(function(){
    let st = $(window).scrollTop();

    // 헤더 고정하기
    let hh = $('#header').offset().top
    if(st >= 40){
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed');
    }
}); // 브라우저 스크롤 이벤트 끝

$('.hk_current').slick({
    autoplay : true,
    vertical : true,
    arrows : false,
});

$('#topBn_in').slick({
    autoplay : true,
    arrows : false,
    autoplayspeed : 5000,
    speed : 1000
});

$('.h_search .open').click(function(){
    $('.h_search_wrap').slideDown();
    $('.bg_white').show();
    $('.bg_black').show();
    return false;
});
$('.close').click(function(){
    $('.h_search_wrap').slideUp();
    $('.bg_white').hide();
    $('.bg_black').hide();
    return false;
});

$('.side_slide').slick({
    mobileFirst : true,
    arrows : false,
    infinite : false,
    slidesToShow : 4.5
});
$('.h_menu .open').click(function(){
    $('#side').animate({
        right : 0
    });   
    $('.bg_black').show();  
    return false;

    });

$('.side_close').click(function(){
    $('#side').animate({
        right : '-200%'  
    });
    $('.bg_black').hide();  
    return false;
    });

$('.depth_slide').slick({
    mobileFirst : true,
    arrows : false,
    infinite : false
});
// $('.d1').click(function(){
//     let i = $(this).index();
//     $('.d1').removeClass('on');
//     $('.d1 .s_depth').stop().show();
//     $(this).addClass('on');
// });
// $('.d1').click(function(){ 
//     $('.d1').removeClass('on');
//     $(this).addClass('on');
//     $('.s_depth').stop().show();
//     $(this).siblings('.s_depth').stop().hide();
//     return false;
// });
$('.side_menu .d1').click(function(){
    let i = $(this).siblings('.s_depth').css('display');
    if(i == 'block'){
        $('.side_menu .d1').removeClass('on');
        $('.side_menu .s_depth').stop().show();
    } else {
        $('.side_menu .d1').removeClass('on');
        $('.side_menu .s_depth').stop().hide();
        $(this).addClass('on');
        $(this).siblings('.s_depth').stop().slideDown();
    };
    return false;
});
$('.pc_gnb .d1').mouseover(function(){
    $(this).find('.pc_gnb_menu').show();
    $('.bg_black').stop().show();
}).mouseout(function(){
    $(this).find('.pc_gnb_menu').css({
        display :' none'
    });
    $('.bg_black').stop().slideUp();
    return false
});

// 푸터

$('.f3_btn').click(function(){
    let i = $(this).siblings('.droplist').css('display');
    if(i == 'none'){
        $(this).addClass('on');
        $(this).siblings('.droplist').show();
    } else {
        $(this).removeClass('on');
        $(this).siblings('.droplist').hide();
    };
    return false;
});