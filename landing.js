!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t){"use strict";function n(e){var t=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return t.test(e)}var a=jQuery(document);a.ready(function(e){function t(){s.scrollTop()>50?r.addClass("NavBg"):r.removeClass("NavBg")}function n(t){var n=["twitter","facebook","googleplus","pinterest","email"],a={twitter:{via:"rdvoo",hashtags:"rdvoo"}},i="I just subscribed to this new app! We should use it next time we plan something!",o={url:"https://1pd8.app.link/cXtb501wVs",text:i,showLabel:!1,showCount:!1,shares:n.map(function(n){return e.extend({share:n,url:t[n]},a[n])})};return o}function i(e){return e.indexOf("facebook")>-1?"Facebook":e.indexOf("email")>-1?"Email":e.indexOf("pinterest")>-1?"Pinterest":e.indexOf("googleplus")>-1?"Google":e.indexOf("twitter")>-1?"Twitter":null}var o=new WOW({mobile:!1});o.init();var s=e(window);e(".page-scroll").on("click",function(t){var n=e(this);e("html, body").stop().animate({scrollTop:e(n.attr("href")).offset().top},1500,"easeInOutExpo"),t.preventDefault()}),a.on("click",".navbar-collapse.in",function(t){e(t.target).is("a")&&e(this).collapse("hide")}),a.on("click","#android",function(t){e(t.target).is("a")&&(e(this).collapse("hide"),e("#android").hide(),e(".waitinglistForm").fadeIn(1e3))});var r=e(".sticky-navigation");t(),s.scroll(t);var u=void 0,l=e("#scrollspy-nav");l.on("activate.bs.scrollspy",function(e){var t=l.find(".active a").attr("href");u&&(clearTimeout(u),u=null),u=setTimeout(function(){var e=l.find(".active a").attr("href");u=null,t===e&&window.ga("send","pageview",t)},300)}),a.on("click",".navbar-nav",function(t){window.ga("send","event","navigation",e(t.target).attr("href"))}),a.on("click","#download-top",function(e){window.ga("send","event","click","download","top")}),a.on("click","#download-bottom",function(e){window.ga("send","event","click","download","bottom")}),a.on("click","#android",function(e){window.ga("send","event","click","android-user")});var d={twitter:"https://1pd8.app.link/wLgpeU6nXs",facebook:"https://1pd8.app.link/ew3FgU6nXs",googleplus:"https://1pd8.app.link/DPS6fU6nXs",pinterest:"https://1pd8.app.link/kXF7dU6nXs",email:"https://1pd8.app.link/TW5PdU6nXs"},c={twitter:"https://1pd8.app.link/G7us6T6nXs",facebook:"https://1pd8.app.link/Jwh99T6nXs",googleplus:"https://1pd8.app.link/76tydU6nXs",pinterest:"https://1pd8.app.link/T5uS7T6nXs",email:"https://1pd8.app.link/G3R6fU6nXs"};e("#shareIconsCountInside").jsSocials(n(c)),e("#shareIconsAndroid").jsSocials(n(d));var p=function(t,n,o){var s=function(t){var a=e(t.target),s=a.parents(".jssocials-share"),r=s&&s[0]&&i(s[0].className);r&&window.ga("send","social",r,n,o[r.toLowerCase()])};a.on("click",t,s)};p("#shareIconsAndroid","share-android",d),p("#shareIconsCountInside","share",c)}),a.on("submit","#contactForm",function(e){e.preventDefault();var t=jQuery("#name").val(),a=jQuery("#email").val(),i=jQuery("#message").val();return n(a)&&i.length>1&&t.length>1?(window.ga("send","event","click","send-feedback"),jQuery.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:"https://api.letsroundup.com/feedback",data:JSON.stringify({name:t,email:a,message:i}),success:function(){jQuery(".success").fadeIn(1e3),jQuery(".error").hide()}})):(jQuery(".error").fadeIn(1e3),jQuery(".success").hide()),!1}),a.on("submit","#waitlisted",function(e){function t(e){jQuery(".subscription-success").html('<i class="icon_close_alt2"></i><br/>'+e).fadeIn(1e3),jQuery("#androidShare").fadeIn(1e3),jQuery(".subscription-error").hide()}function a(e){jQuery(".subscription-error").html('<i class="icon_close_alt2"></i><br/>'+e).fadeIn(1e3),jQuery("#androidShare").hide(),jQuery(".subscription-success").hide()}function i(){jQuery.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"https://voo-android.app.waitlisted.co/api/v1/reservation?email="+s,success:function(e){var n=e&&e.reservation&&parseInt(e.reservation.position,10),a="Already added. We'll email you when the Android app is available.";n&&n>o&&(a='Already added. You\'re at position <b class="textBlue">'+n+"</b>."),t(a)},error:function(e){a("Something went wrong. Try again later.")}})}var o=150;e.preventDefault();var s=jQuery("#subscriber-email").val();return n(s)?(window.ga("send","event","click","waitlist"),jQuery.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:"https://voo-android.app.waitlisted.co/api/v1/reservation",data:JSON.stringify({email:s}),success:function(e){var n=e&&e.reservation&&parseInt(e.reservation.position,10),a="Thanks! We'll email you when the Android app is available.";n&&n>o&&(a='Thanks! You\'re at position <b class="textBlue">'+n+"</b>. We'll email you when the Android app is available."),t(a)},error:function(e){e&&e.responseText.indexOf("has already been taken")>-1?i():a("Something went wrong. Try again later.")}})):a("The email is not valid."),!1})}])});