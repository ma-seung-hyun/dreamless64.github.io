//(function(){

// DOM get,set CSS function
HTMLElement.prototype.css = function(prop,setValue){
  var returnStyleValue = function(t){
    var style = window.getComputedStyle(t);
    return style;
  };
  if(!arguments.length){return returnStyleValue(this)};
  var value = returnStyleValue(this)[prop];
  if(prop && !setValue){
    if(/px/g.test(value)){
      value = Math.round(value.split('px')[0]);
      if(!/[^0-9]/g.test(value)){
        value = parseInt(value);
      };
    };
    return value;
  }else if(prop && setValue){
    if(typeof setValue == 'number'){
      this.style[prop] = setValue + 'px';
      return;
    };
    var unitTest = /px|%|vw|vh|pt/gi
    ,   unit = ''
    ,   justValue = setValue
    ;
    if(unitTest.test(setValue)){
      unit = setValue.match(unitTest)
      ,justValue = setValue.split(unit)[0]
      ;
    };
    this.style[prop] = justValue + unit;
    return;
  };
};

//DOMselect
var resultDisplay = document.getElementsByClassName('result-display')[0]
,   resultValue = document.getElementsByClassName('result-value')[0]
,   decisionBtn = document.querySelector('.decision-btn button')
,   listBtn = document.getElementsByClassName('list-btn')[0]
,   listDisplay = document.getElementsByClassName('list-display')[0]
,   restaurantAddBtn = document.getElementsByClassName('restaurant-add-btn')[0]
,   restaurantList = document.getElementsByClassName('restaurant-list')[0]
,   restaurantAddDisplay = document.getElementsByClassName('restaurant-add-display')[0]
;

function resultDisplayPosition(){
  var w = window.innerHeight/2 - resultDisplay.css('height')/2;
  resultDisplay.css('margin-top',w);
};

function decisionBtnAction(){
  var sto;
  clearTimeout(sto);
  decisionBtn.classList.add('touch');
  sto = setTimeout(function(){
    decisionBtn.classList.remove('touch');
  },200);
};

function listBtnToggle(){
  if(listBtn.classList.contains('open')){
    listBtn.classList.remove('open');
  }else{
    listBtn.classList.add('open');
  };
};
function listDisplayToggle(){
  if(listDisplay.classList.contains('open')){
    listDisplay.classList.remove('open');
  }else{
    listDisplay.classList.add('open');
  };
};


function resultValueAction(){
  var sto,sto2;
  sto = setTimeout(function(){
    resultValue.classList.remove('conclusion');
    resultValue.classList.add('calculating');
  },400);
  // var randomValue = getRandomValue();
  // writeInResultValue(randomValue);
  sto2 = setTimeout(function(){
    resultValue.classList.remove('calculating');
    resultValue.classList.add('conclusion');
  },1000);
};

function decisionBtnTouchstart(){
  decisionBtn.addEventListener('touchstart', function(){
    decisionBtnAction();
    resultValueAction();
  });
};

function listBtnTouchstart(){
  listBtn.addEventListener('touchstart', function(){
    listBtnToggle();
    listDisplayToggle();
  });
};


function cssClassEvent(){
  decisionBtnTouchstart();
  listBtnTouchstart();
};

window.addEventListener('DOMContentLoaded', function(){
  cssClassEvent();
  resultDisplayPosition();
});
window.addEventListener('resize', function(){
  resultDisplayPosition();
});

//})();//f
