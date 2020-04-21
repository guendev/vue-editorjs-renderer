/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@editorjs/delimiter/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/@editorjs/delimiter/dist/bundle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n(1).toString();
/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var i=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=n}return o(e,null,[{key:"contentless",get:function(){return!0}}]),o(e,[{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e}},{key:"render",value:function(){return this._element}},{key:"save",value:function(e){return{}}}],[{key:"toolbox",get:function(){return{icon:'<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',title:"Delimiter"}}}]),e}();e.exports=i},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.ce-delimiter {\n    line-height: 1.6em;\n    width: 100%;\n    text-align: center;\n}\n\n.ce-delimiter:before {\n    display: inline-block;\n    content: "***";\n    font-size: 30px;\n    line-height: 65px;\n    height: 30px;\n    letter-spacing: 0.2em;\n}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,f=[],l=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),h(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=u||(u=b(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! For license information please see editor.js.LICENSE */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=171)}([function(t,e,n){var o=n(8),i=n(17),r=n(24),a=n(21),s=n(29),l=function(t,e,n){var c,u,f,d,p=t&l.F,h=t&l.G,v=t&l.S,g=t&l.P,y=t&l.B,b=h?o:v?o[e]||(o[e]={}):(o[e]||{}).prototype,m=h?i:i[e]||(i[e]={}),k=m.prototype||(m.prototype={});for(c in h&&(n=e),n)f=((u=!p&&b&&void 0!==b[c])?b:n)[c],d=y&&u?s(f,o):g&&"function"==typeof f?s(Function.call,f):f,b&&a(b,c,f,t&l.U),m[c]!=f&&r(m,c,d),g&&k[c]!=f&&(k[c]=f)};o.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){var o=n(51),i=n(357);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?i(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(358);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3)],void 0===(r="function"==typeof(o=function(o,i,r){"use strict";var a=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=a(i),r=a(r);var s=function(){function t(e){var n=e.config;if((0,i.default)(this,t),(this instanceof t?this.constructor:void 0)===t)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=n}return(0,r.default)(t,[{key:"state",set:function(t){this.Editor=t}}]),t}();o.default=s,s.displayName="Module",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(11);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(64)("wks"),i=n(41),r=n(8).Symbol,a="function"==typeof r;(t.exports=function(t){return o[t]||(o[t]=a&&r[t]||(a?r:i)("Symbol."+t))}).store=o},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(51),n(103),n(2),n(3)],void 0===(r="function"==typeof(o=function(o,i,r,a,s){"use strict";var l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=l(i),r=l(r),a=l(a),s=l(s);var c=function(){function t(){(0,a.default)(this,t)}return(0,s.default)(t,null,[{key:"isSingleTag",value:function(t){return t.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(t.tagName)}},{key:"isLineBreakTag",value:function(t){return t&&t.tagName&&["BR","WBR"].includes(t.tagName)}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);for(var a in Array.isArray(n)?(e=i.classList).add.apply(e,(0,r.default)(n)):n&&i.classList.add(n),o)o.hasOwnProperty(a)&&(i[a]=o[a]);return i}},{key:"text",value:function(t){return document.createTextNode(t)}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}},{key:"append",value:function(t,e){Array.isArray(e)?e.forEach((function(e){return t.appendChild(e)})):t.appendChild(e)}},{key:"prepend",value:function(t,e){Array.isArray(e)?(e=e.reverse()).forEach((function(e){return t.prepend(e)})):t.prepend(e)}},{key:"swap",value:function(t,e){var n=document.createElement("div"),o=t.parentNode;o.insertBefore(n,t),o.insertBefore(t,e),o.insertBefore(e,n),o.removeChild(n)}},{key:"find",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelector(e)}},{key:"get",value:function(t){return document.getElementById(t)}},{key:"findAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelectorAll(e)}},{key:"getDeepestNode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";if(e&&e.nodeType===Node.ELEMENT_NODE&&e[o]){var r=e[o];if(t.isSingleTag(r)&&!t.isNativeInput(r)&&!t.isLineBreakTag(r))if(r[i])r=r[i];else{if(!r.parentNode[i])return r.parentNode;r=r.parentNode[i]}return this.getDeepestNode(r,n)}return e}},{key:"isElement",value:function(t){return t&&"object"===(0,i.default)(t)&&t.nodeType&&t.nodeType===Node.ELEMENT_NODE}},{key:"isFragment",value:function(t){return t&&"object"===(0,i.default)(t)&&t.nodeType&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}},{key:"isContentEditable",value:function(t){return"true"===t.contentEditable}},{key:"isNativeInput",value:function(t){return!(!t||!t.tagName)&&["INPUT","TEXTAREA"].includes(t.tagName)}},{key:"canSetCaret",value:function(e){var n=!0;if(t.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":n=!1}else n=t.isContentEditable(e);return n}},{key:"isNodeEmpty",value:function(t){return!(this.isSingleTag(t)&&!this.isLineBreakTag(t))&&0===(this.isElement(t)&&this.isNativeInput(t)?t.value:t.textContent.replace("​","")).trim().length}},{key:"isLeaf",value:function(t){return!!t&&0===t.childNodes.length}},{key:"isEmpty",value:function(t){var e=this,n=[],o=[];if(!t)return!0;if(!t.childNodes.length)return this.isNodeEmpty(t);for(t.normalize(),n.push(t.firstChild);n.length>0;)if(t=n.shift()){for(this.isLeaf(t)?o.push(t):n.push(t.firstChild);t&&t.nextSibling;)(t=t.nextSibling)&&n.push(t);if(t&&!this.isNodeEmpty(t))return!1}return o.every((function(t){return e.isNodeEmpty(t)}))}},{key:"isHTMLString",value:function(e){var n=t.make("div");return n.innerHTML=e,n.childElementCount>0}},{key:"getContentLength",value:function(e){return t.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length}},{key:"containsOnlyInlineElements",value:function(e){var n;return"string"==typeof e?(n=document.createElement("div")).innerHTML=e:n=e,Array.from(n.children).every((function e(n){return!t.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(e)}))}},{key:"getDeepestBlockElements",value:function(e){return t.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce((function(e,n){return[].concat((0,r.default)(e),(0,r.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getHolder",value:function(t){return"string"==typeof t?document.getElementById(t):t}},{key:"isExtensionNode",value:function(t){return t&&["GRAMMARLY-EXTENSION"].includes(t.nodeName)}},{key:"isAnchor",value:function(t){return"a"===t.tagName.toLowerCase()}},{key:"blockElements",get:function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"]}}]),t}();o.default=c,c.displayName="Dom",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(355),n(26),n(13)],void 0===(r="function"==typeof(o=function(t,e,o,i){"use strict";var r,a=n(1);function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"color: inherit";if("console"in window&&window.console[n]){var a=["info","log","warn","error"].includes(n),l=[];switch(s.logLevel){case r.ERROR:if("error"!==n)return;break;case r.WARN:if(!["error","warn"].includes(n))return;break;case r.INFO:if(!a||t)return}o&&l.push(o);var c="Editor.js ".concat("2.17.0");t&&(a?(l.unshift("line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;",i),e="%c".concat(c,"%c ").concat(e)):e="( ".concat(c," )").concat(e));try{if(a)if(o){var u;(u=console)[n].apply(u,["".concat(e," %o")].concat(l))}else{var f;(f=console)[n].apply(f,[e].concat(l))}else console[n](e)}catch(t){}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=function(t){s.logLevel=t},t.isPrintableKey=function(t){return t>47&&t<58||32===t||13===t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223},t.sequence=function(t){var e,n,i,r=arguments;return o.default.async((function(a){for(;;)switch(a.prev=a.next){case 0:return i=function(t,e,n){return o.default.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,o.default.awrap(t.function(t.data));case 3:return i.next=5,o.default.awrap(e(void 0!==t.data?t.data:{}));case 5:i.next=10;break;case 7:i.prev=7,i.t0=i.catch(0),n(void 0!==t.data?t.data:{});case 10:case"end":return i.stop()}}),null,null,[[0,7]])},e=r.length>1&&void 0!==r[1]?r[1]:function(){},n=r.length>2&&void 0!==r[2]?r[2]:function(){},a.next=5,o.default.awrap(t.reduce((function(t,r){return o.default.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.default.awrap(t);case 2:return a.abrupt("return",i(r,e,n));case 3:case"end":return a.stop()}}))}),Promise.resolve()));case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}))},t.array=function(t){return Array.prototype.slice.call(t)},t.isFunction=function(t){return"function"==typeof t},t.isClass=function(t){return"function"==typeof t&&/^\s*class\s+/.test(t.toString())},t.isEmpty=function(t){return!t||0===Object.keys(t).length&&t.constructor===Object},t.isPromise=function(t){return Promise.resolve(t)===t},t.delay=function(t,e){return function(){var n=this,o=arguments;window.setTimeout((function(){return t.apply(n,o)}),e)}},t.getFileExtension=function(t){return t.name.split(".").pop()},t.isValidMimeType=function(t){return/^[-\w]+\/([-+\w]+|\*)$/.test(t)},t.debounce=function(t,e,n){var o,i=arguments,r=this;return function(){var a=r,s=i,l=n&&!o;window.clearTimeout(o),o=window.setTimeout((function(){o=null,n||t.apply(a,s)}),e),l&&t.apply(a,s)}},t.copyTextToClipboard=function(t){var e=i.default.make("div","codex-editor-clipboard",{innerHTML:t});document.body.appendChild(e);var n=window.getSelection(),o=document.createRange();o.selectNode(e),window.getSelection().removeAllRanges(),n.addRange(o),document.execCommand("copy"),document.body.removeChild(e)},t.getUserOS=u,t.capitalize=function(t){return t[0].toUpperCase()+t.slice(1)},t.deepMerge=function t(n){for(var o=function(t){return t&&"object"===d(t)},i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];if(!r.length)return n;var s=r.shift();if(o(n)&&o(s))for(var l in s)o(s[l])?(n[l]||Object.assign(n,(0,e.default)({},l,{})),t(n[l],s[l])):Object.assign(n,(0,e.default)({},l,s[l]));return t.apply(void 0,[n].concat(r))},t.typeOf=d,t.beautifyShortcut=function(t){var e=u();return t=t.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),t=e.mac?t.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):t.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},t.getValidUrl=function(t){try{return new URL(t).href}catch(t){}return"//"===t.substring(0,2)?window.location.protocol+t:window.location.origin+t},t.openTab=function(t){window.open(t,"_blank")},t.isTouchSupported=t.logLabeled=t.log=t.mouseButtons=t.keyCodes=t.LogLevels=void 0,e=a(e),o=a(o),i=a(i),t.LogLevels=r,function(t){t.VERBOSE="VERBOSE",t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR"}(r||(t.LogLevels=r={})),t.keyCodes={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},t.mouseButtons={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},s.logLevel=r.VERBOSE;var l=s.bind(window,!1);t.log=l;var c=s.bind(window,!0);function u(){var t={win:!1,mac:!1,x11:!1,linux:!1},e=Object.keys(t).find((function(t){return-1!==navigator.appVersion.toLowerCase().indexOf(t)}));return e?(t[e]=!0,t):t}t.logLabeled=c;var f="ontouchstart"in document.documentElement;function d(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}t.isTouchSupported=f})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o=n(51);function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=r?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},function(t,e,n){var o=n(31),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(9)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(10),i=n(104),r=n(38),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(36);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(8),i=n(24),r=n(23),a=n(41)("src"),s=n(176),l=(""+s).split("toString");n(17).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(r(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(r(n,a)||i(n,a,t[e]?""+t[e]:l.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var o=n(0),i=n(9),r=n(36),a=/"/g,s=function(t,e,n,o){var i=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(19),i=n(40);t.exports=n(18)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(60),i=n(36);t.exports=function(t){return o(i(t))}},function(t,e,n){t.exports=n(135)},function(t,e,n){"use strict";var o=n(9);t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(14),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a,s){"use strict";var l=n(15),c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=c(i),r=c(r),a=l(a),s=c(s);var u=function(){function t(){(0,i.default)(this,t),this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}return(0,r.default)(t,[{key:"removeFakeBackground",value:function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}},{key:"setFakeBackground",value:function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}},{key:"save",value:function(){this.savedSelectionRange=t.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var t=window.getSelection();t.removeAllRanges(),t.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"collapseToEnd",value:function(){var t=window.getSelection(),e=document.createRange();e.selectNodeContents(t.focusNode),e.collapse(!1),t.removeAllRanges(),t.addRange(e)}},{key:"findParentTag",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=window.getSelection(),i=null;if(!o||!o.anchorNode||!o.focusNode)return null;var r=[o.anchorNode,o.focusNode];return r.forEach((function(o){for(var r=n;r>0&&o.parentNode&&(o.tagName!==t||(i=o,e&&o.classList&&!o.classList.contains(e)&&(i=null),!i));)o=o.parentNode,r--})),i}},{key:"expandToTag",value:function(t){var e=window.getSelection();e.removeAllRanges();var n=document.createRange();n.selectNodeContents(t),e.addRange(n)}}],[{key:"get",value:function(){return window.getSelection()}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",get:function(){var t=window.getSelection();return t?t.anchorNode:null}},{key:"anchorElement",get:function(){var t=window.getSelection();if(!t)return null;var e=t.anchorNode;return e?s.default.isElement(e)?e:e.parentElement:null}},{key:"anchorOffset",get:function(){var t=window.getSelection();return t?t.anchorOffset:null}},{key:"isCollapsed",get:function(){var t=window.getSelection();return t?t.isCollapsed:null}},{key:"isAtEditor",get:function(){var e=t.get(),n=e.anchorNode||e.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&(o=n.closest(".".concat(t.CSS.editorZone))),o&&o.nodeType===Node.ELEMENT_NODE}},{key:"range",get:function(){var t=window.getSelection();return t&&t.rangeCount?t.getRangeAt(0):null}},{key:"rect",get:function(){var t,e=document.selection,n={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return t=(e=e).createRange(),n.x=t.boundingLeft,n.y=t.boundingTop,n.width=t.boundingWidth,n.height=t.boundingHeight,n;if(!window.getSelection)return a.log("Method window.getSelection is not supported","warn"),n;if(null===(e=window.getSelection()).rangeCount||isNaN(e.rangeCount))return a.log("Method SelectionUtils.rangeCount is not supported","warn"),n;if(0===e.rangeCount)return n;if((t=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=t.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("​")),t.insertNode(o),n=o.getBoundingClientRect();var i=o.parentNode;i.removeChild(o),i.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),t}();o.default=u,u.displayName="SelectionUtils",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o=n(30);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(61),i=n(40),r=n(25),a=n(38),s=n(23),l=n(104),c=Object.getOwnPropertyDescriptor;e.f=n(18)?c:function(t,e){if(t=r(t),e=a(e,!0),l)try{return c(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var o=n(0),i=n(17),r=n(9);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*r((function(){n(1)})),"Object",a)}},function(t,e,n){var o=n(29),i=n(60),r=n(20),a=n(16),s=n(120);t.exports=function(t,e){var n=1==t,l=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,g,y=r(e),b=i(y),m=o(s,h,3),k=a(b.length),x=0,w=n?p(e,k):l?p(e,0):void 0;k>x;x++)if((d||x in b)&&(g=m(v=b[x],x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(u)return!1;return f?-1:c||u?u:w}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";if(n(18)){var o=n(42),i=n(8),r=n(9),a=n(0),s=n(75),l=n(102),c=n(29),u=n(56),f=n(40),d=n(24),p=n(57),h=n(31),v=n(16),g=n(131),y=n(44),b=n(38),m=n(23),k=n(62),x=n(11),w=n(20),S=n(94),E=n(45),T=n(47),C=n(46).f,B=n(96),_=n(41),I=n(12),O=n(34),N=n(65),L=n(63),M=n(98),A=n(54),P=n(68),R=n(55),j=n(97),F=n(122),D=n(19),U=n(32),H=D.f,z=U.f,G=i.RangeError,W=i.TypeError,V=i.Uint8Array,X=Array.prototype,Y=l.ArrayBuffer,K=l.DataView,Z=O(0),q=O(2),J=O(3),$=O(4),Q=O(5),tt=O(6),et=N(!0),nt=N(!1),ot=M.values,it=M.keys,rt=M.entries,at=X.lastIndexOf,st=X.reduce,lt=X.reduceRight,ct=X.join,ut=X.sort,ft=X.slice,dt=X.toString,pt=X.toLocaleString,ht=I("iterator"),vt=I("toStringTag"),gt=_("typed_constructor"),yt=_("def_constructor"),bt=s.CONSTR,mt=s.TYPED,kt=s.VIEW,xt=O(1,(function(t,e){return Ct(L(t,t[yt]),e)})),wt=r((function(){return 1===new V(new Uint16Array([1]).buffer)[0]})),St=!!V&&!!V.prototype.set&&r((function(){new V(1).set({})})),Et=function(t,e){var n=h(t);if(n<0||n%e)throw G("Wrong offset!");return n},Tt=function(t){if(x(t)&&mt in t)return t;throw W(t+" is not a typed array!")},Ct=function(t,e){if(!(x(t)&&gt in t))throw W("It is not a typed array constructor!");return new t(e)},Bt=function(t,e){return _t(L(t,t[yt]),e)},_t=function(t,e){for(var n=0,o=e.length,i=Ct(t,o);o>n;)i[n]=e[n++];return i},It=function(t,e,n){H(t,e,{get:function(){return this._d[n]}})},Ot=function(t){var e,n,o,i,r,a,s=w(t),l=arguments.length,u=l>1?arguments[1]:void 0,f=void 0!==u,d=B(s);if(null!=d&&!S(d)){for(a=d.call(s),o=[],e=0;!(r=a.next()).done;e++)o.push(r.value);s=o}for(f&&l>2&&(u=c(u,arguments[2],2)),e=0,n=v(s.length),i=Ct(this,n);n>e;e++)i[e]=f?u(s[e],e):s[e];return i},Nt=function(){for(var t=0,e=arguments.length,n=Ct(this,e);e>t;)n[t]=arguments[t++];return n},Lt=!!V&&r((function(){pt.call(new V(1))})),Mt=function(){return pt.apply(Lt?ft.call(Tt(this)):Tt(this),arguments)},At={copyWithin:function(t,e){return F.call(Tt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Tt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return j.apply(Tt(this),arguments)},filter:function(t){return Bt(this,q(Tt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Tt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Tt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Tt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ct.apply(Tt(this),arguments)},lastIndexOf:function(t){return at.apply(Tt(this),arguments)},map:function(t){return xt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Tt(this),arguments)},reduceRight:function(t){return lt.apply(Tt(this),arguments)},reverse:function(){for(var t,e=Tt(this).length,n=Math.floor(e/2),o=0;o<n;)t=this[o],this[o++]=this[--e],this[e]=t;return this},some:function(t){return J(Tt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Tt(this),t)},subarray:function(t,e){var n=Tt(this),o=n.length,i=y(t,o);return new(L(n,n[yt]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,v((void 0===e?o:y(e,o))-i))}},Pt=function(t,e){return Bt(this,ft.call(Tt(this),t,e))},Rt=function(t){Tt(this);var e=Et(arguments[1],1),n=this.length,o=w(t),i=v(o.length),r=0;if(i+e>n)throw G("Wrong length!");for(;r<i;)this[e+r]=o[r++]},jt={entries:function(){return rt.call(Tt(this))},keys:function(){return it.call(Tt(this))},values:function(){return ot.call(Tt(this))}},Ft=function(t,e){return x(t)&&t[mt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Dt=function(t,e){return Ft(t,e=b(e,!0))?f(2,t[e]):z(t,e)},Ut=function(t,e,n){return!(Ft(t,e=b(e,!0))&&x(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?H(t,e,n):(t[e]=n.value,t)};bt||(U.f=Dt,D.f=Ut),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Dt,defineProperty:Ut}),r((function(){dt.call({})}))&&(dt=pt=function(){return ct.call(this)});var Ht=p({},At);p(Ht,jt),d(Ht,ht,jt.values),p(Ht,{slice:Pt,set:Rt,constructor:function(){},toString:dt,toLocaleString:Mt}),It(Ht,"buffer","b"),It(Ht,"byteOffset","o"),It(Ht,"byteLength","l"),It(Ht,"length","e"),H(Ht,vt,{get:function(){return this[mt]}}),t.exports=function(t,e,n,l){var c=t+((l=!!l)?"Clamped":"")+"Array",f="get"+t,p="set"+t,h=i[c],y=h||{},b=h&&T(h),m=!h||!s.ABV,w={},S=h&&h.prototype,B=function(t,n){H(t,n,{get:function(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,wt)}(this,n)},set:function(t){return function(t,n,o){var i=t._d;l&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),i.v[p](n*e+i.o,o,wt)}(this,n,t)},enumerable:!0})};m?(h=n((function(t,n,o,i){u(t,h,c,"_d");var r,a,s,l,f=0,p=0;if(x(n)){if(!(n instanceof Y||"ArrayBuffer"==(l=k(n))||"SharedArrayBuffer"==l))return mt in n?_t(h,n):Ot.call(h,n);r=n,p=Et(o,e);var y=n.byteLength;if(void 0===i){if(y%e)throw G("Wrong length!");if((a=y-p)<0)throw G("Wrong length!")}else if((a=v(i)*e)+p>y)throw G("Wrong length!");s=a/e}else s=g(n),r=new Y(a=s*e);for(d(t,"_d",{b:r,o:p,l:a,e:s,v:new K(r)});f<s;)B(t,f++)})),S=h.prototype=E(Ht),d(S,"constructor",h)):r((function(){h(1)}))&&r((function(){new h(-1)}))&&P((function(t){new h,new h(null),new h(1.5),new h(t)}),!0)||(h=n((function(t,n,o,i){var r;return u(t,h,c),x(n)?n instanceof Y||"ArrayBuffer"==(r=k(n))||"SharedArrayBuffer"==r?void 0!==i?new y(n,Et(o,e),i):void 0!==o?new y(n,Et(o,e)):new y(n):mt in n?_t(h,n):Ot.call(h,n):new y(g(n))})),Z(b!==Function.prototype?C(y).concat(C(b)):C(y),(function(t){t in h||d(h,t,y[t])})),h.prototype=S,o||(S.constructor=h));var _=S[ht],I=!!_&&("values"==_.name||null==_.name),O=jt.values;d(h,gt,!0),d(S,mt,c),d(S,kt,!0),d(S,yt,h),(l?new h(1)[vt]==c:vt in S)||H(S,vt,{get:function(){return c}}),w[c]=h,a(a.G+a.W+a.F*(h!=y),w),a(a.S,c,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*r((function(){y.of.call(h,1)})),c,{from:Ot,of:Nt}),"BYTES_PER_ELEMENT"in S||d(S,"BYTES_PER_ELEMENT",e),a(a.P,c,At),R(c),a(a.P+a.F*St,c,{set:Rt}),a(a.P+a.F*!I,c,jt),o||S.toString==dt||(S.toString=dt),a(a.P+a.F*r((function(){new h(1).slice()})),c,{slice:Pt}),a(a.P+a.F*(r((function(){return[1,2].toLocaleString()!=new h([1,2]).toLocaleString()}))||!r((function(){S.toLocaleString.call([1,2])}))),c,{toLocaleString:Mt}),A[c]=I?_:O,o||I||d(S,ht,O)}}else t.exports=function(){}},function(t,e,n){var o=n(11);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(41)("meta"),i=n(11),r=n(23),a=n(19).f,s=0,l=Object.isExtensible||function(){return!0},c=!n(9)((function(){return l(Object.preventExtensions({}))})),u=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,o)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[o].i},getWeak:function(t,e){if(!r(t,o)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[o].w},onFreeze:function(t){return c&&f.NEED&&l(t)&&!r(t,o)&&u(t),t}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=!1},function(t,e,n){var o=n(106),i=n(81);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e,n){var o=n(31),i=Math.max,r=Math.min;t.exports=function(t,e){return(t=o(t))<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(10),i=n(107),r=n(81),a=n(80)("IE_PROTO"),s=function(){},l=function(){var t,e=n(78)("iframe"),o=r.length;for(e.style.display="none",n(82).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;o--;)delete l.prototype[r[o]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=l(),void 0===e?n:i(n,e)}},function(t,e,n){var o=n(106),i=n(81).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},function(t,e,n){var o=n(23),i=n(20),r=n(80)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(12)("unscopables"),i=Array.prototype;null==i[o]&&n(24)(i,o,{}),t.exports=function(t){i[o][t]=!0}},function(t,e,n){var o=n(11);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){var o=n(345),i=n(346),r=n(347);t.exports=function(t,e){return o(t)||i(t,e)||r()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){var o=n(19).f,i=n(23),r=n(12)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},function(t,e,n){var o=n(0),i=n(36),r=n(9),a=n(84),s="["+a+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t,e,n){var i={},s=r((function(){return!!a[t]()||"​"!="​"[t]()})),l=i[t]=s?e(f):a[t];n&&(i[n]=l),o(o.P+o.F*s,"String",i)},f=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var o=n(8),i=n(19),r=n(18),a=n(12)("species");t.exports=function(t){var e=o[t];r&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(21);t.exports=function(t,e,n){for(var i in e)o(t,i,e[i],n);return t}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(359),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s){"use strict";var l=n(15),c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=c(i),r=c(r),a=c(a),s=l(s);var u=function(){function t(e){var n=this;(0,i.default)(this,t),this.iterator=null,this.activated=!1,this.allowArrows=!0,this.allowArrows="boolean"!=typeof e.allowArrows||e.allowArrows,this.iterator=new a.default(e.items,e.focusedItemClass),this.activateCallback=e.activateCallback,document.addEventListener("keydown",(function(e){if(n.isEventReadyForHandling(e))switch(t.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case s.keyCodes.TAB:n.handleTabPress(e);break;case s.keyCodes.LEFT:case s.keyCodes.UP:n.flipLeft();break;case s.keyCodes.RIGHT:case s.keyCodes.DOWN:n.flipRight();break;case s.keyCodes.ENTER:n.handleEnterPress(e)}}),!1)}return(0,r.default)(t,[{key:"activate",value:function(t){this.activated=!0,t&&this.iterator.setItems(t)}},{key:"deactivate",value:function(){this.activated=!1,this.dropCursor()}},{key:"focusFirst",value:function(){this.dropCursor(),this.flipRight()}},{key:"dropCursor",value:function(){this.iterator.dropCursor()}},{key:"isEventReadyForHandling",value:function(t){var e=[s.keyCodes.TAB,s.keyCodes.ENTER];return this.allowArrows&&e.push(s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.UP,s.keyCodes.DOWN),!(!this.activated||-1===e.indexOf(t.keyCode))}},{key:"handleTabPress",value:function(t){switch(t.shiftKey?a.default.directions.LEFT:a.default.directions.RIGHT){case a.default.directions.RIGHT:this.flipRight();break;case a.default.directions.LEFT:this.flipLeft()}}},{key:"flipLeft",value:function(){this.iterator.previous()}},{key:"flipRight",value:function(){this.iterator.next()}},{key:"handleEnterPress",value:function(t){this.activated&&(this.iterator.currentItem&&this.iterator.currentItem.click(),"function"==typeof this.activateCallback&&this.activateCallback(),t.preventDefault(),t.stopPropagation())}},{key:"currentItem",get:function(){return this.iterator.currentItem}}],[{key:"usedKeys",get:function(){return[s.keyCodes.TAB,s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.ENTER,s.keyCodes.UP,s.keyCodes.DOWN]}}]),t}();o.default=u,u.displayName="Flipper",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(103),n(26),n(2),n(3),n(13),n(14),n(360),n(361),n(362),n(28)],void 0===(r="function"==typeof(o=function(t,e,o,i,r,a,s,l,c,u,f){"use strict";var d,p=n(15),h=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BlockToolAPI=void 0,e=h(e),o=h(o),i=h(i),r=h(r),a=h(a),s=p(s),l=h(l),c=h(c),u=h(u),f=h(f),t.BlockToolAPI=d,function(t){t.APPEND_CALLBACK="appendCallback",t.RENDERED="rendered",t.MOVED="moved",t.UPDATED="updated",t.REMOVED="removed",t.ON_PASTE="onPaste"}(d||(t.BlockToolAPI=d={}));var v=function(){function t(e,n,o,r,a){var l=this;(0,i.default)(this,t),this.cachedInputs=[],this.inputIndex=0,this.modificationDebounceTimer=450,this.didMutated=s.debounce((function(){l.cachedInputs=[],l.updateCurrentInput(),l.call(d.UPDATED)}),this.modificationDebounceTimer),this.name=e,this.tool=n,this.class=o,this.settings=r,this.api=a,this.holder=this.compose(),this.mutationObserver=new MutationObserver(this.didMutated),this.tunes=this.makeTunes()}return(0,r.default)(t,[{key:"call",value:function(t,e){if(this.tool[t]&&this.tool[t]instanceof Function)try{this.tool[t].call(this.tool,e)}catch(e){s.log("Error during '".concat(t,"' call: ").concat(e.message),"error")}}},{key:"mergeWith",value:function(t){return o.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.awrap(this.tool.merge(t));case 2:case"end":return e.stop()}}),null,this)}},{key:"save",value:function(){var t,e,n,i=this;return o.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.default.awrap(this.tool.save(this.pluginsContent));case 2:return t=r.sent,e=window.performance.now(),r.abrupt("return",Promise.resolve(t).then((function(t){return n=window.performance.now(),{tool:i.name,data:t,time:n-e}})).catch((function(t){s.log("Saving proccess for ".concat(i.name," tool failed due to the ").concat(t),"log","red")})));case 5:case"end":return r.stop()}}),null,this)}},{key:"validate",value:function(t){var e;return o.default.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=!0,!(this.tool.validate instanceof Function)){n.next=5;break}return n.next=4,o.default.awrap(this.tool.validate(t));case 4:e=n.sent;case 5:return n.abrupt("return",e);case 6:case"end":return n.stop()}}),null,this)}},{key:"makeTunes",value:function(){var t=this;return[l.default,c.default,u.default].map((function(e){return new e({api:t.api,settings:t.settings})}))}},{key:"renderTunes",value:function(){var t=document.createDocumentFragment();return this.tunes.forEach((function(e){a.default.append(t,e.render())})),t}},{key:"updateCurrentInput",value:function(){this.currentInput=f.default.anchorNode}},{key:"willSelect",value:function(){this.mutationObserver.observe(this.holder.firstElementChild,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}},{key:"willUnselect",value:function(){this.mutationObserver.disconnect()}},{key:"compose",value:function(){var e=a.default.make("div",t.CSS.wrapper),n=a.default.make("div",t.CSS.content),o=this.tool.render();return n.appendChild(o),e.appendChild(n),e}},{key:"inputs",get:function(){if(0!==this.cachedInputs.length)return this.cachedInputs;var t=this.holder,n="[contenteditable], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(t){return'input[type="'.concat(t,'"]')})).join(", "),o=s.array(t.querySelectorAll(n));return o=o.reduce((function(t,n){return a.default.isNativeInput(n)||a.default.containsOnlyInlineElements(n)?[].concat((0,e.default)(t),[n]):[].concat((0,e.default)(t),(0,e.default)(a.default.getDeepestBlockElements(n)))}),[]),this.inputIndex>o.length-1&&(this.inputIndex=o.length-1),this.cachedInputs=o,o}},{key:"currentInput",get:function(){return this.inputs[this.inputIndex]},set:function(t){var e=this.inputs.findIndex((function(e){return e===t||e.contains(t)}));-1!==e&&(this.inputIndex=e)}},{key:"firstInput",get:function(){return this.inputs[0]}},{key:"lastInput",get:function(){var t=this.inputs;return t[t.length-1]}},{key:"nextInput",get:function(){return this.inputs[this.inputIndex+1]}},{key:"previousInput",get:function(){return this.inputs[this.inputIndex-1]}},{key:"pluginsContent",get:function(){var e=this.holder.querySelector(".".concat(t.CSS.content));if(e&&e.childNodes.length)for(var n=e.childNodes.length-1;n>=0;n--){var o=e.childNodes[n];if(!a.default.isExtensionNode(o))return o}return null}},{key:"data",get:function(){return this.save().then((function(t){return t&&!s.isEmpty(t.data)?t.data:{}}))}},{key:"sanitize",get:function(){return this.tool.sanitize}},{key:"mergeable",get:function(){return"function"==typeof this.tool.merge}},{key:"isEmpty",get:function(){var t=a.default.isEmpty(this.pluginsContent),e=!this.hasMedia;return t&&e}},{key:"hasMedia",get:function(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}},{key:"focused",set:function(e){this.holder.classList.toggle(t.CSS.focused,e)}},{key:"selected",set:function(e){e?this.holder.classList.add(t.CSS.selected):this.holder.classList.remove(t.CSS.selected)},get:function(){return this.holder.classList.contains(t.CSS.selected)}},{key:"stretched",set:function(e){this.holder.classList.toggle(t.CSS.wrapperStretched,e)}},{key:"dropTarget",set:function(e){this.holder.classList.toggle(t.CSS.dropTarget,e)}}],[{key:"CSS",get:function(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",focused:"ce-block--focused",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}}]),t}();t.default=v,v.displayName="Block"})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(35),i=n(12)("toStringTag"),r="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:r?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var o=n(10),i=n(30),r=n(12)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[r])?e:i(n)}},function(t,e,n){var o=n(17),i=n(8),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(42)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(25),i=n(16),r=n(44);t.exports=function(t){return function(e,n,a){var s,l=o(e),c=i(l.length),u=r(a,c);if(t&&n!=n){for(;c>u;)if((s=l[u++])!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(35);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(12)("iterator"),i=!1;try{var r=[7][o]();r.return=function(){i=!0},Array.from(r,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r=[7],a=r[o]();a.next=function(){return{done:n=!0}},r[o]=function(){return a},t(r)}catch(t){}return n}},function(t,e,n){"use strict";var o=n(10);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var o=n(62),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(124);var o=n(21),i=n(24),r=n(9),a=n(36),s=n(12),l=n(99),c=s("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),p=!r((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!r((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[d],g=n(a,d,""[t],(function(t,e,n,o,i){return e.exec===l?p&&!i?{done:!0,value:v.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}})),y=g[0],b=g[1];o(String.prototype,t,y),i(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){var o=n(29),i=n(119),r=n(94),a=n(10),s=n(16),l=n(96),c={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,v,g,y=d?function(){return t}:l(t),b=o(n,f,e?2:1),m=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(r(y)){for(p=s(t.length);p>m;m++)if((g=e?b(a(h=t[m])[0],h[1]):b(t[m]))===c||g===u)return g}else for(v=y.call(t);!(h=v.next()).done;)if((g=i(v,b,h.value,e))===c||g===u)return g}).BREAK=c,e.RETURN=u},function(t,e,n){var o=n(8).navigator;t.exports=o&&o.userAgent||""},function(t,e,n){"use strict";var o=n(8),i=n(0),r=n(21),a=n(57),s=n(39),l=n(72),c=n(56),u=n(11),f=n(9),d=n(68),p=n(52),h=n(85);t.exports=function(t,e,n,v,g,y){var b=o[t],m=b,k=g?"set":"add",x=m&&m.prototype,w={},S=function(t){var e=x[t];r(x,t,"delete"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof m&&(y||x.forEach&&!f((function(){(new m).entries().next()})))){var E=new m,T=E[k](y?{}:-0,1)!=E,C=f((function(){E.has(1)})),B=d((function(t){new m(t)})),_=!y&&f((function(){for(var t=new m,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((m=e((function(e,n){c(e,m,t);var o=h(new b,e,m);return null!=n&&l(n,g,o[k],o),o}))).prototype=x,x.constructor=m),(C||_)&&(S("delete"),S("has"),g&&S("get")),(_||T)&&S(k),y&&x.clear&&delete x.clear}else m=v.getConstructor(e,t,g,k),a(m.prototype,n),s.NEED=!0;return p(m,t),w[t]=m,i(i.G+i.W+i.F*(m!=b),w),y||v.setStrong(m,t,g),m}},function(t,e,n){for(var o,i=n(8),r=n(24),a=n(41),s=a("typed_array"),l=a("view"),c=!(!i.ArrayBuffer||!i.DataView),u=c,f=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(o=i[d[f++]])?(r(o.prototype,s,!0),r(o.prototype,l,!0)):u=!1;t.exports={ABV:c,CONSTR:u,TYPED:s,VIEW:l}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"methods",get:function(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods}}}]),e}((c=u(c)).default);o.default=f,f.displayName="API",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f){"use strict";var d=n(15),p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=p(i),r=p(r),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=d(f);var h=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).nodes={wrapper:null,content:null,actions:null,plusButton:null,blockActionsButtons:null,settingsToggler:null},t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"make",value:function(){var t=this;this.nodes.wrapper=u.default.make("div",this.CSS.toolbar),["content","actions"].forEach((function(e){t.nodes[e]=u.default.make("div",t.CSS[e])})),u.default.append(this.nodes.wrapper,this.nodes.content),u.default.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=u.default.make("div",this.CSS.plusButton),u.default.append(this.nodes.plusButton,u.default.svg("plus",14,14)),u.default.append(this.nodes.content,this.nodes.plusButton),this.Editor.Listeners.on(this.nodes.plusButton,"click",(function(){return t.plusButtonClicked()}),!1);var e=u.default.make("div");e.appendChild(document.createTextNode("Add")),e.appendChild(u.default.make("div",this.CSS.plusButtonShortcut,{textContent:"⇥ Tab"})),this.Editor.Tooltip.onHover(this.nodes.plusButton,e),this.Editor.Toolbox.make(),this.nodes.blockActionsButtons=u.default.make("div",this.CSS.blockActionsButtons),this.nodes.settingsToggler=u.default.make("span",this.CSS.settingsToggler);var n=u.default.svg("dots",8,8);u.default.append(this.nodes.settingsToggler,n),u.default.append(this.nodes.blockActionsButtons,this.nodes.settingsToggler),u.default.append(this.nodes.actions,this.nodes.blockActionsButtons),this.Editor.Tooltip.onHover(this.nodes.settingsToggler,"Click to tune",{placement:"top"}),this.Editor.BlockSettings.make(),u.default.append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),u.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.bindEvents()}},{key:"move",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&(this.Editor.Toolbox.close(),this.Editor.BlockSettings.close());var e=this.Editor.BlockManager.currentBlock.holder;if(e){var n=this.Editor.UI.isMobile,o=e.offsetHeight,i=e.offsetTop;if(n)i+=o;else{var r=Math.floor(o/2);this.nodes.plusButton.style.transform="translate3d(0, calc(".concat(r,"px - 50%), 0)"),this.Editor.Toolbox.nodes.toolbox.style.transform="translate3d(0, calc(".concat(r,"px - 50%), 0)")}this.nodes.wrapper.style.transform="translate3D(0, ".concat(Math.floor(i),"px, 0)")}}},{key:"open",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f.delay((function(){t.move(n),t.nodes.wrapper.classList.add(t.CSS.toolbarOpened),e?t.blockActions.show():t.blockActions.hide()}),50)()}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),this.Editor.Toolbox.close(),this.Editor.BlockSettings.close()}},{key:"plusButtonClicked",value:function(){this.Editor.Toolbox.toggle()}},{key:"bindEvents",value:function(){var t=this;this.Editor.Listeners.on(this.nodes.settingsToggler,"click",(function(){return t.settingsTogglerClicked()}))}},{key:"settingsTogglerClicked",value:function(){this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open()}},{key:"CSS",get:function(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",plusButtonHidden:"ce-toolbar__plus--hidden",blockActionsButtons:"ce-toolbar__actions-buttons",settingsToggler:"ce-toolbar__settings-btn"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}},{key:"plusButton",get:function(){var t=this;return{hide:function(){return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden)},show:function(){t.Editor.Toolbox.isEmpty||t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden)}}}},{key:"blockActions",get:function(){var t=this;return{hide:function(){t.nodes.actions.classList.remove(t.CSS.actionsOpened)},show:function(){t.nodes.actions.classList.add(t.CSS.actionsOpened)}}}}]),e}(c.default);o.default=h,h.displayName="Toolbar",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o=n(11),i=n(8).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e,n){e.f=n(12)},function(t,e,n){var o=n(64)("keys"),i=n(41);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(8).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(11),i=n(10),r=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(29)(Function.call,n(32).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var o=n(11),i=n(83).set;t.exports=function(t,e,n){var r,a=e.constructor;return a!==n&&"function"==typeof a&&(r=a.prototype)!==n.prototype&&o(r)&&i&&i(t,r),t}},function(t,e,n){"use strict";var o=n(31),i=n(36);t.exports=function(t){var e=String(i(this)),n="",r=o(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){var o=n(31),i=n(36);t.exports=function(t){return function(e,n){var r,a,s=String(i(e)),l=o(n),c=s.length;return l<0||l>=c?t?"":void 0:(r=s.charCodeAt(l))<55296||r>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):r:t?s.slice(l,l+2):a-56320+(r-55296<<10)+65536}}},function(t,e,n){"use strict";var o=n(42),i=n(0),r=n(21),a=n(24),s=n(54),l=n(118),c=n(52),u=n(47),f=n(12)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,g,y){l(n,e,h);var b,m,k,x=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,E=!1,T=t.prototype,C=T[f]||T["@@iterator"]||v&&T[v],B=C||x(v),_=v?S?x("entries"):B:void 0,I="Array"==e&&T.entries||C;if(I&&(k=u(I.call(new t)))!==Object.prototype&&k.next&&(c(k,w,!0),o||"function"==typeof k[f]||a(k,f,p)),S&&C&&"values"!==C.name&&(E=!0,B=function(){return C.call(this)}),o&&!y||!d&&!E&&T[f]||a(T,f,B),s[e]=B,s[w]=p,v)if(b={values:S?B:x("values"),keys:g?B:x("keys"),entries:_},y)for(m in b)m in T||r(T,m,b[m]);else i(i.P+i.F*(d||E),e,b);return b}},function(t,e,n){var o=n(92),i=n(36);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var o=n(11),i=n(35),r=n(12)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},function(t,e,n){var o=n(12)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var o=n(54),i=n(12)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},function(t,e,n){"use strict";var o=n(19),i=n(40);t.exports=function(t,e,n){e in t?o.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var o=n(62),i=n(12)("iterator"),r=n(54);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||r[o(t)]}},function(t,e,n){"use strict";var o=n(20),i=n(44),r=n(16);t.exports=function(t){for(var e=o(this),n=r(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,c=void 0===l?n:i(l,n);c>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var o=n(48),i=n(123),r=n(54),a=n(25);t.exports=n(90)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var o,i,r=n(69),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,c=(o=/a/,i=/b*/g,a.call(o,"a"),a.call(i,"a"),0!==o.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,n,o,i,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),c&&(e=l.lastIndex),o=a.call(l,t),c&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=l},function(t,e,n){"use strict";var o=n(89)(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},function(t,e,n){var o,i,r,a=n(29),s=n(112),l=n(82),c=n(78),u=n(8),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,v=u.Dispatch,g=0,y={},b=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},m=function(t){b.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){s("function"==typeof t?t:Function(t),e)},o(g),g},p=function(t){delete y[t]},"process"==n(35)(f)?o=function(t){f.nextTick(a(b,t,1))}:v&&v.now?o=function(t){v.now(a(b,t,1))}:h?(r=(i=new h).port2,i.port1.onmessage=m,o=a(r.postMessage,r,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",m,!1)):o="onreadystatechange"in c("script")?function(t){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:d,clear:p}},function(t,e,n){"use strict";var o=n(8),i=n(18),r=n(42),a=n(75),s=n(24),l=n(57),c=n(9),u=n(56),f=n(31),d=n(16),p=n(131),h=n(46).f,v=n(19).f,g=n(97),y=n(52),b="prototype",m="Wrong index!",k=o.ArrayBuffer,x=o.DataView,w=o.Math,S=o.RangeError,E=o.Infinity,T=k,C=w.abs,B=w.pow,_=w.floor,I=w.log,O=w.LN2,N=i?"_b":"buffer",L=i?"_l":"byteLength",M=i?"_o":"byteOffset";function A(t,e,n){var o,i,r,a=new Array(n),s=8*n-e-1,l=(1<<s)-1,c=l>>1,u=23===e?B(2,-24)-B(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for((t=C(t))!=t||t===E?(i=t!=t?1:0,o=l):(o=_(I(t)/O),t*(r=B(2,-o))<1&&(o--,r*=2),(t+=o+c>=1?u/r:u*B(2,1-c))*r>=2&&(o++,r/=2),o+c>=l?(i=0,o=l):o+c>=1?(i=(t*r-1)*B(2,e),o+=c):(i=t*B(2,c-1)*B(2,e),o=0));e>=8;a[f++]=255&i,i/=256,e-=8);for(o=o<<e|i,s+=e;s>0;a[f++]=255&o,o/=256,s-=8);return a[--f]|=128*d,a}function P(t,e,n){var o,i=8*n-e-1,r=(1<<i)-1,a=r>>1,s=i-7,l=n-1,c=t[l--],u=127&c;for(c>>=7;s>0;u=256*u+t[l],l--,s-=8);for(o=u&(1<<-s)-1,u>>=-s,s+=e;s>0;o=256*o+t[l],l--,s-=8);if(0===u)u=1-a;else{if(u===r)return o?NaN:c?-E:E;o+=B(2,e),u-=a}return(c?-1:1)*o*B(2,u-e)}function R(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function j(t){return[255&t]}function F(t){return[255&t,t>>8&255]}function D(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function U(t){return A(t,52,8)}function H(t){return A(t,23,4)}function z(t,e,n){v(t[b],e,{get:function(){return this[n]}})}function G(t,e,n,o){var i=p(+n);if(i+e>t[L])throw S(m);var r=t[N]._b,a=i+t[M],s=r.slice(a,a+e);return o?s:s.reverse()}function W(t,e,n,o,i,r){var a=p(+n);if(a+e>t[L])throw S(m);for(var s=t[N]._b,l=a+t[M],c=o(+i),u=0;u<e;u++)s[l+u]=c[r?u:e-u-1]}if(a.ABV){if(!c((function(){k(1)}))||!c((function(){new k(-1)}))||c((function(){return new k,new k(1.5),new k(NaN),"ArrayBuffer"!=k.name}))){for(var V,X=(k=function(t){return u(this,k),new T(p(t))})[b]=T[b],Y=h(T),K=0;Y.length>K;)(V=Y[K++])in k||s(k,V,T[V]);r||(X.constructor=k)}var Z=new x(new k(2)),q=x[b].setInt8;Z.setInt8(0,2147483648),Z.setInt8(1,2147483649),!Z.getInt8(0)&&Z.getInt8(1)||l(x[b],{setInt8:function(t,e){q.call(this,t,e<<24>>24)},setUint8:function(t,e){q.call(this,t,e<<24>>24)}},!0)}else k=function(t){u(this,k,"ArrayBuffer");var e=p(t);this._b=g.call(new Array(e),0),this[L]=e},x=function(t,e,n){u(this,x,"DataView"),u(t,k,"DataView");var o=t[L],i=f(e);if(i<0||i>o)throw S("Wrong offset!");if(i+(n=void 0===n?o-i:d(n))>o)throw S("Wrong length!");this[N]=t,this[M]=i,this[L]=n},i&&(z(k,"byteLength","_l"),z(x,"buffer","_b"),z(x,"byteLength","_l"),z(x,"byteOffset","_o")),l(x[b],{getInt8:function(t){return G(this,1,t)[0]<<24>>24},getUint8:function(t){return G(this,1,t)[0]},getInt16:function(t){var e=G(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=G(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return R(G(this,4,t,arguments[1]))},getUint32:function(t){return R(G(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return P(G(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return P(G(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){W(this,1,t,j,e)},setUint8:function(t,e){W(this,1,t,j,e)},setInt16:function(t,e){W(this,2,t,F,e,arguments[2])},setUint16:function(t,e){W(this,2,t,F,e,arguments[2])},setInt32:function(t,e){W(this,4,t,D,e,arguments[2])},setUint32:function(t,e){W(this,4,t,D,e,arguments[2])},setFloat32:function(t,e){W(this,4,t,H,e,arguments[2])},setFloat64:function(t,e){W(this,8,t,U,e,arguments[2])}});y(k,"ArrayBuffer"),y(x,"DataView"),s(x[b],a.VIEW,!0),e.ArrayBuffer=k,e.DataView=x},function(t,e,n){var o=n(352),i=n(353),r=n(354);t.exports=function(t){return o(t)||i(t)||r()}},function(t,e,n){t.exports=!n(18)&&!n(9)((function(){return 7!=Object.defineProperty(n(78)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(8),i=n(17),r=n(42),a=n(79),s=n(19).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=r?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var o=n(23),i=n(25),r=n(65)(!1),a=n(80)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),l=0,c=[];for(n in s)n!=a&&o(s,n)&&c.push(n);for(;e.length>l;)o(s,n=e[l++])&&(~r(c,n)||c.push(n));return c}},function(t,e,n){var o=n(19),i=n(10),r=n(43);t.exports=n(18)?Object.defineProperties:function(t,e){i(t);for(var n,a=r(e),s=a.length,l=0;s>l;)o.f(t,n=a[l++],e[n]);return t}},function(t,e,n){var o=n(25),i=n(46).f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(o(t))}},function(t,e,n){"use strict";var o=n(18),i=n(43),r=n(66),a=n(61),s=n(20),l=n(60),c=Object.assign;t.exports=!c||n(9)((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o}))?function(t,e){for(var n=s(t),c=arguments.length,u=1,f=r.f,d=a.f;c>u;)for(var p,h=l(arguments[u++]),v=f?i(h).concat(f(h)):i(h),g=v.length,y=0;g>y;)p=v[y++],o&&!d.call(h,p)||(n[p]=h[p]);return n}:c},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var o=n(30),i=n(11),r=n(112),a=[].slice,s={},l=function(t,e,n){if(!(e in s)){for(var o=[],i=0;i<e;i++)o[i]="a["+i+"]";s[e]=Function("F,a","return new F("+o.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=a.call(arguments,1),s=function(){var o=n.concat(a.call(arguments));return this instanceof s?l(e,o.length,o):r(e,o,t)};return i(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(8).parseInt,i=n(53).trim,r=n(84),a=/^[-+]?0[xX]/;t.exports=8!==o(r+"08")||22!==o(r+"0x16")?function(t,e){var n=i(String(t),3);return o(n,e>>>0||(a.test(n)?16:10))}:o},function(t,e,n){var o=n(8).parseFloat,i=n(53).trim;t.exports=1/o(n(84)+"-0")!=-1/0?function(t){var e=i(String(t),3),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},function(t,e,n){var o=n(35);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=o(t))throw TypeError(e);return+t}},function(t,e,n){var o=n(11),i=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&i(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){"use strict";var o=n(45),i=n(40),r=n(52),a={};n(24)(a,n(12)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(a,{next:i(1,n)}),r(t,e+" Iterator")}},function(t,e,n){var o=n(10);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&o(r.call(t)),e}}},function(t,e,n){var o=n(266);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){var o=n(30),i=n(20),r=n(60),a=n(16);t.exports=function(t,e,n,s,l){o(e);var c=i(t),u=r(c),f=a(c.length),d=l?f-1:0,p=l?-1:1;if(n<2)for(;;){if(d in u){s=u[d],d+=p;break}if(d+=p,l?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;l?d>=0:f>d;d+=p)d in u&&(s=e(s,u[d],d,c));return s}},function(t,e,n){"use strict";var o=n(20),i=n(44),r=n(16);t.exports=[].copyWithin||function(t,e){var n=o(this),a=r(n.length),s=i(t,a),l=i(e,a),c=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===c?a:i(c,a))-l,a-s),f=1;for(l<s&&s<l+u&&(f=-1,l+=u-1,s+=u-1);u-- >0;)l in n?n[s]=n[l]:delete n[s],s+=f,l+=f;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var o=n(99);n(0)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(69)})},function(t,e,n){"use strict";var o,i,r,a,s=n(42),l=n(8),c=n(29),u=n(62),f=n(0),d=n(11),p=n(30),h=n(56),v=n(72),g=n(63),y=n(101).set,b=n(286)(),m=n(127),k=n(287),x=n(73),w=n(128),S=l.TypeError,E=l.process,T=E&&E.versions,C=T&&T.v8||"",B=l.Promise,_="process"==u(E),I=function(){},O=i=m.f,N=!!function(){try{var t=B.resolve(1),e=(t.constructor={})[n(12)("species")]=function(t){t(I,I)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(I)instanceof e&&0!==C.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),L=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;b((function(){for(var o=t._v,i=1==t._s,r=0,a=function(e){var n,r,a,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,u=e.domain;try{s?(i||(2==t._h&&R(t),t._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),a=!0)),n===e.promise?c(S("Promise-chain cycle")):(r=L(n))?r.call(n,l,c):l(n)):c(o)}catch(t){u&&!a&&u.exit(),c(t)}};n.length>r;)a(n[r++]);t._c=[],t._n=!1,e&&!t._h&&A(t)}))}},A=function(t){y.call(l,(function(){var e,n,o,i=t._v,r=P(t);if(r&&(e=k((function(){_?E.emit("unhandledRejection",i,t):(n=l.onunhandledrejection)?n({promise:t,reason:i}):(o=l.console)&&o.error&&o.error("Unhandled promise rejection",i)})),t._h=_||P(t)?2:1),t._a=void 0,r&&e.e)throw e.v}))},P=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){y.call(l,(function(){var e;_?E.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})}))},j=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=L(t))?b((function(){var o={_w:n,_d:!1};try{e.call(t,c(F,o,1),c(j,o,1))}catch(t){j.call(o,t)}})):(n._v=t,n._s=1,M(n,!1))}catch(t){j.call({_w:n,_d:!1},t)}}};N||(B=function(t){h(this,B,"Promise","_h"),p(t),o.call(this);try{t(c(F,this,1),c(j,this,1))}catch(t){j.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(57)(B.prototype,{then:function(t,e){var n=O(g(this,B));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new o;this.promise=t,this.resolve=c(F,t,1),this.reject=c(j,t,1)},m.f=O=function(t){return t===B||t===a?new r(t):i(t)}),f(f.G+f.W+f.F*!N,{Promise:B}),n(52)(B,"Promise"),n(55)("Promise"),a=n(17).Promise,f(f.S+f.F*!N,"Promise",{reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!N),"Promise",{resolve:function(t){return w(s&&this===a?B:this,t)}}),f(f.S+f.F*!(N&&n(68)((function(t){B.all(t).catch(I)}))),"Promise",{all:function(t){var e=this,n=O(e),o=n.resolve,i=n.reject,r=k((function(){var n=[],r=0,a=1;v(t,!1,(function(t){var s=r++,l=!1;n.push(void 0),a++,e.resolve(t).then((function(t){l||(l=!0,n[s]=t,--a||o(n))}),i)})),--a||o(n)}));return r.e&&i(r.v),n.promise},race:function(t){var e=this,n=O(e),o=n.reject,i=k((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,o)}))}));return i.e&&o(i.v),n.promise}})},function(t,e,n){"use strict";var o=n(30);function i(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new i(t)}},function(t,e,n){var o=n(10),i=n(11),r=n(127);t.exports=function(t,e){if(o(t),i(e)&&e.constructor===t)return e;var n=r.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var o=n(19).f,i=n(45),r=n(57),a=n(29),s=n(56),l=n(72),c=n(90),u=n(123),f=n(55),d=n(18),p=n(39).fastKey,h=n(49),v=d?"_s":"size",g=function(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,o){s(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,null!=o&&l(o,n,t[c],t)}));return r(u.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),o=g(n,t);if(o){var i=o.n,r=o.p;delete n._i[o.i],o.r=!0,r&&(r.n=i),i&&(i.p=r),n._f==o&&(n._f=i),n._l==o&&(n._l=r),n[v]--}return!!o},forEach:function(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(h(this,e),t)}}),d&&o(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,n){var o,i,r=g(t,e);return r?r.v=n:(t._l=r={i:i=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=r),o&&(o.n=r),t[v]++,"F"!==i&&(t._i[i]=r)),t},getEntry:g,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){"use strict";var o=n(57),i=n(39).getWeak,r=n(10),a=n(11),s=n(56),l=n(72),c=n(34),u=n(23),f=n(49),d=c(5),p=c(6),h=0,v=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,e){return d(t.a,(function(t){return t[0]===e}))};g.prototype={get:function(t){var e=y(this,t);if(e)return e[1]},has:function(t){return!!y(this,t)},set:function(t,e){var n=y(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,r){var c=t((function(t,o){s(t,c,e,"_i"),t._t=e,t._i=h++,t._l=void 0,null!=o&&l(o,n,t[r],t)}));return o(c.prototype,{delete:function(t){if(!a(t))return!1;var n=i(t);return!0===n?v(f(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=i(t);return!0===n?v(f(this,e)).has(t):n&&u(n,this._i)}}),c},def:function(t,e,n){var o=i(r(e),!0);return!0===o?v(t).set(e,n):o[t._i]=n,t},ufstore:v}},function(t,e,n){var o=n(31),i=n(16);t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var o=n(46),i=n(66),r=n(10),a=n(8).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(r(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var o=n(16),i=n(86),r=n(36);t.exports=function(t,e,n,a){var s=String(r(t)),l=s.length,c=void 0===n?" ":String(n),u=o(e);if(u<=l||""==c)return s;var f=u-l,d=i.call(c,Math.ceil(f/c.length));return d.length>f&&(d=d.slice(0,f)),a?d+s:s+d}},function(t,e,n){var o=n(18),i=n(43),r=n(25),a=n(61).f;t.exports=function(t){return function(e){for(var n,s=r(e),l=i(s),c=l.length,u=0,f=[];c>u;)n=l[u++],o&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},function(t,e,n){var o=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n,o){var i=e&&e.prototype instanceof v?e:v,r=Object.create(i.prototype),a=new B(o||[]);return r._invoke=function(t,e,n){var o=u;return function(i,r){if(o===d)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw r;return I()}for(n.method=i,n.arg=r;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===u)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=c(t,e,n);if("normal"===l.type){if(o=n.done?p:f,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}(t,n,a),r}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u="suspendedStart",f="suspendedYield",d="executing",p="completed",h={};function v(){}function g(){}function y(){}var b={};b[r]=function(){return this};var m=Object.getPrototypeOf,k=m&&m(m(_([])));k&&k!==n&&o.call(k,r)&&(b=k);var x=y.prototype=v.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){var e;this._invoke=function(n,i){function r(){return new Promise((function(e,r){!function e(n,i,r,a){var s=c(t[n],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,r,a)}),(function(t){e("throw",t,r,a)})):Promise.resolve(u).then((function(t){l.value=t,r(l)}),(function(t){return e("throw",t,r,a)}))}a(s.arg)}(n,i,e,r)}))}return e=e?e.then(r,r):r()}}function E(t,n){var o=t.iterator[n.method];if(o===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=c(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function _(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(o.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[s]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,o,i){var r=new S(l(e,n,o,i));return t.isGeneratorFunction(n)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},w(x),x[s]="Generator",x[r]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=_,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(o,i){return s.type="throw",s.arg=t,n.next=o,i&&(n.method="next",n.arg=e),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var i=o.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:_(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u){"use strict";var f=n(15),d=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=d(i),r=d(r),a=d(a),s=d(s),l=d(l),c=d(c),u=f(u);var p=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).insert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.config.initialBlock,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;t.Editor.BlockManager.insert(e,n,o,i,r)},t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"getBlocksCount",value:function(){return this.Editor.BlockManager.blocks.length}},{key:"getCurrentBlockIndex",value:function(){return this.Editor.BlockManager.currentBlockIndex}},{key:"getBlockByIndex",value:function(t){return this.Editor.BlockManager.getBlockByIndex(t).holder}},{key:"swap",value:function(t,e){this.Editor.BlockManager.swap(t,e),this.Editor.Toolbar.move(!1)}},{key:"move",value:function(t,e){this.Editor.BlockManager.move(t,e),this.Editor.Toolbar.move(!1)}},{key:"delete",value:function(t){this.Editor.BlockManager.removeBlock(t),0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}},{key:"clear",value:function(){this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()}},{key:"render",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Renderer.render(t.blocks)}},{key:"renderFromHTML",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(t,!0)}},{key:"stretchBlock",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.Editor.BlockManager.getBlockByIndex(t);n&&(n.stretched=e)}},{key:"insertNewBlock",value:function(){u.log("Method blocks.insertNewBlock() is deprecated and it will be removed in next major release. Use blocks.insert() instead.","warn"),this.insert()}},{key:"methods",get:function(){var t=this;return{clear:function(){return t.clear()},render:function(e){return t.render(e)},renderFromHTML:function(e){return t.renderFromHTML(e)},delete:function(){return t.delete()},swap:function(e,n){return t.swap(e,n)},move:function(e,n){return t.move(e,n)},getBlockByIndex:function(e){return t.getBlockByIndex(e)},getCurrentBlockIndex:function(){return t.getCurrentBlockIndex()},getBlocksCount:function(){return t.getBlocksCount()},stretchBlock:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.stretchBlock(e,n)},insertNewBlock:function(){return t.insertNewBlock()},insert:this.insert}}}]),e}(c.default);o.default=p,p.displayName="BlocksAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).setToFirstBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.firstBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock,e,n),!0)},t.setToLastBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.lastBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock,e,n),!0)},t.setToPreviousBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.previousBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock,e,n),!0)},t.setToNextBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.nextBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock,e,n),!0)},t.setToBlock=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.Editor.Caret.positions.DEFAULT,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!!t.Editor.BlockManager.blocks[e]&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e],n,o),!0)},t.focus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?t.setToLastBlock(t.Editor.Caret.positions.END):t.setToFirstBlock(t.Editor.Caret.positions.START)},t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"methods",get:function(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}]),e}((c=u(c)).default);o.default=f,f.displayName="CaretAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"on",value:function(t,e){this.Editor.Events.on(t,e)}},{key:"emit",value:function(t,e){this.Editor.Events.emit(t,e)}},{key:"off",value:function(t,e){this.Editor.Events.off(t,e)}},{key:"methods",get:function(){var t=this;return{emit:function(e,n){return t.emit(e,n)},off:function(e,n){return t.off(e,n)},on:function(e,n){return t.on(e,n)}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="EventsAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"open",value:function(){this.Editor.InlineToolbar.tryToShow()}},{key:"close",value:function(){this.Editor.InlineToolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="InlineToolbarAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"on",value:function(t,e,n,o){this.Editor.Listeners.on(t,e,n,o)}},{key:"off",value:function(t,e,n){this.Editor.Listeners.off(t,e,n)}},{key:"methods",get:function(){var t=this;return{on:function(e,n,o,i){return t.on(e,n,o,i)},off:function(e,n,o){return t.off(e,n,o)}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="ListenersAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"show",value:function(t){return this.Editor.Notifier.show(t)}},{key:"methods",get:function(){var t=this;return{show:function(e){return t.show(e)}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="NotifierAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"clean",value:function(t,e){return this.Editor.Sanitizer.clean(t,e)}},{key:"methods",get:function(){var t=this;return{clean:function(e,n){return t.clean(e,n)}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="SanitizerAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"save",value:function(){return this.Editor.Saver.save()}},{key:"methods",get:function(){var t=this;return{save:function(){return t.save()}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="SaverAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(28)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u){"use strict";var f=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=f(i),r=f(r),a=f(a),s=f(s),l=f(l),c=f(c),u=f(u);var d=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"findParentTag",value:function(t,e){return(new u.default).findParentTag(t,e)}},{key:"expandToTag",value:function(t){(new u.default).expandToTag(t)}},{key:"methods",get:function(){var t=this;return{findParentTag:function(e,n){return t.findParentTag(e,n)},expandToTag:function(e){return t.expandToTag(e)}}}}]),e}(c.default);o.default=d,d.displayName="SelectionAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"classes",get:function(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}]),e}((c=u(c)).default);o.default=f,f.displayName="StylesAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"open",value:function(){this.Editor.Toolbar.open()}},{key:"close",value:function(){this.Editor.Toolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="ToolbarAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"show",value:function(t,e,n){this.Editor.Tooltip.show(t,e,n)}},{key:"hide",value:function(){this.Editor.Tooltip.hide()}},{key:"onHover",value:function(t,e,n){this.Editor.Tooltip.onHover(t,e,n)}},{key:"methods",get:function(){var t=this;return{show:function(e,n,o){return t.show(e,n,o)},hide:function(){return t.hide()},onHover:function(e,n,o){return t.onHover(e,n,o)}}}}]),e}((c=u(c)).default);o.default=f,f.displayName="TooltipAPI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(14),n(28),n(58)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d){"use strict";var p=n(15),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=h(i),r=h(r),a=h(a),s=h(s),l=h(l),c=h(c),u=p(u),f=h(f),d=h(d);var v=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"keydown",value:function(t){switch(this.beforeKeydownProcessing(t),t.keyCode){case u.keyCodes.BACKSPACE:this.backspace(t);break;case u.keyCodes.ENTER:this.enter(t);break;case u.keyCodes.DOWN:case u.keyCodes.RIGHT:this.arrowRightAndDown(t);break;case u.keyCodes.UP:case u.keyCodes.LEFT:this.arrowLeftAndUp(t);break;case u.keyCodes.TAB:this.tabPressed(t);break;case u.keyCodes.ESC:this.escapePressed(t);break;default:this.defaultHandler()}}},{key:"beforeKeydownProcessing",value:function(t){this.needToolbarClosing(t)&&u.isPrintableKey(t.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||(this.Editor.BlockManager.clearFocused(),this.Editor.BlockSelection.clearSelection(t)))}},{key:"keyup",value:function(t){t.shiftKey||this.Editor.UI.checkEmptiness()}},{key:"mouseUp",value:function(){}},{key:"mouseDown",value:function(t){f.default.isCollapsed||this.Editor.BlockSelection.clearSelection(t),this.Editor.CrossBlockSelection.watchSelection(t)}},{key:"tabPressed",value:function(t){this.Editor.BlockSelection.clearSelection(t);var e=this.Editor,n=e.BlockManager,o=e.Tools,i=e.InlineToolbar,r=e.ConversionToolbar,a=n.currentBlock;if(a){var s=o.isInitial(a.tool)&&a.isEmpty,l=!a.isEmpty&&r.opened,c=!a.isEmpty&&!f.default.isCollapsed&&i.opened;s?this.activateToolbox():l||c||this.activateBlockSettings()}}},{key:"escapePressed",value:function(t){this.Editor.BlockSelection.clearSelection(t),this.Editor.Toolbox.opened?this.Editor.Toolbox.close():this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()}},{key:"dragOver",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!0}},{key:"dragLeave",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!1}},{key:"handleCommandC",value:function(t){var e=this.Editor.BlockSelection;e.anyBlockSelected&&e.copySelectedBlocks(t)}},{key:"handleCommandX",value:function(t){var e=this.Editor,n=e.BlockSelection,o=e.BlockManager,i=e.Caret;if(n.anyBlockSelected){n.copySelectedBlocks(t);var r=o.removeSelectedBlocks();i.setToBlock(o.insertInitialBlockAtIndex(r,!0),i.positions.START),n.clearSelection(t)}}},{key:"enter",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Tools,i=e.UI,r=n.currentBlock,a=o.available[r.name];if(!(a&&a[o.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS]||i.someToolbarOpened&&i.someFlipperButtonFocused||t.shiftKey)){var s=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertInitialBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):s=this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(s),this.Editor.Tools.isInitial(s.tool)&&s.isEmpty&&(this.Editor.Toolbar.open(!1),this.Editor.Toolbar.plusButton.show()),t.preventDefault()}}},{key:"backspace",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,i=e.Caret,r=n.currentBlock,a=this.Editor.Tools.available[r.name];if(r.selected||r.isEmpty&&r.currentInput===r.firstInput){t.preventDefault();var s=n.currentBlockIndex;return n.previousBlock&&0===n.previousBlock.inputs.length?n.removeBlock(s-1):n.removeBlock(),i.setToBlock(n.currentBlock,s?i.positions.END:i.positions.START),this.Editor.Toolbar.close(),void o.clearSelection(t)}if(!a||!a[this.Editor.Tools.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS]||i.isAtStart){var l=0===n.currentBlockIndex;i.isAtStart&&f.default.isCollapsed&&r.currentInput===r.firstInput&&!l&&(t.preventDefault(),this.mergeBlocks())}}},{key:"mergeBlocks",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Caret,o=t.Toolbar,i=e.previousBlock,r=e.currentBlock;if(r.name!==i.name||!i.mergeable)return 0===i.inputs.length||i.isEmpty?(e.removeBlock(e.currentBlockIndex-1),n.setToBlock(e.currentBlock),void o.close()):void(n.navigatePrevious()&&o.close());n.createShadow(i.pluginsContent),e.mergeBlocks(i,r).then((function(){n.restoreCaret(i.pluginsContent),i.pluginsContent.normalize(),o.close()}))}},{key:"arrowRightAndDown",value:function(t){var e=this,n=d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB);if(!this.Editor.UI.someToolbarOpened||!n){this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var o=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.DOWN&&o?this.Editor.CrossBlockSelection.toggleBlockSelectedState():(this.Editor.Caret.navigateNext()?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}}},{key:"arrowLeftAndUp",value:function(t){var e=this;if(this.Editor.UI.someToolbarOpened){if(d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var n=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.UP&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):(this.Editor.Caret.navigatePrevious()?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}},{key:"defaultHandler",value:function(){}},{key:"needToolbarClosing",value:function(t){var e=t.keyCode===u.keyCodes.ENTER&&this.Editor.Toolbox.opened,n=t.keyCode===u.keyCodes.ENTER&&this.Editor.BlockSettings.opened,o=t.keyCode===u.keyCodes.ENTER&&this.Editor.InlineToolbar.opened,i=t.keyCode===u.keyCodes.ENTER&&this.Editor.ConversionToolbar.opened,r=t.keyCode===u.keyCodes.TAB;return!(t.shiftKey||r||e||n||o||i)}},{key:"activateToolbox",value:function(){this.Editor.Toolbar.opened||(this.Editor.Toolbar.open(!1,!1),this.Editor.Toolbar.plusButton.show()),this.Editor.Toolbox.open()}},{key:"activateBlockSettings",value:function(){this.Editor.Toolbar.opened||(this.Editor.BlockManager.currentBlock.focused=!0,this.Editor.Toolbar.open(!0,!1),this.Editor.Toolbar.plusButton.hide()),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}]),e}(c.default);o.default=v,v.displayName="BlockEvents",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(26),n(2),n(3),n(4),n(5),n(6),n(59),n(7),n(13),n(14),n(363)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p,h){"use strict";var v=n(15),g=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=g(i),r=g(r),a=g(a),s=g(s),l=g(l),c=g(c),u=v(u),f=g(f),d=g(d),p=v(p),h=g(h);var y=function(t){function e(){var t;return(0,r.default)(this,e),(t=(0,s.default)(this,(0,l.default)(e).apply(this,arguments)))._currentBlockIndex=-1,t._blocks=null,t}return(0,c.default)(e,t),(0,a.default)(e,[{key:"prepare",value:function(){var t,e,n,o;return i.default.async((function(i){for(;;)switch(i.prev=i.next){case 0:t=new h.default(this.Editor.UI.nodes.redactor),e=this.Editor,n=e.BlockEvents,o=e.Listeners,this._blocks=new Proxy(t,{set:h.default.set,get:h.default.get}),o.on(document,"copy",(function(t){return n.handleCommandC(t)})),o.on(document,"cut",(function(t){return n.handleCommandX(t)}));case 5:case"end":return i.stop()}}),null,this)}},{key:"composeBlock",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this.Editor.Tools.construct(t,e),i=this.Editor.Tools.available[t],r=new u.default(t,o,i,n,this.Editor.API.methods);return this.bindEvents(r),r}},{key:"insert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.initialBlock,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.currentBlockIndex+1,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.composeBlock(t,e,n);return this._blocks[o]=r,i&&(this.currentBlockIndex=o),r}},{key:"paste",value:function(t,e){var n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n=o?this.replace(t):this.insert(t);try{n.call(u.BlockToolAPI.ON_PASTE,e)}catch(e){p.log("".concat(t,": onPaste callback call is failed"),"error",e)}return n}},{key:"insertInitialBlockAtIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.composeBlock(this.config.initialBlock,{},{});return this._blocks[t]=n,e?this.currentBlockIndex=t:t<=this.currentBlockIndex&&this.currentBlockIndex++,n}},{key:"insertAtEnd",value:function(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}},{key:"mergeBlocks",value:function(t,e){var n,o;return i.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=this._blocks.indexOf(e),!e.isEmpty){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,i.default.awrap(e.data);case 5:if(o=r.sent,p.isEmpty(o)){r.next=9;break}return r.next=9,i.default.awrap(t.mergeWith(o));case 9:this.removeBlock(n),this.currentBlockIndex=this._blocks.indexOf(t);case 11:case"end":return r.stop()}}),null,this)}},{key:"removeBlock",value:function(t){if(void 0===t&&(t=this.currentBlockIndex),this._blocks.remove(t),this.currentBlockIndex>=t&&this.currentBlockIndex--,!this.blocks.length)return this.currentBlockIndex=-1,void this.insert();0===t&&(this.currentBlockIndex=0)}},{key:"removeSelectedBlocks",value:function(){for(var t,e=this.blocks.length-1;e>=0;e--)this.blocks[e].selected&&(this.removeBlock(e),t=e);return t}},{key:"removeAllBlocks",value:function(){for(var t=this.blocks.length-1;t>=0;t--)this._blocks.remove(t);this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus()}},{key:"split",value:function(){var t=this.Editor.Caret.extractFragmentFromCaretPosition(),e=d.default.make("div");e.appendChild(t);var n={text:d.default.isEmpty(e)?"":e.innerHTML};return this.insert(this.config.initialBlock,n)}},{key:"replace",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.initialBlock,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this.composeBlock(t,e,n);return this._blocks.insert(this.currentBlockIndex,o,!0),o}},{key:"getBlockByIndex",value:function(t){return this._blocks[t]}},{key:"getBlock",value:function(t){d.default.isElement(t)||(t=t.parentNode);var e=this._blocks.nodes,n=t.closest(".".concat(u.default.CSS.wrapper)),o=e.indexOf(n);if(o>=0)return this._blocks[o]}},{key:"highlightCurrentNode",value:function(){this.clearFocused(),this.currentBlock.focused=!0}},{key:"clearFocused",value:function(){this.blocks.forEach((function(t){return t.focused=!1}))}},{key:"setCurrentBlockByChildNode",value:function(t){d.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(u.default.CSS.wrapper));if(e)return this.currentBlockIndex=this._blocks.nodes.indexOf(e),this.currentBlock;throw new Error("Can not find a Block from this child Node")}},{key:"getBlockByChildNode",value:function(t){d.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(u.default.CSS.wrapper));return this.blocks.find((function(t){return t.holder===e}))}},{key:"swap",value:function(t,e){this._blocks.swap(t,e),this.currentBlockIndex=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBlockIndex;isNaN(t)||isNaN(e)?p.log("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(t)&&this.validateIndex(e)?(this._blocks.move(t,e),this.currentBlockIndex=t):p.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}},{key:"dropPointer",value:function(){this.currentBlockIndex=-1,this.clearFocused()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),t&&this.insert(this.config.initialBlock),this.Editor.UI.checkEmptiness()}},{key:"bindEvents",value:function(t){var e=this.Editor,n=e.BlockEvents,o=e.Listeners;o.on(t.holder,"keydown",(function(t){return n.keydown(t)}),!0),o.on(t.holder,"mouseup",(function(t){return n.mouseUp()})),o.on(t.holder,"mousedown",(function(t){return n.mouseDown(t)})),o.on(t.holder,"keyup",(function(t){return n.keyup(t)})),o.on(t.holder,"dragover",(function(t){return n.dragOver(t)})),o.on(t.holder,"dragleave",(function(t){return n.dragLeave(t)}))}},{key:"validateIndex",value:function(t){return!(t<0||t>=this._blocks.length)}},{key:"currentBlockIndex",get:function(){return this._currentBlockIndex},set:function(t){this._blocks[this._currentBlockIndex]&&this._blocks[this._currentBlockIndex].willUnselect(),this._blocks[t]&&this._blocks[t].willSelect(),this._currentBlockIndex=t}},{key:"firstBlock",get:function(){return this._blocks[0]}},{key:"lastBlock",get:function(){return this._blocks[this._blocks.length-1]}},{key:"currentBlock",get:function(){return this._blocks[this.currentBlockIndex]}},{key:"nextBlock",get:function(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}},{key:"nextContentfulBlock",get:function(){return this.blocks.slice(this.currentBlockIndex+1).find((function(t){return!!t.inputs.length}))}},{key:"previousContentfulBlock",get:function(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((function(t){return!!t.inputs.length}))}},{key:"previousBlock",get:function(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}},{key:"blocks",get:function(){return this._blocks.array}},{key:"isEditorEmpty",get:function(){return this.blocks.every((function(t){return t.isEmpty}))}}]),e}(f.default);o.default=y,y.displayName="BlockManager",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(26),n(2),n(3),n(4),n(5),n(6),n(7),n(14),n(13),n(28)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p){"use strict";var h=n(15),v=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=v(i),r=v(r),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=h(f),d=v(d),p=v(p);var g=function(t){function e(){var t;return(0,r.default)(this,e),(t=(0,s.default)(this,(0,l.default)(e).apply(this,arguments))).needToSelectAll=!1,t.nativeInputSelected=!1,t.readyToBlockSelection=!1,t}return(0,c.default)(e,t),(0,a.default)(e,[{key:"prepare",value:function(){var t=this;this.Editor.Shortcuts.add({name:"CMD+A",handler:function(e){t.Editor.BlockManager.currentBlock&&t.handleCommandA(e)}}),this.selection=new p.default}},{key:"unSelectBlockByIndex",value:function(t){var e=this.Editor.BlockManager;(isNaN(t)?e.currentBlock:e.getBlockByIndex(t)).selected=!1}},{key:"clearSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.Editor,o=n.BlockManager,i=n.Caret,r=n.RectangleSelection;if(this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1,this.anyBlockSelected&&t&&t instanceof KeyboardEvent&&f.isPrintableKey(t.keyCode)){var a=o.removeSelectedBlocks();o.insertInitialBlockAtIndex(a,!0),i.setToBlock(o.currentBlock),f.delay((function(){i.insertContentAtCaretPosition(t.key)}),20)()}this.Editor.CrossBlockSelection.clear(t),this.anyBlockSelected&&!r.isRectActivated()?(e&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection()}},{key:"copySelectedBlocks",value:function(t){var e,n,o,r,a=this;return i.default.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t.preventDefault(),e=d.default.make("div"),this.selectedBlocks.forEach((function(t){var n=a.Editor.Sanitizer.clean(t.holder.innerHTML,a.sanitizerConfig),o=d.default.make("p");o.innerHTML=n,e.appendChild(o)})),s.next=5,i.default.awrap(Promise.all(this.selectedBlocks.map((function(t){return t.save()}))));case 5:n=s.sent,o=Array.from(e.childNodes).map((function(t){return t.textContent})).join("\n\n"),r=e.innerHTML,t.clipboardData.setData("text/plain",o),t.clipboardData.setData("text/html",r),t.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(n));case 11:case"end":return s.stop()}}),null,this)}},{key:"selectBlockByIndex",value:function(t){var e,n=this.Editor.BlockManager;n.clearFocused(),e=isNaN(t)?n.currentBlock:n.getBlockByIndex(t),this.selection.save(),p.default.get().removeAllRanges(),e.selected=!0,this.Editor.InlineToolbar.close()}},{key:"handleCommandA",value:function(t){if(this.Editor.RectangleSelection.clearSelection(),!d.default.isNativeInput(t.target)||this.readyToBlockSelection){var e=this.Editor.BlockManager.getBlock(t.target).inputs;e.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==e.length||this.needToSelectAll?this.needToSelectAll?(t.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(t.preventDefault(),this.selectBlockByIndex(),this.needToSelectAll=!0):this.needToSelectAll=!0}else this.readyToBlockSelection=!0}},{key:"selectAllBlocks",value:function(){this.selection.save(),p.default.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}},{key:"sanitizerConfig",get:function(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}},{key:"allBlocksSelected",get:function(){return this.Editor.BlockManager.blocks.every((function(t){return!0===t.selected}))},set:function(t){this.Editor.BlockManager.blocks.forEach((function(e){return e.selected=t}))}},{key:"anyBlockSelected",get:function(){return this.Editor.BlockManager.blocks.some((function(t){return!0===t.selected}))}},{key:"selectedBlocks",get:function(){return this.Editor.BlockManager.blocks.filter((function(t){return t.selected}))}}]),e}(u.default);o.default=g,g.displayName="BlockSelection",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(28),n(7),n(13),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d){"use strict";var p=n(15),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=h(i),r=h(r),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f),d=p(d);var v=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"setToBlock",value:function(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.Editor.BlockManager;switch(o){case this.positions.START:e=t.firstInput;break;case this.positions.END:e=t.lastInput;break;default:e=t.currentInput}if(e){var a=f.default.getDeepestNode(e,o===this.positions.END),s=f.default.getContentLength(a);switch(!0){case o===this.positions.START:i=0;break;case o===this.positions.END:case i>s:i=s}d.delay((function(){n.set(a,i)}),20)(),r.setCurrentBlockByChildNode(t.holder),r.currentBlock.currentInput=e}}},{key:"setToInput",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.Editor.BlockManager.currentBlock,i=f.default.getDeepestNode(t);switch(e){case this.positions.START:this.set(i,0);break;case this.positions.END:var r=f.default.getContentLength(i);this.set(i,r);break;default:n&&this.set(i,n)}o.currentInput=t}},{key:"set",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),o=c.default.get();if(f.default.isNativeInput(t)){if(!f.default.canSetCaret(t))return;return t.focus(),void(t.selectionStart=t.selectionEnd=e)}n.setStart(t,e),n.setEnd(t,e),o.removeAllRanges(),o.addRange(n);var i=t.nodeType===Node.ELEMENT_NODE?t.getBoundingClientRect():n.getBoundingClientRect(),r=i.top,a=i.bottom,s=window,l=s.innerHeight;r<0&&window.scrollBy(0,r),a>l&&window.scrollBy(0,a-l)}},{key:"setToTheLastBlock",value:function(){var t=this.Editor.BlockManager.lastBlock;if(t)if(this.Editor.Tools.isInitial(t.tool)&&t.isEmpty)this.setToBlock(t);else{var e=this.Editor.BlockManager.insertAtEnd();this.setToBlock(e)}}},{key:"extractFragmentFromCaretPosition",value:function(){var t=c.default.get();if(t.rangeCount){var e=t.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput;if(e.deleteContents(),n){var o=e.cloneRange();return o.selectNodeContents(n),o.setStart(e.endContainer,e.endOffset),o.extractContents()}}}},{key:"navigateNext",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.Editor.BlockManager,n=e.currentBlock,o=e.nextContentfulBlock,i=n.nextInput;return!(!o&&!i||!t&&!this.isAtEnd||(i?this.setToInput(i,this.positions.START):this.setToBlock(o,this.positions.START),0))}},{key:"navigatePrevious",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.Editor.BlockManager,n=e.currentBlock,o=e.previousContentfulBlock;if(!n)return!1;var i=n.previousInput;return!(!o&&!i||!t&&!this.isAtStart||(i?this.setToInput(i,this.positions.END):this.setToBlock(o,this.positions.END),0))}},{key:"createShadow",value:function(t){var n=document.createElement("span");n.classList.add(e.CSS.shadowCaret),t.insertAdjacentElement("beforeEnd",n)}},{key:"restoreCaret",value:function(t){var n=t.querySelector(".".concat(e.CSS.shadowCaret));n&&((new c.default).expandToTag(n),setTimeout((function(){var t=document.createRange();t.selectNode(n),t.extractContents()}),50))}},{key:"insertContentAtCaretPosition",value:function(t){var e=document.createDocumentFragment(),n=document.createElement("div"),o=c.default.get(),i=c.default.range;n.innerHTML=t,Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)}));var r=e.lastChild;i.deleteContents(),i.insertNode(e);var a=document.createRange();a.setStart(r,r.textContent.length),o.removeAllRanges(),o.addRange(a)}},{key:"getHigherLevelSiblings",value:function(t,e){for(var n=t,o=[];n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;for(var i="left"===e?"previousSibling":"nextSibling";n[i];)n=n[i],o.push(n);return o}},{key:"positions",get:function(){return{START:"start",END:"end",DEFAULT:"default"}}},{key:"isAtStart",get:function(){var t=c.default.get(),e=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),n=t.focusNode;if(f.default.isNativeInput(e))return 0===e.selectionEnd;if(!t.anchorNode)return!1;var o=n.textContent.search(/\S/);-1===o&&(o=0);var i=t.focusOffset;return n.nodeType!==Node.TEXT_NODE&&n.childNodes.length&&(n.childNodes[i]?(n=n.childNodes[i],i=0):i=(n=n.childNodes[i-1]).textContent.length),!(!f.default.isLineBreakTag(e)&&!f.default.isEmpty(e)||!this.getHigherLevelSiblings(n,"left").every((function(t){var e=f.default.isLineBreakTag(t),n=1===t.children.length&&f.default.isLineBreakTag(t.children[0]),o=e||n;return f.default.isEmpty(t)&&!o}))||i!==o)||(null===e||n===e&&i<=o)}},{key:"isAtEnd",get:function(){var t=c.default.get(),e=t.focusNode,n=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(f.default.isNativeInput(n))return n.selectionEnd===n.value.length;if(!t.focusNode)return!1;var o=t.focusOffset;if(e.nodeType!==Node.TEXT_NODE&&e.childNodes.length&&(e.childNodes[o-1]?o=(e=e.childNodes[o-1]).textContent.length:(e=e.childNodes[0],o=0)),f.default.isLineBreakTag(n)||f.default.isEmpty(n)){var i=this.getHigherLevelSiblings(e,"right");if(i.every((function(t,e){return e===i.length-1&&f.default.isLineBreakTag(t)||f.default.isEmpty(t)&&!f.default.isLineBreakTag(t)}))&&o===e.textContent.length)return!0}var r=n.textContent.replace(/\s+$/,"");return e===n&&o>=r.length}}],[{key:"CSS",get:function(){return{shadowCaret:"cdx-shadow-caret"}}}]),e}(u.default);o.default=v,v.displayName="Caret",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(28),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f){"use strict";var d=n(15),p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=p(i),r=p(r),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=d(f);var h=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).onMouseUp=function(){var e=t.Editor.Listeners;e.off(document,"mouseover",t.onMouseOver),e.off(document,"mouseup",t.onMouseUp)},t.onMouseOver=function(e){var n=t.Editor.BlockManager,o=n.getBlockByChildNode(e.relatedTarget)||t.lastSelectedBlock,i=n.getBlockByChildNode(e.target);if(o&&i&&i!==o){if(o===t.firstSelectedBlock)return u.default.get().removeAllRanges(),o.selected=!0,void(i.selected=!0);if(i===t.firstSelectedBlock)return o.selected=!1,void(i.selected=!1);t.Editor.InlineToolbar.close(),t.toggleBlocksSelectedState(o,i),t.lastSelectedBlock=i}},t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"watchSelection",value:function(t){if(t.button===f.mouseButtons.LEFT){var e=this.Editor,n=e.BlockManager,o=(e.UI,e.Listeners);this.firstSelectedBlock=n.getBlock(t.target),this.lastSelectedBlock=this.firstSelectedBlock,o.on(document,"mouseover",this.onMouseOver),o.on(document,"mouseup",this.onMouseUp)}}},{key:"toggleBlockSelectedState",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.Editor.BlockManager;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=e.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,u.default.get().removeAllRanges());var n=e.blocks.indexOf(this.lastSelectedBlock)+(t?1:-1),o=e.blocks[n];o&&(this.lastSelectedBlock.selected!==o.selected?o.selected=!0:this.lastSelectedBlock.selected=!1,this.lastSelectedBlock=o,this.Editor.InlineToolbar.close())}},{key:"clear",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,i=e.Caret,r=n.blocks.indexOf(this.firstSelectedBlock),a=n.blocks.indexOf(this.lastSelectedBlock);if(o.anyBlockSelected&&r>-1&&a>-1)if(t&&t instanceof KeyboardEvent)switch(t.keyCode){case f.keyCodes.DOWN:case f.keyCodes.RIGHT:i.setToBlock(n.blocks[Math.max(r,a)],i.positions.END);break;case f.keyCodes.UP:case f.keyCodes.LEFT:i.setToBlock(n.blocks[Math.min(r,a)],i.positions.START);break;default:i.setToBlock(n.blocks[Math.max(r,a)],i.positions.END)}else i.setToBlock(n.blocks[Math.max(r,a)],i.positions.END);this.firstSelectedBlock=this.lastSelectedBlock=null}},{key:"toggleBlocksSelectedState",value:function(t,e){for(var n=this.Editor.BlockManager,o=n.blocks.indexOf(t),i=n.blocks.indexOf(e),r=t.selected!==e.selected,a=Math.min(o,i);a<=Math.max(o,i);a++){var s=n.blocks[a];s!==this.firstSelectedBlock&&s!==(r?t:e)&&(n.blocks[a].selected=!n.blocks[a].selected)}}},{key:"isCrossBlockSelectionStarted",get:function(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock}}]),e}(c.default);o.default=h,h.displayName="CrossBlockSelection",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(26),n(2),n(3),n(4),n(5),n(6),n(28),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f){"use strict";var d=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=d(i),r=d(r),a=d(a),s=d(s),l=d(l),c=d(c),u=d(u);var p=function(t){function e(){var t;return(0,r.default)(this,e),(t=(0,s.default)(this,(0,l.default)(e).apply(this,arguments))).isStartedAtEditor=!1,t.processDrop=function(e){var n,o,r,a,s,l;return i.default.async((function(i){for(;;)switch(i.prev=i.next){case 0:n=t.Editor,o=n.BlockManager,r=n.Caret,a=n.Paste,e.preventDefault(),o.blocks.forEach((function(t){return t.dropTarget=!1})),u.default.isAtEditor&&!u.default.isCollapsed&&t.isStartedAtEditor&&document.execCommand("delete"),t.isStartedAtEditor=!1;try{s=o.setCurrentBlockByChildNode(e.target),t.Editor.Caret.setToBlock(s,r.positions.END)}catch(e){l=o.setCurrentBlockByChildNode(o.lastBlock.holder),t.Editor.Caret.setToBlock(l,r.positions.END)}a.processDataTransfer(e.dataTransfer,!0);case 7:case"end":return i.stop()}}))},t}return(0,c.default)(e,t),(0,a.default)(e,[{key:"prepare",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){var t=this;this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"drop",this.processDrop,!0),this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"dragstart",(function(e){u.default.isAtEditor&&!u.default.isCollapsed&&(t.isStartedAtEditor=!0),t.Editor.InlineToolbar.close()})),this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"dragover",(function(t){return t.preventDefault()}),!0)}}]),e}((f=d(f)).default);o.default=p,p.displayName="DragNDrop",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).subscribers={},t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"on",value:function(t,e){t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(e)}},{key:"once",value:function(t,e){var n=this;t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push((function o(i){var r=e(i),a=n.subscribers[t].indexOf(o);return-1!==a&&n.subscribers[t].splice(a,1),r}))}},{key:"emit",value:function(t,e){this.subscribers[t]&&this.subscribers[t].reduce((function(t,e){var n=e(t);return n||t}),e)}},{key:"off",value:function(t,e){for(var n=0;n<this.subscribers[t].length;n++)if(this.subscribers[t][n]===e){delete this.subscribers[t][n];break}}},{key:"destroy",value:function(){this.subscribers=null}}]),e}((c=u(c)).default);o.default=f,f.displayName="Events",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=u(l);var f=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).allListeners=[],t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={element:t,eventType:e,handler:n,options:o},r=this.findOne(t,e,n);r||(this.allListeners.push(i),t.addEventListener(e,n,o))}},{key:"off",value:function(t,e,n,o){var i=this,r=this.findAll(t,e,n);r.forEach((function(t,e){var n=i.allListeners.indexOf(r[e]);n>0&&(i.allListeners.splice(n,1),t.element.removeEventListener(t.eventType,t.handler,t.options))}))}},{key:"findOne",value:function(t,e,n){var o=this.findAll(t,e,n);return o.length>0?o[0]:null}},{key:"findAll",value:function(t,e,n){var o=t?this.findByEventTarget(t):[];return t&&e&&n?o.filter((function(t){return t.eventType===e&&t.handler===n})):t&&e?o.filter((function(t){return t.eventType===e})):o}},{key:"removeAll",value:function(){this.allListeners.map((function(t){t.element.removeEventListener(t.eventType,t.handler,t.options)})),this.allListeners=[]}},{key:"findByEventTarget",value:function(t){return this.allListeners.filter((function(e){if(e.element===t)return e}))}},{key:"findByType",value:function(t){return this.allListeners.filter((function(e){if(e.eventType===t)return e}))}},{key:"findByHandler",value:function(t){return this.allListeners.filter((function(e){if(e.handler===t)return e}))}}]),e}((c=u(c)).default);o.default=f,f.displayName="Listeners",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(26),n(2),n(3),n(4),n(5),n(6),n(7),n(14),n(59)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d){"use strict";var p=n(15),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=h(i),r=h(r),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=p(f),d=h(d);var v=function(t){function e(){var t;return(0,r.default)(this,e),(t=(0,s.default)(this,(0,l.default)(e).apply(this,arguments))).mutationDebouncer=f.debounce((function(){t.updateNativeInputs(),t.config.onChange(t.Editor.API.methods)}),e.DebounceTimer),t.nativeInputs=[],t}return(0,c.default)(e,t),(0,a.default)(e,[{key:"destroy",value:function(){var t=this;this.mutationDebouncer=null,this.observer&&this.observer.disconnect(),this.observer=null,this.nativeInputs.forEach((function(e){return t.Editor.Listeners.off(e,"input",t.mutationDebouncer)}))}},{key:"prepare",value:function(){var t=this;return i.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:window.setTimeout((function(){t.setObserver()}),1e3);case 1:case"end":return e.stop()}}))}},{key:"disable",value:function(){this.disabled=!0}},{key:"enable",value:function(){this.disabled=!1}},{key:"setObserver",value:function(){var t=this,e=this.Editor.UI;this.observer=new MutationObserver((function(e,n){t.mutationHandler(e,n)})),this.observer.observe(e.nodes.redactor,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t,e){if(!this.disabled){var n=!1;t.forEach((function(t){switch(t.type){case"childList":case"subtree":case"characterData":case"characterDataOldValue":n=!0;break;case"attributes":if(!t.target.classList.contains(d.default.CSS.wrapper))return void(n=!0)}})),n&&this.mutationDebouncer()}}},{key:"updateNativeInputs",value:function(){var t=this;this.nativeInputs&&this.nativeInputs.forEach((function(e){t.Editor.Listeners.off(e,"input")})),this.nativeInputs=Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")),this.nativeInputs.forEach((function(e){return t.Editor.Listeners.on(e,"input",t.mutationDebouncer)}))}}]),e}(u.default);o.default=v,v.displayName="ModificationsObserver",v.DebounceTimer=450,t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(364)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u){"use strict";var f=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=f(i),r=f(r),a=f(a),s=f(s),l=f(l),c=f(c),u=f(u);var d=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(0,s.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,r.default)(e,[{key:"show",value:function(t){u.default.show(t)}}]),e}(c.default);o.default=d,d.displayName="Notifier",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(103),n(26),n(50),n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p,h){"use strict";var v=n(15),g=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=g(i),r=g(r),a=g(a),s=g(s),l=g(l),c=g(c),u=g(u),f=g(f),d=g(d),p=g(p),h=v(h);var y=function(t){function e(){var t;return(0,s.default)(this,e),(t=(0,c.default)(this,(0,u.default)(e).apply(this,arguments))).MIME_TYPE="application/x-editor-js",t.toolsTags={},t.tagsByTool={},t.toolsPatterns=[],t.toolsFiles={},t.exceptionList=[],t.processTool=function(e){var n=(0,a.default)(e,2),o=n[0],i=n[1];try{var r=new t.Editor.Tools.blockTools[o]({api:t.Editor.API.methods,config:{},data:{}});if(!1===i.pasteConfig)return void t.exceptionList.push(o);if("function"!=typeof r.onPaste)return;var s=i.pasteConfig||{};t.getTagsConfig(o,s),t.getFilesConfig(o,s),t.getPatternsConfig(o,s)}catch(t){h.log("Paste handling for «".concat(o,"» Tool hasn't been set up because of the error"),"warn",t)}},t.handlePasteEvent=function(e){var n,o,i;return r.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.Editor,o=n.BlockManager,i=n.Toolbar,o.currentBlock&&(!t.isNativeBehaviour(e.target)||e.clipboardData.types.includes("Files"))){r.next=3;break}return r.abrupt("return");case 3:if(!o.currentBlock||!t.exceptionList.includes(o.currentBlock.name)){r.next=5;break}return r.abrupt("return");case 5:e.preventDefault(),t.processDataTransfer(e.clipboardData),o.clearFocused(),i.close();case 9:case"end":return r.stop()}}))},t}return(0,f.default)(e,t),(0,l.default)(e,[{key:"prepare",value:function(){return r.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setCallback(),this.processTools();case 2:case"end":return t.stop()}}),null,this)}},{key:"processDataTransfer",value:function(t){var e,n,o,i,a,s,l,c,u,f=arguments;return r.default.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(e=f.length>1&&void 0!==f[1]&&f[1],n=this.Editor.Sanitizer,!((o=t.types).includes?o.includes("Files"):o.contains("Files"))){d.next=8;break}return d.next=7,r.default.awrap(this.processFiles(t.files));case 7:return d.abrupt("return");case 8:if(i=t.getData(this.MIME_TYPE),a=t.getData("text/plain"),s=t.getData("text/html"),!i){d.next=19;break}return d.prev=12,this.insertEditorJSData(JSON.parse(i)),d.abrupt("return");case 17:d.prev=17,d.t0=d.catch(12);case 19:if(e&&a.trim()&&s.trim()&&(s="<p>"+(s.trim()?s:a)+"</p>"),l=Object.keys(this.toolsTags).reduce((function(t,e){return t[e.toLowerCase()]=!0,t}),{}),c=Object.assign({},l,n.getAllInlineToolsConfig(),{br:{}}),(u=n.clean(s,c)).trim()&&u.trim()!==a&&p.default.isHTMLString(u)){d.next=28;break}return d.next=26,r.default.awrap(this.processText(a));case 26:d.next=30;break;case 28:return d.next=30,r.default.awrap(this.processText(u,!0));case 30:case"end":return d.stop()}}),null,this,[[12,17]])}},{key:"processText",value:function(t){var e,n,o,i,a,s,l,c,u=this,f=arguments;return r.default.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(e=f.length>1&&void 0!==f[1]&&f[1],n=this.Editor,o=n.Caret,i=n.BlockManager,a=n.Tools,(s=e?this.processHTML(t):this.processPlain(t)).length){d.next=5;break}return d.abrupt("return");case 5:if(1!==s.length){d.next=8;break}return s[0].isBlock?this.processSingleBlock(s.pop()):this.processInlinePaste(s.pop()),d.abrupt("return");case 8:l=i.currentBlock&&a.isInitial(i.currentBlock.tool),c=l&&i.currentBlock.isEmpty,s.map((function(t,e){return r.default.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.insertBlock(t,0===e&&c));case 1:case"end":return n.stop()}}))})),i.currentBlock&&o.setToBlock(i.currentBlock,o.positions.END);case 12:case"end":return d.stop()}}),null,this)}},{key:"setCallback",value:function(){this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"processTools",value:function(){var t=this.Editor.Tools.blockTools;Object.entries(t).forEach(this.processTool)}},{key:"getTagsConfig",value:function(t,e){var n=this,o=e.tags||[];o.forEach((function(e){n.toolsTags.hasOwnProperty(e)?h.log("Paste handler for «".concat(t,"» Tool on «").concat(e,"» tag is skipped ")+"because it is already used by «".concat(n.toolsTags[e].tool,"» Tool."),"warn"):n.toolsTags[e.toUpperCase()]={tool:t}})),this.tagsByTool[t]=o.map((function(t){return t.toUpperCase()}))}},{key:"getFilesConfig",value:function(t,e){var n=e.files,o=void 0===n?{}:n,i=o.extensions,r=o.mimeTypes;(i||r)&&(i&&!Array.isArray(i)&&(h.log("«extensions» property of the onDrop config for «".concat(t,"» Tool should be an array")),i=[]),r&&!Array.isArray(r)&&(h.log("«mimeTypes» property of the onDrop config for «".concat(t,"» Tool should be an array")),r=[]),r&&(r=r.filter((function(e){return!!h.isValidMimeType(e)||(h.log("MIME type value «".concat(e,"» for the «").concat(t,"» Tool is not a valid MIME type"),"warn"),!1)}))),this.toolsFiles[t]={extensions:i||[],mimeTypes:r||[]})}},{key:"getPatternsConfig",value:function(t,e){var n=this;e.patterns&&!h.isEmpty(e.patterns)&&Object.entries(e.patterns).forEach((function(e){var o=(0,a.default)(e,2),i=o[0],r=o[1];r instanceof RegExp||h.log("Pattern ".concat(r," for «").concat(t,"» Tool is skipped because it should be a Regexp instance."),"warn"),n.toolsPatterns.push({key:i,pattern:r,tool:t})}))}},{key:"isNativeBehaviour",value:function(t){return p.default.isNativeInput(t)}},{key:"processFiles",value:function(t){var e,n,o,i,a,s,l=this;return r.default.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=this.Editor,n=e.BlockManager,o=e.Tools,c.next=3,r.default.awrap(Promise.all(Array.from(t).map((function(t){return l.processFile(t)}))));case 3:i=(i=c.sent).filter((function(t){return!!t})),a=o.isInitial(n.currentBlock.tool),s=a&&n.currentBlock.isEmpty,i.forEach((function(t,e){n.paste(t.type,t.event,0===e&&s)}));case 8:case"end":return c.stop()}}),null,this)}},{key:"processFile",value:function(t){var e,n,o,i,s;return r.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=h.getFileExtension(t),n=Object.entries(this.toolsFiles).find((function(n){var o=(0,a.default)(n,2),i=(o[0],o[1]),r=i.mimeTypes,s=i.extensions,l=t.type.split("/"),c=(0,a.default)(l,2),u=c[0],f=c[1],d=s.find((function(t){return t.toLowerCase()===e.toLowerCase()})),p=r.find((function(t){var e=t.split("/"),n=(0,a.default)(e,2),o=n[0],i=n[1];return o===u&&(i===f||"*"===i)}));return!!d||!!p}))){r.next=4;break}return r.abrupt("return");case 4:return o=(0,a.default)(n,1),i=o[0],s=this.composePasteEvent("file",{file:t}),r.abrupt("return",{event:s,type:i});case 7:case"end":return r.stop()}}),null,this)}},{key:"processHTML",value:function(t){var e=this,n=this.Editor,o=n.Tools,i=n.Sanitizer,r=this.config.initialBlock,a=p.default.make("DIV");return a.innerHTML=t,this.getNodes(a).map((function(t){var n,a=r,s=!1;switch(t.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(n=p.default.make("div")).appendChild(t);break;case Node.ELEMENT_NODE:n=t,s=!0,e.toolsTags[n.tagName]&&(a=e.toolsTags[n.tagName].tool)}var l=o.blockTools[a].pasteConfig.tags.reduce((function(t,e){return t[e.toLowerCase()]={},t}),{}),c=Object.assign({},l,i.getInlineToolsConfig(a));return n.innerHTML=i.clean(n.innerHTML,c),{content:n,isBlock:s,tool:a,event:e.composePasteEvent("tag",{data:n})}})).filter((function(t){return!p.default.isNodeEmpty(t.content)||p.default.isSingleTag(t.content)}))}},{key:"processPlain",value:function(t){var e=this,n=this.config.initialBlock;if(this.Editor.Tools,!t)return[];var o=n;return t.split(/\r?\n/).filter((function(t){return t.trim()})).map((function(t){var n=p.default.make("div");n.textContent=t;var i=e.composePasteEvent("tag",{data:n});return{content:n,tool:o,isBlock:!1,event:i}}))}},{key:"processSingleBlock",value:function(t){var e,n,o,i,a;return r.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=this.Editor,n=e.Caret,o=e.BlockManager,i=e.Tools,(a=o.currentBlock)&&t.tool===a.name&&p.default.containsOnlyInlineElements(t.content.innerHTML)){r.next=5;break}return this.insertBlock(t,a&&i.isInitial(a.tool)&&a.isEmpty),r.abrupt("return");case 5:n.insertContentAtCaretPosition(t.content.innerHTML);case 6:case"end":return r.stop()}}),null,this)}},{key:"processInlinePaste",value:function(t){var n,o,i,a,s,l,c,u,f,d;return r.default.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(n=this.Editor,o=n.BlockManager,i=n.Caret,a=n.Sanitizer,s=n.Tools,l=t.content,t.tool,!(o.currentBlock&&s.isInitial(o.currentBlock.tool)&&l.textContent.length<e.PATTERN_PROCESSING_MAX_LENGTH)){p.next=12;break}return p.next=6,r.default.awrap(this.processPattern(l.textContent));case 6:if(!(c=p.sent)){p.next=12;break}return f=o.currentBlock&&s.isInitial(o.currentBlock.tool)&&o.currentBlock.isEmpty,u=o.paste(c.tool,c.event,f),i.setToBlock(u,i.positions.END),p.abrupt("return");case 12:o.currentBlock&&o.currentBlock.currentInput?(d=a.getInlineToolsConfig(o.currentBlock.name),document.execCommand("insertHTML",!1,a.clean(l.innerHTML,d))):this.insertBlock(t);case 13:case"end":return p.stop()}}),null,this)}},{key:"processPattern",value:function(t){var e,n;return r.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.toolsPatterns.find((function(e){var n=e.pattern.exec(t);return!!n&&t===n.shift()}))){o.next=3;break}return o.abrupt("return");case 3:return n=this.composePasteEvent("pattern",{key:e.key,data:t}),o.abrupt("return",{event:n,tool:e.tool});case 5:case"end":return o.stop()}}),null,this)}},{key:"insertBlock",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.Editor,i=o.BlockManager,r=o.Caret,a=i.currentBlock;if(n&&a&&a.isEmpty)return e=i.paste(t.tool,t.event,!0),void r.setToBlock(e,r.positions.END);e=i.paste(t.tool,t.event),r.setToBlock(e,r.positions.END)}},{key:"insertEditorJSData",value:function(t){var e=this,n=this.Editor,o=n.BlockManager,i=n.Tools;t.forEach((function(t,n){var r=t.tool,a=t.data,s=e.Editor.Tools.getToolSettings(r),l=!1;0===n&&(l=o.currentBlock&&i.isInitial(o.currentBlock.tool)&&o.currentBlock.isEmpty),l?o.replace(r,a,s):o.insert(r,a,s)}))}},{key:"getNodes",value:function(t){var e=this,n=Array.from(t.childNodes),o=Object.keys(this.toolsTags);return n.reduce((function t(n,r){if(p.default.isEmpty(r)&&!p.default.isSingleTag(r))return n;var a=n[n.length-1],s=new DocumentFragment;switch(a&&p.default.isFragment(a)&&(s=n.pop()),r.nodeType){case Node.ELEMENT_NODE:var l=r,c=(e.toolsTags[l.tagName]||{}).tool,u=void 0===c?"":c,f=e.tagsByTool[u]||[],d=o.includes(l.tagName),h=p.default.blockElements.includes(l.tagName.toLowerCase()),v=Array.from(l.children).some((function(t){var e=t.tagName;return o.includes(e)&&!f.includes(e)})),g=Array.from(l.children).some((function(t){var e=t.tagName;return p.default.blockElements.includes(e.toLowerCase())}));if(!h&&!d&&!v)return s.appendChild(l),[].concat((0,i.default)(n),[s]);if(d&&!v||h&&!g&&!v)return[].concat((0,i.default)(n),[s,l]);break;case Node.TEXT_NODE:return s.appendChild(r),[].concat((0,i.default)(n),[s]);default:return[].concat((0,i.default)(n),[s])}return[].concat((0,i.default)(n),(0,i.default)(Array.from(r.childNodes).reduce(t,[])))}),[])}},{key:"composePasteEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}}]),e}(d.default);o.default=y,y.displayName="Paste",y.PATTERN_PROCESSING_MAX_LENGTH=450,t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(28),n(59)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d){"use strict";var p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=p(i),r=p(r),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=p(f),d=p(d);var h=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).isRectSelectionActivated=!1,t.SCROLL_SPEED=3,t.HEIGHT_OF_SCROLL_ZONE=40,t.BOTTOM_SCROLL_ZONE=1,t.TOP_SCROLL_ZONE=2,t.MAIN_MOUSE_BUTTON=0,t.mousedown=!1,t.isScrolling=!1,t.inScrollZone=null,t.startX=0,t.startY=0,t.mouseX=0,t.mouseY=0,t.stackOfSelected=[],t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"prepare",value:function(){var t=this,e=this.Editor.Listeners,n=this.genHTML().container;e.on(n,"mousedown",(function(e){e.button===t.MAIN_MOUSE_BUTTON&&t.startSelection(e.pageX,e.pageY)}),!1),e.on(document.body,"mousemove",(function(e){t.changingRectangle(e),t.scrollByZones(e.clientY)}),!1),e.on(document.body,"mouseleave",(function(){t.clearSelection(),t.endSelection()})),e.on(window,"scroll",(function(e){t.changingRectangle(e)}),!1),e.on(document.body,"mouseup",(function(){t.endSelection()}),!1)}},{key:"startSelection",value:function(t,e){var n=document.elementFromPoint(t-window.pageXOffset,e-window.pageYOffset);n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar))||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);var o=[".".concat(d.default.CSS.content),".".concat(this.Editor.Toolbar.CSS.toolbar),".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],i=n.closest("."+this.Editor.UI.CSS.editorWrapper),r=o.some((function(t){return!!n.closest(t)}));i&&!r&&(this.mousedown=!0,this.startX=t,this.startY=e)}},{key:"endSelection",value:function(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}},{key:"isRectActivated",value:function(){return this.isRectSelectionActivated}},{key:"clearSelection",value:function(){this.isRectSelectionActivated=!1}},{key:"scrollByZones",value:function(t){this.inScrollZone=null,t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1}},{key:"genHTML",value:function(){var t=this.Editor.UI,n=t.nodes.holder.querySelector("."+t.CSS.editorWrapper),o=u.default.make("div",e.CSS.overlay,{}),i=u.default.make("div",e.CSS.overlayContainer,{}),r=u.default.make("div",e.CSS.rect,{});return i.appendChild(r),o.appendChild(i),n.appendChild(o),this.overlayRectangle=r,{container:n,overlay:o}}},{key:"scrollVertical",value:function(t){var e=this;if(this.inScrollZone&&this.mousedown){var n=window.pageYOffset;window.scrollBy(0,t),this.mouseY+=window.pageYOffset-n,setTimeout((function(){e.scrollVertical(t)}),0)}}},{key:"changingRectangle",value:function(t){if(this.mousedown){void 0!==t.pageY&&(this.mouseX=t.pageX,this.mouseY=t.pageY);var e=this.genInfoForMouseSelection(),n=e.rightPos,o=e.leftPos,i=e.index,r=this.startX>n&&this.mouseX>n,a=this.startX<o&&this.mouseX<o;this.rectCrossesBlocks=!(r||a),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),void 0!==i&&(this.trySelectNextBlock(i),this.inverseSelection(),f.default.get().removeAllRanges(),t.preventDefault())}}},{key:"shrinkRectangleToPoint",value:function(){this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px")}},{key:"inverseSelection",value:function(){var t=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!t){var e=!0,n=!1,o=void 0;try{for(var i,r=this.stackOfSelected[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=i.value;this.Editor.BlockSelection.selectBlockByIndex(a)}}catch(t){n=!0,o=t}finally{try{e||null==r.return||r.return()}finally{if(n)throw o}}}if(!this.rectCrossesBlocks&&t){var s=!0,l=!1,c=void 0;try{for(var u,f=this.stackOfSelected[Symbol.iterator]();!(s=(u=f.next()).done);s=!0){var d=u.value;this.Editor.BlockSelection.unSelectBlockByIndex(d)}}catch(t){l=!0,c=t}finally{try{s||null==f.return||f.return()}finally{if(l)throw c}}}}},{key:"updateRectangleSize",value:function(){this.mouseY>=this.startY?(this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.mouseY-window.pageYOffset,"px")):(this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.top="".concat(this.mouseY-window.pageYOffset,"px")),this.mouseX>=this.startX?(this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.mouseX-window.pageXOffset,"px")):(this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.left="".concat(this.mouseX-window.pageXOffset,"px"))}},{key:"genInfoForMouseSelection",value:function(){var t,e=document.body.offsetWidth/2,n=this.mouseY-window.pageYOffset,o=document.elementFromPoint(e,n),i=this.Editor.BlockManager.getBlockByChildNode(o);void 0!==i&&(t=this.Editor.BlockManager.blocks.findIndex((function(t){return t.holder===i.holder})));var r=this.Editor.BlockManager.lastBlock.holder.querySelector("."+d.default.CSS.content),a=Number.parseInt(window.getComputedStyle(r).width,10)/2;return{index:t,leftPos:e-a,rightPos:e+a}}},{key:"addBlockInSelection",value:function(t){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(t),this.stackOfSelected.push(t)}},{key:"trySelectNextBlock",value:function(t){var e=this,n=this.stackOfSelected[this.stackOfSelected.length-1]===t,o=this.stackOfSelected.length;if(!n){var i=this.stackOfSelected[o-1]-this.stackOfSelected[o-2]>0,r=o<=1?0:i?1:-1,a=t>this.stackOfSelected[o-1]&&1===r,s=t<this.stackOfSelected[o-1]&&-1===r,l=!(a||s||0===r);if(l||!(t>this.stackOfSelected[o-1]||void 0===this.stackOfSelected[o-1])){if(!l&&t<this.stackOfSelected[o-1])for(var c=this.stackOfSelected[o-1]-1;c>=t;c--)this.addBlockInSelection(c);else if(l){var u,f=o-1;for(u=t>this.stackOfSelected[o-1]?function(){return t>e.stackOfSelected[f]}:function(){return t<e.stackOfSelected[f]};u();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]),this.stackOfSelected.pop(),f--}}else for(var d=this.stackOfSelected[o-1]+1||t;d<=t;d++)this.addBlockInSelection(d)}}}],[{key:"CSS",get:function(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}}]),e}(c.default);o.default=h,h.displayName="RectangleSelection",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(26),n(2),n(3),n(4),n(5),n(6),n(7),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f){"use strict";var d=n(15),p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=p(i),r=p(r),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=d(f);var h=function(t){function e(){return(0,r.default)(this,e),(0,s.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,c.default)(e,t),(0,a.default)(e,[{key:"render",value:function(t){var e,n,o=this;return i.default.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.map((function(t){return{function:function(){return o.insertBlock(t)}}})),r.next=3,i.default.awrap(f.sequence(e));case 3:return n=r.sent,this.Editor.UI.checkEmptiness(),r.abrupt("return",n);case 6:case"end":return r.stop()}}),null,this)}},{key:"insertBlock",value:function(t){var e,n,o,r,a,s,l,c,u;return i.default.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=this.Editor,n=e.Tools,o=e.BlockManager,r=t.type,a=t.data,s=t.settings,!(r in n.available)){i.next=15;break}i.prev=5,o.insert(r,a,s),i.next=13;break;case 9:throw i.prev=9,i.t0=i.catch(5),f.log("Block «".concat(r,"» skipped because of plugins error"),"warn",a),Error(i.t0);case 13:i.next=20;break;case 15:l={savedData:{type:r,data:a},title:r},r in n.unavailable&&(c=n.unavailable[r].toolbox,u=n.getToolSettings(r).toolbox,l.title=c.title||u.title||l.title),o.insert(n.stubTool,l,s).stretched=!0,f.log("Tool «".concat(r,"» is not found. Check 'tools' property at your initial Editor.js config."),"warn");case 20:case"end":return i.stop()}}),null,this,[[5,9]])}}]),e}(u.default);o.default=h,h.displayName="Renderer",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(50),n(51),n(2),n(3),n(4),n(5),n(6),n(7),n(14),n(365)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p){"use strict";var h=n(15),v=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=v(i),r=v(r),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=h(d),p=v(p);var g=function(t){function e(){var t;return(0,a.default)(this,e),(t=(0,l.default)(this,(0,c.default)(e).apply(this,arguments))).configCache={},t.inlineToolsConfigCache=null,t}return(0,u.default)(e,t),(0,s.default)(e,[{key:"sanitizeBlocks",value:function(t){var e=this;return t.map((function(t){var n=e.composeToolConfig(t.tool);return d.isEmpty(n)?t:(t.data=e.deepSanitize(t.data,n),t)}))}},{key:"deepSanitize",value:function(t,e){return Array.isArray(t)?this.cleanArray(t,e):"object"===(0,r.default)(t)?this.cleanObject(t,e):"string"==typeof t?this.cleanOneItem(t,e):t}},{key:"clean",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={tags:e},o=this.createHTMLJanitorInstance(n);return o.clean(t)}},{key:"composeToolConfig",value:function(t){if(this.configCache[t])return this.configCache[t];var e=this.Editor.Tools.INTERNAL_SETTINGS.SANITIZE_CONFIG,n=this.Editor.Tools.available[t],o=this.getInlineToolsConfig(t);if(!n.sanitize||n[e]&&d.isEmpty(n[e]))return o;var i=n.sanitize,a={};for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];"object"===(0,r.default)(l)?a[s]=Object.assign({},o,l):a[s]=l}return this.configCache[t]=a,a}},{key:"getInlineToolsConfig",value:function(t){var e=this.Editor.Tools,n=e.getToolSettings(t).inlineToolbar||[],o={};return"boolean"==typeof n&&n?o=this.getAllInlineToolsConfig():n.map((function(t){o=Object.assign(o,e.inline[t][e.INTERNAL_SETTINGS.SANITIZE_CONFIG])})),o.br=!0,o.wbr=!0,o}},{key:"getAllInlineToolsConfig",value:function(){var t=this.Editor.Tools;if(this.inlineToolsConfigCache)return this.inlineToolsConfigCache;var e={};return Object.entries(t.inline).forEach((function(n){var o=(0,i.default)(n,2),r=(o[0],o[1]);Object.assign(e,r[t.INTERNAL_SETTINGS.SANITIZE_CONFIG])})),this.inlineToolsConfigCache=e,this.inlineToolsConfigCache}},{key:"cleanArray",value:function(t,e){var n=this;return t.map((function(t){return n.deepSanitize(t,e)}))}},{key:"cleanObject",value:function(t,e){var n={};for(var o in t)if(t.hasOwnProperty(o)){var i=t[o],r=this.isRule(e[o])?e[o]:e;n[o]=this.deepSanitize(i,r)}return n}},{key:"cleanOneItem",value:function(t,e){return"object"===(0,r.default)(e)?this.clean(t,e):!1===e?this.clean(t,{}):t}},{key:"isRule",value:function(t){return"object"===(0,r.default)(t)||"boolean"==typeof t||"function"==typeof t}},{key:"createHTMLJanitorInstance",value:function(t){return t?new p.default(t):null}}]),e}(f.default);o.default=g,g.displayName="Sanitizer",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(26),n(2),n(3),n(4),n(5),n(6),n(7),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f){"use strict";var d=n(15),p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=p(i),r=p(r),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=d(f);var h=function(t){function e(){return(0,r.default)(this,e),(0,s.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,c.default)(e,t),(0,a.default)(e,[{key:"save",value:function(){var t,e,n,o,r,a,s,l,c=this;return i.default.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=this.Editor,e=t.BlockManager,n=t.Sanitizer,o=t.ModificationsObserver,r=e.blocks,a=[],o.disable(),r.forEach((function(t){a.push(c.getSavedData(t))})),u.next=6,i.default.awrap(Promise.all(a));case 6:return s=u.sent,u.next=9,i.default.awrap(n.sanitizeBlocks(s));case 9:return l=u.sent,o.enable(),u.abrupt("return",this.makeOutput(l));case 12:case"end":return u.stop()}}),null,this)}},{key:"getSavedData",value:function(t){var e,n;return i.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i.default.awrap(t.save());case 2:if(e=o.sent,o.t0=e,!o.t0){o.next=8;break}return o.next=7,i.default.awrap(t.validate(e.data));case 7:o.t0=o.sent;case 8:return n=o.t0,o.abrupt("return",Object.assign(Object.assign({},e),{isValid:n}));case 10:case"end":return o.stop()}}))}},{key:"makeOutput",value:function(t){var e=this,n=0,o=[];return f.log("[Editor.js saving]:","groupCollapsed"),t.forEach((function(t){var i=t.tool,r=t.data,a=t.time,s=t.isValid;if(n+=a,f.log("".concat(i.charAt(0).toUpperCase()+i.slice(1)),"group"),!s)return f.log("Block «".concat(i,"» skipped because saved data is invalid")),void f.log(void 0,"groupEnd");f.log(r),f.log(void 0,"groupEnd"),i!==e.Editor.Tools.stubTool?o.push({type:i,data:r}):o.push(r)})),f.log("Total","log",n),f.log(void 0,"groupEnd"),{time:+new Date,blocks:o,version:"2.17.0"}}}]),e}(u.default);o.default=h,h.displayName="Saver",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(366),n(7)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u){"use strict";var f=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=f(i),r=f(r),a=f(a),s=f(s),l=f(l),c=f(c);var d=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).registeredShortcuts=[],t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"add",value:function(t){var e=new c.default({name:t.name,on:document,callback:t.handler});this.registeredShortcuts.push(e)}},{key:"remove",value:function(t){var e=this.registeredShortcuts.findIndex((function(e){return e.name===t}));this.registeredShortcuts[e].remove(),this.registeredShortcuts.splice(e,1)}}]),e}((u=f(u)).default);o.default=d,d.displayName="Shortcuts",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(58),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d){"use strict";var p=n(15),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=h(i),r=h(r),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f),d=p(d);var v=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).nodes={wrapper:null,toolSettings:null,defaultSettings:null},t.buttons=[],t.flipper=null,t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"make",value:function(){this.nodes.wrapper=u.default.make("div",this.CSS.wrapper),this.nodes.toolSettings=u.default.make("div",this.CSS.toolSettings),this.nodes.defaultSettings=u.default.make("div",this.CSS.defaultSettings),u.default.append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings]),this.enableFlipper()}},{key:"open",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperOpened),this.Editor.BlockManager.currentBlock.selected=!0,this.addToolSettings(),this.addDefaultSettings(),this.Editor.Events.emit(this.events.opened),this.flipper.activate(this.blockTunesButtons)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.Editor.Events.emit(this.events.closed),this.buttons=[],this.flipper.deactivate()}},{key:"addToolSettings",value:function(){"function"==typeof this.Editor.BlockManager.currentBlock.tool.renderSettings&&u.default.append(this.nodes.toolSettings,this.Editor.BlockManager.currentBlock.tool.renderSettings())}},{key:"addDefaultSettings",value:function(){u.default.append(this.nodes.defaultSettings,this.Editor.BlockManager.currentBlock.renderTunes())}},{key:"enableFlipper",value:function(){var t=this;this.flipper=new f.default({focusedItemClass:this.CSS.focusedButton,activateCallback:function(){d.delay((function(){t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)}),10)()}})}},{key:"events",get:function(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}},{key:"CSS",get:function(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button",focusedButton:"ce-settings__button--focused",focusedButtonAnimated:"ce-settings__button--focused-animated"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened)}},{key:"blockTunesButtons",get:function(){var t=this;if(0!==this.buttons.length)return this.buttons;var e=this.nodes.toolSettings.querySelectorAll(".".concat(this.Editor.StylesAPI.classes.settingsButton)),n=this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));return e.forEach((function(e){t.buttons.push(e)})),n.forEach((function(e){t.buttons.push(e)})),this.buttons}}]),e}(c.default);o.default=v,v.displayName="BlockSettings",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(50),n(26),n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(14),n(58)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p,h){"use strict";var v=n(15),g=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=g(i),r=g(r),a=g(a),s=g(s),l=g(l),c=g(c),u=g(u),f=g(f),d=g(d),p=v(p),h=g(h);var y=function(t){function e(){var t;return(0,a.default)(this,e),(t=(0,l.default)(this,(0,c.default)(e).apply(this,arguments))).nodes={wrapper:null,tools:null},t.opened=!1,t.tools={},t.flipper=null,t.togglingCallback=null,t}return(0,u.default)(e,t),(0,s.default)(e,[{key:"make",value:function(){this.nodes.wrapper=d.default.make("div",e.CSS.conversionToolbarWrapper),this.nodes.tools=d.default.make("div",e.CSS.conversionToolbarTools);var t=d.default.make("div",e.CSS.conversionToolbarLabel,{textContent:"Convert to"});return this.addTools(),this.enableFlipper(),d.default.append(this.nodes.wrapper,t),d.default.append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper}},{key:"toggle",value:function(t){this.opened?this.close():this.open(),"function"==typeof t&&(this.togglingCallback=t)}},{key:"open",value:function(){var t=this;this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add(e.CSS.conversionToolbarShowed),setTimeout((function(){t.flipper.activate(Object.values(t.tools).filter((function(t){return!t.classList.contains(e.CSS.conversionToolHidden)}))),t.flipper.focusFirst(),"function"==typeof t.togglingCallback&&t.togglingCallback(!0)}),50)}},{key:"close",value:function(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove(e.CSS.conversionToolbarShowed),"function"==typeof this.togglingCallback&&this.togglingCallback(!1)}},{key:"hasTools",value:function(){var t=Object.keys(this.tools);return!(1===t.length&&t.shift()===this.config.initialBlock)}},{key:"replaceWithBlock",value:function(t){var e,n,o,i,a,s,l,c,u,f,d,h=this;return r.default.async((function(v){for(;;)switch(v.prev=v.next){case 0:return e=this.Editor.BlockManager.currentBlock.class,n=this.Editor.BlockManager.currentBlock.name,v.next=4,r.default.awrap(this.Editor.BlockManager.currentBlock.save());case 4:if(o=v.sent,i=this.Editor.Tools.INTERNAL_SETTINGS,a=o.data,n===t&&(t=this.config.initialBlock),s=this.Editor.Tools.toolsClasses[t],l="","function"!=typeof(c=e[i.CONVERSION_CONFIG].export)){v.next=15;break}l=c(a),v.next=21;break;case 15:if("string"!=typeof c){v.next=19;break}l=a[c],v.next=21;break;case 19:return p.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),v.abrupt("return");case 21:if(u=this.Editor.Sanitizer.clean(l,s.sanitize),f={},"function"!=typeof(d=s[i.CONVERSION_CONFIG].import)){v.next=28;break}f=d(u),v.next=34;break;case 28:if("string"!=typeof d){v.next=32;break}f[d]=u,v.next=34;break;case 32:return p.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),v.abrupt("return");case 34:this.Editor.BlockManager.replace(t,f),this.Editor.BlockSelection.clearSelection(),this.close(),this.Editor.InlineToolbar.close(),p.delay((function(){h.Editor.Caret.setToBlock(h.Editor.BlockManager.currentBlock)}),10)();case 39:case"end":return v.stop()}}),null,this)}},{key:"addTools",value:function(){var t=this.Editor.Tools.blockTools;for(var e in t)if(t.hasOwnProperty(e)){var n=this.Editor.Tools.INTERNAL_SETTINGS,o=t[e],i=o[n.TOOLBOX],r=o[n.CONVERSION_CONFIG];!p.isEmpty(i)&&i.icon&&r&&r.import&&this.addTool(e,i.icon,i.title)}}},{key:"addTool",value:function(t,n,o){var i=this,a=d.default.make("div",[e.CSS.conversionTool]),s=d.default.make("div",[e.CSS.conversionToolIcon]);a.dataset.tool=t,s.innerHTML=n,d.default.append(a,s),d.default.append(a,d.default.text(o||p.capitalize(t))),d.default.append(this.nodes.tools,a),this.tools[t]=a,this.Editor.Listeners.on(a,"click",(function(){return r.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.default.awrap(i.replaceWithBlock(t));case 2:case"end":return e.stop()}}))}))}},{key:"filterTools",value:function(){var t=this.Editor.BlockManager.currentBlock;Object.entries(this.tools).forEach((function(n){var o=(0,i.default)(n,2),r=o[0],a=o[1];a.hidden=!1,a.classList.toggle(e.CSS.conversionToolHidden,r===t.name)}))}},{key:"enableFlipper",value:function(){this.flipper=new h.default({focusedItemClass:e.CSS.conversionToolFocused})}}],[{key:"CSS",get:function(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"}}}]),e}(f.default);o.default=y,y.displayName="ConversionToolbar",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(50),n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(28),n(14),n(58)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p,h){"use strict";var v=n(15),g=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=g(i),r=g(r),a=g(a),s=g(s),l=g(l),c=g(c),u=g(u),f=g(f),d=g(d),p=v(p),h=g(h);var y=function(t){function e(){var t;return(0,r.default)(this,e),(t=(0,s.default)(this,(0,l.default)(e).apply(this,arguments))).CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inlineToolButtonLast:"ce-inline-tool--last",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content"},t.opened=!1,t.nodes={wrapper:null,buttons:null,conversionToggler:null,conversionTogglerContent:null,actions:null},t.toolbarVerticalMargin=5,t.buttonsList=null,t.width=0,t.flipper=null,t}return(0,c.default)(e,t),(0,a.default)(e,[{key:"make",value:function(){var t=this;this.nodes.wrapper=f.default.make("div",this.CSS.inlineToolbar),this.nodes.buttons=f.default.make("div",this.CSS.buttonsWrapper),this.nodes.actions=f.default.make("div",this.CSS.actionsWrapper),this.Editor.Listeners.on(this.nodes.wrapper,"mousedown",(function(e){e.target.closest(".".concat(t.CSS.actionsWrapper))||e.preventDefault()})),f.default.append(this.nodes.wrapper,[this.nodes.buttons,this.nodes.actions]),f.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),this.addTools(),this.prepareConversionToolbar(),this.recalculateWidth(),this.enableFlipper()}},{key:"tryToShow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.allowedToShow()?(this.move(),this.open(),this.Editor.Toolbar.close(),this.checkToolsState()):t&&this.close()}},{key:"move",value:function(){var t=d.default.rect,e=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),n={x:t.x-e.left,y:t.y+t.height-e.top+this.toolbarVerticalMargin};t.width&&(n.x+=Math.floor(t.width/2));var o=n.x-this.width/2,i=n.x+this.width/2;this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented,o<this.Editor.UI.contentRect.left),this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented,i>this.Editor.UI.contentRect.right),this.nodes.wrapper.style.left=Math.floor(n.x)+"px",this.nodes.wrapper.style.top=Math.floor(n.y)+"px"}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),this.tools.forEach((function(t){"function"==typeof t.clear&&t.clear()})),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()}},{key:"open",value:function(){this.filterTools(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.tools.forEach((function(t){"function"==typeof t.clear&&t.clear()})),this.buttonsList=this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)),this.opened=!0,this.Editor.ConversionToolbar.hasTools()?this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0;var t=Array.from(this.buttonsList);t.unshift(this.nodes.conversionToggler),t=t.filter((function(t){return!t.hidden})),this.flipper.activate(t)}},{key:"containsNode",value:function(t){return this.nodes.wrapper.contains(t)}},{key:"allowedToShow",value:function(){var t=d.default.get(),e=d.default.text;if(!t||!t.anchorNode)return!1;if(t.isCollapsed||e.length<1)return!1;var n=f.default.isElement(t.anchorNode)?t.anchorNode:t.anchorNode.parentElement;if(t&&["IMG","INPUT"].includes(n.tagName))return!1;if(null===n.closest('[contenteditable="true"]'))return!1;var o=this.Editor.BlockManager.getBlock(t.anchorNode);if(!o)return!1;var i=this.Editor.Tools.getToolSettings(o.name);return i&&i[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS]}},{key:"filterTools",value:function(){var t=this,e=d.default.get(),n=this.Editor.BlockManager.getBlock(e.anchorNode),o=this.Editor.Tools.getToolSettings(n.name),i=o&&o[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS],r=Array.from(this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)));r.forEach((function(e){e.hidden=!1,e.classList.remove(t.CSS.inlineToolButtonLast)})),Array.isArray(i)&&r.forEach((function(t){t.hidden=!i.includes(t.dataset.tool)}));var a=r.filter((function(t){return!t.hidden})).pop();a&&a.classList.add(this.CSS.inlineToolButtonLast),this.recalculateWidth()}},{key:"recalculateWidth",value:function(){this.width=this.nodes.wrapper.offsetWidth}},{key:"addConversionToggler",value:function(){var t=this;this.nodes.conversionToggler=f.default.make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=f.default.make("div",this.CSS.conversionTogglerContent);var e=f.default.svg("toggler-down",13,13);this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(e),this.nodes.buttons.appendChild(this.nodes.conversionToggler),this.Editor.Listeners.on(this.nodes.conversionToggler,"click",(function(){t.Editor.ConversionToolbar.toggle((function(e){!e&&t.opened?t.flipper.activate():t.opened&&t.flipper.deactivate()}))})),this.Editor.Tooltip.onHover(this.nodes.conversionToggler,"Convert to",{placement:"top",hidingDelay:100})}},{key:"setConversionTogglerContent",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Tools,o=e.currentBlock.name,i=n.available[o][n.INTERNAL_SETTINGS.CONVERSION_CONFIG]||{},r=i&&i.export;this.nodes.conversionToggler.hidden=!r,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!r);var a=n.getToolSettings(o),s=n.available[o][n.INTERNAL_SETTINGS.TOOLBOX]||{},l=a.toolbox||{};this.nodes.conversionTogglerContent.innerHTML=l.icon||s.icon||l.title||s.title||p.capitalize(o)}},{key:"prepareConversionToolbar",value:function(){var t=this.Editor.ConversionToolbar.make();f.default.append(this.nodes.wrapper,t)}},{key:"addTools",value:function(){var t=this;this.tools.forEach((function(e,n){t.addTool(n,e)}))}},{key:"addTool",value:function(t,e){var n=this,o=this.Editor,r=o.Listeners,a=o.Tools,s=o.Tooltip,l=e.render();if(l){if(l.dataset.tool=t,this.nodes.buttons.appendChild(l),"function"==typeof e.renderActions){var c=e.renderActions();this.nodes.actions.appendChild(c)}r.on(l,"click",(function(t){n.toolClicked(e),t.preventDefault()}));var u=a.getToolSettings(t),d=null;Object.entries(a.internalTools).filter((function(t){var e=(0,i.default)(t,2),n=(e[0],e[1]);return p.isFunction(n)?n[a.INTERNAL_SETTINGS.IS_INLINE]:n.class[a.INTERNAL_SETTINGS.IS_INLINE]})).map((function(t){return(0,i.default)(t,1)[0]})).includes(t)?d=this.inlineTools[t][a.INTERNAL_SETTINGS.SHORTCUT]:u&&u[a.USER_SETTINGS.SHORTCUT]&&(d=u[a.USER_SETTINGS.SHORTCUT]),d&&this.enableShortcuts(e,d);var h=f.default.make("div"),v=a.toolsClasses[t][a.INTERNAL_SETTINGS.TITLE]||p.capitalize(t);h.appendChild(f.default.text(v)),d&&h.appendChild(f.default.make("div",this.CSS.inlineToolbarShortcut,{textContent:p.beautifyShortcut(d)})),s.onHover(l,h,{placement:"top",hidingDelay:100})}else p.log("Render method must return an instance of Node","warn",t)}},{key:"enableShortcuts",value:function(t,e){var n=this;this.Editor.Shortcuts.add({name:e,handler:function(e){var o=n.Editor.BlockManager.currentBlock;if(o){var i=n.Editor.Tools.getToolSettings(o.name);i&&i[n.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS]&&(e.preventDefault(),n.toolClicked(t))}}})}},{key:"toolClicked",value:function(t){var e=d.default.range;t.surround(e),this.checkToolsState()}},{key:"checkToolsState",value:function(){this.tools.forEach((function(t){t.checkState(d.default.get())}))}},{key:"enableFlipper",value:function(){this.flipper=new h.default({focusedItemClass:this.CSS.focusedButton,allowArrows:!1})}},{key:"tools",get:function(){if(!this.toolsInstances||0===this.toolsInstances.size){var t=this.inlineTools;for(var e in this.toolsInstances=new Map,t)t.hasOwnProperty(e)&&this.toolsInstances.set(e,t[e])}return this.toolsInstances}},{key:"inlineTools",get:function(){var t={};for(var e in this.Editor.Tools.inline)if(this.Editor.Tools.inline.hasOwnProperty(e)){var n=this.Editor.Tools.getToolSettings(e);t[e]=this.Editor.Tools.constructInline(this.Editor.Tools.inline[e],n)}return t}}]),e}(u.default);o.default=y,y.displayName="InlineToolbar",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(13),n(14),n(58),n(59)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p){"use strict";var h=n(15),v=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=v(i),r=v(r),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=h(f),d=v(d);var g=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,s.default)(e).apply(this,arguments))).opened=!1,t.nodes={toolbox:null,buttons:[]},t.displayedToolsCount=0,t.flipper=null,t}return(0,l.default)(e,t),(0,r.default)(e,[{key:"make",value:function(){this.nodes.toolbox=u.default.make("div",this.CSS.toolbox),u.default.append(this.Editor.Toolbar.nodes.content,this.nodes.toolbox),this.addTools(),this.enableFlipper()}},{key:"toolButtonActivate",value:function(t,e){var n=this.Editor.Tools.toolsClasses[e];this.insertNewBlock(n,e)}},{key:"open",value:function(){this.isEmpty||(this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier),this.nodes.toolbox.classList.add(this.CSS.toolboxOpened),this.opened=!0,this.flipper.activate())}},{key:"close",value:function(){this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened),this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier),this.opened=!1,this.flipper.deactivate()}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"addTools",value:function(){var t=this.Editor.Tools.available;for(var e in t)t.hasOwnProperty(e)&&this.addTool(e,t[e])}},{key:"addTool",value:function(t,e){var n=this,o=this.Editor.Tools.INTERNAL_SETTINGS,i=this.Editor.Tools.USER_SETTINGS,r=e[o.TOOLBOX];if(!f.isEmpty(r))if(!r||r.icon){var a=this.Editor.Tools.getToolSettings(t)[i.TOOLBOX]||{},s=u.default.make("li",[this.CSS.toolboxButton]);s.dataset.tool=t,s.innerHTML=a.icon||r.icon,u.default.append(this.nodes.toolbox,s),this.nodes.toolbox.appendChild(s),this.nodes.buttons.push(s),this.Editor.Listeners.on(s,"click",(function(e){n.toolButtonActivate(e,t)}));var l=this.drawTooltip(t);this.Editor.Tooltip.onHover(s,l,{placement:"bottom",hidingDelay:200});var c=this.Editor.Tools.getToolSettings(t);c&&c[this.Editor.Tools.USER_SETTINGS.SHORTCUT]&&this.enableShortcut(e,t,c[this.Editor.Tools.USER_SETTINGS.SHORTCUT]),this.displayedToolsCount++}else f.log("Toolbar icon is missed. Tool %o skipped","warn",t)}},{key:"drawTooltip",value:function(t){var e=this.Editor.Tools.getToolSettings(t),n=this.Editor.Tools.available[t][this.Editor.Tools.INTERNAL_SETTINGS.TOOLBOX]||{},o=(e.toolbox||{}).title||n.title||t,i=e[this.Editor.Tools.USER_SETTINGS.SHORTCUT],r=u.default.make("div",this.CSS.buttonTooltip),a=document.createTextNode(f.capitalize(o));return r.appendChild(a),i&&(i=f.beautifyShortcut(i),r.appendChild(u.default.make("div",this.CSS.buttonShortcut,{textContent:i}))),r}},{key:"enableShortcut",value:function(t,e,n){var o=this;this.Editor.Shortcuts.add({name:n,handler:function(n){n.preventDefault(),o.insertNewBlock(t,e)}})}},{key:"enableFlipper",value:function(){var t=Array.from(this.nodes.toolbox.childNodes);this.flipper=new d.default({items:t,focusedItemClass:this.CSS.toolboxButtonActive})}},{key:"insertNewBlock",value:function(t,e){var n,o=this.Editor,i=o.BlockManager,r=o.Caret;(n=i.currentBlock.isEmpty?i.replace(e):i.insert(e)).call(p.BlockToolAPI.APPEND_CALLBACK),this.Editor.Caret.setToBlock(n),0===n.inputs.length&&(n===i.lastBlock?(i.insertAtEnd(),r.setToBlock(i.lastBlock)):r.setToBlock(i.nextBlock)),this.Editor.Toolbar.close()}},{key:"CSS",get:function(){return{toolbox:"ce-toolbox",toolboxButton:"ce-toolbox__button",toolboxButtonActive:"ce-toolbox__button--active",toolboxOpened:"ce-toolbox--opened",openedToolbarHolderModifier:"codex-editor--toolbox-opened",buttonTooltip:"ce-toolbox-button-tooltip",buttonShortcut:"ce-toolbox-button-tooltip__shortcut"}}},{key:"isEmpty",get:function(){return 0===this.displayedToolsCount}}]),e}(c.default);o.default=g,g.displayName="Toolbox",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(50),n(51),n(2),n(3),n(4),n(5),n(6),n(367),n(7),n(14),n(368),n(369),n(370),n(371)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p,h,v,g,y){"use strict";var b=n(15),m=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=m(i),r=m(r),a=m(a),s=m(s),l=m(l),c=m(c),u=m(u),f=m(f),d=m(d),p=b(p),h=m(h),v=m(v),g=m(g),y=m(y);var k=function(t){function e(t){var n,o=t.config;return(0,a.default)(this,e),(n=(0,l.default)(this,(0,c.default)(e).call(this,{config:o}))).stubTool="stub",n.toolsClasses={},n.toolsAvailable={},n.toolsUnavailable={},n.toolsSettings={},n._inlineTools={},n.toolsClasses={},n.toolsSettings={},n.toolsAvailable={},n.toolsUnavailable={},n._inlineTools=null,n}return(0,u.default)(e,t),(0,s.default)(e,[{key:"prepare",value:function(){var t=this;if(this.validateTools(),this.config.tools=p.deepMerge({},this.internalTools,this.config.tools),!this.config.hasOwnProperty("tools")||0===Object.keys(this.config.tools).length)throw Error("Can't start without tools");for(var e in this.config.tools)"object"===(0,r.default)(this.config.tools[e])?(this.toolsClasses[e]=this.config.tools[e].class,this.toolsSettings[e]=this.config.tools[e],delete this.toolsSettings[e].class):(this.toolsClasses[e]=this.config.tools[e],this.toolsSettings[e]={class:this.config.tools[e]});var n=this.getListOfPrepareFunctions();return 0===n.length?Promise.resolve():p.sequence(n,(function(e){t.success(e)}),(function(e){t.fallback(e)}))}},{key:"success",value:function(t){this.toolsAvailable[t.toolName]=this.toolsClasses[t.toolName]}},{key:"fallback",value:function(t){this.toolsUnavailable[t.toolName]=this.toolsClasses[t.toolName]}},{key:"construct",value:function(t,e){var n=this.toolsClasses[t],o=this.toolsSettings[t][this.USER_SETTINGS.CONFIG]||{};return t!==this.config.initialBlock||o.placeholder||(o.placeholder=this.config.placeholder),new n({api:this.Editor.API.methods,config:o,data:e})}},{key:"constructInline",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={api:this.Editor.API.methods,config:e[this.USER_SETTINGS.CONFIG]||{}};return new t(n)}},{key:"isInitial",value:function(t){return t instanceof this.available[this.config.initialBlock]}},{key:"getToolSettings",value:function(t){return this.toolsSettings[t]}},{key:"getListOfPrepareFunctions",value:function(){var t=[];for(var e in this.toolsClasses)if(this.toolsClasses.hasOwnProperty(e)){var n=this.toolsClasses[e];"function"==typeof n.prepare?t.push({function:n.prepare,data:{toolName:e,config:this.toolsSettings[e][this.USER_SETTINGS.CONFIG]}}):this.toolsAvailable[e]=n}return t}},{key:"validateTools",value:function(){for(var t in this.config.tools)if(this.config.tools.hasOwnProperty(t)){if(t in this.internalTools)return;var e=this.config.tools[t];if(!p.isFunction(e)&&!p.isFunction(e.class))throw Error("Tool «".concat(t,"» must be a constructor function or an object with function in the «class» property"))}}},{key:"available",get:function(){return this.toolsAvailable}},{key:"unavailable",get:function(){return this.toolsUnavailable}},{key:"inline",get:function(){var t=this;if(this._inlineTools)return this._inlineTools;var e=Object.entries(this.available).filter((function(e){var n=(0,i.default)(e,2),o=(n[0],n[1]);if(!o[t.INTERNAL_SETTINGS.IS_INLINE])return!1;var r=["render","surround","checkState"].filter((function(e){return!t.constructInline(o)[e]}));return!r.length||(p.log("Incorrect Inline Tool: ".concat(o.name,". Some of required methods is not implemented %o"),"warn",r),!1)})),n={};return e.forEach((function(t){var e=(0,i.default)(t,2),o=e[0],r=e[1];return n[o]=r})),this._inlineTools=n,this._inlineTools}},{key:"blockTools",get:function(){var t=this,e=Object.entries(this.available).filter((function(e){var n=(0,i.default)(e,2);return n[0],!n[1][t.INTERNAL_SETTINGS.IS_INLINE]})),n={};return e.forEach((function(t){var e=(0,i.default)(t,2),o=e[0],r=e[1];return n[o]=r})),n}},{key:"INTERNAL_SETTINGS",get:function(){return{IS_ENABLED_LINE_BREAKS:"enableLineBreaks",IS_INLINE:"isInline",TITLE:"title",SHORTCUT:"shortcut",TOOLBOX:"toolbox",SANITIZE_CONFIG:"sanitize",CONVERSION_CONFIG:"conversionConfig"}}},{key:"USER_SETTINGS",get:function(){return{SHORTCUT:"shortcut",TOOLBOX:"toolbox",ENABLED_INLINE_TOOLS:"inlineToolbar",CONFIG:"config"}}},{key:"internalTools",get:function(){return{bold:{class:h.default},italic:{class:v.default},link:{class:g.default},paragraph:{class:f.default,inlineToolbar:!0},stub:{class:y.default}}}}]),e}(d.default);o.default=k,k.displayName="Tools",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(4),n(5),n(6),n(7),n(372)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u){"use strict";var f=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=f(i),r=f(r),a=f(a),s=f(s),l=f(l),c=f(c),u=f(u);var d=function(t){function e(t){var n,o=t.config;return(0,i.default)(this,e),(n=(0,a.default)(this,(0,s.default)(e).call(this,{config:o}))).lib=new u.default,n}return(0,l.default)(e,t),(0,r.default)(e,[{key:"show",value:function(t,e,n){this.lib.show(t,e,n)}},{key:"hide",value:function(){this.lib.hide()}},{key:"onHover",value:function(t,e,n){this.lib.onHover(t,e,n)}}]),e}(c.default);o.default=d,d.displayName="Tooltip",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(50),n(26),n(2),n(3),n(4),n(5),n(6),n(373),n(7),n(13),n(14),n(28),n(59),n(58)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u,f,d,p,h,v,g,y){"use strict";var b=n(15),m=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=m(i),r=m(r),a=m(a),s=m(s),l=m(l),c=m(c),u=m(u),f=m(f),d=m(d),p=m(p),h=b(h),v=m(v),g=m(g),y=m(y);var k=function(t){function e(){var t;return(0,a.default)(this,e),(t=(0,l.default)(this,(0,c.default)(e).apply(this,arguments))).isMobile=!1,t.nodes={holder:null,wrapper:null,redactor:null},t.contentRectCache=void 0,t.resizeDebouncer=h.debounce((function(){t.windowResize()}),200),t}return(0,u.default)(e,t),(0,s.default)(e,[{key:"addLoader",value:function(){this.nodes.loader=p.default.make("div",this.CSS.editorLoader),this.nodes.wrapper.prepend(this.nodes.loader),this.nodes.redactor.classList.add(this.CSS.editorZoneHidden)}},{key:"removeLoader",value:function(){this.nodes.loader.remove(),this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden)}},{key:"prepare",value:function(){return r.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.checkIsMobile(),t.next=3,r.default.awrap(this.make());case 3:return this.addLoader(),t.next=6,r.default.awrap(this.appendSVGSprite());case 6:return t.next=8,r.default.awrap(this.Editor.Toolbar.make());case 8:return t.next=10,r.default.awrap(this.Editor.InlineToolbar.make());case 10:return t.next=12,r.default.awrap(this.loadStyles());case 12:return t.next=14,r.default.awrap(this.bindEvents());case 14:case"end":return t.stop()}}),null,this)}},{key:"checkEmptiness",value:function(){var t=this.Editor.BlockManager;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,t.isEditorEmpty)}},{key:"destroy",value:function(){this.nodes.holder.innerHTML=""}},{key:"closeAllToolbars",value:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,i=t.ConversionToolbar;n.close(),o.close(),i.close(),e.close()}},{key:"checkIsMobile",value:function(){this.isMobile=window.innerWidth<650}},{key:"make",value:function(){return r.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.nodes.holder=p.default.getHolder(this.config.holder),this.nodes.wrapper=p.default.make("div",this.CSS.editorWrapper),this.nodes.redactor=p.default.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper);case 7:case"end":return t.stop()}}),null,this)}},{key:"loadStyles",value:function(){var t=n(374),e=p.default.make("style",null,{textContent:t.toString()});p.default.prepend(document.head,e)}},{key:"bindEvents",value:function(){var t=this;this.Editor.Listeners.on(this.nodes.redactor,"click",(function(e){return t.redactorClicked(e)}),!1),this.Editor.Listeners.on(this.nodes.redactor,"mousedown",(function(e){return t.documentTouched(e)}),!0),this.Editor.Listeners.on(this.nodes.redactor,"touchstart",(function(e){return t.documentTouched(e)}),!0),this.Editor.Listeners.on(document,"keydown",(function(e){return t.documentKeydown(e)}),!0),this.Editor.Listeners.on(document,"click",(function(e){return t.documentClicked(e)}),!0),this.Editor.Listeners.on(document,"selectionchange",(function(e){t.selectionChanged(e)}),!0),this.Editor.Listeners.on(window,"resize",(function(){t.resizeDebouncer()}),{passive:!0})}},{key:"windowResize",value:function(){this.contentRectCache=null,this.checkIsMobile()}},{key:"documentKeydown",value:function(t){switch(t.keyCode){case h.keyCodes.ENTER:this.enterPressed(t);break;case h.keyCodes.BACKSPACE:this.backspacePressed(t);break;default:this.defaultBehaviour(t)}}},{key:"defaultBehaviour",value:function(t){var e=t.target.closest(".".concat(this.CSS.editorWrapper)),n=this.Editor.BlockManager.currentBlock,o=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;e||n&&o||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close())}},{key:"backspacePressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,i=e.Caret;if(o.anyBlockSelected){var r=n.removeSelectedBlocks();i.setToBlock(n.insertInitialBlockAtIndex(r,!0),i.positions.START),o.clearSelection(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()}}},{key:"enterPressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,i=e.Caret,r=n.currentBlockIndex>=0;if(o.anyBlockSelected){var a=n.removeSelectedBlocks();return i.setToBlock(n.insertInitialBlockAtIndex(a,!0),i.positions.START),o.clearSelection(t),t.preventDefault(),t.stopImmediatePropagation(),void t.stopPropagation()}if(!this.someToolbarOpened&&r&&"BODY"===t.target.tagName){var s=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(s),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.move(),this.Editor.Toolbar.plusButton.show()}this.Editor.BlockSelection.clearSelection(t)}},{key:"documentClicked",value:function(t){if(t.isTrusted){var e=t.target;this.nodes.holder.contains(e)||v.default.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.InlineToolbar.close(),this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close()),this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted||this.Editor.BlockSelection.clearSelection(t),this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted||this.Editor.BlockSelection.clearSelection(t)}}},{key:"documentTouched",value:function(t){var e=t.target;if(e===this.nodes.redactor){var n=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,o=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;e=document.elementFromPoint(n,o)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(e),this.Editor.BlockManager.highlightCurrentNode()}catch(t){this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.hide()}},{key:"redactorClicked",value:function(t){if(v.default.isCollapsed){t.stopImmediatePropagation(),t.stopPropagation();var e=t.target,n=t.metaKey||t.ctrlKey;if(p.default.isAnchor(e)&&n){var o=e.getAttribute("href"),i=h.getValidUrl(o);h.openTab(i)}else this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.insert(),this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool)&&this.Editor.BlockManager.currentBlock.isEmpty&&this.Editor.Toolbar.plusButton.show()}}},{key:"selectionChanged",value:function(t){var e=v.default.anchorElement;e&&e.closest(".".concat(g.default.CSS.content))?this.Editor.InlineToolbar.tryToShow(!0):this.Editor.InlineToolbar.containsNode(e)||this.Editor.InlineToolbar.close()}},{key:"appendSVGSprite",value:function(){var t=p.default.make("div");t.hidden=!0,t.style.display="none",t.innerHTML=f.default,p.default.append(this.nodes.wrapper,t)}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorLoader:"codex-editor__loader",editorEmpty:"codex-editor--empty"}}},{key:"contentRect",get:function(){if(this.contentRectCache)return this.contentRectCache;var t=this.nodes.wrapper.querySelector(".".concat(g.default.CSS.content));return t?(this.contentRectCache=t.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}},{key:"someToolbarOpened",get:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,i=t.ConversionToolbar;return n.opened||o.opened||i.opened||e.opened}},{key:"someFlipperButtonFocused",get:function(){return Object.entries(this.Editor).filter((function(t){var e=(0,i.default)(t,2);return e[0],e[1].flipper instanceof y.default})).some((function(t){var e=(0,i.default)(t,2);return e[0],e[1].flipper.currentItem}))}}]),e}(d.default);o.default=k,k.displayName="UI",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){n(172),t.exports=n(344)},function(t,e,n){n(173)},function(t,e,n){"use strict";n(174),n(317),n(319),n(322),n(324),n(326),n(328),n(330),n(332),n(334),n(336),n(338),n(340),n(135)},function(t,e,n){n(175),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(256),n(257),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(98),n(280),n(124),n(281),n(125),n(282),n(283),n(284),n(285),n(126),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),t.exports=n(17)},function(t,e,n){"use strict";var o=n(8),i=n(23),r=n(18),a=n(0),s=n(21),l=n(39).KEY,c=n(9),u=n(64),f=n(52),d=n(41),p=n(12),h=n(79),v=n(105),g=n(177),y=n(67),b=n(10),m=n(11),k=n(20),x=n(25),w=n(38),S=n(40),E=n(45),T=n(108),C=n(32),B=n(66),_=n(19),I=n(43),O=C.f,N=_.f,L=T.f,M=o.Symbol,A=o.JSON,P=A&&A.stringify,R=p("_hidden"),j=p("toPrimitive"),F={}.propertyIsEnumerable,D=u("symbol-registry"),U=u("symbols"),H=u("op-symbols"),z=Object.prototype,G="function"==typeof M&&!!B.f,W=o.QObject,V=!W||!W.prototype||!W.prototype.findChild,X=r&&c((function(){return 7!=E(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=O(z,e);o&&delete z[e],N(t,e,n),o&&t!==z&&N(z,e,o)}:N,Y=function(t){var e=U[t]=E(M.prototype);return e._k=t,e},K=G&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Z=function(t,e,n){return t===z&&Z(H,e,n),b(t),e=w(e,!0),b(n),i(U,e)?(n.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),n=E(n,{enumerable:S(0,!1)})):(i(t,R)||N(t,R,S(1,{})),t[R][e]=!0),X(t,e,n)):N(t,e,n)},q=function(t,e){b(t);for(var n,o=g(e=x(e)),i=0,r=o.length;r>i;)Z(t,n=o[i++],e[n]);return t},J=function(t){var e=F.call(this,t=w(t,!0));return!(this===z&&i(U,t)&&!i(H,t))&&(!(e||!i(this,t)||!i(U,t)||i(this,R)&&this[R][t])||e)},$=function(t,e){if(t=x(t),e=w(e,!0),t!==z||!i(U,e)||i(H,e)){var n=O(t,e);return!n||!i(U,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=L(x(t)),o=[],r=0;n.length>r;)i(U,e=n[r++])||e==R||e==l||o.push(e);return o},tt=function(t){for(var e,n=t===z,o=L(n?H:x(t)),r=[],a=0;o.length>a;)!i(U,e=o[a++])||n&&!i(z,e)||r.push(U[e]);return r};G||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(H,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),X(this,t,S(1,n))};return r&&V&&X(z,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",(function(){return this._k})),C.f=$,_.f=Z,n(46).f=T.f=Q,n(61).f=J,B.f=tt,r&&!n(42)&&s(z,"propertyIsEnumerable",J,!0),h.f=function(t){return Y(p(t))}),a(a.G+a.W+a.F*!G,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var ot=I(p.store),it=0;ot.length>it;)v(ot[it++]);a(a.S+a.F*!G,"Symbol",{for:function(t){return i(D,t+="")?D[t]:D[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!G,"Object",{create:function(t,e){return void 0===e?E(t):q(E(t),e)},defineProperty:Z,defineProperties:q,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var rt=c((function(){B.f(1)}));a(a.S+a.F*rt,"Object",{getOwnPropertySymbols:function(t){return B.f(k(t))}}),A&&a(a.S+a.F*(!G||c((function(){var t=M();return"[null]"!=P([t])||"{}"!=P({a:t})||"{}"!=P(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e=o[1],(m(e)||void 0!==t)&&!K(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),o[1]=e,P.apply(A,o)}}),M.prototype[j]||n(24)(M.prototype,j,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){t.exports=n(64)("native-function-to-string",Function.toString)},function(t,e,n){var o=n(43),i=n(66),r=n(61);t.exports=function(t){var e=o(t),n=i.f;if(n)for(var a,s=n(t),l=r.f,c=0;s.length>c;)l.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var o=n(0);o(o.S,"Object",{create:n(45)})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperty:n(19).f})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperties:n(107)})},function(t,e,n){var o=n(25),i=n(32).f;n(33)("getOwnPropertyDescriptor",(function(){return function(t,e){return i(o(t),e)}}))},function(t,e,n){var o=n(20),i=n(47);n(33)("getPrototypeOf",(function(){return function(t){return i(o(t))}}))},function(t,e,n){var o=n(20),i=n(43);n(33)("keys",(function(){return function(t){return i(o(t))}}))},function(t,e,n){n(33)("getOwnPropertyNames",(function(){return n(108).f}))},function(t,e,n){var o=n(11),i=n(39).onFreeze;n(33)("freeze",(function(t){return function(e){return t&&o(e)?t(i(e)):e}}))},function(t,e,n){var o=n(11),i=n(39).onFreeze;n(33)("seal",(function(t){return function(e){return t&&o(e)?t(i(e)):e}}))},function(t,e,n){var o=n(11),i=n(39).onFreeze;n(33)("preventExtensions",(function(t){return function(e){return t&&o(e)?t(i(e)):e}}))},function(t,e,n){var o=n(11);n(33)("isFrozen",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(11);n(33)("isSealed",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(11);n(33)("isExtensible",(function(t){return function(e){return!!o(e)&&(!t||t(e))}}))},function(t,e,n){var o=n(0);o(o.S+o.F,"Object",{assign:n(109)})},function(t,e,n){var o=n(0);o(o.S,"Object",{is:n(110)})},function(t,e,n){var o=n(0);o(o.S,"Object",{setPrototypeOf:n(83).set})},function(t,e,n){"use strict";var o=n(62),i={};i[n(12)("toStringTag")]="z",i+""!="[object z]"&&n(21)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},function(t,e,n){var o=n(0);o(o.P,"Function",{bind:n(111)})},function(t,e,n){var o=n(19).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(18)&&o(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var o=n(11),i=n(47),r=n(12)("hasInstance"),a=Function.prototype;r in a||n(19).f(a,r,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var o=n(0),i=n(113);o(o.G+o.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var o=n(0),i=n(114);o(o.G+o.F*(parseFloat!=i),{parseFloat:i})},function(t,e,n){"use strict";var o=n(8),i=n(23),r=n(35),a=n(85),s=n(38),l=n(9),c=n(46).f,u=n(32).f,f=n(19).f,d=n(53).trim,p=o.Number,h=p,v=p.prototype,g="Number"==r(n(45)(v)),y="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,i,r=(e=y?e.trim():d(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var a,l=e.slice(2),c=0,u=l.length;c<u;c++)if((a=l.charCodeAt(c))<48||a>i)return NaN;return parseInt(l,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(g?l((function(){v.valueOf.call(n)})):"Number"!=r(n))?a(new h(b(e)),n,p):b(e)};for(var m,k=n(18)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)i(h,m=k[x])&&!i(p,m)&&f(p,m,u(h,m));p.prototype=v,v.constructor=p,n(21)(o,"Number",p)}},function(t,e,n){"use strict";var o=n(0),i=n(31),r=n(115),a=n(86),s=1..toFixed,l=Math.floor,c=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",f=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*c[n],c[n]=o%1e7,o=l(o/1e7)},d=function(t){for(var e=6,n=0;--e>=0;)n+=c[e],c[e]=l(n/t),n=n%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==c[t]){var n=String(c[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)};o(o.P+o.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(9)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,o,s,l=r(this,u),c=i(t),v="",g="0";if(c<0||c>20)throw RangeError(u);if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(v="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*h(2,69,1))-69)<0?l*h(2,-e,1):l/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=c;o>=7;)f(1e7,0),o-=7;for(f(h(10,o,1),0),o=e-1;o>=23;)d(1<<23),o-=23;d(1<<o),f(1,1),d(2),g=p()}else f(0,n),f(1<<-e,0),g=p()+a.call("0",c);return g=c>0?v+((s=g.length)<=c?"0."+a.call("0",c-s)+g:g.slice(0,s-c)+"."+g.slice(s-c)):v+g}})},function(t,e,n){"use strict";var o=n(0),i=n(9),r=n(115),a=1..toPrecision;o(o.P+o.F*(i((function(){return"1"!==a.call(1,void 0)}))||!i((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=r(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var o=n(0),i=n(8).isFinite;o(o.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{isInteger:n(116)})},function(t,e,n){var o=n(0);o(o.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var o=n(0),i=n(116),r=Math.abs;o(o.S,"Number",{isSafeInteger:function(t){return i(t)&&r(t)<=9007199254740991}})},function(t,e,n){var o=n(0);o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var o=n(0);o(o.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var o=n(0),i=n(114);o(o.S+o.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,e,n){var o=n(0),i=n(113);o(o.S+o.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,e,n){var o=n(0),i=n(117),r=Math.sqrt,a=Math.acosh;o(o.S+o.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+r(t-1)*r(t+1))}})},function(t,e,n){var o=n(0),i=Math.asinh;o(o.S+o.F*!(i&&1/i(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var o=n(0),i=Math.atanh;o(o.S+o.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var o=n(0),i=n(87);o(o.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var o=n(0),i=Math.exp;o(o.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,e,n){var o=n(0),i=n(88);o(o.S+o.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,e,n){var o=n(0);o(o.S,"Math",{fround:n(220)})},function(t,e,n){var o=n(87),i=Math.pow,r=i(2,-52),a=i(2,-23),s=i(2,127)*(2-a),l=i(2,-126);t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),c=o(t);return i<l?c*(i/l/a+1/r-1/r)*l*a:(n=(e=(1+a/r)*i)-(e-i))>s||n!=n?c*(1/0):c*n}},function(t,e,n){var o=n(0),i=Math.abs;o(o.S,"Math",{hypot:function(t,e){for(var n,o,r=0,a=0,s=arguments.length,l=0;a<s;)l<(n=i(arguments[a++]))?(r=r*(o=l/n)*o+1,l=n):r+=n>0?(o=n/l)*o:n;return l===1/0?1/0:l*Math.sqrt(r)}})},function(t,e,n){var o=n(0),i=Math.imul;o(o.S+o.F*n(9)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,e){var n=+t,o=+e,i=65535&n,r=65535&o;return 0|i*r+((65535&n>>>16)*r+i*(65535&o>>>16)<<16>>>0)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log1p:n(117)})},function(t,e,n){var o=n(0);o(o.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var o=n(0);o(o.S,"Math",{sign:n(87)})},function(t,e,n){var o=n(0),i=n(88),r=Math.exp;o(o.S+o.F*n(9)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(r(t-1)-r(-t-1))*(Math.E/2)}})},function(t,e,n){var o=n(0),i=n(88),r=Math.exp;o(o.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(r(t)+r(-t))}})},function(t,e,n){var o=n(0);o(o.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var o=n(0),i=n(44),r=String.fromCharCode,a=String.fromCodePoint;o(o.S+o.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],o=arguments.length,a=0;o>a;){if(e=+arguments[a++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?r(e):r(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var o=n(0),i=n(25),r=n(16);o(o.S,"String",{raw:function(t){for(var e=i(t.raw),n=r(e.length),o=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<o&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(53)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var o=n(89)(!0);n(90)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var o=n(0),i=n(89)(!1);o(o.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,e,n){"use strict";var o=n(0),i=n(16),r=n(91),a="".endsWith;o(o.P+o.F*n(93)("endsWith"),"String",{endsWith:function(t){var e=r(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=i(e.length),s=void 0===n?o:Math.min(i(n),o),l=String(t);return a?a.call(e,l,s):e.slice(s-l.length,s)===l}})},function(t,e,n){"use strict";var o=n(0),i=n(91);o(o.P+o.F*n(93)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(0);o(o.P,"String",{repeat:n(86)})},function(t,e,n){"use strict";var o=n(0),i=n(16),r=n(91),a="".startsWith;o(o.P+o.F*n(93)("startsWith"),"String",{startsWith:function(t){var e=r(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),o=String(t);return a?a.call(e,o,n):e.slice(n,n+o.length)===o}})},function(t,e,n){"use strict";n(22)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(22)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(22)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(22)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(22)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(22)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(22)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(22)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(22)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(22)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(22)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(22)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(22)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var o=n(0);o(o.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var o=n(0),i=n(20),r=n(38);o(o.P+o.F*n(9)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=r(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var o=n(0),i=n(255);o(o.P+o.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,e,n){"use strict";var o=n(9),i=Date.prototype.getTime,r=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=o((function(){return"0385-07-25T07:06:39.999Z"!=r.call(new Date(-5e13-1))}))||!o((function(){r.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),o=e<0?"-":e>9999?"+":"";return o+("00000"+Math.abs(e)).slice(o?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:r},function(t,e,n){var o=Date.prototype,i=o.toString,r=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(21)(o,"toString",(function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,e,n){var o=n(12)("toPrimitive"),i=Date.prototype;o in i||n(24)(i,o,n(258))},function(t,e,n){"use strict";var o=n(10),i=n(38);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(o(this),"number"!=t)}},function(t,e,n){var o=n(0);o(o.S,"Array",{isArray:n(67)})},function(t,e,n){"use strict";var o=n(29),i=n(0),r=n(20),a=n(119),s=n(94),l=n(16),c=n(95),u=n(96);i(i.S+i.F*!n(68)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,d=r(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=0,b=u(d);if(g&&(v=o(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=l(d.length));e>y;y++)c(n,y,g?v(d[y],y):d[y]);else for(f=b.call(d),n=new p;!(i=f.next()).done;y++)c(n,y,g?a(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){"use strict";var o=n(0),i=n(95);o(o.S+o.F*n(9)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)i(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var o=n(0),i=n(25),r=[].join;o(o.P+o.F*(n(60)!=Object||!n(27)(r)),"Array",{join:function(t){return r.call(i(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var o=n(0),i=n(82),r=n(35),a=n(44),s=n(16),l=[].slice;o(o.P+o.F*n(9)((function(){i&&l.call(i)})),"Array",{slice:function(t,e){var n=s(this.length),o=r(this);if(e=void 0===e?n:e,"Array"==o)return l.call(this,t,e);for(var i=a(t,n),c=a(e,n),u=s(c-i),f=new Array(u),d=0;d<u;d++)f[d]="String"==o?this.charAt(i+d):this[i+d];return f}})},function(t,e,n){"use strict";var o=n(0),i=n(30),r=n(20),a=n(9),s=[].sort,l=[1,2,3];o(o.P+o.F*(a((function(){l.sort(void 0)}))||!a((function(){l.sort(null)}))||!n(27)(s)),"Array",{sort:function(t){return void 0===t?s.call(r(this)):s.call(r(this),i(t))}})},function(t,e,n){"use strict";var o=n(0),i=n(34)(0),r=n(27)([].forEach,!0);o(o.P+o.F*!r,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var o=n(11),i=n(67),r=n(12)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),o(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var o=n(0),i=n(34)(1);o(o.P+o.F*!n(27)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),i=n(34)(2);o(o.P+o.F*!n(27)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),i=n(34)(3);o(o.P+o.F*!n(27)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),i=n(34)(4);o(o.P+o.F*!n(27)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),i=n(121);o(o.P+o.F*!n(27)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var o=n(0),i=n(121);o(o.P+o.F*!n(27)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var o=n(0),i=n(65)(!1),r=[].indexOf,a=!!r&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n(27)(r)),"Array",{indexOf:function(t){return a?r.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),i=n(25),r=n(31),a=n(16),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;o(o.P+o.F*(l||!n(27)(s)),"Array",{lastIndexOf:function(t){if(l)return s.apply(this,arguments)||0;var e=i(this),n=a(e.length),o=n-1;for(arguments.length>1&&(o=Math.min(o,r(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}})},function(t,e,n){var o=n(0);o(o.P,"Array",{copyWithin:n(122)}),n(48)("copyWithin")},function(t,e,n){var o=n(0);o(o.P,"Array",{fill:n(97)}),n(48)("fill")},function(t,e,n){"use strict";var o=n(0),i=n(34)(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),o(o.P+o.F*r,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(48)("find")},function(t,e,n){"use strict";var o=n(0),i=n(34)(6),r="findIndex",a=!0;r in[]&&Array(1)[r]((function(){a=!1})),o(o.P+o.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(48)(r)},function(t,e,n){n(55)("Array")},function(t,e,n){var o=n(8),i=n(85),r=n(19).f,a=n(46).f,s=n(92),l=n(69),c=o.RegExp,u=c,f=c.prototype,d=/a/g,p=/a/g,h=new c(d)!==d;if(n(18)&&(!h||n(9)((function(){return p[n(12)("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")})))){c=function(t,e){var n=this instanceof c,o=s(t),r=void 0===e;return!n&&o&&t.constructor===c&&r?t:i(h?new u(o&&!r?t.source:t,e):u((o=t instanceof c)?t.source:t,o&&r?l.call(t):e),n?this:f,c)};for(var v=function(t){t in c||r(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=a(u),y=0;g.length>y;)v(g[y++]);f.constructor=c,c.prototype=f,n(21)(o,"RegExp",c)}n(55)("RegExp")},function(t,e,n){"use strict";n(125);var o=n(10),i=n(69),r=n(18),a=/./.toString,s=function(t){n(21)(RegExp.prototype,"toString",t,!0)};n(9)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var o=n(10),i=n(16),r=n(100),a=n(70);n(71)("match",1,(function(t,e,n,s){return[function(n){var o=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=s(n,t,this);if(e.done)return e.value;var l=o(t),c=String(this);if(!l.global)return a(l,c);var u=l.unicode;l.lastIndex=0;for(var f,d=[],p=0;null!==(f=a(l,c));){var h=String(f[0]);d[p]=h,""===h&&(l.lastIndex=r(c,i(l.lastIndex),u)),p++}return 0===p?null:d}]}))},function(t,e,n){"use strict";var o=n(10),i=n(20),r=n(16),a=n(31),s=n(100),l=n(70),c=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(71)("replace",2,(function(t,e,n,h){return[function(o,i){var r=t(this),a=null==o?void 0:o[e];return void 0!==a?a.call(o,r,i):n.call(String(r),o,i)},function(t,e){var i=h(n,t,this,e);if(i.done)return i.value;var f=o(t),d=String(this),p="function"==typeof e;p||(e=String(e));var g=f.global;if(g){var y=f.unicode;f.lastIndex=0}for(var b=[];;){var m=l(f,d);if(null===m)break;if(b.push(m),!g)break;""===String(m[0])&&(f.lastIndex=s(d,r(f.lastIndex),y))}for(var k,x="",w=0,S=0;S<b.length;S++){m=b[S];for(var E=String(m[0]),T=c(u(a(m.index),d.length),0),C=[],B=1;B<m.length;B++)C.push(void 0===(k=m[B])?k:String(k));var _=m.groups;if(p){var I=[E].concat(C,T,d);void 0!==_&&I.push(_);var O=String(e.apply(void 0,I))}else O=v(E,d,T,C,_,e);T>=w&&(x+=d.slice(w,T)+O,w=T+E.length)}return x+d.slice(w)}];function v(t,e,o,r,a,s){var l=o+t.length,c=r.length,u=p;return void 0!==a&&(a=i(a),u=d),n.call(s,u,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(l);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>c){var d=f(u/10);return 0===d?n:d<=c?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):n}s=r[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var o=n(10),i=n(110),r=n(70);n(71)("search",1,(function(t,e,n,a){return[function(n){var o=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=o(t),l=String(this),c=s.lastIndex;i(c,0)||(s.lastIndex=0);var u=r(s,l);return i(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var o=n(92),i=n(10),r=n(63),a=n(100),s=n(16),l=n(70),c=n(99),u=n(9),f=Math.min,d=[].push,p=!u((function(){RegExp(4294967295,"y")}));n(71)("split",2,(function(t,e,n,u){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(i,t,e);for(var r,a,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===e?4294967295:e>>>0,h=new RegExp(t.source,u+"g");(r=c.call(h,i))&&!((a=h.lastIndex)>f&&(l.push(i.slice(f,r.index)),r.length>1&&r.index<i.length&&d.apply(l,r.slice(1)),s=r[0].length,f=a,l.length>=p));)h.lastIndex===r.index&&h.lastIndex++;return f===i.length?!s&&h.test("")||l.push(""):l.push(i.slice(f)),l.length>p?l.slice(0,p):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i,o):h.call(String(i),n,o)},function(t,e){var o=u(h,t,this,e,h!==n);if(o.done)return o.value;var c=i(t),d=String(this),v=r(c,RegExp),g=c.unicode,y=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(p?"y":"g"),b=new v(p?c:"^(?:"+c.source+")",y),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===d.length)return null===l(b,d)?[d]:[];for(var k=0,x=0,w=[];x<d.length;){b.lastIndex=p?x:0;var S,E=l(b,p?d:d.slice(x));if(null===E||(S=f(s(b.lastIndex+(p?0:x)),d.length))===k)x=a(d,x,g);else{if(w.push(d.slice(k,x)),w.length===m)return w;for(var T=1;T<=E.length-1;T++)if(w.push(E[T]),w.length===m)return w;x=k=S}}return w.push(d.slice(k)),w}]}))},function(t,e,n){var o=n(8),i=n(101).set,r=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,l="process"==n(35)(a);t.exports=function(){var t,e,n,c=function(){var o,i;for(l&&(o=a.domain)&&o.exit();t;){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(l)n=function(){a.nextTick(c)};else if(!r||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(c)}}else n=function(){i.call(o,c)};else{var f=!0,d=document.createTextNode("");new r(c).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(o){var i={fn:o,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){"use strict";var o=n(129),i=n(49);t.exports=n(74)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=o.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(i(this,"Map"),0===t?0:t,e)}},o,!0)},function(t,e,n){"use strict";var o=n(129),i=n(49);t.exports=n(74)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(i(this,"Set"),t=0===t?0:t,t)}},o)},function(t,e,n){"use strict";var o,i=n(8),r=n(34)(0),a=n(21),s=n(39),l=n(109),c=n(130),u=n(11),f=n(49),d=n(49),p=!i.ActiveXObject&&"ActiveXObject"in i,h=s.getWeak,v=Object.isExtensible,g=c.ufstore,y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(u(t)){var e=h(t);return!0===e?g(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(f(this,"WeakMap"),t,e)}},m=t.exports=n(74)("WeakMap",y,b,c,!0,!0);d&&p&&(l((o=c.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,r(["delete","has","get","set"],(function(t){var e=m.prototype,n=e[t];a(e,t,(function(e,i){if(u(e)&&!v(e)){this._f||(this._f=new o);var r=this._f[t](e,i);return"set"==t?this:r}return n.call(this,e,i)}))})))},function(t,e,n){"use strict";var o=n(130),i=n(49);n(74)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(i(this,"WeakSet"),t,!0)}},o,!1,!0)},function(t,e,n){"use strict";var o=n(0),i=n(75),r=n(102),a=n(10),s=n(44),l=n(16),c=n(11),u=n(8).ArrayBuffer,f=n(63),d=r.ArrayBuffer,p=r.DataView,h=i.ABV&&u.isView,v=d.prototype.slice,g=i.VIEW;o(o.G+o.W+o.F*(u!==d),{ArrayBuffer:d}),o(o.S+o.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return h&&h(t)||c(t)&&g in t}}),o(o.P+o.U+o.F*n(9)((function(){return!new d(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==v&&void 0===e)return v.call(a(this),t);for(var n=a(this).byteLength,o=s(t,n),i=s(void 0===e?n:e,n),r=new(f(this,d))(l(i-o)),c=new p(this),u=new p(r),h=0;o<i;)u.setUint8(h++,c.getUint8(o++));return r}}),n(55)("ArrayBuffer")},function(t,e,n){var o=n(0);o(o.G+o.W+o.F*!n(75).ABV,{DataView:n(102).DataView})},function(t,e,n){n(37)("Int8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}),!0)},function(t,e,n){n(37)("Int16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Uint16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Int32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Uint32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Float32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(37)("Float64",8,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){var o=n(0),i=n(30),r=n(10),a=(n(8).Reflect||{}).apply,s=Function.apply;o(o.S+o.F*!n(9)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var o=i(t),l=r(n);return a?a(o,e,l):s.call(o,e,l)}})},function(t,e,n){var o=n(0),i=n(45),r=n(30),a=n(10),s=n(11),l=n(9),c=n(111),u=(n(8).Reflect||{}).construct,f=l((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),d=!l((function(){u((function(){}))}));o(o.S+o.F*(f||d),"Reflect",{construct:function(t,e){r(t),a(e);var n=arguments.length<3?t:r(arguments[2]);if(d&&!f)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(c.apply(t,o))}var l=n.prototype,p=i(s(l)?l:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p}})},function(t,e,n){var o=n(19),i=n(0),r=n(10),a=n(38);i(i.S+i.F*n(9)((function(){Reflect.defineProperty(o.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){r(t),e=a(e,!0),r(n);try{return o.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var o=n(0),i=n(32).f,r=n(10);o(o.S,"Reflect",{deleteProperty:function(t,e){var n=i(r(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var o=n(0),i=n(10),r=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(118)(r,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),o(o.S,"Reflect",{enumerate:function(t){return new r(t)}})},function(t,e,n){var o=n(32),i=n(47),r=n(23),a=n(0),s=n(11),l=n(10);a(a.S,"Reflect",{get:function t(e,n){var a,c,u=arguments.length<3?e:arguments[2];return l(e)===u?e[n]:(a=o.f(e,n))?r(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(c=i(e))?t(c,n,u):void 0}})},function(t,e,n){var o=n(32),i=n(0),r=n(10);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return o.f(r(t),e)}})},function(t,e,n){var o=n(0),i=n(47),r=n(10);o(o.S,"Reflect",{getPrototypeOf:function(t){return i(r(t))}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var o=n(0),i=n(10),r=Object.isExtensible;o(o.S,"Reflect",{isExtensible:function(t){return i(t),!r||r(t)}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{ownKeys:n(132)})},function(t,e,n){var o=n(0),i=n(10),r=Object.preventExtensions;o(o.S,"Reflect",{preventExtensions:function(t){i(t);try{return r&&r(t),!0}catch(t){return!1}}})},function(t,e,n){var o=n(19),i=n(32),r=n(47),a=n(23),s=n(0),l=n(40),c=n(10),u=n(11);s(s.S,"Reflect",{set:function t(e,n,s){var f,d,p=arguments.length<4?e:arguments[3],h=i.f(c(e),n);if(!h){if(u(d=r(e)))return t(d,n,s,p);h=l(0)}if(a(h,"value")){if(!1===h.writable||!u(p))return!1;if(f=i.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=s,o.f(p,n,f)}else o.f(p,n,l(0,s));return!0}return void 0!==h.set&&(h.set.call(p,s),!0)}})},function(t,e,n){var o=n(0),i=n(83);i&&o(o.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){n(318),t.exports=n(17).Array.includes},function(t,e,n){"use strict";var o=n(0),i=n(65)(!0);o(o.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(48)("includes")},function(t,e,n){n(320),t.exports=n(17).Array.flatMap},function(t,e,n){"use strict";var o=n(0),i=n(321),r=n(20),a=n(16),s=n(30),l=n(120);o(o.P,"Array",{flatMap:function(t){var e,n,o=r(this);return s(t),e=a(o.length),n=l(o,0),i(n,o,o,e,0,1,t,arguments[1]),n}}),n(48)("flatMap")},function(t,e,n){"use strict";var o=n(67),i=n(11),r=n(16),a=n(29),s=n(12)("isConcatSpreadable");t.exports=function t(e,n,l,c,u,f,d,p){for(var h,v,g=u,y=0,b=!!d&&a(d,p,3);y<c;){if(y in l){if(h=b?b(l[y],y,n):l[y],v=!1,i(h)&&(v=void 0!==(v=h[s])?!!v:o(h)),v&&f>0)g=t(e,n,h,r(h.length),g,f-1)-1;else{if(g>=9007199254740991)throw TypeError();e[g]=h}g++}y++}return g}},function(t,e,n){n(323),t.exports=n(17).String.padStart},function(t,e,n){"use strict";var o=n(0),i=n(133),r=n(73),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);o(o.P+o.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){n(325),t.exports=n(17).String.padEnd},function(t,e,n){"use strict";var o=n(0),i=n(133),r=n(73),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);o(o.P+o.F*a,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){n(327),t.exports=n(17).String.trimLeft},function(t,e,n){"use strict";n(53)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){n(329),t.exports=n(17).String.trimRight},function(t,e,n){"use strict";n(53)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){n(331),t.exports=n(79).f("asyncIterator")},function(t,e,n){n(105)("asyncIterator")},function(t,e,n){n(333),t.exports=n(17).Object.getOwnPropertyDescriptors},function(t,e,n){var o=n(0),i=n(132),r=n(25),a=n(32),s=n(95);o(o.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,o=r(t),l=a.f,c=i(o),u={},f=0;c.length>f;)void 0!==(n=l(o,e=c[f++]))&&s(u,e,n);return u}})},function(t,e,n){n(335),t.exports=n(17).Object.values},function(t,e,n){var o=n(0),i=n(134)(!1);o(o.S,"Object",{values:function(t){return i(t)}})},function(t,e,n){n(337),t.exports=n(17).Object.entries},function(t,e,n){var o=n(0),i=n(134)(!0);o(o.S,"Object",{entries:function(t){return i(t)}})},function(t,e,n){"use strict";n(126),n(339),t.exports=n(17).Promise.finally},function(t,e,n){"use strict";var o=n(0),i=n(17),r=n(8),a=n(63),s=n(128);o(o.P+o.R,"Promise",{finally:function(t){var e=a(this,i.Promise||r.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){n(341),n(342),n(343),t.exports=n(17)},function(t,e,n){var o=n(8),i=n(0),r=n(73),a=[].slice,s=/MSIE .\./.test(r),l=function(t){return function(e,n){var o=arguments.length>2,i=!!o&&a.call(arguments,2);return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*s,{setTimeout:l(o.setTimeout),setInterval:l(o.setInterval)})},function(t,e,n){var o=n(0),i=n(101);o(o.G+o.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,e,n){for(var o=n(98),i=n(43),r=n(21),a=n(8),s=n(24),l=n(54),c=n(12),u=c("iterator"),f=c("toStringTag"),d=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),v=0;v<h.length;v++){var g,y=h[v],b=p[y],m=a[y],k=m&&m.prototype;if(k&&(k[u]||s(k,u,d),k[f]||s(k,f,y),l[y]=d,b))for(g in o)k[g]||r(k,g,o[g],!0)}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(50),n(51),n(2),n(3),n(348),n(350),n(351)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c,u){"use strict";var f=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=f(i),r=f(r),a=f(a),s=f(s),u=f(u);var d=function(){function t(e){var n=this;(0,a.default)(this,t);var o=function(){};"object"===(0,r.default)(e)&&"function"==typeof e.onReady&&(o=e.onReady);var i=new u.default(e);this.isReady=i.isReady.then((function(){n.exportAPI(i),o()}))}return(0,s.default)(t,[{key:"exportAPI",value:function(t){var e=this;["configuration"].forEach((function(n){e[n]=t[n]})),this.destroy=function(){for(var n in t.moduleInstances.Listeners.removeAll(),t.moduleInstances.UI.destroy(),t.moduleInstances.ModificationsObserver.destroy(),t=null,e)e.hasOwnProperty(n)&&delete e[n];Object.setPrototypeOf(e,null)},Object.setPrototypeOf(this,t.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((function(n){var o=(0,i.default)(n,2),r=o[0],a=o[1];Object.entries(a).forEach((function(n){var o=(0,i.default)(n,2),a=o[0],s=o[1];e[s]=t.moduleInstances.API.methods[r][a]}))}))}}],[{key:"version",get:function(){return"2.17.0"}}]),t}();o.default=d,d.displayName="EditorJS",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){(e=t.exports=function(...t){return i(...t)}).__esModule=!0;const o=n(349),i=o.default;Object.assign(e,o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){},e.revert=function(){}},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[],void 0===(r="function"==typeof(o=function(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e);return null}),Element.prototype.prepend||(Element.prototype.prepend=function(t){var e=document.createDocumentFragment();Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))})),this.insertBefore(e,this.firstChild)})})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(51),n(26),n(2),n(3),n(13),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l,c){"use strict";var u=n(15),f=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=f(i),r=f(r),a=f(a),s=f(s),l=f(l),c=u(c);var d=n(356),p=[];d.keys().forEach((function(t){t.match(/^\.\/[^_][\w/]*\.([tj])s$/)&&p.push(d(t))}));var h=function(){function t(e){var n,o,i=this;(0,a.default)(this,t),this.moduleInstances={},this.isReady=new Promise((function(t,e){n=t,o=e})),Promise.resolve().then((function(){return r.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:return i.configuration=e,t.next=3,r.default.awrap(i.validate());case 3:return t.next=5,r.default.awrap(i.init());case 5:return t.next=7,r.default.awrap(i.start());case 7:c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","log","","color: #E24A75"),setTimeout((function(){var t,e,o;return r.default.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.default.awrap(i.render());case 2:i.configuration.autofocus&&(t=i.moduleInstances,e=t.BlockManager,(o=t.Caret).setToBlock(e.blocks[0],o.positions.START)),i.moduleInstances.UI.removeLoader(),n();case 5:case"end":return a.stop()}}))}),500);case 9:case"end":return t.stop()}}))})).catch((function(t){c.log("Editor.js is not ready because of ".concat(t),"error"),o(t)}))}return(0,s.default)(t,[{key:"validate",value:function(){var t,e,n;return r.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=this.config,e=t.holderId,n=t.holder,!e||!n){o.next=3;break}throw Error("«holderId» and «holder» param can't assign at the same time.");case 3:if("string"!=typeof n||l.default.get(n)){o.next=5;break}throw Error("element with ID «".concat(n,"» is missing. Pass correct holder's ID."));case 5:if(!n||"object"!==(0,i.default)(n)||l.default.isElement(n)){o.next=7;break}throw Error("holder as HTMLElement if provided must be inherit from Element class.");case 7:case"end":return o.stop()}}),null,this)}},{key:"init",value:function(){this.constructModules(),this.configureModules()}},{key:"start",value:function(){var t,e=this;return r.default.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=["Tools","UI","BlockManager","Paste","DragNDrop","ModificationsObserver","BlockSelection","RectangleSelection"],n.next=3,r.default.awrap(t.reduce((function(t,n){return t.then((function(){return r.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.default.awrap(e.moduleInstances[n].prepare());case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),c.log("Module ".concat(n," was skipped because of %o"),"warn",t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]])}))}),Promise.resolve()));case 3:case"end":return n.stop()}}))}},{key:"render",value:function(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}},{key:"constructModules",value:function(){var t=this;p.forEach((function(e){var n="function"==typeof e?e:e.default;try{t.moduleInstances[n.displayName]=new n({config:t.configuration})}catch(t){c.log("Module ".concat(n.displayName," skipped because"),"warn",t)}}))}},{key:"configureModules",value:function(){for(var t in this.moduleInstances)this.moduleInstances.hasOwnProperty(t)&&(this.moduleInstances[t].state=this.getModulesDiff(t))}},{key:"getModulesDiff",value:function(t){var e={};for(var n in this.moduleInstances)n!==t&&(e[n]=this.moduleInstances[n]);return e}},{key:"configuration",set:function(t){"object"!==(0,i.default)(t)&&(t={holder:t}),t.holderId&&!t.holder&&(t.holder=t.holderId,t.holderId=null,c.log("holderId property will deprecated in next major release, use holder property instead.","warn")),this.config=t,null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=c.LogLevels.VERBOSE),c.setLogLevel(this.config.logLevel),this.config.initialBlock=this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300;var e={type:this.config.initialBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.data=this.config.data||{},this.config.onReady=this.config.onReady||function(){},this.config.onChange=this.config.onChange||function(){},c.isEmpty(this.config.data)?(this.config.data={},this.config.data.blocks=[e]):this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data.blocks=[e])},get:function(){return this.config}}]),t}();o.default=h,h.displayName="Core",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var o={"./api":76,"./api/":76,"./api/blocks":136,"./api/blocks.ts":136,"./api/caret":137,"./api/caret.ts":137,"./api/events":138,"./api/events.ts":138,"./api/index":76,"./api/index.ts":76,"./api/inlineToolbar":139,"./api/inlineToolbar.ts":139,"./api/listeners":140,"./api/listeners.ts":140,"./api/notifier":141,"./api/notifier.ts":141,"./api/sanitizer":142,"./api/sanitizer.ts":142,"./api/saver":143,"./api/saver.ts":143,"./api/selection":144,"./api/selection.ts":144,"./api/styles":145,"./api/styles.ts":145,"./api/toolbar":146,"./api/toolbar.ts":146,"./api/tooltip":147,"./api/tooltip.ts":147,"./blockEvents":148,"./blockEvents.ts":148,"./blockManager":149,"./blockManager.ts":149,"./blockSelection":150,"./blockSelection.ts":150,"./caret":151,"./caret.ts":151,"./crossBlockSelection":152,"./crossBlockSelection.ts":152,"./dragNDrop":153,"./dragNDrop.ts":153,"./events":154,"./events.ts":154,"./listeners":155,"./listeners.ts":155,"./modificationsObserver":156,"./modificationsObserver.ts":156,"./notifier":157,"./notifier.ts":157,"./paste":158,"./paste.ts":158,"./rectangleSelection":159,"./rectangleSelection.ts":159,"./renderer":160,"./renderer.ts":160,"./sanitizer":161,"./sanitizer.ts":161,"./saver":162,"./saver.ts":162,"./shortcuts":163,"./shortcuts.ts":163,"./toolbar":77,"./toolbar/":77,"./toolbar/blockSettings":164,"./toolbar/blockSettings.ts":164,"./toolbar/conversion":165,"./toolbar/conversion.ts":165,"./toolbar/index":77,"./toolbar/index.ts":77,"./toolbar/inline":166,"./toolbar/inline.ts":166,"./toolbar/toolbox":167,"./toolbar/toolbox.ts":167,"./tools":168,"./tools.ts":168,"./tooltip":169,"./tooltip.ts":169,"./ui":170,"./ui.ts":170};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=356},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(e,n){(0,i.default)(this,t),this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=n}return(0,r.default)(t,[{key:"setItems",value:function(t){this.items=t}},{key:"next",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.RIGHT)}},{key:"previous",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.LEFT)}},{key:"dropCursor",value:function(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1)}},{key:"leafNodesAndReturnIndex",value:function(e){if(0===this.items.length)return this.cursor;var n=this.cursor;return-1===n?n=e===t.directions.RIGHT?-1:0:this.items[n].classList.remove(this.focusedCssClass),n=e===t.directions.RIGHT?(n+1)%this.items.length:(this.items.length+n-1)%this.items.length,a.default.isNativeInput(this.items[n])&&this.items[n].focus(),this.items[n].classList.add(this.focusedCssClass),n}},{key:"currentItem",get:function(){return-1===this.cursor?null:this.items[this.cursor]}}]),t}();o.default=l,l.displayName="DomIterator",l.directions={RIGHT:"right",LEFT:"left"},t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(e){var n=e.api;(0,i.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=n}return(0,r.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-up",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,"Move up"),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex();if(0===o)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var i,r=this.api.blocks.getBlockByIndex(o),a=this.api.blocks.getBlockByIndex(o-1),s=r.getBoundingClientRect(),l=a.getBoundingClientRect();i=l.top>0?Math.abs(s.top)-Math.abs(l.top):window.innerHeight-Math.abs(s.top)+Math.abs(l.top),window.scrollBy(0,-1*i),this.api.blocks.move(o-1),this.api.tooltip.hide()}}]),t}();o.default=l,l.displayName="MoveUpTune",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(e){var n=this,o=e.api;(0,i.default)(this,t),this.CSS={button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=o,this.resetConfirmation=function(){n.setConfirmation(!1)}}return(0,r.default)(t,[{key:"render",value:function(){var t=this;return this.nodes.button=a.default.make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(a.default.svg("cross",12,12)),this.api.listeners.on(this.nodes.button,"click",(function(e){return t.handleClick(e)}),!1),this.api.tooltip.onHover(this.nodes.button,"Delete"),this.nodes.button}},{key:"handleClick",value:function(t){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks.delete(),this.api.toolbar.close(),this.api.tooltip.hide(),t.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation))}},{key:"setConfirmation",value:function(t){this.needConfirmation=t,this.nodes.button.classList.add(this.CSS.buttonConfirm)}}]),t}();o.default=l,l.displayName="DeleteTune",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(e){var n=e.api;(0,i.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=n}return(0,r.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-down",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,"Move down"),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex();if(o===this.api.blocks.getBlocksCount()-1)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var i=this.api.blocks.getBlockByIndex(o+1),r=i.getBoundingClientRect(),a=Math.abs(window.innerHeight-i.offsetHeight);r.top<window.innerHeight&&(a=window.scrollY+i.offsetHeight),window.scrollTo(0,a),this.api.blocks.move(o+1),this.api.tooltip.hide()}}]),t}();o.default=l,l.displayName="MoveDownTune",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(14),n(13),n(59)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l){"use strict";var c=n(15),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=c(a),s=u(s);var f=function(){function t(e){(0,i.default)(this,t),this.blocks=[],this.workingArea=e}return(0,r.default)(t,[{key:"push",value:function(t){this.blocks.push(t),this.insertToDOM(t)}},{key:"swap",value:function(t,e){var n=this.blocks[e];s.default.swap(this.blocks[t].holder,n.holder),this.blocks[e]=this.blocks[t],this.blocks[t]=n}},{key:"move",value:function(t,e){var n=this.blocks.splice(e,1)[0],o=t-1,i=Math.max(0,o),r=this.blocks[i];t>0?this.insertToDOM(n,"afterend",r):this.insertToDOM(n,"beforebegin",r),this.blocks.splice(t,0,n);var a=this.composeBlockEvent("move",{fromIndex:e,toIndex:t});n.call(l.BlockToolAPI.MOVED,a)}},{key:"insert",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){t>this.length&&(t=this.length),n&&(this.blocks[t].holder.remove(),this.blocks[t].call(l.BlockToolAPI.REMOVED));var o=n?1:0;if(this.blocks.splice(t,o,e),t>0){var i=this.blocks[t-1];this.insertToDOM(e,"afterend",i)}else{var r=this.blocks[t+1];r?this.insertToDOM(e,"beforebegin",r):this.insertToDOM(e)}}else this.push(e)}},{key:"remove",value:function(t){isNaN(t)&&(t=this.length-1),this.blocks[t].holder.remove(),this.blocks[t].call(l.BlockToolAPI.REMOVED),this.blocks.splice(t,1)}},{key:"removeAll",value:function(){this.workingArea.innerHTML="",this.blocks.forEach((function(t){return t.call(l.BlockToolAPI.REMOVED)})),this.blocks.length=0}},{key:"insertAfter",value:function(t,e){var n=this.blocks.indexOf(t);this.insert(n+1,e)}},{key:"get",value:function(t){return this.blocks[t]}},{key:"indexOf",value:function(t){return this.blocks.indexOf(t)}},{key:"insertToDOM",value:function(t,e,n){e?n.holder.insertAdjacentElement(e,t.holder):this.workingArea.appendChild(t.holder),t.call(l.BlockToolAPI.RENDERED)}},{key:"composeBlockEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}},{key:"length",get:function(){return this.blocks.length}},{key:"array",get:function(){return this.blocks}},{key:"nodes",get:function(){return a.array(this.workingArea.children)}}],[{key:"set",value:function(t,e,n){return isNaN(Number(e))?(Reflect.set(t,e,n),!0):(t.insert(+e,n),!0)}},{key:"get",value:function(t,e){return isNaN(Number(e))?Reflect.get(t,e):t.get(+e)}}]),t}();o.default=f,f.displayName="Blocks",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n(1),t.exports=function(){var t=n(6),e=null;return{show:function(n){if(n.message){!function(){if(e)return!0;e=t.getWrapper(),document.body.appendChild(e)}();var o=null,i=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout((function(){o.remove()}),i)}e.appendChild(o),o.classList.add("cdx-notify--bounce-in")}}}}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var r=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[o].concat(a).concat([r]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var a=c++;n=l||(l=g(e)),o=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=f(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}for(t&&d(p(t,e),e),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var m,k=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,n){"use strict";var o,i,r,a,s,l;t.exports=(o="cdx-notify",i="cdx-notify__cross",r="cdx-notify__button--confirm",a="cdx-notify__button",s="cdx-notify__btns-wrapper",{alert:l=function(t){var e=document.createElement("DIV"),n=document.createElement("DIV"),r=t.message,a=t.style;return e.classList.add(o),a&&e.classList.add(o+"--"+a),e.innerHTML=r,n.classList.add(i),n.addEventListener("click",e.remove.bind(e)),e.appendChild(n),e},confirm:function(t){var e=l(t),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("button"),u=e.querySelector("."+i),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Confirm",c.innerHTML=t.cancelText||"Cancel",o.classList.add(a),c.classList.add(a),o.classList.add(r),c.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(c.addEventListener("click",f),u.addEventListener("click",f)),d&&"function"==typeof d&&o.addEventListener("click",d),o.addEventListener("click",e.remove.bind(e)),c.addEventListener("click",e.remove.bind(e)),n.appendChild(o),n.appendChild(c),e.appendChild(n),e},prompt:function(t){var e=l(t),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("input"),u=e.querySelector("."+i),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Ok",o.classList.add(a),o.classList.add(r),c.classList.add("cdx-notify__input"),t.placeholder&&c.setAttribute("placeholder",t.placeholder),t.default&&(c.value=t.default),t.inputType&&(c.type=t.inputType),f&&"function"==typeof f&&u.addEventListener("click",f),d&&"function"==typeof d&&o.addEventListener("click",(function(){d(c.value)})),o.addEventListener("click",e.remove.bind(e)),n.appendChild(c),n.appendChild(o),e.appendChild(n),e},getWrapper:function(){var t=document.createElement("DIV");return t.classList.add("cdx-notifies"),t}})}])},function(t,e,n){var o,i;void 0===(i="function"==typeof(o=function(){function t(t){var e=t.tags;if(!Object.keys(e).map((function(t){return typeof e[t]})).every((function(t){return"object"===t||"boolean"===t||"function"===t})))throw new Error("The configuration was invalid");this.config=t}var e=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function n(t){return-1!==e.indexOf(t.nodeName)}var o=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function i(t){return-1!==o.indexOf(t.nodeName)}function r(t,e,n){return"function"==typeof t.tags[e]?t.tags[e](n):t.tags[e]}function a(t,e){return void 0===e||"boolean"==typeof e&&!e}function s(t,e,n){var o=t.name.toLowerCase();return!0!==e&&("function"==typeof e[o]?!e[o](t.value,n):void 0===e[o]||!1===e[o]||"string"==typeof e[o]&&e[o]!==t.value)}return t.prototype.clean=function(t){const e=document.implementation.createHTMLDocument(),n=e.createElement("div");return n.innerHTML=t,this._sanitize(e,n),n.innerHTML},t.prototype._sanitize=function(t,e){var o=function(t,e){return t.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(t,e),l=o.firstChild();if(l)do{if(l.nodeType!==Node.TEXT_NODE){if(l.nodeType===Node.COMMENT_NODE){e.removeChild(l),this._sanitize(t,e);break}var c,u=i(l);u&&(c=Array.prototype.some.call(l.childNodes,n));var f=!!e.parentNode,d=n(e)&&n(l)&&f,p=l.nodeName.toLowerCase(),h=r(this.config,p,l);if(u&&c||a(0,h)||!this.config.keepNestedBlockElements&&d){if("SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName)for(;l.childNodes.length>0;)e.insertBefore(l.childNodes[0],l);e.removeChild(l),this._sanitize(t,e);break}for(var v=0;v<l.attributes.length;v+=1){var g=l.attributes[v];s(g,h,l)&&(l.removeAttribute(g.name),v-=1)}this._sanitize(t,l)}else if(""===l.data.trim()&&(l.previousElementSibling&&n(l.previousElementSibling)||l.nextElementSibling&&n(l.nextElementSibling))){e.removeChild(l),this._sanitize(t,e);break}}while(l=o.nextSibling())},t})?o.call(e,n,e,t):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.r(e);var r=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.commands={},this.keys={},this.name=e.name,this.parseShortcutName(e.name),this.element=e.on,this.callback=e.callback,this.executeShortcut=function(t){n.execute(t)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return i(t,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46}}}]),i(t,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var n=0;n<e.length;n++){e[n]=e[n].toUpperCase();var o=!1;for(var i in t.supportedCommands)if(t.supportedCommands[i].includes(e[n])){o=this.commands[i]=!0;break}o||(this.keys[e[n]]=!0)}for(var r in t.supportedCommands)this.commands[r]||(this.commands[r]=!1)}},{key:"execute",value:function(e){var n,o={CMD:e.ctrlKey||e.metaKey,SHIFT:e.shiftKey,ALT:e.altKey},i=!0;for(n in this.commands)this.commands[n]!==o[n]&&(i=!1);var r,a=!0;for(r in this.keys)a=a&&e.keyCode===t.keyCodes[r];i&&a&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),t}();e.default=r}]).default},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var r=function(){function t(e){var n=e.data,o=e.config,i=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=o.placeholder?o.placeholder:t.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this.data=n}return i(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),i(t,[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!0,t.dataset.placeholder=this._placeholder,t.addEventListener("keyup",this.onKeyUp),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+t.text};this.data=e}},{key:"validate",value:function(t){return""!==t.text.trim()}},{key:"save",value:function(t){return{text:t.innerHTML}}},{key:"onPaste",value:function(t){var e={text:t.detail.data.innerHTML};this.data=e}},{key:"data",get:function(){var t=this._element.innerHTML;return this._data.text=t,this._data},set:function(t){this._data=t||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(6).default,title:"Text"}}}]),t}();t.exports=r},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var r=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[o].concat(a).concat([r]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var a=c++;n=l||(l=g(e)),o=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=f(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}for(t&&d(p(t,e),e),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var m,k=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(){(0,i.default)(this,t),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}}return(0,r.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("bold",12,14)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+B"}}],[{key:"sanitize",get:function(){return{b:{}}}}]),t}();o.default=l,l.displayName="BoldInlineTool",l.isInline=!0,l.title="Bold",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(){(0,i.default)(this,t),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}return(0,r.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("italic",4,11)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+I"}}],[{key:"sanitize",get:function(){return{i:{}}}}]),t}();o.default=l,l.displayName="ItalicInlineTool",l.isInline=!0,l.title="Italic",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(28),n(13),n(14)],void 0===(r="function"==typeof(o=function(o,i,r,a,s,l){"use strict";var c=n(15),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=u(i),r=u(r),a=u(a),s=u(s),l=c(l);var f=function(){function t(e){var n=e.api;(0,i.default)(this,t),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.selection=new a.default}return(0,r.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.default.svg("link",14,10)),this.nodes.button.appendChild(s.default.svg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var t=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder="Add a link",this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(function(e){e.keyCode===t.ENTER_KEY&&t.enterPressed(e)})),this.nodes.input}},{key:"surround",value:function(t){if(t){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"checkState",value:function(t){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=e.getAttribute("href");this.nodes.input.value="null"!==n?n:"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),t&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var e=new a.default;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",t&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"enterPressed",value:function(t){var e=this.nodes.input.value||"";if(e.trim()||(this.selection.restore(),this.unlink(),t.preventDefault(),this.closeActions()),!this.validateURL(e))return this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void l.log("Incorrect Link pasted","warn",e);e=this.prepareLink(e),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(e),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.selection.collapseToEnd(),this.inlineToolbar.close()}},{key:"validateURL",value:function(t){return!/\s/.test(t)}},{key:"prepareLink",value:function(t){return t=t.trim(),t=this.addProtocol(t)}},{key:"addProtocol",value:function(t){if(/^(\w+):(\/\/)?/.test(t))return t;var e=/^\/[^\/\s]/.test(t),n="#"===t.substring(0,1),o=/^\/\/[^\/\s]/.test(t);return e||n||o||(t="http://"+t),t}},{key:"insertLink",value:function(t){var e=this.selection.findParentTag("A");e&&this.selection.expandToTag(e),document.execCommand(this.commandLink,!1,t)}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"shortcut",get:function(){return"CMD+K"}}],[{key:"sanitize",get:function(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}}]),t}();o.default=f,f.displayName="LinkInlineTool",f.isInline=!0,f.title="Link",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[e,n(2),n(3),n(13)],void 0===(r="function"==typeof(o=function(o,i,r,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i=s(i),r=s(r),a=s(a);var l=function(){function t(e){var n=e.data;e.config,e.api,(0,i.default)(this,t),this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.title=n.title||"Error",this.subtitle="The block can not be displayed correctly.",this.savedData=n.savedData,this.wrapper=this.make()}return(0,r.default)(t,[{key:"render",value:function(){return this.wrapper}},{key:"save",value:function(){return this.savedData}},{key:"make",value:function(){var t=a.default.make("div",this.CSS.wrapper),e=a.default.svg("sad-face",52,52),n=a.default.make("div",this.CSS.info),o=a.default.make("div",this.CSS.title,{textContent:this.title}),i=a.default.make("div",this.CSS.subtitle,{textContent:this.subtitle});return t.appendChild(e),n.appendChild(o),n.appendChild(i),t.appendChild(n),t}}]),t}();o.default=l,l.displayName="Stub",t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));class o{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.loadStyles(),this.prepare(),window.addEventListener("scroll",()=>{this.showed&&this.hide(!0)},{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(t,e,n){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const o=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n);if(o.hidingDelay&&(this.hidingDelay=o.hidingDelay),this.nodes.content.innerHTML="","string"==typeof e)this.nodes.content.appendChild(document.createTextNode(e));else{if(!(e instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof e+" given.");this.nodes.content.appendChild(e)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),o.placement){case"top":this.placeTop(t,o);break;case"left":this.placeLeft(t,o);break;case"right":this.placeRight(t,o);break;case"bottom":default:this.placeBottom(t,o)}o&&o.delay?this.showingTimeout=setTimeout(()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0},o.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(t=!1){if(this.hidingDelay&&!t)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout(()=>{this.hide(!0)},this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(t,e,n){t.addEventListener("mouseenter",()=>{this.show(t,e,n)}),t.addEventListener("mouseleave",()=>{this.hide()})}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const t="codex-tooltips-style";if(document.getElementById(t))return;const e=n(2),o=this.make("style",null,{textContent:e.toString(),id:t});this.prepend(document.head,o)}placeBottom(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,i=n.bottom+window.pageYOffset+this.offsetTop+e.marginTop;this.applyPlacement("bottom",o,i)}placeTop(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,i=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",o,i)}placeLeft(t,e){const n=t.getBoundingClientRect(),o=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-e.marginLeft,i=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",o,i)}placeRight(t,e){const n=t.getBoundingClientRect(),o=n.right+this.offsetRight+e.marginRight,i=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",o,i)}applyPlacement(t,e,n){this.nodes.wrapper.classList.add(this.CSS.placement[t]),this.nodes.wrapper.style.left=`${e}px`,this.nodes.wrapper.style.top=`${n}px`}make(t,e=null,n={}){const o=document.createElement(t);Array.isArray(e)?o.classList.add(...e):e&&o.classList.add(e);for(const t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}append(t,e){Array.isArray(e)?e.forEach(e=>t.appendChild(e)):t.appendChild(e)}prepend(t,e){Array.isArray(e)?(e=e.reverse()).forEach(e=>t.prepend(e)):t.prepend(e)}}},function(t,e){t.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%;z-index:-1}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default},function(t,e,n){"use strict";n.r(e),e.default='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>'},function(t,e){t.exports='.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 6px}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool .icon,.ce-inline-tool>svg{margin:auto}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--last{margin-right:0!important}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button .icon,.ce-settings__button>svg{margin:auto}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button .icon,.cdx-settings-button>svg{margin:auto}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}'}])}));

/***/ }),

/***/ "./node_modules/@editorjs/header/dist/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/@editorjs/header/dist/bundle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(1).toString();
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var a=function(){function e(t){var n=t.data,r=t.config,i=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=r,this._data=this.normalizeData(n),this.settingsButtons=[],this._element=this.getTag()}var t,a,o;return t=e,o=[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{level:{}}}},{key:"pasteConfig",get:function(){return{tags:["H1","H2","H3","H4","H5","H6"]}}},{key:"toolbox",get:function(){return{icon:n(6).default,title:"Heading"}}}],(a=[{key:"normalizeData",value:function(e){var t={};return"object"!==r(e)&&(e={}),t.text=e.text||"",t.level=parseInt(e.level)||this.defaultLevel.number,t}},{key:"render",value:function(){return this._element}},{key:"renderSettings",value:function(){var e=this,t=document.createElement("DIV");return this.levels.length<=1?t:(this.levels.forEach((function(n){var r=document.createElement("SPAN");r.classList.add(e._CSS.settingsButton),e.currentLevel.number===n.number&&r.classList.add(e._CSS.settingsButtonActive),r.innerHTML=n.svg,r.dataset.level=n.number,r.addEventListener("click",(function(){e.setLevel(n.number)})),t.appendChild(r),e.settingsButtons.push(r)})),t)}},{key:"setLevel",value:function(e){var t=this;this.data={level:e,text:this.data.text},this.settingsButtons.forEach((function(n){n.classList.toggle(t._CSS.settingsButtonActive,parseInt(n.dataset.level)===e)}))}},{key:"merge",value:function(e){var t={text:this.data.text+e.text,level:this.data.level};this.data=t}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML,level:this.currentLevel.number}}},{key:"getTag",value:function(){var e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable="true",e.dataset.placeholder=this._settings.placeholder||"",e}},{key:"onPaste",value:function(e){var t=e.detail.data,n=this.defaultLevel.number;switch(t.tagName){case"H1":n=1;break;case"H2":n=2;break;case"H3":n=3;break;case"H4":n=4;break;case"H5":n=5;break;case"H6":n=6}this._settings.levels&&(n=this._settings.levels.reduce((function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e}))),this.data={level:n,text:t.innerHTML}}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data},set:function(e){if(this._data=this.normalizeData(e),void 0!==e.level&&this._element.parentNode){var t=this.getTag();t.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(t,this._element),this._element=t}void 0!==e.text&&(this._element.innerHTML=this._data.text||"")}},{key:"currentLevel",get:function(){var e=this,t=this.levels.find((function(t){return t.number===e._data.level}));return t||(t=this.defaultLevel),t}},{key:"defaultLevel",get:function(){var e=this;if(this._settings.defaultLevel){var t=this.levels.find((function(t){return t.number===e._settings.defaultLevel}));if(t)return t;console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}},{key:"levels",get:function(){var e=this,t=[{number:1,tag:"H1",svg:'<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'},{number:2,tag:"H2",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'},{number:3,tag:"H3",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'},{number:4,tag:"H4",svg:'<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'},{number:5,tag:"H5",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'},{number:6,tag:"H6",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'}];return this._settings.levels?t.filter((function(t){return e._settings.levels.includes(t.number)})):t}}])&&i(t.prototype,a),o&&i(t,o),e}();e.exports=a},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"/**\n * Plugin styles\n */\n.ce-header {\n  padding: 1em 0;\n  margin: 0;\n  margin-bottom: -0.9em;\n  line-height: 1.5em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],d=n(5);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(y(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(y(r.parts[o],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function v(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function p(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),p(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var o=u++;n=l||(l=m(t)),r=L.bind(null,n,o,!1),i=L.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t}(t),r=_.bind(null,n,t),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=H.bind(null,n),i=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}e&&h(v(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function L(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function H(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function _(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";n.r(t),t.default='<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n'}])}));

/***/ }),

/***/ "./node_modules/@editorjs/image/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/image/dist/bundle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
     true ? module.exports = e() : undefined
}(window, function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "/", n(n.s = 25)
    }([function (t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        t.exports = function (t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e, n) {
        window, t.exports = function (t) {
            var e = {};

            function n(r) {
                if (e[r]) return e[r].exports;
                var o = e[r] = {i: r, l: !1, exports: {}};
                return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }

            return n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
                    return t[e]
                }.bind(null, o));
                return r
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 3)
        }([function (t, e) {
            var n;
            n = function () {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }, function (t, e, n) {
            "use strict";
            (function (t) {
                var r = n(2), o = setTimeout;

                function i() {
                }

                function a(t) {
                    if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
                }

                function s(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    0 !== t._state ? (t._handled = !0, a._immediateFn(function () {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(t._value)
                            } catch (t) {
                                return void c(e.promise, t)
                            }
                            u(e.promise, r)
                        } else (1 === t._state ? u : c)(e.promise, t._value)
                    })) : t._deferreds.push(e)
                }

                function u(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof a) return t._state = 3, t._value = e, void l(t);
                            if ("function" == typeof n) return void d((r = n, o = e, function () {
                                r.apply(o, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, l(t)
                    } catch (e) {
                        c(t, e)
                    }
                    var r, o
                }

                function c(t, e) {
                    t._state = 2, t._value = e, l(t)
                }

                function l(t) {
                    2 === t._state && 0 === t._deferreds.length && a._immediateFn(function () {
                        t._handled || a._unhandledRejectionFn(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++) s(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function f(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function d(t, e) {
                    var n = !1;
                    try {
                        t(function (t) {
                            n || (n = !0, u(e, t))
                        }, function (t) {
                            n || (n = !0, c(e, t))
                        })
                    } catch (t) {
                        if (n) return;
                        n = !0, c(e, t)
                    }
                }

                a.prototype.catch = function (t) {
                    return this.then(null, t)
                }, a.prototype.then = function (t, e) {
                    var n = new this.constructor(i);
                    return s(this, new f(t, e, n)), n
                }, a.prototype.finally = r.a, a.all = function (t) {
                    return new a(function (e, n) {
                        if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                        var r = Array.prototype.slice.call(t);
                        if (0 === r.length) return e([]);
                        var o = r.length;

                        function i(t, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var s = a.then;
                                    if ("function" == typeof s) return void s.call(a, function (e) {
                                        i(t, e)
                                    }, n)
                                }
                                r[t] = a, 0 == --o && e(r)
                            } catch (t) {
                                n(t)
                            }
                        }

                        for (var a = 0; a < r.length; a++) i(a, r[a])
                    })
                }, a.resolve = function (t) {
                    return t && "object" == typeof t && t.constructor === a ? t : new a(function (e) {
                        e(t)
                    })
                }, a.reject = function (t) {
                    return new a(function (e, n) {
                        n(t)
                    })
                }, a.race = function (t) {
                    return new a(function (e, n) {
                        for (var r = 0, o = t.length; r < o; r++) t[r].then(e, n)
                    })
                }, a._immediateFn = "function" == typeof t && function (e) {
                    t(e)
                } || function (t) {
                    o(t, 0)
                }, a._unhandledRejectionFn = function (t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                }, e.a = a
            }).call(this, n(5).setImmediate)
        }, function (t, e, n) {
            "use strict";
            e.a = function (t) {
                var e = this.constructor;
                return this.then(function (n) {
                    return e.resolve(t()).then(function () {
                        return n
                    })
                }, function (n) {
                    return e.resolve(t()).then(function () {
                        return e.reject(n)
                    })
                })
            }
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            n(4);
            var o, i, a, s, u, c, l = n(8), f = (i = function (t) {
                return new Promise(function (e, n) {
                    t = s(t), t = u(t);
                    var r = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP");
                    r.open(t.method, t.url), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function (e) {
                        var n = t.headers[e];
                        r.setRequestHeader(e, n)
                    });
                    var o = t.ratio;
                    r.upload.addEventListener("progress", function (e) {
                        var n = Math.round(e.loaded / e.total * 100), r = Math.ceil(n * o / 100);
                        t.progress(r)
                    }, !1), r.addEventListener("progress", function (e) {
                        var n = Math.round(e.loaded / e.total * 100), r = Math.ceil(n * (100 - o) / 100) + o;
                        t.progress(r)
                    }, !1), r.onreadystatechange = function () {
                        if (4 === r.readyState) {
                            var t = r.response;
                            try {
                                t = JSON.parse(t)
                            } catch (t) {
                            }
                            var o = l.parseHeaders(r.getAllResponseHeaders()),
                                i = {body: t, code: r.status, headers: o};
                            200 === r.status ? e(i) : n(i)
                        }
                    }, r.send(t.data)
                })
            }, a = function (t) {
                return t.method = "POST", i(t)
            }, s = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (t.url && "string" != typeof t.url) throw new Error("Url must be a string");
                if (t.url = t.url || "", t.method && "string" != typeof t.method) throw new Error("`method` must be a string or null");
                if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && "object" !== r(t.headers)) throw new Error("`headers` must be an object or null");
                if (t.headers = t.headers || {}, t.type && ("string" != typeof t.type || !Object.values(o).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
                if (t.progress && "function" != typeof t.progress) throw new Error("`progress` must be a function or null");
                if (t.progress = t.progress || function (t) {
                }, t.beforeSend = t.beforeSend || function (t) {
                }, t.ratio && "number" != typeof t.ratio) throw new Error("`ratio` must be a number");
                if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
                if (t.ratio = t.ratio || 90, t.accept && "string" != typeof t.accept) throw new Error("`accept` must be a string with a list of allowed mime-types");
                if (t.accept = t.accept || "*/*", t.multiple && "boolean" != typeof t.multiple) throw new Error("`multiple` must be a true or false");
                if (t.multiple = t.multiple || !1, t.fieldName && "string" != typeof t.fieldName) throw new Error("`fieldName` must be a string");
                return t.fieldName = t.fieldName || "files", t
            }, u = function (t) {
                switch (t.method) {
                    case"GET":
                        var e = c(t.data, o.URLENCODED);
                        delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
                        break;
                    case"POST":
                    case"PUT":
                    case"DELETE":
                    case"UPDATE":
                        var n = function () {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON
                        }(t);
                        (l.isFormData(t.data) || l.isFormElement(t.data)) && (n = o.FORM), t.data = c(t.data, n), n !== f.contentType.FORM && (t.headers["content-type"] = n)
                }
                return t
            }, c = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                switch (arguments.length > 1 ? arguments[1] : void 0) {
                    case o.URLENCODED:
                        return l.urlEncode(t);
                    case o.JSON:
                        return l.jsonEncode(t);
                    case o.FORM:
                        return l.formEncode(t);
                    default:
                        return t
                }
            }, {
                contentType: o = {
                    URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
                    FORM: "multipart/form-data",
                    JSON: "application/json; charset=utf-8"
                }, request: i, get: function (t) {
                    return t.method = "GET", i(t)
                }, post: a, transport: function (t) {
                    return t = s(t), l.selectFiles(t).then(function (e) {
                        for (var n = new FormData, r = 0; r < e.length; r++) n.append(t.fieldName, e[r], e[r].name);
                        return l.isObject(t.data) && Object.keys(t.data).forEach(function (e) {
                            var r = t.data[e];
                            n.append(e, r)
                        }), t.beforeSend && t.beforeSend(e), t.data = n, a(t)
                    })
                }, selectFiles: function (t) {
                    return delete (t = s(t)).beforeSend, l.selectFiles(t)
                }
            });
            t.exports = f
        }, function (t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1);
            window.Promise = window.Promise || r.a
        }, function (t, e, n) {
            (function (t) {
                var r = void 0 !== t && t || "undefined" != typeof self && self || window, o = Function.prototype.apply;

                function i(t, e) {
                    this._id = t, this._clearFn = e
                }

                e.setTimeout = function () {
                    return new i(o.call(setTimeout, r, arguments), clearTimeout)
                }, e.setInterval = function () {
                    return new i(o.call(setInterval, r, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function (t) {
                    t && t.close()
                }, i.prototype.unref = i.prototype.ref = function () {
                }, i.prototype.close = function () {
                    this._clearFn.call(r, this._id)
                }, e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, n(6), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
            }).call(this, n(0))
        }, function (t, e, n) {
            (function (t, e) {
                !function (t, n) {
                    "use strict";
                    if (!t.setImmediate) {
                        var r, o, i, a, s, u = 1, c = {}, l = !1, f = t.document,
                            d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                        d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? r = function (t) {
                            e.nextTick(function () {
                                h(t)
                            })
                        } : function () {
                            if (t.postMessage && !t.importScripts) {
                                var e = !0, n = t.onmessage;
                                return t.onmessage = function () {
                                    e = !1
                                }, t.postMessage("", "*"), t.onmessage = n, e
                            }
                        }() ? (a = "setImmediate$" + Math.random() + "$", s = function (e) {
                            e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && h(+e.data.slice(a.length))
                        }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function (e) {
                            t.postMessage(a + e, "*")
                        }) : t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (t) {
                            h(t.data)
                        }, r = function (t) {
                            i.port2.postMessage(t)
                        }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function (t) {
                            var e = f.createElement("script");
                            e.onreadystatechange = function () {
                                h(t), e.onreadystatechange = null, o.removeChild(e), e = null
                            }, o.appendChild(e)
                        }) : r = function (t) {
                            setTimeout(h, 0, t)
                        }, d.setImmediate = function (t) {
                            "function" != typeof t && (t = new Function("" + t));
                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                            var o = {callback: t, args: e};
                            return c[u] = o, r(u), u++
                        }, d.clearImmediate = p
                    }

                    function p(t) {
                        delete c[t]
                    }

                    function h(t) {
                        if (l) setTimeout(h, 0, t); else {
                            var e = c[t];
                            if (e) {
                                l = !0;
                                try {
                                    !function (t) {
                                        var e = t.callback, r = t.args;
                                        switch (r.length) {
                                            case 0:
                                                e();
                                                break;
                                            case 1:
                                                e(r[0]);
                                                break;
                                            case 2:
                                                e(r[0], r[1]);
                                                break;
                                            case 3:
                                                e(r[0], r[1], r[2]);
                                                break;
                                            default:
                                                e.apply(n, r)
                                        }
                                    }(e)
                                } finally {
                                    p(t), l = !1
                                }
                            }
                        }
                    }
                }("undefined" == typeof self ? void 0 === t ? this : t : self)
            }).call(this, n(0), n(7))
        }, function (t, e) {
            var n, r, o = t.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }

            !function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    n = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    r = a
                }
            }();
            var u, c = [], l = !1, f = -1;

            function d() {
                l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
            }

            function p() {
                if (!l) {
                    var t = s(d);
                    l = !0;
                    for (var e = c.length; e;) {
                        for (u = c, c = []; ++f < e;) u && u[f].run();
                        f = -1, e = c.length
                    }
                    u = null, l = !1, function (t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
                }
            }

            function h(t, e) {
                this.fun = t, this.array = e
            }

            function m() {
            }

            o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                c.push(new h(t, e)), 1 !== c.length || l || s(p)
            }, h.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (t) {
                return []
            }, o.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function () {
                return "/"
            }, o.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function () {
                return 0
            }
        }, function (t, e, n) {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            var o = n(9);
            t.exports = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }

                var e, n;
                return e = t, (n = [{
                    key: "urlEncode", value: function (t) {
                        return o(t)
                    }
                }, {
                    key: "jsonEncode", value: function (t) {
                        return JSON.stringify(t)
                    }
                }, {
                    key: "formEncode", value: function (t) {
                        if (this.isFormData(t)) return t;
                        if (this.isFormElement(t)) return new FormData(t);
                        if (this.isObject(t)) {
                            var e = new FormData;
                            return Object.keys(t).forEach(function (n) {
                                var r = t[n];
                                e.append(n, r)
                            }), e
                        }
                        throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")
                    }
                }, {
                    key: "isObject", value: function (t) {
                        return "[object Object]" === Object.prototype.toString.call(t)
                    }
                }, {
                    key: "isFormData", value: function (t) {
                        return t instanceof FormData
                    }
                }, {
                    key: "isFormElement", value: function (t) {
                        return t instanceof HTMLFormElement
                    }
                }, {
                    key: "selectFiles", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise(function (e, n) {
                            var r = document.createElement("INPUT");
                            r.type = "file", t.multiple && r.setAttribute("multiple", "multiple"), t.accept && r.setAttribute("accept", t.accept), r.style.display = "none", document.body.appendChild(r), r.addEventListener("change", function (t) {
                                var n = t.target.files;
                                e(n), document.body.removeChild(r)
                            }, !1), r.click()
                        })
                    }
                }, {
                    key: "parseHeaders", value: function (t) {
                        var e = t.trim().split(/[\r\n]+/), n = {};
                        return e.forEach(function (t) {
                            var e = t.split(": "), r = e.shift(), o = e.join(": ");
                            r && (n[r] = o)
                        }), n
                    }
                }]) && r(e, n), t
            }()
        }, function (t, e) {
            var n = function (t) {
                return encodeURIComponent(t).replace(/[!'()*]/g, escape).replace(/%20/g, "+")
            }, r = function (t, e, o, i) {
                return e = e || null, o = o || "&", i = i || null, t ? function (t) {
                    for (var e = new Array, n = 0; n < t.length; n++) t[n] && e.push(t[n]);
                    return e
                }(Object.keys(t).map(function (a) {
                    var s, u, c = a;
                    if (i && (c = i + "[" + c + "]"), "object" == typeof t[a] && null !== t[a]) s = r(t[a], null, o, c); else {
                        e && (u = c, c = !isNaN(parseFloat(u)) && isFinite(u) ? e + Number(c) : c);
                        var l = t[a];
                        l = (l = 0 === (l = !1 === (l = !0 === l ? "1" : l) ? "0" : l) ? "0" : l) || "", s = n(c) + "=" + n(l)
                    }
                    return s
                })).join(o).replace(/[!'()*]/g, "") : ""
            };
            t.exports = r
        }])
    }, function (t, e, n) {
        t.exports = n(12)
    }, function (t, e) {
        function n(t, e, n, r, o, i, a) {
            try {
                var s = t[i](a), u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, o)
        }

        t.exports = function (t) {
            return function () {
                var e = this, r = arguments;
                return new Promise(function (o, i) {
                    var a = t.apply(e, r);

                    function s(t) {
                        n(a, o, i, s, u, "next", t)
                    }

                    function u(t) {
                        n(a, o, i, s, u, "throw", t)
                    }

                    s(void 0)
                })
            }
        }
    }, function (t, e, n) {
        var r = n(19), o = n(20), i = n(21);
        t.exports = function (t) {
            return r(t) || o(t) || i()
        }
    }, function (t, e) {
        t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>'
    }, function (t, e, n) {
        var r = n(22), o = n(23), i = n(24);
        t.exports = function (t, e) {
            return r(t) || o(t, e) || i()
        }
    }, function (t, e, n) {
        var r = function () {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
            i = o && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, t.exports = n(13), o) r.regeneratorRuntime = i; else try {
            delete r.regeneratorRuntime
        } catch (t) {
            r.regeneratorRuntime = void 0
        }
    }, function (t, e) {
        !function (e) {
            "use strict";
            var n, r = Object.prototype, o = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator",
                u = i.toStringTag || "@@toStringTag", c = "object" == typeof t, l = e.regeneratorRuntime;
            if (l) c && (t.exports = l); else {
                (l = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
                var f = "suspendedStart", d = "suspendedYield", p = "executing", h = "completed", m = {}, g = {};
                g[a] = function () {
                    return this
                };
                var v = Object.getPrototypeOf, y = v && v(v(F([])));
                y && y !== r && o.call(y, a) && (g = y);
                var b = S.prototype = E.prototype = Object.create(g);
                _.prototype = b.constructor = S, S.constructor = _, S[u] = _.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
                }, l.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t
                }, l.awrap = function (t) {
                    return {__await: t}
                }, k(T.prototype), T.prototype[s] = function () {
                    return this
                }, l.AsyncIterator = T, l.async = function (t, e, n, r) {
                    var o = new T(w(t, e, n, r));
                    return l.isGeneratorFunction(e) ? o : o.next().then(function (t) {
                        return t.done ? t.value : o.next()
                    })
                }, k(b), b[u] = "Generator", b[a] = function () {
                    return this
                }, b.toString = function () {
                    return "[object Generator]"
                }, l.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(), function n() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
                }, l.values = F, C.prototype = {
                    constructor: C, reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(O), !t) for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                    }, stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    }, dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(r, o) {
                            return s.type = "throw", s.arg = t, e.next = r, o && (e.method = "next", e.arg = n), !!o
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i], s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var u = o.call(a, "catchLoc"), c = o.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(a)
                    }, complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
                    }, finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), m
                        }
                    }, catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: F(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), m
                    }
                }
            }

            function w(t, e, n, r) {
                var o = e && e.prototype instanceof E ? e : E, i = Object.create(o.prototype), a = new C(r || []);
                return i._invoke = function (t, e, n) {
                    var r = f;
                    return function (o, i) {
                        if (r === p) throw new Error("Generator is already running");
                        if (r === h) {
                            if ("throw" === o) throw i;
                            return P()
                        }
                        for (n.method = o, n.arg = i; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = L(a, n);
                                if (s) {
                                    if (s === m) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (r === f) throw r = h, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = p;
                            var u = x(t, e, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? h : d, u.arg === m) continue;
                                return {value: u.arg, done: n.done}
                            }
                            "throw" === u.type && (r = h, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), i
            }

            function x(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function E() {
            }

            function _() {
            }

            function S() {
            }

            function k(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function T(t) {
                var e;
                this._invoke = function (n, r) {
                    function i() {
                        return new Promise(function (e, i) {
                            !function e(n, r, i, a) {
                                var s = x(t[n], t, r);
                                if ("throw" !== s.type) {
                                    var u = s.arg, c = u.value;
                                    return c && "object" == typeof c && o.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                                        e("next", t, i, a)
                                    }, function (t) {
                                        e("throw", t, i, a)
                                    }) : Promise.resolve(c).then(function (t) {
                                        u.value = t, i(u)
                                    }, function (t) {
                                        return e("throw", t, i, a)
                                    })
                                }
                                a(s.arg)
                            }(n, r, e, i)
                        })
                    }

                    return e = e ? e.then(i, i) : i()
                }
            }

            function L(t, e) {
                var r = t.iterator[e.method];
                if (r === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, L(t, e), "throw" === e.method)) return m;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return m
                }
                var o = x(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, m;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, m) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, m)
            }

            function j(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function O(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function C(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(j, this), this.reset(!0)
            }

            function F(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, i = function e() {
                            for (; ++r < t.length;) if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = n, e.done = !0, e
                        };
                        return i.next = i
                    }
                }
                return {next: P}
            }

            function P() {
                return {value: n, done: !0}
            }
        }(function () {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    }, function (t, e, n) {
        var r = n(15);
        "string" == typeof r && (r = [[t.i, r, ""]]);
        var o = {hmr: !0, transform: void 0, insertInto: void 0};
        n(17)(r, o);
        r.locals && (t.exports = r.locals)
    }, function (t, e, n) {
        (t.exports = n(16)(!1)).push([t.i, '.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n', ""])
    }, function (t, e) {
        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map(function (e) {
                    var n = function (t, e) {
                        var n = t[1] || "", r = t[3];
                        if (!r) return n;
                        if (e && "function" == typeof btoa) {
                            var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                i = r.sources.map(function (t) {
                                    return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var a;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    }, function (t, e, n) {
        var r, o, i = {}, a = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }), s = function (t) {
            var e = {};
            return function (t) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var n = function (t) {
                        return document.querySelector(t)
                    }.call(this, t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    e[t] = n
                }
                return e[t]
            }
        }(), u = null, c = 0, l = [], f = n(18);

        function d(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n], o = i[r.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                    for (; a < r.parts.length; a++) o.parts.push(y(r.parts[a], e))
                } else {
                    var s = [];
                    for (a = 0; a < r.parts.length; a++) s.push(y(r.parts[a], e));
                    i[r.id] = {id: r.id, refs: 1, parts: s}
                }
            }
        }

        function p(t, e) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o], a = e.base ? i[0] + e.base : i[0], s = {css: i[1], media: i[2], sourceMap: i[3]};
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
            }
            return n
        }

        function h(t, e) {
            var n = s(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = l[l.length - 1];
            if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = s(t.insertInto + " " + t.insertAt.before);
                n.insertBefore(e, o)
            }
        }

        function m(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = l.indexOf(t);
            e >= 0 && l.splice(e, 1)
        }

        function g(t) {
            var e = document.createElement("style");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), v(e, t.attrs), h(t, e), e
        }

        function v(t, e) {
            Object.keys(e).forEach(function (n) {
                t.setAttribute(n, e[n])
            })
        }

        function y(t, e) {
            var n, r, o, i;
            if (e.transform && t.css) {
                if (!(i = e.transform(t.css))) return function () {
                };
                t.css = i
            }
            if (e.singleton) {
                var a = c++;
                n = u || (u = g(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), h(t, e), e
            }(e), r = function (t, e, n) {
                var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = f(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([r], {type: "text/css"}), s = t.href;
                t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, n, e), o = function () {
                m(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = g(e), r = function (t, e) {
                var n = e.css, r = e.media;
                r && t.setAttribute("media", r);
                if (t.styleSheet) t.styleSheet.cssText = n; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function () {
                m(n)
            });
            return r(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else o()
            }
        }

        t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = p(t, e);
            return d(n, e), function (t) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--, r.push(s)
                }
                t && d(p(t, e), e);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                        delete i[s.id]
                    }
                }
            }
        };
        var b, w = (b = [], function (t, e) {
            return b[t] = e, b.filter(Boolean).join("\n")
        });

        function x(t, e, n, r) {
            var o = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = w(e, o); else {
                var i = document.createTextNode(o), a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host, r = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                var o, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e
                }).replace(/^'(.*)'$/, function (t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }
    }, function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
    }, function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(3), o = n.n(r), i = n(4), a = n.n(i), s = n(1), u = n.n(s), c = n(0), l = n.n(c), f = (n(14), n(5)),
            d = n.n(f), p = n(6), h = n.n(p), m = function () {
                function t(e) {
                    var n = e.api, r = e.config, o = e.onSelectFile;
                    u()(this, t), this.api = n, this.config = r, this.onSelectFile = o, this.nodes = {
                        wrapper: g("div", [this.CSS.baseClass, this.CSS.wrapper]),
                        imageContainer: g("div", [this.CSS.imageContainer]),
                        fileButton: this.createFileButton(),
                        imageEl: void 0,
                        imagePreloader: g("div", this.CSS.imagePreloader),
                        caption: g("div", [this.CSS.input, this.CSS.caption], {contentEditable: !0})
                    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton)
                }

                return l()(t, [{
                    key: "render", value: function (e) {
                        return e.file && 0 !== Object.keys(e.file).length ? this.toggleStatus(t.status.UPLOADING) : this.toggleStatus(t.status.EMPTY), this.nodes.wrapper
                    }
                }, {
                    key: "createFileButton", value: function () {
                        var t = this, e = g("div", [this.CSS.button]);
                        return e.innerHTML = this.config.buttonContent || "".concat(h.a, " Select an Image"), e.addEventListener("click", function () {
                            t.onSelectFile()
                        }), e
                    }
                }, {
                    key: "showPreloader", value: function (e) {
                        this.nodes.imagePreloader.style.backgroundImage = "url(".concat(e, ")"), this.toggleStatus(t.status.UPLOADING)
                    }
                }, {
                    key: "hidePreloader", value: function () {
                        this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(t.status.EMPTY)
                    }
                }, {
                    key: "fillImage", value: function (e) {
                        var n = this, r = /\.mp4$/.test(e) ? "VIDEO" : "IMG", o = {src: e}, i = "load";
                        "VIDEO" === r && (o.autoplay = !0, o.loop = !0, o.muted = !0, o.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = g(r, this.CSS.imageEl, o), this.nodes.imageEl.addEventListener(i, function () {
                            n.toggleStatus(t.status.FILLED), n.nodes.imagePreloader && (n.nodes.imagePreloader.style.backgroundImage = "")
                        }), this.nodes.imageContainer.appendChild(this.nodes.imageEl)
                    }
                }, {
                    key: "fillCaption", value: function (t) {
                        this.nodes.caption && (this.nodes.caption.innerHTML = t)
                    }
                }, {
                    key: "toggleStatus", value: function (e) {
                        for (var n in t.status) t.status.hasOwnProperty(n) && this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t.status[n]), e === t.status[n])
                    }
                }, {
                    key: "applyTune", value: function (t, e) {
                        this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t), e)
                    }
                }, {
                    key: "CSS", get: function () {
                        return {
                            baseClass: this.api.styles.block,
                            loading: this.api.styles.loader,
                            input: this.api.styles.input,
                            button: this.api.styles.button,
                            wrapper: "image-tool",
                            imageContainer: "image-tool__image",
                            imagePreloader: "image-tool__image-preloader",
                            imageEl: "image-tool__image-picture",
                            caption: "image-tool__caption"
                        }
                    }
                }], [{
                    key: "status", get: function () {
                        return {EMPTY: "empty", UPLOADING: "loading", FILLED: "filled"}
                    }
                }]), t
            }(), g = function (t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(t);
                Array.isArray(n) ? (e = o.classList).add.apply(e, d()(n)) : n && o.classList.add(n);
                for (var i in r) o[i] = r[i];
                return o
            }, v = n(7), y = n.n(v), b = n(8), w = n.n(b), x = n(9), E = n.n(x), _ = function () {
                function t(e) {
                    var n = e.api, r = e.onChange;
                    u()(this, t), this.api = n, this.onChange = r, this.buttons = []
                }

                return l()(t, [{
                    key: "render", value: function (e) {
                        var n = this, r = g("div", this.CSS.wrapper);
                        return this.buttons = [], t.tunes.forEach(function (t) {
                            var o = g("div", [n.CSS.buttonBase, n.CSS.button], {innerHTML: t.icon, title: t.title});
                            o.addEventListener("click", function () {
                                n.tuneClicked(t.name)
                            }), o.dataset.tune = t.name, o.classList.toggle(n.CSS.buttonActive, e[t.name]), n.buttons.push(o), r.appendChild(o)
                        }), r
                    }
                }, {
                    key: "tuneClicked", value: function (t) {
                        var e = this.buttons.find(function (e) {
                            return e.dataset.tune === t
                        });
                        e.classList.toggle(this.CSS.buttonActive, !e.classList.contains(this.CSS.buttonActive)), this.onChange(t)
                    }
                }, {
                    key: "CSS", get: function () {
                        return {
                            wrapper: "",
                            buttonBase: this.api.styles.settingsButton,
                            button: "image-tool__tune",
                            buttonActive: this.api.styles.settingsButtonActive
                        }
                    }
                }], [{
                    key: "tunes", get: function () {
                        return [{name: "withBorder", icon: w.a, title: "With border"}, {
                            name: "stretched",
                            icon: E.a,
                            title: "Stretch image"
                        }, {name: "withBackground", icon: y.a, title: "With background"}]
                    }
                }]), t
            }(), S = n(10), k = n.n(S), T = n(11), L = n.n(T), j = n(2), O = n.n(j), C = function () {
                function t(e) {
                    var n = e.config, r = e.onUpload, o = e.onError;
                    u()(this, t), this.config = n, this.onUpload = r, this.onError = o
                }

                return l()(t, [{
                    key: "uploadSelectedFile", value: function (t) {
                        var e = this, n = t.onPreview, r = function (t) {
                            var e = new FileReader;
                            e.readAsDataURL(t), e.onload = function (t) {
                                n(t.target.result)
                            }
                        };
                        (this.config.uploader && "function" == typeof this.config.uploader.uploadByFile ? O.a.selectFiles({accept: this.config.types}).then(function (t) {
                            r(t[0]);
                            var n = e.config.uploader.uploadByFile(t[0]);
                            return F(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n
                        }) : O.a.transport({
                            url: this.config.endpoints.byFile,
                            data: this.config.additionalRequestData,
                            accept: this.config.types,
                            headers: this.config.additionalRequestHeaders,
                            beforeSend: function (t) {
                                r(t[0])
                            },
                            fieldName: this.config.field
                        }).then(function (t) {
                            return t.body
                        })).then(function (t) {
                            e.onUpload(t)
                        }).catch(function (t) {
                            e.onError(t)
                        })
                    }
                }, {
                    key: "uploadByUrl", value: function (t) {
                        var e, n = this;
                        this.config.uploader && "function" == typeof this.config.uploader.uploadByUrl ? F(e = this.config.uploader.uploadByUrl(t)) || console.warn("Custom uploader method uploadByUrl should return a Promise") : e = O.a.post({
                            url: this.config.endpoints.byUrl,
                            data: Object.assign({url: t}, this.config.additionalRequestData),
                            type: O.a.contentType.JSON,
                            headers: this.config.additionalRequestHeaders
                        }).then(function (t) {
                            return t.body
                        }), e.then(function (t) {
                            n.onUpload(t)
                        }).catch(function (t) {
                            n.onError(t)
                        })
                    }
                }, {
                    key: "uploadByFile", value: function (t, e) {
                        var n, r = this, o = e.onPreview, i = new FileReader;
                        if (i.readAsDataURL(t), i.onload = function (t) {
                            o(t.target.result)
                        }, this.config.uploader && "function" == typeof this.config.uploader.uploadByFile) F(n = this.config.uploader.uploadByFile(t)) || console.warn("Custom uploader method uploadByFile should return a Promise"); else {
                            var a = new FormData;
                            a.append(this.config.field, t), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(function (t) {
                                var e = L()(t, 2), n = e[0], r = e[1];
                                a.append(n, r)
                            }), n = O.a.post({
                                url: this.config.endpoints.byFile,
                                data: a,
                                type: O.a.contentType.JSON,
                                headers: this.config.additionalRequestHeaders
                            }).then(function (t) {
                                return t.body
                            })
                        }
                        n.then(function (t) {
                            r.onUpload(t)
                        }).catch(function (t) {
                            r.onError(t)
                        })
                    }
                }]), t
            }();

        function F(t) {
            return Promise.resolve(t) === t
        }

        n.d(e, "default", function () {
            return P
        });
        /**
         * Image Tool for the Editor.js
         * @author CodeX <team@ifmo.su>
         * @license MIT
         * @see {@link https://github.com/editor-js/image}
         *
         * To developers.
         * To simplify Tool structure, we split it to 4 parts:
         *  1) index.js — main Tool's interface, public API and methods for working with data
         *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
         *  3) ui.js — module for UI manipulations: render, showing preloader, etc
         *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
         *
         * For debug purposes there is a testing server
         * that can save uploaded files and return a Response {@link UploadResponseFormat}
         *
         *       $ node dev/server.js
         *
         * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
         *
         * image: {
         *   class: ImageTool,
         *   config: {
         *     endpoints: {
         *       byFile: 'http://localhost:8008/uploadFile',
         *       byUrl: 'http://localhost:8008/fetchUrl',
         *     }
         *   },
         * },
         */
        var P = function () {
            function t(e) {
                var n = this, r = e.data, o = e.config, i = e.api;
                u()(this, t), this.api = i, this.config = {
                    endpoints: o.endpoints || "",
                    additionalRequestData: o.additionalRequestData || {},
                    additionalRequestHeaders: o.additionalRequestHeaders || {},
                    field: o.field || "image",
                    types: o.types || "image/*",
                    captionPlaceholder: o.captionPlaceholder || "Caption",
                    buttonContent: o.buttonContent || "",
                    uploader: o.uploader || void 0
                }, this.uploader = new C({
                    config: this.config, onUpload: function (t) {
                        return n.onUpload(t)
                    }, onError: function (t) {
                        return n.uploadingFailed(t)
                    }
                }), this.ui = new m({
                    api: i, config: this.config, onSelectFile: function () {
                        n.uploader.uploadSelectedFile({
                            onPreview: function (t) {
                                n.ui.showPreloader(t)
                            }
                        })
                    }
                }), this.tunes = new _({
                    api: i, onChange: function (t) {
                        return n.tuneToggled(t)
                    }
                }), this._data = {}, this.data = r
            }

            return l()(t, null, [{
                key: "toolbox", get: function () {
                    return {icon: k.a, title: "Image"}
                }
            }]), l()(t, [{
                key: "render", value: function () {
                    return this.ui.render(this.data)
                }
            }, {
                key: "save", value: function () {
                    var t = this.ui.nodes.caption;
                    return this._data.caption = t.innerHTML, this.data
                }
            }, {
                key: "renderSettings", value: function () {
                    return this.tunes.render(this.data)
                }
            }, {
                key: "appendCallback", value: function () {
                    this.ui.nodes.fileButton.click()
                }
            }, {
                key: "onPaste", value: function () {
                    var t = a()(o.a.mark(function t(e) {
                        var n, r, i, a, s;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    t.t0 = e.type, t.next = "tag" === t.t0 ? 3 : "pattern" === t.t0 ? 15 : "file" === t.t0 ? 18 : 21;
                                    break;
                                case 3:
                                    if (n = e.detail.data, !/^blob:/.test(n.src)) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 7, fetch(n.src);
                                case 7:
                                    return r = t.sent, t.next = 10, r.blob();
                                case 10:
                                    return i = t.sent, this.uploadFile(i), t.abrupt("break", 21);
                                case 13:
                                    return this.uploadUrl(n.src), t.abrupt("break", 21);
                                case 15:
                                    return a = e.detail.data, this.uploadUrl(a), t.abrupt("break", 21);
                                case 18:
                                    return s = e.detail.file, this.uploadFile(s), t.abrupt("break", 21);
                                case 21:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "onUpload", value: function (t) {
                    t.success && t.file ? this.image = t.file : this.uploadingFailed("incorrect response: " + JSON.stringify(t))
                }
            }, {
                key: "uploadingFailed", value: function (t) {
                    console.log("Image Tool: uploading failed because of", t), this.api.notifier.show({
                        message: "Can not upload an image, try another",
                        style: "error"
                    }), this.ui.hidePreloader()
                }
            }, {
                key: "tuneToggled", value: function (t) {
                    this.setTune(t, !this._data[t])
                }
            }, {
                key: "setTune", value: function (t, e) {
                    var n = this;
                    this._data[t] = e, this.ui.applyTune(t, e), "stretched" === t && Promise.resolve().then(function () {
                        var t = n.api.blocks.getCurrentBlockIndex();
                        n.api.blocks.stretchBlock(t, e)
                    }).catch(function (t) {
                        console.error(t)
                    })
                }
            }, {
                key: "uploadFile", value: function (t) {
                    var e = this;
                    this.uploader.uploadByFile(t, {
                        onPreview: function (t) {
                            e.ui.showPreloader(t)
                        }
                    })
                }
            }, {
                key: "uploadUrl", value: function (t) {
                    this.ui.showPreloader(t), this.uploader.uploadByUrl(t)
                }
            }, {
                key: "data", set: function (t) {
                    var e = this;
                    this.image = t.file, this._data.caption = t.caption || "", this.ui.fillCaption(this._data.caption), _.tunes.forEach(function (n) {
                        var r = n.name, o = void 0 !== t[r] && (!0 === t[r] || "true" === t[r]);
                        e.setTune(r, o)
                    })
                }, get: function () {
                    return this._data
                }
            }, {
                key: "image", set: function (t) {
                    this._data.file = t || {}, t && t.url && this.ui.fillImage(t.url)
                }
            }], [{
                key: "pasteConfig", get: function () {
                    return {
                        tags: ["img"],
                        patterns: {image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},
                        files: {mimeTypes: ["image/*"]}
                    }
                }
            }]), t
        }()
    }]).default
});

/***/ }),

/***/ "./node_modules/@editorjs/inline-code/dist/bundle.js":
/*!***********************************************************!*\
  !*** ./node_modules/@editorjs/inline-code/dist/bundle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="CODE",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return o(t,null,[{key:"CSS",get:function(){return"inline-code"}}]),o(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(e){if(e){var n=this.api.selection.findParentTag(this.tag,t.CSS);n?this.unwrap(n):this.wrap(e)}}},{key:"wrap",value:function(e){var n=document.createElement(this.tag);n.classList.add(t.CSS),n.appendChild(e.extractContents()),e.insertNode(n),this.api.selection.expandToTag(n)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var e=window.getSelection(),n=e.getRangeAt(0),r=n.extractContents();t.parentNode.removeChild(t),n.insertNode(r),e.removeAllRanges(),e.addRange(n)}},{key:"checkState",value:function(){var e=this.api.selection.findParentTag(this.tag,t.CSS);this.button.classList.toggle(this.iconClasses.active,!!e)}},{key:"toolboxIcon",get:function(){return n(6).default}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{code:{class:t.CSS}}}}]),t}();t.exports=i},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".inline-code {\n  background: rgba(250, 239, 240, 0.78);\n  color: #b44437;\n  padding: 3px 4px;\n  border-radius: 5px;\n  margin: 0 1px;\n  font-family: inherit;\n  font-size: 0.86em;\n  font-weight: 500;\n  letter-spacing: 0.3px;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],l=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=u||(u=b(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e),e.default='<svg width="17" height="12" viewBox="1 -1 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M17.839 5.525a1.105 1.105 0 0 1-.015 1.547l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.137-4.137-4.078-4.078A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.026.026.05.053.074.08zm-14.952.791l4.137 4.137a1.105 1.105 0 1 1-1.562 1.562L.519 7.072a1.105 1.105 0 0 1-.015-1.547c.023-.028.048-.055.074-.081L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.887 6.316z" id="a"/></svg>\n'}])});

/***/ }),

/***/ "./node_modules/@editorjs/list/dist/bundle.js":
/*!****************************************************!*\
  !*** ./node_modules/@editorjs/list/dist/bundle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n(1).toString();var a=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elements={wrapper:null},this.settings=[{name:"unordered",title:"Unordered",icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',default:!1},{name:"ordered",title:"Ordered",icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',default:!0}],this._data={style:this.settings.find(function(e){return!0===e.default}).name,items:[]},this.api=r,this.data=n}return o(e,null,[{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',title:"List"}}}]),o(e,[{key:"render",value:function(){var e=this,t="ordered"===this._data.style?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered;return this._elements.wrapper=this._make("ul",[this.CSS.baseBlock,this.CSS.wrapper,t],{contentEditable:!0}),this._data.items.length?this._data.items.forEach(function(t){e._elements.wrapper.appendChild(e._make("li",e.CSS.item,{innerHTML:t}))}):this._elements.wrapper.appendChild(this._make("li",this.CSS.item)),this._elements.wrapper.addEventListener("keydown",function(t){switch(t.keyCode){case 13:e.getOutofList(t);break;case 8:e.backspace(t)}},!1),this._elements.wrapper}},{key:"save",value:function(){return this.data}},{key:"renderSettings",value:function(){var e=this,t=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.forEach(function(n){var r=e._make("div",e.CSS.settingsButton,{innerHTML:n.icon});r.addEventListener("click",function(){e.toggleTune(n.name);var t=r.parentNode.querySelectorAll("."+e.CSS.settingsButton);Array.from(t).forEach(function(t){return t.classList.remove(e.CSS.settingsButtonActive)}),r.classList.toggle(e.CSS.settingsButtonActive)}),e._data.style===n.name&&r.classList.add(e.CSS.settingsButtonActive),t.appendChild(r)}),t}},{key:"onPaste",value:function(e){var t=e.detail.data;this.data=this.pasteHandler(t)}},{key:"toggleTune",value:function(e){this._elements.wrapper.classList.toggle(this.CSS.wrapperOrdered,"ordered"===e),this._elements.wrapper.classList.toggle(this.CSS.wrapperUnordered,"unordered"===e),this._data.style=e}},{key:"_make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,r(n)):n&&o.classList.add(n);for(var a in i)o[a]=i[a];return o}},{key:"getOutofList",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item);if(!(t.length<2)){var n=t[t.length-1],r=this.currentItem;r!==n||n.textContent.trim().length||(r.parentElement.removeChild(r),this.api.blocks.insertNewBlock(),e.preventDefault(),e.stopPropagation())}}},{key:"backspace",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item),n=t[0];n&&t.length<2&&!n.innerHTML.replace("<br>"," ").trim()&&e.preventDefault()}},{key:"selectItem",value:function(e){e.preventDefault();var t=window.getSelection(),n=t.anchorNode.parentNode.closest("."+this.CSS.item),r=new Range;r.selectNodeContents(n),t.removeAllRanges(),t.addRange(r)}},{key:"pasteHandler",value:function(e){var t,n=e.tagName;switch(n){case"OL":t="ordered";break;case"UL":case"LI":t="unordered"}var r={type:t,items:[]};if("LI"===n)r.items=[e.innerHTML];else{var i=Array.from(e.querySelectorAll("LI"));r.items=i.map(function(e){return e.innerHTML}).filter(function(e){return!!e.trim()})}return r}},{key:"CSS",get:function(){return{baseBlock:this.api.styles.block,wrapper:"cdx-list",wrapperOrdered:"cdx-list--ordered",wrapperUnordered:"cdx-list--unordered",item:"cdx-list__item",settingsWrapper:"cdx-list-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"data",set:function(e){e||(e={}),this._data.style=e.style||this.settings.find(function(e){return!0===e.default}).name,this._data.items=e.items||[];var t=this._elements.wrapper;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){this._data.items=[];for(var e=this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)),t=0;t<e.length;t++){e[t].innerHTML.replace("<br>"," ").trim()&&this._data.items.push(e[t].innerHTML)}return this._data}},{key:"currentItem",get:function(){var e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest(".".concat(this.CSS.item))}}],[{key:"conversionConfig",get:function(){return{export:function(e){return e.items.join(". ")},import:function(e){return{items:[e],style:"unordered"}}}}},{key:"sanitize",get:function(){return{style:{},items:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["OL","UL","LI"]}}}]),e}();e.exports=a},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n}\n\n    .cdx-list__item {\n        padding: 5.5px 0 5.5px 3px;\n        line-height: 1.6em;\n    }\n\n    .cdx-list--unordered {\n        list-style: disc;\n    }\n\n    .cdx-list--ordered {\n        list-style: decimal;\n    }\n\n    .cdx-list-settings {\n        display: flex;\n    }\n\n    .cdx-list-settings .cdx-settings-button {\n            width: 50%;\n        }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,l=0,u=[],f=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=l++;n=c||(c=v(t)),r=S.bind(null,n,a,!1),i=S.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function S(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/marker/dist/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/@editorjs/marker/dist/bundle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="MARK",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return o(t,null,[{key:"CSS",get:function(){return"cdx-marker"}}]),o(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(e){if(e){var n=this.api.selection.findParentTag(this.tag,t.CSS);n?this.unwrap(n):this.wrap(e)}}},{key:"wrap",value:function(e){var n=document.createElement(this.tag);n.classList.add(t.CSS),n.appendChild(e.extractContents()),e.insertNode(n),this.api.selection.expandToTag(n)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var e=window.getSelection(),n=e.getRangeAt(0),r=n.extractContents();t.parentNode.removeChild(t),n.insertNode(r),e.removeAllRanges(),e.addRange(n)}},{key:"checkState",value:function(){var e=this.api.selection.findParentTag(this.tag,t.CSS);this.button.classList.toggle(this.iconClasses.active,!!e)}},{key:"toolboxIcon",get:function(){return n(6).default}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{mark:{class:t.CSS}}}}]),t}();t.exports=i},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-marker {\n  background: rgba(245,235,111,0.29);\n  padding: 3px 0;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],l=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=u||(u=b(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 13 12" width="13" height="12"><path d="M8.367 9.633L10.7 10.98l-.624 1.135-.787-.025-.78 1.35H6.94l1.193-2.066-.407-.62.642-1.121zm.436-.763l2.899-5.061a1.278 1.278 0 011.746-.472c.617.355.835 1.138.492 1.76l-2.815 5.114-2.322-1.34zM2.62 11.644H5.39a.899.899 0 110 1.798H2.619a.899.899 0 010-1.798z"/></svg>\n'}])});

/***/ }),

/***/ "./node_modules/@editorjs/quote/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/quote/dist/bundle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var a=function(){function t(e){var n=e.data,r=e.config,o=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=t.ALIGNMENTS,a=t.DEFAULT_ALIGNMENT;this.api=o,this.quotePlaceholder=r.quotePlaceholder||t.DEFAULT_QUOTE_PLACEHOLDER,this.captionPlaceholder=r.captionPlaceholder||t.DEFAULT_CAPTION_PLACEHOLDER,this.data={text:n.text||"",caption:n.caption||"",alignment:Object.values(i).includes(n.alignment)&&n.alignment||r.defaultAlignment||a}}return i(t,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption",settingsWrapper:"cdx-quote-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"settings",get:function(){return[{name:"left",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'},{name:"center",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'}]}}],[{key:"toolbox",get:function(){return{icon:'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>',title:"Quote"}}},{key:"contentless",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_QUOTE_PLACEHOLDER",get:function(){return"Enter a quote"}},{key:"DEFAULT_CAPTION_PLACEHOLDER",get:function(){return"Enter a caption"}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center"}}},{key:"DEFAULT_ALIGNMENT",get:function(){return t.ALIGNMENTS.left}},{key:"conversionConfig",get:function(){return{import:"text",export:function(t){return t.caption?"".concat(t.text," — ").concat(t.caption):t.text}}}}]),i(t,[{key:"render",value:function(){var t=this._make("blockquote",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.text],{contentEditable:!0,innerHTML:this.data.text}),n=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!0,innerHTML:this.data.caption});return e.dataset.placeholder=this.quotePlaceholder,n.dataset.placeholder=this.captionPlaceholder,t.appendChild(e),t.appendChild(n),t}},{key:"save",value:function(t){var e=t.querySelector(".".concat(this.CSS.text)),n=t.querySelector(".".concat(this.CSS.caption));return Object.assign(this.data,{text:e.innerHTML,caption:n.innerHTML})}},{key:"renderSettings",value:function(){var t=this,e=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.map(function(n){var r,o=t._make("div",t.CSS.settingsButton,{innerHTML:n.icon,title:"".concat((r=n.name,r[0].toUpperCase()+r.substr(1))," alignment")});return o.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(o),o}).forEach(function(e,n,r){e.addEventListener("click",function(){t._toggleTune(t.settings[n].name),r.forEach(function(e,n){var r=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,r===t.data.alignment)})})}),e}},{key:"_toggleTune",value:function(t){this.data.alignment=t}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,r(n)):n&&i.classList.add(n);for(var a in o)i[a]=o[a];return i}}],[{key:"sanitize",get:function(){return{text:{br:!0},caption:{br:!0},alignment:{}}}}]),t}();t.exports=a},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,l=[],f=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=g(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,x=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/warning/dist/bundle.js":
/*!*******************************************************!*\
  !*** ./node_modules/@editorjs/warning/dist/bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e){t.exports='<svg width="16" height="17" viewBox="0 0 320 294" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z"></path></svg>'},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(0),o=n.n(r);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n(2).toString();var c=function(){function t(e){var n=e.data,r=e.config,o=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=o,this.titlePlaceholder=r.titlePlaceholder||t.DEFAULT_TITLE_PLACEHOLDER,this.messagePlaceholder=r.messagePlaceholder||t.DEFAULT_MESSAGE_PLACEHOLDER,this.data={title:n.title||"",message:n.message||""}}return s(t,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-warning",title:"cdx-warning__title",input:this.api.styles.input,message:"cdx-warning__message"}}}],[{key:"toolbox",get:function(){return{icon:o.a,title:"Warning"}}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_TITLE_PLACEHOLDER",get:function(){return"Title"}},{key:"DEFAULT_MESSAGE_PLACEHOLDER",get:function(){return"Message"}}]),s(t,[{key:"render",value:function(){var t=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.title],{contentEditable:!0,innerHTML:this.data.title}),n=this._make("div",[this.CSS.input,this.CSS.message],{contentEditable:!0,innerHTML:this.data.message});return e.dataset.placeholder=this.titlePlaceholder,n.dataset.placeholder=this.messagePlaceholder,t.appendChild(e),t.appendChild(n),t}},{key:"save",value:function(t){var e=t.querySelector(".".concat(this.CSS.title)),n=t.querySelector(".".concat(this.CSS.message));return Object.assign(this.data,{title:e.innerHTML,message:n.innerHTML})}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);Array.isArray(n)?(e=o.classList).add.apply(e,i(n)):n&&o.classList.add(n);for(var a in r)o[a]=r[a];return o}}],[{key:"sanitize",get:function(){return{title:{},message:{}}}}]),t}()},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".cdx-warning {\n  position: relative;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-warning::before {\n  content: '';\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 320 294' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='%237B7E89' d='M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z'/%3E%3C/svg%3E\");\n  width: 18px;\n  height: 18px;\n  background-size: 18px 18px;\n  position: absolute;\n  margin-top: 12px;\n  left: -30px;\n}\n\n@media all and (max-width: 735px) {\n  .cdx-warning::before {\n    display: none;\n  }\n}\n\n.cdx-warning__message {\n  min-height: 85px;\n}\n\n.cdx-warning__title {\n  margin-bottom: 6px;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],f=n(6);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=g(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Editor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/bundle.js");
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_marker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/bundle.js");
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_delimiter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/inline-code */ "./node_modules/@editorjs/inline-code/dist/bundle.js");
/* harmony import */ var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_inline_code__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/warning */ "./node_modules/@editorjs/warning/dist/bundle.js");
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_warning__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['post', 'csrf'],
  data: function data() {
    return {
      postCurrent: this.post ? JSON.parse(this.post) : '',
      value: null,
      formImg: new FormData()
    };
  },
  methods: {
    save: function save() {
      editor.save().then(function (savedData) {
        axios.post('/post/1/edit', {
          content: savedData
        });
      });
    },
    myEditor: function myEditor() {
      window.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default.a({
        holder: "codex-editor",
        autofocus: true,
        initialBlock: "paragraph",
        data: this.postCurrent,
        tools: {
          header: {
            "class": _editorjs_header__WEBPACK_IMPORTED_MODULE_1___default.a,
            inlineToolbar: true,
            config: {
              placeholder: 'Enter a header',
              levels: [1, 2, 3, 4, 5],
              defaultLevel: 3
            }
          },
          list: {
            "class": _editorjs_list__WEBPACK_IMPORTED_MODULE_2___default.a,
            inlineToolbar: true
          },
          image: {
            "class": _editorjs_image__WEBPACK_IMPORTED_MODULE_3___default.a,
            config: {
              endpoints: {
                accept: 'image/*',
                byFile: '/post/edit/img',
                byUrl: '/post/edit/img'
              },
              additionalRequestHeaders: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': this.csrf
              }
            }
          },
          Marker: {
            "class": _editorjs_marker__WEBPACK_IMPORTED_MODULE_4___default.a,
            shortcut: 'CMD+SHIFT+M'
          },
          delimiter: {
            "class": _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_5___default.a,
            shortcut: 'CMD+SHIFT+D'
          },
          inlineCode: {
            "class": _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_6___default.a,
            shortcut: 'CMD+SHIFT+I'
          },
          warning: {
            "class": _editorjs_warning__WEBPACK_IMPORTED_MODULE_7___default.a,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
              titlePlaceholder: 'Tiêu đề',
              messagePlaceholder: 'Nội dung'
            }
          },
          quote: {
            "class": _editorjs_quote__WEBPACK_IMPORTED_MODULE_8___default.a,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author'
            }
          }
        },
        onReady: function onReady() {
          console.log("ready");
        },
        onChange: function onChange() {
          console.log("change");
        }
      });
    }
  },
  mounted: function mounted() {
    this.myEditor();
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editor.vue?vue&type=template&id=1dbb5118&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Editor.vue?vue&type=template&id=1dbb5118&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8 mx-auto shadow p3" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "button",
            {
              staticStyle: { "margin-left": "30%" },
              attrs: { type: "button", name: "button" },
              on: {
                click: function($event) {
                  return _vm.save()
                }
              }
            },
            [_vm._v("save")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "editorx_body" }, [
            _c("pre", [_vm._v(_vm._s(_vm.value))])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", { staticStyle: { "text-align": "center" } }, [
        _vm._v("This is vue editor.js ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "editorx_body" }, [
      _c("div", { attrs: { id: "codex-editor" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/components/Editor.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Editor.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor_vue_vue_type_template_id_1dbb5118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=1dbb5118&scoped=true& */ "./resources/js/components/Editor.vue?vue&type=template&id=1dbb5118&scoped=true&");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "./resources/js/components/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_1dbb5118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_1dbb5118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1dbb5118",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Editor.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Editor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Editor.vue?vue&type=template&id=1dbb5118&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Editor.vue?vue&type=template&id=1dbb5118&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_1dbb5118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=1dbb5118&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editor.vue?vue&type=template&id=1dbb5118&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_1dbb5118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_1dbb5118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/tool/editor.js":
/*!*************************************!*\
  !*** ./resources/js/tool/editor.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('editor', __webpack_require__(/*! ../components/Editor */ "./resources/js/components/Editor.vue")["default"]);
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app-frontend'
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/tool/editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/forek/editor/resources/js/tool/editor.js */"./resources/js/tool/editor.js");


/***/ })

/******/ });