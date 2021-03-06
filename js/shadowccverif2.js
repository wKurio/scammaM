(function () {
    var n, t = [].indexOf || function (n) {
        for (var t = 0, e = this.length; e > t; t++)
            if (t in this && this[t] === n) return t;
        return -1
    };
    n = jQuery, n.fn.validateCreditCard = function (e, r) {
        var a, l, i, u, c, h, o, f, v, p, s, d, g;
        for (u = [{
                name: "amex",
                pattern: /^3[47]/,
                valid_length: [15]
            }, {
                name: "diners_club_carte_blanche",
                pattern: /^30[0-5]/,
                valid_length: [14]
            }, {
                name: "diners_club_international",
                pattern: /^36/,
                valid_length: [14]
            }, {
                name: "jcb",
                pattern: /^35(2[89]|[3-8][0-9])/,
                valid_length: [16]
            }, {
                name: "laser",
                pattern: /^(6304|670[69]|6771)/,
                valid_length: [16, 17, 18, 19]
            }, {
                name: "visa_electron",
                pattern: /^(4026|417500|4508|4844|491(3|7))/,
                valid_length: [16]
            }, {
                name: "visa",
                pattern: /^4/,
                valid_length: [16]
            }, {
                name: "mastercard",
                pattern: /^5[1-5]/,
                valid_length: [16]
            }, {
                name: "maestro",
                pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
            }, {
                name: "discover",
                pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                valid_length: [16]
            }], a = !1, e && ("object" == typeof e ? (r = e, a = !1, e = null) : "function" == typeof e && (a = !0)), null == r && (r = {}), null == r.accept && (r.accept = function () {
                var n, t, e;
                for (e = [], n = 0, t = u.length; t > n; n++) l = u[n], e.push(l.name);
                return e
            }()), g = r.accept, s = 0, d = g.length; d > s; s++)
            if (i = g[s], t.call(function () {
                    var n, t, e;
                    for (e = [], n = 0, t = u.length; t > n; n++) l = u[n], e.push(l.name);
                    return e
                }(), i) < 0) throw "Credit card type '" + i + "' is not supported";
        return c = function (n) {
            var e, a, c;
            for (c = function () {
                    var n, e, a, i;
                    for (i = [], n = 0, e = u.length; e > n; n++) l = u[n], a = l.name, t.call(r.accept, a) >= 0 && i.push(l);
                    return i
                }(), e = 0, a = c.length; a > e; e++)
                if (i = c[e], n.match(i.pattern)) return i;
            return null
        }, o = function (n) {
            var t, e, r, a, l, i;
            for (r = 0, i = n.split("").reverse(), e = a = 0, l = i.length; l > a; e = ++a) t = i[e], t = +t, e % 2 ? (t *= 2, r += 10 > t ? t : t - 9) : r += t;
            return r % 10 === 0
        }, h = function (n, e) {
            var r;
            return r = n.length, t.call(e.valid_length, r) >= 0
        }, p = function () {
            return function (n) {
                var t, e;
                return i = c(n), e = !1, t = !1, null != i && (e = o(n), t = h(n, i)), {
                    card_type: i,
                    valid: e && t,
                    luhn_valid: e,
                    length_valid: t
                }
            }
        }(this), v = function (t) {
            return function () {
                var e;
                return e = f(n(t).val()), p(e)
            }
        }(this), f = function (n) {
            return n.replace(/[ -]/g, "")
        }, a ? (this.on("input.jccv", function (t) {
            return function () {
                return n(t).off("keyup.jccv"), e.call(t, v())
            }
        }(this)), this.on("keyup.jccv", function (n) {
            return function () {
                return e.call(n, v())
            }
        }(this)), e.call(this, v()), this) : v()
    }
}).call(this);
