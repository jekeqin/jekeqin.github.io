﻿(function(p){function E(e,b){}function q(e,b,a){e.addEventListener(b,a,!1)}function w(){return Date.now?Date.now():(new Date).getTime()}function n(){var e=F;if(!e){var e=F={},b=p.navigator.userAgent,a="browser",d="pc";switch(!0){case/MicroMessenger/.test(b):a="weixin";break;case Boolean(p.android)||/CM/.test(b):a="cm";break;case/(Gkuwan)/gi.test(b):a="kuwan";break;case/LieBaoFast/.test(b):a="liebao"}var k=l.referrer;k&&-1!==k.indexOf("LBGameCenter")&&(e.LBGameCenter=!0);switch(!0){case/iPad|iPhone/.test(b):d="ios";break;case/Android/.test(b):d="android";break;case/Mobile/.test(b):d="mobile"}e.browser=a;e.os=d;var g=d+"_"+a;e.toString=function(){return g}}return e}function G(e){H?e():x.push(e)}function m(e){"undefined"!==typeof _hmt&&_hmt.push(e)}function y(){var e=c.doneJump;e&&(location.href=e)}function u(){z||(z=l.body);return z}function P(e){0===r?(r=1,t.push(e),E("/game/conf/"+v+".json?"+(w()/5/60/1E3|0),function(b){var a;r=!1;if(b){try{a=JSON.parse(b)}catch(d){}a&&(b=n(),a="ios"===b.os?a.ios:a.android)&&(b=b.browser,(a="weixin"===b||"kuwan"===b?a[b]:a.other)&&(r=a))}a=t.length;for(b=0;b<a;++b)(0,t[b])(r);t.length=0;t=null})):1===r?t.push(e):e(r)}function I(e,b){function a(){g.removeEventListener("load",d,!1);g.removeEventListener("error",k,!1)}function d(){a();J[e]=!0;b(!0)}function k(){a();b(!1)}if(J[e])return b(!0);var g=new Image;q(g,"load",d);q(g,"error",k);g.src=e}function K(e,b){var a=this;I(b,function(d){if(d&&a.shown){d=u();var k=a.conf,g=n();m(["_trackEvent","ad_show",g.os+"_"+g.browser+"_"+k.p+"_"+k.n+"_show"]);d&&(a.href=e,a.style.backgroundImage="url("+b+")",d.appendChild(a))}})}function Q(e,b){var a=this;I(b,function(d){if(d&&a.shown){var k=u();if(k){L||(L=!0,d=l.createElement("style"),d.innerHTML="#lb_ad_banner{left:15%;top:50%;width:70%;margin-top:-35%;padding-bottom:70%}@media screen (min-aspect-ratio 1/1) and (max-aspect-ratio: 2/1){#lb_ad_banner{left:25%;top:50%;width:50%;margin-top:-25%;padding-bottom:50%}}@media screen and (min-aspect-ratio: 2/1){#lb_ad_banner{left:35%;top:50%;width:30%;margin-top:-15%;padding-bottom:30%}}",k.appendChild(d));a.href=e;a.style.backgroundImage="url("+b+")";k.appendChild(a);d=a.conf;var g=n();m(["_trackEvent","ad_show",g.os+"_"+g.browser+"_"+d.p+"_"+d.n+"_show"]);var c=function(){k.removeEventListener("click",M,!1);a._oc=null},M=function(b){b.target!==a&&(c(),B.hide("banner"))};q(k,"click",M);a._oc=c}}})}var l=document,h=p.LBShare;h||(h=p.LBShare={});var F,N=w(),c={doneJump:""},C=location.protocol+"//"+location.host,R=location.pathname.replace(/\?.*/,""),v="unknownGame";(function(){var e=location.pathname.match(/^\/game\/([^\/]+)/);if(e)v=e[1];else for(var e=l.getElementsByTagName("meta"),b=e.length-1;-1<b;--b){var a=e[b];if("game-id"===a.getAttribute("name")&&(a=a.getAttribute("content"))){v=a;break}}c.doneJump+="?f="+v})();var H=!1,x=[];E("/game/conf/jumpCloud.json?t="+N,function(e){if(e){try{var b=JSON.parse(e)}catch(a){}C="http://q"+Math.floor(5E3*Math.random())+"."+b.jumphost;"www.liebao.cn"===location.host&&"weixin"===n().browser&&(location.href=C+location.pathname)}H=!0;e=x.length;for(b=0;b<e;++b)x[b]()});c.getUrl=function(e){return(c.url||C+R).replace(/\?.*/,"")+("?f="+(e?e:"unknownShare"))+"&t="+N};c.getImgUrl=function(){var e=c.imgUrl;if(e){var b=l.createElement("a");b.href=e;return b.href}return"http://www.liebao.cn/game/img/icon.png"};var z,s={_div:void 0,show:function(){dp_share()},hide:function(){if(!(1E3>w()-s.t)){var b=s._div;if(b){var a=u();a&&b.parentNode===a&&a.removeChild(b)}}}};h.updateData=function(b){for(var a in b)if(b.hasOwnProperty(a)){var d=b[a];"string"===typeof d&&(c[a]=d)}var k,g;a=n();var f=a.toString();switch(a.browser){case"cm":(k=p.android)&&(g=function(){try{k.updatesharedata(c.title,c.getImgUrl(),c.desc,c.getUrl(f))}catch(a){}});break;case"kuwan":(k=p.updateclient)&&(g=function(){try{k.updatesharedata(c.title,c.getImgUrl(),c.desc,c.getUrl(f))}catch(a){}});break;case"liebao":g=function(){try{if("undefined"!==typeof __injectionJavaScriptObject___&&__injectionJavaScriptObject___.updateShareData)__injectionJavaScriptObject___.updateShareData(b.title,b.imgUrl,b.cont,b.url);else{var a={class_name:"com.ijinshan.browser.KInjectionJavaScriptObject",params:{function_name:"updateShareData",title:c.title,cont:c.desc,imgurl:c.getImgUrl(),url:c.getUrl(f)},sync:!1};prompt(JSON.stringify(a),"3.1415926535")}}catch(d){}}}g&&G(g)};h.callShare=function(){dp_share()};h.more=function(){clickMore()};h.statScore=function(b){m(["_trackEvent","button","end",b]);dp_submitScore(b)};h.getRank=function(b,a){var d;if("number"===typeof a)d=100*b/a;else{var c=Infinity,g=-c,f,n,A=g,h;for(h in a)if(a.hasOwnProperty(h)){var l=parseInt(h);if(!isNaN(l)&&0<=l&&100>=l){var m=a[h],A=Math.max(A,m);if(m===b){d=l;break}else m<b?g<m&&(f=l,g=m):c>m&&(n=l,c=m)}}void 0===d&&(void 0===f&&(g=f=0),void 0===n&&(n=100,c=2*A),d=f+(b-g)*(n-f)/(c-g))}return Math.max(0.1,Math.min(99.9,isNaN(d)?0:d)).toFixed(1)+"%"};var r=0,t=[],J={},L,S=99,D={},B={show:function(b){var a=r[b],d,c,g;if(a&&(a=a[g=Math.random()*a.length|0],(d=a.img_url)&&(c=a.link_url))){var f=D[b];if(!f)switch(f=D[b]=l.createElement("a"),f.target="_blank",q(f,"click",function(a){if(a.target===f){a=n();var b=f.conf;m(["_trackEvent","ad_click",a.os+"_"+a.browser+"_"+b.p+"_"+b.n+"_click"])}}),b){case"top":f.style.cssText="-webkit-tap-highlight-color:rgba(0,0,0,0);position:fixed;height:0;background:#fff 50% 50% no-repeat;background-size:100% 100%;width:100%;padding-bottom:16.67%;left:0;top:0";f.setImg=K;break;case"footer":f.style.cssText="-webkit-tap-highlight-color:rgba(0,0,0,0);position:fixed;height:0;background:#fff 50% 50% no-repeat;background-size:100% 100%;width:100%;padding-bottom:16.67%;left:0;bottom:0";f.setImg=K;break;case"banner":f.style.cssText="-webkit-tap-highlight-color:rgba(0,0,0,0);position:fixed;height:0;background:#fff 50% 50% no-repeat;background-size:100% 100%;";f.setImg=Q;f.id="lb_ad_banner";var h=l.createElement("div");h.style.cssText="position:absolute;top:2.5%;right:2.5%;width:8.8%;height:8.8%;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)";f.appendChild(h);q(h,"click",function(a){a.preventDefault();a.stopPropagation();(a=f._oc)&&a();B.hide("banner")})}f.shown||(f.style.zIndex=++S,f.shown=!0,f.setImg(c,d),a=a.hasOwnProperty("adid")?a.adid:g,f.conf={n:a,p:b})}},hide:function(b){}},T={top:0,footer:0,banner:0};h.showAd=function(b){};var O=h._sd;O&&(h.updateData(O),h._sd=null)})(window);