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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./resources/plugins/custom/prismjs/prismjs.bundle.js":
/*!************************************************************!*\
  !*** ./resources/plugins/custom/prismjs/prismjs.bundle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (e) {
  var t = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      a = {
    manual: e.Prism && e.Prism.manual,
    disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(t) {
        return t instanceof r ? new r(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++n
        }), e.__id;
      },
      clone: function e(t, n) {
        var r, i;

        switch (n = n || {}, a.util.type(t)) {
          case "Object":
            if (i = a.util.objId(t), n[i]) return n[i];

            for (var s in r = {}, n[i] = r, t) {
              t.hasOwnProperty(s) && (r[s] = e(t[s], n));
            }

            return r;

          case "Array":
            return i = a.util.objId(t), n[i] ? n[i] : (r = [], n[i] = r, t.forEach(function (t, a) {
              r[a] = e(t, n);
            }), r);

          default:
            return t;
        }
      },
      getLanguage: function getLanguage(e) {
        for (; e && !t.test(e.className);) {
          e = e.parentElement;
        }

        return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none";
      },
      currentScript: function currentScript() {
        if ("undefined" == typeof document) return null;
        if ("currentScript" in document) return document.currentScript;

        try {
          throw new Error();
        } catch (a) {
          var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack) || [])[1];

          if (e) {
            var t = document.getElementsByTagName("script");

            for (var n in t) {
              if (t[n].src == e) return t[n];
            }
          }

          return null;
        }
      },
      isActive: function isActive(e, t, n) {
        for (var a = "no-" + t; e;) {
          var r = e.classList;
          if (r.contains(t)) return !0;
          if (r.contains(a)) return !1;
          e = e.parentElement;
        }

        return !!n;
      }
    },
    languages: {
      extend: function extend(e, t) {
        var n = a.util.clone(a.languages[e]);

        for (var r in t) {
          n[r] = t[r];
        }

        return n;
      },
      insertBefore: function insertBefore(e, t, n, r) {
        var i = (r = r || a.languages)[e],
            s = {};

        for (var l in i) {
          if (i.hasOwnProperty(l)) {
            if (l == t) for (var o in n) {
              n.hasOwnProperty(o) && (s[o] = n[o]);
            }
            n.hasOwnProperty(l) || (s[l] = i[l]);
          }
        }

        var u = r[e];
        return r[e] = s, a.languages.DFS(a.languages, function (t, n) {
          n === u && t != e && (this[t] = s);
        }), s;
      },
      DFS: function e(t, n, r, i) {
        i = i || {};
        var s = a.util.objId;

        for (var l in t) {
          if (t.hasOwnProperty(l)) {
            n.call(t, l, t[l], r || l);
            var o = t[l],
                u = a.util.type(o);
            "Object" !== u || i[s(o)] ? "Array" !== u || i[s(o)] || (i[s(o)] = !0, e(o, n, l, i)) : (i[s(o)] = !0, e(o, n, null, i));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, t) {
      a.highlightAllUnder(document, e, t);
    },
    highlightAllUnder: function highlightAllUnder(e, t, n) {
      var r = {
        callback: n,
        container: e,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);

      for (var i, s = 0; i = r.elements[s++];) {
        a.highlightElement(i, !0 === t, r.callback);
      }
    },
    highlightElement: function highlightElement(n, r, i) {
      var s = a.util.getLanguage(n),
          l = a.languages[s];
      n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s;
      var o = n.parentElement;
      o && "pre" === o.nodeName.toLowerCase() && (o.className = o.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s);
      var u = {
        element: n,
        language: s,
        grammar: l,
        code: n.textContent
      };

      function c(e) {
        u.highlightedCode = e, a.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a.hooks.run("after-highlight", u), a.hooks.run("complete", u), i && i.call(u.element);
      }

      if (a.hooks.run("before-sanity-check", u), !u.code) return a.hooks.run("complete", u), void (i && i.call(u.element));
      if (a.hooks.run("before-highlight", u), u.grammar) {
        if (r && e.Worker) {
          var g = new Worker(a.filename);
          g.onmessage = function (e) {
            c(e.data);
          }, g.postMessage(JSON.stringify({
            language: u.language,
            code: u.code,
            immediateClose: !0
          }));
        } else c(a.highlight(u.code, u.grammar, u.language));
      } else c(a.util.encode(u.code));
    },
    highlight: function highlight(e, t, n) {
      var i = {
        code: e,
        grammar: t,
        language: n
      };
      return a.hooks.run("before-tokenize", i), i.tokens = a.tokenize(i.code, i.grammar), a.hooks.run("after-tokenize", i), r.stringify(a.util.encode(i.tokens), i.language);
    },
    tokenize: function tokenize(e, t) {
      var n = t.rest;

      if (n) {
        for (var a in n) {
          t[a] = n[a];
        }

        delete t.rest;
      }

      var r = new s();
      return l(r, r.head, e), i(e, r, t, r.head, 0), function (e) {
        var t = [],
            n = e.head.next;

        for (; n !== e.tail;) {
          t.push(n.value), n = n.next;
        }

        return t;
      }(r);
    },
    hooks: {
      all: {},
      add: function add(e, t) {
        var n = a.hooks.all;
        n[e] = n[e] || [], n[e].push(t);
      },
      run: function run(e, t) {
        var n = a.hooks.all[e];
        if (n && n.length) for (var r, i = 0; r = n[i++];) {
          r(t);
        }
      }
    },
    Token: r
  };

  function r(e, t, n, a) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length;
  }

  function i(e, t, n, s, u, c) {
    for (var g in n) {
      if (n.hasOwnProperty(g) && n[g]) {
        var d = n[g];
        d = Array.isArray(d) ? d : [d];

        for (var p = 0; p < d.length; ++p) {
          if (c && c.cause == g + "," + p) return;
          var m = d[p],
              f = m.inside,
              h = !!m.lookbehind,
              v = !!m.greedy,
              y = 0,
              b = m.alias;

          if (v && !m.pattern.global) {
            var x = m.pattern.toString().match(/[imsuy]*$/)[0];
            m.pattern = RegExp(m.pattern.source, x + "g");
          }

          for (var F = m.pattern || m, k = s.next, w = u; k !== t.tail && !(c && w >= c.reach); w += k.value.length, k = k.next) {
            var A = k.value;
            if (t.length > e.length) return;

            if (!(A instanceof r)) {
              var P = 1;

              if (v && k != t.tail.prev) {
                if (F.lastIndex = w, !(E = F.exec(e))) break;
                var $ = E.index + (h && E[1] ? E[1].length : 0),
                    S = E.index + E[0].length,
                    _ = w;

                for (_ += k.value.length; $ >= _;) {
                  _ += (k = k.next).value.length;
                }

                if (w = _ -= k.value.length, k.value instanceof r) continue;

                for (var j = k; j !== t.tail && (_ < S || "string" == typeof j.value); j = j.next) {
                  P++, _ += j.value.length;
                }

                P--, A = e.slice(w, _), E.index -= w;
              } else {
                F.lastIndex = 0;
                var E = F.exec(A);
              }

              if (E) {
                h && (y = E[1] ? E[1].length : 0);
                $ = E.index + y;
                var C = E[0].slice(y),
                    z = (S = $ + C.length, A.slice(0, $)),
                    T = A.slice(S),
                    N = w + A.length;
                c && N > c.reach && (c.reach = N);
                var O = k.prev;
                z && (O = l(t, O, z), w += z.length), o(t, O, P), k = l(t, O, new r(g, f ? a.tokenize(C, f) : C, b, C)), T && l(t, k, T), P > 1 && i(e, t, n, k.prev, w, {
                  cause: g + "," + p,
                  reach: N
                });
              }
            }
          }
        }
      }
    }
  }

  function s() {
    var e = {
      value: null,
      prev: null,
      next: null
    },
        t = {
      value: null,
      prev: e,
      next: null
    };
    e.next = t, this.head = e, this.tail = t, this.length = 0;
  }

  function l(e, t, n) {
    var a = t.next,
        r = {
      value: n,
      prev: t,
      next: a
    };
    return t.next = r, a.prev = r, e.length++, r;
  }

  function o(e, t, n) {
    for (var a = t.next, r = 0; r < n && a !== e.tail; r++) {
      a = a.next;
    }

    t.next = a, a.prev = t, e.length -= r;
  }

  if (e.Prism = a, r.stringify = function e(t, n) {
    if ("string" == typeof t) return t;

    if (Array.isArray(t)) {
      var r = "";
      return t.forEach(function (t) {
        r += e(t, n);
      }), r;
    }

    var i = {
      type: t.type,
      content: e(t.content, n),
      tag: "span",
      classes: ["token", t.type],
      attributes: {},
      language: n
    },
        s = t.alias;
    s && (Array.isArray(s) ? Array.prototype.push.apply(i.classes, s) : i.classes.push(s)), a.hooks.run("wrap", i);
    var l = "";

    for (var o in i.attributes) {
      l += " " + o + '="' + (i.attributes[o] || "").replace(/"/g, "&quot;") + '"';
    }

    return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + l + ">" + i.content + "</" + i.tag + ">";
  }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", function (t) {
    var n = JSON.parse(t.data),
        r = n.language,
        i = n.code,
        s = n.immediateClose;
    e.postMessage(a.highlight(i, a.languages[r], r)), s && e.close();
  }, !1), a) : a;
  var u = a.util.currentScript();

  function c() {
    a.manual || a.highlightAll();
  }

  if (u && (a.filename = u.src, u.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
    var g = document.readyState;
    "loading" === g || "interactive" === g && u && u.defer ? document.addEventListener("DOMContentLoaded", c) : window.requestAnimationFrame ? window.requestAnimationFrame(c) : window.setTimeout(c, 16);
  }

  return a;
}(_self);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */


 true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/,
      name: /[^\s<>'"]+/
    }
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function value(e, t) {
    var n = {};
    n["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var a = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: n
      }
    };
    a["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var r = {};
    r[e] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: a
    }, Prism.languages.insertBefore("markup", "cdata", r);
  }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, function (e) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        "function": /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + t.source + "$"),
          alias: "url"
        }
      }
    },
    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
    string: {
      pattern: t,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, e.languages.css.atrule.inside.rest = e.languages.css;
  var n = e.languages.markup;
  n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: n.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: e.languages.css
        }
      },
      alias: "language-css"
    }
  }, n.tag));
}(Prism), Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  "boolean": /\b(?:true|false)\b/,
  "function": /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  "function": /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-flags": /[a-z]+$/,
      "regex-delimiter": /^\/|\/$/
    }
  },
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript, function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var e = window.Prism,
        t = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    },
        n = "data-src-status",
        a = "loading",
        r = "loaded",
        i = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
        s = /\blang(?:uage)?-([\w-]+)\b/i;
    e.hooks.add("before-highlightall", function (e) {
      e.selector += ", " + i;
    }), e.hooks.add("before-sanity-check", function (s) {
      var l = s.element;

      if (l.matches(i)) {
        s.code = "", l.setAttribute(n, a);
        var u = l.appendChild(document.createElement("CODE"));
        u.textContent = "Loading…";
        var c = l.getAttribute("data-src"),
            g = s.language;

        if ("none" === g) {
          var d = (/\.(\w+)$/.exec(c) || [, "none"])[1];
          g = t[d] || d;
        }

        o(u, g), o(l, g);
        var p = e.plugins.autoloader;
        p && p.loadLanguages(g);
        var m = new XMLHttpRequest();
        m.open("GET", c, !0), m.onreadystatechange = function () {
          var t, a;
          4 == m.readyState && (m.status < 400 && m.responseText ? (l.setAttribute(n, r), u.textContent = m.responseText, e.highlightElement(u)) : (l.setAttribute(n, "failed"), m.status >= 400 ? u.textContent = (t = m.status, a = m.statusText, "✖ Error " + t + " while fetching file: " + a) : u.textContent = "✖ Error: File does not exist or is empty"));
        }, m.send(null);
      }
    }), e.plugins.fileHighlight = {
      highlight: function highlight(t) {
        for (var n, a = (t || document).querySelectorAll(i), r = 0; n = a[r++];) {
          e.highlightElement(n);
        }
      }
    };
    var l = !1;

    e.fileHighlight = function () {
      l || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), l = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }

  function o(e, t) {
    var n = e.className;
    n = n.replace(s, " ") + " language-" + t, e.className = n.replace(/\s+/g, " ").trim();
  }
}(), function () {
  var e = Object.assign || function (e, t) {
    for (var n in t) {
      t.hasOwnProperty(n) && (e[n] = t[n]);
    }

    return e;
  };

  function t(t) {
    this.defaults = e({}, t);
  }

  function n(e) {
    for (var t = 0, n = 0; n < e.length; ++n) {
      e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
    }

    return e.length + t;
  }

  t.prototype = {
    setDefaults: function setDefaults(t) {
      this.defaults = e(this.defaults, t);
    },
    normalize: function normalize(t, n) {
      for (var a in n = e(this.defaults, n)) {
        var r = a.replace(/-(\w)/g, function (e, t) {
          return t.toUpperCase();
        });
        "normalize" !== a && "setDefaults" !== r && n[a] && this[r] && (t = this[r].call(this, t, n[a]));
      }

      return t;
    },
    leftTrim: function leftTrim(e) {
      return e.replace(/^\s+/, "");
    },
    rightTrim: function rightTrim(e) {
      return e.replace(/\s+$/, "");
    },
    tabsToSpaces: function tabsToSpaces(e, t) {
      return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "));
    },
    spacesToTabs: function spacesToTabs(e, t) {
      return t = 0 | t || 4, e.replace(RegExp(" {" + t + "}", "g"), "\t");
    },
    removeTrailing: function removeTrailing(e) {
      return e.replace(/\s*?$/gm, "");
    },
    removeInitialLineFeed: function removeInitialLineFeed(e) {
      return e.replace(/^(?:\r?\n|\r)/, "");
    },
    removeIndent: function removeIndent(e) {
      var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
      return t && t[0].length ? (t.sort(function (e, t) {
        return e.length - t.length;
      }), t[0].length ? e.replace(RegExp("^" + t[0], "gm"), "") : e) : e;
    },
    indent: function indent(e, t) {
      return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&");
    },
    breakLines: function breakLines(e, t) {
      t = !0 === t ? 80 : 0 | t || 80;

      for (var a = e.split("\n"), r = 0; r < a.length; ++r) {
        if (!(n(a[r]) <= t)) {
          for (var i = a[r].split(/(\s+)/g), s = 0, l = 0; l < i.length; ++l) {
            var o = n(i[l]);
            (s += o) > t && (i[l] = "\n" + i[l], s = o);
          }

          a[r] = i.join("");
        }
      }

      return a.join("\n");
    }
  },  true && module.exports && (module.exports = t), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
    "remove-trailing": !0,
    "remove-indent": !0,
    "left-trim": !0,
    "right-trim": !0
  }), Prism.hooks.add("before-sanity-check", function (e) {
    var t = Prism.plugins.NormalizeWhitespace;
    if ((!e.settings || !1 !== e.settings["whitespace-normalization"]) && Prism.util.isActive(e.element, "whitespace-normalization", !0)) if (e.element && e.element.parentNode || !e.code) {
      var n = e.element.parentNode;

      if (e.code && n && "pre" === n.nodeName.toLowerCase()) {
        for (var a = n.childNodes, r = "", i = "", s = !1, l = 0; l < a.length; ++l) {
          var o = a[l];
          o == e.element ? s = !0 : "#text" === o.nodeName && (s ? i += o.nodeValue : r += o.nodeValue, n.removeChild(o), --l);
        }

        if (e.element.children.length && Prism.plugins.KeepMarkup) {
          var u = r + e.element.innerHTML + i;
          e.element.innerHTML = t.normalize(u, e.settings), e.code = e.element.textContent;
        } else e.code = r + e.code + i, e.code = t.normalize(e.code, e.settings);
      }
    } else e.code = t.normalize(e.code, e.settings);
  }));
}(), Prism.plugins.NormalizeWhitespace.setDefaults({
  "remove-trailing": !0,
  "remove-indent": !0,
  "left-trim": !0,
  "right-trim": !0
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 2:
/*!******************************************************************!*\
  !*** multi ./resources/plugins/custom/prismjs/prismjs.bundle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hanse\Documents\Code Lab\Laravel\portal\resources\plugins\custom\prismjs\prismjs.bundle.js */"./resources/plugins/custom/prismjs/prismjs.bundle.js");


/***/ })

/******/ });