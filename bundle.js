!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",y={};function v(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,O=b&&b(b(N([])));O&&O!==r&&n.call(O,i)&&(w=O);var E=g.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=g,u(E,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},j(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var e="function"==typeof Symbol&&Symbol.observable||"@@observable",n=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function i(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={data:void 0,error:void 0,curUser:void 0,appState:void 0},f=function r(n,a,c){var u;if("function"==typeof a&&"function"==typeof c||"function"==typeof c&&"function"==typeof arguments[3])throw new Error(t(0));if("function"==typeof a&&void 0===c&&(c=a,a=void 0),void 0!==c){if("function"!=typeof c)throw new Error(t(1));return c(r)(n,a)}if("function"!=typeof n)throw new Error(t(2));var s=n,f=a,l=[],p=l,d=!1;function h(){p===l&&(p=l.slice())}function y(){if(d)throw new Error(t(3));return f}function v(e){if("function"!=typeof e)throw new Error(t(4));if(d)throw new Error(t(5));var r=!0;return h(),p.push(e),function(){if(r){if(d)throw new Error(t(6));r=!1,h();var n=p.indexOf(e);p.splice(n,1),l=null}}}function m(e){if(!i(e))throw new Error(t(7));if(void 0===e.type)throw new Error(t(8));if(d)throw new Error(t(9));try{d=!0,f=s(f,e)}finally{d=!1}for(var r=l=p,n=0;n<r.length;n++)(0,r[n])();return e}function g(e){if("function"!=typeof e)throw new Error(t(10));s=e,m({type:o.REPLACE})}function w(){var r,n=v;return(r={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(t(11));function r(){e.next&&e.next(y())}return r(),{unsubscribe:n(r)}}})[e]=function(){return this},r}return m({type:o.INIT}),(u={dispatch:m,subscribe:v,getState:y,replaceReducer:g})[e]=w,u}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"identification":return u(u({},t),{},{appState:"identification",curUser:void 0===e.curUser?"Anonim":e.curUser});case"loading":return u(u({},t),{},{appState:"loading"});case"incomMes":return u(u({},t),{},{data:e.payload,appState:"incomMes"});case"success":return u(u({},t),{},{data:e.payload,error:void 0,appState:"success"});case"error":return u(u({},t),{},{data:void 0,appState:"error",error:e.error});default:return t}})),l=function(t){return{type:"identification",curUser:t}};function p(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}var h=r(757),y=r.n(h);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g,w,b,O,E,j="https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",L="messages.json";function x(){return(x=d(y().mark((function t(){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(j,"/").concat(L),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return Object.values(t).map((function(t){return m(m({},t),{},{date:new Date(t.date)})}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=d(y().mark((function t(e){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(j,"/").concat(L),{method:"POST",body:JSON.stringify(m(m({},e),{},{date:new Date})),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t){if(t){var e="";return t.slice(t.length-20,t.length).reverse().forEach((function(t){var r=String(t.date).match(/\w+ \w+ \d+ \d+ \d+:\d+:\d+/i),n=new Date(r).toLocaleString("ru");e+='<div class="items"><p class="name">'.concat(t.nickname?t.nickname:t.name,'</p><div class="massageBlock"><p class="message">').concat(t.message,'</p><p class="time">').concat(n,"</p></div></div><hr>")})),e}return"data is undefined"}g=document.querySelector("#app"),b=document.querySelector("#loadStatus"),O=document.querySelector("form"),E=document.querySelector("#textInput"),function(){var t=document.createElement("div"),e=document.createElement("div");e.classList.add("opacityWindow"),t.classList.add("modalWindow"),t.innerHTML='<div id="mainWindow"><input id="modalInput" type="text" placeholder="Name" value="Anonim"><input id="modalsubmit" type="submit" value="Confirm name"></div>',document.body.append(t,e);var r=document.querySelector("#modalsubmit"),n=document.querySelector("#modalInput");r&&n&&r.addEventListener("click",(function(){f.dispatch(l(n.value)),document.body.removeChild(t),document.body.removeChild(e),document.body.style.overflowY="visible"})),e.addEventListener("click",(function(){f.dispatch(l("Anonim")),document.body.removeChild(t),document.body.removeChild(e),document.body.style.overflowY="visible"}))}(),f.subscribe((function(){return function(t,e,r){"loading"===t.appState&&e.classList.add("loading"),"error"===t.appState&&(e.classList.remove("loading"),e.classList.add("error")),"success"===t.appState&&(r.innerHTML=P(t.data),e.classList.remove("loading"),e.classList.add("success"),setTimeout((function(){e.classList.remove("success")}),2500)),"incomMes"===t.appState&&(r.innerHTML=P(t.data),e.classList.remove("loading","success"),e.classList.add("incomMesOn"),setTimeout((function(){e.classList.remove("incomMesOn")}),2500))}({data:(t=f.getState()).data,error:t.error,appState:t.appState},b,g);var t})),w=g,f.dispatch({type:"loading"}),function(){return x.apply(this,arguments)}().then((function(t){f.dispatch({type:"success",payload:t}),w.innerHTML=P(t)})).catch((function(t){f.dispatch(function(t){return{type:"error",error:t}}(t)),w.innerHTML=String(t)})),E&&E.addEventListener("input",(function(){E.style.height="56px",E.style.height="".concat(E.scrollHeight,"px")})),O&&O.addEventListener("submit",(function(t){t.preventDefault();var e=f.getState();!function(t){S.apply(this,arguments)}({message:E.value,name:e.curUser}),E.value=""})),setTimeout((function(){var t;t=function(t){if(t.date){console.log(t);var e=f.getState().data;console.log(e),e&&(e.push(t),console.log(e),f.dispatch({type:"incomMes",payload:e}))}},new EventSource("".concat(j,"/").concat(L)).addEventListener("put",(function(e){return t(JSON.parse(e.data).data)}))}),0)}()}();