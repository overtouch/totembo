"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SCROLL=function(){function a(b){var c,d=this;_classCallCheck(this,a),"string"==typeof b.el?this.el=document.querySelector(b.el):b.el instanceof HTMLElement&&(this.el=b.el),this.top=null!==(c=b.top)&&void 0!==c?c:this.el.offsetTop,this.el.style.position="fixed",this.unit=b.unit,this.el.style.top="".concat(this.scrollNumber(),"px"),window.addEventListener("scroll",function(){return d.scroll()}),window.addEventListener("resize",function(){return d.scroll()})}return _createClass(a,[{key:"scroll",value:function scroll(){this.scrolled=this.scrollNumber(),this.el.style.top=0<this.scrolled-scrollY?this.scrolled-scrollY+"px":0}},{key:"scrollNumber",value:function scrollNumber(){return"px"==this.unit?0<=this.top?this.top:0:"%"==this.unit||null==this.unit?this.calc(window.innerHeight,this.top)-this.el.clientHeight:void 0}},{key:"calc",value:function calc(a,b){return a/100*b}}]),a}(),myScroll=new SCROLL({el:".header__nav",unit:"px"}),btn=document.querySelector(".header__btn"),list=document.querySelector(".header__nav-list"),bg=document.querySelector(".bg");btn.addEventListener("click",function(){list.classList.add("active"),bg.classList.add("active")}),bg.addEventListener("click",function(){list.classList.remove("active"),bg.classList.remove("active")});