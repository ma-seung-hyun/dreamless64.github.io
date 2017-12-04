(function($){
$(document).ready(function(){
var $win = $(window);
// code start!!


var
// $header = $('header'),
//   $headerUl = $('header .header_ul'),
//   $headerItem = $('header .header_item'),
//   $headerItemLine = $('header .header_item_line');
$header = $('header'),
  $headerBg = $('header .header_bg'),
  $hbox = $('header .hbox'),
    $h1 = $('header h1');



var actionBox = function(hi,time,call){
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

var valueStart = function(){
  actionBox($h1,700);
  actionBox($('.hbox p'),900);
};

var valueScroll = function(){
  var Wst = $win.scrollTop();
  $headerBg.css({
    'opacity':  1 - Wst * 0.001,
    'transform': 'translate3d(0,' +  Wst/2 +'px'+ ',0)'
  });
}
var valuePos = function(){
  var winH = $win.height();

  $hbox.css({
    'top': winH/2 - $hbox.height()/2
  });

  // var itemW = $headerItem.width(),
  //     itemH = $headerItem.height();
  //
  // $headerItem.css({'height': itemW * 1.5});
  // $headerUl.css({
  //   'padding-top' : winH/2 - itemH/2
  // });

}

//document ready..;
var justReady = function(){
  readyAndResize();
  valueStart();
}
var readyAndResize = function(){
  valuePos();
}
var windowScroll = function(){
  valueScroll();

}
$win.resize(readyAndResize);
$win.scroll(windowScroll);
justReady();
$win.trigger('resize');
$win.trigger('scroll');
});//document ready..;
})(jQuery);
