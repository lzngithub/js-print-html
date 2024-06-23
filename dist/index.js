(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.myBundle = factory());
})(this, (function () { 'use strict';

  const main = function(dom, text, time = 300) {
    let div = document.createElement('div');
    dom.appendChild(div);
    let textArray = text.split('');
    let addText = setInterval(() => {
      if (textArray.length) {
        div.innerHTML = div.innerHTML + textArray.shift();
      } else {
        clearInterval(addText);
      }
    }, time);
  };

  return main;

}));
