(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"body {\r\n    margin: 0;\r\n    font-family: monospace;\r\n    height: 100vh;\r\n}\r\n\r\n#nav-bar {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 80px;\r\n    color: white;\r\n    background-color: black;\r\n    font-size: 32px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    height: 100%;\r\n    color: white;\r\n}\r\n\r\n.side-bar, .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 24px;\r\n    padding-top: 5px;\r\n}\r\n\r\n.side-bar {\r\n    max-width: 300px;\r\n    flex: 1 1 auto;\r\n    align-items: center;\r\n    background-color: rebeccapurple;\r\n}   \r\n\r\n.content {\r\n    flex: 3 1 auto;\r\n    background-color: green;\r\n    align-items: flex-start;\r\n    padding-left: 8px;\r\n\r\n}\r\n\r\n.info {\r\n    padding-left: 16px;\r\n}\r\n\r\n.new-project {\r\n    font-size: 16px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    width: 90%;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.create-btn {\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding: 6px 12px;\r\n    background-color: #3882F6;\r\n    border-radius: 15px;\r\n}\r\n\r\n.project {\r\n    width: 80%;\r\n    height: 300px;\r\n    border: 2px solid red;\r\n    background-color: burlywood;\r\n    color: black;\r\n    padding-left: 16px;\r\n    overflow: auto;\r\n    margin-left: 5x;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 90%;\r\n    height: 40px;\r\n    margin: 8px;\r\n    background-color: yellow;\r\n    color: brown;\r\n    justify-content: space-between;\r\n    padding: 0px 3px;\r\n}\r\n\r\n.project-title {\r\n    width: 90%;\r\n    height: 30px;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    border-radius: 8px;\r\n    border: 0px;\r\n}\r\n\r\n.project-name {\r\n    font-size: 22px;\r\n    width: 90%;\r\n    background-color: tomato;\r\n    margin: 6px 0px;\r\n}\r\n\r\n.project-name:hover {\r\n    border: 2px solid black;\r\n}\r\n\r\n.selected {\r\n    background-color: blue;\r\n}\r\n\r\n.header {\r\n    margin-bottom: 5px;\r\n    align-self: flex-start;\r\n    padding-left: 5px;\r\n}\r\n\r\n#add-todo {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.todo-div {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.due-date-field {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* MODAL STYLES */\r\n\r\n#todo-modal {\r\n    display: none; \r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%;\r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4);\r\n  }\r\n\r\n  .modal-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 5px;\r\n    background-color: #fefefe;\r\n    margin: 10% auto; \r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 300px;\r\n    height: 320px;\r\n    font-size: 18px;\r\n    font-weight: 200;\r\n    border-radius: 15px;\r\n}\r\n\r\n  .close {\r\n    align-self: flex-end;\r\n    background-color: rgb(206, 206, 206);\r\n    border-radius: 30px;\r\n    border: 0px;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .todo-fields {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ntextarea {\r\n    width: 80%;\r\n    height: 60px;\r\n}\r\n\r\n.save-todo {\r\n    font-family: monospace;\r\n    color: black;\r\n    background-color: blanchedalmond;\r\n    border-radius: 4px;\r\n    border: 0px;\r\n    font-size: 16px;\r\n    padding: 8px 16px;\r\n    margin: auto;\r\n}\r\n\r\n.save-todo:hover {\r\n    border: 2px solid black;\r\n}\r\n\r\ninput, textarea {\r\n    font-size: 16px;\r\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],l=t.base?d[0]+t.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=r(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var d=t(n,o),l=0;l<i.length;l++){var s=r(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),d=r.n(c),l=r(216),s=r.n(l),p=r(589),u=r.n(p),f=r(426),m={};function g(){localStorage.getItem("projects")||(localStorage.setItem("projects",JSON.stringify(["Home"])),localStorage.setItem("Home",JSON.stringify([])))}function h(){return JSON.parse(localStorage.getItem("projects"))}function x(n,e){const r=y(n),t=JSON.parse(r[e]);t.checked=!t.checked,r[e]=JSON.stringify(t),localStorage.setItem(n,JSON.stringify(r))}function y(n){return JSON.parse(localStorage.getItem(n))}let v;function b(n){const e=document.querySelector(".project");e.innerHTML="";for(let r=0;r<n.length;r++){const t=document.createElement("div");t.textContent=n[r],t.classList.add("project-name"),t.addEventListener("click",(function(){v=n[r],S(y(n[r]))})),e.appendChild(t)}}function S(n){const e=document.querySelector(".todo-div");e.innerHTML="",console.log(n);for(let r=0;r<n.length;r++){const t=JSON.parse(n[r]),o=document.createElement("div");o.classList.add("todo-item");const i=document.createElement("div");i.textContent=t.title,o.appendChild(i);const a=document.createElement("div"),c=document.createElement("span");c.textContent=t.dueDate,a.appendChild(c);const d=document.createElement("input");d.type="checkbox",t.checked&&(d.checked=!0),a.appendChild(d),a.classList.add("due-date-field"),d.addEventListener("change",(()=>{x(v,r)})),o.appendChild(a),e.appendChild(o)}}function j(n,e,r,t,o="default",i=!1){this.title=n,this.dueDate=e,this.description=r,this.priority=t,this.checked=i,this.project=o}m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,document.querySelector(".create-project").addEventListener("click",(()=>{const n=document.querySelector(".project-title").value;n?(function(n){g();const e=JSON.parse(localStorage.getItem("projects"));if(e.includes(n))return alert("project already exists");e.push(n),localStorage.setItem("projects",JSON.stringify(e)),localStorage.setItem(n,JSON.stringify([]))}(n),b(h()),document.querySelector(".project-name").value=""):alert("Project citle can't be empty")})),document.querySelector(".save-todo").addEventListener("click",(function(){const n=function(){const n=document.getElementById("todo-title").value,e=document.getElementById("todo-due-date").value,r=document.getElementById("todo-priority").value;return{title:n,dueDate:e,description:document.getElementById("todo-description").value,priority:r,project:v}}();!function(n){if(!localStorage.getItem(n.project))return alert("project doesn't exist");const e=JSON.parse(localStorage.getItem(n.project));e.push(JSON.stringify(n)),localStorage.setItem(n.project,JSON.stringify(e))}(new j(n.title,n.dueDate,n.description,n.priority,n.project)),S(y(v))})),g(),b(h()),function(){const n=document.getElementById("todo-modal"),e=document.getElementById("add-todo"),r=document.querySelector(".close");e.addEventListener("click",(function(){n.style.display="block"})),r.addEventListener("click",(function(){n.style.display="none"})),window.addEventListener("click",(function(){event.target==n&&(n.style.display="none")}))}(),document.querySelector(".project-name").click()})()})();