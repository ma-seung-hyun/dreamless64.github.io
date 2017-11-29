(function($){
$(document).ready(function(){
// code start!!
var mql = window.matchMedia("screen and (max-width: 639px)");

mql.addListener(function(e) {
    if(e.matches) {
        console.log('모바일 화면 입니다.');
    } else {
        console.log('데스크탑 화면 입니다.');
    }
});

var $win = $(window),
    $body = $('body');

// document selecting
var
$nav = $('nav'),
  $togBtn = $('.nav_toggleBtn'),
  $navUl = $('nav .nav_ul'),
    $navItem = $('nav .nav_item'),
$secIntro = $('.section_intro'),
$h1 = $('h1'),
$nick = $('.intro_nickname'),
$imgbox = $('.intro_imgbox'),
  $arr = $('.intro_imgbox .intro_arrowbox'),
  $left = $('.intro_imgbox-leftbox'),
    $leftVi = $('.intro_imgbox-leftbox-v_img'),
    $leftWi = $('.intro_imgbox-leftbox-white_img'),
    $leftCi = $('.intro_imgbox-leftbox-code_img'),
    $arrL = $('.intro_imgbox-leftbox .intro_arrowbox'),
    $txtL = $('.intro_imgbox-leftbox .intro_textbox'),
    $boxHL = $('.intro_imgbox-leftbox .intro_imgbox-box_h'),
  $right = $('.intro_imgbox-rightbox'),
    $rightVi = $('.intro_imgbox-rightbox-v_img'),
    $arrR = $('.intro_imgbox-rightbox .intro_arrowbox'),
    $txtR = $('.intro_imgbox-rightbox .intro_textbox'),
    $boxHR = $('.intro_imgbox-rightbox .intro_imgbox-box_h');
var
$mobileBox = $('.intro_mobilebox'),
  $mobileLink = $('.mobile_link'),
    $mobileLinkBox = $('.mobile_linkbox'),
      $mobileP = $('.mobile_p'),
      $mobileA = $('.mobile_a'),
        $mobileHbox = $('.mobile_hbox');
// intro
var introPos = function(){
  var winH = $win.height();
  var mHboxArr = [
    $('.mobile_linkbox').eq(0).find('.mobile_hbox'),
    $('.mobile_linkbox').eq(1).find('.mobile_hbox')
  ];
  $navUl.css({'top': winH/2 - $navUl.height()/2});
  for(var i=0;i<mHboxArr.length;++i){
    mHboxArr[i].css({
      'top':winH/2 - mHboxArr[i].outerHeight()/2
    });
  };
};

var navFunc = function(){
  $togBtn.on('click', function(){
    $nav.toggleClass('active');
    $(this).toggleClass('active');
    if($nav.hasClass('active')){
      $nav.stop().animate({
        'height':100+'%'
      },600,'easeOutBounce');
      $secIntro.css({'filter':'blur(3px)'});
    }else{
      $secIntro.css({'filter':'blur(0px)'});
      $nav.stop().animate({
        'height':0+'%'
      },800,'easeOutQuint');
    };
  });
};
var introInteraction = function(){
  $imgbox.hover(function(){
    $left.on('mouseenter', function(){
      $leftVi.stop().animate({
        'opacity': '0.98',
        'right': '-'+ 38+'%'
      },500,'easeInOutCubic');
      $rightVi.stop().animate({'left':'-'+62.5 +'%'},500,'easeInOutCubic');
      $leftWi.stop().animate({
        'opacity': '0.98',
        'left':'-'+10+'%',
        'padding-left':0
      },500,'easeInOutCubic');
      $leftCi.stop().animate({'background-position': '10%'},500,'easeInOutCubic');
      $right.stop().css({'background-color':'#fe1'},500,'easeInOutCubic');
      $arrL.stop().animate({'opacity':0.4,'left':10+'%'},500,'easeOutQuint');
      $arrR.stop().animate({'opacity':0,'right':3+'%'});
      $txtL.stop().animate({'opacity':1,'left':10+'%'},2000,'easeOutQuint');
      $txtR.stop().animate({'opacity':0,'right':3+'%'});
      $boxHL.stop().animate({
        'opacity':0,
        'left':3+'%'
      });
      $boxHR.stop().animate({
        'opacity':1,
        'right':10+'%'
      });
    });
    $right.on('mouseenter', function(){
      $leftVi.stop().animate({
        'right': '-'+ 58+'%',
        'opacity':1
      },500,'easeInOutCubic');
      $rightVi.stop().animate({'left':'-'+42.5 +'%'},500,'easeInOutCubic');
      $leftWi.stop().animate({
        'left':0,
        'padding-left': 10+'%',
        'opacity':1
      },500,'easeInOutCubic');
      $leftCi.stop().animate({'background-position': '-5%'},800,'easeInOutCubic');
      $right.stop().css({'background-color':'#fff9a7'});
      $arrL.stop().animate({'opacity':0,'left':3+'%'});
      $arrR.stop().animate({'opacity':0.4,'right':10+'%'},500,'easeOutQuint');
      $txtL.stop().animate({'opacity':0,'left':3+'%'});
      $txtR.stop().animate({'opacity':1,'right':10+'%'},2000,'easeOutQuint');
      $boxHL.stop().animate({
        'opacity':1,
        'left':10+'%'
      });
      $boxHR.stop().animate({
        'opacity':0,
        'right':3+'%'
      });
    });
  },function(){
    $leftVi.stop().animate({
      'right': '-'+ 48+'%',
      'opacity':1
    },500,'easeInOutCubic');
    $rightVi.stop().animate({'left':'-'+52.5 +'%'},500,'easeInOutCubic');
    $leftWi.stop().animate({
      'left':0,
      'padding-left':0,
      'opacity':1
    },500,'easeInOutCubic');
    $leftCi.stop().animate({'background-position': '0%'},800,'easeInOutCubic');
    $right.stop().css({'background-color':'#fe1'});
    $arrL.stop().animate({'opacity':0,'left':3+'%'
    });
    $arrR.stop().animate({'opacity':0,'right':3+'%'});
    $txtL.stop().animate({'opacity':0,'left':3+'%'});
    $txtR.stop().animate({'opacity':0,'right':3+'%'});
    $boxHL.stop().animate({
      'opacity':1,
      'left':10+'%'
    });
    $boxHR.stop().animate({
      'opacity':1,
      'right':10+'%'
    });

  });

  $imgbox.trigger('mouseenter');
  $imgbox.hover(function(){
    $nick.stop().fadeOut(400);
  },function(){
    $nick.stop().fadeIn(400);
  });

  //mobile
  $mobileLinkBox.on('click', function(){
    var $this = $(this),
        $thisP = $this.find('.mobile_p');
        // $mobileAL = $('.mobile_linkbox').eq(0).find('.mobile_a'),
        // $mobileAL = $('.mobile_linkbox').eq(1).find('.mobile_a');

      if($this.hasClass('active')){
        $this.removeClass('active');
      }else{
        $mobileLinkBox.removeClass('active');
        $this.addClass('active');
      };
  });
};

//document ready --;

var justReady = function(){
  introInteraction();
  navFunc();
  readyAndResize();
}
var readyAndResize = function(){
  introPos();
}

$win.resize(readyAndResize);
justReady();
$win.trigger('resize');

});//document ready --;
})(jQuery);
