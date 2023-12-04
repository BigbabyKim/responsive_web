$('.main1 > .main_slide_list').slick({
    dots : true,
    appendDots : '.ms_pager',
    prevArrow : '.ms_prev',
    nextArrow : '.ms_next',
    autoplay : true,
    autoplaySpeed : 3000,
    speed : 1000
});


// $('.main1 > .main_slide_list').on('afterChange',function(event, slick, currentSlide, nextSlide){
//     if($('.slick-current').hasClass('.black')===false){
//         $('.ms_prev').addClass('h');
//         $('.ms_next').addClass('h');
//     }
// });
$('.main1 > .main_slide_list').on('afterChange',function(event, slick, currentSlide, nextSlide){
    if($('.slick-current').hasClass('.white')===false){
        $('.ms_prev').removeClass('h');
        $('.ms_next').removeClass('h');
    } return;
});


$('.ms_pause').click(function(){
    $('.main_slide_list').slick('slickPause');
    $(this).css({
        display: 'none'
    });
    $('.ms_play').css({
        display: 'block'
    });
});
$('.ms_play').click(function(){
    $('.main_slide_list').slick('slickPlay');
    $(this).css({
        display: 'none'
    });
    $('.ms_pause').css({
        display: 'block'
    });
});

// $('.ms_pause').click(function(){
//     $('.main_slide_list').slick('slickPause');
//     $(this).hide();
//     $('.ms_play').show();
// });

// 메인 2 슬라이드
$('.main2 > .inner >.main2_slide_list').slick({
    arrows: false,
    asNavFor: '.ms2_pager'
});
$('.ms2_pager').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    asNavFor: '.main2 > .inner >.main2_slide_list',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
  });
$('.main3 > .inner >.main3_slide_list').slick({
    arrows: false,
    asNavFor: '.ms3_pager.m3'
});
$('.ms3_pager.m3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    centerMode: true,
    asNavFor: '.main3 > .inner >.main3_slide_list',
    focusOnSelect: true,
    variableWidth: true
  });
$('.main4 > .inner >.main3_slide_list').slick({
    arrows: false,
    asNavFor: '.ms3_pager.m4'
});
$('.ms3_pager.m4').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    centerMode: true,
    asNavFor: '.main4 > .inner >.main3_slide_list',
    focusOnSelect: true,
    variableWidth: true
  });
$('.main5 > .inner >.main3_slide_list').slick({
    arrows: false,
    asNavFor: '.ms3_pager.m5'
});
$('.ms3_pager.m5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    centerMode: true,
    asNavFor: '.main5 > .inner >.main3_slide_list',
    focusOnSelect: true,
    variableWidth: true
  });

// 메인 8 슬라이드

  $('.m8_slide_list.mo').slick({
    dots:true,
    arrows: false,
    // variableWidth: true
});
  $('.m8_slide_list.pc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.m8_pager.pc',
    arrows: false,
});
$('.m8_pager.pc').slick({
    arrows : false,
    // centerMode: true,
    asNavFor: '.m8_slide_list.pc',
    focusOnSelect: true,
    //variableWidth: true
    vertical : true,
    slidesToShow : 4
});

// 메인9
// $('.m9_title').click(function(){
//     $(this).addClass('on')
//     $(this).siblings('.m9_list11').addClass('on');
//     return false;
// })
// $('.m9_title.on').click(function(){
//     $(this).removeClass('on')
//     $(this).siblings('.m9_list11').removeClass('on');
//     return false;
// })
// $('.m9_title').click(function(){
//     let i = $(this).siblings('.m9_list11').css('display');
//     if(i == 'flex'){
//         $('.m9_title').removeClass('on');
//         $('.m9_list11').stop().slideUp();
//     } else {
//         $('.m9_title').removeClass('on');
//         $(this).addClass('on');
//         $('.m9_list11').stop().slideUp();
//         $(this).siblings('.m9_list11').stop().slideDown();
//     };
//     return false;
// });
$('.m9_title').click(function(){
    let i = $(this).siblings('.m9_list11').css('display');
     if(i == 'flex'){
        $(this).removeClass('on');
        $(this).siblings('.m9_list11').css({
            display : 'none'
        });
    } else{
        $(this).addClass('on');
        $(this).siblings('.m9_list11').css({
            display : 'flex'
        });
        
    };
});