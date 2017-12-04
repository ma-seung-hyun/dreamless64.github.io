(function($){
$(document).ready(function(){
var $win = $(window);
var
$headerBg = $('.header_bg'),
$hbox = $('header .hbox'),
  $hboxWeb = $('header .hbox_web'),
  $hboxCoding = $('header .hbox_coding'),
  $hboxVision = $('header .hbox_vision'),
  $hbox_p = $('header .hbox p');
// code start!!


var commonPos = function(){
  var winH = $win.height();

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
};

// doc
var justReady = function(){
  visionStart();
  readyAndResize();
}
var readyAndResize = function(){
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
