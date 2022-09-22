﻿!
function (a) {
    var b = function () {
        var c = {},
        d = arguments[0],
        e = d.canvas,
        f = e.width,
        g = e.height;
        return e.getContext("2d"),
        c = {
            objList: [],
            imgList: {},
            getImg: function (a) {
                return this.imgList[a]
            },
            canvas: e,
            fps: d.fps,
            timeline: 0,
            ctx: e.getContext("2d"),
            canWidth: f,
            canHeight: g,
            loading: function (a, b) {
                this.l_t = 0,
                this.imgList.length = 0;
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    this.imgList[d.id] = new Image,
                    this.imgList[d.id].src = d.url,
                    this.imgList.length++
                }
                this.loadfuc = b;
                var e = this;
                this.loadTimer = setInterval(function () {
                    e.drawLoading()
                },
                30)
            },
            setEmpty: function () {
                this.objList = [],
                this.offtimefuc(),
                b.eventList = {}
            },
            createLayer: function (a) {
                var b = [];
                return !a || a >= this.objList.length - 1 ? this.objList.push(b) : 0 >= a ? this.objList.unshift(b) : this.objList.splice(a, 0, b),
                b
            },
            drawLoading: function () {
                var a = 0,
                b = this.ctx,
                c = this.canWidth,
                d = this.canHeight,
                e = this.imgList.length;
                for (i in this.imgList) "length" != i && this.imgList[i].complete && a++;
                b.beginPath(),
                b.clearRect(0, 0, c, d),
                b.fillStyle = "#000",
                b.fillRect(0, 0, c, d),
                b.drawImage(loadImg1, 55, d / 2 - 17),
                b.beginPath(),
                b.fillStyle = "#4B9D3C",
                b.fillRect(72, d / 2 - 10, (c - 146) / e * a, 23),
                b.fill(),
                b.beginPath(),
                b.arc(72 + (c - 146) / e * a, d / 2 + 2, 11, Math.PI / 2, 3 * Math.PI / 2, 1),
                b.fillStyle = "#4B9D3C",
                b.fill(),
                b.closePath(),
                b.beginPath(),
                b.arc(72, d / 2 + 2, 11, 3 * Math.PI / 2, Math.PI / 2, 1),
                b.fillStyle = "#4B9D3C",
                b.fill(),
                b.closePath(),
                b.save(),
                b.beginPath(),
                b.fillStyle = "#fff",
                b.font = "bold 18px Arial",
                b.shadowColor = "#000",
                b.shadowOffsetY = 1,
                b.textAlign = "center",
                b.fillText("\u5df2\u52a0\u8f7d" + Math.floor(100 * (a / e)) + "%", c / 2, d / 2 + 7),
                b.fill(),
                b.restore(),
                a == e && (clearInterval(this.loadTimer), b.clearRect(0, 0, c, d), this.init(), this.loadfuc())
            },
            gameStart: function () {
                this.stimer = this.requestAnimFrame(function () {
                    this.gameStart()
                }.bind(this)),
                this.timeline && (this.tlinefuc(this.timeline), this.timeline++);
                var a = (new Date).getTime();
                this.__render(a - this.lastAnimationFrameTime),
                this.lastAnimationFrameTime = a
            },
            gameOver: function () {
                this.cancelAFrame(this.stimer)
            },
            ontimefuc: function (a) {
                this.timeline = 1,
                this.tlinefuc = a
            },
            offtimefuc: function () {
                this.timeline = 0
            },
            addEventListener: function (a) {
                function d(d) {
                    if (eG.eventList[a]) {
                        1 == d.targetTouches.length && (d.preventDefault(), d = d.targetTouches[0]),
                        "touchend" == a && (d = d.changedTouches[0]);
                        for (var e = eG.eventList[a], f = 0, g = e.length, h = new b.OBB(new eG.Vector2(d.pageX * c.p_x, d.pageY * c.p_x), 0, 0, 0) ; g > f; f++) {
                            var i = e[f];
                            if (eG.OBBvsOBB(h, i.testObb())) for (var j = 0,
                            k = i.eventFuc[a].length; k > j; j++) i.eventFuc[a][j](d)
                        }
                    }
                }
                this.canvas.addEventListener(a, d);
                var c = this
            },
            __drawFPS: function (a) {
                var b = 1e3 / (a - this.lastAnimationFrameTime);
                this.lastAnimationFrameTime = a,
                a - this.lastFpsUpdateTime > 2e3 && (this.lastFpsUpdateTime = a, this._fps = b)
            },
            __render: function (a) {
                for (var b = 0,
                c = this.objList.length; c > b; b++) {
                    for (var d = 0,
                    e = 0,
                    f = this.objList[b]; e < f.length; e++) f[e].die && f.splice(e, 1);
                    for (var g = f.length; g > d; d++) {
                        var h = f[d];
                        h.static || (h.x += this.__viewport.speed_x * a, h.y += this.__viewport.speed_y * a),
                        h.update(a),
                        h.render(a)
                    }
                }
            },
            __viewport: {
                speed_x: 0,
                speed_y: 0
            },
            setviewPort: function (a, b) {
                this.__viewport.speed_x = a || 0,
                this.__viewport.speed_y = b || 0
            },
            init: function () {
                this.lastAnimationFrameTime = (new Date).getTime(),
                this.lastFpsUpdateTime = 0,
                this.p_x = this.canWidth / document.documentElement.clientWidth,
                this.p_y = this.canHeight / document.documentElement.clientHeight,
                this.pos_y = document.documentElement.clientHeight * this.p_x,
                this.requestAnimFrame = function () {
                    var b, c = d.fps;
                    return b = c ?
                    function (b) {
                        a.setTimeout(b, 1e3 / c)
                    } : a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame ||
                    function (b) {
                        a.setTimeout(b, 1e3 / 60)
                    }
                }.bind(this)().bind(),
                this.cancelAFrame = function () {
                    return a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.oCancelAnimationFrame ||
                    function (b) {
                        a.clearTimeout(b)
                    }
                }().bind()
            }
        },
        c.extend = function () {
            var a, b, c, d, e = this;
            if (null != (a = arguments[0])) for (b in a) c = e[b],
            d = a[b],
            e !== d && (e[b] = d);
            return e
        },
        c
    };
    b.versions = function () {
        var a = navigator.userAgent;
        return navigator.appVersion,
        {
            trident: a.indexOf("Trident") > -1,
            presto: a.indexOf("Presto") > -1,
            webKit: a.indexOf("AppleWebKit") > -1,
            gecko: a.indexOf("Gecko") > -1 && -1 == a.indexOf("KHTML"),
            ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
            iPhone: a.indexOf("iPhone") > -1,
            iPad: a.indexOf("iPad") > -1,
            webApp: -1 == a.indexOf("Safari")
        }
    }(),
    b.inherit = function (a, b) {
        var c = new Function;
        c.prototype = b.prototype,
        a.prototype = new c,
        a.prototype.constructor = a,
        a.superclass = b.prototype,
        a.prototype.constructor == Object.prototype.constructor && (a.prototype.constructor = b)
    },
    b.extend = function (a, b) {
        var c;
        for (c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    },
    b.createSprite = function (a) {
        var c = function (c) {
            b.extend(this, a),
            b.Sprite.call(this, c)
        };
        return b.inherit(c, b.Sprite),
        c
    },
    b.createBitmap = function (a) {
        var c = function (c) {
            b.extend(this, a),
            b.Bitmap.call(this, c)
        };
        return b.inherit(c, b.Bitmap),
        c
    },
    b.eventList = {},
    b.DisplayObject = function (a) {
        this.x = 0,
        this.y = 0,
        this.width = 0,
        this.height = 0,
        this.alpha = 1,
        this.die = 0,
        this.rotation = 0,
        this.visible = 0,
        this.scaleX = 1,
        this.scaleY = 1,
        this.globalCompositeOperation = "",
        this.ctx = null,
        this.obb = [],
        this.eventFuc = {},
        this.static = 0,
        this.timeline = 0,
        this.ontween = 0,
        b.extend(this, a),
        this.__init()
    },
    b.DisplayObject.prototype = {
        __transform: function (a) {
            a.translate(this.x, this.y),
            this.alpha < 1 && (a.globalAlpha = this.alpha),
            this.rotation && a.rotate(this.rotation),
            (1 != this.scaleX || 1 != this.scaleY) && a.scale(this.scaleX, this.scaleY),
            this.globalCompositeOperation && (a.globalCompositeOperation = this.globalCompositeOperation)
        },
        render: function (a) {
            if (this.__tween(a), this.timeline++, !this.visible) {
                var b = this.ctx;
                b.save(),
                this.__transform(b),
                this.draw(b),
                b.restore()
            }
        },
        addEventListener: function (a, c) {
            b.eventList[a] || (b.eventList[a] = []),
            this.eventFuc[a] || (this.eventFuc[a] = []),
            b.eventList[a].push(this),
            this.eventFuc[a].push(c.bind(this))
        },
        removeEventListener: function (a) {
            b.eventList[a].splice(b.eventList[a].indexOf(this), 1),
            this.eventFuc[a] = []
        },
        testObb: function () {
            return new b.OBB(new b.Vector2(this.x - this.__obb_x, this.y - this.__obb_y), this.__w, this.__h, this.rotation)
        },
        __init: function () {
            this.__w = this.obb[2] - this.obb[0],
            this.__h = this.obb[3] - this.obb[1],
            this.__obb_x = this.width / 2 - this.obb[0] - this.__w / 2,
            this.__obb_y = this.height / 2 - this.obb[1] - this.__h / 2,
            this.w = this.width,
            this.h = this.height
        },
        setObb: function (a) {
            this.obb = a
        },
        checkBorder: function () {
            return b.OBBvsOBB(this.testObb(), new OBB(new b.Vector2(canvas_w / 2, canvas_h / 2), canvas_w, canvas_h, 0))
        },
        remove: function () {
            this.die = 1;
            for (var a in this.eventFuc) this.removeEventListener(a)
        },
        to: function (a, b, c, d, e, f) {
            this.duration = b,
            this.pattern = c || "Linear",
            this.ease = d || "easeIn",
            this.tween_obj = a,
            this.ontween = 1,
            this.current = 0,
            this.delaytime = e || 0,
            this.delaytime_t = 0,
            this.fuc = f || null,
            this.d_obj = {};
            for (i in a) this.d_obj[i] = this[i]
        },
        __tween: function (a) {
            if (this.ontween) if (this.delaytime_t >= this.delaytime) {
                this.current += a;
                for (i in this.tween_obj) this[i] = "Linear" == this.pattern ? b.Tween.Linear(this.current, this.d_obj[i], this.tween_obj[i] - this.d_obj[i], this.duration) : b.Tween[this.pattern][this.ease](this.current, this.d_obj[i], this.tween_obj[i] - this.d_obj[i], this.duration);
                if (this.current >= this.duration) {
                    for (i in this.tween_obj) this[i] = this.tween_obj[i];
                    this.ontween = 0,
                    this.delaytime_t = 0,
                    this.fuc && this.fuc()
                }
            } else this.delaytime_t += a
        }
    },
    b.Tween = {
        Linear: function (a, b, c, d) {
            return c * a / d + b
        },
        Quad: {
            easeIn: function (a, b, c, d) {
                return c * (a /= d) * a + b
            },
            easeOut: function (a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b
            },
            easeInOut: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
            }
        },
        Cubic: {
            easeIn: function (a, b, c, d) {
                return c * (a /= d) * a * a + b
            },
            easeOut: function (a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b
            },
            easeInOut: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
            }
        },
        Quart: {
            easeIn: function (a, b, c, d) {
                return c * (a /= d) * a * a * a + b
            },
            easeOut: function (a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b
            },
            easeInOut: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
            }
        },
        Quint: {
            easeIn: function (a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b
            },
            easeOut: function (a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b
            },
            easeInOut: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
            }
        },
        Sine: {
            easeIn: function (a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
            },
            easeOut: function (a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 2)) + b
            },
            easeInOut: function (a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
            }
        },
        Expo: {
            easeIn: function (a, b, c, d) {
                return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
            },
            easeOut: function (a, b, c, d) {
                return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
            },
            easeInOut: function (a, b, c, d) {
                return 0 == a ? b : a == d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
            }
        },
        Circ: {
            easeIn: function (a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
            },
            easeOut: function (a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
            },
            easeInOut: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
            }
        },
        Elastic: {
            easeIn: function (a, b, c, d, e, f) {
                if (0 == a) return b;
                if (1 == (a /= d)) return b + c;
                if (f || (f = .3 * d), !e || e < Math.abs(c)) {
                    e = c;
                    var g = f / 4
                } else var g = f / (2 * Math.PI) * Math.asin(c / e);
                return -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f)) + b
            },
            easeOut: function (a, b, c, d, e, f) {
                if (0 == a) return b;
                if (1 == (a /= d)) return b + c;
                if (f || (f = .3 * d), !e || e < Math.abs(c)) {
                    e = c;
                    var g = f / 4
                } else var g = f / (2 * Math.PI) * Math.asin(c / e);
                return e * Math.pow(2, -10 * a) * Math.sin((a * d - g) * 2 * Math.PI / f) + c + b
            },
            easeInOut: function (a, b, c, d, e, f) {
                if (0 == a) return b;
                if (2 == (a /= d / 2)) return b + c;
                if (f || (f = d * .3 * 1.5), !e || e < Math.abs(c)) {
                    e = c;
                    var g = f / 4
                } else var g = f / (2 * Math.PI) * Math.asin(c / e);
                return 1 > a ? -.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f) + b : .5 * e * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f) + c + b
            }
        },
        Back: {
            easeIn: function (a, b, c, d, e) {
                return void 0 == e && (e = 1.70158),
                c * (a /= d) * a * ((e + 1) * a - e) + b
            },
            easeOut: function (a, b, c, d, e) {
                return void 0 == e && (e = 1.70158),
                c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
            },
            easeInOut: function (a, b, c, d, e) {
                return void 0 == e && (e = 1.70158),
                (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
            }
        },
        Bounce: {
            easeIn: function (a, b, c, d) {
                return c - this.easeOut(d - a, 0, c, d) + b
            },
            easeOut: function (a, b, c, d) {
                return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
            },
            easeInOut: function (a, b, c, d) {
                return d / 2 > a ? .5 * this.easeIn(2 * a, 0, c, d) + b : .5 * this.easeOut(2 * a - d, 0, c, d) + .5 * c + b
            }
        }
    },
    b.Bitmap = function (a) {
        b.DisplayObject.call(this, a)
    },
    b.inherit(b.Bitmap, b.DisplayObject),
    b.Bitmap.prototype.draw = function (a) {
        a.drawImage(this.img, 0, 0, this.width, this.height, -this.w / 2, -this.h / 2, this.w, this.h)
    },
    b.Bitmap.prototype.update = function () { },
    b.Sprite = function (a) {
        this.anim = null,
        b.DisplayObject.call(this, a)
    },
    b.inherit(b.Sprite, b.DisplayObject),
    b.Sprite.prototype.draw = function (a) {
        a.drawImage(this.anim.img, this.anim.x, this.anim.y, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height)
    },
    b.Sprite.prototype.setAnim = function (a) {
        this.anim = a
    },
    b.Animdata = function (a, b, c) {
        for (var d = [], e = a.height / b, f = a.width / c, g = 0; b > g; g++) for (var h = 0; c > h; h++) d.push([h * f, e * g]);
        return d
    },
    b.Animation = function (a) {
        this.ctx = null,
        this.img = null,
        this.frames = [],
        this.loop = 0,
        this.speed = 1,
        this.__speed_t = 0,
        this.duration = 0,
        this.frameIndex = 0,
        this.onplay = 1,
        b.extend(this, a),
        this.len = this.frames.length
    },
    b.Animation.prototype = {
        update: function (a) {
            this.onplay && (this.__speed_t += a * this.speed, this.__speed_t >= this.duration && this.__nextFrame(Math.floor(this.__speed_t / this.duration)), this.x = this.frames[this.frameIndex][0], this.y = this.frames[this.frameIndex][1])
        },
        setEndfuc: function (a) {
            this.endfuc = a
        },
        setSpeed: function (a) {
            this.speed = a,
            this.__speed_t = 0
        },
        stop: function () {
            this.onplay = 0
        },
        play: function () {
            this.onplay = 1
        },
        __nextFrame: function (a) {
            this.frameIndex < this.len - a ? this.goframe(this.frameIndex + a) : this.loop ? this.goframe(0) : (this.endfuc && this.endfuc(), this.stop())
        },
        goframe: function (a) {
            this.frameIndex = a,
            this.__speed_t = 0
        }
    },
    b.TextField = function (a) {
        this.type = "text",
        this.color = "#000",
        this.size = "12px",
        this.family = "Arial",
        this.text = "",
        this.weight = "normal",
        this.textAlign = "left",
        b.DisplayObject.call(this, a)
    },
    b.inherit(b.TextField, b.DisplayObject),
    b.TextField.prototype.draw = function (a) {
        a.fillStyle = this.color,
        a.textAlign = this.textAlign,
        a.font = this.weight + " " + this.size + "px " + this.family,
        a.fillText(this.text, 0, 0),
        a.fill()
    },
    b.TextField.prototype.update = function () { },
    b.Math = {
        random: function (a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        coordinate: function (a, b, c, d, e) {
            var f = (a - c) * Math.cos(e),
            g = (b - d) * Math.sin(e);
            return [Math.round(f - g + c), Math.round(f + g + c)]
        }
    },
    b.OBB = function (a, c, d, e) {
        this.centerPoint = a,
        this.extents = [c / 2, d / 2],
        this.axes = [new b.Vector2(Math.cos(e), Math.sin(e)), new b.Vector2(-Math.sin(e), Math.cos(e))],
        this._width = c,
        this._height = d,
        this._rotation = e
    },
    b.OBB.prototype.getRadius = function (a) {
        return this.extents[0] * Math.abs(a.dot(this.axes[0])) + this.extents[1] * Math.abs(a.dot(this.axes[1]))
    },
    b.Vector2 = function (a, b) {
        this.x = a || 0,
        this.y = b || 0
    },
    b.Vector2.prototype = {
        sub: function (a) {
            return new b.Vector2(this.x - a.x, this.y - a.y)
        },
        dot: function (a) {
            return this.x * a.x + this.y * a.y
        }
    },
    b.OBBvsOBB = function (a, b) {
        var c = a.centerPoint.sub(b.centerPoint),
        d = a.axes[0],
        e = a.axes[1],
        f = b.axes[0],
        g = b.axes[1];
        return a.getRadius(g) + b.getRadius(g) <= Math.abs(c.dot(g)) || a.getRadius(f) + b.getRadius(f) <= Math.abs(c.dot(f)) || a.getRadius(e) + b.getRadius(e) <= Math.abs(c.dot(e)) || a.getRadius(d) + b.getRadius(d) <= Math.abs(c.dot(d)) ? 0 : 1
    },
    a.eG = a.easyGame = b
}(window);
var buzz = {
    defaults: {
        autoplay: !1,
        duration: 5e3,
        formats: [],
        loop: !1,
        placeholder: "--",
        preload: "metadata",
        volume: 80
    },
    types: {
        mp3: "audio/mpeg",
        ogg: "audio/ogg",
        wav: "audio/wav",
        aac: "audio/aac",
        m4a: "audio/x-m4a"
    },
    sounds: [],
    el: document.createElement("audio"),
    sound: function (a, b) {
        function c(a) {
            for (var b = [], c = a.length - 1, d = 0; c >= d; d++) b.push({
                start: a.start(c),
                end: a.end(c)
            });
            return b
        }
        function d(a) {
            return a.split(".").pop()
        }
        function e(a, b) {
            var c = document.createElement("source");
            c.src = b,
            buzz.types[d(b)] && (c.type = buzz.types[d(b)]),
            a.appendChild(c)
        }
        b = b || {};
        var f = 0,
        g = [],
        h = {},
        i = buzz.isSupported();
        if (this.load = function () {
            return i ? (this.sound.load(), this) : this
        },
        this.play = function () {
            return i ? (this.sound.play(), this) : this
        },
        this.togglePlay = function () {
            return i ? (this.sound.paused ? this.sound.play() : this.sound.pause(), this) : this
        },
        this.pause = function () {
            return i ? (this.sound.pause(), this) : this
        },
        this.isPaused = function () {
            return i ? this.sound.paused : null
        },
        this.stop = function () {
            return i ? (this.setTime(this.getDuration()), this.sound.pause(), this) : this
        },
        this.isEnded = function () {
            return i ? this.sound.ended : null
        },
        this.loop = function () {
            return i ? (this.sound.loop = "loop", this.bind("ended.buzzloop",
            function () {
                this.currentTime = 0,
                this.play()
        }), this) : this
        },
        this.unloop = function () {
            return i ? (this.sound.removeAttribute("loop"), this.unbind("ended.buzzloop"), this) : this
        },
        this.mute = function () {
            return i ? (this.sound.muted = !0, this) : this
        },
        this.unmute = function () {
            return i ? (this.sound.muted = !1, this) : this
        },
        this.toggleMute = function () {
            return i ? (this.sound.muted = !this.sound.muted, this) : this
        },
        this.isMuted = function () {
            return i ? this.sound.muted : null
        },
        this.setVolume = function (a) {
            return i ? (0 > a && (a = 0), a > 100 && (a = 100), this.volume = a, this.sound.volume = a / 100, this) : this
        },
        this.getVolume = function () {
            return i ? this.volume : this
        },
        this.increaseVolume = function (a) {
            return this.setVolume(this.volume + (a || 1))
        },
        this.decreaseVolume = function (a) {
            return this.setVolume(this.volume - (a || 1))
        },
        this.setTime = function (a) {
            return i ? (this.whenReady(function () {
                this.sound.currentTime = a
        }), this) : this
        },
        this.getTime = function () {
            if (!i) return null;
            var a = Math.round(100 * this.sound.currentTime) / 100;
            return isNaN(a) ? buzz.defaults.placeholder : a
        },
        this.setPercent = function (a) {
            return i ? this.setTime(buzz.fromPercent(a, this.sound.duration)) : this
        },
        this.getPercent = function () {
            if (!i) return null;
            var a = Math.round(buzz.toPercent(this.sound.currentTime, this.sound.duration));
            return isNaN(a) ? buzz.defaults.placeholder : a
        },
        this.setSpeed = function (a) {
            return i ? (this.sound.playbackRate = a, void 0) : this
        },
        this.getSpeed = function () {
            return i ? this.sound.playbackRate : null
        },
        this.getDuration = function () {
            if (!i) return null;
            var a = Math.round(100 * this.sound.duration) / 100;
            return isNaN(a) ? buzz.defaults.placeholder : a
        },
        this.getPlayed = function () {
            return i ? c(this.sound.played) : null
        },
        this.getBuffered = function () {
            return i ? c(this.sound.buffered) : null
        },
        this.getSeekable = function () {
            return i ? c(this.sound.seekable) : null
        },
        this.getErrorCode = function () {
            return i && this.sound.error ? this.sound.error.code : 0
        },
        this.getErrorMessage = function () {
            if (!i) return null;
            switch (this.getErrorCode()) {
            case 1:
                return "MEDIA_ERR_ABORTED";
            case 2:
                return "MEDIA_ERR_NETWORK";
            case 3:
                return "MEDIA_ERR_DECODE";
            case 4:
                return "MEDIA_ERR_SRC_NOT_SUPPORTED";
            default:
                return null
        }
        },
        this.getStateCode = function () {
            return i ? this.sound.readyState : null
        },
        this.getStateMessage = function () {
            if (!i) return null;
            switch (this.getStateCode()) {
            case 0:
                return "HAVE_NOTHING";
            case 1:
                return "HAVE_METADATA";
            case 2:
                return "HAVE_CURRENT_DATA";
            case 3:
                return "HAVE_FUTURE_DATA";
            case 4:
                return "HAVE_ENOUGH_DATA";
            default:
                return null
        }
        },
        this.getNetworkStateCode = function () {
            return i ? this.sound.networkState : null
        },
        this.getNetworkStateMessage = function () {
            if (!i) return null;
            switch (this.getNetworkStateCode()) {
            case 0:
                return "NETWORK_EMPTY";
            case 1:
                return "NETWORK_IDLE";
            case 2:
                return "NETWORK_LOADING";
            case 3:
                return "NETWORK_NO_SOURCE";
            default:
                return null
        }
        },
        this.set = function (a, b) {
            return i ? (this.sound[a] = b, this) : this
        },
        this.get = function (a) {
            return i ? a ? this.sound[a] : this.sound : null
        },
        this.bind = function (a, b) {
            if (!i) return this;
            a = a.split(" ");
            for (var c = this,
            d = function (a) {
                b.call(c, a)
        },
            e = 0; e < a.length; e++) {
                var f = a[e],
                h = f;
                f = h.split(".")[0],
                g.push({
            idx: h,
            func: d
        }),
                this.sound.addEventListener(f, d, !0)
        }
            return this
        },
        this.unbind = function (a) {
            if (!i) return this;
            a = a.split(" ");
            for (var b = 0; b < a.length; b++) for (var c = a[b], d = c.split(".")[0], e = 0; e < g.length; e++) {
                var f = g[e].idx.split("."); (g[e].idx == c || f[1] && f[1] == c.replace(".", "")) && (this.sound.removeEventListener(d, g[e].func, !0), delete g[e])
        }
            return this
        },
        this.bindOnce = function (a, b) {
            if (!i) return this;
            var c = this;
            h[f++] = !1,
            this.bind(f + a,
            function () {
                h[f] || (h[f] = !0, b.call(c)),
                c.unbind(f + a)
        })
        },
        this.trigger = function (a) {
            if (!i) return this;
            a = a.split(" ");
            for (var b = 0; b < a.length; b++) for (var c = a[b], d = 0; d < g.length; d++) {
                var e = g[d].idx.split(".");
                if (g[d].idx == c || e[0] && e[0] == c.replace(".", "")) {
                    var f = document.createEvent("HTMLEvents");
                    f.initEvent(e[0], !1, !0),
                    this.sound.dispatchEvent(f)
        }
        }
            return this
        },
        this.fadeTo = function (a, b, c) {
            function d() {
                setTimeout(function () {
                    a > e && g.volume < a ? (g.setVolume(g.volume += 1), d()) : e > a && g.volume > a ? (g.setVolume(g.volume -= 1), d()) : c instanceof Function && c.apply(g)
        },
                f)
        }
            if (!i) return this;
            b instanceof Function ? (c = b, b = buzz.defaults.duration) : b = b || buzz.defaults.duration;
            var e = this.volume,
            f = b / Math.abs(e - a),
            g = this;
            return this.play(),
            this.whenReady(function () {
                d()
        }),
            this
        },
        this.fadeIn = function (a, b) {
            return i ? this.setVolume(0).fadeTo(100, a, b) : this
        },
        this.fadeOut = function (a, b) {
            return i ? this.fadeTo(0, a, b) : this
        },
        this.fadeWith = function (a, b) {
            return i ? (this.fadeOut(b,
            function () {
                this.stop()
        }), a.play().fadeIn(b), this) : this
        },
        this.whenReady = function (a) {
            if (!i) return null;
            var b = this;
            0 === this.sound.readyState ? this.bind("canplay.buzzwhenready",
            function () {
                a.call(b)
        }) : a.call(b)
        },
        i) {
            for (var j in buzz.defaults) buzz.defaults.hasOwnProperty(j) && (b[j] = b[j] || buzz.defaults[j]);
            if (this.sound = document.createElement("audio"), a instanceof Array) for (var k in a) a.hasOwnProperty(k) && e(this.sound, a[k]);
            else if (b.formats.length) for (var l in b.formats) b.formats.hasOwnProperty(l) && e(this.sound, a + "." + b.formats[l]);
            else e(this.sound, a);
            b.loop && this.loop(),
            b.autoplay && (this.sound.autoplay = "autoplay"),
            this.sound.preload = b.preload === !0 ? "auto" : b.preload === !1 ? "none" : b.preload,
            this.setVolume(b.volume),
            buzz.sounds.push(this)
        }
    },
    group: function (a) {
        function b() {
            for (var b = c(null, arguments), d = b.shift(), e = 0; e < a.length; e++) a[e][d].apply(a[e], b)
        }
        function c(a, b) {
            return a instanceof Array ? a : Array.prototype.slice.call(b)
        }
        a = c(a, arguments),
        this.getSounds = function () {
            return a
        },
        this.add = function (b) {
            b = c(b, arguments);
            for (var d = 0; d < b.length; d++) a.push(b[d])
        },
        this.remove = function (b) {
            b = c(b, arguments);
            for (var d = 0; d < b.length; d++) for (var e = 0; e < a.length; e++) if (a[e] == b[d]) {
                delete a[e];
                break
            }
        },
        this.load = function () {
            return b("load"),
            this
        },
        this.play = function () {
            return b("play"),
            this
        },
        this.togglePlay = function () {
            return b("togglePlay"),
            this
        },
        this.pause = function (a) {
            return b("pause", a),
            this
        },
        this.stop = function () {
            return b("stop"),
            this
        },
        this.mute = function () {
            return b("mute"),
            this
        },
        this.unmute = function () {
            return b("unmute"),
            this
        },
        this.toggleMute = function () {
            return b("toggleMute"),
            this
        },
        this.setVolume = function (a) {
            return b("setVolume", a),
            this
        },
        this.increaseVolume = function (a) {
            return b("increaseVolume", a),
            this
        },
        this.decreaseVolume = function (a) {
            return b("decreaseVolume", a),
            this
        },
        this.loop = function () {
            return b("loop"),
            this
        },
        this.unloop = function () {
            return b("unloop"),
            this
        },
        this.setTime = function (a) {
            return b("setTime", a),
            this
        },
        this.setduration = function (a) {
            return b("setduration", a),
            this
        },
        this.set = function (a, c) {
            return b("set", a, c),
            this
        },
        this.bind = function (a, c) {
            return b("bind", a, c),
            this
        },
        this.unbind = function (a) {
            return b("unbind", a),
            this
        },
        this.bindOnce = function (a, c) {
            return b("bindOnce", a, c),
            this
        },
        this.trigger = function (a) {
            return b("trigger", a),
            this
        },
        this.fade = function (a, c, d, e) {
            return b("fade", a, c, d, e),
            this
        },
        this.fadeIn = function (a, c) {
            return b("fadeIn", a, c),
            this
        },
        this.fadeOut = function (a, c) {
            return b("fadeOut", a, c),
            this
        }
    },
    all: function () {
        return new buzz.group(buzz.sounds)
    },
    isSupported: function () {
        return !!buzz.el.canPlayType
    },
    isOGGSupported: function () {
        return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/ogg; codecs="vorbis"')
    },
    isWAVSupported: function () {
        return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/wav; codecs="1"')
    },
    isMP3Supported: function () {
        return !!buzz.el.canPlayType && buzz.el.canPlayType("audio/mpeg;")
    },
    isAACSupported: function () {
        return !!buzz.el.canPlayType && (buzz.el.canPlayType("audio/x-m4a;") || buzz.el.canPlayType("audio/aac;"))
    },
    toTimer: function (a, b) {
        var c, d, e;
        return c = Math.floor(a / 3600),
        c = isNaN(c) ? "--" : c >= 10 ? c : "0" + c,
        d = b ? Math.floor(a / 60 % 60) : Math.floor(a / 60),
        d = isNaN(d) ? "--" : d >= 10 ? d : "0" + d,
        e = Math.floor(a % 60),
        e = isNaN(e) ? "--" : e >= 10 ? e : "0" + e,
        b ? c + ":" + d + ":" + e : d + ":" + e
    },
    fromTimer: function (a) {
        var b = a.toString().split(":");
        return b && 3 == b.length && (a = 3600 * parseInt(b[0], 10) + 60 * parseInt(b[1], 10) + parseInt(b[2], 10)),
        b && 2 == b.length && (a = 60 * parseInt(b[0], 10) + parseInt(b[1], 10)),
        a
    },
    toPercent: function (a, b, c) {
        var d = Math.pow(10, c || 0);
        return Math.round(100 * a / b * d) / d
    },
    fromPercent: function (a, b, c) {
        var d = Math.pow(10, c || 0);
        return Math.round(b / 100 * a * d) / d
    }
},
loadImg1 = new Image;
loadImg1.src = "img/load1.png";
var zfj = easyGame({
    canvas: document.getElementById("myCanvas")
});
zfj.loading([{
    id: "bg",
    url: "img/bg.jpg"
},
{
    id: "over_bg",
    url: "img/over_bg.png"
},
{
    id: "startBtn",
    url: "img/startBtn.png"
},
{
    id: "fj1",
    url: "img/fj1.png"
},
{
    id: "fx_n",
    url: "img/fx_n.png"
},
{
    id: "boo",
    url: "img/boo.png"
},
{
    id: "sg1",
    url: "img/sg1.png"
},
{
    id: "sg2",
    url: "img/sg2.png"
},
{
    id: "sg3",
    url: "img/sg3.png"
},
{
    id: "sg4",
    url: "img/sg4.png"
},
{
    id: "sg5",
    url: "img/sg5.png"
},
{
    id: "sg6",
    url: "img/sg6.png"
},
{
    id: "sd",
    url: "img/sd.png"
},
{
    id: "winBg",
    url: "img/winBg.jpg"
},
{
    id: "zw",
    url: "img/zw.png"
},
{
    id: "xy",
    url: "img/xy.png"
},
{
    id: "fx",
    url: "img/fx.png"
},
{
    id: "rule",
    url: "img/rule.png"
}],
function () {
    zfj.gameStart(),
    zfj.startReady()
}),
zfj.extend({
    createBg: function () {
        this.bglayer = zfj.createLayer();
        var a = new Bg({
            x: 180,
            y: 990,
            type: 0,
            img: zfj.getImg("bg"),
            width: 360,
            height: 660,
            ctx: zfj.ctx
        }),
        b = new Bg({
            x: 180,
            y: 330,
            type: 1,
            img: zfj.getImg("bg"),
            width: 360,
            height: 660,
            ctx: zfj.ctx
        });
        this.bglayer.push(a, b)
    },
    createrBtn: function (a, b, c) {
        var d = a.width,
        e = a.height,
        f = new easyGame.Bitmap({
            ctx: zfj.ctx,
            img: a,
            width: d,
            height: e,
            "static": 1,
            x: b,
            y: c,
            ct: 0,
            obb: [0, 0, d, e]
        });
        return f
    },
    createStart: function () {
        var a = this.createrBtn(zfj.getImg("startBtn"), 180, 720);
        a.to({
            y: zfj.pos_y - 180
        },
        400, "Circ", "easeOut", 0,
        function () {
            a.update = function (a) {
                this.ct += a,
                this.y -= Math.sin(Math.PI / 500 * this.ct)
            }
        });
        var b = new easyGame.Bitmap({
            ctx: zfj.ctx,
            img: zfj.getImg("rule"),
            width: 360,
            height: 128,
            "static": 1,
            x: -180,
            y: zfj.pos_y - 360
        });
        b.to({
            x: 180
        },
        500, "Back", "easeOut", 0),
        this.btnlayer.push(b),
        a.addEventListener("touchstart",
        function () {
            zfj.overBg.hide(),
            zfj.fx1.addEventListener("touchstart",
            function () {
                zfj.fj.fx = "R"
            }),
            zfj.fx2.addEventListener("touchstart",
            function () {
                zfj.fj.fx = "L"
            }),
            zfj.fx1.addEventListener("touchend",
            function () {
                zfj.fj.fx = "CL"
            }),
            zfj.fx2.addEventListener("touchend",
            function () {
                zfj.fj.fx = "CL"
            }),
            b.to({
                x: 580
            },
            400, "Back", "easeIn", 0,
            function () {
                this.remove()
            }),
            this.to({
                x: 620
            },
            300, "Back", "easeIn", 0,
            function () {
                this.remove(),
                zfj.onstop = 0
            })
        }),
        this.btnlayer.push(a)
    },
    createBoo: function (a, b, c, d, e) {
        var f = a.width,
        g = a.height,
        h = Math.PI / 18 * eG.Math.random(1, 36),
        i = new Boo({
            ctx: zfj.ctx,
            img: a,
            width: f,
            height: g,
            w: b,
            h: c,
            "static": 1,
            speed: eG.Math.random(4, 6),
            x: d,
            y: e,
            rotation: h
        });
        this.mainlayer.push(i)
    },
    collide: function () {
        zfj.fj.to({
            y: zfj.pos_y,
            rotation: 2 * Math.PI
        },
        500, "Back", "easeIn", 0,
        function () {
            for (var a = 0; 10 > a; a++) zfj.createBoo(zfj.getImg("boo"), 32, 32, zfj.fj.x, zfj.fj.y);
            zfj.overBg.show();
            var b = new easyGame.TextField({
                x: 180,
                y: -40,
                text: "\u60a8\u4e0b\u964d\u4e86" + zfj.jl.text,
                "static": 1,
                color: "#fff",
                weight: "bold",
                ctx: zfj.ctx,
                n: 0,
                size: 32,
                textAlign: "center"
            });
            b.to({
                y: 180
            },
            300, "Back", "easeOut", 200);
            dp_submitScore(zfj.jl.n.toFixed(1));
            var c = new easyGame.TextField({
                x: 180,
                y: zfj.pos_y + 60,
                text: "\u60a8\u51fb\u8d25\u4e86\u5168\u56fd" + zfj.sortScore() + "\u7684\u98de\u673a\u624b",
                "static": 1,
                color: "#fff",
                weight: "bold",
                ctx: zfj.ctx,
                n: 0,
                size: 22,
                textAlign: "center"
            });
            c.to({
                y: 240
            },
            400, "Back", "easeOut", 200),
            zfj.overlayer.push(zfj.winBg);
            var d = zfj.createrBtn(zfj.getImg("zw"), -180, 290),
            e = zfj.createrBtn(zfj.getImg("xy"), 480, 290);
            d.to({
                x: 96,
                rotation: 2 * Math.PI
            },
            300, "Back", "easeOut", 600),
            e.to({
                x: 264,
                rotation: 2 * Math.PI
            },
            300, "Back", "easeOut", 900),
            d.addEventListener("touchstart",
            function () {
                zfj.setEmpty(),
                zfj.startReady()
            }),
            e.addEventListener("touchstart",
            function () {
                dp_share();
            }),
            zfj.btnlayer.push(d, e),
            zfj.btnlayer.push(b, c)
        }),
        zfj.setviewPort(0, 0),
        zfj.onstop = 1
    },
    getItext: function () {
        var a = "\u6211\u4e0b\u4e86" + zfj.jl.text + "m,\u51fb\u8d25\u4e86\u5168\u56fd" + zfj.sortScore() + "\u7684\u98de\u673a\u624b\uff0c\u6765\u8bd5\u8bd5\u5427\uff01\uff01\uff01";
        return a
    },
    startReady: function () {
        this.n = 0,
        this.prize_n = 0,
        this.onstop = 1,
        this.createBg(),
        this.squarelayer = zfj.createLayer(),
        this.mainlayer = zfj.createLayer(),
        this.overlayer = zfj.createLayer(),
        this.btnlayer = zfj.createLayer(),
        this.createStart(),
        this.createsquare(500, zfj.getImg("sg" + eG.Math.random(1, 6))),
        zfj.getLast_y(),
        this.createsquare(this.last_y + 250, zfj.getImg("sg" + eG.Math.random(1, 6))),
        this.fj = new Plane({
            x: 180,
            speed: 800,
            y: -40,
            "static": 0,
            img: zfj.getImg("fj1"),
            width: 48,
            height: 48,
            st: 0,
            fx: "CL",
            ctx: zfj.ctx,
            obb: [20, 10, 32, 48]
        }),
        this.fj_yy = new easyGame.Bitmap({
            x: zfj.fj.x + 30,
            y: zfj.fj.y + 40,
            img: zfj.getImg("sd"),
            width: 36,
            height: 38,
            ctx: zfj.ctx
        }),
        this.fj_yy.update = function () {
            this.x = zfj.fj.x + 40,
            this.y = zfj.fj.y + 40,
            this.rotation = zfj.fj.rotation
        },
        this.mainlayer.push(this.fj_yy, this.fj),
        this.jl = new easyGame.TextField({
            x: 160,
            y: 30,
            text: "0m",
            "static": 1,
            color: "#fff",
            weight: "bold",
            ctx: zfj.ctx,
            n: 0,
            size: 28
        }),
        this.mainlayer.push(this.jl),
        this.fx1 = new easyGame.Bitmap({
            x: 75,
            y: zfj.pos_y - 75,
            "static": 1,
            img: zfj.getImg("fx_n"),
            width: 150,
            height: 150,
            visible: 1,
            obb: [0, 0, 150, 150],
            ctx: zfj.ctx
        }),
        this.fx2 = new easyGame.Bitmap({
            x: 285,
            y: zfj.pos_y - 75,
            "static": 1,
            img: zfj.getImg("fx_n"),
            width: 150,
            height: 150,
            visible: 1,
            obb: [0, 0, 150, 150],
            ctx: zfj.ctx
        }),
        this.mainlayer.push(this.fx1, this.fx2),
        this.overBg = new easyGame.Bitmap({
            x: 180,
            y: 330,
            "static": 1,
            img: zfj.getImg("over_bg"),
            width: 360,
            height: 660,
            alpha: .5,
            ctx: zfj.ctx
        }),
        this.overBg.to({
            alpha: 1
        },
        300, "Linear", "easeIn", 0),
        this.overBg.show = function () {
            zfj.overBg.die = 0,
            zfj.overBg.alpha = 1,
            zfj.disable = 0,
            zfj.overlayer.push(zfj.overBg)
        },
        this.overBg.hide = function () {
            zfj.disable = 1,
            zfj.overBg.remove()
        },
        this.overBg.show(),
        this.fxBox = new easyGame.Bitmap({
            x: 180,
            y: 330,
            "static": 1,
            img: zfj.getImg("fx"),
            width: 360,
            height: 660,
            alpha: 1,
            ctx: zfj.ctx
        }),
        this.fxBox.to({
            alpha: 0
        },
        300, "Linear", "easeIn", 2e3,
        function () {
            zfj.fxBox.remove()
        }),
        this.fxBox.show = function () {
            zfj.fxBox.die = 0,
            zfj.fxBox.alpha = 1,
            zfj.fxBox.to({
                alpha: 0
            },
            300, "Linear", "easeIn", 2e3,
            function () {
                zfj.fxBox.remove()
            }),
            zfj.btnlayer.push(zfj.fxBox)
        },
        this.fxBox.hide = function () {
            zfj.fxBox.remove()
        },
        this.winBg = new easyGame.Bitmap({
            x: 180,
            y: 250,
            globalCompositeOperation: "lighter",
            "static": 1,
            img: zfj.getImg("winBg"),
            width: 700,
            height: 700,
            ctx: zfj.ctx,
            alpha: 0,
            rotation: 0
        }),
        this.winBg.to({
            alpha: 1
        },
        400, "Linear", "easeIn", 400),
        this.winBg.update = function (a) {
            this.rotation += Math.PI / 3e3 * a
        }
    },
    createBlockList: function (a) {
        var b = eG.Math.random(1, 2);
        switch (b) {
            case 1:
                return this.createlxx(a - 220),
                this.createBlock(50 - 5 * eG.Math.random(1, 20), a, block.getImg("b"), 0);
            case 2:
                return this.createlxx(a - 220),
                this.createBlock(430 + 5 * eG.Math.random(1, 20), a, block.getImg("b"), 0)
        }
    },
    hasGift: function () {
        this.score.update = function () {
            this.y = block.over1.y - 148
        },
        block.score.text = block.sortScore(),
        block.overlayer.push(block.winBg, block.over1, block.over1btn1, block.over1btn2, block.score),
        block.over1btn2.addEventListener("touchstart",
        function () {
            block.setEmpty(),
            block.startReady(),
            block.canvas.className = ""
        }),
        block.over1btn1.addEventListener("touchstart",
        function () { })
    },
    sortScore: function () {
        var a = 0;
        return a = zfj.jl.n < 110 ? .88 * zfj.jl.n : zfj.jl.n < 305 ? 95.92 + .1 * Math.round((zfj.jl.n - 105) / 5) : 100,
        a.toFixed(2) + "%"
    },
    getLast_y: function () {
        var a = this.squarelayer[this.squarelayer.length - 1];
        this.last_y = a.y + a.height / 2
    },
    createsquare: function (a, b) {
        var c = b.height,
        d = eG.Math.random(-10, 10),
        e = new square({
            ctx: zfj.ctx,
            img: b,
            width: 368,
            height: c,
            x: 10 * d - 50 - 10 * eG.Math.random(0, 4),
            y: a + c / 2,
            type: 1,
            obb: [16, 13, 346, c - 13]
        }),
        f = new square({
            ctx: zfj.ctx,
            img: b,
            width: 368,
            height: c,
            x: 360 + 10 * d + 50 + 10 * eG.Math.random(0, 4),
            y: a + c / 2,
            type: 0,
            obb: [16, 13, 346, c - 13]
        });
        this.squarelayer.push(e, f)
    }
}),
zfj.addEventListener("touchstart"),
zfj.addEventListener("touchend");
var square = eG.createBitmap({
    kg: 1
});
square.prototype.update = function () {
    eG.OBBvsOBB(this.testObb(), zfj.fj.testObb()) && this.kg && !zfj.onstop && (this.kg = 0, zfj.collide()),
    this.y <= -this.height / 2 && this.kg && (this.kg = 0, 1 == this.type && (zfj.getLast_y(), zfj.createsquare(zfj.last_y + 250, zfj.getImg("sg" + eG.Math.random(1, 6)))), this.remove())
};
var Bg = eG.createBitmap();
Bg.prototype.update = function () {
    this.y <= -this.height / 2 && (this.y += 2 * this.height)
};
var Boo = eG.createBitmap();
Boo.prototype.update = function (a) {
    this.y += this.speed * a / 15 * Math.cos(-this.rotation),
    this.x += this.speed * a / 15 * Math.sin(-this.rotation),
    this.w -= 1,
    this.h -= 1,
    this.alpha -= .002 * a,
    this.w < 2 && this.remove()
};
var Plane = eG.createBitmap();
Plane.prototype.update = function (a) {
    if (!zfj.onstop) {
        a > 200 && (a = 20),
        this.move();
        var b = Math.cos(this.rotation);
        Math.sin(this.rotation),
        this.y <= 200 && !this.static ? (this.y += this.speed / 12e3 * a * b * b * b * b * b, this.x -= this.speed / 12e3 * a * Math.sin(this.rotation)) : (this.static = 1, zfj.setviewPort(0, -this.speed / 12e3 * b * b * b * b * b), this.x -= this.speed / 12e3 * a * Math.sin(this.rotation)),
        this.speed < 8e3 && this.speed++,
        (this.x < -40 || this.x > 360 || this.y > 660) && zfj.collide(),
        zfj.jl.n += this.speed / 24e4 * b * b * b * b * b,
        zfj.jl.text = zfj.jl.n.toFixed(1) + "m"
    }
},
Plane.prototype.move = function () {
    switch (this.fx) {
        case "R":
            this.rotation <= Math.PI / 2 && (this.rotation += Math.PI / 60);
            break;
        case "L":
            this.rotation >= -Math.PI / 2 && (this.rotation -= Math.PI / 60);
            break;
        case "CL":
    }
}