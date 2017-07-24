$(function(){ //start
// - -- - -  -- - - - - - - - - - --- - - - - - - - - - - - - - - - - - - - - -
//- - - - - - - - - - - - - - - - - - - - - - - - -동작 실행
$(document).ready(function(){
     headerAction();
     sec1Action();
     SCROLL.headerScroll();
})
$(window).scroll(function(){
     var nowScroll = $(window).scrollTop();
     console.log(nowScroll);
     SCROLL.headerScroll();
     SCROLL.headerHide(nowScroll);
     headerAction(nowScroll);
})
//- - - - - - - - - - - - - - - - - - - - - - -  - -함수 묶음
var headerAction = function(nowScroll){
     if(nowScroll == 0){
          COMMON.actionBox($('#text h1 span'),900);
          COMMON.actionBox($('#text h1 strong'),1100);
          COMMON.actionBox($('#text p'),1600);
     }
}
var sec1Action = function(nowScroll){
     COMMON.actionBox2($('#gallery h3'),1200);
     COMMON.actionBox2($('#gallery p'),2000);
}

//- - - - - - - - - - - - - - - - - - - - - - - - -함수 선언
var SCROLL = {
     scrollnum:function(){
          console.log($(window).scrollTop());
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
          if(nowScroll > 750){
               $('header').fadeOut();
          }else{
               $('header').fadeIn();
          }
     }
};
var CLICK = {};
var COMMON = {
     actionBox:function(hi,time){
          var divBox = $('<data class="divBox"></data>');
          divBox.appendTo(hi);
          var paWidth = divBox.parent().css('width');
          var paHeight = divBox.parent().css('height');
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
               display:'inline-block'
          })
          divBox.animate({left:paWidth},time,'easeInOutQuint');
     },
     actionBox2:function(hi,time){
               var divBox = $('<data class="divBox"></data>');
               divBox.appendTo(hi);
               var paWidth = divBox.parent().css('width');
               var paHeight = divBox.parent().css('height');
               divBox.parent().css({
                    overflow:'hidden',
                    position:'relative'
               });
               divBox.css({
                    width:paWidth,
                    height:paHeight,
                    backgroundColor:'rgba(210, 210, 210, 0.4)',
                    zIndex:'100',
                    position:'absolute', top:0, right:paWidth,
                    display:'inline-block'
               })
               divBox.animate({left:paWidth},time,'easeInOutQuint');
          },

};
//=- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}); //end
