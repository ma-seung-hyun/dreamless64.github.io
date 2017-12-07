(function($){
$(document).ready(function(){

var reloadInterval = setInterval(function(){
  window.location.reload();
},120000);

var $win = $(window),
    $ul = $('.rank_ul'),
    $item = $('.rank_item'),
    $inUl = $('.inner_ul'),
    $inItem = $('.inner_item'),
    $cwrp = $('.cwrp'),
    $h1 = $('h1');

var itemSize = function(){
  var winH = $win.height(),
      ulH = winH - $('h1').outerHeight(true,true);

  $item.height(ulH/15.5);

  var cwrpT = winH/2 - $cwrp.outerHeight()/2,
      cwrpL = $win.width()/2 - $cwrp.outerWidth()/2;

  $cwrp.css({
    'top': cwrpT,
    'left': cwrpL
  });
  $inItem.css({
    'margin-top': $item.height()/2 - $inItem.height()/2
  })
};

var h1Blank = function(){
  // var h1BlankFunc = function(){
  //   $h1.toogleClass('blank');
  // };
  var h1Interval = setInterval(function(){
    $h1.find('.h1_p').eq(1).toggleClass('blank');
  }, 700);
};
// console.log($h1.find('.h1_p').eq(1));

var scoreSet = function(){
  var scoreArr = [
    ["name","score"],
    ["name2","score2"],
    ["name3","score3"],
    ["name4","score4"],
    ["name5","score5"],
    ["name6","score6"],
    ["name7","score7"],
    ["name8","score8"],
    ["name9","score9"]
  ];
  for(var i = 0; i < scoreArr.length; ++i){
    $('.rank_item').eq(i+1).find('.item_name').text(scoreArr[i][0]);
    $('.rank_item').eq(i+1).find('.item_score').text(scoreArr[i][1]);
  };
}
// document
var resizeFunc = function(){
  itemSize();
}
var readyFunc = function(){
  scoreSet();

  $win.resize(resizeFunc);
  itemSize();
  h1Blank();
};
$(document).ready(function(){
  scoreSet();
}
readyFunc();
});//ready
})(jQuery);
