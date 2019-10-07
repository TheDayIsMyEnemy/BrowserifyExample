/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return k;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// require('core-js');
var regeneratorRuntime = __webpack_require__(1); // global.$ = global.jQuery = require('jquery');


__webpack_require__(6);

var writer = __webpack_require__(7);

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    _defineProperty(this, "reset", function () {
      writer.log('Reset');
    });
  }

  _createClass(Game, [{
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve(''));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function stop() {
        return _stop.apply(this, arguments);
      }

      return stop;
    }()
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log($);
                this.reset();
                _context2.next = 4;
                return this.stop();

              case 4:
                writer.log('Starting...');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return Game;
}();

global.Game = Game;
module.exports = Game;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, jQuery) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* 1.0.0-1666 - Wed Aug 07 14:03:13 BST 2019 */
var SagePayConfig = {
  'restHost': 'https://pi-test.sagepay.com',
  'restBaseURL': 'https://pi-test.sagepay.com/api/v1',
  'hostedPagesSubPath': '/hosted/docs',
  'pages': {
    'standardCardDetails': 'card-details-form.html',
    'reusableCardIdentifier': 'reusable-card-identifier-form.html'
  }
};
!function (e, t) {
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  var n = [],
      r = e.document,
      i = n.slice,
      o = n.concat,
      a = n.push,
      s = n.indexOf,
      u = {},
      l = u.toString,
      c = u.hasOwnProperty,
      d = {},
      f = "2.2.4",
      p = function p(e, t) {
    return new p.fn.init(e, t);
  },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      v = /^-ms-/,
      m = /-([\da-z])/gi,
      g = function g(e, t) {
    return t.toUpperCase();
  };

  p.fn = p.prototype = {
    jquery: f,
    constructor: p,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return i.call(this);
    },
    get: function get(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this);
    },
    pushStack: function pushStack(e) {
      var t = p.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e) {
      return p.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(p.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }, p.extend = p.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || p.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], r = e[t], a !== r && (l && r && (p.isPlainObject(r) || (i = p.isArray(r))) ? (i ? (i = !1, o = n && p.isArray(n) ? n : []) : o = n && p.isPlainObject(n) ? n : {}, a[t] = p.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, p.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isFunction: function isFunction(e) {
      return "function" === p.type(e);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(e) {
      return null != e && e === e.window;
    },
    isNumeric: function isNumeric(e) {
      var t = e && e.toString();
      return !p.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isPlainObject: function isPlainObject(e) {
      var t;
      if ("object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
      if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;

      for (t in e) {
        ;
      }

      return void 0 === t || c.call(e, t);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? u[l.call(e)] || "object" : _typeof(e);
    },
    globalEval: function globalEval(e) {
      var t,
          n = eval;
      e = p.trim(e), e && (1 === e.indexOf("use strict") ? (t = r.createElement("script"), t.text = e, r.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function camelCase(e) {
      return e.replace(v, "ms-").replace(m, g);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (y(e)) {
        for (n = e.length; n > r; r++) {
          if (t.call(e[r], r, e[r]) === !1) break;
        }
      } else for (r in e) {
        if (t.call(e[r], r, e[r]) === !1) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(h, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : s.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; n > r; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) {
        r = !t(e[o], o), r !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          a = 0,
          s = [];
      if (y(e)) for (r = e.length; r > a; a++) {
        i = t(e[a], a, n), null != i && s.push(i);
      } else for (a in e) {
        i = t(e[a], a, n), null != i && s.push(i);
      }
      return o.apply([], s);
    },
    guid: 1,
    proxy: function proxy(e, t) {
      var n, r, o;
      return "string" == typeof t && (n = e[t], t = e, e = n), p.isFunction(e) ? (r = i.call(arguments, 2), o = function o() {
        return e.apply(t || this, r.concat(i.call(arguments)));
      }, o.guid = e.guid = e.guid || p.guid++, o) : void 0;
    },
    now: Date.now,
    support: d
  }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    u["[object " + t + "]"] = t.toLowerCase();
  });

  function y(e) {
    var t = !!e && "length" in e && e.length,
        n = p.type(e);
    return "function" === n || p.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
  }

  var b = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d,
        f,
        p,
        h,
        v,
        m,
        g,
        y,
        b,
        x = "sizzle" + 1 * new Date(),
        w = e.document,
        C = 0,
        T = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        j = function j(e, t) {
      return e === t && (d = !0), 0;
    },
        N = 1 << 31,
        D = {}.hasOwnProperty,
        A = [],
        M = A.pop,
        P = A.push,
        L = A.push,
        q = A.slice,
        H = function H(e, t) {
      for (var n = 0, r = e.length; r > n; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        O = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        R = "\\[" + O + "*(" + I + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + O + "*\\]",
        _ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        W = new RegExp(O + "+", "g"),
        B = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        V = new RegExp("^" + O + "*," + O + "*"),
        $ = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
        K = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
        z = new RegExp(_),
        U = new RegExp("^" + I + "$"),
        X = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + R),
      PSEUDO: new RegExp("^" + _),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + F + ")$", "i"),
      needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        ee = /'|\\/g,
        te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = function re() {
      f();
    };

    try {
      L.apply(A = q.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (ie) {
      L = {
        apply: A.length ? function (e, t) {
          P.apply(e, q.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          d,
          h,
          g,
          y,
          C = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, v)) {
        if (11 !== T && (h = Q.exec(e))) if (o = h[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (C && (l = C.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (h[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
          if (1 !== T) C = t, y = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = x), g = a(e), s = g.length, d = U.test(c) ? "#" + c : "[id='" + c + "']";

            while (s--) {
              g[s] = d + " " + me(g[s]);
            }

            y = g.join(","), C = Z.test(e) && he(t.parentNode) || t;
          }
          if (y) try {
            return L.apply(r, C.querySelectorAll(y)), r;
          } catch (E) {} finally {
            c === x && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[x] = !0, e;
    }

    function ue(e) {
      var t = p.createElement("div");

      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || N) - (~e.sourceIndex || N);
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }

    function fe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function pe(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function he(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1;
    }, f = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, h = p.documentElement, v = !o(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length;
      }), n.getById ? (r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && v) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }, r.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete r.find.ID, r.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        return "undefined" != typeof t.getElementsByClassName && v ? t.getElementsByClassName(e) : void 0;
      }, g = [], m = [], (n.qsa = J.test(p.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
      }), ue(function (e) {
        var t = p.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", _);
      }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return d = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, p) : p;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && f(e), t = t.replace(K, "='$1']"), n.matchesSelector && v && !S[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
        var r = y.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (i) {}
      return oe(t, p, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && f(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== p && f(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
      return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(j), d) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                d,
                f,
                p,
                h,
                v = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                g = s && t.nodeName.toLowerCase(),
                y = !u && !s,
                b = !1;

            if (m) {
              if (o) {
                while (v) {
                  f = t;

                  while (f = f[v]) {
                    if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                  }

                  h = v = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? m.firstChild : m.lastChild], a && y) {
                f = m, d = f[x] || (f[x] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === C && l[1], b = p && l[2], f = p && m.childNodes[p];

                while (f = ++p && f && f[v] || (b = p = 0) || h.pop()) {
                  if (1 === f.nodeType && ++b && f === t) {
                    c[e] = [C, p, b];
                    break;
                  }
                }
              } else if (y && (f = t, d = f[x] || (f[x] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === C && l[1], b = p), b === !1) while (f = ++p && f && f[v] || (b = p = 0) || h.pop()) {
                if ((s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) && ++b && (y && (d = f[x] || (f[x] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [C, b]), f === t)) break;
              }

              return b -= i, b === r || b % r === 0 && b / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              r = H(e, o[a]), e[r] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[x] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(te, ne), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
            var n;

            do {
              if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return G.test(e.nodeName);
        },
        input: function input(e) {
          return Y.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: pe(function () {
          return [0];
        }),
        last: pe(function (e, t) {
          return [t - 1];
        }),
        eq: pe(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: pe(function (e, t) {
          for (var n = 0; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: pe(function (e, t) {
          for (var n = 1; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: pe(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: pe(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }, r.pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = de(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    function ve() {}

    ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = X[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function me(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) {
        r += e[t].value;
      }

      return r;
    }

    function ge(e, t, n) {
      var r = t.dir,
          i = n && "parentNode" === r,
          o = T++;
      return t.first ? function (t, n, o) {
        while (t = t[r]) {
          if (1 === t.nodeType || i) return e(t, n, o);
        }
      } : function (t, n, a) {
        var s,
            u,
            l,
            c = [C, o];

        if (a) {
          while (t = t[r]) {
            if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || i) {
            if (l = t[x] || (t[x] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === C && s[1] === o) return c[2] = s[2];
            if (u[r] = c, c[2] = e(t, n, a)) return !0;
          }
        }
      };
    }

    function ye(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; i > r; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function xe(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function we(e, t, n, r, i, o) {
      return r && !r[x] && (r = we(r)), i && !i[x] && (i = we(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            d,
            f = [],
            p = [],
            h = a.length,
            v = o || be(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? v : xe(v, f, e, s, u),
            g = n ? i || (o ? e : h || r) ? [] : a : m;

        if (n && n(m, g, s, u), r) {
          l = xe(g, p), r(l, [], s, u), c = l.length;

          while (c--) {
            (d = l[c]) && (g[p[c]] = !(m[p[c]] = d));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = g.length;

              while (c--) {
                (d = g[c]) && l.push(m[c] = d);
              }

              i(null, g = [], l, u);
            }

            c = g.length;

            while (c--) {
              (d = g[c]) && (l = i ? H(o, d) : f[c]) > -1 && (o[l] = !(a[l] = d));
            }
          }
        } else g = xe(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, u) : L.apply(a, g);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ge(function (e) {
        return e === t;
      }, s, !0), d = ge(function (e) {
        return H(t, e) > -1;
      }, s, !0), f = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
        return t = null, i;
      }]; o > u; u++) {
        if (n = r.relative[e[u].type]) f = [ge(ye(f), n)];else {
          if (n = r.filter[e[u].type].apply(null, e[u].matches), n[x]) {
            for (i = ++u; o > i; i++) {
              if (r.relative[e[i].type]) break;
            }

            return we(u > 1 && ye(f), u > 1 && me(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, i > u && Ce(e.slice(u, i)), o > i && Ce(e = e.slice(i)), o > i && me(e));
          }

          f.push(n);
        }
      }

      return ye(f);
    }

    function Te(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var d,
            h,
            m,
            g = 0,
            y = "0",
            b = _o && [],
            x = [],
            w = l,
            T = _o || i && r.find.TAG("*", c),
            E = C += null == w ? 1 : Math.random() || .1,
            k = T.length;

        for (c && (l = a === p || a || c); y !== k && null != (d = T[y]); y++) {
          if (i && d) {
            h = 0, a || d.ownerDocument === p || (f(d), s = !v);

            while (m = e[h++]) {
              if (m(d, a || p, s)) {
                u.push(d);
                break;
              }
            }

            c && (C = E);
          }

          n && ((d = !m && d) && g--, _o && b.push(d));
        }

        if (g += y, n && y !== g) {
          h = 0;

          while (m = t[h++]) {
            m(b, x, a, s);
          }

          if (_o) {
            if (g > 0) while (y--) {
              b[y] || x[y] || (x[y] = M.call(u));
            }
            x = xe(x);
          }

          L.apply(u, x), c && !_o && x.length > 0 && g + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (C = E, l = w), b;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          o = Ce(t[n]), o[x] ? r.push(o) : i.push(o);
        }

        o = S(e, Te(i, r)), o.selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, i, o) {
      var u,
          l,
          c,
          d,
          f,
          p = "function" == typeof e && e,
          h = !o && a(e = p.selector || e);

      if (i = i || [], 1 === h.length) {
        if (l = h[0] = h[0].slice(0), l.length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && v && r.relative[l[1].type]) {
          if (t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0], !t) return i;
          p && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }

        u = X.needsContext.test(e) ? 0 : l.length;

        while (u--) {
          if (c = l[u], r.relative[d = c.type]) break;

          if ((f = r.find[d]) && (o = f(c.matches[0].replace(te, ne), Z.test(l[0].type) && he(t.parentNode) || t))) {
            if (l.splice(u, 1), e = o.length && me(l), !e) return L.apply(i, o), i;
            break;
          }
        }
      }

      return (p || s(e, h))(o, t, !v, i, !t || Z.test(e) && he(t.parentNode) || t), i;
    }, n.sortStable = x.split("").sort(j).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(p.createElement("div"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(F, function (e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;

  var x = function x(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && p(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      w = function w(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      C = p.expr.match.needsContext,
      T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      E = /^.[^:#\[\.,]*$/;

  function k(e, t, n) {
    if (p.isFunction(t)) return p.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return p.grep(e, function (e) {
      return e === t !== n;
    });

    if ("string" == typeof t) {
      if (E.test(t)) return p.filter(t, e, n);
      t = p.filter(t, e);
    }

    return p.grep(e, function (e) {
      return s.call(t, e) > -1 !== n;
    });
  }

  p.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, p.fn.extend({
    find: function find(e) {
      var t,
          n = this.length,
          r = [],
          i = this;
      if ("string" != typeof e) return this.pushStack(p(e).filter(function () {
        for (t = 0; n > t; t++) {
          if (p.contains(i[t], this)) return !0;
        }
      }));

      for (t = 0; n > t; t++) {
        p.find(e, i[t], r);
      }

      return r = this.pushStack(n > 1 ? p.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r;
    },
    filter: function filter(e) {
      return this.pushStack(k(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(k(this, e || [], !0));
    },
    is: function is(e) {
      return !!k(this, "string" == typeof e && C.test(e) ? p(e) : e || [], !1).length;
    }
  });

  var S,
      j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      N = p.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || S, "string" == typeof e) {
      if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), T.test(i[1]) && p.isPlainObject(t)) for (i in t) {
          p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return o = r.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = r, this.selector = e, this;
    }

    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this));
  };

  N.prototype = p.fn, S = p(r);
  var D = /^(?:parents|prev(?:Until|All))/,
      A = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  p.fn.extend({
    has: function has(e) {
      var t = p(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) {
          if (p.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = C.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? s.call(p(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function M(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  p.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return x(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return x(e, "parentNode", n);
    },
    next: function next(e) {
      return M(e, "nextSibling");
    },
    prev: function prev(e) {
      return M(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return x(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return x(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return x(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return x(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return w((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return w(e.firstChild);
    },
    contents: function contents(e) {
      return e.contentDocument || p.merge([], e.childNodes);
    }
  }, function (e, t) {
    p.fn[e] = function (n, r) {
      var i = p.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), this.length > 1 && (A[e] || p.uniqueSort(i), D.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var P = /\S+/g;

  function L(e) {
    var t = {};
    return p.each(e.match(P) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  p.Callbacks = function (e) {
    e = "string" == typeof e ? L(e) : p.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function r(t) {
          p.each(t, function (t, n) {
            p.isFunction(n) ? e.unique && l.has(n) || o.push(n) : n && n.length && "string" !== p.type(n) && r(n);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return p.each(arguments, function (e, t) {
          var n;

          while ((n = p.inArray(t, o, n)) > -1) {
            o.splice(n, 1), s >= n && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? p.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  }, p.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return p.Deferred(function (n) {
            p.each(t, function (t, o) {
              var a = p.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = a && a.apply(this, arguments);
                e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? p.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, p.each(t, function (e, o) {
        var a = o[2],
            s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t = 0,
          n = i.call(arguments),
          r = n.length,
          o = 1 !== r || e && p.isFunction(e.promise) ? r : 0,
          a = 1 === o ? e : p.Deferred(),
          s = function s(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? i.call(arguments) : r, n === u ? a.notifyWith(t, n) : --o || a.resolveWith(t, n);
        };
      },
          u,
          l,
          c;

      if (r > 1) for (u = new Array(r), l = new Array(r), c = new Array(r); r > t; t++) {
        n[t] && p.isFunction(n[t].promise) ? n[t].promise().progress(s(t, l, u)).done(s(t, c, n)).fail(a.reject) : --o;
      }
      return o || a.resolveWith(c, n), a.promise();
    }
  });
  var q;
  p.fn.ready = function (e) {
    return p.ready.promise().done(e), this;
  }, p.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? p.readyWait++ : p.ready(!0);
    },
    ready: function ready(e) {
      (e === !0 ? --p.readyWait : p.isReady) || (p.isReady = !0, e !== !0 && --p.readyWait > 0 || (q.resolveWith(r, [p]), p.fn.triggerHandler && (p(r).triggerHandler("ready"), p(r).off("ready"))));
    }
  });

  function H() {
    r.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), p.ready();
  }

  p.ready.promise = function (t) {
    return q || (q = p.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(p.ready) : (r.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H))), q.promise(t);
  }, p.ready.promise();

  var F = function F(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === p.type(n)) {
      i = !0;

      for (s in n) {
        F(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, p.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(p(e), n);
    })), t)) for (; u > s; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      O = function O(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function I() {
    this.expando = p.expando + I.uid++;
  }

  I.uid = 1, I.prototype = {
    register: function register(e, t) {
      var n = t || {};
      return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
        value: n,
        writable: !0,
        configurable: !0
      }), e[this.expando];
    },
    cache: function cache(e) {
      if (!O(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[t] = n;else for (r in t) {
        i[r] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
    },
    access: function access(e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, p.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r,
          i,
          o = e[this.expando];

      if (void 0 !== o) {
        if (void 0 === t) this.register(e);else {
          p.isArray(t) ? r = t.concat(t.map(p.camelCase)) : (i = p.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(P) || [])), n = r.length;

          while (n--) {
            delete o[r[n]];
          }
        }
        (void 0 === t || p.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !p.isEmptyObject(t);
    }
  };

  var R = new I(),
      _ = new I(),
      W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      B = /[A-Z]/g;

  function V(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(B, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
      try {
        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : W.test(n) ? p.parseJSON(n) : n;
      } catch (i) {}

      _.set(e, t, n);
    } else n = void 0;
    return n;
  }

  p.extend({
    hasData: function hasData(e) {
      return _.hasData(e) || R.hasData(e);
    },
    data: function data(e, t, n) {
      return _.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      _.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return R.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      R.remove(e, t);
    }
  }), p.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = _.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), V(o, r, i[r])));
          }

          R.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        _.set(this, e);
      }) : F(this, function (t) {
        var n, r;

        if (o && void 0 === t) {
          if (n = _.get(o, e) || _.get(o, e.replace(B, "-$&").toLowerCase()), void 0 !== n) return n;
          if (r = p.camelCase(e), n = _.get(o, r), void 0 !== n) return n;
          if (n = V(o, r, void 0), void 0 !== n) return n;
        } else r = p.camelCase(e), this.each(function () {
          var n = _.get(this, r);

          _.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && _.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        _.remove(this, e);
      });
    }
  }), p.extend({
    queue: function queue(e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || p.isArray(n) ? r = R.access(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0;
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = p.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = p._queueHooks(e, t),
          a = function a() {
        p.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return R.get(e, n) || R.access(e, n, {
        empty: p.Callbacks("once memory").add(function () {
          R.remove(e, [t + "queue", n]);
        })
      });
    }
  }), p.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = p.queue(this, e, t);
        p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        p.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = p.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        n = R.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      K = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
      z = ["Top", "Right", "Bottom", "Left"],
      U = function U(e, t) {
    return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e);
  };

  function X(e, t, n, r) {
    var i,
        o = 1,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return p.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (p.cssNumber[t] ? "" : "px"),
        c = (p.cssNumber[t] || "px" !== l && +u) && K.exec(p.css(e, t));

    if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;

      do {
        o = o || ".5", c /= o, p.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var Y = /^(?:checkbox|radio)$/i,
      G = /<([\w:-]+)/,
      J = /^$|\/(?:java|ecma)script/i,
      Q = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;

  function Z(e, t) {
    var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], n) : n;
  }

  function ee(e, t) {
    for (var n = 0, r = e.length; r > n; n++) {
      R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"));
    }
  }

  var te = /<|&#?\w+;/;

  function ne(e, t, n, r, i) {
    for (var o, a, s, u, l, c, d = t.createDocumentFragment(), f = [], h = 0, v = e.length; v > h; h++) {
      if (o = e[h], o || 0 === o) if ("object" === p.type(o)) p.merge(f, o.nodeType ? [o] : o);else if (te.test(o)) {
        a = a || d.appendChild(t.createElement("div")), s = (G.exec(o) || ["", ""])[1].toLowerCase(), u = Q[s] || Q._default, a.innerHTML = u[1] + p.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        p.merge(f, a.childNodes), a = d.firstChild, a.textContent = "";
      } else f.push(t.createTextNode(o));
    }

    d.textContent = "", h = 0;

    while (o = f[h++]) {
      if (r && p.inArray(o, r) > -1) i && i.push(o);else if (l = p.contains(o.ownerDocument, o), a = Z(d.appendChild(o), "script"), l && ee(a), n) {
        c = 0;

        while (o = a[c++]) {
          J.test(o.type || "") && n.push(o);
        }
      }
    }

    return d;
  }

  !function () {
    var e = r.createDocumentFragment(),
        t = e.appendChild(r.createElement("div")),
        n = r.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  }();
  var re = /^key/,
      ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      oe = /^([^.]*)(?:\.(.+)|)/;

  function ae() {
    return !0;
  }

  function se() {
    return !1;
  }

  function ue() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function le(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        le(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = se;else if (!i) return e;
    return 1 === o && (a = i, i = function i(e) {
      return p().off(e), a.apply(this, arguments);
    }, i.guid = a.guid || (a.guid = p.guid++)), e.each(function () {
      p.event.add(this, t, i, r, n);
    });
  }

  p.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          d,
          f,
          h,
          v,
          m,
          g = R.get(e);

      if (g) {
        n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = p.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
          return "undefined" != typeof p && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0;
        }), t = (t || "").match(P) || [""], l = t.length;

        while (l--) {
          s = oe.exec(t[l]) || [], h = m = s[1], v = (s[2] || "").split(".").sort(), h && (d = p.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = p.event.special[h] || {}, c = p.extend({
            type: h,
            origType: m,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && p.expr.match.needsContext.test(i),
            namespace: v.join(".")
          }, o), (f = u[h]) || (f = u[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, r, v, a) !== !1 || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), p.event.global[h] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          d,
          f,
          h,
          v,
          m,
          g = R.hasData(e) && R.get(e);

      if (g && (u = g.events)) {
        t = (t || "").match(P) || [""], l = t.length;

        while (l--) {
          if (s = oe.exec(t[l]) || [], h = m = s[1], v = (s[2] || "").split(".").sort(), h) {
            d = p.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, f = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length;

            while (o--) {
              c = f[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
            }

            a && !f.length && (d.teardown && d.teardown.call(e, v, g.handle) !== !1 || p.removeEvent(e, h, g.handle), delete u[h]);
          } else for (h in u) {
            p.event.remove(e, h + t[l], n, r, !0);
          }
        }

        p.isEmptyObject(u) && R.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      e = p.event.fix(e);
      var t,
          n,
          r,
          o,
          a,
          s = [],
          u = i.call(arguments),
          l = (R.get(this, "events") || {})[e.type] || [],
          c = p.event.special[e.type] || {};

      if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = p.event.handlers.call(this, e, l), t = 0;

        while ((o = s[t++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, n = 0;

          while ((a = o.handlers[n++]) && !e.isImmediatePropagationStopped()) {
            e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, r = ((p.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a = [],
          s = t.delegateCount,
          u = e.target;
      if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
          for (r = [], n = 0; s > n; n++) {
            o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? p(i, this).index(u) > -1 : p.find(i, this, null, [u]).length), r[i] && r.push(o);
          }

          r.length && a.push({
            elem: u,
            handlers: r
          });
        }
      }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, t) {
        var n,
            i,
            o,
            a = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || r, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
      }
    },
    fix: function fix(e) {
      if (e[p.expando]) return e;
      var t,
          n,
          i,
          o = e.type,
          a = e,
          s = this.fixHooks[o];
      s || (this.fixHooks[o] = s = ie.test(o) ? this.mouseHooks : re.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new p.Event(a), t = i.length;

      while (t--) {
        n = i[t], e[n] = a[n];
      }

      return e.target || (e.target = r), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== ue() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ue() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(e) {
          return p.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, p.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, p.Event = function (e, t) {
    return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? ae : se) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void (this[p.expando] = !0)) : new p.Event(e, t);
  }, p.Event.prototype = {
    constructor: p.Event,
    isDefaultPrevented: se,
    isPropagationStopped: se,
    isImmediatePropagationStopped: se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ae, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ae, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, p.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    p.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || p.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), p.fn.extend({
    on: function on(e, t, n, r) {
      return le(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return le(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = se), this.each(function () {
        p.event.remove(this, e, n, t);
      });
    }
  });
  var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      de = /<script|<style|<link/i,
      fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pe = /^true\/(.*)/,
      he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function ve(e, t) {
    return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function me(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function ge(e) {
    var t = pe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function ye(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (R.hasData(e) && (o = R.access(e), a = R.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; r > n; n++) {
            p.event.add(t, i, l[i][n]);
          }
        }
      }

      _.hasData(e) && (s = _.access(e), u = p.extend({}, s), _.set(t, u));
    }
  }

  function be(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Y.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function xe(e, t, n, r) {
    t = o.apply([], t);
    var i,
        a,
        s,
        u,
        l,
        c,
        f = 0,
        h = e.length,
        v = h - 1,
        m = t[0],
        g = p.isFunction(m);
    if (g || h > 1 && "string" == typeof m && !d.checkClone && fe.test(m)) return e.each(function (i) {
      var o = e.eq(i);
      g && (t[0] = m.call(this, i, o.html())), xe(o, t, n, r);
    });

    if (h && (i = ne(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
      for (s = p.map(Z(i, "script"), me), u = s.length; h > f; f++) {
        l = i, f !== v && (l = p.clone(l, !0, !0), u && p.merge(s, Z(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, p.map(s, ge), f = 0; u > f; f++) {
        l = s[f], J.test(l.type || "") && !R.access(l, "globalEval") && p.contains(c, l) && (l.src ? p._evalUrl && p._evalUrl(l.src) : p.globalEval(l.textContent.replace(he, "")));
      }
    }

    return e;
  }

  function we(e, t, n) {
    for (var r, i = t ? p.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || p.cleanData(Z(r)), r.parentNode && (n && p.contains(r.ownerDocument, r) && ee(Z(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  p.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(ce, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = p.contains(e.ownerDocument, e);
      if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e))) for (a = Z(s), o = Z(e), r = 0, i = o.length; i > r; r++) {
        be(o[r], a[r]);
      }
      if (t) if (n) for (o = o || Z(e), a = a || Z(s), r = 0, i = o.length; i > r; r++) {
        ye(o[r], a[r]);
      } else ye(e, s);
      return a = Z(s, "script"), a.length > 0 && ee(a, !u && Z(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = p.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (O(n)) {
          if (t = n[R.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? p.event.remove(n, r) : p.removeEvent(n, r, t.handle);
            }
            n[R.expando] = void 0;
          }

          n[_.expando] && (n[_.expando] = void 0);
        }
      }
    }
  }), p.fn.extend({
    domManip: xe,
    detach: function detach(e) {
      return we(this, e, !0);
    },
    remove: function remove(e) {
      return we(this, e);
    },
    text: function text(e) {
      return F(this, function (e) {
        return void 0 === e ? p.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return xe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ve(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function prepend() {
      return xe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ve(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return xe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return xe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (p.cleanData(Z(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return p.clone(this, e, t);
      });
    },
    html: function html(e) {
      return F(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !de.test(e) && !Q[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = p.htmlPrefilter(e);

          try {
            for (; r > n; n++) {
              t = this[n] || {}, 1 === t.nodeType && (p.cleanData(Z(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (i) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return xe(this, arguments, function (t) {
        var n = this.parentNode;
        p.inArray(this, e) < 0 && (p.cleanData(Z(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), p.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    p.fn[e] = function (e) {
      for (var n, r = [], i = p(e), o = i.length - 1, s = 0; o >= s; s++) {
        n = s === o ? this : this.clone(!0), p(i[s])[t](n), a.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });
  var Ce,
      Te = {
    HTML: "block",
    BODY: "block"
  };

  function Ee(e, t) {
    var n = p(t.createElement(e)).appendTo(t.body),
        r = p.css(n[0], "display");
    return n.detach(), r;
  }

  function ke(e) {
    var t = r,
        n = Te[e];
    return n || (n = Ee(e, t), "none" !== n && n || (Ce = (Ce || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ce[0].contentDocument, t.write(), t.close(), n = Ee(e, t), Ce.detach()), Te[e] = n), n;
  }

  var Se = /^margin/,
      je = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
      Ne = function Ne(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      De = function De(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  },
      Ae = r.documentElement;

  !function () {
    var t,
        n,
        i,
        o,
        a = r.createElement("div"),
        s = r.createElement("div");

    if (s.style) {
      var _u = function _u() {
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ae.appendChild(a);
        var r = e.getComputedStyle(s);
        t = "1%" !== r.top, o = "2px" === r.marginLeft, n = "4px" === r.width, s.style.marginRight = "50%", i = "4px" === r.marginRight, Ae.removeChild(a);
      };

      s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s);
      p.extend(d, {
        pixelPosition: function pixelPosition() {
          return _u(), t;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == n && _u(), n;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == n && _u(), i;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == n && _u(), o;
        },
        reliableMarginRight: function reliableMarginRight() {
          var t,
              n = s.appendChild(r.createElement("div"));
          return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ae.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ae.removeChild(a), s.removeChild(n), t;
        }
      });
    }
  }();

  function Me(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return n = n || Ne(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)), n && !d.pixelMarginRight() && je.test(a) && Se.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a;
  }

  function Pe(e, t) {
    return {
      get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }

  var Le = /^(none|table(?!-c[ea]).+)/,
      qe = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      He = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Fe = ["Webkit", "O", "Moz", "ms"],
      Oe = r.createElement("div").style;

  function Ie(e) {
    if (e in Oe) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Fe.length;

    while (n--) {
      if (e = Fe[n] + t, e in Oe) return e;
    }
  }

  function Re(e, t, n) {
    var r = K.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function _e(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) {
      "margin" === n && (a += p.css(e, n + z[o], !0, i)), r ? ("content" === n && (a -= p.css(e, "padding" + z[o], !0, i)), "margin" !== n && (a -= p.css(e, "border" + z[o] + "Width", !0, i))) : (a += p.css(e, "padding" + z[o], !0, i), "padding" !== n && (a += p.css(e, "border" + z[o] + "Width", !0, i)));
    }

    return a;
  }

  function We(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Ne(e),
        a = "border-box" === p.css(e, "boxSizing", !1, o);

    if (0 >= i || null == i) {
      if (i = Me(e, t, o), (0 > i || null == i) && (i = e.style[t]), je.test(i)) return i;
      r = a && (d.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return i + _e(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }

  function Be(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) {
      r = e[a], r.style && (o[a] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && U(r) && (o[a] = R.access(r, "olddisplay", ke(r.nodeName)))) : (i = U(r), "none" === n && i || R.set(r, "olddisplay", i ? n : p.css(r, "display"))));
    }

    for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    }

    return e;
  }

  p.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Me(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = p.camelCase(t),
            u = e.style;
        return t = p.cssProps[s] || (p.cssProps[s] = Ie(s) || s), a = p.cssHooks[t] || p.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = _typeof(n), "string" === o && (i = K.exec(n)) && i[1] && (n = X(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (p.cssNumber[s] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0);
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = p.camelCase(t);
      return t = p.cssProps[s] || (p.cssProps[s] = Ie(s) || s), a = p.cssHooks[t] || p.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Me(e, t, r)), "normal" === i && t in He && (i = He[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i;
    }
  }), p.each(["height", "width"], function (e, t) {
    p.cssHooks[t] = {
      get: function get(e, n, r) {
        return n ? Le.test(p.css(e, "display")) && 0 === e.offsetWidth ? De(e, qe, function () {
          return We(e, t, r);
        }) : We(e, t, r) : void 0;
      },
      set: function set(e, n, r) {
        var i,
            o = r && Ne(e),
            a = r && _e(e, t, r, "border-box" === p.css(e, "boxSizing", !1, o), o);

        return a && (i = K.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = p.css(e, t)), Re(e, n, a);
      }
    };
  }), p.cssHooks.marginLeft = Pe(d.reliableMarginLeft, function (e, t) {
    return t ? (parseFloat(Me(e, "marginLeft")) || e.getBoundingClientRect().left - De(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), p.cssHooks.marginRight = Pe(d.reliableMarginRight, function (e, t) {
    return t ? De(e, {
      display: "inline-block"
    }, Me, [e, "marginRight"]) : void 0;
  }), p.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    p.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) {
          i[e + z[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, Se.test(e) || (p.cssHooks[e + t].set = Re);
  }), p.fn.extend({
    css: function css(e, t) {
      return F(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (p.isArray(t)) {
          for (r = Ne(e), i = t.length; i > a; a++) {
            o[t[a]] = p.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function show() {
      return Be(this, !0);
    },
    hide: function hide() {
      return Be(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        U(this) ? p(this).show() : p(this).hide();
      });
    }
  });

  function Ve(e, t, n, r, i) {
    return new Ve.prototype.init(e, t, n, r, i);
  }

  p.Tween = Ve, Ve.prototype = {
    constructor: Ve,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (p.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ve.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ve.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Ve.propHooks[this.prop];
      return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this;
    }
  }, Ve.prototype.init.prototype = Ve.prototype, Ve.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
      },
      set: function set(e) {
        p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, Ve.propHooks.scrollTop = Ve.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, p.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, p.fx = Ve.prototype.init, p.fx.step = {};
  var $e,
      Ke,
      ze = /^(?:toggle|show|hide)$/,
      Ue = /queueHooks$/;

  function Xe() {
    return e.setTimeout(function () {
      $e = void 0;
    }), $e = p.now();
  }

  function Ye(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; 4 > r; r += 2 - t) {
      n = z[r], i["margin" + n] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function Ge(e, t, n) {
    for (var r, i = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), o = 0, a = i.length; a > o; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function Je(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d = this,
        f = {},
        h = e.style,
        v = e.nodeType && U(e),
        m = R.get(e, "fxshow");
    n.queue || (s = p._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
      s.unqueued || u();
    }), s.unqueued++, d.always(function () {
      d.always(function () {
        s.unqueued--, p.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = p.css(e, "display"), c = "none" === l ? R.get(e, "olddisplay") || ke(e.nodeName) : l, "inline" === c && "none" === p.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
      h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
    }));

    for (r in t) {
      if (i = t[r], ze.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
          if ("show" !== i || !m || void 0 === m[r]) continue;
          v = !0;
        }

        f[r] = m && m[r] || p.style(e, r);
      } else l = void 0;
    }

    if (p.isEmptyObject(f)) "inline" === ("none" === l ? ke(e.nodeName) : l) && (h.display = l);else {
      m ? "hidden" in m && (v = m.hidden) : m = R.access(e, "fxshow", {}), o && (m.hidden = !v), v ? p(e).show() : d.done(function () {
        p(e).hide();
      }), d.done(function () {
        var t;
        R.remove(e, "fxshow");

        for (t in f) {
          p.style(e, t, f[t]);
        }
      });

      for (r in f) {
        a = Ge(v ? m[r] : 0, r, d), r in m || (m[r] = a.start, v && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
      }
    }
  }

  function Qe(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = p.camelCase(n), i = t[r], o = e[n], p.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = p.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function Ze(e, t, n) {
    var r,
        i,
        o = 0,
        a = Ze.prefilters.length,
        s = p.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = $e || Xe(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) {
        l.tweens[a].run(o);
      }

      return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: p.extend({}, t),
      opts: p.extend(!0, {
        specialEasing: {},
        easing: p.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: $e || Xe(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = p.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; r > n; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (Qe(c, l.opts.specialEasing); a > o; o++) {
      if (r = Ze.prefilters[o].call(l, e, c, l.opts)) return p.isFunction(r.stop) && (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(r.stop, r)), r;
    }

    return p.map(c, Ge, l), p.isFunction(l.opts.start) && l.opts.start.call(e, l), p.fx.timer(p.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }

  p.Animation = p.extend(Ze, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return X(n.elem, e, K.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; i > r; r++) {
        n = e[r], Ze.tweeners[n] = Ze.tweeners[n] || [], Ze.tweeners[n].unshift(t);
      }
    },
    prefilters: [Je],
    prefilter: function prefilter(e, t) {
      t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e);
    }
  }), p.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? p.extend({}, e) : {
      complete: n || !n && t || p.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !p.isFunction(t) && t
    };
    return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue);
    }, r;
  }, p.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(U).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = p.isEmptyObject(e),
          o = p.speed(t, n, r),
          a = function a() {
        var t = Ze(this, p.extend({}, e), o);
        (i || R.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = p.timers,
            a = R.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && Ue.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || p.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = R.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = p.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), p.each(["toggle", "show", "hide"], function (e, t) {
    var n = p.fn[t];

    p.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ye(t, !0), e, r, i);
    };
  }), p.each({
    slideDown: Ye("show"),
    slideUp: Ye("hide"),
    slideToggle: Ye("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    p.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), p.timers = [], p.fx.tick = function () {
    var e,
        t = 0,
        n = p.timers;

    for ($e = p.now(); t < n.length; t++) {
      e = n[t], e() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || p.fx.stop(), $e = void 0;
  }, p.fx.timer = function (e) {
    p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
  }, p.fx.interval = 13, p.fx.start = function () {
    Ke || (Ke = e.setInterval(p.fx.tick, p.fx.interval));
  }, p.fx.stop = function () {
    e.clearInterval(Ke), Ke = null;
  }, p.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, p.fn.delay = function (t, n) {
    return t = p.fx ? p.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select"),
        n = t.appendChild(r.createElement("option"));
    e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = n.selected, t.disabled = !0, d.optDisabled = !n.disabled, e = r.createElement("input"), e.value = "t", e.type = "radio", d.radioValue = "t" === e.value;
  }();
  var et,
      tt = p.expr.attrHandle;
  p.fn.extend({
    attr: function attr(e, t) {
      return F(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        p.removeAttr(this, e);
      });
    }
  }), p.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? p.prop(e, t, n) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(), i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void p.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = p.find.attr(e, t), null == r ? void 0 : r));
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(P);
      if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = p.propFix[n] || n, p.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
      }
    }
  }), et = {
    set: function set(e, t, n) {
      return t === !1 ? p.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = tt[t] || p.find.attr;

    tt[t] = function (e, t, r) {
      var i, o;
      return r || (o = tt[t], tt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, tt[t] = o), i;
    };
  });
  var nt = /^(?:input|select|textarea|button)$/i,
      rt = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function prop(e, t) {
      return F(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[p.propFix[e] || e];
      });
    }
  }), p.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && p.isXMLDoc(e) || (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = p.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), d.optSelected || (p.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    p.propFix[this.toLowerCase()] = this;
  });
  var it = /[\t\r\n\f]/g;

  function ot(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  p.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (p.isFunction(e)) return this.each(function (t) {
        p(this).addClass(e.call(this, t, ot(this)));
      });

      if ("string" == typeof e && e) {
        t = e.match(P) || [];

        while (n = this[u++]) {
          if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
            a = 0;

            while (o = t[a++]) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }

            s = p.trim(r), i !== s && n.setAttribute("class", s);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (p.isFunction(e)) return this.each(function (t) {
        p(this).removeClass(e.call(this, t, ot(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof e && e) {
        t = e.match(P) || [];

        while (n = this[u++]) {
          if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
            a = 0;

            while (o = t[a++]) {
              while (r.indexOf(" " + o + " ") > -1) {
                r = r.replace(" " + o + " ", " ");
              }
            }

            s = p.trim(r), i !== s && n.setAttribute("class", s);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e);

      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function (n) {
        p(this).toggleClass(e.call(this, n, ot(this), t), t);
      }) : this.each(function () {
        var t, r, i, o;

        if ("string" === n) {
          r = 0, i = p(this), o = e.match(P) || [];

          while (t = o[r++]) {
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || (t = ot(this), t && R.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : R.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + ot(n) + " ").replace(it, " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var at = /\r/g,
      st = /[\x20\t\r\n\f]+/g;
  p.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = p.isFunction(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function (e) {
            return null == e ? "" : e + "";
          })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(at, "") : null == n ? "" : n);
      }
    }
  }), p.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = p.find.attr(e, "value");
          return null != t ? t : p.trim(p.text(e)).replace(st, " ");
        }
      },
      select: {
        get: function get(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) {
            if (n = r[u], (n.selected || u === i) && (d.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
              if (t = p(n).val(), o) return t;
              a.push(t);
            }
          }

          return a;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = p.makeArray(t),
              a = i.length;

          while (a--) {
            r = i[a], (r.selected = p.inArray(p.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), p.each(["radio", "checkbox"], function () {
    p.valHooks[this] = {
      set: function set(e, t) {
        return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0;
      }
    }, d.checkOn || (p.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var ut = /^(?:focusinfocus|focusoutblur)$/;
  p.extend(p.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          d,
          f,
          h,
          v = [i || r],
          m = c.call(t, "type") ? t.type : t,
          g = c.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !ut.test(m + p.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), d = m.indexOf(":") < 0 && "on" + m, t = t[p.expando] ? t : new p.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : p.makeArray(n, [t]), h = p.event.special[m] || {}, o || !h.trigger || h.trigger.apply(i, n) !== !1)) {
        if (!o && !h.noBubble && !p.isWindow(i)) {
          for (l = h.delegateType || m, ut.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          t.type = a > 1 ? l : h.bindType || m, f = (R.get(s, "events") || {})[t.type] && R.get(s, "handle"), f && f.apply(s, n), f = d && s[d], f && f.apply && O(s) && (t.result = f.apply(s, n), t.result === !1 && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || h._default && h._default.apply(v.pop(), n) !== !1 || !O(i) || d && p.isFunction(i[m]) && !p.isWindow(i) && (u = i[d], u && (i[d] = null), p.event.triggered = m, i[m](), p.event.triggered = void 0, u && (i[d] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = p.extend(new p.Event(), n, {
        type: e,
        isSimulated: !0
      });
      p.event.trigger(r, null, t);
    }
  }), p.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        p.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      return n ? p.event.trigger(e, t, n, !0) : void 0;
    }
  }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    p.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), p.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), d.focusin = "onfocusin" in e, d.focusin || p.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      p.event.simulate(t, e.target, p.event.fix(e));
    };

    p.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = R.access(r, t);
        i || r.addEventListener(e, n, !0), R.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = R.access(r, t) - 1;
        i ? R.access(r, t, i) : (r.removeEventListener(e, n, !0), R.remove(r, t));
      }
    };
  });
  var lt = e.location,
      ct = p.now(),
      dt = /\?/;
  p.parseJSON = function (e) {
    return JSON.parse(e + "");
  }, p.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (r) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n;
  };
  var ft = /#.*$/,
      pt = /([?&])_=[^&]*/,
      ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      mt = /^(?:GET|HEAD)$/,
      gt = /^\/\//,
      yt = {},
      bt = {},
      xt = "*/".concat("*"),
      wt = r.createElement("a");
  wt.href = lt.href;

  function Ct(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(P) || [];
      if (p.isFunction(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function Tt(e, t, n, r) {
    var i = {},
        o = e === bt;

    function a(s) {
      var u;
      return i[s] = !0, p.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function Et(e, t) {
    var n,
        r,
        i = p.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && p.extend(!0, e, r), e;
  }

  function kt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
  }

  function St(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) {
          if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (a !== !0) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (d) {
          return {
            state: "parsererror",
            error: a ? d : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: lt.href,
      type: "GET",
      isLocal: vt.test(lt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": xt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Et(Et(e, p.ajaxSettings), t) : Et(p.ajaxSettings, e);
    },
    ajaxPrefilter: Ct(yt),
    ajaxTransport: Ct(bt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          d,
          f = p.ajaxSetup({}, n),
          h = f.context || f,
          v = f.context && (h.nodeType || h.jquery) ? p(h) : p.event,
          m = p.Deferred(),
          g = p.Callbacks("once memory"),
          y = f.statusCode || {},
          b = {},
          x = {},
          w = 0,
          C = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === w) {
            if (!s) {
              s = {};

              while (t = ht.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === w ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return w || (e = x[n] = x[n] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return w || (f.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (2 > w) for (t in e) {
            y[t] = [y[t], e[t]];
          } else T.always(e[T.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || lt.href) + "").replace(ft, "").replace(gt, lt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = p.trim(f.dataType || "*").toLowerCase().match(P) || [""], null == f.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = f.url, l.href = l.href, f.crossDomain = wt.protocol + "//" + wt.host != l.protocol + "//" + l.host;
        } catch (E) {
          f.crossDomain = !0;
        }
      }

      if (f.data && f.processData && "string" != typeof f.data && (f.data = p.param(f.data, f.traditional)), Tt(yt, f, n, T), 2 === w) return T;
      c = p.event && f.global, c && 0 === p.active++ && p.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (dt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(o) ? o.replace(pt, "$1_=" + ct++) : o + (dt.test(o) ? "&" : "?") + "_=" + ct++)), f.ifModified && (p.lastModified[o] && T.setRequestHeader("If-Modified-Since", p.lastModified[o]), p.etag[o] && T.setRequestHeader("If-None-Match", p.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);

      for (d in f.headers) {
        T.setRequestHeader(d, f.headers[d]);
      }

      if (f.beforeSend && (f.beforeSend.call(h, T, f) === !1 || 2 === w)) return T.abort();
      C = "abort";

      for (d in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        T[d](f[d]);
      }

      if (i = Tt(bt, f, n, T)) {
        if (T.readyState = 1, c && v.trigger("ajaxSend", [T, f]), 2 === w) return T;
        f.async && f.timeout > 0 && (u = e.setTimeout(function () {
          T.abort("timeout");
        }, f.timeout));

        try {
          w = 1, i.send(b, k);
        } catch (E) {
          if (!(2 > w)) throw E;
          k(-1, E);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            d,
            b,
            x,
            C,
            E = n;
        2 !== w && (w = 2, u && e.clearTimeout(u), i = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (x = kt(f, T, r)), x = St(f, x, T, l), l ? (f.ifModified && (C = T.getResponseHeader("Last-Modified"), C && (p.lastModified[o] = C), C = T.getResponseHeader("etag"), C && (p.etag[o] = C)), 204 === t || "HEAD" === f.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, d = x.data, b = x.error, l = !b)) : (b = E, !t && E || (E = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || E) + "", l ? m.resolveWith(h, [d, E, T]) : m.rejectWith(h, [T, E, b]), T.statusCode(y), y = void 0, c && v.trigger(l ? "ajaxSuccess" : "ajaxError", [T, f, l ? d : b]), g.fireWith(h, [T, E]), c && (v.trigger("ajaxComplete", [T, f]), --p.active || p.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return p.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return p.get(e, void 0, t, "script");
    }
  }), p.each(["get", "post"], function (e, t) {
    p[t] = function (e, n, r, i) {
      return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax(p.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, p.isPlainObject(e) && e));
    };
  }), p._evalUrl = function (e) {
    return p.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, p.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return p.isFunction(e) ? this.each(function (t) {
        p(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(e) {
      return p.isFunction(e) ? this.each(function (t) {
        p(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = p(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = p.isFunction(e);
      return this.each(function (n) {
        p(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
      }).end();
    }
  }), p.expr.filters.hidden = function (e) {
    return !p.expr.filters.visible(e);
  }, p.expr.filters.visible = function (e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
  };
  var jt = /%20/g,
      Nt = /\[\]$/,
      Dt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Mt = /^(?:input|select|textarea|keygen)/i;

  function Pt(e, t, n, r) {
    var i;
    if (p.isArray(t)) p.each(t, function (t, i) {
      n || Nt.test(e) ? r(e, i) : Pt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== p.type(t)) r(e, t);else for (i in t) {
      Pt(e + "[" + i + "]", t[i], n, r);
    }
  }

  p.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Pt(n, e[n], t, i);
    }
    return r.join("&").replace(jt, "+");
  }, p.fn.extend({
    serialize: function serialize() {
      return p.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = p.prop(this, "elements");
        return e ? p.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !p(this).is(":disabled") && Mt.test(this.nodeName) && !At.test(e) && (this.checked || !Y.test(e));
      }).map(function (e, t) {
        var n = p(this).val();
        return null == n ? null : p.isArray(n) ? p.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  }), p.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  };
  var Lt = {
    0: 200,
    1223: 204
  },
      qt = p.ajaxSettings.xhr();
  d.cors = !!qt && "withCredentials" in qt, d.ajax = qt = !!qt, p.ajaxTransport(function (t) {
    var _n, r;

    return d.cors || qt && !t.crossDomain ? {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Lt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (u) {
          if (_n) throw u;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    } : void 0;
  }), p.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return p.globalEval(e), e;
      }
    }
  }), p.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), p.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = p("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Ht = [],
      Ft = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Ht.pop() || p.expando + "_" + ct++;
      return this[e] = !0, e;
    }
  }), p.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = t.jsonp !== !1 && (Ft.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
    return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ft, "$1" + i) : t.jsonp !== !1 && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || p.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? p(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), a && p.isFunction(o) && o(a[0]), a = o = void 0;
    }), "script") : void 0;
  }), p.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || r;
    var i = T.exec(e),
        o = !n && [];
    return i ? [t.createElement(i[1])] : (i = ne([e], t, o), o && o.length && p(o).remove(), p.merge([], i.childNodes));
  };
  var Ot = p.fn.load;
  p.fn.load = function (e, t, n) {
    if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = p.trim(e.slice(s)), e = e.slice(0, s)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && p.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    p.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), p.expr.filters.animated = function (e) {
    return p.grep(p.timers, function (t) {
      return e === t.elem;
    }).length;
  };

  function It(e) {
    return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }

  p.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = p.css(e, "position"),
          d = p(e),
          f = {};
      "static" === c && (e.style.position = "relative"), s = d.offset(), o = p.css(e, "top"), u = p.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f);
    }
  }, p.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        p.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0],
          i = {
        top: 0,
        left: 0
      },
          o = r && r.ownerDocument;
      if (o) return t = o.documentElement, p.contains(t, r) ? (i = r.getBoundingClientRect(), n = It(o), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            r = {
          top: 0,
          left: 0
        };
        return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (r = e.offset()), r.top += p.css(e[0], "borderTopWidth", !0), r.left += p.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - p.css(n, "marginTop", !0),
          left: t.left - r.left - p.css(n, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === p.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || Ae;
      });
    }
  }), p.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    p.fn[e] = function (r) {
      return F(this, function (e, r, i) {
        var o = It(e);
        return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i);
      }, e, r, arguments.length);
    };
  }), p.each(["top", "left"], function (e, t) {
    p.cssHooks[t] = Pe(d.pixelPosition, function (e, n) {
      return n ? (n = Me(e, t), je.test(n) ? p(e).position()[t] + "px" : n) : void 0;
    });
  }), p.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    p.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      p.fn[r] = function (r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
            a = n || (r === !0 || i === !0 ? "margin" : "border");
        return F(this, function (t, n, r) {
          var i;
          return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, a) : p.style(t, n, r, a);
        }, t, o ? r : void 0, o, null);
      };
    });
  }), p.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    size: function size() {
      return this.length;
    }
  }), p.fn.andSelf = p.fn.addBack,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return p;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Rt = e.jQuery,
      _t = e.$;
  return p.noConflict = function (t) {
    return e.$ === p && (e.$ = _t), t && e.jQuery === p && (e.jQuery = Rt), p;
  }, t || (e.jQuery = e.$ = p), p;
});

(function e(t, n, r) {
  function i(a, s) {
    if (!n[a]) {
      if (!t[a]) {
        var u = typeof require == "function" && require;
        if (!s && u) return require(a, !0);
        if (o) return o(a, !0);
        var l = new Error("Cannot find module '" + a + "'");
        throw l.code = "MODULE_NOT_FOUND", l;
      }

      var c = n[a] = {
        exports: {}
      };
      t[a][0].call(c.exports, function (e) {
        var n = t[a][1][e];
        return i(n ? n : e);
      }, c, c.exports, e, t, n, r);
    }

    return n[a].exports;
  }

  var o = typeof require == "function" && require;

  for (var a = 0; a < r.length; a++) {
    i(r[a]);
  }

  return i;
})({
  1: [function (e, t, n) {
    "use strict";

    var r = e("./legacy-sagepay.js");
    window.Sagepay = r.Sagepay;
  }, {
    "./legacy-sagepay.js": 4
  }],
  2: [function (e, t, n) {
    "use strict";

    var r = e("./modules/page-objects/hosted-page.js");
    var i = e("./sagepay-dropin.js");
    var o = e("./sagepay-own-form.js");
    window.HostedPage = r.HostedPage;
    window.sagepayCheckout = i.sagepayCheckout;
    window.sagepayDropin = i.sagepayCheckout;
    window.sagepayOwnForm = o.sagepayOwnForm;
  }, {
    "./modules/page-objects/hosted-page.js": 11,
    "./sagepay-dropin.js": 23,
    "./sagepay-own-form.js": 24
  }],
  3: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = n.Constants = {
      iFrameId: "payment-iframe",
      initialContainerHeight: "164px",
      helpDialogElementSelector: "#cvc-help-content",
      apiRoot: "/api/v1",
      cardIdentifierEndpoint: "/card-identifiers",
      events: {
        hostedPageLoaded: "hosted-page-loaded",
        hostedPageUpdated: "hosted-page-loaded",
        tokenisationRequested: "tokenisation-requested",
        tokenisationCompleted: "tokenisation-completed"
      }
    };
  }, {}],
  4: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.Sagepay = undefined;
    var r = e("./constants.js");
    var i = jQuery.noConflict();
    var o = n.Sagepay = {
      tokeniseCardDetails: function a(e, t) {
        console.log("enter tokeniseCardDetails");
        var n = i('input[data-sagepay="merchantSessionKey"]', e).val();
        var o = i('input[data-sagepay="cardholderName"]', e).val();
        var a = i('input[data-sagepay="cardNumber"]', e).val();
        var s = i('input[data-sagepay="expiryDate"]', e).val();
        var u = i('input[data-sagepay="securityCode"]', e).val();
        var l = {
          cardDetails: {
            cardholderName: o,
            cardNumber: a,
            expiryDate: s,
            securityCode: u
          }
        };
        var c = (SagePayConfig && SagePayConfig.restHost ? SagePayConfig.restHost : "") + r.Constants.apiRoot + r.Constants.cardIdentifierEndpoint;
        i.ajax({
          type: "POST",
          url: c,
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify(l),
          headers: {
            Authorization: "Bearer " + n
          },
          async: true
        }).done(function (e, n, r) {
          t(r.status, e);
        }).fail(function (e) {
          t(e.status, e);
        }).always(function () {});
      },
      generatePaymentForm: function s(e, t) {
        var n = i("<form/>", {
          id: "payment",
          action: "/payment",
          method: "POST",
          "class": "form-horizontal"
        }).submit(function (e) {
          e.preventDefault();
          var t = i(this);
          t.find(".submit").prop("disabled", true);
          o.tokeniseCardDetails(t, o.sagepayResponseHandler);
        });
        n.append(i("<span/>", {
          "class": "text-danger errors"
        }));
        n.append(i("<input>", {
          type: "hidden",
          value: t
        }).attr("data-sagepay", "merchantSessionKey"));
        var r = ["cardholderName", "cardNumber", "expiryDate", "securityCode", "amount", "currency"];

        for (var a = 0; a < r.length; a++) {
          var s = i("<div/>", {
            name: "cardDetails." + r[a],
            "class": "form-group"
          });
          s.append(i("<label>", {
            "class": "col-sm-3 control-label"
          }).text(r[a]));
          var u = i("<div/>", {
            "class": "col-sm-5"
          });
          u.append(i("<input/>", {
            type: "text",
            "class": "form-control"
          }).attr("data-sagepay", r[a]));
          u.append(i("<span></span>", {
            "class": "error text-danger"
          }));
          s.append(u);
          n.append(s);
        }

        var l = i("<div/>", {
          name: "submit",
          "class": "form-group"
        });
        l.append(i("<div>", {
          "class": "col-sm-offset-3 col-sm-3"
        }).append(i("<button/>", {
          "class": "btn btn-default",
          type: "submit"
        }).text("Submit Payment")));
        n.append(l);
        i(e).html(n);
      },
      sagepayResponseHandler: function u(e, t) {
        console.log(e, t);
        var n = i("#payment");
        i("div.form-group", n).removeClass("has-error");
        i("span.error", n).html("");
        n.find(".submit").prop("disabled", false);

        if (e === 201) {
          var r = t["cardIdentifier"];
          i("<form>").attr("action", n.attr("action")).attr("method", n.attr("method")).append(i('<input type="hidden" name="amount" >').val(i('input[data-sagepay="amount"]', n).val())).append(i('<input type="hidden" name="currency" >').val(i('input[data-sagepay="currency"]', n).val())).append(i('<input type="hidden" name="merchantSessionKey" >').val(i('input[data-sagepay="merchantSessionKey"]', n).val())).append(i('<input type="hidden" name="cardIdentifier" >').val(r)).appendTo(i(document.body)).submit();
        } else {
          var o = t.responseJSON;

          if (o.errors === undefined) {
            n.find(".errors").html(o.description);
          } else {
            var a = o.errors;

            for (var s = 0; s < a.length; ++s) {
              var u = i("div[name='" + a[s].property + "']", n);
              u.addClass("has-error");
              i("span.error", u).html(a[s].description);
            }
          }
        }
      }
    };
  }, {
    "./constants.js": 3
  }],
  5: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = n.Formatting = {
      fieldFormatter: function i(e, t) {
        function n(e) {
          var n = e.fieldElement;
          n.removeAttribute("title");
          n.classList.remove("invalid");
          var r = n.parentElement;
          r.classList.remove("invalid");
          var i = r.querySelector(".error-message");

          if (i) {
            r.removeChild(i);
          }

          t();
        }

        function r(r) {
          var i = r.fieldElement,
              o = r.message,
              a = r.context;
          n({
            fieldElement: i
          });
          i.setAttribute("title", o);

          switch (a) {
            case "blur":
              {
                i.classList.add("invalid");
                break;
              }

            case "submit":
              {
                i.classList.add("invalid");
                var s = i.parentElement;
                s.classList.add("invalid");
                var u = e.ownerDocument.createElement("div");
                u.className = "error-message";
                u.innerHTML = i.getAttribute("title");
                s.appendChild(u);
                break;
              }

            default:
              break;
          }

          t();
        }

        return {
          clearValidationFormatting: n,
          formatFieldAsInvalid: r
        };
      }
    };
  }, {}],
  6: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.HelpDialog = undefined;
    var r = e("../utils/utils.js");
    var i = 1e4;
    var o = 10;
    var a = 60;
    var s = -3;
    var u = "help-dialog-id";
    var l = "help-dialog";
    var c = "help-dialog-left-callout";
    var d = "help-dialog-content";
    var f = "hidden";

    function p(e) {
      return e.classList.contains(f);
    }

    function h(e) {
      return !p(e);
    }

    function v(e) {
      e.classList.add(f);
      var t = e.querySelectorAll("*");

      for (var n = 0; n < t.length; n++) {
        t[n].classList.add(f);
      }
    }

    function m(e) {
      e.classList.remove(f);
      var t = e.querySelectorAll("*");

      for (var n = 0; n < t.length; n++) {
        t[n].classList.remove(f);
      }
    }

    function g(e) {
      e.classList.add(l);
      var t = document.createElement("div");
      t.classList.add(c);
      e.appendChild(t);
      var n = document.createElement("div");
      n.classList.add(d);
      e.appendChild(n);
      v(e);
    }

    function y(e, t, n) {
      var r = e.querySelector("." + c);
      r.style.left = t + "px";
      r.style.top = n + "px";
      var i = e.querySelector("." + d);
      i.style.left = t + o + "px";
      i.style.top = n - a + "px";
    }

    function b(e) {
      if (h(e)) {
        v(e);
      }

      if (e.hideTimeout) {
        clearTimeout(e.hideTimeout);
      }
    }

    var x = n.HelpDialog = {
      create: function w(e, t, n) {
        var o = t.contentSource;

        if (!e) {
          throw new Error("Help dialog target not specified");
        }

        var a = e.getAttribute("data-" + u);
        var l = void 0;

        if (!a || a && !n.getElementById(a)) {
          a = (0, r.uuid)();
          l = n.createElement("div");
          l.id = a;
          g(l);
          n.body.appendChild(l);
          e.setAttribute("data-" + u, a);
          e.addEventListener("click", function (e) {
            if (p(l)) {
              m(l);
              var t = e.target.getBoundingClientRect();
              y(l, t.right, t.top + s);
              l.hideTimeout = setTimeout(function () {
                b(l);
              }, i);
            } else {
              b(l);
            }

            e.stopPropagation();
          }, false);
          n.body.addEventListener("click", function () {
            b(l);
          }, false);
        } else {
          l = n.getElementById(a);
        }

        if (o) {
          var c = n.querySelector(o);
          l.querySelector("." + d).innerHTML = c.innerHTML;
        }
      },
      update: function C(e, t, n) {
        var r = t.action;

        if (e) {
          var i = e.getAttribute("data-" + u);
          var o = n.getElementById(i);

          if (r === "hide") {
            b(o);
          }
        }
      }
    };
  }, {
    "../utils/utils.js": 16
  }],
  7: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = n.IFrameGenerator = {
      appendFrame: function i(e) {
        var t = e.container,
            n = e.iFrameId,
            r = e.iFrameSource;
        var i = t.ownerDocument.createElement("iframe");
        i.setAttribute("id", n);

        if (r) {
          i.setAttribute("src", r);
        }

        i.setAttribute("scrolling", "no");
        i.setAttribute("style", "border:0;width:100%");
        return t.appendChild(i);
      }
    };
  }, {}],
  8: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });

    function r(e) {
      var t = null;
      ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function (n) {
        if (typeof e[n] === "function") {
          t = n;
          return true;
        }

        return false;
      });
      return t;
    }

    function i(e, t) {
      var n = null;
      var i = e;

      while (i !== null) {
        n = i.parentElement;

        if (n !== null && n[r(n)](t)) {
          break;
        }

        i = n;
      }

      return n;
    }

    var o = n.Polyfill = {
      closest: function a(e, t) {
        if (e.closest) {
          return e.closest(t);
        }

        return i(e, t);
      }
    };
  }, {}],
  9: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = n.Styler = {
      setCss: function i() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.target,
            n = e.style;

        if (t === undefined || t === null) {
          throw new Error('"target" is a required parameter of Styler');
        }

        var r = t instanceof Array ? t : [t];
        r.forEach(function (e) {
          for (var t in n) {
            if (n.hasOwnProperty(t)) {
              e.style[t] = n[t];
            }
          }
        });
      }
    };
  }, {}],
  10: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = n.Messaging = {
      frameMessenger: function i() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.source,
            n = e.targetDomain;

        if (!t) {
          throw new Error("frameMessenger source must not be null");
        }

        var r = {};

        function i(e) {
          var t = e.message,
              r = e.target;
          r.postMessage(t, n);
        }

        function o(e) {
          if (n !== "*" && e.origin !== n) {
            throw new Error("Message is not from trusted origin");
          }

          var t = e.data,
              i = t.type,
              o = t.payload;

          if (r.hasOwnProperty(i)) {
            r[i].forEach(function (e) {
              return e(o);
            });
          }
        }

        function a(e) {
          var t = e.type,
              n = e.handler;

          if (!r[t]) {
            r[t] = [];
          }

          r[t].push(n);
          return this;
        }

        function s() {
          t.removeEventListener("message", o, false);
        }

        function u() {
          t.addEventListener("message", o, false);
        }

        return {
          sendMessage: i,
          addMessageHandler: a,
          enableMessageEventListener: u,
          disableMessageEventListener: s
        };
      }
    };
  }, {}],
  11: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.HostedPage = n.HostedPageEventHandlers = undefined;
    var r = e("../../constants.js");
    var i = e("../validation/form-validator.js");
    var o = e("../dom-helpers/field-formatter.js");
    var a = e("../messaging/frame-messenger.js");
    var s = e("../dom-helpers/help-dialog.js");
    var u = e("../tokenisation/card-tokeniser.js");
    var l = e("../validation/validator.js");
    var c = r.Constants.events;
    var d = "#card-details-form";
    var f = "#cvc-help";
    var p = "cardholder-name";
    var h = "card-number";
    var v = "expiry-date";
    var m = "security-code";
    var g = new u.CardTokeniser({
      config: SagePayConfig
    });
    var y = {
      cardholderName: {
        fieldName: p,
        fullName: "cardholder name",
        validationType: "full-name"
      },
      cardNumber: {
        fieldName: h,
        fullName: "card number",
        validationType: "card-number"
      },
      expiryDate: {
        fieldName: v,
        fullName: "expiry date",
        validationType: "card-date"
      },
      securityCode: {
        fieldName: m,
        fullName: "security code",
        validationType: "card-security-code"
      }
    };

    function b(e) {
      return e.document.querySelector(d);
    }

    function x(e, t) {
      return e.querySelector("[name='" + t + "']");
    }

    function w() {
      return Object.keys(y).map(function (e) {
        return y[e];
      });
    }

    function C(e) {
      return e.document.querySelector(f);
    }

    function T(e) {
      var t = {};
      Object.keys(y).forEach(function (n) {
        var r = x(e, y[n].fieldName);

        if (r !== null) {
          t[n] = r.value;
        }
      });
      return t;
    }

    function E(e) {
      var t = e.document.documentElement.getBoundingClientRect().height;
      return {
        height: t + "px",
        windowId: e.uniqueId
      };
    }

    function k(e, t, n, r, i) {
      t.enableMessageEventListener();
      t.addMessageHandler({
        type: c.tokenisationRequested,
        handler: function o(a) {
          var s = a.merchantSessionKey,
              u = a.reusableCardIdentifier;
          i({
            merchantSessionKey: s,
            reusableCardIdentifier: u,
            frmValidator: n,
            fieldFormatter: r,
            messenger: t,
            window: e
          });
        }
      });
    }

    var S = n.HostedPageEventHandlers = {
      setup: function N(e) {
        var t = e.messenger,
            n = e.pageWindow,
            r = e.tokeniser;

        function i(e) {
          t.sendMessage({
            target: n.parent,
            message: {
              type: e,
              payload: E(n)
            }
          });
        }

        return {
          pageReadyEventHandler: function o() {
            i(c.hostedPageLoaded);
          },
          validationCompletedEventHandler: function a() {
            i(c.hostedPageUpdated);
            s.HelpDialog.update(C(n), {
              action: "hide"
            }, n.document);
          },
          tokenisationRequestedEventHandler: function u(e) {
            var o = e.merchantSessionKey,
                a = e.reusableCardIdentifier,
                s = e.frmValidator,
                u = e.fieldFormatter;

            if (!l.Validator.validateUuid(o).valid) {
              throw new Error("Merchant session key provided for tokenisation is invalid");
            }

            if (a !== undefined && !l.Validator.validateUuid(a).valid) {
              throw new Error("Reusable card identifier provided for tokenisation is invalid");
            }

            var d = b(n);
            var f = s.triggerFormValidation();
            var p = n.parent;

            if (f) {
              r.tokenise({
                merchantSessionKey: o,
                reusableCardIdentifier: a,
                cardDetails: T(d),
                success: function h(e) {
                  var n = e.cardIdentifier;
                  return t.sendMessage({
                    target: p,
                    message: {
                      type: c.tokenisationCompleted,
                      payload: {
                        success: true,
                        cardIdentifier: n
                      }
                    }
                  });
                },
                clientError: function v(e) {
                  return e.forEach(function (e) {
                    u.formatFieldAsInvalid({
                      fieldElement: x(d, e.field),
                      message: e.message,
                      context: "submit"
                    });
                  });
                },
                serverError: function m(e) {
                  var n = e.httpErrorCode,
                      r = e.code,
                      i = e.description;
                  t.sendMessage({
                    target: p,
                    message: {
                      type: c.tokenisationCompleted,
                      payload: {
                        success: false,
                        error: {
                          httpCode: n,
                          errorCode: r,
                          errorMessage: i
                        }
                      }
                    }
                  });
                },
                timeoutError: function g() {
                  t.sendMessage({
                    target: p,
                    message: {
                      type: c.tokenisationCompleted,
                      payload: {
                        success: false,
                        error: {
                          httpCode: 0,
                          errorCode: "C001",
                          errorMessage: "Client request timeout"
                        }
                      }
                    }
                  });
                },
                networkError: function y() {
                  t.sendMessage({
                    target: p,
                    message: {
                      type: c.tokenisationCompleted,
                      payload: {
                        success: false,
                        error: {
                          httpCode: 0,
                          errorCode: "C002",
                          errorMessage: "Network error"
                        }
                      }
                    }
                  });
                }
              });
            }

            i(c.hostedPageUpdated);
          }
        };
      }
    };

    var j = n.HostedPage = function () {
      function e() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.targetDomain,
            n = e.pageWindow,
            u = n === undefined ? window : n,
            l = e.delayedLoad,
            c = l === undefined ? false : l;
        var d = a.Messaging.frameMessenger({
          source: u,
          targetDomain: t
        });
        var f = S.setup({
          messenger: d,
          pageWindow: u,
          tokeniser: g
        });
        var h = new RegExp(SagePayConfig.pages.reusableCardIdentifier + "$").test(u.location.href);
        var v = i.FormValidation.createValidator({
          form: b(u),
          fieldsInfo: w(),
          onValidate: f.validationCompletedEventHandler,
          forReusableTokens: h
        });
        i.FormInputCharReplacementHandler.setup({
          form: b(u),
          fieldName: p
        });
        var m = o.Formatting.fieldFormatter(b(u), f.validationCompletedEventHandler);
        k(u, d, v, m, f.tokenisationRequestedEventHandler);
        var y = u.document.querySelector(r.Constants.helpDialogElementSelector);

        if (y) {
          s.HelpDialog.create(C(u), {
            contentSource: r.Constants.helpDialogElementSelector
          }, u.document);
        }

        if (c) {
          f.pageReadyEventHandler();
        } else {
          window.addEventListener("load", f.pageReadyEventHandler, false);
        }
      }

      return {
        setup: e
      };
    }();
  }, {
    "../../constants.js": 3,
    "../dom-helpers/field-formatter.js": 5,
    "../dom-helpers/help-dialog.js": 6,
    "../messaging/frame-messenger.js": 10,
    "../tokenisation/card-tokeniser.js": 13,
    "../validation/form-validator.js": 20,
    "../validation/validator.js": 22
  }],
  12: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.ParentPage = undefined;
    var r = e("../../constants.js");
    var i = e("../dom-helpers/styler.js");
    var o = e("../dom-helpers/iframe-generator.js");
    var a = e("../dom-helpers/polyfill.js");
    var s = e("../messaging/frame-messenger.js");
    var u = e("../tokenisation/tokenisation-result-injector.js");
    var l = r.Constants.events;

    function c(e) {
      var t = e.target,
          n = e.height,
          o = n === undefined ? r.Constants.initialContainerHeight : n;
      i.Styler.setCss({
        target: t,
        style: {
          height: o
        }
      });
    }

    function d(e) {
      var t = e.messenger,
          n = e.iFrame,
          r = e.container;

      function i(e) {
        var t = e.height;
        c({
          target: [n, r],
          height: t
        });
      }

      t.enableMessageEventListener();
      t.addMessageHandler({
        type: l.hostedPageUpdated,
        handler: i
      });
      t.addMessageHandler({
        type: l.hostedPageLoaded,
        handler: i
      });
    }

    function f(e) {
      var t = e.messenger,
          n = e.onTokenise;
      t.addMessageHandler({
        type: l.tokenisationCompleted,
        handler: n
      });
    }

    function p(e, t, n) {
      function r() {
        var e = n ? SagePayConfig.pages.reusableCardIdentifier : SagePayConfig.pages.standardCardDetails;
        return "" + SagePayConfig.restBaseURL + SagePayConfig.hostedPagesSubPath + "/" + e;
      }

      var i = SagePayConfig.restBaseURL && SagePayConfig.hostedPagesSubPath ? r() : null;
      return o.IFrameGenerator.appendFrame({
        container: e,
        iFrameId: t,
        iFrameSource: i
      });
    }

    function h(e) {
      var t = e.messenger,
          n = e.frameWindow,
          r = e.merchantSessionKey,
          i = e.reusableCardIdentifier;
      t.sendMessage({
        target: n,
        message: {
          type: l.tokenisationRequested,
          payload: {
            merchantSessionKey: r,
            reusableCardIdentifier: i
          }
        }
      });
    }

    function v(e) {
      return typeof e === "string" ? document.querySelector(e) : e();
    }

    var m = n.ParentPage = function () {
      var e = r.Constants.iFrameId;
      var t = void 0;
      var n = void 0;
      var i = void 0;
      var o = void 0;
      var l = void 0;
      var m = void 0;
      var g = void 0;

      function y(r) {
        var y = r.containerSelector,
            b = r.onTokenise,
            x = r.merchantSessionKey,
            w = r.reusableCardIdentifier,
            C = r.pageWindow,
            T = C === undefined ? window : C;
        i = null;
        o = null;
        l = null;
        m = null;
        g = null;
        t = T;
        n = t.document;
        i = n.getElementById(e);
        o = typeof y === "string" ? n.querySelector(y) : y();
        l = o.style.height;
        m = s.Messaging.frameMessenger({
          source: t,
          targetDomain: SagePayConfig.restHost
        });

        if (i !== null) {
          throw new Error("Parent page already initialised. Please call destroy method before initialising");
        }

        i = p(o, e, w);
        c({
          target: [i, o]
        });
        d({
          messenger: m,
          iFrame: i,
          container: o
        });

        if (b) {
          g = b;
          f({
            messenger: m,
            onTokenise: g
          });
        }

        function E() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.key,
              n = t === undefined ? x : t;
          h({
            messenger: m,
            frameWindow: i.contentWindow,
            merchantSessionKey: n,
            reusableCardIdentifier: w
          });
        }

        function k(e) {
          var t = e ? v(e) : a.Polyfill.closest(o, "form");

          if (!g) {
            g = function n(e) {
              u.TokenisationResultInjector.injectCardTokenisationResult(t, e);
              t.submit();
            };

            f({
              messenger: m,
              onTokenise: g
            });
          }

          t.addEventListener("submit", function (e) {
            e.preventDefault();
            E();
          });
        }

        function S() {
          m.disableMessageEventListener();
          i.parentNode.removeChild(i);
          o.style.height = l;
        }

        function j() {
          return o;
        }

        return {
          destroy: S,
          bindForm: k,
          tokenise: E,
          getContainer: j
        };
      }

      return {
        setup: y
      };
    }();
  }, {
    "../../constants.js": 3,
    "../dom-helpers/iframe-generator.js": 7,
    "../dom-helpers/polyfill.js": 8,
    "../dom-helpers/styler.js": 9,
    "../messaging/frame-messenger.js": 10,
    "../tokenisation/tokenisation-result-injector.js": 15
  }],
  13: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.CardTokeniser = undefined;

    var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) r.writable = true;
          Object.defineProperty(e, r.key, r);
        }
      }

      return function (t, n, r) {
        if (n) e(t.prototype, n);
        if (r) e(t, r);
        return t;
      };
    }();

    var i = e("../../constants.js");
    var o = e("./poster.js");
    var a = e("../utils/utils.js");

    function s(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var u = 0;

    function l(e, t, n) {
      var r = e.indexOf(".") >= 0 ? e.split(".")[1] : e;
      var i = (0, a.kebabise)(r);
      return {
        field: i,
        message: t,
        code: n
      };
    }

    var c = n.CardTokeniser = function () {
      function e(t) {
        var n = t.config,
            r = t.poster,
            i = r === undefined ? o.Poster : r;
        s(this, e);
        this.config = n;
        this.poster = i;
      }

      r(e, [{
        key: "tokenise",
        value: function t(e) {
          var t = e.merchantSessionKey,
              n = e.reusableCardIdentifier,
              r = e.cardDetails,
              o = r.cardholderName,
              a = r.cardNumber,
              s = r.expiryDate,
              c = r.securityCode,
              d = e.success,
              f = e.clientError,
              p = e.serverError,
              h = e.timeoutError,
              v = e.networkError;
          var m = (this.config && this.config.restHost ? this.config.restHost : "") + i.Constants.apiRoot + i.Constants.cardIdentifierEndpoint;
          var g = n ? m + "/" + n + "/security-code" : m;
          return this.poster.post({
            uri: g,
            authorisationHeader: "Bearer " + t,
            data: n ? {
              securityCode: c
            } : {
              cardDetails: {
                cardholderName: o,
                cardNumber: a,
                expiryDate: s,
                securityCode: c
              }
            },
            success: function y(e) {
              var t = e.responseData;
              d(n ? {} : {
                cardIdentifier: t.cardIdentifier,
                expiry: t.expiry,
                cardType: t.cardType
              });
            },
            failure: function b(e) {
              var t = e.timedOut,
                  n = e.networkFailed,
                  r = e.responseData,
                  i = e.httpErrorCode;

              if (t === true) {
                h();
              } else if (n === true) {
                v();
              } else if (i === 422) {
                var o = r.errors.map(function (e) {
                  return l(e.property, e.clientMessage, e.code);
                });
                f(o, i);
              } else if (i !== u) {
                if (r) {
                  p({
                    httpErrorCode: i,
                    code: r.code,
                    description: r.description
                  });
                } else {
                  p({
                    httpErrorCode: i
                  });
                }
              }
            }
          });
        }
      }]);
      return e;
    }();
  }, {
    "../../constants.js": 3,
    "../utils/utils.js": 16,
    "./poster.js": 14
  }],
  14: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = 4;
    var i = 30;

    function o(e) {
      try {
        return JSON.parse(e);
      } catch (t) {
        return null;
      }
    }

    var a = n.Poster = {
      post: function s(e) {
        var t = e.uri,
            n = e.data,
            a = e.authorisationHeader,
            s = e.success,
            u = e.failure;
        var l = new XMLHttpRequest();
        l.open("post", t, true);
        l.timeout = i * 1e3;
        l.setRequestHeader("Content-Type", "application/json");

        if (a) {
          l.setRequestHeader("Authorization", a);
        }

        l.addEventListener("readystatechange", function () {
          if (l.readyState === r) {
            var e = l.status === 204 ? {} : o(l.responseText);

            if (l.status >= 200 && l.status < 300 && e !== null) {
              s({
                responseData: e
              });
            } else {
              u({
                responseData: e,
                responseText: l.responseText,
                httpErrorCode: l.status
              });
            }
          }
        }, false);

        l.ontimeout = function () {
          u({
            timedOut: true
          });
        };

        l.onerror = function () {
          if (l.status === 0) {
            u({
              networkFailed: true
            });
          }
        };

        l.send(JSON.stringify(n));
      }
    };
  }, {}],
  15: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });

    function r(e, t, n) {
      var r = document.createElement("input");
      r.setAttribute("id", t);
      r.setAttribute("name", t);
      r.setAttribute("type", "hidden");
      r.setAttribute("value", n);
      e.appendChild(r);
    }

    function i(e, t) {
      r(e, "card-identifier", t);
    }

    function o(e) {
      var t = e.form,
          n = e.error;
      var i = n.httpCode,
          o = n.errorCode,
          a = n.errorMessage;

      if (i) {
        r(t, "card-identifier-http-code", i);
      }

      if (o) {
        r(t, "card-identifier-error-code", o);
      }

      if (a) {
        r(t, "card-identifier-error-message", a);
      }
    }

    var a = n.TokenisationResultInjector = {
      injectCardTokenisationResult: function s(e, t) {
        if (t.success) {
          if (t.cardIdentifier) {
            i(e, t.cardIdentifier);
          }
        } else {
          var n = t.error;
          o({
            form: e,
            error: n
          });
        }
      }
    };
  }, {}],
  16: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.uuid = r;
    n.kebabise = i;

    function r() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = Math.random() * 16 | 0;
        var n = e === "x" ? t : t & 3 | 8;
        return n.toString(16);
      });
    }

    function i(e) {
      var t = e.match(/[A-Za-z][a-z]*/g);
      return t.map(function (e) {
        return e.charAt(0).toLowerCase() + e.substring(1);
      }).join("-");
    }
  }, {}],
  17: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.ApiValidator = undefined;
    var r = e("./validator.js");

    var i = n.ApiValidator = function () {
      function e(e, t) {
        var n = r.Validator.validateUuid(e);

        if (!n.valid) {
          t.push(n.messageFor("Merchant session key"));
        }
      }

      function t(t, n) {
        if (t) {
          e(t, n);
        }
      }

      function n(e) {
        var t = e.selector,
            n = e.argumentName,
            i = e.validationMessages;
        var o = r.Validator.validateBaseType(t, "string", "function");

        if (!o.valid) {
          i.push(o.messageFor(n + " selector"));
        } else {
          if (typeof t === "string") {
            var a = r.Validator.validateCssSelector(t);

            if (!a.valid) {
              i.push(a.messageFor(n + " CSS selector"));
            }
          } else {
            var s = r.Validator.validateInstanceType(t(), HTMLElement);

            if (!s.valid) {
              i.push(s.messageFor(n + " function selector result"));
            }
          }
        }
      }

      function i(e, t) {
        n({
          selector: e,
          argumentName: "Container",
          validationMessages: t
        });
      }

      function o(e, t) {
        n({
          selector: e,
          argumentName: "Form",
          validationMessages: t
        });
      }

      function a(e, t) {
        var n = r.Validator.validateBaseType(e, "function");

        if (!n.valid) {
          t.push(n.messageFor("onTokenise"));
        }
      }

      function s(e, t) {
        var n = r.Validator.validateUuid(e);

        if (!n.valid) {
          t.push(n.messageFor("Reusable card identifier"));
        }
      }

      function u() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            n = t.merchantSessionKey,
            r = t.containerSelector,
            o = t.onTokenise,
            u = t.reusableCardIdentifier;
        var l = [];
        e(n, l);
        i(r, l);

        if (o) {
          a(o, l);
        }

        if (u) {
          s(u, l);
        }

        if (l.length > 0) {
          throw new Error("API parameters invalid\n - " + l.join("\n - "));
        }
      }

      function l() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            n = t.merchantSessionKey,
            r = t.onTokenise,
            i = t.reusableCardIdentifier;
        var o = [];
        e(n, o);

        if (r) {
          a(r, o);
        }

        if (i) {
          s(i, o);
        }

        if (o.length > 0) {
          throw new Error("API parameters invalid\n - " + o.join("\n - "));
        }
      }

      function c(e) {
        var t = e.formSelector;
        var n = [];
        o(t, n);

        if (n.length > 0) {
          throw new Error("API parameters invalid\n - " + n.join("\n - "));
        }
      }

      function d(e) {
        var n = e.newMerchantSessionKey;
        var r = [];
        t(n, r);

        if (r.length > 0) {
          throw new Error("API parameters invalid\n - " + r.join("\n - "));
        }
      }

      return {
        validateDropinSetupParameters: u,
        validateOwnFormSetupParameters: l,
        validateFormParameters: c,
        validateTokeniseParameters: d
      };
    }();
  }, {
    "./validator.js": 22
  }],
  18: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });

    function r(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var i = n.ErrorType = function o(e, t) {
      r(this, o);
      this.name = e;
      this.message = t;
    };
  }, {}],
  19: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.ErrorTypes = undefined;
    var r = e("./error-type.js");
    var i = n.ErrorTypes = {
      invalidFormat: new r.ErrorType("invalid-format", function (e) {
        return e + " does not have a valid format";
      }),
      nullValue: new r.ErrorType("null-value", function (e) {
        return e + " cannot be null";
      }),
      undefinedValue: new r.ErrorType("undefined-value", function (e) {
        return e + " cannot be undefined";
      }),
      doesNotMatchAnyElement: new r.ErrorType("does-not-match-any-element", function (e) {
        return e + " does not match any element";
      }),
      matchesMoreThanOneElement: new r.ErrorType("matches-more-than-one-element", function (e) {
        return e + " matches more than one element";
      }),
      invalidType: new r.ErrorType("invalid-type", function (e) {
        return e + " does not belong to one of the expected types";
      }),
      expiryDateInThePast: new r.ErrorType("expiry-date-in-the-past", "This is not a valid expiry date"),
      cardNumberInvalid: new r.ErrorType("card-number-invalid", "This is not a valid card number")
    };
  }, {
    "./error-type.js": 18
  }],
  20: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.FormInputCharReplacementHandler = n.FormValidation = undefined;

    var r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }

      return e;
    };

    var i = e("./validator.js");
    var o = e("./input-limiter.js");
    var a = e("./../dom-helpers/field-formatter.js");
    var s = "This field is required";
    var u = {
      "full-name": {
        attributes: {
          pattern: "^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð /\\\\&-.']{1,50}$",
          required: ""
        },
        errorMessages: {
          valueMissing: function p() {
            return s;
          },
          patternMismatch: function h(e) {
            return "The " + e + " is invalid";
          }
        }
      },
      "card-number": {
        attributes: {
          pattern: "^\\d{12,20}$",
          required: ""
        },
        constraintType: "numeric",
        errorMessages: {
          valueMissing: function v() {
            return s;
          },
          patternMismatch: function m(e) {
            return "The " + e + " is invalid";
          },
          customError: function g(e) {
            return "The " + e + " is invalid";
          }
        },
        specialValidation: i.Validator.validateCardNumberWithLuhnCheck
      },
      "card-date": {
        attributes: {
          pattern: "^(0[1-9]|1[012])\\d{2}$",
          required: ""
        },
        constraintType: "numeric",
        errorMessages: {
          valueMissing: function y() {
            return s;
          },
          patternMismatch: function b(e) {
            return "The " + e + " needs to be in MMYY format";
          },
          customError: function x(e) {
            return "The " + e + " needs to be a future date";
          }
        },
        specialValidation: i.Validator.validateCardExpiryDate
      },
      "card-security-code": {
        attributes: {
          pattern: "^\\d{3,4}$",
          required: ""
        },
        constraintType: "numeric",
        errorMessages: {
          valueMissing: function w() {
            return s;
          },
          patternMismatch: function C(e) {
            return "The " + e + " needs to be 3 or 4 digits long";
          }
        }
      }
    };
    var l = {
      attributes: r({}, u["card-security-code"].attributes, {
        required: true
      }),
      constraintType: u["card-security-code"].constraintType,
      errorMessages: r({}, u["card-security-code"].errorMessages, {
        valueMissing: function T() {
          return s;
        }
      })
    };

    function c(e) {
      return r({}, u, e);
    }

    var d = n.FormValidation = {
      createValidator: function E(e) {
        var t = e.form,
            n = e.fieldsInfo,
            r = e.onValidate,
            i = r === undefined ? function () {} : r,
            s = e.forReusableTokens,
            u = s === undefined ? false : s;
        var d = c(u ? {
          "card-security-code": l
        } : null);
        var f = a.Formatting.fieldFormatter(t, i);

        function p(e) {
          return n.filter(function (t) {
            return t.fieldName === e;
          })[0];
        }

        function h(e) {
          return t.querySelector("[name='" + e + "']");
        }

        function v(e, t, n) {
          var r = t.errorMessages;

          if (n.valueMissing) {
            return r.valueMissing(e);
          }

          if (n.patternMismatch) {
            return r.patternMismatch(e);
          }

          if (n.customError) {
            return r.customError(e);
          }

          return "Validation error";
        }

        function m(e) {
          var t = e.fieldName,
              n = e.context;
          var r = h(t);

          if (r) {
            var i = p(t);
            var o = i.validationType;

            if (!r.checkValidity()) {
              var a = v(i.fullName, d[o], r.validity);
              f.formatFieldAsInvalid({
                fieldElement: r,
                message: a,
                context: n
              });
            } else {
              f.clearValidationFormatting({
                fieldElement: r
              });
            }
          }
        }

        function g(e) {
          var t = p(e);
          var n = h(e);

          if (n) {
            var r = d[t.validationType].attributes;

            if (r) {
              Object.keys(r).forEach(function (e) {
                if (r[e] !== null) {
                  n.setAttribute(e, r[e]);
                }
              });
            }
          }
        }

        function y(e) {
          var t = h(e);

          if (t) {
            t.addEventListener("blur", function () {
              return m({
                fieldName: e,
                context: "blur"
              });
            });
          }
        }

        function b(e) {
          var t = h(e);

          if (t) {
            var n = d[p(e).validationType];
            var r = n.constraintType;

            if (r) {
              if (r === "numeric") {
                t.addEventListener("keydown", o.InputLimiter.constrainInputToDigitsOnly, false);
              }
            }
          }
        }

        function x(e) {
          var t = h(e);

          if (t) {
            var n = d[p(e).validationType];
            var r = n.specialValidation;

            if (r) {
              t.addEventListener("change", function i() {
                var e = r(this.value);

                if (e.valid) {
                  this.setCustomValidity("");
                } else {
                  this.setCustomValidity(e.errorType.message);
                }
              });
            }
          }
        }

        function w() {
          var e = t.checkValidity();

          if (!e) {
            n.forEach(function (e) {
              m({
                fieldName: e.fieldName,
                context: "submit"
              });
            });
          }

          return e;
        }

        function C(e) {
          var t = p(e);

          if (t.validationType) {
            if (!d.hasOwnProperty(t.validationType)) {
              throw new Error('Validation type "' + t.validationType + '" specified for field "' + e + '" does not exist');
            }

            g(e);
            y(e);
            x(e);
            b(e);
          }
        }

        n.forEach(function (e) {
          C(e.fieldName);
        });
        return {
          triggerFormValidation: w
        };
      }
    };
    var f = n.FormInputCharReplacementHandler = {
      setup: function k(e) {
        var t = e.form,
            n = e.fieldName;

        function r(e) {
          var t = e.form,
              n = e.fieldName;
          var r = t.querySelector("[name='" + n + "']").value;

          if (typeof r !== "undefined") {
            r = r.replace(/[‘’]/g, "'");
            t.querySelector("[name='" + n + "']").value = r;
          }
        }

        var i = t.querySelector("[name='" + n + "']");

        if (i) {
          i.addEventListener("input", function () {
            return r({
              form: t,
              fieldName: n
            });
          });
        }
      }
    };
  }, {
    "./../dom-helpers/field-formatter.js": 5,
    "./input-limiter.js": 21,
    "./validator.js": 22
  }],
  21: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });

    function r(e) {
      var t = !e.shiftKey && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 46 || e.keyCode === 8 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 36 || e.keyCode === 35 || e.keyCode === 9 || e.keyCode === 13 || e.ctrlKey === true && e.keyCode === 86;

      if (!t) {
        e.stopPropagation();
        e.preventDefault();
      }

      return t;
    }

    var i = n.InputLimiter = {
      constrainInputToDigitsOnly: r
    };
  }, {}],
  22: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.Validator = n.ValidationResult = undefined;
    var r = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    };

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) r.writable = true;
          Object.defineProperty(e, r.key, r);
        }
      }

      return function (t, n, r) {
        if (n) e(t.prototype, n);
        if (r) e(t, r);
        return t;
      };
    }();

    var o = e("./errors/error-types.js");

    function a(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var s = n.ValidationResult = function () {
      function e(t) {
        var n = t.valid,
            r = t.errorType;
        a(this, e);
        this.valid = n;
        this.errorType = r;
      }

      i(e, [{
        key: "messageFor",
        value: function t(e) {
          return this.errorType.message(e);
        }
      }]);
      return e;
    }();

    var u = n.Validator = function () {
      function e(e) {
        if (e === undefined) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.undefinedValue
          });
        }

        if (e === null) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.nullValue
          });
        }

        return new s({
          valid: true
        });
      }

      function t(t) {
        var n = e(t);

        if (!n.valid) {
          return n;
        }

        if (!/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(t)) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.invalidFormat
          });
        }

        return new s({
          valid: true
        });
      }

      function n(t, n) {
        var r = e(t);

        if (!r.valid) {
          return r;
        }

        var i = n || document;

        try {
          var a = i.querySelectorAll(t);

          if (a.length > 1) {
            return new s({
              valid: false,
              errorType: o.ErrorTypes.matchesMoreThanOneElement
            });
          } else if (a.length === 0) {
            return new s({
              valid: false,
              errorType: o.ErrorTypes.doesNotMatchAnyElement
            });
          }

          return new s({
            valid: true
          });
        } catch (u) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.invalidFormat
          });
        }
      }

      function i(t) {
        var n = e(t);

        if (!n.valid) {
          return n;
        }

        for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) {
          a[u - 1] = arguments[u];
        }

        if (!a.some(function (e) {
          return e === (typeof t === "undefined" ? "undefined" : r(t));
        })) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.invalidType
          });
        }

        return new s({
          valid: true
        });
      }

      function a(t) {
        var n = e(t);

        if (!n.valid) {
          return n;
        }

        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
          i[a - 1] = arguments[a];
        }

        if (!i.some(function (e) {
          return t instanceof e;
        })) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.invalidType
          });
        }

        return new s({
          valid: true
        });
      }

      function u(e) {
        var t = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        var n = e.length;
        var r = 1;
        var i = 0;
        var o = void 0;

        while (n) {
          o = parseInt(e.charAt(--n), 10);
          i += (r ^= 1) ? t[o] : o;
        }

        return i && i % 10 === 0;
      }

      function l(e) {
        if (!u(e)) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.cardNumberInvalid
          });
        }

        return new s({
          valid: true
        });
      }

      function c(e) {
        var t = new Date();
        t.setHours(0, 0, 0, 0);
        t.setDate(1);
        var n = parseInt(e.substring(0, 2), 10);
        t.setMonth((n - 1 + 1) % 12);
        var r = parseInt("20" + e.substring(2, 4), 10);
        var i = n === 12 ? r + 1 : r;
        t.setFullYear(i);
        t = new Date(t.getTime() - 1e3);
        var o = new Date();
        return t < o;
      }

      function d(e) {
        if (c(e)) {
          return new s({
            valid: false,
            errorType: o.ErrorTypes.expiryDateInThePast
          });
        }

        return new s({
          valid: true
        });
      }

      return {
        validateNotNullOrUndefined: e,
        validateBaseType: i,
        validateInstanceType: a,
        validateUuid: t,
        validateCssSelector: n,
        validateCardNumberWithLuhnCheck: l,
        validateCardExpiryDate: d
      };
    }();
  }, {
    "./errors/error-types.js": 19
  }],
  23: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.sagepayCheckout = a;
    var r = e("./modules/validation/api-validator.js");
    var i = e("./modules/page-objects/parent-page.js");
    var o = e("./modules/dom-helpers/polyfill.js");

    function a() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.merchantSessionKey,
          n = e.onTokenise,
          a = e.reusableCardIdentifier,
          s = e.containerSelector,
          u = s === undefined ? "#sp-container" : s;
      r.ApiValidator.validateDropinSetupParameters({
        merchantSessionKey: t,
        onTokenise: n,
        containerSelector: u,
        reusableCardIdentifier: a
      });
      var l = i.ParentPage.setup({
        merchantSessionKey: t,
        onTokenise: n,
        containerSelector: u,
        reusableCardIdentifier: a
      });
      return {
        form: function c() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.formSelector,
              n = t === undefined ? function () {
            return o.Polyfill.closest(l.getContainer(), "form");
          } : t;
          r.ApiValidator.validateFormParameters({
            formSelector: n
          });
          l.bindForm(n);
        },
        tokenise: function d() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.newMerchantSessionKey;
          r.ApiValidator.validateTokeniseParameters({
            newMerchantSessionKey: t
          });
          l.tokenise({
            key: t
          });
        },
        destroy: function f() {
          l.destroy();
        }
      };
    }
  }, {
    "./modules/dom-helpers/polyfill.js": 8,
    "./modules/page-objects/parent-page.js": 12,
    "./modules/validation/api-validator.js": 17
  }],
  24: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });

    var r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }

      return e;
    };

    n.sagepayOwnForm = a;
    var i = e("./modules/validation/api-validator.js");
    var o = e("./modules/tokenisation/card-tokeniser.js");

    function a() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.merchantSessionKey;
      i.ApiValidator.validateOwnFormSetupParameters({
        merchantSessionKey: t
      });
      var n = new o.CardTokeniser({
        config: SagePayConfig
      });

      function a(e) {
        var i = e.cardDetails,
            o = e.onTokenised,
            a = e.reusableCardIdentifier,
            s = e.newMerchantSessionKey,
            u = s === undefined ? t : s;
        n.tokenise({
          merchantSessionKey: u,
          reusableCardIdentifier: a,
          cardDetails: i,
          success: function l(e) {
            var t = e.cardIdentifier;
            return o(r({
              success: true
            }, t ? {
              cardIdentifier: t
            } : {}));
          },
          clientError: function c(e, t) {
            return o({
              success: false,
              httpErrorCode: t,
              errors: e.map(function (e) {
                return {
                  code: e.code,
                  message: e.message
                };
              })
            });
          },
          serverError: function d(e) {
            var t = e.httpErrorCode,
                n = e.code,
                r = e.description;
            return o({
              success: false,
              httpErrorCode: t,
              errors: [{
                code: n,
                message: r
              }]
            });
          },
          timeoutError: function f() {
            return o({
              success: false,
              httpErrorCode: 0,
              errors: [{
                code: "C001",
                message: "Client request timeout"
              }]
            });
          },
          networkError: function p() {
            return o({
              success: false,
              httpErrorCode: 0,
              errors: [{
                code: "C002",
                message: "Network error"
              }]
            });
          }
        });
      }

      return {
        tokeniseCardDetails: function s() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              n = e.cardDetails,
              r = e.onTokenised,
              i = e.newMerchantSessionKey,
              o = i === undefined ? t : i;
          a({
            cardDetails: n,
            onTokenised: r,
            newMerchantSessionKey: o
          });
        },
        activateReusableCardIdentifier: function u() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              n = e.reusableCardIdentifier,
              r = e.securityCode,
              i = e.onActivated,
              o = e.newMerchantSessionKey,
              s = o === undefined ? t : o;
          a({
            reusableCardIdentifier: n,
            cardDetails: {
              securityCode: r
            },
            onTokenised: i,
            newMerchantSessionKey: s
          });
        }
      };
    }
  }, {
    "./modules/tokenisation/card-tokeniser.js": 13,
    "./modules/validation/api-validator.js": 17
  }]
}, {}, [1, 2]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module), __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var logger = __webpack_require__(8);

var log = function log(message) {
  $('body').append("<h1>".concat(message, "</h1>"));
  console.log(message);
  logger.save(message);
};

module.exports = {
  log: log
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {module.exports = {
  save: function save(message) {
    $('body').append('<h2>hi from logger</h2>');
    console.log('Saved');
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ })
/******/ ]);