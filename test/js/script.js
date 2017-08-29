$(function(){ //start
// - -- - -  -- - - - - - - - - - --- - - - - - - - - - - - - - - - - - - - - -
//- - - - - - - - - - - - - - - - - - - - - - - - -동작 실행
$(document).ready(function(){
     var nowScroll = $(window).scrollTop();
     headerActionWF();
     sec1ActionBF();
     SCROLL.headerScroll();
     SCROLL.headerHide(nowScroll);
     SCROLL.sec1Side();
     sec1ActionT();
     START.sec2();
})
$(window).scroll(function(){
     var nowScroll = $(window).scrollTop();
     // console.log(nowScroll);
     SCROLL.headerScroll();
     SCROLL.headerHide(nowScroll);
     if(nowScroll == 0){
          headerActionW(nowScroll);
     }
     if(nowScroll == 690){
          sec1ActionB();
     }
     SCROLL.sec1Side(nowScroll);
     sec1ActionT();
})

//- - - - - - - - - - - - - - - - - - - - - - -  - -함수 묶음
var headerActionW = function(nowScroll){
     COMMON.actionBoxW($('#text h1 span'),450);
     COMMON.actionBoxW($('#text h1 strong'),550);
     COMMON.actionBoxW($('#text p'),800,true);
}
var headerActionWF = function(nowScroll){
     COMMON.actionBoxWF($('#text h1 span'),450);
     COMMON.actionBoxWF($('#text h1 strong'),550);
     COMMON.actionBoxWF($('#text p'),800);
}
var sec1ActionB = function(nowScroll){
     COMMON.actionBoxB($('#gallery h3'),500);
     COMMON.actionBoxB($('#gallery p'),900);
}
var sec1ActionBF = function(nowScroll){
     COMMON.actionBoxBF($('#gallery h3'),500);
     COMMON.actionBoxBF($('#gallery p'),900);
}
var sec1ActionT = function(){
     console.log('test');
}
//- - - - - - - - - - - - - - - - - - - - - - - - -함수 선언
var START = {
     sec2:function(){
          console.log('start!!');
          $('#sec2').animate({height:'380px'},1100,'easeInOutQuint');
     }
}
var SCROLL = {
     scrollnum:function(){
          // console.log($(window).scrollTop());
     },
     headerScroll:function(){
          var nowScroll = $(window).scrollTop();
          $('header #text span').css('margin-top',(-nowScroll*0.5));
          $('header #text strong').css('margin-top',(nowScroll*0.05));
          $('header #text p').css('margin-top',(nowScroll*0.05));
          $('header h2').css('margin-top',(-nowScroll*0.7));
          $('header #dark').css('background-position','0'+' '+((-nowScroll)*0.5)+'px');
     },
     headerHide:function(nowScroll){
          $('header').css({
               opacity:(1-(nowScroll/1000)+0.1)
          })
     },
     sec1Side:function(){
          var nowScroll = $(window).scrollTop();
          // console.log(nowScroll);
          $('#sec1 #sideimg').css('top',(-nowScroll*0.1));
          $('#sec1 #imgbox').css('top',(-nowScroll*0.15)+100);
          $('#sec1 #gallery > div:first-child').css('margin-top',(nowScroll)*0.015);
          if(nowScroll < 10){
               $('#sec1 #sideimg').fadeOut(900,'easeInOutQuint');
               $('#sec1 #imgbox').fadeOut(1100,'easeInOutQuint');
              //  $('#sec1').css('height','700px');
          }else if(nowScroll > 11){
               $('#sec1 #sideimg').fadeIn(900,'easeInOutQuint');
               $('#sec1 #imgbox').fadeIn(1100,'easeInOutQuint');
              //  $('#sec1').css('height','auto');

          }
     }
};
var CLICK = {};
var COMMON = {
     actionBoxW:function(hi,time){
          var divBox = $('<data class="divBox"></data>');
          divBox.appendTo(hi);
          var paWidth = divBox.parent().css('width');
          var paHeight = divBox.parent().css('height');
          var paColor = divBox.parent().css('color');
          divBox.parent().css({
               overflow:'hidden',
               position:'relative'
          });
          divBox.css({
               width:paWidth,
               height:paHeight,
               backgroundColor:'#fff',
               zIndex:'100',
               position:'absolute', top:0, right:paWidth,
               opacity:'0.5',
               display:'inline-block'
          });
          divBox.animate({left:0},time,'easeInQuint',function(){
               $(this).parent().css('color',paColor);
          }).animate({left:paWidth},time,'easeOutQuint',function(){
               $(this).remove();
          })
     },
     actionBoxWF:function(hi,time){
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
               backgroundColor:'#fff',
               zIndex:'100',
               position:'absolute', top:0, right:paWidth,
               display:'inline-block'
          });
          divBox.animate({left:0},time,'easeInQuint',function(){
               $(this).parent().css('color',paColor);
          }).animate({left:paWidth},time,'easeOutQuint',function(){
               $(this).remove();
          })
     },
     actionBoxB:function(hi,time){
          var divBox = $('<data class="divBox"></data>');
          divBox.appendTo(hi);
          var paWidth = divBox.parent().css('width');
          var paHeight = divBox.parent().css('height');
          var paColor = divBox.parent().css('color');

          divBox.parent().css({
               overflow:'hidden',
               position:'relative'
          });
          divBox.css({
               width:paWidth,
               height:paHeight,
               backgroundColor:'#333',
               zIndex:'100',
               position:'absolute', top:0, right:paWidth,
               opacity:'0.5',

               display:'inline-block'
          })
          divBox.animate({left:0},time,'easeInQuint',function(){
               $(this).parent().css('color',paColor);
          }).animate({left:paWidth},time,'easeOutQuint',function(){
               $(this).remove();
          })
     },
     actionBoxBF:function(hi,time){
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
               backgroundColor:'#333',
               zIndex:'100',
               position:'absolute', top:0, right:paWidth,
               display:'inline-block'
          })
          divBox.animate({left:0},time,'easeInQuint',function(){
               $(this).parent().css({color:paColor});
          }).animate({left:paWidth},time,'easeOutQuint',function(){
               $(this).remove();
          })
     },
     actionBoxT:function(hi,time){
          var divBox = $('<data class="divBox"></data>');
          divBox.appendTo(hi);
          var paWidth = divBox.parent().css('width');
          var paHeight = divBox.parent().css('height');
          var paColor = divBox.parent().css('color');
          var paBack = divBox.parent().css('background');

          divBox.parent().css({
               overflow:'hidden',
               background:'none'
          });
          divBox.css({
               width:paWidth,
               height:paHeight,
               backgroundColor:'#ddd',
               zIndex:'100',
               position:'absolute', bottom:paHeight, right:0,
               display:'inline-block'
          })
          divBox.animate({bottom:0},time,'easeInQuint',function(){
               $(this).parent().css({background:paBack});
          }).animate({top:paHeight},time,'easeOutQuint',function(){
               $(this).remove();
          })
     },

};
//=- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}); //end
