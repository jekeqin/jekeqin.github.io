﻿(function (e) {
    var t = 'position:fixed;left:0;top:0;bottom:0;right:0;z-index:9999999;width:100%;height:100%;background:url("img/loding.png") #42454c top center no-repeat;-webkit-background-size:contain;background-size:contain;-webkit-transition:opacity .5s;transition:opacity .5s;',
    n = document.createElement("div");
    n.style.cssText = t,
    document.body.appendChild(n),
    e.addEventListener("DOMContentLoaded",
    function () {
        setTimeout(function () {
            n.style.cssText = t + "opacity:0;",
            setTimeout(function () {
                document.body.removeChild(n)
            },
            600)
        },
        1e3)
    },
    !1)
})(window);