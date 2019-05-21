/*
@license

dhtmlxGantt v.6.1.2 Professional
This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
Gantt.plugin(function(t){!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/codebase/",o(o.s=214)}({0:function(t,e,o){var n,r=o(3);t.exports={copy:function t(e){var o,n;if(e&&"object"==typeof e)switch(!0){case r.isDate(e):n=new Date(e);break;case r.isArray(e):for(n=new Array(e.length),o=0;o<e.length;o++)n[o]=t(e[o]);break;case r.isStringObject(e):n=new String(e);break;case r.isNumberObject(e):n=new Number(e);break;case r.isBooleanObject(e):n=new Boolean(e);break;default:for(o in n={},e)Object.prototype.hasOwnProperty.apply(e,[o])&&(n[o]=t(e[o]))}return n||e},defined:function(t){return void 0!==t},mixin:function(t,e,o){for(var n in e)(void 0===t[n]||o)&&(t[n]=e[n]);return t},uid:function(){return n||(n=(new Date).valueOf()),++n},bind:function(t,e){return t.bind?t.bind(e):function(){return t.apply(e,arguments)}},event:function(t,e,o,n){t.addEventListener?t.addEventListener(e,o,void 0!==n&&n):t.attachEvent&&t.attachEvent("on"+e,o)},eventRemove:function(t,e,o,n){t.removeEventListener?t.removeEventListener(e,o,void 0!==n&&n):t.detachEvent&&t.detachEvent("on"+e,o)}}},1:function(t,e){function o(t){var e=0,o=0,n=0,r=0;if(t.getBoundingClientRect){var i=t.getBoundingClientRect(),c=document.body,a=document.documentElement||document.body.parentNode||document.body,u=window.pageYOffset||a.scrollTop||c.scrollTop,l=window.pageXOffset||a.scrollLeft||c.scrollLeft,s=a.clientTop||c.clientTop||0,f=a.clientLeft||c.clientLeft||0;e=i.top+u-s,o=i.left+l-f,n=document.body.offsetWidth-i.right,r=document.body.offsetHeight-i.bottom}else{for(;t;)e+=parseInt(t.offsetTop,10),o+=parseInt(t.offsetLeft,10),t=t.offsetParent;n=document.body.offsetWidth-t.offsetWidth-o,r=document.body.offsetHeight-t.offsetHeight-e}return{y:Math.round(e),x:Math.round(o),width:t.offsetWidth,height:t.offsetHeight,right:Math.round(n),bottom:Math.round(r)}}function n(t){var e=!1,o=!1;if(window.getComputedStyle){var n=window.getComputedStyle(t,null);e=n.display,o=n.visibility}else t.currentStyle&&(e=t.currentStyle.display,o=t.currentStyle.visibility);return"none"!=e&&"hidden"!=o}function r(t){return!isNaN(t.getAttribute("tabindex"))&&1*t.getAttribute("tabindex")>=0}function i(t){return!{a:!0,area:!0}[t.nodeName.loLowerCase()]||!!t.getAttribute("href")}function c(t){return!{input:!0,select:!0,textarea:!0,button:!0,object:!0}[t.nodeName.toLowerCase()]||!t.hasAttribute("disabled")}function a(t){if(!t)return"";var e=t.className||"";return e.baseVal&&(e=e.baseVal),e.indexOf||(e=""),s(e)}var u=document.createElement("div");function l(t){return t.tagName?t:(t=t||window.event).target||t.srcElement}function s(t){return(String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")}).apply(t)}t.exports={getNodePosition:o,getFocusableNodes:function(t){for(var e=t.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),o=Array.prototype.slice.call(e,0),a=0;a<o.length;a++){var u=o[a];(r(u)||c(u)||i(u))&&n(u)||(o.splice(a,1),a--)}return o},getScrollSize:function(){var t=document.createElement("div");t.style.cssText="visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},getClassName:a,addClassName:function(t,e){e&&-1===t.className.indexOf(e)&&(t.className+=" "+e)},removeClassName:function(t,e){e=e.split(" ");for(var o=0;o<e.length;o++){var n=new RegExp("\\s?\\b"+e[o]+"\\b(?![-_.])","");t.className=t.className.replace(n,"")}},insertNode:function(t,e){u.innerHTML=e;var o=u.firstChild;return t.appendChild(o),o},removeNode:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},getChildNodes:function(t,e){for(var o=t.childNodes,n=o.length,r=[],i=0;i<n;i++){var c=o[i];c.className&&-1!==c.className.indexOf(e)&&r.push(c)}return r},toNode:function(t){return"string"==typeof t?document.getElementById(t)||document.querySelector(t)||document.body:t||document.body},locateClassName:function(t,e,o){var n=l(t),r="";for(void 0===o&&(o=!0);n;){if(r=a(n)){var i=r.indexOf(e);if(i>=0){if(!o)return n;var c=0===i||!s(r.charAt(i-1)),u=i+e.length>=r.length||!s(r.charAt(i+e.length));if(c&&u)return n}}n=n.parentNode}return null},locateAttribute:function(t,e){if(e){for(var o=l(t);o;){if(o.getAttribute&&o.getAttribute(e))return o;o=o.parentNode}return null}},getTargetNode:l,getRelativeEventPosition:function(t,e){var n=document.documentElement,r=o(e);return{x:t.clientX+n.scrollLeft-n.clientLeft-r.x+e.scrollLeft,y:t.clientY+n.scrollTop-n.clientTop-r.y+e.scrollTop}},isChildOf:function(t,e){if(!t||!e)return!1;for(;t&&t!=e;)t=t.parentNode;return t===e},hasClass:function(t,e){return"classList"in t?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)},closest:function(t,e){if(t.closest)return t.closest(e);if(t.matches||t.msMatchesSelector||t.webkitMatchesSelector){var o=t;if(!document.documentElement.contains(o))return null;do{if((o.matches||o.msMatchesSelector||o.webkitMatchesSelector).call(o,e))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null}return console.error("Your browser is not supported"),null}}},212:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n(1),i=function(){function e(){}return e.prototype.getNode=function(){return this._tooltipNode||(this._tooltipNode=document.createElement("div"),this._tooltipNode.className="gantt_tooltip",t._waiAria.tooltipAttr(this._tooltipNode)),this._tooltipNode},e.prototype.setViewport=function(t){return this._root=t,this},e.prototype.show=function(e,o){var n=document.body,i=this.getNode();if(r.isChildOf(i,n)||(this.hide(),n.appendChild(i)),e instanceof MouseEvent){var c=this._calculateTooltipPosition(e);o=c.top,e=c.left}return i.style.top=o+"px",i.style.left=e+"px",t._waiAria.tooltipVisibleAttr(i),this},e.prototype.hide=function(){var e=this.getNode();return e&&e.parentNode&&e.parentNode.removeChild(e),t._waiAria.tooltipHiddenAttr(e),this},e.prototype.setContent=function(t){return this.getNode().innerHTML=t,this},e.prototype._getViewPort=function(){return this._root||document.body},e.prototype._calculateTooltipPosition=function(e){var o=this._getViewPortSize(),n=this.getNode(),i={top:0,left:0,width:n.offsetWidth,height:n.offsetHeight,bottom:0,right:0},c=t.config.tooltip_offset_x,a=t.config.tooltip_offset_y,u=document.body,l=r.getRelativeEventPosition(e,u);return i.top=l.y,i.left=l.x,i.top+=a,i.left+=c,i.bottom=i.top+i.height,i.right=i.left+i.width,i.top<o.top?(i.top=o.top,i.bottom=i.top+i.height):i.bottom>o.bottom&&(i.bottom=o.bottom,i.top=i.bottom-i.height),i.left<o.left?(i.left=o.left,i.right=o.left+i.width):i.right>o.right&&(i.right=o.right,i.left=i.right-i.width),l.x>=i.left&&l.x<=i.right&&(i.left=l.x-i.width-c,i.right=i.left+i.width),l.y>=i.top&&l.y<=i.bottom&&(i.top=l.y-i.height-a,i.bottom=i.top+i.height),i},e.prototype._getViewPortSize=function(){var e,o=this._getViewPort(),n=o,i=window.scrollY+document.body.scrollTop,c=window.scrollX+document.body.scrollLeft;return o===t.$task_data?(n=t.$task,i=0,c=0,e=r.getNodePosition(t.$task)):e=r.getNodePosition(n),{left:e.x+c,top:e.y+i,width:e.width,height:e.height,bottom:e.y+e.height+i,right:e.x+e.width+c}},e}();o.Tooltip=i},213:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n(1),i=n(3),c=n(0),a=n(212),u=function(){function e(){this.tooltip=new a.Tooltip,this._listeners={}}return e.prototype.attach=function(e){var o=this,n=document.body;e.global||(n=t.$root);var i=null,a=function(t){var n=r.getTargetNode(t),c=r.closest(n,e.selector);r.isChildOf(n,o.tooltip.getNode())||(i?c?e.onmousemove(t,c):(e.onmouseleave(t,i),i=null):c&&(i=c,e.onmouseenter(t,c)))};this.detach(e.selector),c.event(n,"mousemove",a),this._listeners[e.selector]={node:n,handler:a}},e.prototype.detach=function(t){var e=this._listeners[t];e&&c.eventRemove(e.node,"mousemove",e.handler)},e.prototype.tooltipFor=function(e){var o=this,n=function(t){var e=t;return document.createEventObject&&!document.createEvent&&(e=document.createEventObject(t)),e},r=i.delay(function(t,e){o.tooltip.setContent(e),o.tooltip.show(t)},t.config.tooltip_timeout||1),c=i.delay(function(){r.$cancelTimeout(),o.tooltip.hide()},t.config.tooltip_hide_timeout||1);this.attach({selector:e.selector,global:e.global,onmouseenter:function(t,o){var i=e.html(t,o);i&&r(n(t),i)},onmousemove:function(t,o){var i=e.html(t,o);i?r(n(t),i):(r.$cancelTimeout(),c())},onmouseleave:function(){r.$cancelTimeout(),c()}})},e}();o.TooltipManager=u},214:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t.config.tooltip_timeout=30,t.config.tooltip_offset_y=20,t.config.tooltip_offset_x=10,t.config.tooltip_hide_timeout=30;var r=new(n(213).TooltipManager);t.ext.tooltips=r,t.attachEvent("onGanttReady",function(){r.tooltipFor({selector:"["+t.config.task_attribute+"]:not(.gantt_task_row)",html:function(e){if(!t.config.touch||t.config.touch_tooltip){var o=t.locate(e);if(t.isTaskExists(o)){var n=t.getTask(o);return t.templates.tooltip_text(n.start_date,n.end_date,n)}return null}},global:!1})})},3:function(t,e){var o={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};function n(t,e){var o=[];if(t.filter)return t.filter(e);for(var n=0;n<t.length;n++)e(t[n],n)&&(o[o.length]=t[n]);return o}t.exports={getSecondsInUnit:function(t){return o[t]||o.hour},forEach:function(t,e){if(t.forEach)t.forEach(e);else for(var o=t.slice(),n=0;n<o.length;n++)e(o[n],n)},arrayMap:function(t,e){if(t.map)return t.map(e);for(var o=t.slice(),n=[],r=0;r<o.length;r++)n.push(e(o[r],r));return n},arrayFind:function(t,e){if(t.find)return t.find(e);for(var o=0;o<t.length;o++)if(e(t[o],o))return t[o]},arrayFilter:n,arrayDifference:function(t,e){return n(t,function(t,o){return!e(t,o)})},arraySome:function(t,e){if(0===t.length)return!1;for(var o=0;o<t.length;o++)if(e(t[o],o,t))return!0;return!1},hashToArray:function(t){var e=[];for(var o in t)t.hasOwnProperty(o)&&e.push(t[o]);return e},sortArrayOfHash:function(t,e,o){var n=function(t,e){return t<e};t.sort(function(t,r){return t[e]===r[e]?0:o?n(t[e],r[e]):n(r[e],t[e])})},throttle:function(t,e){var o=!1;return function(){o||(t.apply(null,arguments),o=!0,setTimeout(function(){o=!1},e))}},isArray:function(t){return Array.isArray?Array.isArray(t):t&&void 0!==t.length&&t.pop&&t.push},isDate:function(t){return!(!t||"object"!=typeof t||!(t.getFullYear&&t.getMonth&&t.getDate))},isStringObject:function(t){return t&&"object"==typeof t&&"function String() { [native code] }"===Function.prototype.toString.call(t.constructor)},isNumberObject:function(t){return t&&"object"==typeof t&&"function Number() { [native code] }"===Function.prototype.toString.call(t.constructor)},isBooleanObject:function(t){return t&&"object"==typeof t&&"function Boolean() { [native code] }"===Function.prototype.toString.call(t.constructor)},delay:function(t,e){var o,n=function(){n.$cancelTimeout(),t.$pending=!0;var r=Array.prototype.slice.call(arguments);o=setTimeout(function(){t.apply(this,r),n.$pending=!1},e)};return n.$pending=!1,n.$cancelTimeout=function(){clearTimeout(o),t.$pending=!1},n.$execute=function(){t(),t.$cancelTimeout()},n},objectKeys:function(t){if(Object.keys)return Object.keys(t);var e,o=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.push(e);return o}}}})})});
//# sourceMappingURL=dhtmlxgantt_tooltip.js.map