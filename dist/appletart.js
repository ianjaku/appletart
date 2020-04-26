!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.appletart=t():e.appletart=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e,t){!function(e,t){e.querySelectorAll("[data-bind]").forEach((function(e){if(e.dataset.bind){var n=e.dataset.bind;t.registerBind(n,e)}}))}(e,t),function(e,t){e.querySelectorAll("[data-action]").forEach((function(e){var n=function(n){if(n.startsWith("on")){var r=n.slice(2).toLowerCase();e.addEventListener(r,(function(r){var i=e.dataset[n];null!=i&&t.callAction(i,r)}))}};for(var r in e.dataset)n(r)}))}(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={registerElements:function(e,t){e.forEach((function(e){return r(e,t)}))},registerElement:r,resolveElementsOrString:function(e){if(null==e){var t=document.querySelector("body");if(null==t)throw Error("Couldn't define a scope, no scope given and body not found.");return[t]}if("string"==typeof e){var n=document.querySelectorAll(e);return Array.from(n)}return"forEach"in e?Array.from(e):[e]}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(2));t.default={Store:i.default},t.Store=i.default},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(3)),o=r(n(0)),u=function(){function e(e,t){void 0===t&&(t=null);var n=o.default.resolveElementsOrString(t);this.changeHandler=new i.default(e,n)}return Object.defineProperty(e.prototype,"state",{get:function(){return this.changeHandler.getState()},enumerable:!0,configurable:!0}),e}();t.default=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(4)),o=r(n(0)),u=r(n(5)),a=function(){function e(e,t){var n=this;this.binds={},this.builders=e.builders,this.actions=e.actions,this.state=i.default.makeReactive(e.state,this,""),o.default.registerElements(t,this),this.garbageCollector=new u.default((function(e){var t=e.dataset.bind;null!=t&&null!=n.binds[t]&&(n.binds[t]=n.binds[t].filter((function(t){return t!==e})))})),this.garbageCollector.registerElements(t)}return e.prototype.setState=function(e){this.state=e},e.prototype.registerChange=function(e,t){var n=this,r=this.binds[e];if(null!=r){var i=Object.values(r);i.forEach((function(e){if(null!=e){var r=e.dataset.builder,i=t;if(null!=r){var o=n.builders[r];if(null!=o)return void o(n.state,e)}"value"in e?e.value=i:e.innerHTML=i}})),o.default.registerElements(i,this)}},e.prototype.registerBind=function(e,t){null==this.binds[e]?this.binds[e]=[t]:this.binds[e].push(t)},e.prototype.callAction=function(e,t){null!=this.actions[e]&&this.actions[e](this.state,t)},e.prototype.getState=function(){return this.state},e}();t.default=a},function(e,t,n){"use strict";function r(e,t,n){var r={set:i(t,n),get:u(t,n),deleteProperty:o(t,n)};return Object.defineProperty(e,"_reactive",{value:!0,enumerable:!1,writable:!0}),new Proxy(e,r)}function i(e,t){return function(n,r,i){var o=Reflect.set(n,r,i);if("length"===r&&"number"==typeof i&&e.registerChange(t,n),Array.isArray(n[r])){var u=a(t,r),l=a(u,"length");e.registerChange(l,n[r].length)}return e.registerChange(a(t,r),i),o}}function o(e,t){return function(n,r){var i=Reflect.deleteProperty(n,r);return"length"in n&&e.registerChange(a(t,"length"),n.length),e.registerChange(t,n),i}}function u(e,t){return function(n,i,o){var u=Reflect.get(n,i);return"object"==typeof u&&!0!==u._reactive&&(u=r(u,e,a(t,i)),Reflect.set(n,i,u)),u}}function a(e,t){return""===e?t:e+"."+t}Object.defineProperty(t,"__esModule",{value:!0}),t.default={makeReactive:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.mutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.removedNodes.forEach((function(t){"dataset"in t&&(null!=t.dataset.bind&&e(t))}))}))}))}return e.prototype.registerElements=function(e){var t=this;e.forEach((function(e){return t.registerElement(e)}))},e.prototype.registerElement=function(e){this.mutationObserver.observe(e,{childList:!0,subtree:!0})},e}();t.default=r}])}));