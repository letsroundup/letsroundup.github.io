!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var i in o)("object"==typeof exports?exports:t)[i]=o[i]}}(this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}({0:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var n=o(95),r=i(n),s=new r["default"];s.add("h1")},95:function(t,e){"use strict";function o(t){function e(t){o.options.icon=o.options.hasOwnProperty("icon")?t.icon:"",o.options.visible=o.options.hasOwnProperty("visible")?t.visible:"hover",o.options.placement=o.options.hasOwnProperty("placement")?t.placement:"right",o.options["class"]=o.options.hasOwnProperty("class")?t["class"]:"",o.options.truncate=o.options.hasOwnProperty("truncate")?Math.floor(t.truncate):64}var o=this;this.options=t||{},e(t),this.add=function(t){var o,i,n,r,s,l,a,c,p,h,u;if(e(this.options),t){if("string"!=typeof t)throw new Error("The selector provided to AnchorJS was invalid.")}else t="h1, h2, h3, h4, h5, h6";if(o=document.querySelectorAll(t),0===o.length)return!1;for(i=document.querySelectorAll("[id]"),n=[].map.call(i,function(t){return t.id}),s=0;s<o.length;s++){if(o[s].hasAttribute("id"))r=o[s].getAttribute("id");else{c=this.urlify(o[s].textContent),p=c,a=0;do void 0!==l&&(p=c+"-"+a),l=n.indexOf(p),a+=1;while(-1!==l);l=void 0,n.push(p),o[s].setAttribute("id",p),r=p}h=r.replace(/-/g," "),u=document.createElement("a"),u.className="anchorjs-link "+this.options["class"],u.href="#"+r,u.setAttribute("aria-label","Anchor link for: "+h),u.setAttribute("data-anchorjs-icon",this.options.icon),"always"===this.options.visible&&(u.style.opacity="1"),""===this.options.icon&&(u.style.fontFamily="anchorjs-icons",u.style.fontStyle="normal",u.style.fontVariant="normal",u.style.fontWeight="normal",u.style.lineHeight=1,"left"===this.options.placement&&(u.style.lineHeight="inherit")),"left"===this.options.placement?(u.style.position="absolute",u.style.marginLeft="-1em",u.style.paddingRight="0.5em",o[s].insertBefore(u,o[s].firstChild)):(u.style.paddingLeft="0.375em",o[s].appendChild(u))}return this},this.remove=function(t){for(var e,o=document.querySelectorAll(t),i=0;i<o.length;i++)e=o[i].querySelector(".anchorjs-link"),e&&o[i].removeChild(e);return this},this.urlify=function(t){var o,i=/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;return this.options.truncate||e(this.options),o=t.replace(/\'/gi,"").replace(i,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o}})});