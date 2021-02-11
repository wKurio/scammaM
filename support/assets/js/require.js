
var requirejs, require, define;
(function(ba) {
    function J(e) {
        return "[object Function]" === N.call(e)
    }

    function K(e) {
        return "[object Array]" === N.call(e)
    }

    function z(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function O(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; - 1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function t(e, t) {
        return ha.call(e, t)
    }

    function m(e, n) {
        return t(e, n) && e[n]
    }

    function H(e, n) {
        for (var r in e)
            if (t(e, r) && n(e[r], r)) break
    }

    function S(e, n, r, i) {
        return n && H(n, function(n, s) {
            if (r || !t(e, s)) i && "string" != typeof n ? (e[s] || (e[s] = {}), S(e[s], n, r, i)) : e[s] = n
        }), e
    }

    function v(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function ca(e) {
        throw e
    }

    function da(e) {
        if (!e) return e;
        var t = ba;
        return z(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function B(e, t, n, r) {
        return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = r, n && (t.originalError = n), t
    }

    function ia(e) {
        function n(e, t, n) {
            var r, i, s, o, u, a, f, l = t && t.split("/");
            r = l;
            var c = C.map,
                h = c && c["*"];
            if (e && "." === e.charAt(0))
                if (t) {
                    r = m(C.pkgs, t) ? l = [t] : l.slice(0, l.length - 1), t = e = r.concat(e.split("/"));
                    for (r = 0; t[r]; r += 1)
                        if (i = t[r], "." === i) t.splice(r, 1), r -= 1;
                        else if (".." === i) {
                        if (1 === r && (".." === t[2] || ".." === t[0])) break;
                        0 < r && (t.splice(r - 1, 2), r -= 2)
                    }
                    r = m(C.pkgs, t = e[0]), e = e.join("/"), r && e === t + "/" + r.main && (e = t)
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if (n && c && (l || h)) {
                t = e.split("/");
                for (r = t.length; 0 < r; r -= 1) {
                    s = t.slice(0, r).join("/");
                    if (l)
                        for (i = l.length; 0 < i; i -= 1)
                            if (n = m(c, l.slice(0, i).join("/")))
                                if (n = m(n, s)) {
                                    o = n, u = r;
                                    break
                                }
                    if (o) break;
                    !a && h && m(h, s) && (a = m(h, s), f = r)
                }!o && a && (o = a, u = f), o && (t.splice(0, u, o), e = t.join("/"))
            }
            return e
        }

        function r(e) {
            A && z(document.getElementsByTagName("script"), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function i(e) {
            var t = m(C.paths, e);
            if (t && K(t) && 1 < t.length) return r(e), t.shift(), x.require.undef(e), x.require([e]), !0
        }

        function s(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function o(e, t, r, i) {
            var o, u, a = null,
                f = t ? t.name : null,
                l = e,
                c = !0,
                h = "";
            return e || (c = !1, e = "_@r" + (P += 1)), e = s(e), a = e[0], e = e[1], a && (a = n(a, f, i), u = m(_, a)), e && (a ? h = u && u.normalize ? u.normalize(e, function(e) {
                return n(e, f, i)
            }) : n(e, f, i) : (h = n(e, f, i), e = s(h), a = e[0], h = e[1], r = !0, o = x.nameToUrl(h))), r = a && !u && !r ? "_unnormalized" + (j += 1) : "", {
                prefix: a,
                name: h,
                parentMap: t,
                unnormalized: !!r,
                url: o,
                originalName: l,
                isDefine: c,
                id: (a ? a + "!" + h : h) + r
            }
        }

        function u(e) {
            var t = e.id,
                n = m(k, t);
            return n || (n = k[t] = new x.Module(e)), n
        }

        function a(e, n, r) {
            var i = e.id,
                s = m(k, i);
            t(_, i) && (!s || s.defineEmitComplete) ? "defined" === n && r(_[i]) : (s = u(e), s.error && "error" === n) ? r(s.error) : s.on(n, r)
        }

        function f(e, t) {
            var n = e.requireModules,
                r = !1;
            t ? t(e) : (z(n, function(t) {
                if (t = m(k, t)) t.error = e, t.events.error && (r = !0, t.emit("error", e))
            }), !r) && h.onError(e)
        }

        function l() {
            U.length && (ja.apply(M, [M.length - 1, 0].concat(U)), U = [])
        }

        function c(e) {
            delete k[e], delete L[e]
        }

        function p(e, t, n) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, z(e.depMaps, function(r, i) {
                var s = r.id,
                    o = m(k, s);
                o && !e.depMatched[i] && !n[s] && (m(t, s) ? (e.defineDep(i, _[s]), e.check()) : p(o, t, n))
            }), n[r] = !0)
        }

        function d() {
            var e, t, n, s, o = (n = 1e3 * C.waitSeconds) && x.startTime + n < (new Date).getTime(),
                u = [],
                a = [],
                l = !1,
                c = !0;
            if (!w) {
                w = !0, H(L, function(n) {
                    e = n.map, t = e.id;
                    if (n.enabled && (e.isDefine || a.push(n), !n.error))
                        if (!n.inited && o) i(t) ? l = s = !0 : (u.push(t), r(t));
                        else if (!n.inited && n.fetched && e.isDefine && (l = !0, !e.prefix)) return c = !1
                });
                if (o && u.length) return n = B("timeout", "Load timeout for modules: " + u, null, u), n.contextName = x.contextName, f(n);
                c && z(a, function(e) {
                    p(e, {}, {})
                }), (!o || s) && l && (A || ea) && !N && (N = setTimeout(function() {
                    N = 0, d()
                }, 50)), w = !1
            }
        }

        function g(e) {
            t(_, e[0]) || u(o(e[0], null, !0)).init(e[1], e[2])
        }

        function y(e) {
            var e = e.currentTarget || e.srcElement,
                t = x.onScriptLoad;
            return e.detachEvent && !Z ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = x.onScriptError, (!e.detachEvent || Z) && e.removeEventListener("error", t, !1), {
                node: e,
                id: e && e.getAttribute("data-requiremodule")
            }
        }

        function b() {
            var e;
            for (l(); M.length;) {
                e = M.shift();
                if (null === e[0]) return f(B("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                g(e)
            }
        }
        var w, E, x, T, N, C = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            k = {},
            L = {},
            O = {},
            M = [],
            _ = {},
            D = {},
            P = 1,
            j = 1;
        return T = {
            require: function(e) {
                return e.require ? e.require : e.require = x.makeRequire(e.map)
            },
            exports: function(e) {
                e.usingExports = !0;
                if (e.map.isDefine) return e.exports ? e.exports : e.exports = _[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        var t = m(C.pkgs, e.map.id);
                        return (t ? m(C.config, e.map.id + "/" + t.main) : m(C.config, e.map.id)) || {}
                    },
                    exports: _[e.map.id]
                }
            }
        }, E = function(e) {
            this.events = m(O, e.id) || {}, this.map = e, this.shim = m(C.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, E.prototype = {
            init: function(e, t, n, r) {
                r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = v(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, x.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    x.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], v(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function() {
                var e = this.map.url;
                D[e] || (D[e] = !0, x.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id;
                    t = this.depExports;
                    var r = this.exports,
                        i = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            this.defining = !0;
                            if (1 > this.depCount && !this.defined) {
                                if (J(i)) {
                                    if (this.events.error && this.map.isDefine || h.onError !== ca) try {
                                        r = x.execCb(n, i, t, r)
                                    } catch (s) {
                                        e = s
                                    } else r = x.execCb(n, i, t, r);
                                    this.map.isDefine && ((t = this.module) && void 0 !== t.exports && t.exports !== this.exports ? r = t.exports : void 0 === r && this.usingExports && (r = this.exports));
                                    if (e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", f(this.error = e)
                                } else r = i;
                                this.exports = r, this.map.isDefine && !this.ignore && (_[n] = r, h.onResourceLoad) && h.onResourceLoad(x, this.map, this.depMaps), c(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    r = e.id,
                    i = o(e.prefix);
                this.depMaps.push(i), a(i, "defined", v(this, function(i) {
                    var s, l;
                    l = this.map.name;
                    var p = this.map.parentMap ? this.map.parentMap.name : null,
                        d = x.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    if (this.map.unnormalized) {
                        if (i.normalize && (l = i.normalize(l, function(e) {
                                return n(e, p, !0)
                            }) || ""), i = o(e.prefix + "!" + l, this.map.parentMap), a(i, "defined", v(this, function(e) {
                                this.init([], function() {
                                    return e
                                }, null, {
                                    enabled: !0,
                                    ignore: !0
                                })
                            })), l = m(k, i.id)) this.depMaps.push(i), this.events.error && l.on("error", v(this, function(e) {
                            this.emit("error", e)
                        })), l.enable()
                    } else s = v(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), s.error = v(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [r], H(k, function(e) {
                            0 === e.map.id.indexOf(r + "_unnormalized") && c(e.map.id)
                        }), f(e)
                    }), s.fromText = v(this, function(n, i) {
                        var a = e.name,
                            l = o(a),
                            c = Q;
                        i && (n = i), c && (Q = !1), u(l), t(C.config, r) && (C.config[a] = C.config[r]);
                        try {
                            h.exec(n)
                        } catch (p) {
                            return f(B("fromtexteval", "fromText eval for " + r + " failed: " + p, p, [r]))
                        }
                        c && (Q = !0), this.depMaps.push(l), x.completeLoad(a), d([a], s)
                    }), i.load(e.name, d, s, C)
                })), x.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                L[this.map.id] = this, this.enabling = this.enabled = !0, z(this.depMaps, v(this, function(e, n) {
                    var r, i;
                    if ("string" == typeof e) {
                        e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[n] = e;
                        if (r = m(T, e.id)) {
                            this.depExports[n] = r(this);
                            return
                        }
                        this.depCount += 1, a(e, "defined", v(this, function(e) {
                            this.defineDep(n, e), this.check()
                        })), this.errback && a(e, "error", v(this, this.errback))
                    }
                    r = e.id, i = k[r], !t(T, r) && i && !i.enabled && x.enable(e, this)
                })), H(this.pluginMaps, v(this, function(e) {
                    var t = m(k, e.id);
                    t && !t.enabled && x.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                z(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, x = {
            config: C,
            contextName: e,
            registry: k,
            defined: _,
            urlFetched: D,
            defQueue: M,
            Module: E,
            makeModuleMap: o,
            nextTick: h.nextTick,
            onError: f,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = C.pkgs,
                    n = C.shim,
                    r = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                H(e, function(e, t) {
                    r[t] ? "map" === t ? (C.map || (C.map = {}), S(C[t], e, !0, !0)) : S(C[t], e, !0) : C[t] = e
                }), e.shim && (H(e.shim, function(e, t) {
                    K(e) && (e = {
                        deps: e
                    }), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = x.makeShimExports(e)), n[t] = e
                }), C.shim = n), e.packages && (z(e.packages, function(e) {
                    e = "string" == typeof e ? {
                        name: e
                    } : e, t[e.name] = {
                        name: e.name,
                        location: e.location || e.name,
                        main: (e.main || "main").replace(ka, "").replace(fa, "")
                    }
                }), C.pkgs = t), H(k, function(e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = o(t))
                }), (e.deps || e.callback) && x.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                return function() {
                    var t;
                    return e.init && (t = e.init.apply(ba, arguments)), t || e.exports && da(e.exports)
                }
            },
            makeRequire: function(r, i) {
                function s(n, a, l) {
                    var c, p;
                    return i.enableBuildCallback && a && J(a) && (a.__requireJsBuild = !0), "string" == typeof n ? J(a) ? f(B("requireargs", "Invalid require call"), l) : r && t(T, n) ? T[n](k[r.id]) : h.get ? h.get(x, n, r, s) : (c = o(n, r, !1, !0), c = c.id, t(_, c) ? _[c] : f(B("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (r ? "" : ". Use require([])")))) : (b(), x.nextTick(function() {
                        b(), p = u(o(null, r)), p.skipMap = i.skipMap, p.init(n, a, l, {
                            enabled: !0
                        }), d()
                    }), s)
                }
                return i = i || {}, S(s, {
                    isBrowser: A,
                    toUrl: function(e) {
                        var t, i = e.lastIndexOf("."),
                            s = e.split("/")[0];
                        return -1 !== i && ("." !== s && ".." !== s || 1 < i) && (t = e.substring(i, e.length), e = e.substring(0, i)), x.nameToUrl(n(e, r && r.id, !0), t, !0)
                    },
                    defined: function(e) {
                        return t(_, o(e, r, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = o(e, r, !1, !0).id, t(_, e) || t(k, e)
                    }
                }), r || (s.undef = function(e) {
                    l();
                    var t = o(e, r, !0),
                        n = m(k, e);
                    delete _[e], delete D[t.url], delete O[e], n && (n.events.defined && (O[e] = n.events), c(e))
                }), s
            },
            enable: function(e) {
                m(k, e.id) && u(e).enable()
            },
            completeLoad: function(e) {
                var n, r, s = m(C.shim, e) || {},
                    o = s.exports;
                for (l(); M.length;) {
                    r = M.shift();
                    if (null === r[0]) {
                        r[0] = e;
                        if (n) break;
                        n = !0
                    } else r[0] === e && (n = !0);
                    g(r)
                }
                r = m(k, e);
                if (!n && !t(_, e) && r && !r.inited) {
                    if (C.enforceDefine && (!o || !da(o))) return i(e) ? void 0 : f(B("nodefine", "No define call for " + e, null, [e]));
                    g([e, s.deps || [], s.exportsFn])
                }
                d()
            },
            nameToUrl: function(e, t, n) {
                var r, i, s, o, u, a;
                if (h.jsExtRegExp.test(e)) o = e + (t || "");
                else {
                    r = C.paths, i = C.pkgs, o = e.split("/");
                    for (u = o.length; 0 < u; u -= 1) {
                        if (a = o.slice(0, u).join("/"), s = m(i, a), a = m(r, a)) {
                            K(a) && (a = a[0]), o.splice(0, u, a);
                            break
                        }
                        if (s) {
                            e = e === s.name ? s.location + "/" + s.main : s.location, o.splice(0, u, e);
                            break
                        }
                    }
                    o = o.join("/"), o += t || (/\?/.test(o) || n ? "" : ".js"), o = ("/" === o.charAt(0) || o.match(/^[\w\+\.\-]+:/) ? "" : C.baseUrl) + o
                }
                return C.urlArgs ? o + ((-1 === o.indexOf("?") ? "?" : "&") + C.urlArgs) : o
            },
            load: function(e, t) {
                h.load(x, e, t)
            },
            execCb: function(e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || la.test((e.currentTarget || e.srcElement).readyState)) R = null, e = y(e), x.completeLoad(e.id)
            },
            onScriptError: function(e) {
                var t = y(e);
                if (!i(t.id)) return f(B("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, x.require = x.makeRequire(), x
    }
    var h, x, y, E, L, F, R, M, s, ga, ma = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        na = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        fa = /\.js$/,
        ka = /^\.\//;
    x = Object.prototype;
    var N = x.toString,
        ha = x.hasOwnProperty,
        ja = Array.prototype.splice,
        A = "undefined" != typeof window && !!navigator && !!window.document,
        ea = !A && "undefined" != typeof importScripts,
        la = A && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        Z = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        G = {},
        u = {},
        U = [],
        Q = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (J(requirejs)) return;
            u = requirejs, requirejs = void 0
        }
        "undefined" != typeof require && !J(require) && (u = require, require = void 0), h = requirejs = function(e, t, n, r) {
            var i, s = "_";
            return !K(e) && "string" != typeof e && (i = e, K(t) ? (e = t, t = n, n = r) : e = []), i && i.context && (s = i.context), (r = m(G, s)) || (r = G[s] = h.s.newContext(s)), i && r.configure(i), r.require(e, t, n)
        }, h.config = function(e) {
            return h(e)
        }, h.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = h), h.version = "2.1.6", h.jsExtRegExp = /^\/|:|\?|\.js$/, h.isBrowser = A, x = h.s = {
            contexts: G,
            newContext: ia
        }, h({}), z(["toUrl", "undef", "defined", "specified"], function(e) {
            h[e] = function() {
                var t = G._;
                return t.require[e].apply(t, arguments)
            }
        }), A && (y = x.head = document.getElementsByTagName("head")[0], E = document.getElementsByTagName("base")[0]) && (y = x.head = E.parentNode), h.onError = ca, h.load = function(e, t, n) {
            var r = e && e.config || {},
                i;
            if (A) return i = r.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), i.type = r.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent && !(i.attachEvent.toString && 0 > i.attachEvent.toString().indexOf("[native code")) && !Z ? (Q = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, M = i, E ? y.insertBefore(i, E) : y.appendChild(i), M = null, i;
            if (ea) try {
                importScripts(n), e.completeLoad(t)
            } catch (s) {
                e.onError(B("importscripts", "importScripts failed for " + t + " at " + n, s, [t]))
            }
        }, A && O(document.getElementsByTagName("script"), function(e) {
            y || (y = e.parentNode);
            if (L = e.getAttribute("data-main")) return s = L, u.baseUrl || (F = s.split("/"), s = F.pop(), ga = F.length ? F.join("/") + "/" : "./", u.baseUrl = ga), s = s.replace(fa, ""), h.jsExtRegExp.test(s) && (s = L), u.deps = u.deps ? u.deps.concat(s) : [s], !0
        }), define = function(e, t, n) {
            var r, i;
            "string" != typeof e && (n = t, t = e, e = null), K(t) || (n = t, t = null), !t && J(n) && (t = [], n.length && (n.toString().replace(ma, "").replace(na, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), Q && ((r = M) || (R && "interactive" === R.readyState || O(document.getElementsByTagName("script"), function(e) {
                if ("interactive" === e.readyState) return R = e
            }), r = R), r && (e || (e = r.getAttribute("data-requiremodule")), i = G[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : U).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, h.exec = function(b) {
            return eval(b)
        }, h(u)
    }
})(this);
