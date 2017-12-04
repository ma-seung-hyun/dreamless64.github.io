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

var actionBox = function(hi,time){
  var divBox = $('<data class="divBox"></data>');
  divBox.appendTo(hi);
  var paWidth = divBox.parent().css('width');
  var paHeight = divBox.parent().css('height');
  var paColor = divBox.parent().css('color');

  divBox.parent().css({
     overflow:'hidden',
     position:'relative',
     color:'transparent'
  });
  divBox.css({
     width:paWidth,
     height:paHeight,
     backgroundColor: paColor,
     zIndex:'100',
     position:'absolute', top:0, right:paWidth,
     display:'inline-block'
  })
  divBox.animate({left:0},time,'easeInQuint',function(){
     $(this).parent().css({color:paColor});
  }).animate({left:paWidth},time,'easeOutQuint',function(){
     $(this).remove();
  });
};
// actionBoxW($('.hbox h1'),1000);
var visionStart = function(){
  actionBox($hboxWeb,600);
  actionBox($hboxCoding,800);
  actionBox($hboxVision,500);
  actionBox($hbox_p,900);
};

var visionScroll = function(){
  var Wst = $win.scrollTop();
  $headerBg.css({
    'opacity':  1 - Wst * 0.001,
    'transform': 'translate3d(0,' + -Wst/4 +'px'+ ',0)'
  });
}

// actionBoxW($('header p'),1000);

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
      $mobileP = $('.mobile_p') ,
      $mobileA = $('.mobile_a'),
        $mobileHbox = $('.mobile_hbox');
var
$headerBg = $('.header_bg'),
$hbox = $('header .hbox'),
  $hboxWeb = $('header .hbox_web'),
  $hboxCoding = $('header .hbox_coding'),
  $hboxVision = $('header .hbox_vision'),
  $hbox_p = $('header .hbox p');


// var $sec_select = $('.section_select');
// console.log($sec_select);

// intro
var commonPos = function(){
  var winH = $win.height();
  var mHboxArr = [
    $('.mobile_linkbox').eq(0).find('.mobile_hbox'),
    $('.mobile_linkbox').eq(1).find('.mobile_hbox')
  ];
  var visionTxtboxArr = [
    $('.section_select .txtbox'),
    $('.section_puzzle .txtbox'),
    $('.section_after .txtbox')
  ];
  var secH = $('section').height();
  var secW = $('section').width();
  var ddH = $('.before_skillbox dd').height();

  $navUl.css({'top': winH/2 - $navUl.height()/2});

  for(var i = 0; i < mHboxArr.length; ++i){
    mHboxArr[i].css({
      'top': winH/2 - mHboxArr[i].outerHeight()/2
    });
  };
  for(var j = 0; j < visionTxtboxArr.length; ++j){
    visionTxtboxArr[j].css({
      'top': secH/2 - visionTxtboxArr[j].outerHeight()/2,
      'left':secW/4 - visionTxtboxArr[j].outerWidth()/2
    });
  };
  $('.section_before .txtbox').css({
    'top': secH/4 - $('.section_before .txtbox').outerHeight()/2
  });
  $('.before_skillbox dd').css({
    'line-height': ddH + 'px'
  });

  // var secTextboxArr = [
  //   $('section').eq(0).find('.item_textbox')
  // ];
  // for(var i = 0; i < secTextboxArr.length; ++i){
  //   $secTxtbox.css({
  //     'margin-top':winH/2 - secTextboxArr[i].outerHeight()/2
  //   });
  // };

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

//document ready..;
var justReady = function(){
  introInteraction();
  navFunc();
  visionStart();

  readyAndResize();
}
var readyAndResize = function(){
  commonPos();
}
var windowScroll = function(){
  visionScroll();
}
$win.resize(readyAndResize);
$win.scroll(windowScroll);
justReady();
$win.trigger('resize');
$win.trigger('scroll');
});//document ready..;
})(jQuery);
