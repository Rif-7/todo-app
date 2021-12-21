(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\r\n    margin: 0;\r\n    font-family: monospace;\r\n    height: 100vh;\r\n}\r\n\r\n#nav-bar {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 80px;\r\n    color: white;\r\n    background-color: #202020;\r\n    font-size: 32px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    height: 100%;\r\n    color: white;\r\n}\r\n\r\n.side-bar, .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 24px;\r\n    padding-top: 5px;\r\n}\r\n\r\n.side-bar {\r\n    max-width: 300px;\r\n    flex: 1 1 auto;\r\n    align-items: center;\r\n    background-color: #888;\r\n}   \r\n\r\n.content {\r\n    flex: 3 1 auto;\r\n    background-color: #1f2936;\r\n    align-items: flex-start;\r\n    padding-left: 8px;\r\n\r\n}\r\n\r\n.new-project {\r\n    font-size: 16px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    width: 90%;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.create-btn {\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: white;\r\n    padding: 6px 12px;\r\n    background-color: #1f2936;\r\n    border-radius: 4px;\r\n    border: 0px;\r\n}\r\n\r\n.project {\r\n    width: 80%;\r\n    height: 300px;\r\n    background-color: inherit;\r\n    border-top: 5px solid #1f2936;\r\n    border-bottom: 5px solid #1f2936;\r\n    color: black;\r\n    padding-left: 16px;\r\n    overflow: auto;\r\n    margin-left: 5x;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 90%;\r\n    height: 40px;\r\n    margin: 8px;\r\n    background-color: #E5E7EB;\r\n    color: black;\r\n    border-radius: 4px;\r\n    justify-content: space-between;\r\n    padding: 0px 3px;\r\n}\r\n\r\n.project-title {\r\n    width: 90%;\r\n    height: 30px;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    border-radius: 8px;\r\n    border: 0px;\r\n}\r\n\r\n.project-name {\r\n    font-size: 22px;\r\n    width: 90%;\r\n    background-color: #1f2936;\r\n    color: white;\r\n    margin: 6px 0px;\r\n    transition: 100ms;\r\n    padding-left: 3px;\r\n}\r\n\r\n.today-todo {\r\n    margin-top: 8px;\r\n    align-self: flex-start;\r\n    margin-left: 15px;\r\n}\r\n\r\n.project-name:hover, .today-todo:hover {\r\n    transform: translate(1%, 1%);\r\n}\r\n\r\n.selected {\r\n    margin-left: 8px;\r\n}\r\n\r\n.header {\r\n    margin-bottom: 5px;\r\n    align-self: flex-start;\r\n    padding-left: 5px;\r\n}\r\n\r\n#add-todo, #delete-project {\r\n    margin-bottom: 20px;\r\n    background-color: #888;\r\n}\r\n\r\n.todo-div {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.due-date-field {\r\n    font-size: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.priority-indicator {\r\n    width: 20px;\r\n    height: 40px;\r\n}\r\n\r\n.project::-webkit-scrollbar {\r\n    background-color: inherit;\r\n    width: 5px;\r\n}\r\n\r\n.project::-webkit-scrollbar-thumb {\r\n    background-color: #1f2936;\r\n    border-radius: 15px;\r\n}\r\n\r\n.delete-btn {\r\n    background-color: red;\r\n    margin-right: 5px;\r\n    font-weight: 700;\r\n    transition: 100ms;\r\n}\r\n\r\n.delete-btn:hover, .details-btn:hover {\r\n    transform: scale(105%);\r\n}\r\n\r\n#delete-project:hover {\r\n    background-color: red;\r\n} \r\n\r\n\r\n\r\n/* MODAL STYLES */\r\n\r\n#todo-modal, #details-modal {\r\n    display: none; \r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%;\r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4);\r\n  }\r\n\r\n\r\n.details-content, .modal-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    background-color: #fefefe;\r\n    border: 1px solid #888;\r\n    margin: 10% auto; \r\n    border-radius: 15px;\r\n    align-items: flex-start;\r\n    padding: 20px;\r\n    font-size: 18px;\r\n    font-weight: 200;\r\n}\r\n\r\n.modal-content {\r\n    width: 300px;\r\n    height: 320px;\r\n    \r\n}\r\n\r\n.details-content {\r\n    width: 600px;\r\n    height: 150px;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n  .close {\r\n    align-self: flex-end;\r\n    background-color: #fefefe;\r\n    border-radius: 30px;\r\n    border: 0px;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .todo-fields {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ntextarea {\r\n    width: 80%;\r\n    height: 60px;\r\n}\r\n\r\n.save-todo, .details-btn {\r\n    font-family: monospace;\r\n    color: white;\r\n    background-color: #1f2936;\r\n    border-radius: 4px;\r\n    border: 0px;\r\n    font-size: 16px;\r\n    padding: 8px 16px;\r\n    margin: auto;\r\n}\r\n\r\n.details-btn {\r\n    padding: 6px 12px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.save-todo:hover {\r\n    border: 2px solid black;\r\n}\r\n\r\ninput, textarea {\r\n    font-size: 16px;\r\n}\r\n\r\n.grouped-info {\r\n    width: 100%;\r\n    display: flex;\r\n    gap: 50px;\r\n}\r\n\r\n.title {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n}\r\n\r\n.checked-info, .priority, .priority-label {\r\n    font-size: 16px;\r\n    padding: 0px 3px;\r\n    color: white;\r\n}\r\n\r\n.priority-label  {\r\n    color: black;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var f=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var u=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),u=n.n(c),s=n(216),d=n.n(s),l=n(589),f=n.n(l),h=n(426),m={};function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function y(e){return g(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function w(e){if(g(1,arguments),!y(e)&&"number"!=typeof e)return!1;var t=p(e);return!isNaN(Number(t))}m.styleTagTransform=f(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function v(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}const x={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function T(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var c=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[c]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const k={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:T({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:T({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:T({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:T({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:T({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function S(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,c=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?D(u,(function(e){return e.test(c)})):M(u,(function(e){return e.test(c)}));i=e.valueCallback?e.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(c.length);return{value:i,rest:d}}}function M(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function D(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var E,j={ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(E.matchPattern);if(!n)return null;var r=n[0],a=e.match(E.parsePattern);if(!a)return null;var o=E.valueCallback?E.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const P={code:"en-US",formatDistance:function(e,t,n){var r,a=b[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:x,formatRelative:function(e,t,n,r){return C[e]},localize:k,match:j,options:{weekStartsOn:0,firstWeekContainsDate:1}};function U(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function N(e,t){g(2,arguments);var n=p(e).getTime(),r=U(t);return new Date(n+r)}function O(e,t){g(2,arguments);var n=U(t);return N(e,-n)}function q(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const L=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return q("yy"===t?r%100:r,t.length)},W=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):q(n+1,2)},Y=function(e,t){return q(e.getUTCDate(),t.length)},z=function(e,t){return q(e.getUTCHours()%12||12,t.length)},H=function(e,t){return q(e.getUTCHours(),t.length)},I=function(e,t){return q(e.getUTCMinutes(),t.length)},F=function(e,t){return q(e.getUTCSeconds(),t.length)},J=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return q(Math.floor(r*Math.pow(10,n-3)),t.length)};var A=864e5;function B(e){g(1,arguments);var t=1,n=p(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Q(e){g(1,arguments);var t=p(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=B(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=B(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function X(e){g(1,arguments);var t=Q(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=B(n);return r}var G=6048e5;function R(e,t){g(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:U(a),i=null==n.weekStartsOn?o:U(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=p(e),u=c.getUTCDay(),s=(u<i?7:0)+u-i;return c.setUTCDate(c.getUTCDate()-s),c.setUTCHours(0,0,0,0),c}function _(e,t){g(1,arguments);var n=p(e),r=n.getUTCFullYear(),a=t||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,c=null==i?1:U(i),u=null==a.firstWeekContainsDate?c:U(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=new Date(0);s.setUTCFullYear(r+1,0,u),s.setUTCHours(0,0,0,0);var d=R(s,t),l=new Date(0);l.setUTCFullYear(r,0,u),l.setUTCHours(0,0,0,0);var f=R(l,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Z(e,t){g(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:U(a),i=null==n.firstWeekContainsDate?o:U(n.firstWeekContainsDate),c=_(e,t),u=new Date(0);u.setUTCFullYear(c,0,i),u.setUTCHours(0,0,0,0);var s=R(u,t);return s}var V=6048e5,K={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return L(e,t)},Y:function(e,t,n,r){var a=_(e,r),o=a>0?a:1-a;return"YY"===t?q(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):q(o,t.length)},R:function(e,t){return q(Q(e),t.length)},u:function(e,t){return q(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return W(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){g(1,arguments);var n=p(e),r=R(n,t).getTime()-Z(n,t).getTime();return Math.round(r/V)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):q(a,t.length)},I:function(e,t,n){var r=function(e){g(1,arguments);var t=p(e),n=B(t).getTime()-X(t).getTime();return Math.round(n/G)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):q(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):Y(e,t)},D:function(e,t,n){var r=function(e){g(1,arguments);var t=p(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/A)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):q(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return q(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return q(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return z(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):q(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):q(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):I(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):F(e,t)},S:function(e,t){return J(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return ee(a);case"XXXX":case"XX":return te(a);default:return te(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return ee(a);case"xxxx":case"xx":return te(a);default:return te(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+$(a,":");default:return"GMT"+te(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+$(a,":");default:return"GMT"+te(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return q(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return q((r._originalDate||e).getTime(),t.length)}};function $(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+t+q(o,2)}function ee(e,t){return e%60==0?(e>0?"-":"+")+q(Math.abs(e)/60,2):te(e,t)}function te(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+q(Math.floor(a/60),2)+n+q(a%60,2)}const ne=K;function re(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function ae(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}const oe={p:ae,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return re(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",re(a,t)).replace("{{time}}",ae(o,t))}};function ie(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var ce=["D","DD"],ue=["YY","YYYY"];function se(e){return-1!==ce.indexOf(e)}function de(e){return-1!==ue.indexOf(e)}function le(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var fe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,he=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,me=/^'([^]*?)'?$/,ge=/''/g,pe=/[a-zA-Z]/;function ye(e,t,n){g(2,arguments);var r=String(t),a=n||{},o=a.locale||P,i=o.options&&o.options.firstWeekContainsDate,c=null==i?1:U(i),u=null==a.firstWeekContainsDate?c:U(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=o.options&&o.options.weekStartsOn,d=null==s?0:U(s),l=null==a.weekStartsOn?d:U(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var f=p(e);if(!w(f))throw new RangeError("Invalid time value");var h=ie(f),m=O(f,h),y={firstWeekContainsDate:u,weekStartsOn:l,locale:o,_originalDate:f},b=r.match(he).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,oe[t])(e,o.formatLong,y):e})).join("").match(fe).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return we(n);var i=ne[r];if(i)return!a.useAdditionalWeekYearTokens&&de(n)&&le(n,t,e),!a.useAdditionalDayOfYearTokens&&se(n)&&le(n,t,e),i(m,n,o.localize,y);if(r.match(pe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return b}function we(e){return e.match(me)[1].replace(ge,"'")}function be(){localStorage.getItem("projects")||(localStorage.setItem("projects",JSON.stringify(["Home"])),localStorage.setItem("Home",JSON.stringify([])))}function ve(){return JSON.parse(localStorage.getItem("projects"))}function xe(e,t){const n=Ce(e),r=JSON.parse(n[t]);r.checked=!r.checked,n[t]=JSON.stringify(r),localStorage.setItem(e,JSON.stringify(n))}function Ce(e){return JSON.parse(localStorage.getItem(e))}function Te(e,t){const n=Ce(e);n.splice(t,1),localStorage.setItem(e,JSON.stringify(n))}let ke;const Se={low:"blue",medium:"green",high:"red"};let Me=document.createElement("div");Me.classList.add("selected");const De=document.querySelector("#details-modal"),Ee=De.querySelector(".due-date"),je=De.querySelector(".title"),Pe=De.querySelector(".description"),Ue=De.querySelector(".priority"),Ne=De.querySelector(".checked-info");function Oe(){const e=ve(),t=document.querySelector(".project");t.innerHTML="";for(let n=0;n<e.length;n++){const r=document.createElement("div");r.textContent=e[n],r.classList.add("project-name"),r.addEventListener("click",(function(){Me.classList.remove("selected"),ke=e[n],Le(Ce(e[n])),r.classList.add("selected"),Me=r})),t.appendChild(r)}}function qe(){Le(Ce(ke))}function Le(e,t=!1){const n=document.querySelector(".todo-div");n.innerHTML="",document.querySelector("#delete-project").style.display="Home"===ke?"none":"inline";for(let r=0;r<e.length;r++){let a=e[r];t||(a=JSON.parse(a));const o=document.createElement("div");o.classList.add("todo-item");const i=document.createElement("div");a.checked?i.innerHTML=a.title.strike():i.textContent=a.title,o.appendChild(i);const c=document.createElement("div"),u=document.createElement("button");u.textContent="X",u.classList.add("create-btn","delete-btn"),u.addEventListener("click",(function(){Te(a.project,r),qe()})),c.appendChild(u);const s=document.createElement("button");s.classList.add("details-btn"),s.textContent="Details",c.appendChild(s),s.addEventListener("click",(function(){We(a)}));const d=document.createElement("span");d.textContent=a.dueDate,c.appendChild(d);const l=document.createElement("input");l.type="checkbox",a.checked&&(l.checked=!0),c.appendChild(l),c.classList.add("due-date-field"),l.addEventListener("change",(()=>{xe(ke,r),Le(Ce(ke))})),t&&(l.disabled=!0,u.disabled=!0);const f=document.createElement("div");f.classList.add("priority-indicator"),f.style.backgroundColor=Se[a.priority],c.appendChild(f),o.appendChild(c),n.appendChild(o)}}function We(e){switch(je.textContent=e.title,Ee.textContent=e.dueDate,Pe.textContent=e.description,e.priority){case"high":Ue.textContent="High",Ue.style.backgroundColor="red";break;case"medium":Ue.textContent="Medium",Ue.style.backgroundColor="green";break;default:Ue.textContent="Low",Ue.style.backgroundColor="blue"}e.checked?(Ne.textContent="Finished",Ne.style.backgroundColor="green"):(Ne.textContent="Unfinished",Ne.style.backgroundColor="red"),De.style.display="block"}function Ye(e,t,n,r,a="default",o=!1){this.title=e,this.dueDate=t,this.description=n,this.priority=r,this.checked=o,this.project=a}document.querySelector(".create-project").addEventListener("click",(()=>{const e=document.querySelector(".project-title").value;e?(function(e){be();const t=JSON.parse(localStorage.getItem("projects"));if(t.includes(e))return alert("project already exists");t.push(e),localStorage.setItem("projects",JSON.stringify(t)),localStorage.setItem(e,JSON.stringify([]))}(e),Oe(ve()),document.querySelector(".project-name").value=""):alert("Project citle can't be empty")})),document.querySelector(".save-todo").addEventListener("click",(function(){const e=function(){const e=document.getElementById("todo-title").value,t=document.getElementById("todo-due-date").value,n=document.getElementById("todo-priority").value;return{title:e,dueDate:t,description:document.getElementById("todo-description").value,priority:n,project:ke}}();!function(e){if(!localStorage.getItem(e.project))return alert("project doesn't exist");const t=JSON.parse(localStorage.getItem(e.project));t.push(JSON.stringify(e)),localStorage.setItem(e.project,JSON.stringify(t))}(new Ye(e.title,e.dueDate,e.description,e.priority,e.project)),qe()})),document.querySelector(".details-close").addEventListener("click",(function(){document.querySelector("#details-modal").style.display="none"})),document.querySelector(".today-todo").addEventListener("click",(function(){const e=function(){const e=function(){const e=ve(),t=[];for(let n=0;n<e.length;n++){const r=Ce(e[n]);t.push(...r)}return t.map((e=>{const t=JSON.parse(e);return t.dueDate=new Date(Date.parse(t.dueDate)),t})).sort(((e,t)=>function(e,t){g(2,arguments);var n=p(e),r=p(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}(e.dueDate,t.dueDate)))}(),t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=[];for(let t=0;t<e.length;t++){const a=e[t],o=new Date(a.dueDate.getFullYear(),a.dueDate.getMonth(),a.dueDate.getDate());if(o>n)break;o.getTime()!==n.getTime()||(a.dueDate=ye(a.dueDate,"yyyy-MM-dd"),r.push(a))}return r}();ke="Home",Me.classList.remove("selected"),Me=document.querySelector(".today-todo"),Me.classList.add("selected"),Le(e,!0)})),document.querySelector("#delete-project").addEventListener("click",(function(){!function(e){localStorage.removeItem(e);const t=JSON.parse(localStorage.getItem("projects"));let n;for(let r=0;r<t.length;r++)if(t[r]===e){n=r;break}t.splice(n,1),localStorage.setItem("projects",JSON.stringify(t))}(ke),Oe(),document.querySelector(".project-name").click()})),be(),Oe(),function(){const e=document.getElementById("todo-modal"),t=document.getElementById("add-todo"),n=document.querySelector(".close");t.addEventListener("click",(function(){e.style.display="block"})),n.addEventListener("click",(function(){e.style.display="none"}))}(),document.querySelector(".project-name").click()})()})();