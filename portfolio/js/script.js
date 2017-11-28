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

var $win = $(window);
// intro
var introPos = function(){
  var $h1 = $('h1'),
      $arr = $('.intro_imgbox .intro_arrowbox');
    $h1.css({
      // 'top': $win.height()/2 - $h1.outerHeight()/2,
      // 'right': $win.width()/2 - $h1.width()/2
      // 'top':  $h1.outerHeight()/2,
      // 'left': $win.width()/2 - $h1.outerWidth()/2
    });
    $arr.css({'top': $win.height()/2 - 15,});
};

var introPos = function(){
  var $h1 = $('h1'),
      $arr = $('.intro_imgbox .intro_arrowbox'),
      $imgbox = $('.intro_imgbox');
  // $arr.css({'top': $imgbox.height()/2  -15});
};

var navFunc = function(){
  var $nav = $('nav'),
      $togBtn = $('.nav_toggleBtn'),
      $secIntro = $('.section_intro');

  $togBtn.on('click', function(){
    $nav.toggleClass('active');
    $(this).toggleClass('active');
    if($nav.hasClass('active')){
      console.log('있음');
      $nav.stop().animate({
        'height':100+'%'
      },600,'easeOutBounce');
      $secIntro.css({'filter':'blur(3px)'});
    }else{
      $secIntro.css({'filter':'blur(0px)'});
      console.log('없음');
      $nav.stop().animate({
        'height':0+'%'
      },800,'easeOutQuint');
    };
    // $nav.stop().animate({
    //   'height':100+'%'
    // },500,'easeInOutCubic');
  });
};
var introHover = function(){
  var $imgbox = $('.intro_imgbox'),
      $left = $('.intro_imgbox-leftbox'),
      $right = $('.intro_imgbox-rightbox'),
      $leftVi = $('.intro_imgbox-leftbox-v_img'),
      $leftWi = $('.intro_imgbox-leftbox-white_img'),
      $leftCi = $('.intro_imgbox-leftbox-code_img'),
      $rightVi = $('.intro_imgbox-rightbox-v_img'),
      $arrL = $('.intro_imgbox-leftbox .intro_arrowbox'),
      $arrR = $('.intro_imgbox-rightbox .intro_arrowbox'),
      $txtL = $('.intro_imgbox-leftbox .intro_textbox'),
      $txtR = $('.intro_imgbox-rightbox .intro_textbox'),
      $nick = $('.intro_nickname'),
      $boxHL = $('.intro_imgbox-leftbox .intro_imgbox-box_h'),
      $boxHR = $('.intro_imgbox-rightbox .intro_imgbox-box_h');

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
};

//document ready --;

var justReady = function(){
  introHover();
  navFunc();
}
var readyAndResize = function(){
  introPos();
}

$win.resize(readyAndResize);
justReady();
$win.trigger('resize');

});//document ready --;
})(jQuery);
