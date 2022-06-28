(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),p=new URL(t(302),t.b),u=i()(o());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);var l=s()(p);u.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nbody {\n  position: relative;\n  height: 100vh;\n  font-family: "Roboto", sans-serif;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('+l+");\n}\n\n.test {\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n}\n\nul {\n  list-style: none;\n}\n\ninput {\n  outline: none;\n  padding: 5px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n\ninput:focus {\n  border-color: rgb(255, 255, 255);\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: flex;\n}\n\n.search {\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  background-color: rgb(11, 23, 27);\n}\n\n.search:hover {\n  background-color: black;\n}\n\n.location,\n.input,\n.first-row > ul,\n.third-row > ul,\n.third-row li {\n  display: flex;\n}\n\n.weather,\n.location,\n.third-row li {\n  flex-direction: column;\n}\n\n.container {\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n  padding: 10px;\n  margin-top: -15vh;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: white;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.weather-img {\n  background-position: center;\n}\n\n.location {\n  flex: 1;\n}\n\n.weather {\n  margin-top: 50px;\n  gap: 10px;\n}\n\n.first-row > ul {\n  align-items: center;\n  gap: 10px;\n}\n\n.second-row {\n  text-align: end;\n}\n\n.third-row > ul {\n  gap: 40px;\n  margin-top: 30px;\n}\n\n.input {\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n.weather-details {\n  display: flex;\n  flex-direction: column;\n}\n\n.error {\n  margin-top: 5px;\n  width: 100%;\n  padding: 0;\n\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\n@media screen and (max-width: 600px) {\n  .third-row > ul {\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  .container {\n    font-size: 1rem;\n  }\n}\n",""]);const d=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},302:(n,e,t)=>{n.exports=t.p+"a9f9fa9ee63b30d53994.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=async function(n){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=1a020968fb840e3784b048ba0413b0dd`,{mode:"cors"});return{name:(e=await t.json()).name,country:e.sys.country,temp:e.main.temp,weatherCondition:e.weather[0].main,weatherDescription:e.weather[0].description,weatherIcon:e.weather[0].icon,time:e.dt,pressure:e.main.pressure,humidity:e.main.humidity,minTemp:e.main.temp_min,maxTemp:e.main.temp_max}}catch(n){return null}var e},e=n=>Math.round(10*(n-273.15))/10,r=n=>new Date(1e3*n).toLocaleString("en-US",{hour:"numeric",weekday:"long",day:"numeric",month:"long"}),o=async function(t){try{const o=document.querySelector(".error");o.textContent="",o.className="error";const a=await n(`${t}`),i=document.querySelector(".weather"),c=document.querySelector(".location"),s=document.querySelector(".temp"),p=document.querySelector(".weather-condition"),u=document.querySelector(".humidity"),l=document.querySelector(".pressure"),d=document.querySelector(".min-temp"),m=document.querySelector(".max-temp"),h=document.querySelector(".second-row"),f=document.querySelector(".weather-img"),g=document.querySelector(".weather-description");c.innerHTML=`<span>${a.name}</span><span>${a.country}</span>`,s.innerHTML=`<span>${e(a.temp)} °C</span>`,p.innerHTML=`<span>${a.weatherCondition}</span>`,u.innerHTML=`<span>Humidity </span><span>${a.humidity} %</span>`,l.innerHTML=`<span>Pressure </span><span>${a.pressure} hPa</span>`,d.innerHTML=`<span>Min. Temperature </span><span>${e(a.minTemp)} °C</span>`,m.innerHTML=`<span>Max. Temperature </span><span>${e(a.maxTemp)} °C</span>`,h.innerHTML=`<span>${r(a.time)} </span>`,f.style.backgroundImage=`url("http://openweathermap.org/img/wn/${a.weatherIcon}@2x.png")`,f.style.width="80px",f.style.height="60px",g.innerHTML=`<span>${a.weatherDescription}</span>`,i.className="weather show"}catch(n){const e=document.querySelector(".error");e.textContent="Location not found",e.className="error active",console.log("error")}},a=()=>{const n=document.getElementById("location");n.value="",n.blur()};var i=t(379),c=t.n(i),s=t(795),p=t.n(s),u=t(569),l=t.n(u),d=t(565),m=t.n(d),h=t(216),f=t.n(h),g=t(589),y=t.n(g),v=t(426),b={};b.styleTagTransform=y(),b.setAttributes=m(),b.insert=l().bind(null,"head"),b.domAPI=p(),b.insertStyleElement=f(),c()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const w=document.querySelector(".search"),x=document.getElementById("location");w.addEventListener("click",(()=>{const n=document.getElementById("location").value;o(n),a()})),x.addEventListener("keyup",(n=>{"Enter"===n.key&&(n.preventDefault(),w.click())}))})()})();