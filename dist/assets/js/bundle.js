!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(2),e.exports=o(1)},function(e,t){},function(e,t,o){"use strict";o.r(t);var n=document.querySelector(".calc"),r=n.querySelector(".calc__ui"),a=n.querySelector(".calc__numpad"),i=function(e){var t=e.dataset.id;return t?"multiply"===t||"add"===t||"subtract"===t||"divide"===t?"operation":t:"number"},u=function(e,t,o){var n=parseFloat(e),r=parseFloat(o);return"multiply"===t?n*r:"divide"===t?n/r:"add"===t?n+r:"subtract"===t?n-r:void 0},l=function(e,t,o){var n=e.textContent,r=i(e),a=o.initialValue,l=o.operation,c=o.modifiedValue,d=o.prevKeyType;return"clear"===r||"save"===r?0:"number"===r?"0"===t||"operation"===d||"equals"===d?n:t+n:"dot"===r?t.includes(".")?"operation"===d||"equals"===d?"0.":t:"".concat(t,"."):"operation"===r?a&&l&&"operation"!==d&&"equals"!==d?u(a,l,t):t:"equals"===r?a?"equals"===d?u(t,l,c):u(a,l,t):t:void 0};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e,t,o,n){var r=i(e);console.log(c(n));var a=t.dataset,u=a.initialValue,l=a.operation,d=a.modifiedValue,p=a.prevKeyType;t.dataset.prevKeyType=r,"operation"===r&&(t.dataset.operation=e.dataset.id,t.dataset.initialValue=u&&l&&"operation"!==p&&"equals"!==p?o:n),"equals"===r&&(t.dataset.modifiedValue=u&&"equals"===p?d:n),"clear"===r&&(t.dataset.initialValue="",t.dataset.modifiedValue="",t.dataset.operation="",t.dataset.prevKeyType="")};a.addEventListener("click",(function(e){var t=e.target,o=r.textContent,a=l(t,o,n.dataset);r.textContent=a,d(t,n,a,o)}))}]);