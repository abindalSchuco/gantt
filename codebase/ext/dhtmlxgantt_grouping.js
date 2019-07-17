/*
@license

dhtmlxGantt v.6.2.0 Professional
This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
Gantt.plugin(function(t){!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/codebase/",r(r.s=243)}({2:function(t,e){var r={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};function n(t,e){var r=[];if(t.filter)return t.filter(e);for(var n=0;n<t.length;n++)e(t[n],n)&&(r[r.length]=t[n]);return r}t.exports={getSecondsInUnit:function(t){return r[t]||r.hour},forEach:function(t,e){if(t.forEach)t.forEach(e);else for(var r=t.slice(),n=0;n<r.length;n++)e(r[n],n)},arrayMap:function(t,e){if(t.map)return t.map(e);for(var r=t.slice(),n=[],o=0;o<r.length;o++)n.push(e(r[o],o));return n},arrayFind:function(t,e){if(t.find)return t.find(e);for(var r=0;r<t.length;r++)if(e(t[r],r))return t[r]},arrayFilter:n,arrayDifference:function(t,e){return n(t,function(t,r){return!e(t,r)})},arraySome:function(t,e){if(0===t.length)return!1;for(var r=0;r<t.length;r++)if(e(t[r],r,t))return!0;return!1},hashToArray:function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(t[r]);return e},sortArrayOfHash:function(t,e,r){var n=function(t,e){return t<e};t.sort(function(t,o){return t[e]===o[e]?0:r?n(t[e],o[e]):n(o[e],t[e])})},throttle:function(t,e){var r=!1;return function(){r||(t.apply(null,arguments),r=!0,setTimeout(function(){r=!1},e))}},isArray:function(t){return Array.isArray?Array.isArray(t):t&&void 0!==t.length&&t.pop&&t.push},isDate:function(t){return!(!t||"object"!=typeof t||!(t.getFullYear&&t.getMonth&&t.getDate))},isStringObject:function(t){return t&&"object"==typeof t&&"function String() { [native code] }"===Function.prototype.toString.call(t.constructor)},isNumberObject:function(t){return t&&"object"==typeof t&&"function Number() { [native code] }"===Function.prototype.toString.call(t.constructor)},isBooleanObject:function(t){return t&&"object"==typeof t&&"function Boolean() { [native code] }"===Function.prototype.toString.call(t.constructor)},delay:function(t,e){var r,n=function(){n.$cancelTimeout(),t.$pending=!0;var o=Array.prototype.slice.call(arguments);r=setTimeout(function(){t.apply(this,o),n.$pending=!1},e)};return n.$pending=!1,n.$cancelTimeout=function(){clearTimeout(r),t.$pending=!1},n.$execute=function(){t(),t.$cancelTimeout()},n},objectKeys:function(t){if(Object.keys)return Object.keys(t);var e,r=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r},requestAnimationFrame:function(t){var e=window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(t)},isEventable:function(t){return t.attachEvent&&t.detachEvent}}},243:function(e,r,n){var o=n(2);function i(){var t=this;this.$data.tasksStore._listenerToDrop&&this.$data.tasksStore.detachEvent(this.$data.tasksStore._listenerToDrop),this.$data.tasksStore.attachEvent("onAfterUpdate",function(){return!t._groups.dynamicGroups||(t._groups.regroup&&t._groups.regroup(),!0)})}t._groups={relation_property:null,relation_id_property:"$group_id",group_id:null,group_text:null,loading:!1,loaded:0,dynamicGroups:!1,init:function(t){var e=this;t.attachEvent("onClear",function(){e.clear()}),e.clear();var r=t.$data.tasksStore.getParent;t.attachEvent("onBeforeTaskMove",function(){return!this._groups.dynamicGroups}),t.$data.tasksStore._listenerToDrop=t.$data.tasksStore.attachEvent("onStoreUpdated",t.bind(i,t)),t.$data.tasksStore.getParent=function(n){return e.is_active()?e.get_parent(t,n):r.apply(this,arguments)};var n=t.$data.tasksStore.setParent;t.$data.tasksStore.setParent=function(r,o){if(!e.is_active())return n.apply(this,arguments);if(t.isTaskExists(o)){var i=t.getTask(o);e.dynamicGroups||(r[e.relation_property]=i[e.relation_id_property]),this._setParentInner.apply(this,arguments)}else e.dynamicGroups&&void 0===r[e.group_id]&&(r[e.relation_property]=[])},t.attachEvent("onBeforeTaskDisplay",function(r,n){return!(e.is_active()&&n.type==t.config.types.project&&!n.$virtual)}),t.attachEvent("onBeforeParse",function(){e.loading=!0}),t.attachEvent("onTaskLoading",function(){return e.is_active()&&(e.loaded--,e.loaded<=0&&(e.loading=!1,t.eachTask(t.bind(function(e){this.get_parent(t,e)},e)))),!0}),t.attachEvent("onParse",function(){e.loading=!1,e.loaded=0})},get_parent:function(t,e,r){void 0===e.id&&(e=t.getTask(e));var n=function(t,e){var r;r=t[e]instanceof Array?o.arrayMap(t[e],function(t,e){return t&&"object"==typeof t?t.resource_id:t}).join(","):t[e];return r}(e,this.relation_property);if(this._groups_pull[n]===e.id)return t.config.root_id;if(void 0!==this._groups_pull[n])return this._groups_pull[n];var i=t.config.root_id;return this.loading||void 0===n||(i=this.find_parent(r||t.getTaskByTime(),n,this.relation_id_property,t.config.root_id,e),this._groups_pull[n]=i),i},find_parent:function(t,e,r,n,o){for(var i=0;i<t.length;i++){var a=t[i];if(void 0!==a[r]&&a[r]==e&&a.id!==o.id)return a.id}return n},clear:function(){this._groups_pull={},this.relation_property=null,this.group_id=null,this.group_text=null},is_active:function(){return!!this.relation_property},generate_sections:function(e,r){for(var n=[],o=0;o<e.length;o++){var i=t.copy(e[o]);i.type=r,i.open=!0,i.$virtual=!0,i.readonly=!0,i[this.relation_id_property]=i[this.group_id],i.text=i[this.group_text],n.push(i)}return n},clear_temp_tasks:function(t){for(var e=0;e<t.length;e++)t[e].$virtual&&(t.splice(e,1),e--)},generate_data:function(t,e){var r=t.getLinks(),n=t.getTaskByTime();this.clear_temp_tasks(n);var o=[];this.is_active()&&e&&e.length&&(o=this.generate_sections(e,t.config.types.project));var i={links:r};return i.data=o.concat(n),i},update_settings:function(t,e,r){this.clear(),this.relation_property=t,this.group_id=e,this.group_text=r},group_tasks:function(t,e,r,n,o){this.update_settings(r,n,o);var i=this.generate_data(t,e);this.loaded=i.data.length,t._clear_data(),t.parse(i)}},t._groups.init(t),t.groupBy=function(e){var r=this,n=t.getTaskByTime();this._groups.dynamicGroups=o.arraySome(n,function(t,r){return t[e.relation_property]instanceof Array}),(e=e||{}).default_group_label=e.default_group_label||this.locale.labels.default_group||"None";var i=e.relation_property||null,a=e.group_id||"key",u=e.group_text||"label";this._groups.regroup=function(){var n=t.getTaskByTime(),s=function(t,e,r){var n;n=t.groups?r._groups.dynamicGroups?function(t,e){var r={},n=[],i={},a=e.relation_property,u=e.delimiter||",",s=!1,c=0;o.forEach(e.groups,function(t){t.default&&(s=!0,c=t.group_id),i[t.key||t[e.group_id]]=t});for(var p=0;p<t.length;p++){var l,f;if(o.isArray(t[p][a]))if(t[p][a].length>0)l=o.arrayMap(t[p][a],function(t,e){return t&&"object"==typeof t?t.resource_id:t}).sort().join(","),f=o.arrayMap(t[p][a],function(t,e){var r;return r=t&&"object"==typeof t?t.resource_id:t,(t=i[r]).label||t.text}).sort().join(u);else{if(s)continue;l=0,f=e.default_group_label}else if(t[p][a])l=t[p][a],f=i[l].label||i[l].text;else{if(s)continue;l=0,f=e.default_group_label}void 0!==l&&void 0===r[l]&&(r[l]={key:l,label:f},l===c&&(r[l].default=!0),r[l][e.group_text]=f,r[l][e.group_id]=l)}return(n=o.hashToArray(r)).forEach(function(t){t.key==c&&(t.default=!0)}),n}(e,t):t.groups:null;return n}(e,n,t);return r._groups.group_tasks(r,s,i,a,u),!0},this._groups.regroup()}}})})});
//# sourceMappingURL=dhtmlxgantt_grouping.js.map