/*
@license

dhtmlxGantt v.6.2.0 Professional
This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
Gantt.plugin(function(e){!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/codebase/",n(n.s=223)}({223:function(t,n){!function(){e.ext||(e.ext={}),e.ext.overlay={};var t={};function n(){if(e.$task_data){e.event(e.$task_data,"scroll",function(t){e.ext.$overlay_area&&(e.ext.$overlay_area.style.top=t.target.scrollTop+"px")});var t=document.createElement("div");t.className="gantt_overlay_area",e.$task_data.appendChild(t),e.ext.$overlay_area=t,r()}}function r(){for(var e in t){var n=t[e];n.isAttached||o(n)}}function o(t){e.ext.$overlay_area.appendChild(t.node),t.isAttached=!0}function a(){e.ext.$overlay_area.style.display="block"}function i(){var n=!1;for(var r in t){if(t[r].isVisible){n=!0;break}}n||(e.ext.$overlay_area.style.display="none")}e.config.show_overlays=!0,e.attachEvent("onBeforeGanttRender",function(){e.ext.$overlay_area||n(),r(),i()}),e.attachEvent("onGanttReady",function(){n(),r(),i()}),e.ext.overlay.addOverlay=function(n,r){r=r||e.uid();return t[r]=function(e,t){var n=document.createElement("div");return n.setAttribute("data-overlay-id",e),n.className="gantt_overlay",n.style.display="none",{id:e,render:t,isVisible:!1,isAttached:!1,node:n}}(r,n),r},e.ext.overlay.deleteOverlay=function(e){return!!t[e]&&(delete t[e],i(),!0)},e.ext.overlay.getOverlaysIds=function(){var e=[];for(var n in t)e.push(n);return e},e.ext.overlay.refreshOverlay=function(e){a(),t[e].isVisible=!0,t[e].node.innerHTML="",t[e].node.style.display="block",t[e].render(t[e].node)},e.ext.overlay.showOverlay=function(e){a(),this.refreshOverlay(e)},e.ext.overlay.hideOverlay=function(e){t[e].isVisible=!1,t[e].node.style.display="none",i()},e.ext.overlay.isOverlayVisible=function(e){return!!e&&t[e].isVisible}}()}})})});
//# sourceMappingURL=dhtmlxgantt_overlay.js.map