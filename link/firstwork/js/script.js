// 추후 인터페이스 버전으로 수정
(function($){
$(document).ready(function(){
// DOC ready

// sellcting
var $bg = $('.content_main .bg'),
    $nav = $('.content_nav'),
    $bg_f = $('.content_6 .bg')


// resize method
var resize = {
  mainbg:function(){
    var i = ($(window).width() / 100) * 67;
    if($(window).width() > 1139){
      $bg.css({height:i});
    }else{
      $bg.css({height:'765px'});
    }
  },
  mainh1:function(){
    var i = ($('.content_main .bg').height())/5;
    console.log(i);
    if($(window).width() > 1139){
      $('#h1div > div').css({
        marginTop:i
      })
    }else{
      $('#h1div > div').css({
        marginTop: '140px'
      })
    }
  },
  footerbg:function(){
    var i = ($(window).width() / 100) * 31;
    if($(window).width() > 1139){
      $bg_f.css({height:i});
    }else{
      $bg_f.css({height:'353px'});
    }
  }
}

var navscroll = function(){
  var nowScroll = $(window).scrollTop();
  if(nowScroll >= 150){
    $nav.addClass('scroll');
  }else{
    $nav.removeClass('scroll');
  }
  // console.log(nowScroll);
}

$(window).resize(function(){
  resize.mainbg();
  resize.mainh1();
  resize.footerbg();
  console.log('hi');
});
$(window).scroll(function(){
  navscroll();
})

//document
$(window).trigger('resize');
});//ready
})(jQuery);
