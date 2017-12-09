(function($){
$(document).ready(function(){
// code start!!
var $win =$(window);



var
$listUl = $('.list_ul'),
$listItem = $('.list_ul .list_item'),
$listItem1 = $('.list_ul').eq(0).find('.list_item'),
$listItem2 = $('.list_ul').eq(1).find('.list_item'),
$showUl = $('.show_ul'),
$showItem = $('.show_ul .show_item'),
$closeBtn = $('.show_close_btn');

// console.log($listItem);
var colorSetting = function(){

  var colorArr = [
    '#E44752',//w
    '#125E46',//w
    '#FBAF00',
    '#84C9CE',
    '#87CEFA',
    '#eb3c7a',
    '#121738',
    '#FBAF00',
    '#87CEFA'
  ];

  for(var i = 0; i < $showItem.length; ++i){
    $showItem.eq(i).css({
      'background-color': colorArr[i]
    });
  }

};
var listClickShowToggle = function(){

  $listItem1.hover(function(){
    if(!$(this).hasClass('active')){
      var thi = $(this).index();

      $showItem.css({
        'z-index': '-9999'
      });
      $showItem.eq(thi).css({
        'z-index': '-9998'
      });
      $showItem.eq(thi).stop(true).animate({
        'left':'68px'
      },500,'easeOutCubic');
    };
  },function(){
    if(!$(this).hasClass('active')){
      var thi = $(this).index();
      $showItem.css({
        'z-index': '-9999'
      });
      $showItem.eq(thi).css({
        'z-index': '-9998'
      });
      $showItem.eq(thi).stop(true).animate({
        'left':'0'
      },1000,'easeOutCubic');
    };
  });
  $listItem2.hover(function(){
    if(!$(this).hasClass('active')){
      var thi = $(this).index()+5;
      $showItem.css({
        'z-index': '-9999'
      });
      $showItem.eq(thi).css({
        'z-index': '-9998'
      });
      $showItem.eq(thi).stop(true).animate({
        'left':'68px'
      },500,'easeOutCubic');
    };
  },function(){
    if(!$(this).hasClass('active')){
      var thi = $(this).index()+5;
      $showItem.css({
        'z-index': '-9999'
      });
      $showItem.eq(thi).css({
        'z-index': '-9998'
      });
      $showItem.eq(thi).stop(true).animate({
        'left':'0'
      },1000,'easeOutCubic');
    };
  });



  $listItem1.on('click', function(){
    if($(this).hasClass('active')){
      $closeBtn.trigger('click');
    }else{
      $listItem.removeClass('active');
      $(this).addClass('active');
      var thi = $(this).index();
      $showItem.css({
        'z-index': '-9999'
      });
      $showItem.eq(thi).css({
        'z-index': '-9998'
      });
      $showItem.eq(thi).stop(true).animate({
        'left': '100%'
      },500,'easeOutCubic',function(){
        $showItem.not($showItem.eq(thi)).css({
          'left':'0',
          'z-index': '-9999'
        });
      });
    };
  });

  $listItem2.on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $closeBtn.trigger('click');
    }else{
      $listItem.removeClass('active');
      $(this).addClass('active');
      var thi = $(this).index();
      $showItem.css({
        'z-index': '-9999'
      });
      $showItem.eq(thi+5).css({
        'z-index': '-9998'
      });
      $showItem.eq(thi+5).stop(true).animate({
        'left': '100%'
      },500,'easeOutCubic',function(){
        $showItem.not($showItem.eq(thi+5)).css({
          'left':'0'
        });
      });
    };
  });

  $closeBtn.on('click', function(){
    $listItem.removeClass('active');
    $(this).parent().stop(true).animate({
      'left': 0
    },500,'easeOutCubic');
  });

};




/******************************************************************************
████████ ███████ ███████ ████████
   ██    ██      ██         ██
   ██    █████   ███████    ██
   ██    ██           ██    ██
   ██    ███████ ███████    ██
******************************************************************************/

// function([string1, string2],target id,[color1,color2])
 consoleText([
   "명제 : 이 문장은 거짓이다."
   ,"이 명제가 사실이라고 한다면 이 명제가 주장하고 있는 '이 문장은 거짓이다'라는 것은 사실이다."
   ," 즉 '이 문장이 거짓이다'라는게 사실이므로, '이 명제는 거짓'이라는 결론이 된다. 이는 이 결론을 이끌어낸 '이 명제가 사실이다'라는 전제와 모순된다.",
   "이 명제가 거짓이라고 한다면 이 명제가 주장하고 있는 '이 문장은 거짓이다'라는 것은 거짓이다.",
   "즉 '이 문장은 거짓이다'라는게 거짓이므로, '이 명제는 사실'이라는 결론이 된다. 이는 이 결론을 이끌어낸 '이 명제가 거짓이다'라는 전제와 모순된다."
 ],
 'text',[
   '#E44752'
   ,'#2a886b'
   ,'#FBAF00'
   ,'#87CEFA'
   ,'#84C9CE'
 ]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 4000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 25)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}


//document ready..;
var justReady = function(){
  colorSetting();
  listClickShowToggle();
}
var readyAndResize = function(){

}
var windowScroll = function(){

}
$win.resize(readyAndResize);
$win.scroll(windowScroll);
justReady();
$win.trigger('resize');
$win.trigger('scroll');
});//document ready..;
})(jQuery);
