/*
@license

dhtmlxGantt v.6.2.0 Professional
This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
Gantt.plugin(function(t){!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/codebase/",n(n.s=248)}({12:function(t,e){t.exports=function(t){return{getVirtualRoot:function(){return t.mixin(t.getSubtaskDates(),{id:t.config.root_id,type:t.config.types.project,$source:[],$target:[],$virtual:!0})},getLinkedTasks:function(e,n){var r=[e],a=!1;t._isLinksCacheEnabled()||(t._startLinksCache(),a=!0);for(var i=[],s={},c={},o=0;o<r.length;o++)this._getLinkedTasks(r[o],s,n,c);for(var o in c)i.push(c[o]);return a&&t._endLinksCache(),i},_collectRelations:function(e,n,r,a){var i,s=t._getSuccessors(e,n),c=[];r&&(c=t._getPredecessors(e,n));for(var o=[],u=0;u<s.length;u++)a[i=s[u].hashSum]||(a[i]=!0,o.push(s[u]));for(u=0;u<c.length;u++)a[i=c[u].hashSum]||(a[i]=!0,o.push(c[u]));return o},_getLinkedTasks:function(e,n,r,a){for(var i,s=void 0===e?t.config.root_id:e,c=(n={},{}),o=[{from:s,includePredecessors:r,isChild:!1}];o.length;){var u=o.pop(),l=u.isChild;if(!n[s=u.from]){i=t.isTaskExists(s)?t.getTask(s):this.getVirtualRoot(),n[s]=!0;for(var h=this._collectRelations(i,l,r,c),d=0;d<h.length;d++){var f=h[d];a[f.hashSum]=f;var g=f.sourceParent==f.targetParent;n[f.target]||o.push({from:f.target,includePredecessors:!0,isChild:g})}if(t.hasChild(i.id)){var k=t.getChildren(i.id);for(d=0;d<k.length;d++)n[k[d]]||o.push({from:k[d],includePredecessors:!0,isChild:!0})}}}return a}}}},2:function(t,e){var n={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};function r(t,e){var n=[];if(t.filter)return t.filter(e);for(var r=0;r<t.length;r++)e(t[r],r)&&(n[n.length]=t[r]);return n}t.exports={getSecondsInUnit:function(t){return n[t]||n.hour},forEach:function(t,e){if(t.forEach)t.forEach(e);else for(var n=t.slice(),r=0;r<n.length;r++)e(n[r],r)},arrayMap:function(t,e){if(t.map)return t.map(e);for(var n=t.slice(),r=[],a=0;a<n.length;a++)r.push(e(n[a],a));return r},arrayFind:function(t,e){if(t.find)return t.find(e);for(var n=0;n<t.length;n++)if(e(t[n],n))return t[n]},arrayFilter:r,arrayDifference:function(t,e){return r(t,function(t,n){return!e(t,n)})},arraySome:function(t,e){if(0===t.length)return!1;for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1},hashToArray:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e},sortArrayOfHash:function(t,e,n){var r=function(t,e){return t<e};t.sort(function(t,a){return t[e]===a[e]?0:n?r(t[e],a[e]):r(a[e],t[e])})},throttle:function(t,e){var n=!1;return function(){n||(t.apply(null,arguments),n=!0,setTimeout(function(){n=!1},e))}},isArray:function(t){return Array.isArray?Array.isArray(t):t&&void 0!==t.length&&t.pop&&t.push},isDate:function(t){return!(!t||"object"!=typeof t||!(t.getFullYear&&t.getMonth&&t.getDate))},isStringObject:function(t){return t&&"object"==typeof t&&"function String() { [native code] }"===Function.prototype.toString.call(t.constructor)},isNumberObject:function(t){return t&&"object"==typeof t&&"function Number() { [native code] }"===Function.prototype.toString.call(t.constructor)},isBooleanObject:function(t){return t&&"object"==typeof t&&"function Boolean() { [native code] }"===Function.prototype.toString.call(t.constructor)},delay:function(t,e){var n,r=function(){r.$cancelTimeout(),t.$pending=!0;var a=Array.prototype.slice.call(arguments);n=setTimeout(function(){t.apply(this,a),r.$pending=!1},e)};return r.$pending=!1,r.$cancelTimeout=function(){clearTimeout(n),t.$pending=!1},r.$execute=function(){t(),t.$cancelTimeout()},r},objectKeys:function(t){if(Object.keys)return Object.keys(t);var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n},requestAnimationFrame:function(t){var e=window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(t)},isEventable:function(t){return t.attachEvent&&t.detachEvent}}},246:function(e,n,r){var a=r(12)(t),i=r(25)(t);e.exports=function(t){return t._isProjectEnd=function(t){return!this._hasDuration({start_date:t.end_date,end_date:this._getProjectEnd(),task:t})},{_needRecalc:!0,_cache:null,reset:function(){this._needRecalc=!0,this._cache=null},_isRecalcNeeded:function(){return this._needRecalc},_getLinks:function(){var t=a.getLinkedTasks();return i.groupAdjacentEdges(t)},_calculateBranch:function(e,n,r,a){if(n[e.id]=!0,void 0===r[e.id])for(var i=[e];i.length;)if(r[(e=i.pop()).id]||t._isProjectEnd(e))for(r[e.id]=!0;i.length;){r[(e=i.pop()).id]=!0}else{r[e.id]=!1;for(var s=a[e.id]||[],c=0;c<s.length;c++){var o=t.getTask(s[c].target);if(t._getSlack(e,o,s[c])<=0&&(!n[o.id]||r[o.id])){n[o.id]=!0,i.push(e),i.push(o);break}}}},_calculateSummaryTasks:function(e,n){for(var r in n)if(n[r])for(var a=t.getParent(r);void 0===e[a]&&t.isTaskExists(a);)e[a]=!0,a=t.getParent(a);for(var r in e)n[r]=!!e[r]},_calculate:function(){var e={},n=!1,r={};t._isLinksCacheEnabled()||(t._startLinksCache(),n=!0);var a=this._getLinks(),i={};return t.eachTask(function(n){r[n.id]||(t.isSummaryTask(n)?i[n.id]=void 0:this._calculateBranch(n,r,e,a))},t.config.root_id,this),this._calculateSummaryTasks(i,e),n&&t._endLinksCache(),e},isCriticalTask:function(t){return!!t&&(this._isRecalcNeeded()&&(this._cache=this._calculate(),this._needRecalc=!1),this._cache[t.id])},init:function(){var e=t.bind(function(){return this.reset(),!0},this),n=t.bind(function(t,e){return this._cache&&(this._cache[e]=this._cache[t],delete this._cache[t]),!0},this);t.attachEvent("onAfterLinkAdd",e),t.attachEvent("onAfterLinkUpdate",e),t.attachEvent("onAfterLinkDelete",e),t.attachEvent("onAfterTaskAdd",e),t.attachEvent("onTaskIdChange",n),t.attachEvent("onAfterTaskUpdate",e),t.attachEvent("onAfterTaskDelete",e),t.attachEvent("onParse",e),t.attachEvent("onClearAll",e);var r=function(){t.config.highlight_critical_path&&t.render()};t.attachEvent("onAfterLinkAdd",r),t.attachEvent("onAfterLinkUpdate",r),t.attachEvent("onAfterLinkDelete",r),t.attachEvent("onAfterTaskAdd",r),t.attachEvent("onTaskIdChange",function(e,n){return t.config.highlight_critical_path&&t.isTaskExists(n)&&t.refreshTask(n),!0}),t.attachEvent("onAfterTaskUpdate",r),t.attachEvent("onAfterTaskDelete",r)}}}},247:function(e,n,r){var a=r(12)(t),i=r(2);e.exports=function(t){var e={_freeSlack:{},_totalSlack:{},_slackNeedCalculate:!0,_linkedTasksById:{},_calculateTotalSlack:function(){var n=this._linkedTasksById;i.forEach(a.getLinkedTasks(),function(e){var r=t.getTask(e.target),a=t.getFreeSlack(r);n[e.source]?a<n[e.source].minSlack.slack&&(n[e.source].minSlack={target:e.target,slack:a}):n[e.source]={minSlack:{target:e.target,slack:a},linked:[]},n[e.source].linked.push({target:e.target,slack:a})});var r={};return t.eachTask(function(n){t.isSummaryTask(n)||(void 0===r[n.id]&&(r[n.id]=0),r[n.id]+=e._chainSlackCount(n))}),t._slacksChanged=!1,this._slackNeedCalculate=!1,this._totalSlack=r,r},_chainSlackCount:function(e,n){switch(n=n||0,!0){case!this._linkedTasksById[e.id]:return t.calculateDuration(e.end_date,t.getSubtaskDates().end_date)+n;case 1===this._linkedTasksById[e.id].linked.length:return this._chainSlackCount(t.getTask(this._linkedTasksById[e.id].linked[0].target),t.getFreeSlack(e))+n;case this._linkedTasksById[e.id].linked.length>1:var r=this._getTargetWithMinimalSlack(this._linkedTasksById[e.id].linked);return this._chainSlackCount(t.getTask(r.target),t.getFreeSlack(e))+n}},_getTargetWithMinimalSlack:function(t){var e;return i.forEach(t,function(t){(void 0===e||t.slack<e.slack)&&(e=t)}),e},_calculateTaskSlack:function(t){return t.$source&&t.$source.length?this._calculateRelationSlack(t):this._calculateHierarchySlack(t)},_calculateRelationSlack:function(t){for(var e,n=0,r=t.$source,a=0;a<r.length;a++)(n>(e=this._calculateLinkSlack(r[a]))||0===a)&&(n=e);return n},_calculateLinkSlack:function(e){var n=t.getLink(e),r=0;return t.isTaskExists(n.source)&&t.isTaskExists(n.target)&&(r=t.getSlack(t.getTask(n.source),t.getTask(n.target))),r},_calculateHierarchySlack:function(e){var n,r=t.getSubtaskDates().end_date;return n=t.isTaskExists(e.parent)&&t.getSubtaskDates(e.id).end_date||e.end_date,Math.max(t.calculateDuration(n,r),0)},_resetTotalSlackCache:function(){this._slackNeedCalculate=!0},_shouldCalculateTotalSlack:function(){return this._slackNeedCalculate},getFreeSlack:function(e){return t.isTaskExists(e.id)?(this._freeSlack[e.id]||(t.isSummaryTask(e)?this._freeSlack[e.id]=void 0:this._freeSlack[e.id]=this._calculateTaskSlack(e)),this._freeSlack[e.id]):0},getTotalSlack:function(t){return this._shouldCalculateTotalSlack()&&this._calculateTotalSlack(),void 0===t?this._totalSlack:void 0!==t.id?this._totalSlack[t.id]:this._totalSlack[t]||0},dropCachedFreeSlack:function(){this._linkedTasksById={},this._freeSlack={},this._resetTotalSlackCache()},init:function(){function n(){e.dropCachedFreeSlack()}t.attachEvent("onAfterLinkAdd",n),t.attachEvent("onTaskIdChange",n),t.attachEvent("onAfterLinkUpdate",n),t.attachEvent("onAfterLinkDelete",n),t.attachEvent("onAfterTaskAdd",n),t.attachEvent("onAfterTaskUpdate",n),t.attachEvent("onAfterTaskDelete",n),t.attachEvent("onRowDragEnd",n),t.attachEvent("onAfterTaskMove",n)}};return e}},248:function(e,n,r){r(26)(t);var a=r(247)(t);a.init(),t.getFreeSlack=function(t){return a.getFreeSlack(t)},t.getTotalSlack=function(t){return a.getTotalSlack(t)};var i=r(246)(t);t.config.highlight_critical_path=!1,i.init(),t.isCriticalTask=function(e){return t.assert(!(!e||void 0===e.id),"Invalid argument for gantt.isCriticalTask"),i.isCriticalTask(e)},t.isCriticalLink=function(e){return this.isCriticalTask(t.getTask(e.source))},t.getSlack=function(t,e){for(var n=0,r=[],a={},i=0;i<t.$source.length;i++)a[t.$source[i]]=!0;for(i=0;i<e.$target.length;i++)a[e.$target[i]]&&r.push(e.$target[i]);for(i=0;i<r.length;i++){var s=this.getLink(r[i]),c=this._getSlack(t,e,this._convertToFinishToStartLink(s.id,s,t,e,t.parent,e.parent));(n>c||0===i)&&(n=c)}return n},t._getSlack=function(t,e,n){var r=this.config.types,a=null;a=this.getTaskType(t.type)==r.milestone?t.start_date:t.end_date;var i=e.start_date,s=0;s=+a>+i?-this.calculateDuration({start_date:i,end_date:a,task:t}):this.calculateDuration({start_date:a,end_date:i,task:t});var c=n.lag;return c&&1*c==c&&(s-=c),s}},25:function(t,e,n){var r=n(2);t.exports=function(){return{getVertices:function(t){for(var e,n={},r=0,a=t.length;r<a;r++)n[(e=t[r]).target]=e.target,n[e.source]=e.source;var i,s=[];for(var r in n)i=n[r],s.push(i);return s},topologicalSort:function(t){for(var e=this.getVertices(t),n={},r=0,a=e.length;r<a;r++)n[e[r]]={id:e[r],$source:[],$target:[],$incoming:0};for(r=0,a=t.length;r<a;r++){var i=n[t[r].target];i.$target.push(r),i.$incoming=i.$target.length,n[t[r].source].$source.push(r)}for(var s=e.filter(function(t){return!n[t].$incoming}),c=[];s.length;){var o=s.pop();c.push(o);var u=n[o];for(r=0;r<u.$source.length;r++){var l=n[t[u.$source[r]].target];l.$incoming--,l.$incoming||s.push(l.id)}}return c},groupAdjacentEdges:function(t){for(var e,n={},r=0,a=t.length;r<a;r++)n[(e=t[r]).source]||(n[e.source]=[]),n[e.source].push(e);return n},tarjanStronglyConnectedComponents:function(t,e){for(var n={},r=[],a=this.groupAdjacentEdges(e),i=!1,s=[],c=0;c<t.length;c++){var o=k(t[c]);if(!o.visited)for(var u=[o],l=0;u.length;){var h=u.pop();h.visited||(h.index=l,h.lowLink=l,l++,r.push(h),h.onStack=!0,h.visited=!0),i=!1;e=a[h.id]||[];for(var d=0;d<e.length;d++){var f=k(e[d].target);if(f.edge=e[d],void 0===f.index){u.push(h),u.push(f),i=!0;break}f.onStack&&(h.lowLink=Math.min(h.lowLink,f.index))}if(!i){if(h.index==h.lowLink){for(var g={tasks:[],links:[]};(f=r.pop()).onStack=!1,g.tasks.push(f.id),f.edge&&g.links.push(f.edge.id),f!=h;);s.push(g)}u.length&&(f=h,(h=u[u.length-1]).lowLink=Math.min(h.lowLink,f.lowLink))}}}return s;function k(t){return n[t]||(n[t]={id:t,onStack:!1,index:void 0,lowLink:void 0,edge:void 0}),n[t]}},findLoops:function(t){var e=[];r.forEach(t,function(t){t.target==t.source&&e.push([t.target,t.source])});var n=this.getVertices(t),a=this.tarjanStronglyConnectedComponents(n,t);return r.forEach(a,function(t){t.tasks.length>1&&e.push(t)}),e}}}},26:function(t,e){t.exports=function(t){t._get_linked_task=function(e,n){var r=null,a=n?e.target:e.source;return t.isTaskExists(a)&&(r=t.getTask(a)),r},t._get_link_target=function(e){return t._get_linked_task(e,!0)},t._get_link_source=function(e){return t._get_linked_task(e,!1)};var e=!1,n={},r={},a={},i={};t._isLinksCacheEnabled=function(){return e},t._startLinksCache=function(){n={},r={},a={},i={},e=!0},t._endLinksCache=function(){n={},r={},a={},i={},e=!1},t._formatLink=function(r){if(e&&n[r.id])return n[r.id];var a=[],i=this._get_link_target(r),s=this._get_link_source(r);if(!s||!i)return a;if(t.isSummaryTask(i)&&t.isChildOf(s.id,i.id)||t.isSummaryTask(s)&&t.isChildOf(i.id,s.id))return a;for(var c=this._getImplicitLinks(r,s,function(t){return 0},!0),o=t.config.auto_scheduling_move_projects,u=this.isSummaryTask(i)?this.getSubtaskDates(i.id):{start_date:i.start_date,end_date:i.end_date},l=this._getImplicitLinks(r,i,function(e){return o?e.$target.length||t.getState().drag_id==e.id?0:t.calculateDuration({start_date:u.start_date,end_date:e.start_date,task:s}):0}),h=0,d=c.length;h<d;h++)for(var f=c[h],g=0,k=l.length;g<k;g++){var _=l[g],v=1*f.lag+1*_.lag,p={id:r.id,type:r.type,source:f.task,target:_.task,lag:(1*r.lag||0)+v};a.push(t._convertToFinishToStartLink(_.task,p,s,i,f.taskParent,_.taskParent))}return e&&(n[r.id]=a),a},t._isAutoSchedulable=function(t){return!1!==t.auto_scheduling},t._getImplicitLinks=function(e,n,r,a){var i=[];if(this.isSummaryTask(n)){var s,c={};for(var o in this.eachTask(function(t){this.isSummaryTask(t)||(c[t.id]=t)},n.id),c){var u=c[o],l=a?u.$source:u.$target;s=!1;for(var h=0;h<l.length;h++){var d=t.getLink(l[h]),f=a?d.target:d.source,g=c[f];if(g&&!1!==u.auto_scheduling&&!1!==g.auto_scheduling&&(d.target==g.id&&Math.abs(d.lag)<=g.duration||d.target==u.id&&Math.abs(d.lag)<=u.duration)){s=!0;break}}s||i.push({task:u.id,taskParent:u.parent,lag:r(u)})}}else i.push({task:n.id,taskParent:n.parent,lag:0});return i},t._getDirectDependencies=function(t,e){for(var n=[],r=[],a=e?t.$source:t.$target,i=0;i<a.length;i++){var s=this.getLink(a[i]);if(this.isTaskExists(s.source)&&this.isTaskExists(s.target)){var c=this.getTask(s.target);this._isAutoSchedulable(c)&&n.push(this.getLink(a[i]))}}for(i=0;i<n.length;i++)r=r.concat(this._formatLink(n[i]));return r},t._getInheritedDependencies=function(t,n){var i,s=!1,c=[];return this.isTaskExists(t.id)&&this.eachParent(function(t){var o;s||(e&&(i=n?r:a)[t.id]?c=c.concat(i[t.id]):this.isSummaryTask(t)&&(this._isAutoSchedulable(t)?(o=this._getDirectDependencies(t,n),e&&(i[t.id]=o),c=c.concat(o)):s=!0))},t.id,this),c},t._getDirectSuccessors=function(t){return this._getDirectDependencies(t,!0)},t._getInheritedSuccessors=function(t){return this._getInheritedDependencies(t,!0)},t._getDirectPredecessors=function(t){return this._getDirectDependencies(t,!1)},t._getInheritedPredecessors=function(t){return this._getInheritedDependencies(t,!1)},t._getSuccessors=function(t,e){var n=this._getDirectSuccessors(t);return e?n:n.concat(this._getInheritedSuccessors(t))},t._getPredecessors=function(t,n){var r,a=t.id+n;if(e&&i[a])return i[a];var s=this._getDirectPredecessors(t);return r=n?s:s.concat(this._getInheritedPredecessors(t)),e&&(i[a]=r),r},t._convertToFinishToStartLink=function(e,n,r,a,i,s){var c={target:e,link:t.config.links.finish_to_start,id:n.id,lag:n.lag||0,source:n.source,preferredStart:null,sourceParent:i,targetParent:s,hashSum:null},o=0;switch(n.type){case t.config.links.start_to_start:o=-r.duration;break;case t.config.links.finish_to_finish:o=-a.duration;break;case t.config.links.start_to_finish:o=-r.duration-a.duration;break;default:o=0}return c.lag+=o,c.hashSum=c.lag+"_"+c.link+"_"+c.source+"_"+c.target,c}}}})})});
//# sourceMappingURL=dhtmlxgantt_critical_path.js.map