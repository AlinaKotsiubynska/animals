function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequire9973;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},e.parcelRequire9973=r),r.register("kyEFX",(function(e,n){var a,r;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var s={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},r=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"4IRPR":"index.252b611d.js","7LkNH":"hare.46331d7f.jpg","iiRwa":"wolf.1f6d6ff5.jpg"}'));var s={},i={},o={},u={};u=function(t){return`<img class='image' src=${t.image} alt=${t.name}/>`};var c={},l={};l=function(t,e,n,a){return`\n    <button \n        class='js-${t}-${e}' \n        type='button' \n        ${n?"disabled":""} \n        data-message='${a}' \n        data-action='${e}'\n    >${e}</button>\n    `},c={addOnCreateEventListeners:function(t){document.querySelector(`.js-actions-${t.name}`).addEventListener("click",(e=>{if("BUTTON"===e.target.tagName&&!e.target.disabled){var n=e.target.dataset.action;t[n]()}})),document.querySelector(`.js-create-${t.name}`).disabled=!0},getDefaultStatus:function(t){return`<p class='js-status-${t}'>Congrads!!! You've created a ${t}.</p>`},getButtonsSet:function(t,e){var n="";for(var a of e){var r=!t[a];n+=l(t.name,a,r,t.messages[a]||"")}return n}};var d={actions:["walk","jump","hide","hunt","eat"]}.actions;function p(t,e){this.name=t,this.image=e,this.messages={walk:this.name+" is walking!",eat:this.name+" is eating! Omnomnom..."},this.status=""}o=function(t){var e=u(t),n=c.getButtonsSet(t,d),a=c.getDefaultStatus(t.name);return`\n    <div class='card-${t.name} js-card-${t.name}'>\n        <h2>${t.name}</h2>\n        ${e}\n        ${a}\n        <div class='buttons-wraper js-actions-${t.name}'>\n            ${n}\n        </div>\n    </div>\n    `},p.prototype.walk=function(){p.updateStatus.call(this,`Your ${this.messages.walk}`)},p.prototype.eat=function(){p.updateStatus.call(this,`Your ${this.messages.eat}`)},p.create=function(t){document.querySelector(t).insertAdjacentHTML("afterbegin",o(this)),c.addOnCreateEventListeners(this)},p.updateStatus=function(t){document.querySelector(`.js-status-${this.name}`).textContent=t},i=p;var f;function m(){i.call(this,"hare",f),this.messages.jump=this.name+" jumps!!! Boing-Boing!",this.messages.hide=this.name+" is hiding! Shhh!!!"}f=new URL(r("kyEFX").resolve("7LkNH"),import.meta.url).toString(),m.prototype=Object.create(i.prototype),m.prototype.constructor=m,m.prototype.jump=function(){i.updateStatus.call(this,`Your ${this.messages.jump}`)},m.prototype.hide=function(){i.updateStatus.call(this,`Your ${this.messages.hide}`)},m.prototype.walk=null,s=m;var h,g={};function v(){i.call(this,"wolf",h),this.messages.hunt=this.name+" is hunting! Arrr!"}h=new URL(r("kyEFX").resolve("iiRwa"),import.meta.url).toString(),v.prototype=Object.create(i.prototype),v.prototype.constructor=v,v.prototype.hunt=function(){i.updateStatus.call(this,`Your ${this.messages.hunt}`)},g=v,document.querySelector(".js-create-buttons").addEventListener("click",(t=>{if("BUTTON"!==t.target.tagName)return;let e={};e="hare"===t.target.dataset.animal?new s("hare"):new g("wolf"),i.create.call(e,".js-animals-container")}));
//# sourceMappingURL=index.252b611d.js.map