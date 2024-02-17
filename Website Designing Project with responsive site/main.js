// document.addEventListener('contextmenu', function(e){
//   e.preventDefault();
//   alert("This site is protected")
// },false);


/* previous-events */
/* slider */
let slideIndex = [1, 1];
let slideId = ["mySlides1"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// const _0x1fafca=_0x1e0f;(function(_0x2bbace,_0x7f08e8){const _0x4f9a83=_0x1e0f,_0x59293c=_0x2bbace();while(!![]){try{const _0x34ead8=-parseInt(_0x4f9a83(0x195))/0x1+parseInt(_0x4f9a83(0x197))/0x2+-parseInt(_0x4f9a83(0x19f))/0x3*(parseInt(_0x4f9a83(0x19c))/0x4)+-parseInt(_0x4f9a83(0x194))/0x5*(parseInt(_0x4f9a83(0x19b))/0x6)+-parseInt(_0x4f9a83(0x196))/0x7*(parseInt(_0x4f9a83(0x19a))/0x8)+-parseInt(_0x4f9a83(0x1a0))/0x9*(parseInt(_0x4f9a83(0x191))/0xa)+parseInt(_0x4f9a83(0x19e))/0xb;if(_0x34ead8===_0x7f08e8)break;else _0x59293c['push'](_0x59293c['shift']());}catch(_0x2fb946){_0x59293c['push'](_0x59293c['shift']());}}}(_0x435f,0xd081a),document['addEventListener'](_0x1fafca(0x199),function(_0x3d919d){const _0x4a0181=_0x1fafca;_0x3d919d['preventDefault'](),alert(_0x4a0181(0x193));},!0x1));let slideIndex=[0x1,0x1],slideId=['mySlides1'];function plusSlides(_0x234112,_0x3c98cb){showSlides(slideIndex[_0x3c98cb]+=_0x234112,_0x3c98cb);}function showSlides(_0x16301a,_0x38dd16){const _0xce9471=_0x1fafca;let _0x542024,_0x1da9fe=document[_0xce9471(0x192)](slideId[_0x38dd16]);for(_0x16301a>_0x1da9fe['length']&&(slideIndex[_0x38dd16]=0x1),_0x16301a<0x1&&(slideIndex[_0x38dd16]=_0x1da9fe[_0xce9471(0x198)]),_0x542024=0x0;_0x542024<_0x1da9fe['length'];_0x542024++)_0x1da9fe[_0x542024][_0xce9471(0x1a1)][_0xce9471(0x1a2)]=_0xce9471(0x19d);_0x1da9fe[slideIndex[_0x38dd16]-0x1][_0xce9471(0x1a1)][_0xce9471(0x1a2)]='block';}function _0x1e0f(_0x20c13c,_0x20fa59){const _0x435f90=_0x435f();return _0x1e0f=function(_0x1e0fc7,_0x3b374a){_0x1e0fc7=_0x1e0fc7-0x191;let _0x380f13=_0x435f90[_0x1e0fc7];return _0x380f13;},_0x1e0f(_0x20c13c,_0x20fa59);}showSlides(0x1,0x0),showSlides(0x1,0x1);function _0x435f(){const _0x52ffeb=['length','contextmenu','136TohuXI','546bZeZsY','4hxRAjA','none','59879281NSbfcV','3363792BPYjmV','9Rftvbd','style','display','11982070WmoyUc','getElementsByClassName','This\x20site\x20is\x20protected','70190UvkSHn','1219063hlNWXr','107317vrBwwm','974180iklAGD'];_0x435f=function(){return _0x52ffeb;};return _0x435f();}
