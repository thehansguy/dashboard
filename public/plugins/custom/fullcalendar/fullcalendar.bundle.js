/*!
FullCalendar Core Package v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).FullCalendar = {})
}(this, (function(e) {
  "use strict";
  var t = {
      className: !0,
      colSpan: !0,
      rowSpan: !0
  }
    , n = {
      "<tr": "tbody",
      "<td": "tr"
  };
  function r(e, n, r) {
      var i = document.createElement(e);
      if (n)
          for (var o in n)
              "style" === o ? m(i, n[o]) : t[o] ? i[o] = n[o] : i.setAttribute(o, n[o]);
      return "string" == typeof r ? i.innerHTML = r : null != r && a(i, r),
      i
  }
  function i(e) {
      e = e.trim();
      var t = document.createElement(s(e));
      return t.innerHTML = e,
      t.firstChild
  }
  function o(e) {
      return Array.prototype.slice.call(function(e) {
          e = e.trim();
          var t = document.createElement(s(e));
          return t.innerHTML = e,
          t.childNodes
      }(e))
  }
  function s(e) {
      return n[e.substr(0, 3)] || "div"
  }
  function a(e, t) {
      for (var n = c(t), r = 0; r < n.length; r++)
          e.appendChild(n[r])
  }
  function l(e, t) {
      for (var n = c(t), r = e.firstChild || null, i = 0; i < n.length; i++)
          e.insertBefore(n[i], r)
  }
  function c(e) {
      return "string" == typeof e ? o(e) : e instanceof Node ? [e] : Array.prototype.slice.call(e)
  }
  function u(e) {
      e.parentNode && e.parentNode.removeChild(e)
  }
  var d = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector
    , p = Element.prototype.closest || function(e) {
      var t = this;
      if (!document.documentElement.contains(t))
          return null;
      do {
          if (f(t, e))
              return t;
          t = t.parentElement || t.parentNode
      } while (null !== t && 1 === t.nodeType);return null
  }
  ;
  function h(e, t) {
      return p.call(e, t)
  }
  function f(e, t) {
      return d.call(e, t)
  }
  function g(e, t) {
      for (var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0; i < n.length; i++)
          for (var o = n[i].querySelectorAll(t), s = 0; s < o.length; s++)
              r.push(o[s]);
      return r
  }
  var v = /(top|left|right|bottom|width|height)$/i;
  function m(e, t) {
      for (var n in t)
          y(e, n, t[n])
  }
  function y(e, t, n) {
      null == n ? e.style[t] = "" : "number" == typeof n && v.test(t) ? e.style[t] = n + "px" : e.style[t] = n
  }
  function E(e, t) {
      var n = {
          left: Math.max(e.left, t.left),
          right: Math.min(e.right, t.right),
          top: Math.max(e.top, t.top),
          bottom: Math.min(e.bottom, t.bottom)
      };
      return n.left < n.right && n.top < n.bottom && n
  }
  var S = null;
  function b() {
      return null === S && (S = function() {
          var e = r("div", {
              style: {
                  position: "absolute",
                  top: -1e3,
                  left: 0,
                  border: 0,
                  padding: 0,
                  overflow: "scroll",
                  direction: "rtl"
              }
          }, "<div></div>");
          document.body.appendChild(e);
          var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
          return u(e),
          t
      }()),
      S
  }
  function D(e) {
      return e = Math.max(0, e),
      e = Math.round(e)
  }
  function w(e, t) {
      void 0 === t && (t = !1);
      var n = window.getComputedStyle(e)
        , r = parseInt(n.borderLeftWidth, 10) || 0
        , i = parseInt(n.borderRightWidth, 10) || 0
        , o = parseInt(n.borderTopWidth, 10) || 0
        , s = parseInt(n.borderBottomWidth, 10) || 0
        , a = D(e.offsetWidth - e.clientWidth - r - i)
        , l = {
          borderLeft: r,
          borderRight: i,
          borderTop: o,
          borderBottom: s,
          scrollbarBottom: D(e.offsetHeight - e.clientHeight - o - s),
          scrollbarLeft: 0,
          scrollbarRight: 0
      };
      return b() && "rtl" === n.direction ? l.scrollbarLeft = a : l.scrollbarRight = a,
      t && (l.paddingLeft = parseInt(n.paddingLeft, 10) || 0,
      l.paddingRight = parseInt(n.paddingRight, 10) || 0,
      l.paddingTop = parseInt(n.paddingTop, 10) || 0,
      l.paddingBottom = parseInt(n.paddingBottom, 10) || 0),
      l
  }
  function T(e, t) {
      void 0 === t && (t = !1);
      var n = C(e)
        , r = w(e, t)
        , i = {
          left: n.left + r.borderLeft + r.scrollbarLeft,
          right: n.right - r.borderRight - r.scrollbarRight,
          top: n.top + r.borderTop,
          bottom: n.bottom - r.borderBottom - r.scrollbarBottom
      };
      return t && (i.left += r.paddingLeft,
      i.right -= r.paddingRight,
      i.top += r.paddingTop,
      i.bottom -= r.paddingBottom),
      i
  }
  function C(e) {
      var t = e.getBoundingClientRect();
      return {
          left: t.left + window.pageXOffset,
          top: t.top + window.pageYOffset,
          right: t.right + window.pageXOffset,
          bottom: t.bottom + window.pageYOffset
      }
  }
  function R(e) {
      return e.getBoundingClientRect().height + I(e)
  }
  function I(e) {
      var t = window.getComputedStyle(e);
      return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
  }
  function M(e) {
      for (var t = []; e instanceof HTMLElement; ) {
          var n = window.getComputedStyle(e);
          if ("fixed" === n.position)
              break;
          /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
          e = e.parentNode
      }
      return t
  }
  function P(e) {
      e.preventDefault()
  }
  function k(e, t, n, r) {
      function i(e) {
          var t = h(e.target, n);
          t && r.call(t, e, t)
      }
      return e.addEventListener(t, i),
      function() {
          e.removeEventListener(t, i)
      }
  }
  var x = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
  var H = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function _(e, t) {
      var n = j(e);
      return n[2] += t,
      W(n)
  }
  function O(e, t) {
      var n = j(e);
      return n[6] += t,
      W(n)
  }
  function N(e, t) {
      return (t.valueOf() - e.valueOf()) / 864e5
  }
  function z(e, t) {
      var n = B(e)
        , r = B(t);
      return {
          years: 0,
          months: 0,
          days: Math.round(N(n, r)),
          milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
      }
  }
  function L(e, t) {
      var n = V(e, t);
      return null !== n && n % 7 == 0 ? n / 7 : null
  }
  function V(e, t) {
      return q(e) === q(t) ? Math.round(N(e, t)) : null
  }
  function B(e) {
      return W([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
  }
  function A(e, t, n, r) {
      var i = W([t, 0, 1 + U(t, n, r)])
        , o = B(e)
        , s = Math.round(N(i, o));
      return Math.floor(s / 7) + 1
  }
  function U(e, t, n) {
      var r = 7 + t - n;
      return -((7 + W([e, 0, r]).getUTCDay() - t) % 7) + r - 1
  }
  function F(e) {
      return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
  }
  function G(e) {
      return new Date(e[0],e[1] || 0,null == e[2] ? 1 : e[2],e[3] || 0,e[4] || 0,e[5] || 0)
  }
  function j(e) {
      return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
  }
  function W(e) {
      return 1 === e.length && (e = e.concat([0])),
      new Date(Date.UTC.apply(Date, e))
  }
  function Y(e) {
      return !isNaN(e.valueOf())
  }
  function q(e) {
      return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
  }
  var Z = ["years", "months", "days", "milliseconds"]
    , X = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function K(e, t) {
      var n;
      return "string" == typeof e ? function(e) {
          var t = X.exec(e);
          if (t) {
              var n = t[1] ? -1 : 1;
              return {
                  years: 0,
                  months: 0,
                  days: n * (t[2] ? parseInt(t[2], 10) : 0),
                  milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
              }
          }
          return null
      }(e) : "object" == typeof e && e ? J(e) : "number" == typeof e ? J(((n = {})[t || "milliseconds"] = e,
      n)) : null
  }
  function J(e) {
      return {
          years: e.years || e.year || 0,
          months: e.months || e.month || 0,
          days: (e.days || e.day || 0) + 7 * Q(e),
          milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
      }
  }
  function Q(e) {
      return e.weeks || e.week || 0
  }
  function $(e, t) {
      return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds
  }
  function ee(e) {
      return te(e) / 864e5
  }
  function te(e) {
      return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
  }
  function ne(e, t) {
      var n = e.milliseconds;
      if (n) {
          if (n % 1e3 != 0)
              return {
                  unit: "millisecond",
                  value: n
              };
          if (n % 6e4 != 0)
              return {
                  unit: "second",
                  value: n / 1e3
              };
          if (n % 36e5 != 0)
              return {
                  unit: "minute",
                  value: n / 6e4
              };
          if (n)
              return {
                  unit: "hour",
                  value: n / 36e5
              }
      }
      return e.days ? t || e.days % 7 != 0 ? {
          unit: "day",
          value: e.days
      } : {
          unit: "week",
          value: e.days / 7
      } : e.months ? {
          unit: "month",
          value: e.months
      } : e.years ? {
          unit: "year",
          value: e.years
      } : {
          unit: "millisecond",
          value: 0
      }
  }
  function re(e) {
      e.forEach((function(e) {
          e.style.height = ""
      }
      ))
  }
  function ie(e) {
      var t, n, r = [], i = [];
      for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e),
      t = 0; t < i.length; t++)
          "string" == typeof (n = i[t]) ? r.push("-" === n.charAt(0) ? {
              field: n.substring(1),
              order: -1
          } : {
              field: n,
              order: 1
          }) : "function" == typeof n && r.push({
              func: n
          });
      return r
  }
  function oe(e, t, n) {
      var r, i;
      for (r = 0; r < n.length; r++)
          if (i = se(e, t, n[r]))
              return i;
      return 0
  }
  function se(e, t, n) {
      return n.func ? n.func(e, t) : ae(e[n.field], t[n.field]) * (n.order || 1)
  }
  function ae(e, t) {
      return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
  }
  function le(e) {
      return e.charAt(0).toUpperCase() + e.slice(1)
  }
  function ce(e, t) {
      var n = String(e);
      return "000".substr(0, t - n.length) + n
  }
  function ue(e) {
      return e % 1 == 0
  }
  function de(e, t, n) {
      if ("function" == typeof e && (e = [e]),
      e) {
          var r = void 0
            , i = void 0;
          for (r = 0; r < e.length; r++)
              i = e[r].apply(t, n) || i;
          return i
      }
  }
  function pe() {
      for (var e = [], t = 0; t < arguments.length; t++)
          e[t] = arguments[t];
      for (var n = 0; n < e.length; n++)
          if (void 0 !== e[n])
              return e[n]
  }
  function he(e, t) {
      var n, r, i, o, s, a = function() {
          var l = (new Date).valueOf() - o;
          l < t ? n = setTimeout(a, t - l) : (n = null,
          s = e.apply(i, r),
          i = r = null)
      };
      return function() {
          return i = this,
          r = arguments,
          o = (new Date).valueOf(),
          n || (n = setTimeout(a, t)),
          s
      }
  }
  function fe(e, t, n, r) {
      void 0 === n && (n = {});
      var i = {};
      for (var o in t) {
          var s = t[o];
          void 0 !== e[o] ? i[o] = s === Function ? "function" == typeof e[o] ? e[o] : null : s ? s(e[o]) : e[o] : void 0 !== n[o] ? i[o] = n[o] : s === String ? i[o] = "" : s && s !== Number && s !== Boolean && s !== Function ? i[o] = s(null) : i[o] = null
      }
      if (r)
          for (var o in e)
              void 0 === t[o] && (r[o] = e[o]);
      return i
  }
  function ge(e) {
      var t = Math.floor(N(e.start, e.end)) || 1
        , n = B(e.start);
      return {
          start: n,
          end: _(n, t)
      }
  }
  function ve(e, t) {
      void 0 === t && (t = K(0));
      var n = null
        , r = null;
      if (e.end) {
          r = B(e.end);
          var i = e.end.valueOf() - r.valueOf();
          i && i >= te(t) && (r = _(r, 1))
      }
      return e.start && (n = B(e.start),
      r && r <= n && (r = _(n, 1))),
      {
          start: n,
          end: r
      }
  }
  function me(e, t, n, r) {
      return "year" === r ? K(n.diffWholeYears(e, t), "year") : "month" === r ? K(n.diffWholeMonths(e, t), "month") : z(e, t)
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var ye = function(e, t) {
      return (ye = Object.setPrototypeOf || {
          __proto__: []
      }instanceof Array && function(e, t) {
          e.__proto__ = t
      }
      || function(e, t) {
          for (var n in t)
              t.hasOwnProperty(n) && (e[n] = t[n])
      }
      )(e, t)
  };
  function Ee(e, t) {
      function n() {
          this.constructor = e
      }
      ye(e, t),
      e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
      new n)
  }
  var Se = function() {
      return (Se = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n])
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
      }
      ).apply(this, arguments)
  };
  function be(e, t, n, r, i) {
      var o = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
          start: r.subtract(n.start, t),
          end: n.end
      }, r);
      return e.allDay && (o = o.map(B)),
      o
  }
  var De = Object.prototype.hasOwnProperty;
  function we(e, t) {
      var n, r, i, o, s, a, l = {};
      if (t)
          for (n = 0; n < t.length; n++) {
              for (r = t[n],
              i = [],
              o = e.length - 1; o >= 0; o--)
                  if ("object" == typeof (s = e[o][r]) && s)
                      i.unshift(s);
                  else if (void 0 !== s) {
                      l[r] = s;
                      break
                  }
              i.length && (l[r] = we(i))
          }
      for (n = e.length - 1; n >= 0; n--)
          for (r in a = e[n])
              r in l || (l[r] = a[r]);
      return l
  }
  function Te(e, t) {
      var n = {};
      for (var r in e)
          t(e[r], r) && (n[r] = e[r]);
      return n
  }
  function Ce(e, t) {
      var n = {};
      for (var r in e)
          n[r] = t(e[r], r);
      return n
  }
  function Re(e) {
      for (var t = {}, n = 0, r = e; n < r.length; n++) {
          t[r[n]] = !0
      }
      return t
  }
  function Ie(e) {
      var t = [];
      for (var n in e)
          t.push(e[n]);
      return t
  }
  function Me(e, t) {
      for (var n in e)
          if (De.call(e, n) && !(n in t))
              return !1;
      for (var n in t)
          if (De.call(t, n) && e[n] !== t[n])
              return !1;
      return !0
  }
  function Pe(e, t, n, r) {
      for (var i = {
          defs: {},
          instances: {}
      }, o = 0, s = e; o < s.length; o++) {
          var a = jt(s[o], t, n, r);
          a && ke(a, i)
      }
      return i
  }
  function ke(e, t) {
      return void 0 === t && (t = {
          defs: {},
          instances: {}
      }),
      t.defs[e.def.defId] = e.def,
      e.instance && (t.instances[e.instance.instanceId] = e.instance),
      t
  }
  function xe(e, t, n) {
      var r = n.dateEnv
        , i = e.defs
        , o = e.instances;
      for (var s in o = Te(o, (function(e) {
          return !i[e.defId].recurringDef
      }
      )),
      i) {
          var a = i[s];
          if (a.recurringDef) {
              var l = a.recurringDef.duration;
              l || (l = a.allDay ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration);
              for (var c = 0, u = be(a, l, t, n.dateEnv, n.pluginSystem.hooks.recurringTypes); c < u.length; c++) {
                  var d = u[c]
                    , p = Yt(s, {
                      start: d,
                      end: r.add(d, l)
                  });
                  o[p.instanceId] = p
              }
          }
      }
      return {
          defs: i,
          instances: o
      }
  }
  function He(e, t) {
      var n = e.instances[t];
      if (n) {
          var r = e.defs[n.defId]
            , i = ze(e, (function(e) {
              return t = r,
              n = e,
              Boolean(t.groupId && t.groupId === n.groupId);
              var t, n
          }
          ));
          return i.defs[r.defId] = r,
          i.instances[n.instanceId] = n,
          i
      }
      return {
          defs: {},
          instances: {}
      }
  }
  function _e(e, t) {
      var n;
      if (t) {
          n = [];
          for (var r = 0, i = e; r < i.length; r++) {
              var o = i[r]
                , s = t(o);
              s ? n.push(s) : null == s && n.push(o)
          }
      } else
          n = e;
      return n
  }
  function Oe() {
      return {
          defs: {},
          instances: {}
      }
  }
  function Ne(e, t) {
      return {
          defs: Se({}, e.defs, t.defs),
          instances: Se({}, e.instances, t.instances)
      }
  }
  function ze(e, t) {
      var n = Te(e.defs, t)
        , r = Te(e.instances, (function(e) {
          return n[e.defId]
      }
      ));
      return {
          defs: n,
          instances: r
      }
  }
  function Le(e, t) {
      var n = null
        , r = null;
      return e.start && (n = t.createMarker(e.start)),
      e.end && (r = t.createMarker(e.end)),
      n || r ? n && r && r < n ? null : {
          start: n,
          end: r
      } : null
  }
  function Ve(e, t) {
      var n, r, i = [], o = t.start;
      for (e.sort(Be),
      n = 0; n < e.length; n++)
          (r = e[n]).start > o && i.push({
              start: o,
              end: r.start
          }),
          r.end > o && (o = r.end);
      return o < t.end && i.push({
          start: o,
          end: t.end
      }),
      i
  }
  function Be(e, t) {
      return e.start.valueOf() - t.start.valueOf()
  }
  function Ae(e, t) {
      var n = e.start
        , r = e.end
        , i = null;
      return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
      null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
      (null === n || null === r || n < r) && (i = {
          start: n,
          end: r
      }),
      i
  }
  function Ue(e, t) {
      return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
  }
  function Fe(e, t) {
      return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
  }
  function Ge(e, t) {
      return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
  }
  function je(e, t) {
      return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
  }
  function We(e, t) {
      var n, r = e.length;
      if (r !== t.length)
          return !1;
      for (n = 0; n < r; n++)
          if (e[n] !== t[n])
              return !1;
      return !0
  }
  function Ye(e) {
      var t, n;
      return function() {
          return t && We(t, arguments) || (t = arguments,
          n = e.apply(this, arguments)),
          n
      }
  }
  function qe(e, t) {
      var n = null;
      return function() {
          var r = e.apply(this, arguments);
          return (null === n || n !== r && !t(n, r)) && (n = r),
          n
      }
  }
  var Ze = {
      week: 3,
      separator: 0,
      omitZeroMinute: 0,
      meridiem: 0,
      omitCommas: 0
  }
    , Xe = {
      timeZoneName: 7,
      era: 6,
      year: 5,
      month: 4,
      day: 2,
      weekday: 2,
      hour: 1,
      minute: 1,
      second: 1
  }
    , Ke = /\s*([ap])\.?m\.?/i
    , Je = /,/g
    , Qe = /\s+/g
    , $e = /\u200e/g
    , et = /UTC|GMT/
    , tt = function() {
      function e(e) {
          var t = {}
            , n = {}
            , r = 0;
          for (var i in e)
              i in Ze ? (n[i] = e[i],
              r = Math.max(Ze[i], r)) : (t[i] = e[i],
              i in Xe && (r = Math.max(Xe[i], r)));
          this.standardDateProps = t,
          this.extendedSettings = n,
          this.severity = r,
          this.buildFormattingFunc = Ye(nt)
      }
      return e.prototype.format = function(e, t) {
          return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
      }
      ,
      e.prototype.formatRange = function(e, t, n) {
          var r = this.standardDateProps
            , i = this.extendedSettings
            , o = function(e, t, n) {
              if (n.getMarkerYear(e) !== n.getMarkerYear(t))
                  return 5;
              if (n.getMarkerMonth(e) !== n.getMarkerMonth(t))
                  return 4;
              if (n.getMarkerDay(e) !== n.getMarkerDay(t))
                  return 2;
              if (q(e) !== q(t))
                  return 1;
              return 0
          }(e.marker, t.marker, n.calendarSystem);
          if (!o)
              return this.format(e, n);
          var s = o;
          !(s > 1) || "numeric" !== r.year && "2-digit" !== r.year || "numeric" !== r.month && "2-digit" !== r.month || "numeric" !== r.day && "2-digit" !== r.day || (s = 1);
          var a = this.format(e, n)
            , l = this.format(t, n);
          if (a === l)
              return a;
          var c = nt(function(e, t) {
              var n = {};
              for (var r in e)
                  (!(r in Xe) || Xe[r] <= t) && (n[r] = e[r]);
              return n
          }(r, s), i, n)
            , u = c(e)
            , d = c(t)
            , p = function(e, t, n, r) {
              var i = 0;
              for (; i < e.length; ) {
                  var o = e.indexOf(t, i);
                  if (-1 === o)
                      break;
                  var s = e.substr(0, o);
                  i = o + t.length;
                  for (var a = e.substr(i), l = 0; l < n.length; ) {
                      var c = n.indexOf(r, l);
                      if (-1 === c)
                          break;
                      var u = n.substr(0, c);
                      l = c + r.length;
                      var d = n.substr(l);
                      if (s === u && a === d)
                          return {
                              before: s,
                              after: a
                          }
                  }
              }
              return null
          }(a, u, l, d)
            , h = i.separator || "";
          return p ? p.before + u + h + d + p.after : a + h + l
      }
      ,
      e.prototype.getLargestUnit = function() {
          switch (this.severity) {
          case 7:
          case 6:
          case 5:
              return "year";
          case 4:
              return "month";
          case 3:
              return "week";
          default:
              return "day"
          }
      }
      ,
      e
  }();
  function nt(e, t, n) {
      var r = Object.keys(e).length;
      return 1 === r && "short" === e.timeZoneName ? function(e) {
          return st(e.timeZoneOffset)
      }
      : 0 === r && t.week ? function(e) {
          return function(e, t, n, r) {
              var i = [];
              "narrow" === r ? i.push(t) : "short" === r && i.push(t, " ");
              i.push(n.simpleNumberFormat.format(e)),
              n.options.isRtl && i.reverse();
              return i.join("")
          }(n.computeWeekNumber(e.marker), n.weekLabel, n.locale, t.week)
      }
      : function(e, t, n) {
          e = Se({}, e),
          t = Se({}, t),
          function(e, t) {
              e.timeZoneName && (e.hour || (e.hour = "2-digit"),
              e.minute || (e.minute = "2-digit"));
              "long" === e.timeZoneName && (e.timeZoneName = "short");
              t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
          }(e, t),
          e.timeZone = "UTC";
          var r, i = new Intl.DateTimeFormat(n.locale.codes,e);
          if (t.omitZeroMinute) {
              var o = Se({}, e);
              delete o.minute,
              r = new Intl.DateTimeFormat(n.locale.codes,o)
          }
          return function(o) {
              var s = o.marker;
              return function(e, t, n, r, i) {
                  e = e.replace($e, ""),
                  "short" === n.timeZoneName && (e = function(e, t) {
                      var n = !1;
                      e = e.replace(et, (function() {
                          return n = !0,
                          t
                      }
                      )),
                      n || (e += " " + t);
                      return e
                  }(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : st(t.timeZoneOffset)));
                  r.omitCommas && (e = e.replace(Je, "").trim());
                  r.omitZeroMinute && (e = e.replace(":00", ""));
                  !1 === r.meridiem ? e = e.replace(Ke, "").trim() : "narrow" === r.meridiem ? e = e.replace(Ke, (function(e, t) {
                      return t.toLocaleLowerCase()
                  }
                  )) : "short" === r.meridiem ? e = e.replace(Ke, (function(e, t) {
                      return t.toLocaleLowerCase() + "m"
                  }
                  )) : "lowercase" === r.meridiem && (e = e.replace(Ke, (function(e) {
                      return e.toLocaleLowerCase()
                  }
                  )));
                  return e = (e = e.replace(Qe, " ")).trim()
              }((r && !s.getUTCMinutes() ? r : i).format(s), o, e, t, n)
          }
      }(e, t, n)
  }
  var rt = function() {
      function e(e, t) {
          this.cmdStr = e,
          this.separator = t
      }
      return e.prototype.format = function(e, t) {
          return t.cmdFormatter(this.cmdStr, at(e, null, t, this.separator))
      }
      ,
      e.prototype.formatRange = function(e, t, n) {
          return n.cmdFormatter(this.cmdStr, at(e, t, n, this.separator))
      }
      ,
      e
  }()
    , it = function() {
      function e(e) {
          this.func = e
      }
      return e.prototype.format = function(e, t) {
          return this.func(at(e, null, t))
      }
      ,
      e.prototype.formatRange = function(e, t, n) {
          return this.func(at(e, t, n))
      }
      ,
      e
  }();
  function ot(e, t) {
      return "object" == typeof e && e ? ("string" == typeof t && (e = Se({
          separator: t
      }, e)),
      new tt(e)) : "string" == typeof e ? new rt(e,t) : "function" == typeof e ? new it(e) : void 0
  }
  function st(e, t) {
      void 0 === t && (t = !1);
      var n = e < 0 ? "-" : "+"
        , r = Math.abs(e)
        , i = Math.floor(r / 60)
        , o = Math.round(r % 60);
      return t ? n + ce(i, 2) + ":" + ce(o, 2) : "GMT" + n + i + (o ? ":" + ce(o, 2) : "")
  }
  function at(e, t, n, r) {
      var i = lt(e, n.calendarSystem);
      return {
          date: i,
          start: i,
          end: t ? lt(t, n.calendarSystem) : null,
          timeZone: n.timeZone,
          localeCodes: n.locale.codes,
          separator: r
      }
  }
  function lt(e, t) {
      var n = t.markerToArray(e.marker);
      return {
          marker: e.marker,
          timeZoneOffset: e.timeZoneOffset,
          array: n,
          year: n[0],
          month: n[1],
          day: n[2],
          hour: n[3],
          minute: n[4],
          second: n[5],
          millisecond: n[6]
      }
  }
  var ct = function() {
      function e(e, t) {
          this.calendar = e,
          this.internalEventSource = t
      }
      return e.prototype.remove = function() {
          this.calendar.dispatch({
              type: "REMOVE_EVENT_SOURCE",
              sourceId: this.internalEventSource.sourceId
          })
      }
      ,
      e.prototype.refetch = function() {
          this.calendar.dispatch({
              type: "FETCH_EVENT_SOURCES",
              sourceIds: [this.internalEventSource.sourceId]
          })
      }
      ,
      Object.defineProperty(e.prototype, "id", {
          get: function() {
              return this.internalEventSource.publicId
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "url", {
          get: function() {
              return this.internalEventSource.meta.url
          },
          enumerable: !0,
          configurable: !0
      }),
      e
  }()
    , ut = function() {
      function e(e, t, n) {
          this._calendar = e,
          this._def = t,
          this._instance = n || null
      }
      return e.prototype.setProp = function(e, t) {
          var n, r;
          if (e in Ft)
              ;
          else if (e in Ut)
              "function" == typeof Ut[e] && (t = Ut[e](t)),
              this.mutate({
                  standardProps: (n = {},
                  n[e] = t,
                  n)
              });
          else if (e in Nt) {
              var i = void 0;
              "function" == typeof Nt[e] && (t = Nt[e](t)),
              "color" === e ? i = {
                  backgroundColor: t,
                  borderColor: t
              } : "editable" === e ? i = {
                  startEditable: t,
                  durationEditable: t
              } : ((r = {})[e] = t,
              i = r),
              this.mutate({
                  standardProps: {
                      ui: i
                  }
              })
          }
      }
      ,
      e.prototype.setExtendedProp = function(e, t) {
          var n;
          this.mutate({
              extendedProps: (n = {},
              n[e] = t,
              n)
          })
      }
      ,
      e.prototype.setStart = function(e, t) {
          void 0 === t && (t = {});
          var n = this._calendar.dateEnv
            , r = n.createMarker(e);
          if (r && this._instance) {
              var i = me(this._instance.range.start, r, n, t.granularity);
              t.maintainDuration ? this.mutate({
                  datesDelta: i
              }) : this.mutate({
                  startDelta: i
              })
          }
      }
      ,
      e.prototype.setEnd = function(e, t) {
          void 0 === t && (t = {});
          var n, r = this._calendar.dateEnv;
          if ((null == e || (n = r.createMarker(e))) && this._instance)
              if (n) {
                  var i = me(this._instance.range.end, n, r, t.granularity);
                  this.mutate({
                      endDelta: i
                  })
              } else
                  this.mutate({
                      standardProps: {
                          hasEnd: !1
                      }
                  })
      }
      ,
      e.prototype.setDates = function(e, t, n) {
          void 0 === n && (n = {});
          var r, i = this._calendar.dateEnv, o = {
              allDay: n.allDay
          }, s = i.createMarker(e);
          if (s && (null == t || (r = i.createMarker(t))) && this._instance) {
              var a = this._instance.range;
              !0 === n.allDay && (a = ge(a));
              var l = me(a.start, s, i, n.granularity);
              if (r) {
                  var c = me(a.end, r, i, n.granularity);
                  $(l, c) ? this.mutate({
                      datesDelta: l,
                      standardProps: o
                  }) : this.mutate({
                      startDelta: l,
                      endDelta: c,
                      standardProps: o
                  })
              } else
                  o.hasEnd = !1,
                  this.mutate({
                      datesDelta: l,
                      standardProps: o
                  })
          }
      }
      ,
      e.prototype.moveStart = function(e) {
          var t = K(e);
          t && this.mutate({
              startDelta: t
          })
      }
      ,
      e.prototype.moveEnd = function(e) {
          var t = K(e);
          t && this.mutate({
              endDelta: t
          })
      }
      ,
      e.prototype.moveDates = function(e) {
          var t = K(e);
          t && this.mutate({
              datesDelta: t
          })
      }
      ,
      e.prototype.setAllDay = function(e, t) {
          void 0 === t && (t = {});
          var n = {
              allDay: e
          }
            , r = t.maintainDuration;
          null == r && (r = this._calendar.opt("allDayMaintainDuration")),
          this._def.allDay !== e && (n.hasEnd = r),
          this.mutate({
              standardProps: n
          })
      }
      ,
      e.prototype.formatRange = function(e) {
          var t = this._calendar.dateEnv
            , n = this._instance
            , r = ot(e, this._calendar.opt("defaultRangeSeparator"));
          return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
              forcedStartTzo: n.forcedStartTzo,
              forcedEndTzo: n.forcedEndTzo
          }) : t.format(n.range.start, r, {
              forcedTzo: n.forcedStartTzo
          })
      }
      ,
      e.prototype.mutate = function(e) {
          var t = this._def
            , n = this._instance;
          if (n) {
              this._calendar.dispatch({
                  type: "MUTATE_EVENTS",
                  instanceId: n.instanceId,
                  mutation: e,
                  fromApi: !0
              });
              var r = this._calendar.state.eventStore;
              this._def = r.defs[t.defId],
              this._instance = r.instances[n.instanceId]
          }
      }
      ,
      e.prototype.remove = function() {
          this._calendar.dispatch({
              type: "REMOVE_EVENT_DEF",
              defId: this._def.defId
          })
      }
      ,
      Object.defineProperty(e.prototype, "source", {
          get: function() {
              var e = this._def.sourceId;
              return e ? new ct(this._calendar,this._calendar.state.eventSources[e]) : null
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "start", {
          get: function() {
              return this._instance ? this._calendar.dateEnv.toDate(this._instance.range.start) : null
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "end", {
          get: function() {
              return this._instance && this._def.hasEnd ? this._calendar.dateEnv.toDate(this._instance.range.end) : null
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "id", {
          get: function() {
              return this._def.publicId
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "groupId", {
          get: function() {
              return this._def.groupId
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "allDay", {
          get: function() {
              return this._def.allDay
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "title", {
          get: function() {
              return this._def.title
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "url", {
          get: function() {
              return this._def.url
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "rendering", {
          get: function() {
              return this._def.rendering
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "startEditable", {
          get: function() {
              return this._def.ui.startEditable
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "durationEditable", {
          get: function() {
              return this._def.ui.durationEditable
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "constraint", {
          get: function() {
              return this._def.ui.constraints[0] || null
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "overlap", {
          get: function() {
              return this._def.ui.overlap
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "allow", {
          get: function() {
              return this._def.ui.allows[0] || null
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "backgroundColor", {
          get: function() {
              return this._def.ui.backgroundColor
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "borderColor", {
          get: function() {
              return this._def.ui.borderColor
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "textColor", {
          get: function() {
              return this._def.ui.textColor
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "classNames", {
          get: function() {
              return this._def.ui.classNames
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(e.prototype, "extendedProps", {
          get: function() {
              return this._def.extendedProps
          },
          enumerable: !0,
          configurable: !0
      }),
      e
  }();
  function dt(e, t, n, r) {
      var i = {}
        , o = {}
        , s = {}
        , a = []
        , l = []
        , c = gt(e.defs, t);
      for (var u in e.defs) {
          "inverse-background" === (S = e.defs[u]).rendering && (S.groupId ? (i[S.groupId] = [],
          s[S.groupId] || (s[S.groupId] = S)) : o[u] = [])
      }
      for (var d in e.instances) {
          var p = e.instances[d]
            , h = c[(S = e.defs[p.defId]).defId]
            , f = p.range
            , g = !S.allDay && r ? ve(f, r) : f
            , v = Ae(g, n);
          v && ("inverse-background" === S.rendering ? S.groupId ? i[S.groupId].push(v) : o[p.defId].push(v) : ("background" === S.rendering ? a : l).push({
              def: S,
              ui: h,
              instance: p,
              range: v,
              isStart: g.start && g.start.valueOf() === v.start.valueOf(),
              isEnd: g.end && g.end.valueOf() === v.end.valueOf()
          }))
      }
      for (var m in i)
          for (var y = 0, E = Ve(i[m], n); y < E.length; y++) {
              var S, b = E[y];
              h = c[(S = s[m]).defId];
              a.push({
                  def: S,
                  ui: h,
                  instance: null,
                  range: b,
                  isStart: !1,
                  isEnd: !1
              })
          }
      for (var u in o)
          for (var D = 0, w = Ve(o[u], n); D < w.length; D++) {
              b = w[D];
              a.push({
                  def: e.defs[u],
                  ui: c[u],
                  instance: null,
                  range: b,
                  isStart: !1,
                  isEnd: !1
              })
          }
      return {
          bg: a,
          fg: l
      }
  }
  function pt(e, t, n) {
      var r = e.calendar
        , i = e.view;
      r.hasPublicHandlers("eventRender") && (t = t.filter((function(e) {
          var t = r.publiclyTrigger("eventRender", [{
              event: new ut(r,e.eventRange.def,e.eventRange.instance),
              isMirror: n,
              isStart: e.isStart,
              isEnd: e.isEnd,
              el: e.el,
              view: i
          }]);
          return !1 !== t && (t && !0 !== t && (e.el = t),
          !0)
      }
      )));
      for (var o = 0, s = t; o < s.length; o++) {
          var a = s[o];
          ht(a.el, a)
      }
      return t
  }
  function ht(e, t) {
      e.fcSeg = t
  }
  function ft(e) {
      return e.fcSeg || null
  }
  function gt(e, t) {
      return Ce(e, (function(e) {
          return vt(e, t)
      }
      ))
  }
  function vt(e, t) {
      var n = [];
      return t[""] && n.push(t[""]),
      t[e.defId] && n.push(t[e.defId]),
      n.push(e.ui),
      Bt(n)
  }
  function mt(e, t, n) {
      var r = e.calendar
        , i = e.view;
      if (r.hasPublicHandlers("eventPositioned"))
          for (var o = 0, s = t; o < s.length; o++) {
              var a = s[o];
              r.publiclyTriggerAfterSizing("eventPositioned", [{
                  event: new ut(r,a.eventRange.def,a.eventRange.instance),
                  isMirror: n,
                  isStart: a.isStart,
                  isEnd: a.isEnd,
                  el: a.el,
                  view: i
              }])
          }
      r.state.eventSourceLoadingLevel || (r.afterSizingTriggers._eventsPositioned = [null])
  }
  function yt(e, t, n) {
      for (var r = e.calendar, i = e.view, o = 0, s = t; o < s.length; o++) {
          var a = s[o];
          r.trigger("eventElRemove", a.el)
      }
      if (r.hasPublicHandlers("eventDestroy"))
          for (var l = 0, c = t; l < c.length; l++) {
              a = c[l];
              r.publiclyTrigger("eventDestroy", [{
                  event: new ut(r,a.eventRange.def,a.eventRange.instance),
                  isMirror: n,
                  el: a.el,
                  view: i
              }])
          }
  }
  function Et(e, t, n, r) {
      var i = gt(e.defs, t)
        , o = {
          defs: {},
          instances: {}
      };
      for (var s in e.defs) {
          var a = e.defs[s];
          o.defs[s] = St(a, i[s], n, r.pluginSystem.hooks.eventDefMutationAppliers, r)
      }
      for (var l in e.instances) {
          var c = e.instances[l];
          a = o.defs[c.defId];
          o.instances[l] = bt(c, a, i[c.defId], n, r)
      }
      return o
  }
  function St(e, t, n, r, i) {
      var o = n.standardProps || {};
      null == o.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (o.hasEnd = !0);
      var s = Se({}, e, o, {
          ui: Se({}, e.ui, o.ui)
      });
      n.extendedProps && (s.extendedProps = Se({}, s.extendedProps, n.extendedProps));
      for (var a = 0, l = r; a < l.length; a++) {
          (0,
          l[a])(s, n, i)
      }
      return !s.hasEnd && i.opt("forceEventDuration") && (s.hasEnd = !0),
      s
  }
  function bt(e, t, n, r, i) {
      var o = i.dateEnv
        , s = r.standardProps && !0 === r.standardProps.allDay
        , a = r.standardProps && !1 === r.standardProps.hasEnd
        , l = Se({}, e);
      return s && (l.range = ge(l.range)),
      r.datesDelta && n.startEditable && (l.range = {
          start: o.add(l.range.start, r.datesDelta),
          end: o.add(l.range.end, r.datesDelta)
      }),
      r.startDelta && n.durationEditable && (l.range = {
          start: o.add(l.range.start, r.startDelta),
          end: l.range.end
      }),
      r.endDelta && n.durationEditable && (l.range = {
          start: l.range.start,
          end: o.add(l.range.end, r.endDelta)
      }),
      a && (l.range = {
          start: l.range.start,
          end: i.getDefaultEventEnd(t.allDay, l.range.start)
      }),
      t.allDay && (l.range = {
          start: B(l.range.start),
          end: B(l.range.end)
      }),
      l.range.end < l.range.start && (l.range.end = i.getDefaultEventEnd(t.allDay, l.range.start)),
      l
  }
  function Dt(e, t, n, r, i) {
      switch (t.type) {
      case "RECEIVE_EVENTS":
          return function(e, t, n, r, i, o) {
              if (t && n === t.latestFetchId) {
                  var s = Pe(function(e, t, n) {
                      var r = n.opt("eventDataTransform")
                        , i = t ? t.eventDataTransform : null;
                      return i && (e = _e(e, i)),
                      r && (e = _e(e, r)),
                      e
                  }(i, t, o), t.sourceId, o);
                  return r && (s = xe(s, r, o)),
                  Ne(wt(e, t.sourceId), s)
              }
              return e
          }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
      case "ADD_EVENTS":
          return function(e, t, n, r) {
              n && (t = xe(t, n, r));
              return Ne(e, t)
          }(e, t.eventStore, r ? r.activeRange : null, i);
      case "MERGE_EVENTS":
          return Ne(e, t.eventStore);
      case "PREV":
      case "NEXT":
      case "SET_DATE":
      case "SET_VIEW_TYPE":
          return r ? xe(e, r.activeRange, i) : e;
      case "CHANGE_TIMEZONE":
          return function(e, t, n) {
              var r = e.defs
                , i = Ce(e.instances, (function(e) {
                  var i = r[e.defId];
                  return i.allDay || i.recurringDef ? e : Se({}, e, {
                      range: {
                          start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                          end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                      },
                      forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                      forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                  })
              }
              ));
              return {
                  defs: r,
                  instances: i
              }
          }(e, t.oldDateEnv, i.dateEnv);
      case "MUTATE_EVENTS":
          return function(e, t, n, r, i) {
              var o = He(e, t)
                , s = r ? {
                  "": {
                      startEditable: !0,
                      durationEditable: !0,
                      constraints: [],
                      overlap: null,
                      allows: [],
                      backgroundColor: "",
                      borderColor: "",
                      textColor: "",
                      classNames: []
                  }
              } : i.eventUiBases;
              return o = Et(o, s, n, i),
              Ne(e, o)
          }(e, t.instanceId, t.mutation, t.fromApi, i);
      case "REMOVE_EVENT_INSTANCES":
          return Tt(e, t.instances);
      case "REMOVE_EVENT_DEF":
          return ze(e, (function(e) {
              return e.defId !== t.defId
          }
          ));
      case "REMOVE_EVENT_SOURCE":
          return wt(e, t.sourceId);
      case "REMOVE_ALL_EVENT_SOURCES":
          return ze(e, (function(e) {
              return !e.sourceId
          }
          ));
      case "REMOVE_ALL_EVENTS":
          return {
              defs: {},
              instances: {}
          };
      case "RESET_EVENTS":
          return {
              defs: e.defs,
              instances: e.instances
          };
      default:
          return e
      }
  }
  function wt(e, t) {
      return ze(e, (function(e) {
          return e.sourceId !== t
      }
      ))
  }
  function Tt(e, t) {
      return {
          defs: e.defs,
          instances: Te(e.instances, (function(e) {
              return !t[e.instanceId]
          }
          ))
      }
  }
  function Ct(e, t) {
      return Rt({
          eventDrag: e
      }, t)
  }
  function Rt(e, t) {
      var n = t.view
        , r = Se({
          businessHours: n ? n.props.businessHours : {
              defs: {},
              instances: {}
          },
          dateSelection: "",
          eventStore: t.state.eventStore,
          eventUiBases: t.eventUiBases,
          eventSelection: "",
          eventDrag: null,
          eventResize: null
      }, e);
      return (t.pluginSystem.hooks.isPropsValid || It)(r, t)
  }
  function It(e, t, n, r) {
      return void 0 === n && (n = {}),
      !(e.eventDrag && !function(e, t, n, r) {
          var i = e.eventDrag
            , o = i.mutatedEvents
            , s = o.defs
            , a = o.instances
            , l = gt(s, i.isEvent ? e.eventUiBases : {
              "": t.selectionConfig
          });
          r && (l = Ce(l, r));
          var c = Tt(e.eventStore, i.affectedEvents.instances)
            , u = c.defs
            , d = c.instances
            , p = gt(u, e.eventUiBases);
          for (var h in a) {
              var f = a[h]
                , g = f.range
                , v = l[f.defId]
                , m = s[f.defId];
              if (!Mt(v.constraints, g, c, e.businessHours, t))
                  return !1;
              var y = t.opt("eventOverlap");
              for (var E in "function" != typeof y && (y = null),
              d) {
                  var S = d[E];
                  if (Fe(g, S.range)) {
                      if (!1 === p[S.defId].overlap && i.isEvent)
                          return !1;
                      if (!1 === v.overlap)
                          return !1;
                      if (y && !y(new ut(t,u[S.defId],S), new ut(t,m,f)))
                          return !1
                  }
              }
              for (var b = t.state.eventStore, D = 0, w = v.allows; D < w.length; D++) {
                  var T = w[D]
                    , C = Se({}, n, {
                      range: f.range,
                      allDay: m.allDay
                  })
                    , R = b.defs[m.defId]
                    , I = b.instances[h]
                    , M = void 0;
                  if (M = R ? new ut(t,R,I) : new ut(t,m),
                  !T(t.buildDateSpanApi(C), M))
                      return !1
              }
          }
          return !0
      }(e, t, n, r)) && !(e.dateSelection && !function(e, t, n, r) {
          var i = e.eventStore
            , o = i.defs
            , s = i.instances
            , a = e.dateSelection
            , l = a.range
            , c = t.selectionConfig;
          r && (c = r(c));
          if (!Mt(c.constraints, l, i, e.businessHours, t))
              return !1;
          var u = t.opt("selectOverlap");
          "function" != typeof u && (u = null);
          for (var d in s) {
              var p = s[d];
              if (Fe(l, p.range)) {
                  if (!1 === c.overlap)
                      return !1;
                  if (u && !u(new ut(t,o[p.defId],p)))
                      return !1
              }
          }
          for (var h = 0, f = c.allows; h < f.length; h++) {
              var g = f[h]
                , v = Se({}, n, a);
              if (!g(t.buildDateSpanApi(v), null))
                  return !1
          }
          return !0
      }(e, t, n, r))
  }
  function Mt(e, t, n, r, i) {
      for (var o = 0, s = e; o < s.length; o++) {
          if (!xt(Pt(s[o], t, n, r, i), t))
              return !1
      }
      return !0
  }
  function Pt(e, t, n, r, i) {
      return "businessHours" === e ? kt(xe(r, t, i)) : "string" == typeof e ? kt(ze(n, (function(t) {
          return t.groupId === e
      }
      ))) : "object" == typeof e && e ? kt(xe(e, t, i)) : []
  }
  function kt(e) {
      var t = e.instances
        , n = [];
      for (var r in t)
          n.push(t[r].range);
      return n
  }
  function xt(e, t) {
      for (var n = 0, r = e; n < r.length; n++) {
          if (Ge(r[n], t))
              return !0
      }
      return !1
  }
  function Ht(e) {
      return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
  }
  function _t(e) {
      var t = [];
      for (var n in e) {
          var r = e[n];
          null != r && "" !== r && t.push(n + ":" + r)
      }
      return t.join(";")
  }
  function Ot(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
  }
  var Nt = {
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: null,
      overlap: null,
      allow: null,
      className: Ot,
      classNames: Ot,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String
  };
  function zt(e, t, n) {
      var r = fe(e, Nt, {}, n)
        , i = function(e, t) {
          return Array.isArray(e) ? Pe(e, "", t, !0) : "object" == typeof e && e ? Pe([e], "", t, !0) : null != e ? String(e) : null
      }(r.constraint, t);
      return {
          startEditable: null != r.startEditable ? r.startEditable : r.editable,
          durationEditable: null != r.durationEditable ? r.durationEditable : r.editable,
          constraints: null != i ? [i] : [],
          overlap: r.overlap,
          allows: null != r.allow ? [r.allow] : [],
          backgroundColor: r.backgroundColor || r.color,
          borderColor: r.borderColor || r.color,
          textColor: r.textColor,
          classNames: r.classNames.concat(r.className)
      }
  }
  function Lt(e, t, n, r) {
      var i = {}
        , o = {};
      for (var s in Nt) {
          var a = e + le(s);
          i[s] = t[a],
          o[a] = !0
      }
      if ("event" === e && (i.editable = t.editable),
      r)
          for (var s in t)
              o[s] || (r[s] = t[s]);
      return zt(i, n)
  }
  var Vt = {
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: "",
      borderColor: "",
      textColor: "",
      classNames: []
  };
  function Bt(e) {
      return e.reduce(At, Vt)
  }
  function At(e, t) {
      return {
          startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
          durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
          constraints: e.constraints.concat(t.constraints),
          overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
          allows: e.allows.concat(t.allows),
          backgroundColor: t.backgroundColor || e.backgroundColor,
          borderColor: t.borderColor || e.borderColor,
          textColor: t.textColor || e.textColor,
          classNames: e.classNames.concat(t.classNames)
      }
  }
  var Ut = {
      id: String,
      groupId: String,
      title: String,
      url: String,
      rendering: String,
      extendedProps: null
  }
    , Ft = {
      start: null,
      date: null,
      end: null,
      allDay: null
  }
    , Gt = 0;
  function jt(e, t, n, r) {
      var i = function(e, t) {
          var n = null;
          if (e) {
              n = t.state.eventSources[e].allDayDefault
          }
          null == n && (n = t.opt("allDayDefault"));
          return n
      }(t, n)
        , o = {}
        , s = function(e, t, n, r, i) {
          for (var o = 0; o < r.length; o++) {
              var s = {}
                , a = r[o].parse(e, s, n);
              if (a) {
                  var l = s.allDay;
                  return delete s.allDay,
                  null == l && null == (l = t) && null == (l = a.allDayGuess) && (l = !1),
                  Se(i, s),
                  {
                      allDay: l,
                      duration: a.duration,
                      typeData: a.typeData,
                      typeId: o
                  }
              }
          }
          return null
      }(e, i, n.dateEnv, n.pluginSystem.hooks.recurringTypes, o);
      if (s)
          return (a = Wt(o, t, s.allDay, Boolean(s.duration), n)).recurringDef = {
              typeId: s.typeId,
              typeData: s.typeData,
              duration: s.duration
          },
          {
              def: a,
              instance: null
          };
      var a, l = {}, c = function(e, t, n, r, i) {
          var o, s, a = function(e, t) {
              var n = fe(e, Ft, {}, t);
              return n.start = null !== n.start ? n.start : n.date,
              delete n.date,
              n
          }(e, r), l = a.allDay, c = null, u = !1, d = null;
          if (o = n.dateEnv.createMarkerMeta(a.start))
              c = o.marker;
          else if (!i)
              return null;
          null != a.end && (s = n.dateEnv.createMarkerMeta(a.end));
          null == l && (l = null != t ? t : (!o || o.isTimeUnspecified) && (!s || s.isTimeUnspecified));
          l && c && (c = B(c));
          s && (d = s.marker,
          l && (d = B(d)),
          c && d <= c && (d = null));
          d ? u = !0 : i || (u = n.opt("forceEventDuration") || !1,
          d = n.dateEnv.add(c, l ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration));
          return {
              allDay: l,
              hasEnd: u,
              range: {
                  start: c,
                  end: d
              },
              forcedStartTzo: o ? o.forcedTzo : null,
              forcedEndTzo: s ? s.forcedTzo : null
          }
      }(e, i, n, l, r);
      return c ? {
          def: a = Wt(l, t, c.allDay, c.hasEnd, n),
          instance: Yt(a.defId, c.range, c.forcedStartTzo, c.forcedEndTzo)
      } : null
  }
  function Wt(e, t, n, r, i) {
      var o = {}
        , s = function(e, t, n) {
          var r = {}
            , i = fe(e, Ut, {}, r)
            , o = zt(r, t, n);
          return i.publicId = i.id,
          delete i.id,
          i.ui = o,
          i
      }(e, i, o);
      s.defId = String(Gt++),
      s.sourceId = t,
      s.allDay = n,
      s.hasEnd = r;
      for (var a = 0, l = i.pluginSystem.hooks.eventDefParsers; a < l.length; a++) {
          var c = {};
          (0,
          l[a])(s, o, c),
          o = c
      }
      return s.extendedProps = Se(o, s.extendedProps || {}),
      Object.freeze(s.ui.classNames),
      Object.freeze(s.extendedProps),
      s
  }
  function Yt(e, t, n, r) {
      return {
          instanceId: String(Gt++),
          defId: e,
          range: t,
          forcedStartTzo: null == n ? null : n,
          forcedEndTzo: null == r ? null : r
      }
  }
  var qt = {
      startTime: "09:00",
      endTime: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
      rendering: "inverse-background",
      classNames: "fc-nonbusiness",
      groupId: "_businessHours"
  };
  function Zt(e, t) {
      return Pe(function(e) {
          var t;
          t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((function(e) {
              return e.daysOfWeek
          }
          )) : "object" == typeof e && e ? [e] : [];
          return t = t.map((function(e) {
              return Se({}, qt, e)
          }
          ))
      }(e), "", t)
  }
  function Xt(e, t, n) {
      void 0 === n && (n = []);
      var r, i, o = [];
      function s() {
          if (i) {
              for (var e = 0, n = o; e < n.length; e++) {
                  n[e].unrender()
              }
              t && t.apply(r, i),
              i = null
          }
      }
      function a() {
          i && We(i, arguments) || (s(),
          r = this,
          i = arguments,
          e.apply(this, arguments))
      }
      a.dependents = o,
      a.unrender = s;
      for (var l = 0, c = n; l < c.length; l++) {
          c[l].dependents.push(a)
      }
      return a
  }
  var Kt = {
      defs: {},
      instances: {}
  }
    , Jt = function() {
      function e() {
          this.getKeysForEventDefs = Ye(this._getKeysForEventDefs),
          this.splitDateSelection = Ye(this._splitDateSpan),
          this.splitEventStore = Ye(this._splitEventStore),
          this.splitIndividualUi = Ye(this._splitIndividualUi),
          this.splitEventDrag = Ye(this._splitInteraction),
          this.splitEventResize = Ye(this._splitInteraction),
          this.eventUiBuilders = {}
      }
      return e.prototype.splitProps = function(e) {
          var t = this
            , n = this.getKeyInfo(e)
            , r = this.getKeysForEventDefs(e.eventStore)
            , i = this.splitDateSelection(e.dateSelection)
            , o = this.splitIndividualUi(e.eventUiBases, r)
            , s = this.splitEventStore(e.eventStore, r)
            , a = this.splitEventDrag(e.eventDrag)
            , l = this.splitEventResize(e.eventResize)
            , c = {};
          for (var u in this.eventUiBuilders = Ce(n, (function(e, n) {
              return t.eventUiBuilders[n] || Ye(Qt)
          }
          )),
          n) {
              var d = n[u]
                , p = s[u] || Kt
                , h = this.eventUiBuilders[u];
              c[u] = {
                  businessHours: d.businessHours || e.businessHours,
                  dateSelection: i[u] || null,
                  eventStore: p,
                  eventUiBases: h(e.eventUiBases[""], d.ui, o[u]),
                  eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                  eventDrag: a[u] || null,
                  eventResize: l[u] || null
              }
          }
          return c
      }
      ,
      e.prototype._splitDateSpan = function(e) {
          var t = {};
          if (e)
              for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                  t[r[n]] = e
              }
          return t
      }
      ,
      e.prototype._getKeysForEventDefs = function(e) {
          var t = this;
          return Ce(e.defs, (function(e) {
              return t.getKeysForEventDef(e)
          }
          ))
      }
      ,
      e.prototype._splitEventStore = function(e, t) {
          var n = e.defs
            , r = e.instances
            , i = {};
          for (var o in n)
              for (var s = 0, a = t[o]; s < a.length; s++) {
                  i[p = a[s]] || (i[p] = {
                      defs: {},
                      instances: {}
                  }),
                  i[p].defs[o] = n[o]
              }
          for (var l in r)
              for (var c = r[l], u = 0, d = t[c.defId]; u < d.length; u++) {
                  var p;
                  i[p = d[u]] && (i[p].instances[l] = c)
              }
          return i
      }
      ,
      e.prototype._splitIndividualUi = function(e, t) {
          var n = {};
          for (var r in e)
              if (r)
                  for (var i = 0, o = t[r]; i < o.length; i++) {
                      var s = o[i];
                      n[s] || (n[s] = {}),
                      n[s][r] = e[r]
                  }
          return n
      }
      ,
      e.prototype._splitInteraction = function(e) {
          var t = {};
          if (e) {
              var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents))
                , r = this._getKeysForEventDefs(e.mutatedEvents)
                , i = this._splitEventStore(e.mutatedEvents, r)
                , o = function(r) {
                  t[r] || (t[r] = {
                      affectedEvents: n[r] || Kt,
                      mutatedEvents: i[r] || Kt,
                      isEvent: e.isEvent,
                      origSeg: e.origSeg
                  })
              };
              for (var s in n)
                  o(s);
              for (var s in i)
                  o(s)
          }
          return t
      }
      ,
      e
  }();
  function Qt(e, t, n) {
      var r = [];
      e && r.push(e),
      t && r.push(t);
      var i = {
          "": Bt(r)
      };
      return n && Se(i, n),
      i
  }
  function $t(e, t, n, r, i) {
      var o, s, a, l;
      return n instanceof Date ? o = n : (o = n.date,
      s = n.type,
      a = n.forceOff),
      l = {
          date: t.formatIso(o, {
              omitTime: !0
          }),
          type: s || "day"
      },
      "string" == typeof r && (i = r,
      r = null),
      r = r ? " " + function(e) {
          var t = [];
          for (var n in e) {
              var r = e[n];
              null != r && t.push(n + '="' + Ht(r) + '"')
          }
          return t.join(" ")
      }(r) : "",
      i = i || "",
      !a && e.navLinks ? "<a" + r + ' data-goto="' + Ht(JSON.stringify(l)) + '">' + i + "</a>" : "<span" + r + ">" + i + "</span>"
  }
  function en(e, t, n, r) {
      var i, o, s = n.calendar, a = n.options, l = n.theme, c = n.dateEnv, u = [];
      return je(t.activeRange, e) ? (u.push("fc-" + H[e.getUTCDay()]),
      a.monthMode && c.getMonth(e) !== c.getMonth(t.currentRange.start) && u.push("fc-other-month"),
      o = _(i = B(s.getNow()), 1),
      e < i ? u.push("fc-past") : e >= o ? u.push("fc-future") : (u.push("fc-today"),
      !0 !== r && u.push(l.getClass("today")))) : u.push("fc-disabled-day"),
      u
  }
  function tn(e, t, n) {
      var r = !1
        , i = function() {
          r || (r = !0,
          t.apply(this, arguments))
      }
        , o = function() {
          r || (r = !0,
          n && n.apply(this, arguments))
      }
        , s = e(i, o);
      s && "function" == typeof s.then && s.then(i, o)
  }
  var nn = function() {
      function e() {}
      return e.mixInto = function(e) {
          this.mixIntoObj(e.prototype)
      }
      ,
      e.mixIntoObj = function(e) {
          var t = this;
          Object.getOwnPropertyNames(this.prototype).forEach((function(n) {
              e[n] || (e[n] = t.prototype[n])
          }
          ))
      }
      ,
      e.mixOver = function(e) {
          var t = this;
          Object.getOwnPropertyNames(this.prototype).forEach((function(n) {
              e.prototype[n] = t.prototype[n]
          }
          ))
      }
      ,
      e
  }()
    , rn = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return Ee(t, e),
      t.prototype.on = function(e, t) {
          return on(this._handlers || (this._handlers = {}), e, t),
          this
      }
      ,
      t.prototype.one = function(e, t) {
          return on(this._oneHandlers || (this._oneHandlers = {}), e, t),
          this
      }
      ,
      t.prototype.off = function(e, t) {
          return this._handlers && sn(this._handlers, e, t),
          this._oneHandlers && sn(this._oneHandlers, e, t),
          this
      }
      ,
      t.prototype.trigger = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
          return this.triggerWith(e, this, t),
          this
      }
      ,
      t.prototype.triggerWith = function(e, t, n) {
          return this._handlers && de(this._handlers[e], t, n),
          this._oneHandlers && (de(this._oneHandlers[e], t, n),
          delete this._oneHandlers[e]),
          this
      }
      ,
      t.prototype.hasHandlers = function(e) {
          return this._handlers && this._handlers[e] && this._handlers[e].length || this._oneHandlers && this._oneHandlers[e] && this._oneHandlers[e].length
      }
      ,
      t
  }(nn);
  function on(e, t, n) {
      (e[t] || (e[t] = [])).push(n)
  }
  function sn(e, t, n) {
      n ? e[t] && (e[t] = e[t].filter((function(e) {
          return e !== n
      }
      ))) : delete e[t]
  }
  var an = function() {
      function e(e, t, n, r) {
          this.originEl = e,
          this.els = t,
          this.isHorizontal = n,
          this.isVertical = r
      }
      return e.prototype.build = function() {
          var e = this.originEl
            , t = this.originClientRect = e.getBoundingClientRect();
          this.isHorizontal && this.buildElHorizontals(t.left),
          this.isVertical && this.buildElVerticals(t.top)
      }
      ,
      e.prototype.buildElHorizontals = function(e) {
          for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
              var o = i[r].getBoundingClientRect();
              t.push(o.left - e),
              n.push(o.right - e)
          }
          this.lefts = t,
          this.rights = n
      }
      ,
      e.prototype.buildElVerticals = function(e) {
          for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
              var o = i[r].getBoundingClientRect();
              t.push(o.top - e),
              n.push(o.bottom - e)
          }
          this.tops = t,
          this.bottoms = n
      }
      ,
      e.prototype.leftToIndex = function(e) {
          var t, n = this.lefts, r = this.rights, i = n.length;
          for (t = 0; t < i; t++)
              if (e >= n[t] && e < r[t])
                  return t
      }
      ,
      e.prototype.topToIndex = function(e) {
          var t, n = this.tops, r = this.bottoms, i = n.length;
          for (t = 0; t < i; t++)
              if (e >= n[t] && e < r[t])
                  return t
      }
      ,
      e.prototype.getWidth = function(e) {
          return this.rights[e] - this.lefts[e]
      }
      ,
      e.prototype.getHeight = function(e) {
          return this.bottoms[e] - this.tops[e]
      }
      ,
      e
  }()
    , ln = function() {
      function e() {}
      return e.prototype.getMaxScrollTop = function() {
          return this.getScrollHeight() - this.getClientHeight()
      }
      ,
      e.prototype.getMaxScrollLeft = function() {
          return this.getScrollWidth() - this.getClientWidth()
      }
      ,
      e.prototype.canScrollVertically = function() {
          return this.getMaxScrollTop() > 0
      }
      ,
      e.prototype.canScrollHorizontally = function() {
          return this.getMaxScrollLeft() > 0
      }
      ,
      e.prototype.canScrollUp = function() {
          return this.getScrollTop() > 0
      }
      ,
      e.prototype.canScrollDown = function() {
          return this.getScrollTop() < this.getMaxScrollTop()
      }
      ,
      e.prototype.canScrollLeft = function() {
          return this.getScrollLeft() > 0
      }
      ,
      e.prototype.canScrollRight = function() {
          return this.getScrollLeft() < this.getMaxScrollLeft()
      }
      ,
      e
  }()
    , cn = function(e) {
      function t(t) {
          var n = e.call(this) || this;
          return n.el = t,
          n
      }
      return Ee(t, e),
      t.prototype.getScrollTop = function() {
          return this.el.scrollTop
      }
      ,
      t.prototype.getScrollLeft = function() {
          return this.el.scrollLeft
      }
      ,
      t.prototype.setScrollTop = function(e) {
          this.el.scrollTop = e
      }
      ,
      t.prototype.setScrollLeft = function(e) {
          this.el.scrollLeft = e
      }
      ,
      t.prototype.getScrollWidth = function() {
          return this.el.scrollWidth
      }
      ,
      t.prototype.getScrollHeight = function() {
          return this.el.scrollHeight
      }
      ,
      t.prototype.getClientHeight = function() {
          return this.el.clientHeight
      }
      ,
      t.prototype.getClientWidth = function() {
          return this.el.clientWidth
      }
      ,
      t
  }(ln)
    , un = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return Ee(t, e),
      t.prototype.getScrollTop = function() {
          return window.pageYOffset
      }
      ,
      t.prototype.getScrollLeft = function() {
          return window.pageXOffset
      }
      ,
      t.prototype.setScrollTop = function(e) {
          window.scroll(window.pageXOffset, e)
      }
      ,
      t.prototype.setScrollLeft = function(e) {
          window.scroll(e, window.pageYOffset)
      }
      ,
      t.prototype.getScrollWidth = function() {
          return document.documentElement.scrollWidth
      }
      ,
      t.prototype.getScrollHeight = function() {
          return document.documentElement.scrollHeight
      }
      ,
      t.prototype.getClientHeight = function() {
          return document.documentElement.clientHeight
      }
      ,
      t.prototype.getClientWidth = function() {
          return document.documentElement.clientWidth
      }
      ,
      t
  }(ln)
    , dn = function(e) {
      function t(t, n) {
          var i = e.call(this, r("div", {
              className: "fc-scroller"
          })) || this;
          return i.overflowX = t,
          i.overflowY = n,
          i.applyOverflow(),
          i
      }
      return Ee(t, e),
      t.prototype.clear = function() {
          this.setHeight("auto"),
          this.applyOverflow()
      }
      ,
      t.prototype.destroy = function() {
          u(this.el)
      }
      ,
      t.prototype.applyOverflow = function() {
          m(this.el, {
              overflowX: this.overflowX,
              overflowY: this.overflowY
          })
      }
      ,
      t.prototype.lockOverflow = function(e) {
          var t = this.overflowX
            , n = this.overflowY;
          e = e || this.getScrollbarWidths(),
          "auto" === t && (t = e.bottom || this.canScrollHorizontally() ? "scroll" : "hidden"),
          "auto" === n && (n = e.left || e.right || this.canScrollVertically() ? "scroll" : "hidden"),
          m(this.el, {
              overflowX: t,
              overflowY: n
          })
      }
      ,
      t.prototype.setHeight = function(e) {
          y(this.el, "height", e)
      }
      ,
      t.prototype.getScrollbarWidths = function() {
          var e = w(this.el);
          return {
              left: e.scrollbarLeft,
              right: e.scrollbarRight,
              bottom: e.scrollbarBottom
          }
      }
      ,
      t
  }(cn)
    , pn = function() {
      function e(e) {
          this.calendarOptions = e,
          this.processIconOverride()
      }
      return e.prototype.processIconOverride = function() {
          this.iconOverrideOption && this.setIconOverride(this.calendarOptions[this.iconOverrideOption])
      }
      ,
      e.prototype.setIconOverride = function(e) {
          var t, n;
          if ("object" == typeof e && e) {
              for (n in t = Se({}, this.iconClasses),
              e)
                  t[n] = this.applyIconOverridePrefix(e[n]);
              this.iconClasses = t
          } else
              !1 === e && (this.iconClasses = {})
      }
      ,
      e.prototype.applyIconOverridePrefix = function(e) {
          var t = this.iconOverridePrefix;
          return t && 0 !== e.indexOf(t) && (e = t + e),
          e
      }
      ,
      e.prototype.getClass = function(e) {
          return this.classes[e] || ""
      }
      ,
      e.prototype.getIconClass = function(e) {
          var t = this.iconClasses[e];
          return t ? this.baseIconClass + " " + t : ""
      }
      ,
      e.prototype.getCustomButtonIconClass = function(e) {
          var t;
          return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
      }
      ,
      e
  }();
  pn.prototype.classes = {},
  pn.prototype.iconClasses = {},
  pn.prototype.baseIconClass = "",
  pn.prototype.iconOverridePrefix = "";
  var hn = 0
    , fn = function() {
      function e(e, t, n, r, i) {
          this.calendar = e,
          this.theme = t,
          this.dateEnv = n,
          this.options = r,
          this.view = i,
          this.isRtl = "rtl" === r.dir,
          this.eventOrderSpecs = ie(r.eventOrder),
          this.nextDayThreshold = K(r.nextDayThreshold)
      }
      return e.prototype.extend = function(t, n) {
          return new e(this.calendar,this.theme,this.dateEnv,t || this.options,n || this.view)
      }
      ,
      e
  }()
    , gn = function() {
      function e() {
          this.everRendered = !1,
          this.uid = String(hn++)
      }
      return e.addEqualityFuncs = function(e) {
          this.prototype.equalityFuncs = Se({}, this.prototype.equalityFuncs, e)
      }
      ,
      e.prototype.receiveProps = function(e, t) {
          this.receiveContext(t);
          var n = function(e, t, n) {
              var r = {}
                , i = !1;
              for (var o in t)
                  o in e && (e[o] === t[o] || n[o] && n[o](e[o], t[o])) ? r[o] = e[o] : (r[o] = t[o],
                  i = !0);
              for (var o in e)
                  if (!(o in t)) {
                      i = !0;
                      break
                  }
              return {
                  anyChanges: i,
                  comboProps: r
              }
          }(this.props || {}, e, this.equalityFuncs)
            , r = n.anyChanges
            , i = n.comboProps;
          this.props = i,
          r && (this.everRendered && this.beforeUpdate(),
          this.render(i, t),
          this.everRendered && this.afterUpdate()),
          this.everRendered = !0
      }
      ,
      e.prototype.receiveContext = function(e) {
          var t = this.context;
          this.context = e,
          t || this.firstContext(e)
      }
      ,
      e.prototype.render = function(e, t) {}
      ,
      e.prototype.firstContext = function(e) {}
      ,
      e.prototype.beforeUpdate = function() {}
      ,
      e.prototype.afterUpdate = function() {}
      ,
      e.prototype.destroy = function() {}
      ,
      e
  }();
  gn.prototype.equalityFuncs = {};
  var vn = function(e) {
      function t(t) {
          var n = e.call(this) || this;
          return n.el = t,
          n
      }
      return Ee(t, e),
      t.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          u(this.el)
      }
      ,
      t.prototype.buildPositionCaches = function() {}
      ,
      t.prototype.queryHit = function(e, t, n, r) {
          return null
      }
      ,
      t.prototype.isInteractionValid = function(e) {
          var t = this.context.calendar
            , n = this.props.dateProfile
            , r = e.mutatedEvents.instances;
          if (n)
              for (var i in r)
                  if (!Ge(n.validRange, r[i].range))
                      return !1;
          return Ct(e, t)
      }
      ,
      t.prototype.isDateSelectionValid = function(e) {
          var t = this.context.calendar
            , n = this.props.dateProfile;
          return !(n && !Ge(n.validRange, e.range)) && function(e, t) {
              return Rt({
                  dateSelection: e
              }, t)
          }(e, t)
      }
      ,
      t.prototype.isValidSegDownEl = function(e) {
          return !this.props.eventDrag && !this.props.eventResize && !h(e, ".fc-mirror") && (this.isPopover() || !this.isInPopover(e))
      }
      ,
      t.prototype.isValidDateDownEl = function(e) {
          var t = h(e, this.fgSegSelector);
          return (!t || t.classList.contains("fc-mirror")) && !h(e, ".fc-more") && !h(e, "a[data-goto]") && !this.isInPopover(e)
      }
      ,
      t.prototype.isPopover = function() {
          return this.el.classList.contains("fc-popover")
      }
      ,
      t.prototype.isInPopover = function(e) {
          return Boolean(h(e, ".fc-popover"))
      }
      ,
      t
  }(gn);
  vn.prototype.fgSegSelector = ".fc-event-container > *",
  vn.prototype.bgSegSelector = ".fc-bgevent:not(.fc-nonbusiness)";
  var mn = 0;
  function yn(e) {
      return {
          id: String(mn++),
          deps: e.deps || [],
          reducers: e.reducers || [],
          eventDefParsers: e.eventDefParsers || [],
          isDraggableTransformers: e.isDraggableTransformers || [],
          eventDragMutationMassagers: e.eventDragMutationMassagers || [],
          eventDefMutationAppliers: e.eventDefMutationAppliers || [],
          dateSelectionTransformers: e.dateSelectionTransformers || [],
          datePointTransforms: e.datePointTransforms || [],
          dateSpanTransforms: e.dateSpanTransforms || [],
          views: e.views || {},
          viewPropsTransformers: e.viewPropsTransformers || [],
          isPropsValid: e.isPropsValid || null,
          externalDefTransforms: e.externalDefTransforms || [],
          eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
          viewContainerModifiers: e.viewContainerModifiers || [],
          eventDropTransformers: e.eventDropTransformers || [],
          componentInteractions: e.componentInteractions || [],
          calendarInteractions: e.calendarInteractions || [],
          themeClasses: e.themeClasses || {},
          eventSourceDefs: e.eventSourceDefs || [],
          cmdFormatter: e.cmdFormatter,
          recurringTypes: e.recurringTypes || [],
          namedTimeZonedImpl: e.namedTimeZonedImpl,
          defaultView: e.defaultView || "",
          elementDraggingImpl: e.elementDraggingImpl,
          optionChangeHandlers: e.optionChangeHandlers || {}
      }
  }
  var En = function() {
      function e() {
          this.hooks = {
              reducers: [],
              eventDefParsers: [],
              isDraggableTransformers: [],
              eventDragMutationMassagers: [],
              eventDefMutationAppliers: [],
              dateSelectionTransformers: [],
              datePointTransforms: [],
              dateSpanTransforms: [],
              views: {},
              viewPropsTransformers: [],
              isPropsValid: null,
              externalDefTransforms: [],
              eventResizeJoinTransforms: [],
              viewContainerModifiers: [],
              eventDropTransformers: [],
              componentInteractions: [],
              calendarInteractions: [],
              themeClasses: {},
              eventSourceDefs: [],
              cmdFormatter: null,
              recurringTypes: [],
              namedTimeZonedImpl: null,
              defaultView: "",
              elementDraggingImpl: null,
              optionChangeHandlers: {}
          },
          this.addedHash = {}
      }
      return e.prototype.add = function(e) {
          if (!this.addedHash[e.id]) {
              this.addedHash[e.id] = !0;
              for (var t = 0, n = e.deps; t < n.length; t++) {
                  var r = n[t];
                  this.add(r)
              }
              this.hooks = (i = this.hooks,
              o = e,
              {
                  reducers: i.reducers.concat(o.reducers),
                  eventDefParsers: i.eventDefParsers.concat(o.eventDefParsers),
                  isDraggableTransformers: i.isDraggableTransformers.concat(o.isDraggableTransformers),
                  eventDragMutationMassagers: i.eventDragMutationMassagers.concat(o.eventDragMutationMassagers),
                  eventDefMutationAppliers: i.eventDefMutationAppliers.concat(o.eventDefMutationAppliers),
                  dateSelectionTransformers: i.dateSelectionTransformers.concat(o.dateSelectionTransformers),
                  datePointTransforms: i.datePointTransforms.concat(o.datePointTransforms),
                  dateSpanTransforms: i.dateSpanTransforms.concat(o.dateSpanTransforms),
                  views: Se({}, i.views, o.views),
                  viewPropsTransformers: i.viewPropsTransformers.concat(o.viewPropsTransformers),
                  isPropsValid: o.isPropsValid || i.isPropsValid,
                  externalDefTransforms: i.externalDefTransforms.concat(o.externalDefTransforms),
                  eventResizeJoinTransforms: i.eventResizeJoinTransforms.concat(o.eventResizeJoinTransforms),
                  viewContainerModifiers: i.viewContainerModifiers.concat(o.viewContainerModifiers),
                  eventDropTransformers: i.eventDropTransformers.concat(o.eventDropTransformers),
                  calendarInteractions: i.calendarInteractions.concat(o.calendarInteractions),
                  componentInteractions: i.componentInteractions.concat(o.componentInteractions),
                  themeClasses: Se({}, i.themeClasses, o.themeClasses),
                  eventSourceDefs: i.eventSourceDefs.concat(o.eventSourceDefs),
                  cmdFormatter: o.cmdFormatter || i.cmdFormatter,
                  recurringTypes: i.recurringTypes.concat(o.recurringTypes),
                  namedTimeZonedImpl: o.namedTimeZonedImpl || i.namedTimeZonedImpl,
                  defaultView: i.defaultView || o.defaultView,
                  elementDraggingImpl: i.elementDraggingImpl || o.elementDraggingImpl,
                  optionChangeHandlers: Se({}, i.optionChangeHandlers, o.optionChangeHandlers)
              })
          }
          var i, o
      }
      ,
      e
  }();
  var Sn = yn({
      eventSourceDefs: [{
          ignoreRange: !0,
          parseMeta: function(e) {
              return Array.isArray(e) ? e : Array.isArray(e.events) ? e.events : null
          },
          fetch: function(e, t) {
              t({
                  rawEvents: e.eventSource.meta
              })
          }
      }]
  })
    , bn = yn({
      eventSourceDefs: [{
          parseMeta: function(e) {
              return "function" == typeof e ? e : "function" == typeof e.events ? e.events : null
          },
          fetch: function(e, t, n) {
              var r = e.calendar.dateEnv;
              tn(e.eventSource.meta.bind(null, {
                  start: r.toDate(e.range.start),
                  end: r.toDate(e.range.end),
                  startStr: r.formatIso(e.range.start),
                  endStr: r.formatIso(e.range.end),
                  timeZone: r.timeZone
              }), (function(e) {
                  t({
                      rawEvents: e
                  })
              }
              ), n)
          }
      }]
  });
  function Dn(e, t, n, r, i) {
      var o = null;
      "GET" === (e = e.toUpperCase()) ? t = function(e, t) {
          return e + (-1 === e.indexOf("?") ? "?" : "&") + wn(t)
      }(t, n) : o = wn(n);
      var s = new XMLHttpRequest;
      s.open(e, t, !0),
      "GET" !== e && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
      s.onload = function() {
          if (s.status >= 200 && s.status < 400)
              try {
                  var e = JSON.parse(s.responseText);
                  r(e, s)
              } catch (e) {
                  i("Failure parsing JSON", s)
              }
          else
              i("Request failed", s)
      }
      ,
      s.onerror = function() {
          i("Request failed", s)
      }
      ,
      s.send(o)
  }
  function wn(e) {
      var t = [];
      for (var n in e)
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      return t.join("&")
  }
  var Tn = yn({
      eventSourceDefs: [{
          parseMeta: function(e) {
              if ("string" == typeof e)
                  e = {
                      url: e
                  };
              else if (!e || "object" != typeof e || !e.url)
                  return null;
              return {
                  url: e.url,
                  method: (e.method || "GET").toUpperCase(),
                  extraParams: e.extraParams,
                  startParam: e.startParam,
                  endParam: e.endParam,
                  timeZoneParam: e.timeZoneParam
              }
          },
          fetch: function(e, t, n) {
              var r = e.eventSource.meta
                , i = function(e, t, n) {
                  var r, i, o, s, a = n.dateEnv, l = {};
                  null == (r = e.startParam) && (r = n.opt("startParam"));
                  null == (i = e.endParam) && (i = n.opt("endParam"));
                  null == (o = e.timeZoneParam) && (o = n.opt("timeZoneParam"));
                  s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                  Se(l, s),
                  l[r] = a.formatIso(t.start),
                  l[i] = a.formatIso(t.end),
                  "local" !== a.timeZone && (l[o] = a.timeZone);
                  return l
              }(r, e.range, e.calendar);
              Dn(r.method, r.url, i, (function(e, n) {
                  t({
                      rawEvents: e,
                      xhr: n
                  })
              }
              ), (function(e, t) {
                  n({
                      message: e,
                      xhr: t
                  })
              }
              ))
          }
      }]
  });
  var Cn = yn({
      recurringTypes: [{
          parse: function(e, t, n) {
              var r, i, o = n.createMarker.bind(n), s = fe(e, {
                  daysOfWeek: null,
                  startTime: K,
                  endTime: K,
                  startRecur: o,
                  endRecur: o
              }, {}, t), a = !1;
              for (var l in s)
                  if (null != s[l]) {
                      a = !0;
                      break
                  }
              if (a) {
                  var c = null;
                  return "duration"in t && (c = K(t.duration),
                  delete t.duration),
                  !c && s.startTime && s.endTime && (r = s.endTime,
                  i = s.startTime,
                  c = {
                      years: r.years - i.years,
                      months: r.months - i.months,
                      days: r.days - i.days,
                      milliseconds: r.milliseconds - i.milliseconds
                  }),
                  {
                      allDayGuess: Boolean(!s.startTime && !s.endTime),
                      duration: c,
                      typeData: s
                  }
              }
              return null
          },
          expand: function(e, t, n) {
              var r = Ae(t, {
                  start: e.startRecur,
                  end: e.endRecur
              });
              return r ? function(e, t, n, r) {
                  var i = e ? Re(e) : null
                    , o = B(n.start)
                    , s = n.end
                    , a = [];
                  for (; o < s; ) {
                      var l = void 0;
                      i && !i[o.getUTCDay()] || (l = t ? r.add(o, t) : o,
                      a.push(l)),
                      o = _(o, 1)
                  }
                  return a
              }(e.daysOfWeek, e.startTime, r, n) : []
          }
      }]
  });
  var Rn = yn({
      optionChangeHandlers: {
          events: function(e, t, n) {
              In([e], t, n)
          },
          eventSources: In,
          plugins: function(e, t) {
              t.addPluginInputs(e)
          }
      }
  });
  function In(e, t, n) {
      for (var r = Ie(t.state.eventSources), i = [], o = 0, s = e; o < s.length; o++) {
          for (var a = s[o], l = !1, c = 0; c < r.length; c++)
              if (n(r[c]._raw, a)) {
                  r.splice(c, 1),
                  l = !0;
                  break
              }
          l || i.push(a)
      }
      for (var u = 0, d = r; u < d.length; u++) {
          var p = d[u];
          t.dispatch({
              type: "REMOVE_EVENT_SOURCE",
              sourceId: p.sourceId
          })
      }
      for (var h = 0, f = i; h < f.length; h++) {
          var g = f[h];
          t.addEventSource(g)
      }
  }
  var Mn = {
      defaultRangeSeparator: " - ",
      titleRangeSeparator: " – ",
      defaultTimedEventDuration: "01:00:00",
      defaultAllDayEventDuration: {
          day: 1
      },
      forceEventDuration: !1,
      nextDayThreshold: "00:00:00",
      columnHeader: !0,
      defaultView: "",
      aspectRatio: 1.35,
      header: {
          left: "title",
          center: "",
          right: "today prev,next"
      },
      weekends: !0,
      weekNumbers: !1,
      weekNumberCalculation: "local",
      editable: !1,
      scrollTime: "06:00:00",
      minTime: "00:00:00",
      maxTime: "24:00:00",
      showNonCurrentDates: !0,
      lazyFetching: !0,
      startParam: "start",
      endParam: "end",
      timeZoneParam: "timeZone",
      timeZone: "local",
      locales: [],
      locale: "",
      timeGridEventMinHeight: 0,
      themeSystem: "standard",
      dragRevertDuration: 500,
      dragScroll: !0,
      allDayMaintainDuration: !1,
      unselectAuto: !0,
      dropAccept: "*",
      eventOrder: "start,-duration,allDay,title",
      eventLimit: !1,
      eventLimitClick: "popover",
      dayPopoverFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
      },
      handleWindowResize: !0,
      windowResizeDelay: 100,
      longPressDelay: 1e3,
      eventDragMinDistance: 5
  }
    , Pn = {
      header: {
          left: "next,prev today",
          center: "",
          right: "title"
      },
      buttonIcons: {
          prev: "fc-icon-chevron-right",
          next: "fc-icon-chevron-left",
          prevYear: "fc-icon-chevrons-right",
          nextYear: "fc-icon-chevrons-left"
      }
  }
    , kn = ["header", "footer", "buttonText", "buttonIcons"];
  var xn = [Sn, bn, Tn, Cn, Rn];
  var Hn = {
      code: "en",
      week: {
          dow: 0,
          doy: 4
      },
      dir: "ltr",
      buttonText: {
          prev: "prev",
          next: "next",
          prevYear: "prev year",
          nextYear: "next year",
          year: "year",
          today: "today",
          month: "month",
          week: "week",
          day: "day",
          list: "list"
      },
      weekLabel: "W",
      allDayText: "all-day",
      eventLimitText: "more",
      noEventsMessage: "No events to display"
  };
  function _n(e) {
      for (var t = e.length > 0 ? e[0].code : "en", n = window.FullCalendarLocalesAll || [], r = window.FullCalendarLocales || {}, i = n.concat(Ie(r), e), o = {
          en: Hn
      }, s = 0, a = i; s < a.length; s++) {
          var l = a[s];
          o[l.code] = l
      }
      return {
          map: o,
          defaultCode: t
      }
  }
  function On(e, t) {
      return "object" != typeof e || Array.isArray(e) ? function(e, t) {
          var n = [].concat(e || [])
            , r = function(e, t) {
              for (var n = 0; n < e.length; n++)
                  for (var r = e[n].toLocaleLowerCase().split("-"), i = r.length; i > 0; i--) {
                      var o = r.slice(0, i).join("-");
                      if (t[o])
                          return t[o]
                  }
              return null
          }(n, t) || Hn;
          return Nn(e, n, r)
      }(e, t) : Nn(e.code, [e.code], e)
  }
  function Nn(e, t, n) {
      var r = we([Hn, n], ["buttonText"]);
      delete r.code;
      var i = r.week;
      return delete r.week,
      {
          codeArg: e,
          codes: t,
          week: i,
          simpleNumberFormat: new Intl.NumberFormat(e),
          options: r
      }
  }
  var zn = function() {
      function e(e) {
          this.overrides = Se({}, e),
          this.dynamicOverrides = {},
          this.compute()
      }
      return e.prototype.mutate = function(e, t, n) {
          if (Object.keys(e).length || t.length) {
              var r = n ? this.dynamicOverrides : this.overrides;
              Se(r, e);
              for (var i = 0, o = t; i < o.length; i++) {
                  delete r[o[i]]
              }
              this.compute()
          }
      }
      ,
      e.prototype.compute = function() {
          var e = pe(this.dynamicOverrides.locales, this.overrides.locales, Mn.locales)
            , t = pe(this.dynamicOverrides.locale, this.overrides.locale, Mn.locale)
            , n = _n(e)
            , r = On(t || n.defaultCode, n.map).options
            , i = "rtl" === pe(this.dynamicOverrides.dir, this.overrides.dir, r.dir) ? Pn : {};
          this.dirDefaults = i,
          this.localeDefaults = r,
          this.computed = we([Mn, i, r, this.overrides, this.dynamicOverrides], kn)
      }
      ,
      e
  }()
    , Ln = {};
  var Vn, Bn = function() {
      function e() {}
      return e.prototype.getMarkerYear = function(e) {
          return e.getUTCFullYear()
      }
      ,
      e.prototype.getMarkerMonth = function(e) {
          return e.getUTCMonth()
      }
      ,
      e.prototype.getMarkerDay = function(e) {
          return e.getUTCDate()
      }
      ,
      e.prototype.arrayToMarker = function(e) {
          return W(e)
      }
      ,
      e.prototype.markerToArray = function(e) {
          return j(e)
      }
      ,
      e
  }();
  Vn = Bn,
  Ln["gregory"] = Vn;
  var An = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function Un(e) {
      var t = An.exec(e);
      if (t) {
          var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
          if (Y(n)) {
              var r = null;
              return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))),
              {
                  marker: n,
                  isTimeUnspecified: !t[6],
                  timeZoneOffset: r
              }
          }
      }
      return null
  }
  var Fn = function() {
      function e(e) {
          var t = this.timeZone = e.timeZone
            , n = "local" !== t && "UTC" !== t;
          e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
          this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl),
          this.calendarSystem = function(e) {
              return new Ln[e]
          }(e.calendarSystem),
          this.locale = e.locale,
          this.weekDow = e.locale.week.dow,
          this.weekDoy = e.locale.week.doy,
          "ISO" === e.weekNumberCalculation && (this.weekDow = 1,
          this.weekDoy = 4),
          "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
          "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation),
          this.weekLabel = null != e.weekLabel ? e.weekLabel : e.locale.options.weekLabel,
          this.cmdFormatter = e.cmdFormatter
      }
      return e.prototype.createMarker = function(e) {
          var t = this.createMarkerMeta(e);
          return null === t ? null : t.marker
      }
      ,
      e.prototype.createNowMarker = function() {
          return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : W(F(new Date))
      }
      ,
      e.prototype.createMarkerMeta = function(e) {
          if ("string" == typeof e)
              return this.parse(e);
          var t = null;
          return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(),
          isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = W(e)),
          null !== t && Y(t) ? {
              marker: t,
              isTimeUnspecified: !1,
              forcedTzo: null
          } : null
      }
      ,
      e.prototype.parse = function(e) {
          var t = Un(e);
          if (null === t)
              return null;
          var n = t.marker
            , r = null;
          return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset),
          {
              marker: n,
              isTimeUnspecified: t.isTimeUnspecified,
              forcedTzo: r
          }
      }
      ,
      e.prototype.getYear = function(e) {
          return this.calendarSystem.getMarkerYear(e)
      }
      ,
      e.prototype.getMonth = function(e) {
          return this.calendarSystem.getMarkerMonth(e)
      }
      ,
      e.prototype.add = function(e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return n[0] += t.years,
          n[1] += t.months,
          n[2] += t.days,
          n[6] += t.milliseconds,
          this.calendarSystem.arrayToMarker(n)
      }
      ,
      e.prototype.subtract = function(e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return n[0] -= t.years,
          n[1] -= t.months,
          n[2] -= t.days,
          n[6] -= t.milliseconds,
          this.calendarSystem.arrayToMarker(n)
      }
      ,
      e.prototype.addYears = function(e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return n[0] += t,
          this.calendarSystem.arrayToMarker(n)
      }
      ,
      e.prototype.addMonths = function(e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return n[1] += t,
          this.calendarSystem.arrayToMarker(n)
      }
      ,
      e.prototype.diffWholeYears = function(e, t) {
          var n = this.calendarSystem;
          return q(e) === q(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
      }
      ,
      e.prototype.diffWholeMonths = function(e, t) {
          var n = this.calendarSystem;
          return q(e) === q(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
      }
      ,
      e.prototype.greatestWholeUnit = function(e, t) {
          var n = this.diffWholeYears(e, t);
          return null !== n ? {
              unit: "year",
              value: n
          } : null !== (n = this.diffWholeMonths(e, t)) ? {
              unit: "month",
              value: n
          } : null !== (n = L(e, t)) ? {
              unit: "week",
              value: n
          } : null !== (n = V(e, t)) ? {
              unit: "day",
              value: n
          } : ue(n = function(e, t) {
              return (t.valueOf() - e.valueOf()) / 36e5
          }(e, t)) ? {
              unit: "hour",
              value: n
          } : ue(n = function(e, t) {
              return (t.valueOf() - e.valueOf()) / 6e4
          }(e, t)) ? {
              unit: "minute",
              value: n
          } : ue(n = function(e, t) {
              return (t.valueOf() - e.valueOf()) / 1e3
          }(e, t)) ? {
              unit: "second",
              value: n
          } : {
              unit: "millisecond",
              value: t.valueOf() - e.valueOf()
          }
      }
      ,
      e.prototype.countDurationsBetween = function(e, t, n) {
          var r;
          return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (ee(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function(e) {
              return ee(e) / 30
          }(n) : n.days && null !== (r = V(e, t)) ? r / ee(n) : (t.valueOf() - e.valueOf()) / te(n)
      }
      ,
      e.prototype.startOf = function(e, t) {
          return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? B(e) : "hour" === t ? function(e) {
              return W([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
          }(e) : "minute" === t ? function(e) {
              return W([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
          }(e) : "second" === t ? function(e) {
              return W([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
          }(e) : void 0
      }
      ,
      e.prototype.startOfYear = function(e) {
          return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
      }
      ,
      e.prototype.startOfMonth = function(e) {
          return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
      }
      ,
      e.prototype.startOfWeek = function(e) {
          return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
      }
      ,
      e.prototype.computeWeekNumber = function(e) {
          return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
              var r = e.getUTCFullYear()
                , i = A(e, r, t, n);
              if (i < 1)
                  return A(e, r - 1, t, n);
              var o = A(e, r + 1, t, n);
              return o >= 1 ? Math.min(i, o) : i
          }(e, this.weekDow, this.weekDoy)
      }
      ,
      e.prototype.format = function(e, t, n) {
          return void 0 === n && (n = {}),
          t.format({
              marker: e,
              timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
          }, this)
      }
      ,
      e.prototype.formatRange = function(e, t, n, r) {
          return void 0 === r && (r = {}),
          r.isEndExclusive && (t = O(t, -1)),
          n.formatRange({
              marker: e,
              timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
          }, {
              marker: t,
              timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
          }, this)
      }
      ,
      e.prototype.formatIso = function(e, t) {
          void 0 === t && (t = {});
          var n = null;
          return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
          function(e, t, n) {
              void 0 === n && (n = !1);
              var r = e.toISOString();
              return r = r.replace(".000", ""),
              n && (r = r.replace("T00:00:00Z", "")),
              r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", st(t, !0)))),
              r
          }(e, n, t.omitTime)
      }
      ,
      e.prototype.timestampToMarker = function(e) {
          return "local" === this.timeZone ? W(F(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? W(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
      }
      ,
      e.prototype.offsetForMarker = function(e) {
          return "local" === this.timeZone ? -G(j(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(j(e)) : null
      }
      ,
      e.prototype.toDate = function(e, t) {
          return "local" === this.timeZone ? G(j(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(j(e)) * 60) : new Date(e.valueOf() - (t || 0))
      }
      ,
      e
  }()
    , Gn = {
      id: String,
      allDayDefault: Boolean,
      eventDataTransform: Function,
      success: Function,
      failure: Function
  }
    , jn = 0;
  function Wn(e, t) {
      return !t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange
  }
  function Yn(e, t) {
      for (var n = t.pluginSystem.hooks.eventSourceDefs, r = n.length - 1; r >= 0; r--) {
          var i = n[r].parseMeta(e);
          if (i) {
              var o = qn("object" == typeof e ? e : {}, i, r, t);
              return o._raw = e,
              o
          }
      }
      return null
  }
  function qn(e, t, n, r) {
      var i = {}
        , o = fe(e, Gn, {}, i)
        , s = {}
        , a = zt(i, r, s);
      return o.isFetching = !1,
      o.latestFetchId = "",
      o.fetchRange = null,
      o.publicId = String(e.id || ""),
      o.sourceId = String(jn++),
      o.sourceDefId = n,
      o.meta = t,
      o.ui = a,
      o.extendedProps = s,
      o
  }
  function Zn(e, t, n, r) {
      switch (t.type) {
      case "ADD_EVENT_SOURCES":
          return function(e, t, n, r) {
              for (var i = {}, o = 0, s = t; o < s.length; o++) {
                  var a = s[o];
                  i[a.sourceId] = a
              }
              n && (i = Kn(i, n, r));
              return Se({}, e, i)
          }(e, t.sources, n ? n.activeRange : null, r);
      case "REMOVE_EVENT_SOURCE":
          return i = e,
          o = t.sourceId,
          Te(i, (function(e) {
              return e.sourceId !== o
          }
          ));
      case "PREV":
      case "NEXT":
      case "SET_DATE":
      case "SET_VIEW_TYPE":
          return n ? Kn(e, n.activeRange, r) : e;
      case "FETCH_EVENT_SOURCES":
      case "CHANGE_TIMEZONE":
          return Jn(e, t.sourceIds ? Re(t.sourceIds) : function(e, t) {
              return Te(e, (function(e) {
                  return Wn(e, t)
              }
              ))
          }(e, r), n ? n.activeRange : null, r);
      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
          return function(e, t, n, r) {
              var i, o = e[t];
              if (o && n === o.latestFetchId)
                  return Se({}, e, ((i = {})[t] = Se({}, o, {
                      isFetching: !1,
                      fetchRange: r
                  }),
                  i));
              return e
          }(e, t.sourceId, t.fetchId, t.fetchRange);
      case "REMOVE_ALL_EVENT_SOURCES":
          return {};
      default:
          return e
      }
      var i, o
  }
  var Xn = 0;
  function Kn(e, t, n) {
      return Jn(e, Te(e, (function(e) {
          return function(e, t, n) {
              return Wn(e, n) ? !n.opt("lazyFetching") || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId
          }(e, t, n)
      }
      )), t, n)
  }
  function Jn(e, t, n, r) {
      var i = {};
      for (var o in e) {
          var s = e[o];
          t[o] ? i[o] = Qn(s, n, r) : i[o] = s
      }
      return i
  }
  function Qn(e, t, n) {
      var r = n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId]
        , i = String(Xn++);
      return r.fetch({
          eventSource: e,
          calendar: n,
          range: t
      }, (function(r) {
          var o, s, a = r.rawEvents, l = n.opt("eventSourceSuccess");
          e.success && (s = e.success(a, r.xhr)),
          l && (o = l(a, r.xhr)),
          a = s || o || a,
          n.dispatch({
              type: "RECEIVE_EVENTS",
              sourceId: e.sourceId,
              fetchId: i,
              fetchRange: t,
              rawEvents: a
          })
      }
      ), (function(r) {
          var o = n.opt("eventSourceFailure");
          console.warn(r.message, r),
          e.failure && e.failure(r),
          o && o(r),
          n.dispatch({
              type: "RECEIVE_EVENT_ERROR",
              sourceId: e.sourceId,
              fetchId: i,
              fetchRange: t,
              error: r
          })
      }
      )),
      Se({}, e, {
          isFetching: !0,
          latestFetchId: i
      })
  }
  var $n = function() {
      function e(e, t) {
          this.viewSpec = e,
          this.options = e.options,
          this.dateEnv = t.dateEnv,
          this.calendar = t,
          this.initHiddenDays()
      }
      return e.prototype.buildPrev = function(e, t) {
          var n = this.dateEnv
            , r = n.subtract(n.startOf(t, e.currentRangeUnit), e.dateIncrement);
          return this.build(r, -1)
      }
      ,
      e.prototype.buildNext = function(e, t) {
          var n = this.dateEnv
            , r = n.add(n.startOf(t, e.currentRangeUnit), e.dateIncrement);
          return this.build(r, 1)
      }
      ,
      e.prototype.build = function(e, t, n) {
          var r;
          void 0 === n && (n = !1);
          var i, o, s, a, l, c, u, d, p;
          return r = this.buildValidRange(),
          r = this.trimHiddenDays(r),
          n && (d = e,
          e = null != (p = r).start && d < p.start ? p.start : null != p.end && d >= p.end ? new Date(p.end.valueOf() - 1) : d),
          s = this.buildCurrentRangeInfo(e, t),
          a = /^(year|month|week|day)$/.test(s.unit),
          l = this.buildRenderRange(this.trimHiddenDays(s.range), s.unit, a),
          c = l = this.trimHiddenDays(l),
          this.options.showNonCurrentDates || (c = Ae(c, s.range)),
          i = K(this.options.minTime),
          o = K(this.options.maxTime),
          c = Ae(c = this.adjustActiveRange(c, i, o), r),
          u = Fe(s.range, r),
          {
              validRange: r,
              currentRange: s.range,
              currentRangeUnit: s.unit,
              isRangeAllDay: a,
              activeRange: c,
              renderRange: l,
              minTime: i,
              maxTime: o,
              isValid: u,
              dateIncrement: this.buildDateIncrement(s.duration)
          }
      }
      ,
      e.prototype.buildValidRange = function() {
          return this.getRangeOption("validRange", this.calendar.getNow()) || {
              start: null,
              end: null
          }
      }
      ,
      e.prototype.buildCurrentRangeInfo = function(e, t) {
          var n, r = this.viewSpec, i = this.dateEnv, o = null, s = null, a = null;
          return r.duration ? (o = r.duration,
          s = r.durationUnit,
          a = this.buildRangeFromDuration(e, t, o, s)) : (n = this.options.dayCount) ? (s = "day",
          a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? s = i.greatestWholeUnit(a.start, a.end).unit : (s = ne(o = this.getFallbackDuration()).unit,
          a = this.buildRangeFromDuration(e, t, o, s)),
          {
              duration: o,
              unit: s,
              range: a
          }
      }
      ,
      e.prototype.getFallbackDuration = function() {
          return K({
              day: 1
          })
      }
      ,
      e.prototype.adjustActiveRange = function(e, t, n) {
          var r = this.dateEnv
            , i = e.start
            , o = e.end;
          return this.viewSpec.class.prototype.usesMinMaxTime && (ee(t) < 0 && (i = B(i),
          i = r.add(i, t)),
          ee(n) > 1 && (o = _(o = B(o), -1),
          o = r.add(o, n))),
          {
              start: i,
              end: o
          }
      }
      ,
      e.prototype.buildRangeFromDuration = function(e, t, n, r) {
          var i, o, s, a, l, c = this.dateEnv, u = this.options.dateAlignment;
          function d() {
              s = c.startOf(e, u),
              a = c.add(s, n),
              l = {
                  start: s,
                  end: a
              }
          }
          return u || ((i = this.options.dateIncrement) ? (o = K(i),
          u = te(o) < te(n) ? ne(o, !Q(i)).unit : r) : u = r),
          ee(n) <= 1 && this.isHiddenDay(s) && (s = B(s = this.skipHiddenDays(s, t))),
          d(),
          this.trimHiddenDays(l) || (e = this.skipHiddenDays(e, t),
          d()),
          l
      }
      ,
      e.prototype.buildRangeFromDayCount = function(e, t, n) {
          var r, i = this.dateEnv, o = this.options.dateAlignment, s = 0, a = e;
          o && (a = i.startOf(a, o)),
          a = B(a),
          r = a = this.skipHiddenDays(a, t);
          do {
              r = _(r, 1),
              this.isHiddenDay(r) || s++
          } while (s < n);return {
              start: a,
              end: r
          }
      }
      ,
      e.prototype.buildCustomVisibleRange = function(e) {
          var t = this.dateEnv
            , n = this.getRangeOption("visibleRange", t.toDate(e));
          return !n || null != n.start && null != n.end ? n : null
      }
      ,
      e.prototype.buildRenderRange = function(e, t, n) {
          return e
      }
      ,
      e.prototype.buildDateIncrement = function(e) {
          var t, n = this.options.dateIncrement;
          return n ? K(n) : (t = this.options.dateAlignment) ? K(1, t) : e || K({
              days: 1
          })
      }
      ,
      e.prototype.getRangeOption = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
          var r = this.options[e];
          return "function" == typeof r && (r = r.apply(null, t)),
          r && (r = Le(r, this.dateEnv)),
          r && (r = ve(r)),
          r
      }
      ,
      e.prototype.initHiddenDays = function() {
          var e, t = this.options.hiddenDays || [], n = [], r = 0;
          for (!1 === this.options.weekends && t.push(0, 6),
          e = 0; e < 7; e++)
              (n[e] = -1 !== t.indexOf(e)) || r++;
          if (!r)
              throw new Error("invalid hiddenDays");
          this.isHiddenDayHash = n
      }
      ,
      e.prototype.trimHiddenDays = function(e) {
          var t = e.start
            , n = e.end;
          return t && (t = this.skipHiddenDays(t)),
          n && (n = this.skipHiddenDays(n, -1, !0)),
          null == t || null == n || t < n ? {
              start: t,
              end: n
          } : null
      }
      ,
      e.prototype.isHiddenDay = function(e) {
          return e instanceof Date && (e = e.getUTCDay()),
          this.isHiddenDayHash[e]
      }
      ,
      e.prototype.skipHiddenDays = function(e, t, n) {
          for (void 0 === t && (t = 1),
          void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; )
              e = _(e, t);
          return e
      }
      ,
      e
  }();
  function er(e, t, n) {
      for (var r = function(e, t) {
          switch (t.type) {
          case "SET_VIEW_TYPE":
              return t.viewType;
          default:
              return e
          }
      }(e.viewType, t), i = function(e, t, n, r, i) {
          var o;
          switch (t.type) {
          case "PREV":
              o = i.dateProfileGenerators[r].buildPrev(e, n);
              break;
          case "NEXT":
              o = i.dateProfileGenerators[r].buildNext(e, n);
              break;
          case "SET_DATE":
              e.activeRange && je(e.currentRange, t.dateMarker) || (o = i.dateProfileGenerators[r].build(t.dateMarker, void 0, !0));
              break;
          case "SET_VIEW_TYPE":
              var s = i.dateProfileGenerators[r];
              if (!s)
                  throw new Error(r ? 'The FullCalendar view "' + r + '" does not exist. Make sure your plugins are loaded correctly.' : "No available FullCalendar view plugins.");
              o = s.build(t.dateMarker || n, void 0, !0)
          }
          return !o || !o.isValid || e && (a = e,
          l = o,
          Ue(a.validRange, l.validRange) && Ue(a.activeRange, l.activeRange) && Ue(a.renderRange, l.renderRange) && $(a.minTime, l.minTime) && $(a.maxTime, l.maxTime)) ? e : o;
          var a, l
      }(e.dateProfile, t, e.currentDate, r, n), o = Zn(e.eventSources, t, i, n), s = Se({}, e, {
          viewType: r,
          dateProfile: i,
          currentDate: tr(e.currentDate, t, i),
          eventSources: o,
          eventStore: Dt(e.eventStore, t, o, i, n),
          dateSelection: nr(e.dateSelection, t, n),
          eventSelection: rr(e.eventSelection, t),
          eventDrag: ir(e.eventDrag, t, o, n),
          eventResize: or(e.eventResize, t, o, n),
          eventSourceLoadingLevel: sr(o),
          loadingLevel: sr(o)
      }), a = 0, l = n.pluginSystem.hooks.reducers; a < l.length; a++) {
          s = (0,
          l[a])(s, t, n)
      }
      return s
  }
  function tr(e, t, n) {
      switch (t.type) {
      case "PREV":
      case "NEXT":
          return je(n.currentRange, e) ? e : n.currentRange.start;
      case "SET_DATE":
      case "SET_VIEW_TYPE":
          var r = t.dateMarker || e;
          return n.activeRange && !je(n.activeRange, r) ? n.currentRange.start : r;
      default:
          return e
      }
  }
  function nr(e, t, n) {
      switch (t.type) {
      case "SELECT_DATES":
          return t.selection;
      case "UNSELECT_DATES":
          return null;
      default:
          return e
      }
  }
  function rr(e, t) {
      switch (t.type) {
      case "SELECT_EVENT":
          return t.eventInstanceId;
      case "UNSELECT_EVENT":
          return "";
      default:
          return e
      }
  }
  function ir(e, t, n, r) {
      switch (t.type) {
      case "SET_EVENT_DRAG":
          var i = t.state;
          return {
              affectedEvents: i.affectedEvents,
              mutatedEvents: i.mutatedEvents,
              isEvent: i.isEvent,
              origSeg: i.origSeg
          };
      case "UNSET_EVENT_DRAG":
          return null;
      default:
          return e
      }
  }
  function or(e, t, n, r) {
      switch (t.type) {
      case "SET_EVENT_RESIZE":
          var i = t.state;
          return {
              affectedEvents: i.affectedEvents,
              mutatedEvents: i.mutatedEvents,
              isEvent: i.isEvent,
              origSeg: i.origSeg
          };
      case "UNSET_EVENT_RESIZE":
          return null;
      default:
          return e
      }
  }
  function sr(e) {
      var t = 0;
      for (var n in e)
          e[n].isFetching && t++;
      return t
  }
  var ar = {
      start: null,
      end: null,
      allDay: Boolean
  };
  function lr(e, t, n) {
      var r = function(e, t) {
          var n = {}
            , r = fe(e, ar, {}, n)
            , i = r.start ? t.createMarkerMeta(r.start) : null
            , o = r.end ? t.createMarkerMeta(r.end) : null
            , s = r.allDay;
          null == s && (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified));
          return n.range = {
              start: i ? i.marker : null,
              end: o ? o.marker : null
          },
          n.allDay = s,
          n
      }(e, t)
        , i = r.range;
      if (!i.start)
          return null;
      if (!i.end) {
          if (null == n)
              return null;
          i.end = t.add(i.start, n)
      }
      return r
  }
  function cr(e, t, n) {
      var r = Wt({
          editable: !1
      }, "", e.allDay, !0, n);
      return {
          def: r,
          ui: vt(r, t),
          instance: Yt(r.defId, e.range),
          range: e.range,
          isStart: !0,
          isEnd: !0
      }
  }
  function ur(e, t, n, r) {
      if (t[e])
          return t[e];
      var i = function(e, t, n, r) {
          var i = n[e]
            , o = r[e]
            , s = function(e) {
              return i && null !== i[e] ? i[e] : o && null !== o[e] ? o[e] : null
          }
            , a = s("class")
            , l = s("superType");
          !l && a && (l = dr(a, r) || dr(a, n));
          var c = null;
          if (l) {
              if (l === e)
                  throw new Error("Can't have a custom view type that references itself");
              c = ur(l, t, n, r)
          }
          !a && c && (a = c.class);
          if (!a)
              return null;
          return {
              type: e,
              class: a,
              defaults: Se({}, c ? c.defaults : {}, i ? i.options : {}),
              overrides: Se({}, c ? c.overrides : {}, o ? o.options : {})
          }
      }(e, t, n, r);
      return i && (t[e] = i),
      i
  }
  function dr(e, t) {
      var n = Object.getPrototypeOf(e.prototype);
      for (var r in t) {
          var i = t[r];
          if (i.class && i.class.prototype === n)
              return r
      }
      return ""
  }
  function pr(e) {
      return Ce(e, fr)
  }
  var hr = {
      type: String,
      class: null
  };
  function fr(e) {
      "function" == typeof e && (e = {
          class: e
      });
      var t = {}
        , n = fe(e, hr, {}, t);
      return {
          superType: n.type,
          class: n.class,
          options: t
      }
  }
  function gr(e, t) {
      var n = pr(e)
        , r = pr(t.overrides.views);
      return Ce(function(e, t) {
          var n, r = {};
          for (n in e)
              ur(n, r, e, t);
          for (n in t)
              ur(n, r, e, t);
          return r
      }(n, r), (function(e) {
          return function(e, t, n) {
              var r = e.overrides.duration || e.defaults.duration || n.dynamicOverrides.duration || n.overrides.duration
                , i = null
                , o = ""
                , s = ""
                , a = {};
              if (r && (i = K(r))) {
                  var l = ne(i, !Q(r));
                  o = l.unit,
                  1 === l.value && (s = o,
                  a = t[o] ? t[o].options : {})
              }
              var c = function(t) {
                  var n = t.buttonText || {}
                    , r = e.defaults.buttonTextKey;
                  return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[s] ? n[s] : void 0
              };
              return {
                  type: e.type,
                  class: e.class,
                  duration: i,
                  durationUnit: o,
                  singleUnit: s,
                  options: Se({}, Mn, e.defaults, n.dirDefaults, n.localeDefaults, n.overrides, a, e.overrides, n.dynamicOverrides),
                  buttonTextOverride: c(n.dynamicOverrides) || c(n.overrides) || e.overrides.buttonText,
                  buttonTextDefault: c(n.localeDefaults) || c(n.dirDefaults) || e.defaults.buttonText || c(Mn) || e.type
              }
          }(e, r, t)
      }
      ))
  }
  var vr = function(e) {
      function t(t) {
          var n = e.call(this) || this;
          return n._renderLayout = Xt(n.renderLayout, n.unrenderLayout),
          n._updateTitle = Xt(n.updateTitle, null, [n._renderLayout]),
          n._updateActiveButton = Xt(n.updateActiveButton, null, [n._renderLayout]),
          n._updateToday = Xt(n.updateToday, null, [n._renderLayout]),
          n._updatePrev = Xt(n.updatePrev, null, [n._renderLayout]),
          n._updateNext = Xt(n.updateNext, null, [n._renderLayout]),
          n.el = r("div", {
              className: "fc-toolbar " + t
          }),
          n
      }
      return Ee(t, e),
      t.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this._renderLayout.unrender(),
          u(this.el)
      }
      ,
      t.prototype.render = function(e) {
          this._renderLayout(e.layout),
          this._updateTitle(e.title),
          this._updateActiveButton(e.activeButton),
          this._updateToday(e.isTodayEnabled),
          this._updatePrev(e.isPrevEnabled),
          this._updateNext(e.isNextEnabled)
      }
      ,
      t.prototype.renderLayout = function(e) {
          var t = this.el;
          this.viewsWithButtons = [],
          a(t, this.renderSection("left", e.left)),
          a(t, this.renderSection("center", e.center)),
          a(t, this.renderSection("right", e.right))
      }
      ,
      t.prototype.unrenderLayout = function() {
          this.el.innerHTML = ""
      }
      ,
      t.prototype.renderSection = function(e, t) {
          var n = this
            , o = this.context
            , s = o.theme
            , l = o.calendar
            , c = l.optionsManager
            , u = l.viewSpecs
            , d = r("div", {
              className: "fc-" + e
          })
            , p = c.computed.customButtons || {}
            , h = c.overrides.buttonText || {}
            , f = c.computed.buttonText || {};
          return t && t.split(" ").forEach((function(e, t) {
              var r, o = [], c = !0;
              if (e.split(",").forEach((function(e, t) {
                  var r, a, d, g, v, m, y, E, S;
                  "title" === e ? (o.push(i("<h2>&nbsp;</h2>")),
                  c = !1) : ((r = p[e]) ? (d = function(e) {
                      r.click && r.click.call(E, e)
                  }
                  ,
                  (g = s.getCustomButtonIconClass(r)) || (g = s.getIconClass(e)) || (v = r.text)) : (a = u[e]) ? (n.viewsWithButtons.push(e),
                  d = function() {
                      l.changeView(e)
                  }
                  ,
                  (v = a.buttonTextOverride) || (g = s.getIconClass(e)) || (v = a.buttonTextDefault)) : l[e] && (d = function() {
                      l[e]()
                  }
                  ,
                  (v = h[e]) || (g = s.getIconClass(e)) || (v = f[e])),
                  d && (y = ["fc-" + e + "-button", s.getClass("button")],
                  v ? (m = Ht(v),
                  S = "") : g && (m = "<span class='" + g + "'></span>",
                  S = ' aria-label="' + e + '"'),
                  (E = i('<button type="button" class="' + y.join(" ") + '"' + S + ">" + m + "</button>")).addEventListener("click", d),
                  o.push(E)))
              }
              )),
              o.length > 1) {
                  r = document.createElement("div");
                  var g = s.getClass("buttonGroup");
                  c && g && r.classList.add(g),
                  a(r, o),
                  d.appendChild(r)
              } else
                  a(d, o)
          }
          )),
          d
      }
      ,
      t.prototype.updateToday = function(e) {
          this.toggleButtonEnabled("today", e)
      }
      ,
      t.prototype.updatePrev = function(e) {
          this.toggleButtonEnabled("prev", e)
      }
      ,
      t.prototype.updateNext = function(e) {
          this.toggleButtonEnabled("next", e)
      }
      ,
      t.prototype.updateTitle = function(e) {
          g(this.el, "h2").forEach((function(t) {
              t.innerText = e
          }
          ))
      }
      ,
      t.prototype.updateActiveButton = function(e) {
          var t = this.context.theme.getClass("buttonActive");
          g(this.el, "button").forEach((function(n) {
              e && n.classList.contains("fc-" + e + "-button") ? n.classList.add(t) : n.classList.remove(t)
          }
          ))
      }
      ,
      t.prototype.toggleButtonEnabled = function(e, t) {
          g(this.el, ".fc-" + e + "-button").forEach((function(e) {
              e.disabled = !t
          }
          ))
      }
      ,
      t
  }(gn)
    , mr = function(e) {
      function t(t) {
          var n = e.call(this) || this;
          return n.elClassNames = [],
          n.renderSkeleton = Xt(n._renderSkeleton, n._unrenderSkeleton),
          n.renderToolbars = Xt(n._renderToolbars, n._unrenderToolbars, [n.renderSkeleton]),
          n.buildComponentContext = Ye(Er),
          n.buildViewPropTransformers = Ye(Sr),
          n.el = t,
          n.computeTitle = Ye(yr),
          n.parseBusinessHours = Ye((function(e) {
              return Zt(e, n.context.calendar)
          }
          )),
          n
      }
      return Ee(t, e),
      t.prototype.render = function(e, t) {
          this.freezeHeight();
          var n = this.computeTitle(e.dateProfile, e.viewSpec.options);
          this.renderSkeleton(t),
          this.renderToolbars(e.viewSpec, e.dateProfile, e.currentDate, n),
          this.renderView(e, n),
          this.updateSize(),
          this.thawHeight()
      }
      ,
      t.prototype.destroy = function() {
          this.header && this.header.destroy(),
          this.footer && this.footer.destroy(),
          this.renderSkeleton.unrender(),
          e.prototype.destroy.call(this)
      }
      ,
      t.prototype._renderSkeleton = function(e) {
          this.updateElClassNames(e),
          l(this.el, this.contentEl = r("div", {
              className: "fc-view-container"
          }));
          for (var t = e.calendar, n = 0, i = t.pluginSystem.hooks.viewContainerModifiers; n < i.length; n++) {
              (0,
              i[n])(this.contentEl, t)
          }
      }
      ,
      t.prototype._unrenderSkeleton = function() {
          this.view && (this.savedScroll = this.view.queryScroll(),
          this.view.destroy(),
          this.view = null),
          u(this.contentEl),
          this.removeElClassNames()
      }
      ,
      t.prototype.removeElClassNames = function() {
          for (var e = this.el.classList, t = 0, n = this.elClassNames; t < n.length; t++) {
              var r = n[t];
              e.remove(r)
          }
          this.elClassNames = []
      }
      ,
      t.prototype.updateElClassNames = function(e) {
          this.removeElClassNames();
          var t = e.theme
            , n = e.options;
          this.elClassNames = ["fc", "fc-" + n.dir, t.getClass("widget")];
          for (var r = this.el.classList, i = 0, o = this.elClassNames; i < o.length; i++) {
              var s = o[i];
              r.add(s)
          }
      }
      ,
      t.prototype._renderToolbars = function(e, t, n, r) {
          var i = this
            , o = i.context
            , s = i.header
            , c = i.footer
            , u = o.options
            , d = o.calendar
            , p = u.header
            , h = u.footer
            , f = this.props.dateProfileGenerator
            , g = d.getNow()
            , v = f.build(g)
            , m = f.buildPrev(t, n)
            , y = f.buildNext(t, n)
            , E = {
              title: r,
              activeButton: e.type,
              isTodayEnabled: v.isValid && !je(t.currentRange, g),
              isPrevEnabled: m.isValid,
              isNextEnabled: y.isValid
          };
          p ? (s || (s = this.header = new vr("fc-header-toolbar"),
          l(this.el, s.el)),
          s.receiveProps(Se({
              layout: p
          }, E), o)) : s && (s.destroy(),
          s = this.header = null),
          h ? (c || (c = this.footer = new vr("fc-footer-toolbar"),
          a(this.el, c.el)),
          c.receiveProps(Se({
              layout: h
          }, E), o)) : c && (c.destroy(),
          c = this.footer = null)
      }
      ,
      t.prototype._unrenderToolbars = function() {
          this.header && (this.header.destroy(),
          this.header = null),
          this.footer && (this.footer.destroy(),
          this.footer = null)
      }
      ,
      t.prototype.renderView = function(e, t) {
          var n = this.view
            , r = this.context
            , i = r.calendar
            , o = r.options
            , s = e.viewSpec
            , a = e.dateProfileGenerator;
          n && n.viewSpec === s || (n && n.destroy(),
          n = this.view = new s.class(s,this.contentEl),
          this.savedScroll && (n.addScroll(this.savedScroll, !0),
          this.savedScroll = null)),
          n.title = t;
          for (var l = {
              dateProfileGenerator: a,
              dateProfile: e.dateProfile,
              businessHours: this.parseBusinessHours(s.options.businessHours),
              eventStore: e.eventStore,
              eventUiBases: e.eventUiBases,
              dateSelection: e.dateSelection,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize
          }, c = 0, u = this.buildViewPropTransformers(i.pluginSystem.hooks.viewPropsTransformers); c < u.length; c++) {
              var d = u[c];
              Se(l, d.transform(l, s, e, o))
          }
          n.receiveProps(l, this.buildComponentContext(this.context, s, n))
      }
      ,
      t.prototype.updateSize = function(e) {
          void 0 === e && (e = !1);
          var t = this.view;
          t && ((e || null == this.isHeightAuto) && this.computeHeightVars(),
          t.updateSize(e, this.viewHeight, this.isHeightAuto),
          t.updateNowIndicator(),
          t.popScroll(e))
      }
      ,
      t.prototype.computeHeightVars = function() {
          var e = this.context.calendar
            , t = e.opt("height")
            , n = e.opt("contentHeight");
          if (this.isHeightAuto = "auto" === t || "auto" === n,
          "number" == typeof n)
              this.viewHeight = n;
          else if ("function" == typeof n)
              this.viewHeight = n();
          else if ("number" == typeof t)
              this.viewHeight = t - this.queryToolbarsHeight();
          else if ("function" == typeof t)
              this.viewHeight = t() - this.queryToolbarsHeight();
          else if ("parent" === t) {
              var r = this.el.parentNode;
              this.viewHeight = r.getBoundingClientRect().height - this.queryToolbarsHeight()
          } else
              this.viewHeight = Math.round(this.contentEl.getBoundingClientRect().width / Math.max(e.opt("aspectRatio"), .5))
      }
      ,
      t.prototype.queryToolbarsHeight = function() {
          var e = 0;
          return this.header && (e += R(this.header.el)),
          this.footer && (e += R(this.footer.el)),
          e
      }
      ,
      t.prototype.freezeHeight = function() {
          m(this.el, {
              height: this.el.getBoundingClientRect().height,
              overflow: "hidden"
          })
      }
      ,
      t.prototype.thawHeight = function() {
          m(this.el, {
              height: "",
              overflow: ""
          })
      }
      ,
      t
  }(gn);
  function yr(e, t) {
      var n;
      return n = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange,
      this.context.dateEnv.formatRange(n.start, n.end, ot(t.titleFormat || function(e) {
          var t = e.currentRangeUnit;
          if ("year" === t)
              return {
                  year: "numeric"
              };
          if ("month" === t)
              return {
                  year: "numeric",
                  month: "long"
              };
          var n = V(e.currentRange.start, e.currentRange.end);
          return null !== n && n > 1 ? {
              year: "numeric",
              month: "short",
              day: "numeric"
          } : {
              year: "numeric",
              month: "long",
              day: "numeric"
          }
      }(e), t.titleRangeSeparator), {
          isEndExclusive: e.isRangeAllDay
      })
  }
  function Er(e, t, n) {
      return e.extend(t.options, n)
  }
  function Sr(e) {
      return e.map((function(e) {
          return new e
      }
      ))
  }
  var br = function() {
      function e(e) {
          this.component = e.component
      }
      return e.prototype.destroy = function() {}
      ,
      e
  }();
  var Dr = {}
    , wr = function(e) {
      function t(t) {
          var n = e.call(this, t) || this;
          n.handleSegClick = function(e, t) {
              var r = n.component
                , i = r.context
                , o = i.calendar
                , s = i.view
                , a = ft(t);
              if (a && r.isValidSegDownEl(e.target)) {
                  var l = h(e.target, ".fc-has-url")
                    , c = l ? l.querySelector("a[href]").href : "";
                  o.publiclyTrigger("eventClick", [{
                      el: t,
                      event: new ut(r.context.calendar,a.eventRange.def,a.eventRange.instance),
                      jsEvent: e,
                      view: s
                  }]),
                  c && !e.defaultPrevented && (window.location.href = c)
              }
          }
          ;
          var r = t.component;
          return n.destroy = k(r.el, "click", r.fgSegSelector + "," + r.bgSegSelector, n.handleSegClick),
          n
      }
      return Ee(t, e),
      t
  }(br)
    , Tr = function(e) {
      function t(t) {
          var n = e.call(this, t) || this;
          n.handleEventElRemove = function(e) {
              e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl)
          }
          ,
          n.handleSegEnter = function(e, t) {
              ft(t) && (t.classList.add("fc-allow-mouse-resize"),
              n.currentSegEl = t,
              n.triggerEvent("eventMouseEnter", e, t))
          }
          ,
          n.handleSegLeave = function(e, t) {
              n.currentSegEl && (t.classList.remove("fc-allow-mouse-resize"),
              n.currentSegEl = null,
              n.triggerEvent("eventMouseLeave", e, t))
          }
          ;
          var r, i, o, s, a, l = t.component;
          return n.removeHoverListeners = (r = l.el,
          i = l.fgSegSelector + "," + l.bgSegSelector,
          o = n.handleSegEnter,
          s = n.handleSegLeave,
          k(r, "mouseover", i, (function(e, t) {
              if (t !== a) {
                  a = t,
                  o(e, t);
                  var n = function(e) {
                      a = null,
                      s(e, t),
                      t.removeEventListener("mouseleave", n)
                  };
                  t.addEventListener("mouseleave", n)
              }
          }
          ))),
          l.context.calendar.on("eventElRemove", n.handleEventElRemove),
          n
      }
      return Ee(t, e),
      t.prototype.destroy = function() {
          this.removeHoverListeners(),
          this.component.context.calendar.off("eventElRemove", this.handleEventElRemove)
      }
      ,
      t.prototype.triggerEvent = function(e, t, n) {
          var r = this.component
            , i = r.context
            , o = i.calendar
            , s = i.view
            , a = ft(n);
          t && !r.isValidSegDownEl(t.target) || o.publiclyTrigger(e, [{
              el: n,
              event: new ut(o,a.eventRange.def,a.eventRange.instance),
              jsEvent: t,
              view: s
          }])
      }
      ,
      t
  }(br)
    , Cr = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return Ee(t, e),
      t
  }(pn);
  Cr.prototype.classes = {
      widget: "fc-unthemed",
      widgetHeader: "fc-widget-header",
      widgetContent: "fc-widget-content",
      buttonGroup: "fc-button-group",
      button: "fc-button fc-button-primary",
      buttonActive: "fc-button-active",
      popoverHeader: "fc-widget-header",
      popoverContent: "fc-widget-content",
      headerRow: "fc-widget-header",
      dayRow: "fc-widget-content",
      listView: "fc-widget-content"
  },
  Cr.prototype.baseIconClass = "fc-icon",
  Cr.prototype.iconClasses = {
      close: "fc-icon-x",
      prev: "fc-icon-chevron-left",
      next: "fc-icon-chevron-right",
      prevYear: "fc-icon-chevrons-left",
      nextYear: "fc-icon-chevrons-right"
  },
  Cr.prototype.iconOverrideOption = "buttonIcons",
  Cr.prototype.iconOverrideCustomButtonOption = "icon",
  Cr.prototype.iconOverridePrefix = "fc-icon-";
  var Rr = function() {
      function e(e, t) {
          var n = this;
          this.buildComponentContext = Ye(Ir),
          this.parseRawLocales = Ye(_n),
          this.buildLocale = Ye(On),
          this.buildDateEnv = Ye(Mr),
          this.buildTheme = Ye(Pr),
          this.buildEventUiSingleBase = Ye(this._buildEventUiSingleBase),
          this.buildSelectionConfig = Ye(this._buildSelectionConfig),
          this.buildEventUiBySource = qe(xr, Me),
          this.buildEventUiBases = Ye(Hr),
          this.interactionsStore = {},
          this.actionQueue = [],
          this.isReducing = !1,
          this.needsRerender = !1,
          this.isRendering = !1,
          this.renderingPauseDepth = 0,
          this.buildDelayedRerender = Ye(kr),
          this.afterSizingTriggers = {},
          this.isViewUpdated = !1,
          this.isDatesUpdated = !1,
          this.isEventsUpdated = !1,
          this.el = e,
          this.optionsManager = new zn(t || {}),
          this.pluginSystem = new En,
          this.addPluginInputs(this.optionsManager.computed.plugins || []),
          this.handleOptions(this.optionsManager.computed),
          this.publiclyTrigger("_init"),
          this.hydrate(),
          this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions.map((function(e) {
              return new e(n)
          }
          ))
      }
      return e.prototype.addPluginInputs = function(e) {
          for (var t = function(e) {
              for (var t = [], n = 0, r = e; n < r.length; n++) {
                  var i = r[n];
                  if ("string" == typeof i) {
                      var o = "FullCalendar" + le(i);
                      window[o] ? t.push(window[o].default) : console.warn("Plugin file not loaded for " + i)
                  } else
                      t.push(i)
              }
              return xn.concat(t)
          }(e), n = 0, r = t; n < r.length; n++) {
              var i = r[n];
              this.pluginSystem.add(i)
          }
      }
      ,
      Object.defineProperty(e.prototype, "view", {
          get: function() {
              return this.component ? this.component.view : null
          },
          enumerable: !0,
          configurable: !0
      }),
      e.prototype.render = function() {
          this.component ? this.requestRerender() : (this.component = new mr(this.el),
          this.renderableEventStore = {
              defs: {},
              instances: {}
          },
          this.bindHandlers(),
          this.executeRender())
      }
      ,
      e.prototype.destroy = function() {
          if (this.component) {
              this.unbindHandlers(),
              this.component.destroy(),
              this.component = null;
              for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                  t[e].destroy()
              }
              this.publiclyTrigger("_destroyed")
          }
      }
      ,
      e.prototype.bindHandlers = function() {
          var e = this;
          this.removeNavLinkListener = k(this.el, "click", "a[data-goto]", (function(t, n) {
              var r = n.getAttribute("data-goto");
              r = r ? JSON.parse(r) : {};
              var i = e.dateEnv
                , o = i.createMarker(r.date)
                , s = r.type
                , a = e.viewOpt("navLink" + le(s) + "Click");
              "function" == typeof a ? a(i.toDate(o), t) : ("string" == typeof a && (s = a),
              e.zoomTo(o, s))
          }
          )),
          this.opt("handleWindowResize") && window.addEventListener("resize", this.windowResizeProxy = he(this.windowResize.bind(this), this.opt("windowResizeDelay")))
      }
      ,
      e.prototype.unbindHandlers = function() {
          this.removeNavLinkListener(),
          this.windowResizeProxy && (window.removeEventListener("resize", this.windowResizeProxy),
          this.windowResizeProxy = null)
      }
      ,
      e.prototype.hydrate = function() {
          var e = this;
          this.state = this.buildInitialState();
          var t = this.opt("eventSources") || []
            , n = this.opt("events")
            , r = [];
          n && t.unshift(n);
          for (var i = 0, o = t; i < o.length; i++) {
              var s = Yn(o[i], this);
              s && r.push(s)
          }
          this.batchRendering((function() {
              e.dispatch({
                  type: "INIT"
              }),
              e.dispatch({
                  type: "ADD_EVENT_SOURCES",
                  sources: r
              }),
              e.dispatch({
                  type: "SET_VIEW_TYPE",
                  viewType: e.opt("defaultView") || e.pluginSystem.hooks.defaultView
              })
          }
          ))
      }
      ,
      e.prototype.buildInitialState = function() {
          return {
              viewType: null,
              loadingLevel: 0,
              eventSourceLoadingLevel: 0,
              currentDate: this.getInitialDate(),
              dateProfile: null,
              eventSources: {},
              eventStore: {
                  defs: {},
                  instances: {}
              },
              dateSelection: null,
              eventSelection: "",
              eventDrag: null,
              eventResize: null
          }
      }
      ,
      e.prototype.dispatch = function(e) {
          if (this.actionQueue.push(e),
          !this.isReducing) {
              this.isReducing = !0;
              for (var t = this.state; this.actionQueue.length; )
                  this.state = this.reduce(this.state, this.actionQueue.shift(), this);
              var n = this.state;
              this.isReducing = !1,
              !t.loadingLevel && n.loadingLevel ? this.publiclyTrigger("loading", [!0]) : t.loadingLevel && !n.loadingLevel && this.publiclyTrigger("loading", [!1]);
              var r = this.component && this.component.view;
              t.eventStore !== n.eventStore && t.eventStore && (this.isEventsUpdated = !0),
              t.dateProfile !== n.dateProfile && (t.dateProfile && r && this.publiclyTrigger("datesDestroy", [{
                  view: r,
                  el: r.el
              }]),
              this.isDatesUpdated = !0),
              t.viewType !== n.viewType && (t.viewType && r && this.publiclyTrigger("viewSkeletonDestroy", [{
                  view: r,
                  el: r.el
              }]),
              this.isViewUpdated = !0),
              this.requestRerender()
          }
      }
      ,
      e.prototype.reduce = function(e, t, n) {
          return er(e, t, n)
      }
      ,
      e.prototype.requestRerender = function() {
          this.needsRerender = !0,
          this.delayedRerender()
      }
      ,
      e.prototype.tryRerender = function() {
          this.component && this.needsRerender && !this.renderingPauseDepth && !this.isRendering && this.executeRender()
      }
      ,
      e.prototype.batchRendering = function(e) {
          this.renderingPauseDepth++,
          e(),
          this.renderingPauseDepth--,
          this.needsRerender && this.requestRerender()
      }
      ,
      e.prototype.executeRender = function() {
          this.needsRerender = !1,
          this.isRendering = !0,
          this.renderComponent(),
          this.isRendering = !1,
          this.needsRerender && this.delayedRerender()
      }
      ,
      e.prototype.renderComponent = function() {
          var e = this.state
            , t = this.component
            , n = e.viewType
            , r = this.viewSpecs[n];
          if (!r)
              throw new Error('View type "' + n + '" is not valid');
          var i = this.renderableEventStore = e.eventSourceLoadingLevel && !this.opt("progressiveEventRendering") ? this.renderableEventStore : e.eventStore
            , o = this.buildEventUiSingleBase(r.options)
            , s = this.buildEventUiBySource(e.eventSources)
            , a = this.eventUiBases = this.buildEventUiBases(i.defs, o, s);
          t.receiveProps(Se({}, e, {
              viewSpec: r,
              dateProfileGenerator: this.dateProfileGenerators[n],
              dateProfile: e.dateProfile,
              eventStore: i,
              eventUiBases: a,
              dateSelection: e.dateSelection,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize
          }), this.buildComponentContext(this.theme, this.dateEnv, this.optionsManager.computed)),
          this.isViewUpdated && (this.isViewUpdated = !1,
          this.publiclyTrigger("viewSkeletonRender", [{
              view: t.view,
              el: t.view.el
          }])),
          this.isDatesUpdated && (this.isDatesUpdated = !1,
          this.publiclyTrigger("datesRender", [{
              view: t.view,
              el: t.view.el
          }])),
          this.isEventsUpdated && (this.isEventsUpdated = !1),
          this.releaseAfterSizingTriggers()
      }
      ,
      e.prototype.setOption = function(e, t) {
          var n;
          this.mutateOptions(((n = {})[e] = t,
          n), [], !0)
      }
      ,
      e.prototype.getOption = function(e) {
          return this.optionsManager.computed[e]
      }
      ,
      e.prototype.opt = function(e) {
          return this.optionsManager.computed[e]
      }
      ,
      e.prototype.viewOpt = function(e) {
          return this.viewOpts()[e]
      }
      ,
      e.prototype.viewOpts = function() {
          return this.viewSpecs[this.state.viewType].options
      }
      ,
      e.prototype.mutateOptions = function(e, t, n, r) {
          var i = this
            , o = this.pluginSystem.hooks.optionChangeHandlers
            , s = {}
            , a = {}
            , l = this.dateEnv
            , c = !1
            , u = !1
            , d = Boolean(t.length);
          for (var p in e)
              o[p] ? a[p] = e[p] : s[p] = e[p];
          for (var h in s)
              /^(height|contentHeight|aspectRatio)$/.test(h) ? u = !0 : /^(defaultDate|defaultView)$/.test(h) || (d = !0,
              "timeZone" === h && (c = !0));
          this.optionsManager.mutate(s, t, n),
          d && this.handleOptions(this.optionsManager.computed),
          this.batchRendering((function() {
              if (d ? (c && i.dispatch({
                  type: "CHANGE_TIMEZONE",
                  oldDateEnv: l
              }),
              i.dispatch({
                  type: "SET_VIEW_TYPE",
                  viewType: i.state.viewType
              })) : u && i.updateSize(),
              r)
                  for (var e in a)
                      o[e](a[e], i, r)
          }
          ))
      }
      ,
      e.prototype.handleOptions = function(e) {
          var t = this
            , n = this.pluginSystem.hooks;
          this.defaultAllDayEventDuration = K(e.defaultAllDayEventDuration),
          this.defaultTimedEventDuration = K(e.defaultTimedEventDuration),
          this.delayedRerender = this.buildDelayedRerender(e.rerenderDelay),
          this.theme = this.buildTheme(e);
          var r = this.parseRawLocales(e.locales);
          this.availableRawLocales = r.map;
          var i = this.buildLocale(e.locale || r.defaultCode, r.map);
          this.dateEnv = this.buildDateEnv(i, e.timeZone, n.namedTimeZonedImpl, e.firstDay, e.weekNumberCalculation, e.weekLabel, n.cmdFormatter),
          this.selectionConfig = this.buildSelectionConfig(e),
          this.viewSpecs = gr(n.views, this.optionsManager),
          this.dateProfileGenerators = Ce(this.viewSpecs, (function(e) {
              return new e.class.prototype.dateProfileGeneratorClass(e,t)
          }
          ))
      }
      ,
      e.prototype.getAvailableLocaleCodes = function() {
          return Object.keys(this.availableRawLocales)
      }
      ,
      e.prototype._buildSelectionConfig = function(e) {
          return Lt("select", e, this)
      }
      ,
      e.prototype._buildEventUiSingleBase = function(e) {
          return e.editable && (e = Se({}, e, {
              eventEditable: !0
          })),
          Lt("event", e, this)
      }
      ,
      e.prototype.hasPublicHandlers = function(e) {
          return this.hasHandlers(e) || this.opt(e)
      }
      ,
      e.prototype.publiclyTrigger = function(e, t) {
          var n = this.opt(e);
          if (this.triggerWith(e, this, t),
          n)
              return n.apply(this, t)
      }
      ,
      e.prototype.publiclyTriggerAfterSizing = function(e, t) {
          var n = this.afterSizingTriggers;
          (n[e] || (n[e] = [])).push(t)
      }
      ,
      e.prototype.releaseAfterSizingTriggers = function() {
          var e = this.afterSizingTriggers;
          for (var t in e)
              for (var n = 0, r = e[t]; n < r.length; n++) {
                  var i = r[n];
                  this.publiclyTrigger(t, i)
              }
          this.afterSizingTriggers = {}
      }
      ,
      e.prototype.isValidViewType = function(e) {
          return Boolean(this.viewSpecs[e])
      }
      ,
      e.prototype.changeView = function(e, t) {
          var n = null;
          t && (t.start && t.end ? (this.optionsManager.mutate({
              visibleRange: t
          }, []),
          this.handleOptions(this.optionsManager.computed)) : n = this.dateEnv.createMarker(t)),
          this.unselect(),
          this.dispatch({
              type: "SET_VIEW_TYPE",
              viewType: e,
              dateMarker: n
          })
      }
      ,
      e.prototype.zoomTo = function(e, t) {
          var n;
          t = t || "day",
          n = this.viewSpecs[t] || this.getUnitViewSpec(t),
          this.unselect(),
          n ? this.dispatch({
              type: "SET_VIEW_TYPE",
              viewType: n.type,
              dateMarker: e
          }) : this.dispatch({
              type: "SET_DATE",
              dateMarker: e
          })
      }
      ,
      e.prototype.getUnitViewSpec = function(e) {
          var t, n, r = this.component, i = [];
          for (var o in r.header && i.push.apply(i, r.header.viewsWithButtons),
          r.footer && i.push.apply(i, r.footer.viewsWithButtons),
          this.viewSpecs)
              i.push(o);
          for (t = 0; t < i.length; t++)
              if ((n = this.viewSpecs[i[t]]) && n.singleUnit === e)
                  return n
      }
      ,
      e.prototype.getInitialDate = function() {
          var e = this.opt("defaultDate");
          return null != e ? this.dateEnv.createMarker(e) : this.getNow()
      }
      ,
      e.prototype.prev = function() {
          this.unselect(),
          this.dispatch({
              type: "PREV"
          })
      }
      ,
      e.prototype.next = function() {
          this.unselect(),
          this.dispatch({
              type: "NEXT"
          })
      }
      ,
      e.prototype.prevYear = function() {
          this.unselect(),
          this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
          })
      }
      ,
      e.prototype.nextYear = function() {
          this.unselect(),
          this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
          })
      }
      ,
      e.prototype.today = function() {
          this.unselect(),
          this.dispatch({
              type: "SET_DATE",
              dateMarker: this.getNow()
          })
      }
      ,
      e.prototype.gotoDate = function(e) {
          this.unselect(),
          this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.createMarker(e)
          })
      }
      ,
      e.prototype.incrementDate = function(e) {
          var t = K(e);
          t && (this.unselect(),
          this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.add(this.state.currentDate, t)
          }))
      }
      ,
      e.prototype.getDate = function() {
          return this.dateEnv.toDate(this.state.currentDate)
      }
      ,
      e.prototype.formatDate = function(e, t) {
          var n = this.dateEnv;
          return n.format(n.createMarker(e), ot(t))
      }
      ,
      e.prototype.formatRange = function(e, t, n) {
          var r = this.dateEnv;
          return r.formatRange(r.createMarker(e), r.createMarker(t), ot(n, this.opt("defaultRangeSeparator")), n)
      }
      ,
      e.prototype.formatIso = function(e, t) {
          var n = this.dateEnv;
          return n.formatIso(n.createMarker(e), {
              omitTime: t
          })
      }
      ,
      e.prototype.windowResize = function(e) {
          !this.isHandlingWindowResize && this.component && e.target === window && (this.isHandlingWindowResize = !0,
          this.updateSize(),
          this.publiclyTrigger("windowResize", [this.view]),
          this.isHandlingWindowResize = !1)
      }
      ,
      e.prototype.updateSize = function() {
          this.component && this.component.updateSize(!0)
      }
      ,
      e.prototype.registerInteractiveComponent = function(e, t) {
          var n = function(e, t) {
              return {
                  component: e,
                  el: t.el,
                  useEventCenter: null == t.useEventCenter || t.useEventCenter
              }
          }(e, t)
            , r = [wr, Tr].concat(this.pluginSystem.hooks.componentInteractions).map((function(e) {
              return new e(n)
          }
          ));
          this.interactionsStore[e.uid] = r,
          Dr[e.uid] = n
      }
      ,
      e.prototype.unregisterInteractiveComponent = function(e) {
          for (var t = 0, n = this.interactionsStore[e.uid]; t < n.length; t++) {
              n[t].destroy()
          }
          delete this.interactionsStore[e.uid],
          delete Dr[e.uid]
      }
      ,
      e.prototype.select = function(e, t) {
          var n = lr(null == t ? null != e.start ? e : {
              start: e,
              end: null
          } : {
              start: e,
              end: t
          }, this.dateEnv, K({
              days: 1
          }));
          n && (this.dispatch({
              type: "SELECT_DATES",
              selection: n
          }),
          this.triggerDateSelect(n))
      }
      ,
      e.prototype.unselect = function(e) {
          this.state.dateSelection && (this.dispatch({
              type: "UNSELECT_DATES"
          }),
          this.triggerDateUnselect(e))
      }
      ,
      e.prototype.triggerDateSelect = function(e, t) {
          var n = Se({}, this.buildDateSpanApi(e), {
              jsEvent: t ? t.origEvent : null,
              view: this.view
          });
          this.publiclyTrigger("select", [n])
      }
      ,
      e.prototype.triggerDateUnselect = function(e) {
          this.publiclyTrigger("unselect", [{
              jsEvent: e ? e.origEvent : null,
              view: this.view
          }])
      }
      ,
      e.prototype.triggerDateClick = function(e, t, n, r) {
          var i = Se({}, this.buildDatePointApi(e), {
              dayEl: t,
              jsEvent: r,
              view: n
          });
          this.publiclyTrigger("dateClick", [i])
      }
      ,
      e.prototype.buildDatePointApi = function(e) {
          for (var t, n, r = {}, i = 0, o = this.pluginSystem.hooks.datePointTransforms; i < o.length; i++) {
              var s = o[i];
              Se(r, s(e, this))
          }
          return Se(r, (t = e,
          {
              date: (n = this.dateEnv).toDate(t.range.start),
              dateStr: n.formatIso(t.range.start, {
                  omitTime: t.allDay
              }),
              allDay: t.allDay
          })),
          r
      }
      ,
      e.prototype.buildDateSpanApi = function(e) {
          for (var t, n, r = {}, i = 0, o = this.pluginSystem.hooks.dateSpanTransforms; i < o.length; i++) {
              var s = o[i];
              Se(r, s(e, this))
          }
          return Se(r, (t = e,
          {
              start: (n = this.dateEnv).toDate(t.range.start),
              end: n.toDate(t.range.end),
              startStr: n.formatIso(t.range.start, {
                  omitTime: t.allDay
              }),
              endStr: n.formatIso(t.range.end, {
                  omitTime: t.allDay
              }),
              allDay: t.allDay
          })),
          r
      }
      ,
      e.prototype.getNow = function() {
          var e = this.opt("now");
          return "function" == typeof e && (e = e()),
          null == e ? this.dateEnv.createNowMarker() : this.dateEnv.createMarker(e)
      }
      ,
      e.prototype.getDefaultEventEnd = function(e, t) {
          var n = t;
          return e ? (n = B(n),
          n = this.dateEnv.add(n, this.defaultAllDayEventDuration)) : n = this.dateEnv.add(n, this.defaultTimedEventDuration),
          n
      }
      ,
      e.prototype.addEvent = function(e, t) {
          if (e instanceof ut) {
              var n = e._def
                , r = e._instance;
              return this.state.eventStore.defs[n.defId] || this.dispatch({
                  type: "ADD_EVENTS",
                  eventStore: ke({
                      def: n,
                      instance: r
                  })
              }),
              e
          }
          var i;
          if (t instanceof ct)
              i = t.internalEventSource.sourceId;
          else if (null != t) {
              var o = this.getEventSourceById(t);
              if (!o)
                  return console.warn('Could not find an event source with ID "' + t + '"'),
                  null;
              i = o.internalEventSource.sourceId
          }
          var s = jt(e, i, this);
          return s ? (this.dispatch({
              type: "ADD_EVENTS",
              eventStore: ke(s)
          }),
          new ut(this,s.def,s.def.recurringDef ? null : s.instance)) : null
      }
      ,
      e.prototype.getEventById = function(e) {
          var t = this.state.eventStore
            , n = t.defs
            , r = t.instances;
          for (var i in e = String(e),
          n) {
              var o = n[i];
              if (o.publicId === e) {
                  if (o.recurringDef)
                      return new ut(this,o,null);
                  for (var s in r) {
                      var a = r[s];
                      if (a.defId === o.defId)
                          return new ut(this,o,a)
                  }
              }
          }
          return null
      }
      ,
      e.prototype.getEvents = function() {
          var e = this.state.eventStore
            , t = e.defs
            , n = e.instances
            , r = [];
          for (var i in n) {
              var o = n[i]
                , s = t[o.defId];
              r.push(new ut(this,s,o))
          }
          return r
      }
      ,
      e.prototype.removeAllEvents = function() {
          this.dispatch({
              type: "REMOVE_ALL_EVENTS"
          })
      }
      ,
      e.prototype.rerenderEvents = function() {
          this.dispatch({
              type: "RESET_EVENTS"
          })
      }
      ,
      e.prototype.getEventSources = function() {
          var e = this.state.eventSources
            , t = [];
          for (var n in e)
              t.push(new ct(this,e[n]));
          return t
      }
      ,
      e.prototype.getEventSourceById = function(e) {
          var t = this.state.eventSources;
          for (var n in e = String(e),
          t)
              if (t[n].publicId === e)
                  return new ct(this,t[n]);
          return null
      }
      ,
      e.prototype.addEventSource = function(e) {
          if (e instanceof ct)
              return this.state.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                  type: "ADD_EVENT_SOURCES",
                  sources: [e.internalEventSource]
              }),
              e;
          var t = Yn(e, this);
          return t ? (this.dispatch({
              type: "ADD_EVENT_SOURCES",
              sources: [t]
          }),
          new ct(this,t)) : null
      }
      ,
      e.prototype.removeAllEventSources = function() {
          this.dispatch({
              type: "REMOVE_ALL_EVENT_SOURCES"
          })
      }
      ,
      e.prototype.refetchEvents = function() {
          this.dispatch({
              type: "FETCH_EVENT_SOURCES"
          })
      }
      ,
      e.prototype.scrollToTime = function(e) {
          var t = K(e);
          t && this.component.view.scrollToDuration(t)
      }
      ,
      e
  }();
  function Ir(e, t, n) {
      return new fn(this,e,t,n,null)
  }
  function Mr(e, t, n, r, i, o, s) {
      return new Fn({
          calendarSystem: "gregory",
          timeZone: t,
          namedTimeZoneImpl: n,
          locale: e,
          weekNumberCalculation: i,
          firstDay: r,
          weekLabel: o,
          cmdFormatter: s
      })
  }
  function Pr(e) {
      return new (this.pluginSystem.hooks.themeClasses[e.themeSystem] || Cr)(e)
  }
  function kr(e) {
      var t = this.tryRerender.bind(this);
      return null != e && (t = he(t, e)),
      t
  }
  function xr(e) {
      return Ce(e, (function(e) {
          return e.ui
      }
      ))
  }
  function Hr(e, t, n) {
      var r = {
          "": t
      };
      for (var i in e) {
          var o = e[i];
          o.sourceId && n[o.sourceId] && (r[i] = n[o.sourceId])
      }
      return r
  }
  rn.mixInto(Rr);
  var _r = function(e) {
      function t(t, n) {
          var i = e.call(this, r("div", {
              className: "fc-view fc-" + t.type + "-view"
          })) || this;
          return i.renderDatesMem = Xt(i.renderDatesWrap, i.unrenderDatesWrap),
          i.renderBusinessHoursMem = Xt(i.renderBusinessHours, i.unrenderBusinessHours, [i.renderDatesMem]),
          i.renderDateSelectionMem = Xt(i.renderDateSelectionWrap, i.unrenderDateSelectionWrap, [i.renderDatesMem]),
          i.renderEventsMem = Xt(i.renderEvents, i.unrenderEvents, [i.renderDatesMem]),
          i.renderEventSelectionMem = Xt(i.renderEventSelectionWrap, i.unrenderEventSelectionWrap, [i.renderEventsMem]),
          i.renderEventDragMem = Xt(i.renderEventDragWrap, i.unrenderEventDragWrap, [i.renderDatesMem]),
          i.renderEventResizeMem = Xt(i.renderEventResizeWrap, i.unrenderEventResizeWrap, [i.renderDatesMem]),
          i.viewSpec = t,
          i.type = t.type,
          n.appendChild(i.el),
          i.initialize(),
          i
      }
      return Ee(t, e),
      t.prototype.initialize = function() {}
      ,
      Object.defineProperty(t.prototype, "activeStart", {
          get: function() {
              return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.start)
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(t.prototype, "activeEnd", {
          get: function() {
              return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.end)
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(t.prototype, "currentStart", {
          get: function() {
              return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.start)
          },
          enumerable: !0,
          configurable: !0
      }),
      Object.defineProperty(t.prototype, "currentEnd", {
          get: function() {
              return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.end)
          },
          enumerable: !0,
          configurable: !0
      }),
      t.prototype.render = function(e, t) {
          this.renderDatesMem(e.dateProfile),
          this.renderBusinessHoursMem(e.businessHours),
          this.renderDateSelectionMem(e.dateSelection),
          this.renderEventsMem(e.eventStore),
          this.renderEventSelectionMem(e.eventSelection),
          this.renderEventDragMem(e.eventDrag),
          this.renderEventResizeMem(e.eventResize)
      }
      ,
      t.prototype.beforeUpdate = function() {
          this.addScroll(this.queryScroll())
      }
      ,
      t.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderDatesMem.unrender()
      }
      ,
      t.prototype.updateSize = function(e, t, n) {
          var r = this.context.calendar;
          e && this.addScroll(this.queryScroll()),
          (e || r.isViewUpdated || r.isDatesUpdated || r.isEventsUpdated) && this.updateBaseSize(e, t, n)
      }
      ,
      t.prototype.updateBaseSize = function(e, t, n) {}
      ,
      t.prototype.renderDatesWrap = function(e) {
          this.renderDates(e),
          this.addScroll({
              duration: K(this.context.options.scrollTime)
          })
      }
      ,
      t.prototype.unrenderDatesWrap = function() {
          this.stopNowIndicator(),
          this.unrenderDates()
      }
      ,
      t.prototype.renderDates = function(e) {}
      ,
      t.prototype.unrenderDates = function() {}
      ,
      t.prototype.renderBusinessHours = function(e) {}
      ,
      t.prototype.unrenderBusinessHours = function() {}
      ,
      t.prototype.renderDateSelectionWrap = function(e) {
          e && this.renderDateSelection(e)
      }
      ,
      t.prototype.unrenderDateSelectionWrap = function(e) {
          e && this.unrenderDateSelection(e)
      }
      ,
      t.prototype.renderDateSelection = function(e) {}
      ,
      t.prototype.unrenderDateSelection = function(e) {}
      ,
      t.prototype.renderEvents = function(e) {}
      ,
      t.prototype.unrenderEvents = function() {}
      ,
      t.prototype.sliceEvents = function(e, t) {
          var n = this.props;
          return dt(e, n.eventUiBases, n.dateProfile.activeRange, t ? this.context.nextDayThreshold : null).fg
      }
      ,
      t.prototype.renderEventSelectionWrap = function(e) {
          e && this.renderEventSelection(e)
      }
      ,
      t.prototype.unrenderEventSelectionWrap = function(e) {
          e && this.unrenderEventSelection(e)
      }
      ,
      t.prototype.renderEventSelection = function(e) {}
      ,
      t.prototype.unrenderEventSelection = function(e) {}
      ,
      t.prototype.renderEventDragWrap = function(e) {
          e && this.renderEventDrag(e)
      }
      ,
      t.prototype.unrenderEventDragWrap = function(e) {
          e && this.unrenderEventDrag(e)
      }
      ,
      t.prototype.renderEventDrag = function(e) {}
      ,
      t.prototype.unrenderEventDrag = function(e) {}
      ,
      t.prototype.renderEventResizeWrap = function(e) {
          e && this.renderEventResize(e)
      }
      ,
      t.prototype.unrenderEventResizeWrap = function(e) {
          e && this.unrenderEventResize(e)
      }
      ,
      t.prototype.renderEventResize = function(e) {}
      ,
      t.prototype.unrenderEventResize = function(e) {}
      ,
      t.prototype.startNowIndicator = function(e, t) {
          var n, r, i, o = this, s = this.context, a = s.calendar, l = s.dateEnv;
          s.options.nowIndicator && !this.initialNowDate && (n = this.getNowIndicatorUnit(e, t)) && (r = this.updateNowIndicator.bind(this),
          this.initialNowDate = a.getNow(),
          this.initialNowQueriedMs = (new Date).valueOf(),
          i = l.add(l.startOf(this.initialNowDate, n), K(1, n)).valueOf() - this.initialNowDate.valueOf(),
          this.nowIndicatorTimeoutID = setTimeout((function() {
              o.nowIndicatorTimeoutID = null,
              r(),
              i = "second" === n ? 1e3 : 6e4,
              o.nowIndicatorIntervalID = setInterval(r, i)
          }
          ), i))
      }
      ,
      t.prototype.updateNowIndicator = function() {
          this.props.dateProfile && this.initialNowDate && (this.unrenderNowIndicator(),
          this.renderNowIndicator(O(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs)),
          this.isNowIndicatorRendered = !0)
      }
      ,
      t.prototype.stopNowIndicator = function() {
          this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID),
          this.nowIndicatorTimeoutID = null),
          this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID),
          this.nowIndicatorIntervalID = null),
          this.isNowIndicatorRendered && (this.unrenderNowIndicator(),
          this.isNowIndicatorRendered = !1)
      }
      ,
      t.prototype.getNowIndicatorUnit = function(e, t) {}
      ,
      t.prototype.renderNowIndicator = function(e) {}
      ,
      t.prototype.unrenderNowIndicator = function() {}
      ,
      t.prototype.addScroll = function(e, t) {
          t && (e.isForced = t),
          Se(this.queuedScroll || (this.queuedScroll = {}), e)
      }
      ,
      t.prototype.popScroll = function(e) {
          this.applyQueuedScroll(e),
          this.queuedScroll = null
      }
      ,
      t.prototype.applyQueuedScroll = function(e) {
          this.queuedScroll && this.applyScroll(this.queuedScroll, e)
      }
      ,
      t.prototype.queryScroll = function() {
          var e = {};
          return this.props.dateProfile && Se(e, this.queryDateScroll()),
          e
      }
      ,
      t.prototype.applyScroll = function(e, t) {
          var n = e.duration
            , r = e.isForced;
          null == n || r || (delete e.duration,
          this.props.dateProfile && Se(e, this.computeDateScroll(n))),
          this.props.dateProfile && this.applyDateScroll(e)
      }
      ,
      t.prototype.computeDateScroll = function(e) {
          return {}
      }
      ,
      t.prototype.queryDateScroll = function() {
          return {}
      }
      ,
      t.prototype.applyDateScroll = function(e) {}
      ,
      t.prototype.scrollToDuration = function(e) {
          this.applyScroll({
              duration: e
          }, !1)
      }
      ,
      t
  }(vn);
  rn.mixInto(_r),
  _r.prototype.usesMinMaxTime = !1,
  _r.prototype.dateProfileGeneratorClass = $n;
  var Or = function() {
      function e() {
          this.segs = [],
          this.isSizeDirty = !1
      }
      return e.prototype.renderSegs = function(e, t, n) {
          this.context = e,
          this.rangeUpdated(),
          t = this.renderSegEls(t, n),
          this.segs = t,
          this.attachSegs(t, n),
          this.isSizeDirty = !0,
          mt(this.context, this.segs, Boolean(n))
      }
      ,
      e.prototype.unrender = function(e, t, n) {
          yt(this.context, this.segs, Boolean(n)),
          this.detachSegs(this.segs),
          this.segs = []
      }
      ,
      e.prototype.rangeUpdated = function() {
          var e, t, n = this.context.options;
          this.eventTimeFormat = ot(n.eventTimeFormat || this.computeEventTimeFormat(), n.defaultRangeSeparator),
          null == (e = n.displayEventTime) && (e = this.computeDisplayEventTime()),
          null == (t = n.displayEventEnd) && (t = this.computeDisplayEventEnd()),
          this.displayEventTime = e,
          this.displayEventEnd = t
      }
      ,
      e.prototype.renderSegEls = function(e, t) {
          var n, r = "";
          if (e.length) {
              for (n = 0; n < e.length; n++)
                  r += this.renderSegHtml(e[n], t);
              o(r).forEach((function(t, n) {
                  var r = e[n];
                  t && (r.el = t)
              }
              )),
              e = pt(this.context, e, Boolean(t))
          }
          return e
      }
      ,
      e.prototype.getSegClasses = function(e, t, n, r) {
          var i = ["fc-event", e.isStart ? "fc-start" : "fc-not-start", e.isEnd ? "fc-end" : "fc-not-end"].concat(e.eventRange.ui.classNames);
          return t && i.push("fc-draggable"),
          n && i.push("fc-resizable"),
          r && (i.push("fc-mirror"),
          r.isDragging && i.push("fc-dragging"),
          r.isResizing && i.push("fc-resizing")),
          i
      }
      ,
      e.prototype.getTimeText = function(e, t, n) {
          var r = e.def
            , i = e.instance;
          return this._getTimeText(i.range.start, r.hasEnd ? i.range.end : null, r.allDay, t, n, i.forcedStartTzo, i.forcedEndTzo)
      }
      ,
      e.prototype._getTimeText = function(e, t, n, r, i, o, s) {
          var a = this.context.dateEnv;
          return null == r && (r = this.eventTimeFormat),
          null == i && (i = this.displayEventEnd),
          this.displayEventTime && !n ? i && t ? a.formatRange(e, t, r, {
              forcedStartTzo: o,
              forcedEndTzo: s
          }) : a.format(e, r, {
              forcedTzo: o
          }) : ""
      }
      ,
      e.prototype.computeEventTimeFormat = function() {
          return {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0
          }
      }
      ,
      e.prototype.computeDisplayEventTime = function() {
          return !0
      }
      ,
      e.prototype.computeDisplayEventEnd = function() {
          return !0
      }
      ,
      e.prototype.getSkinCss = function(e) {
          return {
              "background-color": e.backgroundColor,
              "border-color": e.borderColor,
              color: e.textColor
          }
      }
      ,
      e.prototype.sortEventSegs = function(e) {
          var t = this.context.eventOrderSpecs
            , n = e.map(Nr);
          return n.sort((function(e, n) {
              return oe(e, n, t)
          }
          )),
          n.map((function(e) {
              return e._seg
          }
          ))
      }
      ,
      e.prototype.computeSizes = function(e) {
          (e || this.isSizeDirty) && this.computeSegSizes(this.segs)
      }
      ,
      e.prototype.assignSizes = function(e) {
          (e || this.isSizeDirty) && (this.assignSegSizes(this.segs),
          this.isSizeDirty = !1)
      }
      ,
      e.prototype.computeSegSizes = function(e) {}
      ,
      e.prototype.assignSegSizes = function(e) {}
      ,
      e.prototype.hideByHash = function(e) {
          if (e)
              for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t];
                  e[r.eventRange.instance.instanceId] && (r.el.style.visibility = "hidden")
              }
      }
      ,
      e.prototype.showByHash = function(e) {
          if (e)
              for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t];
                  e[r.eventRange.instance.instanceId] && (r.el.style.visibility = "")
              }
      }
      ,
      e.prototype.selectByInstanceId = function(e) {
          if (e)
              for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t]
                    , i = r.eventRange.instance;
                  i && i.instanceId === e && r.el && r.el.classList.add("fc-selected")
              }
      }
      ,
      e.prototype.unselectByInstanceId = function(e) {
          if (e)
              for (var t = 0, n = this.segs; t < n.length; t++) {
                  var r = n[t];
                  r.el && r.el.classList.remove("fc-selected")
              }
      }
      ,
      e
  }();
  function Nr(e) {
      var t = e.eventRange.def
        , n = e.eventRange.instance.range
        , r = n.start ? n.start.valueOf() : 0
        , i = n.end ? n.end.valueOf() : 0;
      return Se({}, t.extendedProps, t, {
          id: t.publicId,
          start: r,
          end: i,
          duration: i - r,
          allDay: Number(t.allDay),
          _seg: e
      })
  }
  var zr = function() {
      function e() {
          this.fillSegTag = "div",
          this.dirtySizeFlags = {},
          this.containerElsByType = {},
          this.segsByType = {}
      }
      return e.prototype.getSegsByType = function(e) {
          return this.segsByType[e] || []
      }
      ,
      e.prototype.renderSegs = function(e, t, n) {
          var r;
          this.context = t;
          var i = this.renderSegEls(e, n)
            , o = this.attachSegs(e, i);
          o && (r = this.containerElsByType[e] || (this.containerElsByType[e] = [])).push.apply(r, o),
          this.segsByType[e] = i,
          "bgEvent" === e && mt(t, i, !1),
          this.dirtySizeFlags[e] = !0
      }
      ,
      e.prototype.unrender = function(e, t) {
          var n = this.segsByType[e];
          n && ("bgEvent" === e && yt(t, n, !1),
          this.detachSegs(e, n))
      }
      ,
      e.prototype.renderSegEls = function(e, t) {
          var n, r = this, i = "";
          if (t.length) {
              for (n = 0; n < t.length; n++)
                  i += this.renderSegHtml(e, t[n]);
              o(i).forEach((function(e, n) {
                  var r = t[n];
                  e && (r.el = e)
              }
              )),
              "bgEvent" === e && (t = pt(this.context, t, !1)),
              t = t.filter((function(e) {
                  return f(e.el, r.fillSegTag)
              }
              ))
          }
          return t
      }
      ,
      e.prototype.renderSegHtml = function(e, t) {
          var n = null
            , r = [];
          return "highlight" !== e && "businessHours" !== e && (n = {
              "background-color": t.eventRange.ui.backgroundColor
          }),
          "highlight" !== e && (r = r.concat(t.eventRange.ui.classNames)),
          "businessHours" === e ? r.push("fc-bgevent") : r.push("fc-" + e.toLowerCase()),
          "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (n ? ' style="' + _t(n) + '"' : "") + "></" + this.fillSegTag + ">"
      }
      ,
      e.prototype.detachSegs = function(e, t) {
          var n = this.containerElsByType[e];
          n && (n.forEach(u),
          delete this.containerElsByType[e])
      }
      ,
      e.prototype.computeSizes = function(e) {
          for (var t in this.segsByType)
              (e || this.dirtySizeFlags[t]) && this.computeSegSizes(this.segsByType[t])
      }
      ,
      e.prototype.assignSizes = function(e) {
          for (var t in this.segsByType)
              (e || this.dirtySizeFlags[t]) && this.assignSegSizes(this.segsByType[t]);
          this.dirtySizeFlags = {}
      }
      ,
      e.prototype.computeSegSizes = function(e) {}
      ,
      e.prototype.assignSegSizes = function(e) {}
      ,
      e
  }()
    , Lr = function(e) {
      this.timeZoneName = e
  }
    , Vr = function() {
      function e(e) {
          this.emitter = new rn
      }
      return e.prototype.destroy = function() {}
      ,
      e.prototype.setMirrorIsVisible = function(e) {}
      ,
      e.prototype.setMirrorNeedsRevert = function(e) {}
      ,
      e.prototype.setAutoScrollEnabled = function(e) {}
      ,
      e
  }();
  function Br(e) {
      var t = On(e.locale || "en", _n([]).map);
      return e = Se({
          timeZone: Mn.timeZone,
          calendarSystem: "gregory"
      }, e, {
          locale: t
      }),
      new Fn(e)
  }
  var Ar = {
      startTime: K,
      duration: K,
      create: Boolean,
      sourceId: String
  }
    , Ur = {
      create: !0
  };
  function Fr(e, t) {
      return !e || t > 10 ? {
          weekday: "short"
      } : t > 1 ? {
          weekday: "short",
          month: "numeric",
          day: "numeric",
          omitCommas: !0
      } : {
          weekday: "long"
      }
  }
  function Gr(e, t, n, r, i, o, s, a) {
      var l, c = o.dateEnv, u = o.theme, d = o.options, p = je(t.activeRange, e), h = ["fc-day-header", u.getClass("widgetHeader")];
      return l = "function" == typeof d.columnHeaderHtml ? d.columnHeaderHtml(c.toDate(e)) : "function" == typeof d.columnHeaderText ? Ht(d.columnHeaderText(c.toDate(e))) : Ht(c.format(e, i)),
      n ? h = h.concat(en(e, t, o, !0)) : h.push("fc-" + H[e.getUTCDay()]),
      '<th class="' + h.join(" ") + '"' + (p && n ? ' data-date="' + c.formatIso(e, {
          omitTime: !0
      }) + '"' : "") + (s > 1 ? ' colspan="' + s + '"' : "") + (a ? " " + a : "") + ">" + (p ? $t(d, c, {
          date: e,
          forceOff: !n || 1 === r
      }, l) : l) + "</th>"
  }
  var jr = function(e) {
      function t(t) {
          var n = e.call(this) || this;
          return n.renderSkeleton = Xt(n._renderSkeleton, n._unrenderSkeleton),
          n.parentEl = t,
          n
      }
      return Ee(t, e),
      t.prototype.render = function(e, t) {
          var n = e.dates
            , r = e.datesRepDistinctDays
            , i = [];
          this.renderSkeleton(t),
          e.renderIntroHtml && i.push(e.renderIntroHtml());
          for (var o = ot(t.options.columnHeaderFormat || Fr(r, n.length)), s = 0, a = n; s < a.length; s++) {
              var l = a[s];
              i.push(Gr(l, e.dateProfile, r, n.length, o, t))
          }
          t.isRtl && i.reverse(),
          this.thead.innerHTML = "<tr>" + i.join("") + "</tr>"
      }
      ,
      t.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderSkeleton.unrender()
      }
      ,
      t.prototype._renderSkeleton = function(e) {
          var t = e.theme
            , n = this.parentEl;
          n.innerHTML = "",
          n.appendChild(this.el = i('<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead></thead></table></div>')),
          this.thead = this.el.querySelector("thead")
      }
      ,
      t.prototype._unrenderSkeleton = function() {
          u(this.el)
      }
      ,
      t
  }(gn)
    , Wr = function() {
      function e(e, t) {
          for (var n = e.start, r = e.end, i = [], o = [], s = -1; n < r; )
              t.isHiddenDay(n) ? i.push(s + .5) : (s++,
              i.push(s),
              o.push(n)),
              n = _(n, 1);
          this.dates = o,
          this.indices = i,
          this.cnt = o.length
      }
      return e.prototype.sliceRange = function(e) {
          var t = this.getDateDayIndex(e.start)
            , n = this.getDateDayIndex(_(e.end, -1))
            , r = Math.max(0, t)
            , i = Math.min(this.cnt - 1, n);
          return (r = Math.ceil(r)) <= (i = Math.floor(i)) ? {
              firstIndex: r,
              lastIndex: i,
              isStart: t === r,
              isEnd: n === i
          } : null
      }
      ,
      e.prototype.getDateDayIndex = function(e) {
          var t = this.indices
            , n = Math.floor(N(this.dates[0], e));
          return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
      }
      ,
      e
  }()
    , Yr = function() {
      function e(e, t) {
          var n, r, i, o = e.dates;
          if (t) {
              for (r = o[0].getUTCDay(),
              n = 1; n < o.length && o[n].getUTCDay() !== r; n++)
                  ;
              i = Math.ceil(o.length / n)
          } else
              i = 1,
              n = o.length;
          this.rowCnt = i,
          this.colCnt = n,
          this.daySeries = e,
          this.cells = this.buildCells(),
          this.headerDates = this.buildHeaderDates()
      }
      return e.prototype.buildCells = function() {
          for (var e = [], t = 0; t < this.rowCnt; t++) {
              for (var n = [], r = 0; r < this.colCnt; r++)
                  n.push(this.buildCell(t, r));
              e.push(n)
          }
          return e
      }
      ,
      e.prototype.buildCell = function(e, t) {
          return {
              date: this.daySeries.dates[e * this.colCnt + t]
          }
      }
      ,
      e.prototype.buildHeaderDates = function() {
          for (var e = [], t = 0; t < this.colCnt; t++)
              e.push(this.cells[0][t].date);
          return e
      }
      ,
      e.prototype.sliceRange = function(e) {
          var t = this.colCnt
            , n = this.daySeries.sliceRange(e)
            , r = [];
          if (n)
              for (var i = n.firstIndex, o = n.lastIndex, s = i; s <= o; ) {
                  var a = Math.floor(s / t)
                    , l = Math.min((a + 1) * t, o + 1);
                  r.push({
                      row: a,
                      firstCol: s % t,
                      lastCol: (l - 1) % t,
                      isStart: n.isStart && s === i,
                      isEnd: n.isEnd && l - 1 === o
                  }),
                  s = l
              }
          return r
      }
      ,
      e
  }()
    , qr = function() {
      function e() {
          this.sliceBusinessHours = Ye(this._sliceBusinessHours),
          this.sliceDateSelection = Ye(this._sliceDateSpan),
          this.sliceEventStore = Ye(this._sliceEventStore),
          this.sliceEventDrag = Ye(this._sliceInteraction),
          this.sliceEventResize = Ye(this._sliceInteraction)
      }
      return e.prototype.sliceProps = function(e, t, n, r, i) {
          for (var o = [], s = 5; s < arguments.length; s++)
              o[s - 5] = arguments[s];
          var a = e.eventUiBases
            , l = this.sliceEventStore.apply(this, [e.eventStore, a, t, n, i].concat(o));
          return {
              dateSelectionSegs: this.sliceDateSelection.apply(this, [e.dateSelection, a, i].concat(o)),
              businessHourSegs: this.sliceBusinessHours.apply(this, [e.businessHours, t, n, r, i].concat(o)),
              fgEventSegs: l.fg,
              bgEventSegs: l.bg,
              eventDrag: this.sliceEventDrag.apply(this, [e.eventDrag, a, t, n, i].concat(o)),
              eventResize: this.sliceEventResize.apply(this, [e.eventResize, a, t, n, i].concat(o)),
              eventSelection: e.eventSelection
          }
      }
      ,
      e.prototype.sliceNowDate = function(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
          return this._sliceDateSpan.apply(this, [{
              range: {
                  start: e,
                  end: O(e, 1)
              },
              allDay: !1
          }, {}, t].concat(n))
      }
      ,
      e.prototype._sliceBusinessHours = function(e, t, n, r, i) {
          for (var o = [], s = 5; s < arguments.length; s++)
              o[s - 5] = arguments[s];
          return e ? this._sliceEventStore.apply(this, [xe(e, Zr(t, Boolean(n)), r), {}, t, n, i].concat(o)).bg : []
      }
      ,
      e.prototype._sliceEventStore = function(e, t, n, r, i) {
          for (var o = [], s = 5; s < arguments.length; s++)
              o[s - 5] = arguments[s];
          if (e) {
              var a = dt(e, t, Zr(n, Boolean(r)), r);
              return {
                  bg: this.sliceEventRanges(a.bg, i, o),
                  fg: this.sliceEventRanges(a.fg, i, o)
              }
          }
          return {
              bg: [],
              fg: []
          }
      }
      ,
      e.prototype._sliceInteraction = function(e, t, n, r, i) {
          for (var o = [], s = 5; s < arguments.length; s++)
              o[s - 5] = arguments[s];
          if (!e)
              return null;
          var a = dt(e.mutatedEvents, t, Zr(n, Boolean(r)), r);
          return {
              segs: this.sliceEventRanges(a.fg, i, o),
              affectedInstances: e.affectedEvents.instances,
              isEvent: e.isEvent,
              sourceSeg: e.origSeg
          }
      }
      ,
      e.prototype._sliceDateSpan = function(e, t, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
          if (!e)
              return [];
          for (var o = cr(e, t, n.context.calendar), s = this.sliceRange.apply(this, [e.range].concat(r)), a = 0, l = s; a < l.length; a++) {
              var c = l[a];
              c.component = n,
              c.eventRange = o
          }
          return s
      }
      ,
      e.prototype.sliceEventRanges = function(e, t, n) {
          for (var r = [], i = 0, o = e; i < o.length; i++) {
              var s = o[i];
              r.push.apply(r, this.sliceEventRange(s, t, n))
          }
          return r
      }
      ,
      e.prototype.sliceEventRange = function(e, t, n) {
          for (var r = this.sliceRange.apply(this, [e.range].concat(n)), i = 0, o = r; i < o.length; i++) {
              var s = o[i];
              s.component = t,
              s.eventRange = e,
              s.isStart = e.isStart && s.isStart,
              s.isEnd = e.isEnd && s.isEnd
          }
          return r
      }
      ,
      e
  }();
  function Zr(e, t) {
      var n = e.activeRange;
      return t ? n : {
          start: O(n.start, e.minTime.milliseconds),
          end: O(n.end, e.maxTime.milliseconds - 864e5)
      }
  }
  e.Calendar = Rr,
  e.Component = gn,
  e.ComponentContext = fn,
  e.DateComponent = vn,
  e.DateEnv = Fn,
  e.DateProfileGenerator = $n,
  e.DayHeader = jr,
  e.DaySeries = Wr,
  e.DayTable = Yr,
  e.ElementDragging = Vr,
  e.ElementScrollController = cn,
  e.EmitterMixin = rn,
  e.EventApi = ut,
  e.FgEventRenderer = Or,
  e.FillRenderer = zr,
  e.Interaction = br,
  e.Mixin = nn,
  e.NamedTimeZoneImpl = Lr,
  e.PositionCache = an,
  e.ScrollComponent = dn,
  e.ScrollController = ln,
  e.Slicer = qr,
  e.Splitter = Jt,
  e.Theme = pn,
  e.View = _r,
  e.WindowScrollController = un,
  e.addDays = _,
  e.addDurations = function(e, t) {
      return {
          years: e.years + t.years,
          months: e.months + t.months,
          days: e.days + t.days,
          milliseconds: e.milliseconds + t.milliseconds
      }
  }
  ,
  e.addMs = O,
  e.addWeeks = function(e, t) {
      var n = j(e);
      return n[2] += 7 * t,
      W(n)
  }
  ,
  e.allowContextMenu = function(e) {
      e.removeEventListener("contextmenu", P)
  }
  ,
  e.allowSelection = function(e) {
      e.classList.remove("fc-unselectable"),
      e.removeEventListener("selectstart", P)
  }
  ,
  e.appendToElement = a,
  e.applyAll = de,
  e.applyMutationToEventStore = Et,
  e.applyStyle = m,
  e.applyStyleProp = y,
  e.asRoughMinutes = function(e) {
      return te(e) / 6e4
  }
  ,
  e.asRoughMs = te,
  e.asRoughSeconds = function(e) {
      return te(e) / 1e3
  }
  ,
  e.buildGotoAnchorHtml = $t,
  e.buildSegCompareObj = Nr,
  e.capitaliseFirstLetter = le,
  e.combineEventUis = Bt,
  e.compareByFieldSpec = se,
  e.compareByFieldSpecs = oe,
  e.compareNumbers = function(e, t) {
      return e - t
  }
  ,
  e.compensateScroll = function(e, t) {
      t.left && m(e, {
          borderLeftWidth: 1,
          marginLeft: t.left - 1
      }),
      t.right && m(e, {
          borderRightWidth: 1,
          marginRight: t.right - 1
      })
  }
  ,
  e.computeClippingRect = function(e) {
      return M(e).map((function(e) {
          return T(e)
      }
      )).concat({
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight
      }).reduce((function(e, t) {
          return E(e, t) || t
      }
      ))
  }
  ,
  e.computeEdges = w,
  e.computeEventDraggable = function(e, t, n) {
      for (var r = e.calendar, i = e.view, o = r.pluginSystem.hooks.isDraggableTransformers, s = n.startEditable, a = 0, l = o; a < l.length; a++) {
          s = (0,
          l[a])(s, t, n, i)
      }
      return s
  }
  ,
  e.computeEventEndResizable = function(e, t, n) {
      return n.durationEditable
  }
  ,
  e.computeEventStartResizable = function(e, t, n) {
      return n.durationEditable && e.options.eventResizableFromStart
  }
  ,
  e.computeFallbackHeaderFormat = Fr,
  e.computeHeightAndMargins = R,
  e.computeInnerRect = T,
  e.computeRect = C,
  e.computeVisibleDayRange = ve,
  e.config = {},
  e.constrainPoint = function(e, t) {
      return {
          left: Math.min(Math.max(e.left, t.left), t.right),
          top: Math.min(Math.max(e.top, t.top), t.bottom)
      }
  }
  ,
  e.createDuration = K,
  e.createElement = r,
  e.createEmptyEventStore = Oe,
  e.createEventInstance = Yt,
  e.createFormatter = ot,
  e.createPlugin = yn,
  e.cssToStr = _t,
  e.debounce = he,
  e.diffDates = me,
  e.diffDayAndTime = z,
  e.diffDays = N,
  e.diffPoints = function(e, t) {
      return {
          left: e.left - t.left,
          top: e.top - t.top
      }
  }
  ,
  e.diffWeeks = function(e, t) {
      return N(e, t) / 7
  }
  ,
  e.diffWholeDays = V,
  e.diffWholeWeeks = L,
  e.disableCursor = function() {
      document.body.classList.add("fc-not-allowed")
  }
  ,
  e.distributeHeight = function(e, t, n) {
      var r = Math.floor(t / e.length)
        , i = Math.floor(t - r * (e.length - 1))
        , o = []
        , s = []
        , a = []
        , l = 0;
      re(e),
      e.forEach((function(t, n) {
          var c = n === e.length - 1 ? i : r
            , u = t.getBoundingClientRect().height
            , d = u + I(t);
          d < c ? (o.push(t),
          s.push(d),
          a.push(u)) : l += d
      }
      )),
      n && (t -= l,
      r = Math.floor(t / o.length),
      i = Math.floor(t - r * (o.length - 1))),
      o.forEach((function(e, t) {
          var n = t === o.length - 1 ? i : r
            , l = s[t]
            , c = n - (l - a[t]);
          l < n && (e.style.height = c + "px")
      }
      ))
  }
  ,
  e.elementClosest = h,
  e.elementMatches = f,
  e.enableCursor = function() {
      document.body.classList.remove("fc-not-allowed")
  }
  ,
  e.eventTupleToStore = ke,
  e.filterEventStoreDefs = ze,
  e.filterHash = Te,
  e.findChildren = function(e, t) {
      for (var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0; i < n.length; i++)
          for (var o = n[i].children, s = 0; s < o.length; s++) {
              var a = o[s];
              t && !f(a, t) || r.push(a)
          }
      return r
  }
  ,
  e.findElements = g,
  e.flexibleCompare = ae,
  e.forceClassName = function(e, t, n) {
      n ? e.classList.add(t) : e.classList.remove(t)
  }
  ,
  e.formatDate = function(e, t) {
      void 0 === t && (t = {});
      var n = Br(t)
        , r = ot(t)
        , i = n.createMarkerMeta(e);
      return i ? n.format(i.marker, r, {
          forcedTzo: i.forcedTzo
      }) : ""
  }
  ,
  e.formatIsoTimeString = function(e) {
      return ce(e.getUTCHours(), 2) + ":" + ce(e.getUTCMinutes(), 2) + ":" + ce(e.getUTCSeconds(), 2)
  }
  ,
  e.formatRange = function(e, t, n) {
      var r = Br("object" == typeof n && n ? n : {})
        , i = ot(n, Mn.defaultRangeSeparator)
        , o = r.createMarkerMeta(e)
        , s = r.createMarkerMeta(t);
      return o && s ? r.formatRange(o.marker, s.marker, i, {
          forcedStartTzo: o.forcedTzo,
          forcedEndTzo: s.forcedTzo,
          isEndExclusive: n.isEndExclusive
      }) : ""
  }
  ,
  e.getAllDayHtml = function(e) {
      return e.allDayHtml || Ht(e.allDayText)
  }
  ,
  e.getClippingParents = M,
  e.getDayClasses = en,
  e.getElSeg = ft,
  e.getRectCenter = function(e) {
      return {
          left: (e.left + e.right) / 2,
          top: (e.top + e.bottom) / 2
      }
  }
  ,
  e.getRelevantEvents = He,
  e.globalDefaults = Mn,
  e.greatestDurationDenominator = ne,
  e.hasBgRendering = function(e) {
      return "background" === e.rendering || "inverse-background" === e.rendering
  }
  ,
  e.htmlEscape = Ht,
  e.htmlToElement = i,
  e.insertAfterElement = function(e, t) {
      for (var n = c(t), r = e.nextSibling || null, i = 0; i < n.length; i++)
          e.parentNode.insertBefore(n[i], r)
  }
  ,
  e.interactionSettingsStore = Dr,
  e.interactionSettingsToStore = function(e) {
      var t;
      return (t = {})[e.component.uid] = e,
      t
  }
  ,
  e.intersectRanges = Ae,
  e.intersectRects = E,
  e.isArraysEqual = We,
  e.isDateSpansEqual = function(e, t) {
      return Ue(e.range, t.range) && e.allDay === t.allDay && function(e, t) {
          for (var n in t)
              if ("range" !== n && "allDay" !== n && e[n] !== t[n])
                  return !1;
          for (var n in e)
              if (!(n in t))
                  return !1;
          return !0
      }(e, t)
  }
  ,
  e.isInt = ue,
  e.isInteractionValid = Ct,
  e.isMultiDayRange = function(e) {
      var t = ve(e);
      return N(t.start, t.end) > 1
  }
  ,
  e.isPropsEqual = Me,
  e.isPropsValid = It,
  e.isSingleDay = function(e) {
      return 0 === e.years && 0 === e.months && 1 === e.days && 0 === e.milliseconds
  }
  ,
  e.isValidDate = Y,
  e.listenBySelector = k,
  e.mapHash = Ce,
  e.matchCellWidths = function(e) {
      var t = 0;
      return e.forEach((function(e) {
          var n = e.firstChild;
          if (n instanceof HTMLElement) {
              var r = n.getBoundingClientRect().width;
              r > t && (t = r)
          }
      }
      )),
      t++,
      e.forEach((function(e) {
          e.style.width = t + "px"
      }
      )),
      t
  }
  ,
  e.memoize = Ye,
  e.memoizeOutput = qe,
  e.memoizeRendering = Xt,
  e.mergeEventStores = Ne,
  e.multiplyDuration = function(e, t) {
      return {
          years: e.years * t,
          months: e.months * t,
          days: e.days * t,
          milliseconds: e.milliseconds * t
      }
  }
  ,
  e.padStart = ce,
  e.parseBusinessHours = Zt,
  e.parseDragMeta = function(e) {
      var t = {}
        , n = fe(e, Ar, Ur, t);
      return n.leftoverProps = t,
      n
  }
  ,
  e.parseEventDef = Wt,
  e.parseFieldSpecs = ie,
  e.parseMarker = Un,
  e.pointInsideRect = function(e, t) {
      return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
  }
  ,
  e.prependToElement = l,
  e.preventContextMenu = function(e) {
      e.addEventListener("contextmenu", P)
  }
  ,
  e.preventDefault = P,
  e.preventSelection = function(e) {
      e.classList.add("fc-unselectable"),
      e.addEventListener("selectstart", P)
  }
  ,
  e.processScopedUiProps = Lt,
  e.rangeContainsMarker = je,
  e.rangeContainsRange = Ge,
  e.rangesEqual = Ue,
  e.rangesIntersect = Fe,
  e.refineProps = fe,
  e.removeElement = u,
  e.removeExact = function(e, t) {
      for (var n = 0, r = 0; r < e.length; )
          e[r] === t ? (e.splice(r, 1),
          n++) : r++;
      return n
  }
  ,
  e.renderDateCell = Gr,
  e.requestJson = Dn,
  e.sliceEventStore = dt,
  e.startOfDay = B,
  e.subtractInnerElHeight = function(e, t) {
      var n = {
          position: "relative",
          left: -1
      };
      m(e, n),
      m(t, n);
      var r = e.getBoundingClientRect().height - t.getBoundingClientRect().height
        , i = {
          position: "",
          left: ""
      };
      return m(e, i),
      m(t, i),
      r
  }
  ,
  e.translateRect = function(e, t, n) {
      return {
          left: e.left + t,
          right: e.right + t,
          top: e.top + n,
          bottom: e.bottom + n
      }
  }
  ,
  e.uncompensateScroll = function(e) {
      m(e, {
          marginLeft: "",
          marginRight: "",
          borderLeftWidth: "",
          borderRightWidth: ""
      })
  }
  ,
  e.undistributeHeight = re,
  e.unpromisify = tn,
  e.version = "4.4.2",
  e.whenTransitionDone = function(e, t) {
      var n = function(r) {
          t(r),
          x.forEach((function(t) {
              e.removeEventListener(t, n)
          }
          ))
      };
      x.forEach((function(t) {
          e.addEventListener(t, n)
      }
      ))
  }
  ,
  e.wholeDivideDurations = function(e, t) {
      for (var n = null, r = 0; r < Z.length; r++) {
          var i = Z[r];
          if (t[i]) {
              var o = e[i] / t[i];
              if (!ue(o) || null !== n && n !== o)
                  return null;
              n = o
          } else if (e[i])
              return null
      }
      return n
  }
  ,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}
)),
/*!
FullCalendar Day Grid Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarDayGrid = {}, e.FullCalendar)
}(this, (function(e, t) {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
      }instanceof Array && function(e, t) {
          e.__proto__ = t
      }
      || function(e, t) {
          for (var n in t)
              t.hasOwnProperty(n) && (e[n] = t[n])
      }
      )(e, t)
  };
  function r(e, t) {
      function r() {
          this.constructor = e
      }
      n(e, t),
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
      new r)
  }
  var i = function() {
      return (i = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n])
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
      }
      ).apply(this, arguments)
  }
    , o = function(e) {
      function n() {
          return null !== e && e.apply(this, arguments) || this
      }
      return r(n, e),
      n.prototype.buildRenderRange = function(n, r, i) {
          var o, s = this.dateEnv, a = e.prototype.buildRenderRange.call(this, n, r, i), l = a.start, c = a.end;
          if (/^(year|month)$/.test(r) && (l = s.startOfWeek(l),
          (o = s.startOfWeek(c)).valueOf() !== c.valueOf() && (c = t.addWeeks(o, 1))),
          this.options.monthMode && this.options.fixedWeekCount) {
              var u = Math.ceil(t.diffWeeks(l, c));
              c = t.addWeeks(c, 6 - u)
          }
          return {
              start: l,
              end: c
          }
      }
      ,
      n
  }(t.DateProfileGenerator)
    , s = function() {
      function e(e) {
          var t = this;
          this.isHidden = !0,
          this.margin = 10,
          this.documentMousedown = function(e) {
              t.el && !t.el.contains(e.target) && t.hide()
          }
          ,
          this.options = e
      }
      return e.prototype.show = function() {
          this.isHidden && (this.el || this.render(),
          this.el.style.display = "",
          this.position(),
          this.isHidden = !1,
          this.trigger("show"))
      }
      ,
      e.prototype.hide = function() {
          this.isHidden || (this.el.style.display = "none",
          this.isHidden = !0,
          this.trigger("hide"))
      }
      ,
      e.prototype.render = function() {
          var e = this
            , n = this.options
            , r = this.el = t.createElement("div", {
              className: "fc-popover " + (n.className || ""),
              style: {
                  top: "0",
                  left: "0"
              }
          });
          "function" == typeof n.content && n.content(r),
          n.parentEl.appendChild(r),
          t.listenBySelector(r, "click", ".fc-close", (function(t) {
              e.hide()
          }
          )),
          n.autoHide && document.addEventListener("mousedown", this.documentMousedown)
      }
      ,
      e.prototype.destroy = function() {
          this.hide(),
          this.el && (t.removeElement(this.el),
          this.el = null),
          document.removeEventListener("mousedown", this.documentMousedown)
      }
      ,
      e.prototype.position = function() {
          var e, n, r = this.options, i = this.el, o = i.getBoundingClientRect(), s = t.computeRect(i.offsetParent), a = t.computeClippingRect(r.parentEl);
          e = r.top || 0,
          n = void 0 !== r.left ? r.left : void 0 !== r.right ? r.right - o.width : 0,
          e = Math.min(e, a.bottom - o.height - this.margin),
          e = Math.max(e, a.top + this.margin),
          n = Math.min(n, a.right - o.width - this.margin),
          n = Math.max(n, a.left + this.margin),
          t.applyStyle(i, {
              top: e - s.top,
              left: n - s.left
          })
      }
      ,
      e.prototype.trigger = function(e) {
          this.options[e] && this.options[e].apply(this, Array.prototype.slice.call(arguments, 1))
      }
      ,
      e
  }()
    , a = function(e) {
      function n() {
          return null !== e && e.apply(this, arguments) || this
      }
      return r(n, e),
      n.prototype.renderSegHtml = function(e, n) {
          var r, i, o = this.context, s = e.eventRange, a = s.def, l = s.ui, c = a.allDay, u = t.computeEventDraggable(o, a, l), d = c && e.isStart && t.computeEventStartResizable(o, a, l), p = c && e.isEnd && t.computeEventEndResizable(o, a, l), h = this.getSegClasses(e, u, d || p, n), f = t.cssToStr(this.getSkinCss(l)), g = "";
          return h.unshift("fc-day-grid-event", "fc-h-event"),
          e.isStart && (r = this.getTimeText(s)) && (g = '<span class="fc-time">' + t.htmlEscape(r) + "</span>"),
          i = '<span class="fc-title">' + (t.htmlEscape(a.title || "") || "&nbsp;") + "</span>",
          '<a class="' + h.join(" ") + '"' + (a.url ? ' href="' + t.htmlEscape(a.url) + '"' : "") + (f ? ' style="' + f + '"' : "") + '><div class="fc-content">' + ("rtl" === o.options.dir ? i + " " + g : g + " " + i) + "</div>" + (d ? '<div class="fc-resizer fc-start-resizer"></div>' : "") + (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") + "</a>"
      }
      ,
      n.prototype.computeEventTimeFormat = function() {
          return {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "narrow"
          }
      }
      ,
      n.prototype.computeDisplayEventEnd = function() {
          return !1
      }
      ,
      n
  }(t.FgEventRenderer)
    , l = function(e) {
      function n(t) {
          var n = e.call(this) || this;
          return n.dayGrid = t,
          n
      }
      return r(n, e),
      n.prototype.attachSegs = function(e, t) {
          var n = this.rowStructs = this.renderSegRows(e);
          this.dayGrid.rowEls.forEach((function(e, t) {
              e.querySelector(".fc-content-skeleton > table").appendChild(n[t].tbodyEl)
          }
          )),
          t || this.dayGrid.removeSegPopover()
      }
      ,
      n.prototype.detachSegs = function() {
          for (var e, n = this.rowStructs || []; e = n.pop(); )
              t.removeElement(e.tbodyEl);
          this.rowStructs = null
      }
      ,
      n.prototype.renderSegRows = function(e) {
          var t, n, r = [];
          for (t = this.groupSegRows(e),
          n = 0; n < t.length; n++)
              r.push(this.renderSegRow(n, t[n]));
          return r
      }
      ,
      n.prototype.renderSegRow = function(e, n) {
          var r, i, o, s, a, l, c, u = this.context.isRtl, d = this.dayGrid, p = d.colCnt, h = this.buildSegLevels(n), f = Math.max(1, h.length), g = document.createElement("tbody"), v = [], m = [], y = [];
          function E(e) {
              for (; o < e; )
                  (c = (y[r - 1] || [])[o]) ? c.rowSpan = (c.rowSpan || 1) + 1 : (c = document.createElement("td"),
                  s.appendChild(c)),
                  m[r][o] = c,
                  y[r][o] = c,
                  o++
          }
          for (r = 0; r < f; r++) {
              if (i = h[r],
              o = 0,
              s = document.createElement("tr"),
              v.push([]),
              m.push([]),
              y.push([]),
              i)
                  for (a = 0; a < i.length; a++) {
                      l = i[a];
                      var S = u ? p - 1 - l.lastCol : l.firstCol
                        , b = u ? p - 1 - l.firstCol : l.lastCol;
                      for (E(S),
                      c = t.createElement("td", {
                          className: "fc-event-container"
                      }, l.el),
                      S !== b ? c.colSpan = b - S + 1 : y[r][o] = c; o <= b; )
                          m[r][o] = c,
                          v[r][o] = l,
                          o++;
                      s.appendChild(c)
                  }
              E(p);
              var D = d.renderProps.renderIntroHtml();
              D && (u ? t.appendToElement(s, D) : t.prependToElement(s, D)),
              g.appendChild(s)
          }
          return {
              row: e,
              tbodyEl: g,
              cellMatrix: m,
              segMatrix: v,
              segLevels: h,
              segs: n
          }
      }
      ,
      n.prototype.buildSegLevels = function(e) {
          var t, n, r, i = this.context.isRtl, o = this.dayGrid.colCnt, s = [];
          for (e = this.sortEventSegs(e),
          t = 0; t < e.length; t++) {
              for (n = e[t],
              r = 0; r < s.length && c(n, s[r]); r++)
                  ;
              n.level = r,
              n.leftCol = i ? o - 1 - n.lastCol : n.firstCol,
              n.rightCol = i ? o - 1 - n.firstCol : n.lastCol,
              (s[r] || (s[r] = [])).push(n)
          }
          for (r = 0; r < s.length; r++)
              s[r].sort(u);
          return s
      }
      ,
      n.prototype.groupSegRows = function(e) {
          var t, n = [];
          for (t = 0; t < this.dayGrid.rowCnt; t++)
              n.push([]);
          for (t = 0; t < e.length; t++)
              n[e[t].row].push(e[t]);
          return n
      }
      ,
      n.prototype.computeDisplayEventEnd = function() {
          return 1 === this.dayGrid.colCnt
      }
      ,
      n
  }(a);
  function c(e, t) {
      var n, r;
      for (n = 0; n < t.length; n++)
          if ((r = t[n]).firstCol <= e.lastCol && r.lastCol >= e.firstCol)
              return !0;
      return !1
  }
  function u(e, t) {
      return e.leftCol - t.leftCol
  }
  var d = function(e) {
      function n() {
          return null !== e && e.apply(this, arguments) || this
      }
      return r(n, e),
      n.prototype.attachSegs = function(e, n) {
          var r = n.sourceSeg
            , i = this.rowStructs = this.renderSegRows(e);
          this.dayGrid.rowEls.forEach((function(e, n) {
              var o, s, a = t.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>');
              r && r.row === n ? o = r.el : (o = e.querySelector(".fc-content-skeleton tbody")) || (o = e.querySelector(".fc-content-skeleton table")),
              s = o.getBoundingClientRect().top - e.getBoundingClientRect().top,
              a.style.top = s + "px",
              a.querySelector("table").appendChild(i[n].tbodyEl),
              e.appendChild(a)
          }
          ))
      }
      ,
      n
  }(l)
    , p = '<td style="pointer-events:none"></td>'
    , h = function(e) {
      function n(t) {
          var n = e.call(this) || this;
          return n.fillSegTag = "td",
          n.dayGrid = t,
          n
      }
      return r(n, e),
      n.prototype.renderSegs = function(t, n, r) {
          "bgEvent" === t && (r = r.filter((function(e) {
              return e.eventRange.def.allDay
          }
          ))),
          e.prototype.renderSegs.call(this, t, n, r)
      }
      ,
      n.prototype.attachSegs = function(e, t) {
          var n, r, i, o = [];
          for (n = 0; n < t.length; n++)
              r = t[n],
              i = this.renderFillRow(e, r),
              this.dayGrid.rowEls[r.row].appendChild(i),
              o.push(i);
          return o
      }
      ,
      n.prototype.renderFillRow = function(e, n) {
          var r, i, o, s = this.dayGrid, a = this.context.isRtl, l = s.colCnt, c = a ? l - 1 - n.lastCol : n.firstCol, u = (a ? l - 1 - n.firstCol : n.lastCol) + 1;
          r = "businessHours" === e ? "bgevent" : e.toLowerCase(),
          o = (i = t.htmlToElement('<div class="fc-' + r + '-skeleton"><table><tr></tr></table></div>')).getElementsByTagName("tr")[0],
          c > 0 && t.appendToElement(o, new Array(c + 1).join(p)),
          n.el.colSpan = u - c,
          o.appendChild(n.el),
          u < l && t.appendToElement(o, new Array(l - u + 1).join(p));
          var d = s.renderProps.renderIntroHtml();
          return d && (a ? t.appendToElement(o, d) : t.prependToElement(o, d)),
          i
      }
      ,
      n
  }(t.FillRenderer)
    , f = function(e) {
      function n(n) {
          var r = e.call(this, n) || this
            , i = r.eventRenderer = new g(r)
            , o = r.renderFrame = t.memoizeRendering(r._renderFrame);
          return r.renderFgEvents = t.memoizeRendering(i.renderSegs.bind(i), i.unrender.bind(i), [o]),
          r.renderEventSelection = t.memoizeRendering(i.selectByInstanceId.bind(i), i.unselectByInstanceId.bind(i), [r.renderFgEvents]),
          r.renderEventDrag = t.memoizeRendering(i.hideByHash.bind(i), i.showByHash.bind(i), [o]),
          r.renderEventResize = t.memoizeRendering(i.hideByHash.bind(i), i.showByHash.bind(i), [o]),
          r
      }
      return r(n, e),
      n.prototype.firstContext = function(e) {
          e.calendar.registerInteractiveComponent(this, {
              el: this.el,
              useEventCenter: !1
          })
      }
      ,
      n.prototype.render = function(e, t) {
          this.renderFrame(e.date),
          this.renderFgEvents(t, e.fgSegs),
          this.renderEventSelection(e.eventSelection),
          this.renderEventDrag(e.eventDragInstances),
          this.renderEventResize(e.eventResizeInstances)
      }
      ,
      n.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderFrame.unrender(),
          this.context.calendar.unregisterInteractiveComponent(this)
      }
      ,
      n.prototype._renderFrame = function(e) {
          var n = this.context
            , r = n.theme
            , i = n.dateEnv
            , o = n.options
            , s = i.format(e, t.createFormatter(o.dayPopoverFormat));
          this.el.innerHTML = '<div class="fc-header ' + r.getClass("popoverHeader") + '"><span class="fc-title">' + t.htmlEscape(s) + '</span><span class="fc-close ' + r.getIconClass("close") + '"></span></div><div class="fc-body ' + r.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>',
          this.segContainerEl = this.el.querySelector(".fc-event-container")
      }
      ,
      n.prototype.queryHit = function(e, n, r, i) {
          var o = this.props.date;
          if (e < r && n < i)
              return {
                  component: this,
                  dateSpan: {
                      allDay: !0,
                      range: {
                          start: o,
                          end: t.addDays(o, 1)
                      }
                  },
                  dayEl: this.el,
                  rect: {
                      left: 0,
                      top: 0,
                      right: r,
                      bottom: i
                  },
                  layer: 1
              }
      }
      ,
      n
  }(t.DateComponent)
    , g = function(e) {
      function n(t) {
          var n = e.call(this) || this;
          return n.dayTile = t,
          n
      }
      return r(n, e),
      n.prototype.attachSegs = function(e) {
          for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t];
              this.dayTile.segContainerEl.appendChild(r.el)
          }
      }
      ,
      n.prototype.detachSegs = function(e) {
          for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              t.removeElement(i.el)
          }
      }
      ,
      n
  }(a)
    , v = function() {
      function e(e) {
          this.context = e
      }
      return e.prototype.renderHtml = function(e) {
          var t = [];
          e.renderIntroHtml && t.push(e.renderIntroHtml());
          for (var n = 0, r = e.cells; n < r.length; n++) {
              var i = r[n];
              t.push(m(i.date, e.dateProfile, this.context, i.htmlAttrs))
          }
          return e.cells.length || t.push('<td class="fc-day ' + this.context.theme.getClass("widgetContent") + '"></td>'),
          "rtl" === this.context.options.dir && t.reverse(),
          "<tr>" + t.join("") + "</tr>"
      }
      ,
      e
  }();
  function m(e, n, r, i) {
      var o = r.dateEnv
        , s = r.theme
        , a = t.rangeContainsMarker(n.activeRange, e)
        , l = t.getDayClasses(e, n, r);
      return l.unshift("fc-day", s.getClass("widgetContent")),
      '<td class="' + l.join(" ") + '"' + (a ? ' data-date="' + o.formatIso(e, {
          omitTime: !0
      }) + '"' : "") + (i ? " " + i : "") + "></td>"
  }
  var y = t.createFormatter({
      day: "numeric"
  })
    , E = t.createFormatter({
      week: "numeric"
  })
    , S = function(e) {
      function n(n, r) {
          var i = e.call(this, n) || this;
          i.bottomCoordPadding = 0,
          i.isCellSizesDirty = !1,
          i.renderProps = r;
          var o = i.eventRenderer = new l(i)
            , s = i.fillRenderer = new h(i);
          i.mirrorRenderer = new d(i);
          var a = i.renderCells = t.memoizeRendering(i._renderCells, i._unrenderCells);
          return i.renderBusinessHours = t.memoizeRendering(s.renderSegs.bind(s, "businessHours"), s.unrender.bind(s, "businessHours"), [a]),
          i.renderDateSelection = t.memoizeRendering(s.renderSegs.bind(s, "highlight"), s.unrender.bind(s, "highlight"), [a]),
          i.renderBgEvents = t.memoizeRendering(s.renderSegs.bind(s, "bgEvent"), s.unrender.bind(s, "bgEvent"), [a]),
          i.renderFgEvents = t.memoizeRendering(o.renderSegs.bind(o), o.unrender.bind(o), [a]),
          i.renderEventSelection = t.memoizeRendering(o.selectByInstanceId.bind(o), o.unselectByInstanceId.bind(o), [i.renderFgEvents]),
          i.renderEventDrag = t.memoizeRendering(i._renderEventDrag, i._unrenderEventDrag, [a]),
          i.renderEventResize = t.memoizeRendering(i._renderEventResize, i._unrenderEventResize, [a]),
          i
      }
      return r(n, e),
      n.prototype.render = function(e, t) {
          var n = e.cells;
          this.rowCnt = n.length,
          this.colCnt = n[0].length,
          this.renderCells(n, e.isRigid),
          this.renderBusinessHours(t, e.businessHourSegs),
          this.renderDateSelection(t, e.dateSelectionSegs),
          this.renderBgEvents(t, e.bgEventSegs),
          this.renderFgEvents(t, e.fgEventSegs),
          this.renderEventSelection(e.eventSelection),
          this.renderEventDrag(e.eventDrag),
          this.renderEventResize(e.eventResize),
          this.segPopoverTile && this.updateSegPopoverTile()
      }
      ,
      n.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderCells.unrender()
      }
      ,
      n.prototype.getCellRange = function(e, n) {
          var r = this.props.cells[e][n].date;
          return {
              start: r,
              end: t.addDays(r, 1)
          }
      }
      ,
      n.prototype.updateSegPopoverTile = function(e, t) {
          var n = this.props;
          this.segPopoverTile.receiveProps({
              date: e || this.segPopoverTile.props.date,
              fgSegs: t || this.segPopoverTile.props.fgSegs,
              eventSelection: n.eventSelection,
              eventDragInstances: n.eventDrag ? n.eventDrag.affectedInstances : null,
              eventResizeInstances: n.eventResize ? n.eventResize.affectedInstances : null
          }, this.context)
      }
      ,
      n.prototype._renderCells = function(e, n) {
          var r, i, o = this.context, s = o.calendar, a = o.view, l = o.isRtl, c = o.dateEnv, u = this.rowCnt, d = this.colCnt, p = "";
          for (r = 0; r < u; r++)
              p += this.renderDayRowHtml(r, n);
          for (this.el.innerHTML = p,
          this.rowEls = t.findElements(this.el, ".fc-row"),
          this.cellEls = t.findElements(this.el, ".fc-day, .fc-disabled-day"),
          l && this.cellEls.reverse(),
          this.rowPositions = new t.PositionCache(this.el,this.rowEls,!1,!0),
          this.colPositions = new t.PositionCache(this.el,this.cellEls.slice(0, d),!0,!1),
          r = 0; r < u; r++)
              for (i = 0; i < d; i++)
                  s.publiclyTrigger("dayRender", [{
                      date: c.toDate(e[r][i].date),
                      el: this.getCellEl(r, i),
                      view: a
                  }]);
          this.isCellSizesDirty = !0
      }
      ,
      n.prototype._unrenderCells = function() {
          this.removeSegPopover()
      }
      ,
      n.prototype.renderDayRowHtml = function(e, t) {
          var n = this.context.theme
            , r = ["fc-row", "fc-week", n.getClass("dayRow")];
          t && r.push("fc-rigid");
          var i = new v(this.context);
          return '<div class="' + r.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + i.renderHtml({
              cells: this.props.cells[e],
              dateProfile: this.props.dateProfile,
              renderIntroHtml: this.renderProps.renderBgIntroHtml
          }) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(e) + "</thead>" : "") + "</table></div></div>"
      }
      ,
      n.prototype.getIsNumbersVisible = function() {
          return this.getIsDayNumbersVisible() || this.renderProps.cellWeekNumbersVisible || this.renderProps.colWeekNumbersVisible
      }
      ,
      n.prototype.getIsDayNumbersVisible = function() {
          return this.rowCnt > 1
      }
      ,
      n.prototype.renderNumberTrHtml = function(e) {
          var t = this.context.isRtl
            , n = this.renderProps.renderNumberIntroHtml(e, this);
          return "<tr>" + (t ? "" : n) + this.renderNumberCellsHtml(e) + (t ? n : "") + "</tr>"
      }
      ,
      n.prototype.renderNumberCellsHtml = function(e) {
          var t, n, r = [];
          for (t = 0; t < this.colCnt; t++)
              n = this.props.cells[e][t].date,
              r.push(this.renderNumberCellHtml(n));
          return this.context.isRtl && r.reverse(),
          r.join("")
      }
      ,
      n.prototype.renderNumberCellHtml = function(e) {
          var n, r, i = this.context, o = i.dateEnv, s = i.options, a = "", l = t.rangeContainsMarker(this.props.dateProfile.activeRange, e), c = this.getIsDayNumbersVisible() && l;
          return c || this.renderProps.cellWeekNumbersVisible ? ((n = t.getDayClasses(e, this.props.dateProfile, this.context)).unshift("fc-day-top"),
          this.renderProps.cellWeekNumbersVisible && (r = o.weekDow),
          a += '<td class="' + n.join(" ") + '"' + (l ? ' data-date="' + o.formatIso(e, {
              omitTime: !0
          }) + '"' : "") + ">",
          this.renderProps.cellWeekNumbersVisible && e.getUTCDay() === r && (a += t.buildGotoAnchorHtml(s, o, {
              date: e,
              type: "week"
          }, {
              class: "fc-week-number"
          }, o.format(e, E))),
          c && (a += t.buildGotoAnchorHtml(s, o, e, {
              class: "fc-day-number"
          }, o.format(e, y))),
          a += "</td>") : "<td></td>"
      }
      ,
      n.prototype.updateSize = function(e) {
          var t = this.context.calendar
            , n = this
            , r = n.fillRenderer
            , i = n.eventRenderer
            , o = n.mirrorRenderer;
          (e || this.isCellSizesDirty || t.isEventsUpdated) && (this.buildPositionCaches(),
          this.isCellSizesDirty = !1),
          r.computeSizes(e),
          i.computeSizes(e),
          o.computeSizes(e),
          r.assignSizes(e),
          i.assignSizes(e),
          o.assignSizes(e)
      }
      ,
      n.prototype.buildPositionCaches = function() {
          this.buildColPositions(),
          this.buildRowPositions()
      }
      ,
      n.prototype.buildColPositions = function() {
          this.colPositions.build()
      }
      ,
      n.prototype.buildRowPositions = function() {
          this.rowPositions.build(),
          this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
      }
      ,
      n.prototype.positionToHit = function(e, t) {
          var n = this.colPositions
            , r = this.rowPositions
            , i = n.leftToIndex(e)
            , o = r.topToIndex(t);
          if (null != o && null != i)
              return {
                  row: o,
                  col: i,
                  dateSpan: {
                      range: this.getCellRange(o, i),
                      allDay: !0
                  },
                  dayEl: this.getCellEl(o, i),
                  relativeRect: {
                      left: n.lefts[i],
                      right: n.rights[i],
                      top: r.tops[o],
                      bottom: r.bottoms[o]
                  }
              }
      }
      ,
      n.prototype.getCellEl = function(e, t) {
          return this.cellEls[e * this.colCnt + t]
      }
      ,
      n.prototype._renderEventDrag = function(e) {
          e && (this.eventRenderer.hideByHash(e.affectedInstances),
          this.fillRenderer.renderSegs("highlight", this.context, e.segs))
      }
      ,
      n.prototype._unrenderEventDrag = function(e) {
          e && (this.eventRenderer.showByHash(e.affectedInstances),
          this.fillRenderer.unrender("highlight", this.context))
      }
      ,
      n.prototype._renderEventResize = function(e) {
          e && (this.eventRenderer.hideByHash(e.affectedInstances),
          this.fillRenderer.renderSegs("highlight", this.context, e.segs),
          this.mirrorRenderer.renderSegs(this.context, e.segs, {
              isResizing: !0,
              sourceSeg: e.sourceSeg
          }))
      }
      ,
      n.prototype._unrenderEventResize = function(e) {
          e && (this.eventRenderer.showByHash(e.affectedInstances),
          this.fillRenderer.unrender("highlight", this.context),
          this.mirrorRenderer.unrender(this.context, e.segs, {
              isResizing: !0,
              sourceSeg: e.sourceSeg
          }))
      }
      ,
      n.prototype.removeSegPopover = function() {
          this.segPopover && this.segPopover.hide()
      }
      ,
      n.prototype.limitRows = function(e) {
          var t, n, r = this.eventRenderer.rowStructs || [];
          for (t = 0; t < r.length; t++)
              this.unlimitRow(t),
              !1 !== (n = !!e && ("number" == typeof e ? e : this.computeRowLevelLimit(t))) && this.limitRow(t, n)
      }
      ,
      n.prototype.computeRowLevelLimit = function(e) {
          var n, r, i = this.rowEls[e].getBoundingClientRect().bottom, o = t.findChildren(this.eventRenderer.rowStructs[e].tbodyEl);
          for (n = 0; n < o.length; n++)
              if ((r = o[n]).classList.remove("fc-limited"),
              r.getBoundingClientRect().bottom > i)
                  return n;
          return !1
      }
      ,
      n.prototype.limitRow = function(e, n) {
          var r, i, o, s, a, l, c, u, d, p, h, f, g, v, m, y = this, E = this.colCnt, S = this.context.isRtl, b = this.eventRenderer.rowStructs[e], D = [], w = 0, T = function(r) {
              for (; w < r; )
                  (l = y.getCellSegs(e, w, n)).length && (d = i[n - 1][w],
                  m = y.renderMoreLink(e, w, l),
                  v = t.createElement("div", null, m),
                  d.appendChild(v),
                  D.push(v)),
                  w++
          };
          if (n && n < b.segLevels.length) {
              for (r = b.segLevels[n - 1],
              i = b.cellMatrix,
              (o = t.findChildren(b.tbodyEl).slice(n)).forEach((function(e) {
                  e.classList.add("fc-limited")
              }
              )),
              s = 0; s < r.length; s++) {
                  a = r[s];
                  var C = S ? E - 1 - a.lastCol : a.firstCol
                    , R = S ? E - 1 - a.firstCol : a.lastCol;
                  for (T(C),
                  u = [],
                  c = 0; w <= R; )
                      l = this.getCellSegs(e, w, n),
                      u.push(l),
                      c += l.length,
                      w++;
                  if (c) {
                      for (p = (d = i[n - 1][C]).rowSpan || 1,
                      h = [],
                      f = 0; f < u.length; f++)
                          g = t.createElement("td", {
                              className: "fc-more-cell",
                              rowSpan: p
                          }),
                          l = u[f],
                          m = this.renderMoreLink(e, C + f, [a].concat(l)),
                          v = t.createElement("div", null, m),
                          g.appendChild(v),
                          h.push(g),
                          D.push(g);
                      d.classList.add("fc-limited"),
                      t.insertAfterElement(d, h),
                      o.push(d)
                  }
              }
              T(this.colCnt),
              b.moreEls = D,
              b.limitedEls = o
          }
      }
      ,
      n.prototype.unlimitRow = function(e) {
          var n = this.eventRenderer.rowStructs[e];
          n.moreEls && (n.moreEls.forEach(t.removeElement),
          n.moreEls = null),
          n.limitedEls && (n.limitedEls.forEach((function(e) {
              e.classList.remove("fc-limited")
          }
          )),
          n.limitedEls = null)
      }
      ,
      n.prototype.renderMoreLink = function(e, n, r) {
          var i = this
            , o = this.context
            , s = o.calendar
            , a = o.view
            , l = o.dateEnv
            , c = o.options
            , u = o.isRtl
            , d = t.createElement("a", {
              className: "fc-more"
          });
          return d.innerText = this.getMoreLinkText(r.length),
          d.addEventListener("click", (function(t) {
              var o = c.eventLimitClick
                , d = u ? i.colCnt - n - 1 : n
                , p = i.props.cells[e][d].date
                , h = t.currentTarget
                , f = i.getCellEl(e, n)
                , g = i.getCellSegs(e, n)
                , v = i.resliceDaySegs(g, p)
                , m = i.resliceDaySegs(r, p);
              "function" == typeof o && (o = s.publiclyTrigger("eventLimitClick", [{
                  date: l.toDate(p),
                  allDay: !0,
                  dayEl: f,
                  moreEl: h,
                  segs: v,
                  hiddenSegs: m,
                  jsEvent: t,
                  view: a
              }])),
              "popover" === o ? i.showSegPopover(e, n, h, v) : "string" == typeof o && s.zoomTo(p, o)
          }
          )),
          d
      }
      ,
      n.prototype.showSegPopover = function(e, n, r, i) {
          var o, a, l = this, c = this.context, u = c.calendar, d = c.view, p = c.theme, h = c.isRtl, g = h ? this.colCnt - n - 1 : n, v = r.parentNode;
          o = 1 === this.rowCnt ? d.el : this.rowEls[e],
          a = {
              className: "fc-more-popover " + p.getClass("popover"),
              parentEl: d.el,
              top: t.computeRect(o).top,
              autoHide: !0,
              content: function(t) {
                  l.segPopoverTile = new f(t),
                  l.updateSegPopoverTile(l.props.cells[e][g].date, i)
              },
              hide: function() {
                  l.segPopoverTile.destroy(),
                  l.segPopoverTile = null,
                  l.segPopover.destroy(),
                  l.segPopover = null
              }
          },
          h ? a.right = t.computeRect(v).right + 1 : a.left = t.computeRect(v).left - 1,
          this.segPopover = new s(a),
          this.segPopover.show(),
          u.releaseAfterSizingTriggers()
      }
      ,
      n.prototype.resliceDaySegs = function(e, n) {
          for (var r = n, o = {
              start: r,
              end: t.addDays(r, 1)
          }, s = [], a = 0, l = e; a < l.length; a++) {
              var c = l[a]
                , u = c.eventRange
                , d = u.range
                , p = t.intersectRanges(d, o);
              p && s.push(i({}, c, {
                  eventRange: {
                      def: u.def,
                      ui: i({}, u.ui, {
                          durationEditable: !1
                      }),
                      instance: u.instance,
                      range: p
                  },
                  isStart: c.isStart && p.start.valueOf() === d.start.valueOf(),
                  isEnd: c.isEnd && p.end.valueOf() === d.end.valueOf()
              }))
          }
          return s
      }
      ,
      n.prototype.getMoreLinkText = function(e) {
          var t = this.context.options.eventLimitText;
          return "function" == typeof t ? t(e) : "+" + e + " " + t
      }
      ,
      n.prototype.getCellSegs = function(e, t, n) {
          for (var r, i = this.eventRenderer.rowStructs[e].segMatrix, o = n || 0, s = []; o < i.length; )
              (r = i[o][t]) && s.push(r),
              o++;
          return s
      }
      ,
      n
  }(t.DateComponent)
    , b = t.createFormatter({
      week: "numeric"
  })
    , D = function(e) {
      function n() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n.processOptions = t.memoize(n._processOptions),
          n.renderSkeleton = t.memoizeRendering(n._renderSkeleton, n._unrenderSkeleton),
          n.renderHeadIntroHtml = function() {
              var e = n.context
                , r = e.theme
                , i = e.options;
              return n.colWeekNumbersVisible ? '<th class="fc-week-number ' + r.getClass("widgetHeader") + '" ' + n.weekNumberStyleAttr() + "><span>" + t.htmlEscape(i.weekLabel) + "</span></th>" : ""
          }
          ,
          n.renderDayGridNumberIntroHtml = function(e, r) {
              var i = n.context
                , o = i.options
                , s = i.dateEnv
                , a = r.props.cells[e][0].date;
              return n.colWeekNumbersVisible ? '<td class="fc-week-number" ' + n.weekNumberStyleAttr() + ">" + t.buildGotoAnchorHtml(o, s, {
                  date: a,
                  type: "week",
                  forceOff: 1 === r.colCnt
              }, s.format(a, b)) + "</td>" : ""
          }
          ,
          n.renderDayGridBgIntroHtml = function() {
              var e = n.context.theme;
              return n.colWeekNumbersVisible ? '<td class="fc-week-number ' + e.getClass("widgetContent") + '" ' + n.weekNumberStyleAttr() + "></td>" : ""
          }
          ,
          n.renderDayGridIntroHtml = function() {
              return n.colWeekNumbersVisible ? '<td class="fc-week-number" ' + n.weekNumberStyleAttr() + "></td>" : ""
          }
          ,
          n
      }
      return r(n, e),
      n.prototype._processOptions = function(e) {
          e.weekNumbers ? e.weekNumbersWithinDays ? (this.cellWeekNumbersVisible = !0,
          this.colWeekNumbersVisible = !1) : (this.cellWeekNumbersVisible = !1,
          this.colWeekNumbersVisible = !0) : (this.colWeekNumbersVisible = !1,
          this.cellWeekNumbersVisible = !1)
      }
      ,
      n.prototype.render = function(t, n) {
          e.prototype.render.call(this, t, n),
          this.processOptions(n.options),
          this.renderSkeleton(n)
      }
      ,
      n.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderSkeleton.unrender()
      }
      ,
      n.prototype._renderSkeleton = function(e) {
          this.el.classList.add("fc-dayGrid-view"),
          this.el.innerHTML = this.renderSkeletonHtml(),
          this.scroller = new t.ScrollComponent("hidden","auto");
          var n = this.scroller.el;
          this.el.querySelector(".fc-body > tr > td").appendChild(n),
          n.classList.add("fc-day-grid-container");
          var r = t.createElement("div", {
              className: "fc-day-grid"
          });
          n.appendChild(r),
          this.dayGrid = new S(r,{
              renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
              renderBgIntroHtml: this.renderDayGridBgIntroHtml,
              renderIntroHtml: this.renderDayGridIntroHtml,
              colWeekNumbersVisible: this.colWeekNumbersVisible,
              cellWeekNumbersVisible: this.cellWeekNumbersVisible
          })
      }
      ,
      n.prototype._unrenderSkeleton = function() {
          this.el.classList.remove("fc-dayGrid-view"),
          this.dayGrid.destroy(),
          this.scroller.destroy()
      }
      ,
      n.prototype.renderSkeletonHtml = function() {
          var e = this.context
            , t = e.theme
            , n = e.options;
          return '<table class="' + t.getClass("tableGrid") + '">' + (n.columnHeader ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>'
      }
      ,
      n.prototype.weekNumberStyleAttr = function() {
          return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
      }
      ,
      n.prototype.hasRigidRows = function() {
          var e = this.context.options.eventLimit;
          return e && "number" != typeof e
      }
      ,
      n.prototype.updateSize = function(t, n, r) {
          e.prototype.updateSize.call(this, t, n, r),
          this.dayGrid.updateSize(t)
      }
      ,
      n.prototype.updateBaseSize = function(e, n, r) {
          var i, o, s = this.dayGrid, a = this.context.options.eventLimit, l = this.header ? this.header.el : null;
          s.rowEls ? (this.colWeekNumbersVisible && (this.weekNumberWidth = t.matchCellWidths(t.findElements(this.el, ".fc-week-number"))),
          this.scroller.clear(),
          l && t.uncompensateScroll(l),
          s.removeSegPopover(),
          a && "number" == typeof a && s.limitRows(a),
          i = this.computeScrollerHeight(n),
          this.setGridHeight(i, r),
          a && "number" != typeof a && s.limitRows(a),
          r || (this.scroller.setHeight(i),
          ((o = this.scroller.getScrollbarWidths()).left || o.right) && (l && t.compensateScroll(l, o),
          i = this.computeScrollerHeight(n),
          this.scroller.setHeight(i)),
          this.scroller.lockOverflow(o))) : r || (i = this.computeScrollerHeight(n),
          this.scroller.setHeight(i))
      }
      ,
      n.prototype.computeScrollerHeight = function(e) {
          return e - t.subtractInnerElHeight(this.el, this.scroller.el)
      }
      ,
      n.prototype.setGridHeight = function(e, n) {
          this.context.options.monthMode ? (n && (e *= this.dayGrid.rowCnt / 6),
          t.distributeHeight(this.dayGrid.rowEls, e, !n)) : n ? t.undistributeHeight(this.dayGrid.rowEls) : t.distributeHeight(this.dayGrid.rowEls, e, !0)
      }
      ,
      n.prototype.computeDateScroll = function(e) {
          return {
              top: 0
          }
      }
      ,
      n.prototype.queryDateScroll = function() {
          return {
              top: this.scroller.getScrollTop()
          }
      }
      ,
      n.prototype.applyDateScroll = function(e) {
          void 0 !== e.top && this.scroller.setScrollTop(e.top)
      }
      ,
      n
  }(t.View);
  D.prototype.dateProfileGeneratorClass = o;
  var w = function(e) {
      function t(t) {
          var n = e.call(this, t.el) || this;
          return n.slicer = new T,
          n.dayGrid = t,
          n
      }
      return r(t, e),
      t.prototype.firstContext = function(e) {
          e.calendar.registerInteractiveComponent(this, {
              el: this.dayGrid.el
          })
      }
      ,
      t.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.context.calendar.unregisterInteractiveComponent(this)
      }
      ,
      t.prototype.render = function(e, t) {
          var n = this.dayGrid
            , r = e.dateProfile
            , o = e.dayTable;
          n.receiveContext(t),
          n.receiveProps(i({}, this.slicer.sliceProps(e, r, e.nextDayThreshold, t.calendar, n, o), {
              dateProfile: r,
              cells: o.cells,
              isRigid: e.isRigid
          }), t)
      }
      ,
      t.prototype.buildPositionCaches = function() {
          this.dayGrid.buildPositionCaches()
      }
      ,
      t.prototype.queryHit = function(e, t) {
          var n = this.dayGrid.positionToHit(e, t);
          if (n)
              return {
                  component: this.dayGrid,
                  dateSpan: n.dateSpan,
                  dayEl: n.dayEl,
                  rect: {
                      left: n.relativeRect.left,
                      right: n.relativeRect.right,
                      top: n.relativeRect.top,
                      bottom: n.relativeRect.bottom
                  },
                  layer: 0
              }
      }
      ,
      t
  }(t.DateComponent)
    , T = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return r(t, e),
      t.prototype.sliceRange = function(e, t) {
          return t.sliceRange(e)
      }
      ,
      t
  }(t.Slicer)
    , C = function(e) {
      function n() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n.buildDayTable = t.memoize(R),
          n
      }
      return r(n, e),
      n.prototype.render = function(t, n) {
          e.prototype.render.call(this, t, n);
          var r = this.props.dateProfile
            , i = this.dayTable = this.buildDayTable(r, t.dateProfileGenerator);
          this.header && this.header.receiveProps({
              dateProfile: r,
              dates: i.headerDates,
              datesRepDistinctDays: 1 === i.rowCnt,
              renderIntroHtml: this.renderHeadIntroHtml
          }, n),
          this.simpleDayGrid.receiveProps({
              dateProfile: r,
              dayTable: i,
              businessHours: t.businessHours,
              dateSelection: t.dateSelection,
              eventStore: t.eventStore,
              eventUiBases: t.eventUiBases,
              eventSelection: t.eventSelection,
              eventDrag: t.eventDrag,
              eventResize: t.eventResize,
              isRigid: this.hasRigidRows(),
              nextDayThreshold: this.context.nextDayThreshold
          }, n)
      }
      ,
      n.prototype._renderSkeleton = function(n) {
          e.prototype._renderSkeleton.call(this, n),
          n.options.columnHeader && (this.header = new t.DayHeader(this.el.querySelector(".fc-head-container"))),
          this.simpleDayGrid = new w(this.dayGrid)
      }
      ,
      n.prototype._unrenderSkeleton = function() {
          e.prototype._unrenderSkeleton.call(this),
          this.header && this.header.destroy(),
          this.simpleDayGrid.destroy()
      }
      ,
      n
  }(D);
  function R(e, n) {
      var r = new t.DaySeries(e.renderRange,n);
      return new t.DayTable(r,/year|month|week/.test(e.currentRangeUnit))
  }
  var I = t.createPlugin({
      defaultView: "dayGridMonth",
      views: {
          dayGrid: C,
          dayGridDay: {
              type: "dayGrid",
              duration: {
                  days: 1
              }
          },
          dayGridWeek: {
              type: "dayGrid",
              duration: {
                  weeks: 1
              }
          },
          dayGridMonth: {
              type: "dayGrid",
              duration: {
                  months: 1
              },
              monthMode: !0,
              fixedWeekCount: !0
          }
      }
  });
  e.AbstractDayGridView = D,
  e.DayBgRow = v,
  e.DayGrid = S,
  e.DayGridSlicer = T,
  e.DayGridView = C,
  e.SimpleDayGrid = w,
  e.buildBasicDayTable = R,
  e.default = I,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}
)),
/*!
FullCalendar Google Calendar Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarGoogleCalendar = {}, e.FullCalendar)
}(this, (function(e, t) {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var n = function() {
      return (n = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n])
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
      }
      ).apply(this, arguments)
  }
    , r = "https://www.googleapis.com/calendar/v3/calendars"
    , i = {
      url: String,
      googleCalendarApiKey: String,
      googleCalendarId: String,
      googleCalendarApiBase: String,
      data: null
  }
    , o = {
      parseMeta: function(e) {
          if ("string" == typeof e && (e = {
              url: e
          }),
          "object" == typeof e) {
              var n = t.refineProps(e, i);
              if (!n.googleCalendarId && n.url && (n.googleCalendarId = function(e) {
                  var t;
                  if (/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(e))
                      return e;
                  if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(e)))
                      return decodeURIComponent(t[1])
              }(n.url)),
              delete n.url,
              n.googleCalendarId)
                  return n
          }
          return null
      },
      fetch: function(e, i, o) {
          var s = e.calendar
            , a = e.eventSource.meta
            , l = a.googleCalendarApiKey || s.opt("googleCalendarApiKey");
          if (l) {
              var c = function(e) {
                  var t = e.googleCalendarApiBase;
                  t || (t = r);
                  return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
              }(a)
                , u = function(e, r, i, o) {
                  var s, a, l;
                  o.canComputeOffset ? (a = o.formatIso(e.start),
                  l = o.formatIso(e.end)) : (a = t.addDays(e.start, -1).toISOString(),
                  l = t.addDays(e.end, 1).toISOString());
                  s = n({}, i || {}, {
                      key: r,
                      timeMin: a,
                      timeMax: l,
                      singleEvents: !0,
                      maxResults: 9999
                  }),
                  "local" !== o.timeZone && (s.timeZone = o.timeZone);
                  return s
              }(e.range, l, a.data, s.dateEnv);
              t.requestJson("GET", c, u, (function(e, t) {
                  var n, r;
                  e.error ? o({
                      message: "Google Calendar API: " + e.error.message,
                      errors: e.error.errors,
                      xhr: t
                  }) : i({
                      rawEvents: (n = e.items,
                      r = u.timeZone,
                      n.map((function(e) {
                          return function(e, t) {
                              var n = e.htmlLink || null;
                              n && t && (n = function(e, t) {
                                  return e.replace(/(\?.*?)?(#|$)/, (function(e, n, r) {
                                      return (n ? n + "&" : "?") + t + r
                                  }
                                  ))
                              }(n, "ctz=" + t));
                              return {
                                  id: e.id,
                                  title: e.summary,
                                  start: e.start.dateTime || e.start.date,
                                  end: e.end.dateTime || e.end.date,
                                  url: n,
                                  location: e.location,
                                  description: e.description
                              }
                          }(e, r)
                      }
                      ))),
                      xhr: t
                  })
              }
              ), (function(e, t) {
                  o({
                      message: e,
                      xhr: t
                  })
              }
              ))
          } else
              o({
                  message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
              })
      }
  };
  var s = t.createPlugin({
      eventSourceDefs: [o]
  });
  e.default = s,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}
)),
/*!
FullCalendar Interaction Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarInteraction = {}, e.FullCalendar)
}(this, (function(e, t) {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
      }instanceof Array && function(e, t) {
          e.__proto__ = t
      }
      || function(e, t) {
          for (var n in t)
              t.hasOwnProperty(n) && (e[n] = t[n])
      }
      )(e, t)
  };
  function r(e, t) {
      function r() {
          this.constructor = e
      }
      n(e, t),
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
      new r)
  }
  var i = function() {
      return (i = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n])
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
      }
      ).apply(this, arguments)
  };
  t.config.touchMouseIgnoreWait = 500;
  var o = 0
    , s = 0
    , a = !1
    , l = function() {
      function e(e) {
          var n = this;
          this.subjectEl = null,
          this.downEl = null,
          this.selector = "",
          this.handleSelector = "",
          this.shouldIgnoreMove = !1,
          this.shouldWatchScroll = !0,
          this.isDragging = !1,
          this.isTouchDragging = !1,
          this.wasTouchScroll = !1,
          this.handleMouseDown = function(e) {
              if (!n.shouldIgnoreMouse() && function(e) {
                  return 0 === e.button && !e.ctrlKey
              }(e) && n.tryStart(e)) {
                  var t = n.createEventFromMouse(e, !0);
                  n.emitter.trigger("pointerdown", t),
                  n.initScrollWatch(t),
                  n.shouldIgnoreMove || document.addEventListener("mousemove", n.handleMouseMove),
                  document.addEventListener("mouseup", n.handleMouseUp)
              }
          }
          ,
          this.handleMouseMove = function(e) {
              var t = n.createEventFromMouse(e);
              n.recordCoords(t),
              n.emitter.trigger("pointermove", t)
          }
          ,
          this.handleMouseUp = function(e) {
              document.removeEventListener("mousemove", n.handleMouseMove),
              document.removeEventListener("mouseup", n.handleMouseUp),
              n.emitter.trigger("pointerup", n.createEventFromMouse(e)),
              n.cleanup()
          }
          ,
          this.handleTouchStart = function(e) {
              if (n.tryStart(e)) {
                  n.isTouchDragging = !0;
                  var t = n.createEventFromTouch(e, !0);
                  n.emitter.trigger("pointerdown", t),
                  n.initScrollWatch(t);
                  var r = e.target;
                  n.shouldIgnoreMove || r.addEventListener("touchmove", n.handleTouchMove),
                  r.addEventListener("touchend", n.handleTouchEnd),
                  r.addEventListener("touchcancel", n.handleTouchEnd),
                  window.addEventListener("scroll", n.handleTouchScroll, !0)
              }
          }
          ,
          this.handleTouchMove = function(e) {
              var t = n.createEventFromTouch(e);
              n.recordCoords(t),
              n.emitter.trigger("pointermove", t)
          }
          ,
          this.handleTouchEnd = function(e) {
              if (n.isDragging) {
                  var r = e.target;
                  r.removeEventListener("touchmove", n.handleTouchMove),
                  r.removeEventListener("touchend", n.handleTouchEnd),
                  r.removeEventListener("touchcancel", n.handleTouchEnd),
                  window.removeEventListener("scroll", n.handleTouchScroll, !0),
                  n.emitter.trigger("pointerup", n.createEventFromTouch(e)),
                  n.cleanup(),
                  n.isTouchDragging = !1,
                  o++,
                  setTimeout((function() {
                      o--
                  }
                  ), t.config.touchMouseIgnoreWait)
              }
          }
          ,
          this.handleTouchScroll = function() {
              n.wasTouchScroll = !0
          }
          ,
          this.handleScroll = function(e) {
              if (!n.shouldIgnoreMove) {
                  var t = window.pageXOffset - n.prevScrollX + n.prevPageX
                    , r = window.pageYOffset - n.prevScrollY + n.prevPageY;
                  n.emitter.trigger("pointermove", {
                      origEvent: e,
                      isTouch: n.isTouchDragging,
                      subjectEl: n.subjectEl,
                      pageX: t,
                      pageY: r,
                      deltaX: t - n.origPageX,
                      deltaY: r - n.origPageY
                  })
              }
          }
          ,
          this.containerEl = e,
          this.emitter = new t.EmitterMixin,
          e.addEventListener("mousedown", this.handleMouseDown),
          e.addEventListener("touchstart", this.handleTouchStart, {
              passive: !0
          }),
          s++ || window.addEventListener("touchmove", c, {
              passive: !1
          })
      }
      return e.prototype.destroy = function() {
          this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
          this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
              passive: !0
          }),
          --s || window.removeEventListener("touchmove", c, {
              passive: !1
          })
      }
      ,
      e.prototype.tryStart = function(e) {
          var n = this.querySubjectEl(e)
            , r = e.target;
          return !(!n || this.handleSelector && !t.elementClosest(r, this.handleSelector)) && (this.subjectEl = n,
          this.downEl = r,
          this.isDragging = !0,
          this.wasTouchScroll = !1,
          !0)
      }
      ,
      e.prototype.cleanup = function() {
          a = !1,
          this.isDragging = !1,
          this.subjectEl = null,
          this.downEl = null,
          this.destroyScrollWatch()
      }
      ,
      e.prototype.querySubjectEl = function(e) {
          return this.selector ? t.elementClosest(e.target, this.selector) : this.containerEl
      }
      ,
      e.prototype.shouldIgnoreMouse = function() {
          return o || this.isTouchDragging
      }
      ,
      e.prototype.cancelTouchScroll = function() {
          this.isDragging && (a = !0)
      }
      ,
      e.prototype.initScrollWatch = function(e) {
          this.shouldWatchScroll && (this.recordCoords(e),
          window.addEventListener("scroll", this.handleScroll, !0))
      }
      ,
      e.prototype.recordCoords = function(e) {
          this.shouldWatchScroll && (this.prevPageX = e.pageX,
          this.prevPageY = e.pageY,
          this.prevScrollX = window.pageXOffset,
          this.prevScrollY = window.pageYOffset)
      }
      ,
      e.prototype.destroyScrollWatch = function() {
          this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
      }
      ,
      e.prototype.createEventFromMouse = function(e, t) {
          var n = 0
            , r = 0;
          return t ? (this.origPageX = e.pageX,
          this.origPageY = e.pageY) : (n = e.pageX - this.origPageX,
          r = e.pageY - this.origPageY),
          {
              origEvent: e,
              isTouch: !1,
              subjectEl: this.subjectEl,
              pageX: e.pageX,
              pageY: e.pageY,
              deltaX: n,
              deltaY: r
          }
      }
      ,
      e.prototype.createEventFromTouch = function(e, t) {
          var n, r, i = e.touches, o = 0, s = 0;
          return i && i.length ? (n = i[0].pageX,
          r = i[0].pageY) : (n = e.pageX,
          r = e.pageY),
          t ? (this.origPageX = n,
          this.origPageY = r) : (o = n - this.origPageX,
          s = r - this.origPageY),
          {
              origEvent: e,
              isTouch: !0,
              subjectEl: this.subjectEl,
              pageX: n,
              pageY: r,
              deltaX: o,
              deltaY: s
          }
      }
      ,
      e
  }();
  function c(e) {
      a && e.preventDefault()
  }
  var u = function() {
      function e() {
          this.isVisible = !1,
          this.sourceEl = null,
          this.mirrorEl = null,
          this.sourceElRect = null,
          this.parentNode = document.body,
          this.zIndex = 9999,
          this.revertDuration = 0
      }
      return e.prototype.start = function(e, t, n) {
          this.sourceEl = e,
          this.sourceElRect = this.sourceEl.getBoundingClientRect(),
          this.origScreenX = t - window.pageXOffset,
          this.origScreenY = n - window.pageYOffset,
          this.deltaX = 0,
          this.deltaY = 0,
          this.updateElPosition()
      }
      ,
      e.prototype.handleMove = function(e, t) {
          this.deltaX = e - window.pageXOffset - this.origScreenX,
          this.deltaY = t - window.pageYOffset - this.origScreenY,
          this.updateElPosition()
      }
      ,
      e.prototype.setIsVisible = function(e) {
          e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""),
          this.isVisible = e,
          this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"),
          this.isVisible = e)
      }
      ,
      e.prototype.stop = function(e, t) {
          var n = this
            , r = function() {
              n.cleanup(),
              t()
          };
          e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
      }
      ,
      e.prototype.doRevertAnimation = function(e, n) {
          var r = this.mirrorEl
            , i = this.sourceEl.getBoundingClientRect();
          r.style.transition = "top " + n + "ms,left " + n + "ms",
          t.applyStyle(r, {
              left: i.left,
              top: i.top
          }),
          t.whenTransitionDone(r, (function() {
              r.style.transition = "",
              e()
          }
          ))
      }
      ,
      e.prototype.cleanup = function() {
          this.mirrorEl && (t.removeElement(this.mirrorEl),
          this.mirrorEl = null),
          this.sourceEl = null
      }
      ,
      e.prototype.updateElPosition = function() {
          this.sourceEl && this.isVisible && t.applyStyle(this.getMirrorEl(), {
              left: this.sourceElRect.left + this.deltaX,
              top: this.sourceElRect.top + this.deltaY
          })
      }
      ,
      e.prototype.getMirrorEl = function() {
          var e = this.sourceElRect
            , n = this.mirrorEl;
          return n || ((n = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),
          n.classList.add("fc-dragging"),
          t.applyStyle(n, {
              position: "fixed",
              zIndex: this.zIndex,
              visibility: "",
              boxSizing: "border-box",
              width: e.right - e.left,
              height: e.bottom - e.top,
              right: "auto",
              bottom: "auto",
              margin: 0
          }),
          this.parentNode.appendChild(n)),
          n
      }
      ,
      e
  }()
    , d = function(e) {
      function t(t, n) {
          var r = e.call(this) || this;
          return r.handleScroll = function() {
              r.scrollTop = r.scrollController.getScrollTop(),
              r.scrollLeft = r.scrollController.getScrollLeft(),
              r.handleScrollChange()
          }
          ,
          r.scrollController = t,
          r.doesListening = n,
          r.scrollTop = r.origScrollTop = t.getScrollTop(),
          r.scrollLeft = r.origScrollLeft = t.getScrollLeft(),
          r.scrollWidth = t.getScrollWidth(),
          r.scrollHeight = t.getScrollHeight(),
          r.clientWidth = t.getClientWidth(),
          r.clientHeight = t.getClientHeight(),
          r.clientRect = r.computeClientRect(),
          r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll),
          r
      }
      return r(t, e),
      t.prototype.destroy = function() {
          this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
      }
      ,
      t.prototype.getScrollTop = function() {
          return this.scrollTop
      }
      ,
      t.prototype.getScrollLeft = function() {
          return this.scrollLeft
      }
      ,
      t.prototype.setScrollTop = function(e) {
          this.scrollController.setScrollTop(e),
          this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0),
          this.handleScrollChange())
      }
      ,
      t.prototype.setScrollLeft = function(e) {
          this.scrollController.setScrollLeft(e),
          this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0),
          this.handleScrollChange())
      }
      ,
      t.prototype.getClientWidth = function() {
          return this.clientWidth
      }
      ,
      t.prototype.getClientHeight = function() {
          return this.clientHeight
      }
      ,
      t.prototype.getScrollWidth = function() {
          return this.scrollWidth
      }
      ,
      t.prototype.getScrollHeight = function() {
          return this.scrollHeight
      }
      ,
      t.prototype.handleScrollChange = function() {}
      ,
      t
  }(t.ScrollController)
    , p = function(e) {
      function n(n, r) {
          return e.call(this, new t.ElementScrollController(n), r) || this
      }
      return r(n, e),
      n.prototype.getEventTarget = function() {
          return this.scrollController.el
      }
      ,
      n.prototype.computeClientRect = function() {
          return t.computeInnerRect(this.scrollController.el)
      }
      ,
      n
  }(d)
    , h = function(e) {
      function n(n) {
          return e.call(this, new t.WindowScrollController, n) || this
      }
      return r(n, e),
      n.prototype.getEventTarget = function() {
          return window
      }
      ,
      n.prototype.computeClientRect = function() {
          return {
              left: this.scrollLeft,
              right: this.scrollLeft + this.clientWidth,
              top: this.scrollTop,
              bottom: this.scrollTop + this.clientHeight
          }
      }
      ,
      n.prototype.handleScrollChange = function() {
          this.clientRect = this.computeClientRect()
      }
      ,
      n
  }(d)
    , f = "function" == typeof performance ? performance.now : Date.now
    , g = function() {
      function e() {
          var e = this;
          this.isEnabled = !0,
          this.scrollQuery = [window, ".fc-scroller"],
          this.edgeThreshold = 50,
          this.maxVelocity = 300,
          this.pointerScreenX = null,
          this.pointerScreenY = null,
          this.isAnimating = !1,
          this.scrollCaches = null,
          this.everMovedUp = !1,
          this.everMovedDown = !1,
          this.everMovedLeft = !1,
          this.everMovedRight = !1,
          this.animate = function() {
              if (e.isAnimating) {
                  var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                  if (t) {
                      var n = f();
                      e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                      e.requestAnimation(n)
                  } else
                      e.isAnimating = !1
              }
          }
      }
      return e.prototype.start = function(e, t) {
          this.isEnabled && (this.scrollCaches = this.buildCaches(),
          this.pointerScreenX = null,
          this.pointerScreenY = null,
          this.everMovedUp = !1,
          this.everMovedDown = !1,
          this.everMovedLeft = !1,
          this.everMovedRight = !1,
          this.handleMove(e, t))
      }
      ,
      e.prototype.handleMove = function(e, t) {
          if (this.isEnabled) {
              var n = e - window.pageXOffset
                , r = t - window.pageYOffset
                , i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY
                , o = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
              i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0),
              o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0),
              this.pointerScreenX = n,
              this.pointerScreenY = r,
              this.isAnimating || (this.isAnimating = !0,
              this.requestAnimation(f()))
          }
      }
      ,
      e.prototype.stop = function() {
          if (this.isEnabled) {
              this.isAnimating = !1;
              for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                  t[e].destroy()
              }
              this.scrollCaches = null
          }
      }
      ,
      e.prototype.requestAnimation = function(e) {
          this.msSinceRequest = e,
          requestAnimationFrame(this.animate)
      }
      ,
      e.prototype.handleSide = function(e, t) {
          var n = e.scrollCache
            , r = this.edgeThreshold
            , i = r - e.distance
            , o = i * i / (r * r) * this.maxVelocity * t
            , s = 1;
          switch (e.name) {
          case "left":
              s = -1;
          case "right":
              n.setScrollLeft(n.getScrollLeft() + o * s);
              break;
          case "top":
              s = -1;
          case "bottom":
              n.setScrollTop(n.getScrollTop() + o * s)
          }
      }
      ,
      e.prototype.computeBestEdge = function(e, t) {
          for (var n = this.edgeThreshold, r = null, i = 0, o = this.scrollCaches; i < o.length; i++) {
              var s = o[i]
                , a = s.clientRect
                , l = e - a.left
                , c = a.right - e
                , u = t - a.top
                , d = a.bottom - t;
              l >= 0 && c >= 0 && u >= 0 && d >= 0 && (u <= n && this.everMovedUp && s.canScrollUp() && (!r || r.distance > u) && (r = {
                  scrollCache: s,
                  name: "top",
                  distance: u
              }),
              d <= n && this.everMovedDown && s.canScrollDown() && (!r || r.distance > d) && (r = {
                  scrollCache: s,
                  name: "bottom",
                  distance: d
              }),
              l <= n && this.everMovedLeft && s.canScrollLeft() && (!r || r.distance > l) && (r = {
                  scrollCache: s,
                  name: "left",
                  distance: l
              }),
              c <= n && this.everMovedRight && s.canScrollRight() && (!r || r.distance > c) && (r = {
                  scrollCache: s,
                  name: "right",
                  distance: c
              }))
          }
          return r
      }
      ,
      e.prototype.buildCaches = function() {
          return this.queryScrollEls().map((function(e) {
              return e === window ? new h(!1) : new p(e,!1)
          }
          ))
      }
      ,
      e.prototype.queryScrollEls = function() {
          for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
              var r = n[t];
              "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
          }
          return e
      }
      ,
      e
  }()
    , v = function(e) {
      function n(n) {
          var r = e.call(this, n) || this;
          r.delay = null,
          r.minDistance = 0,
          r.touchScrollAllowed = !0,
          r.mirrorNeedsRevert = !1,
          r.isInteracting = !1,
          r.isDragging = !1,
          r.isDelayEnded = !1,
          r.isDistanceSurpassed = !1,
          r.delayTimeoutId = null,
          r.onPointerDown = function(e) {
              r.isDragging || (r.isInteracting = !0,
              r.isDelayEnded = !1,
              r.isDistanceSurpassed = !1,
              t.preventSelection(document.body),
              t.preventContextMenu(document.body),
              e.isTouch || e.origEvent.preventDefault(),
              r.emitter.trigger("pointerdown", e),
              r.pointer.shouldIgnoreMove || (r.mirror.setIsVisible(!1),
              r.mirror.start(e.subjectEl, e.pageX, e.pageY),
              r.startDelay(e),
              r.minDistance || r.handleDistanceSurpassed(e)))
          }
          ,
          r.onPointerMove = function(e) {
              if (r.isInteracting) {
                  if (r.emitter.trigger("pointermove", e),
                  !r.isDistanceSurpassed) {
                      var t = r.minDistance
                        , n = e.deltaX
                        , i = e.deltaY;
                      n * n + i * i >= t * t && r.handleDistanceSurpassed(e)
                  }
                  r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY),
                  r.autoScroller.handleMove(e.pageX, e.pageY)),
                  r.emitter.trigger("dragmove", e))
              }
          }
          ,
          r.onPointerUp = function(e) {
              r.isInteracting && (r.isInteracting = !1,
              t.allowSelection(document.body),
              t.allowContextMenu(document.body),
              r.emitter.trigger("pointerup", e),
              r.isDragging && (r.autoScroller.stop(),
              r.tryStopDrag(e)),
              r.delayTimeoutId && (clearTimeout(r.delayTimeoutId),
              r.delayTimeoutId = null))
          }
          ;
          var i = r.pointer = new l(n);
          return i.emitter.on("pointerdown", r.onPointerDown),
          i.emitter.on("pointermove", r.onPointerMove),
          i.emitter.on("pointerup", r.onPointerUp),
          r.mirror = new u,
          r.autoScroller = new g,
          r
      }
      return r(n, e),
      n.prototype.destroy = function() {
          this.pointer.destroy()
      }
      ,
      n.prototype.startDelay = function(e) {
          var t = this;
          "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((function() {
              t.delayTimeoutId = null,
              t.handleDelayEnd(e)
          }
          ), this.delay) : this.handleDelayEnd(e)
      }
      ,
      n.prototype.handleDelayEnd = function(e) {
          this.isDelayEnded = !0,
          this.tryStartDrag(e)
      }
      ,
      n.prototype.handleDistanceSurpassed = function(e) {
          this.isDistanceSurpassed = !0,
          this.tryStartDrag(e)
      }
      ,
      n.prototype.tryStartDrag = function(e) {
          this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0,
          this.mirrorNeedsRevert = !1,
          this.autoScroller.start(e.pageX, e.pageY),
          this.emitter.trigger("dragstart", e),
          !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
      }
      ,
      n.prototype.tryStopDrag = function(e) {
          this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
      }
      ,
      n.prototype.stopDrag = function(e) {
          this.isDragging = !1,
          this.emitter.trigger("dragend", e)
      }
      ,
      n.prototype.setIgnoreMove = function(e) {
          this.pointer.shouldIgnoreMove = e
      }
      ,
      n.prototype.setMirrorIsVisible = function(e) {
          this.mirror.setIsVisible(e)
      }
      ,
      n.prototype.setMirrorNeedsRevert = function(e) {
          this.mirrorNeedsRevert = e
      }
      ,
      n.prototype.setAutoScrollEnabled = function(e) {
          this.autoScroller.isEnabled = e
      }
      ,
      n
  }(t.ElementDragging)
    , m = function() {
      function e(e) {
          this.origRect = t.computeRect(e),
          this.scrollCaches = t.getClippingParents(e).map((function(e) {
              return new p(e,!0)
          }
          ))
      }
      return e.prototype.destroy = function() {
          for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
              t[e].destroy()
          }
      }
      ,
      e.prototype.computeLeft = function() {
          for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
              var r = n[t];
              e += r.origScrollLeft - r.getScrollLeft()
          }
          return e
      }
      ,
      e.prototype.computeTop = function() {
          for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
              var r = n[t];
              e += r.origScrollTop - r.getScrollTop()
          }
          return e
      }
      ,
      e.prototype.isWithinClipping = function(e, n) {
          for (var r, i, o = {
              left: e,
              top: n
          }, s = 0, a = this.scrollCaches; s < a.length; s++) {
              var l = a[s];
              if (r = l.getEventTarget(),
              i = void 0,
              "HTML" !== (i = r.tagName) && "BODY" !== i && !t.pointInsideRect(o, l.clientRect))
                  return !1
          }
          return !0
      }
      ,
      e
  }();
  var y = function() {
      function e(e, n) {
          var r = this;
          this.useSubjectCenter = !1,
          this.requireInitial = !0,
          this.initialHit = null,
          this.movingHit = null,
          this.finalHit = null,
          this.handlePointerDown = function(e) {
              var t = r.dragging;
              r.initialHit = null,
              r.movingHit = null,
              r.finalHit = null,
              r.prepareHits(),
              r.processFirstCoord(e),
              r.initialHit || !r.requireInitial ? (t.setIgnoreMove(!1),
              r.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
          }
          ,
          this.handleDragStart = function(e) {
              r.emitter.trigger("dragstart", e),
              r.handleMove(e, !0)
          }
          ,
          this.handleDragMove = function(e) {
              r.emitter.trigger("dragmove", e),
              r.handleMove(e)
          }
          ,
          this.handlePointerUp = function(e) {
              r.releaseHits(),
              r.emitter.trigger("pointerup", e)
          }
          ,
          this.handleDragEnd = function(e) {
              r.movingHit && r.emitter.trigger("hitupdate", null, !0, e),
              r.finalHit = r.movingHit,
              r.movingHit = null,
              r.emitter.trigger("dragend", e)
          }
          ,
          this.droppableStore = n,
          e.emitter.on("pointerdown", this.handlePointerDown),
          e.emitter.on("dragstart", this.handleDragStart),
          e.emitter.on("dragmove", this.handleDragMove),
          e.emitter.on("pointerup", this.handlePointerUp),
          e.emitter.on("dragend", this.handleDragEnd),
          this.dragging = e,
          this.emitter = new t.EmitterMixin
      }
      return e.prototype.processFirstCoord = function(e) {
          var n, r = {
              left: e.pageX,
              top: e.pageY
          }, i = r, o = e.subjectEl;
          o !== document && (n = t.computeRect(o),
          i = t.constrainPoint(i, n));
          var s = this.initialHit = this.queryHitForOffset(i.left, i.top);
          if (s) {
              if (this.useSubjectCenter && n) {
                  var a = t.intersectRects(n, s.rect);
                  a && (i = t.getRectCenter(a))
              }
              this.coordAdjust = t.diffPoints(i, r)
          } else
              this.coordAdjust = {
                  left: 0,
                  top: 0
              }
      }
      ,
      e.prototype.handleMove = function(e, t) {
          var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
          !t && E(this.movingHit, n) || (this.movingHit = n,
          this.emitter.trigger("hitupdate", n, !1, e))
      }
      ,
      e.prototype.prepareHits = function() {
          this.offsetTrackers = t.mapHash(this.droppableStore, (function(e) {
              return e.component.buildPositionCaches(),
              new m(e.el)
          }
          ))
      }
      ,
      e.prototype.releaseHits = function() {
          var e = this.offsetTrackers;
          for (var t in e)
              e[t].destroy();
          this.offsetTrackers = {}
      }
      ,
      e.prototype.queryHitForOffset = function(e, n) {
          var r = this.droppableStore
            , i = this.offsetTrackers
            , o = null;
          for (var s in r) {
              var a = r[s].component
                , l = i[s];
              if (l.isWithinClipping(e, n)) {
                  var c = l.computeLeft()
                    , u = l.computeTop()
                    , d = e - c
                    , p = n - u
                    , h = l.origRect
                    , f = h.right - h.left
                    , g = h.bottom - h.top;
                  if (d >= 0 && d < f && p >= 0 && p < g) {
                      var v = a.queryHit(d, p, f, g);
                      !v || a.props.dateProfile && !t.rangeContainsRange(a.props.dateProfile.activeRange, v.dateSpan.range) || o && !(v.layer > o.layer) || (v.rect.left += c,
                      v.rect.right += c,
                      v.rect.top += u,
                      v.rect.bottom += u,
                      o = v)
                  }
              }
          }
          return o
      }
      ,
      e
  }();
  function E(e, n) {
      return !e && !n || Boolean(e) === Boolean(n) && t.isDateSpansEqual(e.dateSpan, n.dateSpan)
  }
  var S = function(e) {
      function n(n) {
          var r = e.call(this, n) || this;
          r.handlePointerDown = function(e) {
              var t = r.dragging;
              t.setIgnoreMove(!r.component.isValidDateDownEl(t.pointer.downEl))
          }
          ,
          r.handleDragEnd = function(e) {
              var t = r.component.context
                , n = t.calendar
                , i = t.view;
              if (!r.dragging.pointer.wasTouchScroll) {
                  var o = r.hitDragging
                    , s = o.initialHit
                    , a = o.finalHit;
                  s && a && E(s, a) && n.triggerDateClick(s.dateSpan, s.dayEl, i, e.origEvent)
              }
          }
          ;
          var i = n.component;
          r.dragging = new v(i.el),
          r.dragging.autoScroller.isEnabled = !1;
          var o = r.hitDragging = new y(r.dragging,t.interactionSettingsToStore(n));
          return o.emitter.on("pointerdown", r.handlePointerDown),
          o.emitter.on("dragend", r.handleDragEnd),
          r
      }
      return r(n, e),
      n.prototype.destroy = function() {
          this.dragging.destroy()
      }
      ,
      n
  }(t.Interaction)
    , b = function(e) {
      function n(n) {
          var r = e.call(this, n) || this;
          r.dragSelection = null,
          r.handlePointerDown = function(e) {
              var t = r
                , n = t.component
                , i = t.dragging
                , o = n.context.options.selectable && n.isValidDateDownEl(e.origEvent.target);
              i.setIgnoreMove(!o),
              i.delay = e.isTouch ? function(e) {
                  var t = e.context.options
                    , n = t.selectLongPressDelay;
                  null == n && (n = t.longPressDelay);
                  return n
              }(n) : null
          }
          ,
          r.handleDragStart = function(e) {
              r.component.context.calendar.unselect(e)
          }
          ,
          r.handleHitUpdate = function(e, n) {
              var o = r.component.context.calendar
                , s = null
                , a = !1;
              e && ((s = function(e, n, r) {
                  var o = e.dateSpan
                    , s = n.dateSpan
                    , a = [o.range.start, o.range.end, s.range.start, s.range.end];
                  a.sort(t.compareNumbers);
                  for (var l = {}, c = 0, u = r; c < u.length; c++) {
                      var d = (0,
                      u[c])(e, n);
                      if (!1 === d)
                          return null;
                      d && i(l, d)
                  }
                  return l.range = {
                      start: a[0],
                      end: a[3]
                  },
                  l.allDay = o.allDay,
                  l
              }(r.hitDragging.initialHit, e, o.pluginSystem.hooks.dateSelectionTransformers)) && r.component.isDateSelectionValid(s) || (a = !0,
              s = null)),
              s ? o.dispatch({
                  type: "SELECT_DATES",
                  selection: s
              }) : n || o.dispatch({
                  type: "UNSELECT_DATES"
              }),
              a ? t.disableCursor() : t.enableCursor(),
              n || (r.dragSelection = s)
          }
          ,
          r.handlePointerUp = function(e) {
              r.dragSelection && (r.component.context.calendar.triggerDateSelect(r.dragSelection, e),
              r.dragSelection = null)
          }
          ;
          var o = n.component
            , s = o.context.options
            , a = r.dragging = new v(o.el);
          a.touchScrollAllowed = !1,
          a.minDistance = s.selectMinDistance || 0,
          a.autoScroller.isEnabled = s.dragScroll;
          var l = r.hitDragging = new y(r.dragging,t.interactionSettingsToStore(n));
          return l.emitter.on("pointerdown", r.handlePointerDown),
          l.emitter.on("dragstart", r.handleDragStart),
          l.emitter.on("hitupdate", r.handleHitUpdate),
          l.emitter.on("pointerup", r.handlePointerUp),
          r
      }
      return r(n, e),
      n.prototype.destroy = function() {
          this.dragging.destroy()
      }
      ,
      n
  }(t.Interaction);
  var D = function(e) {
      function n(r) {
          var o = e.call(this, r) || this;
          o.subjectSeg = null,
          o.isDragging = !1,
          o.eventRange = null,
          o.relevantEvents = null,
          o.receivingCalendar = null,
          o.validMutation = null,
          o.mutatedRelevantEvents = null,
          o.handlePointerDown = function(e) {
              var n = e.origEvent.target
                , r = o
                , i = r.component
                , s = r.dragging
                , a = s.mirror
                , l = i.context.options
                , c = i.context.calendar
                , u = o.subjectSeg = t.getElSeg(e.subjectEl)
                , d = (o.eventRange = u.eventRange).instance.instanceId;
              o.relevantEvents = t.getRelevantEvents(c.state.eventStore, d),
              s.minDistance = e.isTouch ? 0 : l.eventDragMinDistance,
              s.delay = e.isTouch && d !== i.props.eventSelection ? function(e) {
                  var t = e.context.options
                    , n = t.eventLongPressDelay;
                  null == n && (n = t.longPressDelay);
                  return n
              }(i) : null,
              a.parentNode = c.el,
              a.revertDuration = l.dragRevertDuration;
              var p = i.isValidSegDownEl(n) && !t.elementClosest(n, ".fc-resizer");
              s.setIgnoreMove(!p),
              o.isDragging = p && e.subjectEl.classList.contains("fc-draggable")
          }
          ,
          o.handleDragStart = function(e) {
              var n = o.component.context
                , r = n.calendar
                , i = o.eventRange
                , s = i.instance.instanceId;
              e.isTouch ? s !== o.component.props.eventSelection && r.dispatch({
                  type: "SELECT_EVENT",
                  eventInstanceId: s
              }) : r.dispatch({
                  type: "UNSELECT_EVENT"
              }),
              o.isDragging && (r.unselect(e),
              r.publiclyTrigger("eventDragStart", [{
                  el: o.subjectSeg.el,
                  event: new t.EventApi(r,i.def,i.instance),
                  jsEvent: e.origEvent,
                  view: n.view
              }]))
          }
          ,
          o.handleHitUpdate = function(e, n) {
              if (o.isDragging) {
                  var r = o.relevantEvents
                    , i = o.hitDragging.initialHit
                    , s = o.component.context.calendar
                    , a = null
                    , l = null
                    , c = null
                    , u = !1
                    , d = {
                      affectedEvents: r,
                      mutatedEvents: t.createEmptyEventStore(),
                      isEvent: !0,
                      origSeg: o.subjectSeg
                  };
                  if (e) {
                      var p = e.component;
                      a = p.context.calendar;
                      var h = p.context.options;
                      s === a || h.editable && h.droppable ? (l = function(e, n, r) {
                          var i = e.dateSpan
                            , o = n.dateSpan
                            , s = i.range.start
                            , a = o.range.start
                            , l = {};
                          i.allDay !== o.allDay && (l.allDay = o.allDay,
                          l.hasEnd = n.component.context.options.allDayMaintainDuration,
                          o.allDay && (s = t.startOfDay(s)));
                          var c = t.diffDates(s, a, e.component.context.dateEnv, e.component === n.component ? e.component.largeUnit : null);
                          c.milliseconds && (l.allDay = !1);
                          for (var u = {
                              datesDelta: c,
                              standardProps: l
                          }, d = 0, p = r; d < p.length; d++) {
                              (0,
                              p[d])(u, e, n)
                          }
                          return u
                      }(i, e, a.pluginSystem.hooks.eventDragMutationMassagers)) && (c = t.applyMutationToEventStore(r, a.eventUiBases, l, a),
                      d.mutatedEvents = c,
                      p.isInteractionValid(d) || (u = !0,
                      l = null,
                      c = null,
                      d.mutatedEvents = t.createEmptyEventStore())) : a = null
                  }
                  o.displayDrag(a, d),
                  u ? t.disableCursor() : t.enableCursor(),
                  n || (s === a && E(i, e) && (l = null),
                  o.dragging.setMirrorNeedsRevert(!l),
                  o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-mirror")),
                  o.receivingCalendar = a,
                  o.validMutation = l,
                  o.mutatedRelevantEvents = c)
              }
          }
          ,
          o.handlePointerUp = function() {
              o.isDragging || o.cleanup()
          }
          ,
          o.handleDragEnd = function(e) {
              if (o.isDragging) {
                  var n = o.component.context
                    , r = n.calendar
                    , s = n.view
                    , a = o
                    , l = a.receivingCalendar
                    , c = a.validMutation
                    , u = o.eventRange.def
                    , d = o.eventRange.instance
                    , p = new t.EventApi(r,u,d)
                    , h = o.relevantEvents
                    , f = o.mutatedRelevantEvents
                    , g = o.hitDragging.finalHit;
                  if (o.clearDrag(),
                  r.publiclyTrigger("eventDragStop", [{
                      el: o.subjectSeg.el,
                      event: p,
                      jsEvent: e.origEvent,
                      view: s
                  }]),
                  c) {
                      if (l === r) {
                          r.dispatch({
                              type: "MERGE_EVENTS",
                              eventStore: f
                          });
                          for (var v = {}, m = 0, y = r.pluginSystem.hooks.eventDropTransformers; m < y.length; m++) {
                              var E = y[m];
                              i(v, E(c, r))
                          }
                          var S = i({}, v, {
                              el: e.subjectEl,
                              delta: c.datesDelta,
                              oldEvent: p,
                              event: new t.EventApi(r,f.defs[u.defId],d ? f.instances[d.instanceId] : null),
                              revert: function() {
                                  r.dispatch({
                                      type: "MERGE_EVENTS",
                                      eventStore: h
                                  })
                              },
                              jsEvent: e.origEvent,
                              view: s
                          });
                          r.publiclyTrigger("eventDrop", [S])
                      } else if (l) {
                          r.publiclyTrigger("eventLeave", [{
                              draggedEl: e.subjectEl,
                              event: p,
                              view: s
                          }]),
                          r.dispatch({
                              type: "REMOVE_EVENT_INSTANCES",
                              instances: o.mutatedRelevantEvents.instances
                          }),
                          l.dispatch({
                              type: "MERGE_EVENTS",
                              eventStore: o.mutatedRelevantEvents
                          }),
                          e.isTouch && l.dispatch({
                              type: "SELECT_EVENT",
                              eventInstanceId: d.instanceId
                          });
                          var b = i({}, l.buildDatePointApi(g.dateSpan), {
                              draggedEl: e.subjectEl,
                              jsEvent: e.origEvent,
                              view: g.component
                          });
                          l.publiclyTrigger("drop", [b]),
                          l.publiclyTrigger("eventReceive", [{
                              draggedEl: e.subjectEl,
                              event: new t.EventApi(l,f.defs[u.defId],f.instances[d.instanceId]),
                              view: g.component
                          }])
                      }
                  } else
                      r.publiclyTrigger("_noEventDrop")
              }
              o.cleanup()
          }
          ;
          var s = o.component
            , a = s.context.options
            , l = o.dragging = new v(s.el);
          l.pointer.selector = n.SELECTOR,
          l.touchScrollAllowed = !1,
          l.autoScroller.isEnabled = a.dragScroll;
          var c = o.hitDragging = new y(o.dragging,t.interactionSettingsStore);
          return c.useSubjectCenter = r.useEventCenter,
          c.emitter.on("pointerdown", o.handlePointerDown),
          c.emitter.on("dragstart", o.handleDragStart),
          c.emitter.on("hitupdate", o.handleHitUpdate),
          c.emitter.on("pointerup", o.handlePointerUp),
          c.emitter.on("dragend", o.handleDragEnd),
          o
      }
      return r(n, e),
      n.prototype.destroy = function() {
          this.dragging.destroy()
      }
      ,
      n.prototype.displayDrag = function(e, n) {
          var r = this.component.context.calendar
            , i = this.receivingCalendar;
          i && i !== e && (i === r ? i.dispatch({
              type: "SET_EVENT_DRAG",
              state: {
                  affectedEvents: n.affectedEvents,
                  mutatedEvents: t.createEmptyEventStore(),
                  isEvent: !0,
                  origSeg: n.origSeg
              }
          }) : i.dispatch({
              type: "UNSET_EVENT_DRAG"
          })),
          e && e.dispatch({
              type: "SET_EVENT_DRAG",
              state: n
          })
      }
      ,
      n.prototype.clearDrag = function() {
          var e = this.component.context.calendar
            , t = this.receivingCalendar;
          t && t.dispatch({
              type: "UNSET_EVENT_DRAG"
          }),
          e !== t && e.dispatch({
              type: "UNSET_EVENT_DRAG"
          })
      }
      ,
      n.prototype.cleanup = function() {
          this.subjectSeg = null,
          this.isDragging = !1,
          this.eventRange = null,
          this.relevantEvents = null,
          this.receivingCalendar = null,
          this.validMutation = null,
          this.mutatedRelevantEvents = null
      }
      ,
      n.SELECTOR = ".fc-draggable, .fc-resizable",
      n
  }(t.Interaction);
  var w = function(e) {
      function n(n) {
          var r = e.call(this, n) || this;
          r.draggingSeg = null,
          r.eventRange = null,
          r.relevantEvents = null,
          r.validMutation = null,
          r.mutatedRelevantEvents = null,
          r.handlePointerDown = function(e) {
              var t = r.component
                , n = r.querySeg(e)
                , i = r.eventRange = n.eventRange;
              r.dragging.minDistance = t.context.options.eventDragMinDistance,
              r.dragging.setIgnoreMove(!r.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && r.component.props.eventSelection !== i.instance.instanceId)
          }
          ,
          r.handleDragStart = function(e) {
              var n = r.component.context
                , i = n.calendar
                , o = n.view
                , s = r.eventRange;
              r.relevantEvents = t.getRelevantEvents(i.state.eventStore, r.eventRange.instance.instanceId),
              r.draggingSeg = r.querySeg(e),
              i.unselect(),
              i.publiclyTrigger("eventResizeStart", [{
                  el: r.draggingSeg.el,
                  event: new t.EventApi(i,s.def,s.instance),
                  jsEvent: e.origEvent,
                  view: o
              }])
          }
          ,
          r.handleHitUpdate = function(e, n, o) {
              var s = r.component.context.calendar
                , a = r.relevantEvents
                , l = r.hitDragging.initialHit
                , c = r.eventRange.instance
                , u = null
                , d = null
                , p = !1
                , h = {
                  affectedEvents: a,
                  mutatedEvents: t.createEmptyEventStore(),
                  isEvent: !0,
                  origSeg: r.draggingSeg
              };
              e && (u = function(e, n, r, o, s) {
                  for (var a = e.component.context.dateEnv, l = e.dateSpan.range.start, c = n.dateSpan.range.start, u = t.diffDates(l, c, a, e.component.largeUnit), d = {}, p = 0, h = s; p < h.length; p++) {
                      var f = (0,
                      h[p])(e, n);
                      if (!1 === f)
                          return null;
                      f && i(d, f)
                  }
                  if (r) {
                      if (a.add(o.start, u) < o.end)
                          return d.startDelta = u,
                          d
                  } else if (a.add(o.end, u) > o.start)
                      return d.endDelta = u,
                      d;
                  return null
              }(l, e, o.subjectEl.classList.contains("fc-start-resizer"), c.range, s.pluginSystem.hooks.eventResizeJoinTransforms)),
              u && (d = t.applyMutationToEventStore(a, s.eventUiBases, u, s),
              h.mutatedEvents = d,
              r.component.isInteractionValid(h) || (p = !0,
              u = null,
              d = null,
              h.mutatedEvents = null)),
              d ? s.dispatch({
                  type: "SET_EVENT_RESIZE",
                  state: h
              }) : s.dispatch({
                  type: "UNSET_EVENT_RESIZE"
              }),
              p ? t.disableCursor() : t.enableCursor(),
              n || (u && E(l, e) && (u = null),
              r.validMutation = u,
              r.mutatedRelevantEvents = d)
          }
          ,
          r.handleDragEnd = function(e) {
              var n = r.component.context
                , i = n.calendar
                , o = n.view
                , s = r.eventRange.def
                , a = r.eventRange.instance
                , l = new t.EventApi(i,s,a)
                , c = r.relevantEvents
                , u = r.mutatedRelevantEvents;
              i.publiclyTrigger("eventResizeStop", [{
                  el: r.draggingSeg.el,
                  event: l,
                  jsEvent: e.origEvent,
                  view: o
              }]),
              r.validMutation ? (i.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: u
              }),
              i.publiclyTrigger("eventResize", [{
                  el: r.draggingSeg.el,
                  startDelta: r.validMutation.startDelta || t.createDuration(0),
                  endDelta: r.validMutation.endDelta || t.createDuration(0),
                  prevEvent: l,
                  event: new t.EventApi(i,u.defs[s.defId],a ? u.instances[a.instanceId] : null),
                  revert: function() {
                      i.dispatch({
                          type: "MERGE_EVENTS",
                          eventStore: c
                      })
                  },
                  jsEvent: e.origEvent,
                  view: o
              }])) : i.publiclyTrigger("_noEventResize"),
              r.draggingSeg = null,
              r.relevantEvents = null,
              r.validMutation = null
          }
          ;
          var o = n.component
            , s = r.dragging = new v(o.el);
          s.pointer.selector = ".fc-resizer",
          s.touchScrollAllowed = !1,
          s.autoScroller.isEnabled = o.context.options.dragScroll;
          var a = r.hitDragging = new y(r.dragging,t.interactionSettingsToStore(n));
          return a.emitter.on("pointerdown", r.handlePointerDown),
          a.emitter.on("dragstart", r.handleDragStart),
          a.emitter.on("hitupdate", r.handleHitUpdate),
          a.emitter.on("dragend", r.handleDragEnd),
          r
      }
      return r(n, e),
      n.prototype.destroy = function() {
          this.dragging.destroy()
      }
      ,
      n.prototype.querySeg = function(e) {
          return t.getElSeg(t.elementClosest(e.subjectEl, this.component.fgSegSelector))
      }
      ,
      n
  }(t.Interaction);
  var T = function() {
      function e(e) {
          var n = this;
          this.isRecentPointerDateSelect = !1,
          this.onSelect = function(e) {
              e.jsEvent && (n.isRecentPointerDateSelect = !0)
          }
          ,
          this.onDocumentPointerUp = function(e) {
              var r = n
                , i = r.calendar
                , o = r.documentPointer
                , s = i.state;
              if (!o.wasTouchScroll) {
                  if (s.dateSelection && !n.isRecentPointerDateSelect) {
                      var a = i.viewOpt("unselectAuto")
                        , l = i.viewOpt("unselectCancel");
                      !a || a && t.elementClosest(o.downEl, l) || i.unselect(e)
                  }
                  s.eventSelection && !t.elementClosest(o.downEl, D.SELECTOR) && i.dispatch({
                      type: "UNSELECT_EVENT"
                  })
              }
              n.isRecentPointerDateSelect = !1
          }
          ,
          this.calendar = e;
          var r = this.documentPointer = new l(document);
          r.shouldIgnoreMove = !0,
          r.shouldWatchScroll = !1,
          r.emitter.on("pointerup", this.onDocumentPointerUp),
          e.on("select", this.onSelect)
      }
      return e.prototype.destroy = function() {
          this.calendar.off("select", this.onSelect),
          this.documentPointer.destroy()
      }
      ,
      e
  }()
    , C = function() {
      function e(e, n) {
          var r = this;
          this.receivingCalendar = null,
          this.droppableEvent = null,
          this.suppliedDragMeta = null,
          this.dragMeta = null,
          this.handleDragStart = function(e) {
              r.dragMeta = r.buildDragMeta(e.subjectEl)
          }
          ,
          this.handleHitUpdate = function(e, n, o) {
              var s = r.hitDragging.dragging
                , a = null
                , l = null
                , c = !1
                , u = {
                  affectedEvents: t.createEmptyEventStore(),
                  mutatedEvents: t.createEmptyEventStore(),
                  isEvent: r.dragMeta.create,
                  origSeg: null
              };
              e && (a = e.component.context.calendar,
              r.canDropElOnCalendar(o.subjectEl, a) && (l = function(e, n, r) {
                  for (var o = i({}, n.leftoverProps), s = 0, a = r.pluginSystem.hooks.externalDefTransforms; s < a.length; s++) {
                      var l = a[s];
                      i(o, l(e, n))
                  }
                  var c = t.parseEventDef(o, n.sourceId, e.allDay, r.opt("forceEventDuration") || Boolean(n.duration), r)
                    , u = e.range.start;
                  e.allDay && n.startTime && (u = r.dateEnv.add(u, n.startTime));
                  var d = n.duration ? r.dateEnv.add(u, n.duration) : r.getDefaultEventEnd(e.allDay, u)
                    , p = t.createEventInstance(c.defId, {
                      start: u,
                      end: d
                  });
                  return {
                      def: c,
                      instance: p
                  }
              }(e.dateSpan, r.dragMeta, a),
              u.mutatedEvents = t.eventTupleToStore(l),
              (c = !t.isInteractionValid(u, a)) && (u.mutatedEvents = t.createEmptyEventStore(),
              l = null))),
              r.displayDrag(a, u),
              s.setMirrorIsVisible(n || !l || !document.querySelector(".fc-mirror")),
              c ? t.disableCursor() : t.enableCursor(),
              n || (s.setMirrorNeedsRevert(!l),
              r.receivingCalendar = a,
              r.droppableEvent = l)
          }
          ,
          this.handleDragEnd = function(e) {
              var n = r
                , o = n.receivingCalendar
                , s = n.droppableEvent;
              if (r.clearDrag(),
              o && s) {
                  var a = r.hitDragging.finalHit
                    , l = a.component.context.view
                    , c = r.dragMeta
                    , u = i({}, o.buildDatePointApi(a.dateSpan), {
                      draggedEl: e.subjectEl,
                      jsEvent: e.origEvent,
                      view: l
                  });
                  o.publiclyTrigger("drop", [u]),
                  c.create && (o.dispatch({
                      type: "MERGE_EVENTS",
                      eventStore: t.eventTupleToStore(s)
                  }),
                  e.isTouch && o.dispatch({
                      type: "SELECT_EVENT",
                      eventInstanceId: s.instance.instanceId
                  }),
                  o.publiclyTrigger("eventReceive", [{
                      draggedEl: e.subjectEl,
                      event: new t.EventApi(o,s.def,s.instance),
                      view: l
                  }]))
              }
              r.receivingCalendar = null,
              r.droppableEvent = null
          }
          ;
          var o = this.hitDragging = new y(e,t.interactionSettingsStore);
          o.requireInitial = !1,
          o.emitter.on("dragstart", this.handleDragStart),
          o.emitter.on("hitupdate", this.handleHitUpdate),
          o.emitter.on("dragend", this.handleDragEnd),
          this.suppliedDragMeta = n
      }
      return e.prototype.buildDragMeta = function(e) {
          return "object" == typeof this.suppliedDragMeta ? t.parseDragMeta(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? t.parseDragMeta(this.suppliedDragMeta(e)) : (n = function(e, n) {
              var r = t.config.dataAttrPrefix
                , i = (r ? r + "-" : "") + n;
              return e.getAttribute("data-" + i) || ""
          }(e, "event"),
          r = n ? JSON.parse(n) : {
              create: !1
          },
          t.parseDragMeta(r));
          var n, r
      }
      ,
      e.prototype.displayDrag = function(e, t) {
          var n = this.receivingCalendar;
          n && n !== e && n.dispatch({
              type: "UNSET_EVENT_DRAG"
          }),
          e && e.dispatch({
              type: "SET_EVENT_DRAG",
              state: t
          })
      }
      ,
      e.prototype.clearDrag = function() {
          this.receivingCalendar && this.receivingCalendar.dispatch({
              type: "UNSET_EVENT_DRAG"
          })
      }
      ,
      e.prototype.canDropElOnCalendar = function(e, n) {
          var r = n.opt("dropAccept");
          return "function" == typeof r ? r(e) : "string" != typeof r || !r || Boolean(t.elementMatches(e, r))
      }
      ,
      e
  }();
  t.config.dataAttrPrefix = "";
  var R = function() {
      function e(e, n) {
          var r = this;
          void 0 === n && (n = {}),
          this.handlePointerDown = function(e) {
              var n = r.dragging
                , i = r.settings
                , o = i.minDistance
                , s = i.longPressDelay;
              n.minDistance = null != o ? o : e.isTouch ? 0 : t.globalDefaults.eventDragMinDistance,
              n.delay = e.isTouch ? null != s ? s : t.globalDefaults.longPressDelay : 0
          }
          ,
          this.handleDragStart = function(e) {
              e.isTouch && r.dragging.delay && e.subjectEl.classList.contains("fc-event") && r.dragging.mirror.getMirrorEl().classList.add("fc-selected")
          }
          ,
          this.settings = n;
          var i = this.dragging = new v(e);
          i.touchScrollAllowed = !1,
          null != n.itemSelector && (i.pointer.selector = n.itemSelector),
          null != n.appendTo && (i.mirror.parentNode = n.appendTo),
          i.emitter.on("pointerdown", this.handlePointerDown),
          i.emitter.on("dragstart", this.handleDragStart),
          new C(i,n.eventData)
      }
      return e.prototype.destroy = function() {
          this.dragging.destroy()
      }
      ,
      e
  }()
    , I = function(e) {
      function t(t) {
          var n = e.call(this, t) || this;
          n.shouldIgnoreMove = !1,
          n.mirrorSelector = "",
          n.currentMirrorEl = null,
          n.handlePointerDown = function(e) {
              n.emitter.trigger("pointerdown", e),
              n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
          }
          ,
          n.handlePointerMove = function(e) {
              n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
          }
          ,
          n.handlePointerUp = function(e) {
              n.emitter.trigger("pointerup", e),
              n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
          }
          ;
          var r = n.pointer = new l(t);
          return r.emitter.on("pointerdown", n.handlePointerDown),
          r.emitter.on("pointermove", n.handlePointerMove),
          r.emitter.on("pointerup", n.handlePointerUp),
          n
      }
      return r(t, e),
      t.prototype.destroy = function() {
          this.pointer.destroy()
      }
      ,
      t.prototype.setIgnoreMove = function(e) {
          this.shouldIgnoreMove = e
      }
      ,
      t.prototype.setMirrorIsVisible = function(e) {
          if (e)
              this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "",
              this.currentMirrorEl = null);
          else {
              var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
              t && (this.currentMirrorEl = t,
              t.style.visibility = "hidden")
          }
      }
      ,
      t
  }(t.ElementDragging)
    , M = function() {
      function e(e, t) {
          var n = document;
          e === document || e instanceof Element ? (n = e,
          t = t || {}) : t = e || {};
          var r = this.dragging = new I(n);
          "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"),
          "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector),
          new C(r,t.eventData)
      }
      return e.prototype.destroy = function() {
          this.dragging.destroy()
      }
      ,
      e
  }()
    , P = t.createPlugin({
      componentInteractions: [S, b, D, w],
      calendarInteractions: [T],
      elementDraggingImpl: v
  });
  e.Draggable = R,
  e.FeaturefulElementDragging = v,
  e.PointerDragging = l,
  e.ThirdPartyDraggable = M,
  e.default = P,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}
)),
/*!
FullCalendar List View Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarList = {}, e.FullCalendar)
}(this, (function(e, t) {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
      }instanceof Array && function(e, t) {
          e.__proto__ = t
      }
      || function(e, t) {
          for (var n in t)
              t.hasOwnProperty(n) && (e[n] = t[n])
      }
      )(e, t)
  };
  function r(e, t) {
      function r() {
          this.constructor = e
      }
      n(e, t),
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
      new r)
  }
  var i = function(e) {
      function n(t) {
          var n = e.call(this) || this;
          return n.listView = t,
          n
      }
      return r(n, e),
      n.prototype.attachSegs = function(e) {
          e.length ? this.listView.renderSegList(e) : this.listView.renderEmptyMessage()
      }
      ,
      n.prototype.detachSegs = function() {}
      ,
      n.prototype.renderSegHtml = function(e) {
          var n, r = this.context, i = r.theme, o = r.options, s = e.eventRange, a = s.def, l = s.instance, c = s.ui, u = a.url, d = ["fc-list-item"].concat(c.classNames), p = c.backgroundColor;
          return n = a.allDay ? t.getAllDayHtml(o) : t.isMultiDayRange(s.range) ? e.isStart ? t.htmlEscape(this._getTimeText(l.range.start, e.end, !1)) : e.isEnd ? t.htmlEscape(this._getTimeText(e.start, l.range.end, !1)) : t.getAllDayHtml(o) : t.htmlEscape(this.getTimeText(s)),
          u && d.push("fc-has-url"),
          '<tr class="' + d.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + i.getClass("widgetContent") + '">' + (n || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + i.getClass("widgetContent") + '"><span class="fc-event-dot"' + (p ? ' style="background-color:' + p + '"' : "") + '></span></td><td class="fc-list-item-title ' + i.getClass("widgetContent") + '"><a' + (u ? ' href="' + t.htmlEscape(u) + '"' : "") + ">" + t.htmlEscape(a.title || "") + "</a></td></tr>"
      }
      ,
      n.prototype.computeEventTimeFormat = function() {
          return {
              hour: "numeric",
              minute: "2-digit",
              meridiem: "short"
          }
      }
      ,
      n
  }(t.FgEventRenderer)
    , o = function(e) {
      function n(n, r) {
          var o = e.call(this, n, r) || this;
          o.computeDateVars = t.memoize(s),
          o.eventStoreToSegs = t.memoize(o._eventStoreToSegs),
          o.renderSkeleton = t.memoizeRendering(o._renderSkeleton, o._unrenderSkeleton);
          var a = o.eventRenderer = new i(o);
          return o.renderContent = t.memoizeRendering(a.renderSegs.bind(a), a.unrender.bind(a), [o.renderSkeleton]),
          o
      }
      return r(n, e),
      n.prototype.firstContext = function(e) {
          e.calendar.registerInteractiveComponent(this, {
              el: this.el
          })
      }
      ,
      n.prototype.render = function(t, n) {
          e.prototype.render.call(this, t, n);
          var r = this.computeDateVars(t.dateProfile)
            , i = r.dayDates
            , o = r.dayRanges;
          this.dayDates = i,
          this.renderSkeleton(n),
          this.renderContent(n, this.eventStoreToSegs(t.eventStore, t.eventUiBases, o))
      }
      ,
      n.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderSkeleton.unrender(),
          this.renderContent.unrender(),
          this.context.calendar.unregisterInteractiveComponent(this)
      }
      ,
      n.prototype._renderSkeleton = function(e) {
          var n = e.theme;
          this.el.classList.add("fc-list-view");
          for (var r = 0, i = (n.getClass("listView") || "").split(" "); r < i.length; r++) {
              var o = i[r];
              o && this.el.classList.add(o)
          }
          this.scroller = new t.ScrollComponent("hidden","auto"),
          this.el.appendChild(this.scroller.el),
          this.contentEl = this.scroller.el
      }
      ,
      n.prototype._unrenderSkeleton = function() {
          this.scroller.destroy()
      }
      ,
      n.prototype.updateSize = function(t, n, r) {
          e.prototype.updateSize.call(this, t, n, r),
          this.eventRenderer.computeSizes(t),
          this.eventRenderer.assignSizes(t),
          this.scroller.clear(),
          r || this.scroller.setHeight(this.computeScrollerHeight(n))
      }
      ,
      n.prototype.computeScrollerHeight = function(e) {
          return e - t.subtractInnerElHeight(this.el, this.scroller.el)
      }
      ,
      n.prototype._eventStoreToSegs = function(e, n, r) {
          return this.eventRangesToSegs(t.sliceEventStore(e, n, this.props.dateProfile.activeRange, this.context.nextDayThreshold).fg, r)
      }
      ,
      n.prototype.eventRangesToSegs = function(e, t) {
          for (var n = [], r = 0, i = e; r < i.length; r++) {
              var o = i[r];
              n.push.apply(n, this.eventRangeToSegs(o, t))
          }
          return n
      }
      ,
      n.prototype.eventRangeToSegs = function(e, n) {
          var r, i, o, s = this.context, a = s.dateEnv, l = s.nextDayThreshold, c = e.range, u = e.def.allDay, d = [];
          for (r = 0; r < n.length; r++)
              if ((i = t.intersectRanges(c, n[r])) && (o = {
                  component: this,
                  eventRange: e,
                  start: i.start,
                  end: i.end,
                  isStart: e.isStart && i.start.valueOf() === c.start.valueOf(),
                  isEnd: e.isEnd && i.end.valueOf() === c.end.valueOf(),
                  dayIndex: r
              },
              d.push(o),
              !o.isEnd && !u && r + 1 < n.length && c.end < a.add(n[r + 1].start, l))) {
                  o.end = c.end,
                  o.isEnd = !0;
                  break
              }
          return d
      }
      ,
      n.prototype.renderEmptyMessage = function() {
          this.contentEl.innerHTML = '<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + t.htmlEscape(this.context.options.noEventsMessage) + "</div></div></div>"
      }
      ,
      n.prototype.renderSegList = function(e) {
          var n, r, i, o = this.context.theme, s = this.groupSegsByDay(e), a = t.htmlToElement('<table class="fc-list-table ' + o.getClass("tableList") + '"><tbody></tbody></table>'), l = a.querySelector("tbody");
          for (n = 0; n < s.length; n++)
              if (r = s[n])
                  for (l.appendChild(this.buildDayHeaderRow(this.dayDates[n])),
                  r = this.eventRenderer.sortEventSegs(r),
                  i = 0; i < r.length; i++)
                      l.appendChild(r[i].el);
          this.contentEl.innerHTML = "",
          this.contentEl.appendChild(a)
      }
      ,
      n.prototype.groupSegsByDay = function(e) {
          var t, n, r = [];
          for (t = 0; t < e.length; t++)
              (r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])).push(n);
          return r
      }
      ,
      n.prototype.buildDayHeaderRow = function(e) {
          var n = this.context
            , r = n.theme
            , i = n.dateEnv
            , o = n.options
            , s = t.createFormatter(o.listDayFormat)
            , a = t.createFormatter(o.listDayAltFormat);
          return t.createElement("tr", {
              className: "fc-list-heading",
              "data-date": i.formatIso(e, {
                  omitTime: !0
              })
          }, '<td class="' + (r.getClass("tableListHeading") || r.getClass("widgetHeader")) + '" colspan="3">' + (s ? t.buildGotoAnchorHtml(o, i, e, {
              class: "fc-list-heading-main"
          }, t.htmlEscape(i.format(e, s))) : "") + (a ? t.buildGotoAnchorHtml(o, i, e, {
              class: "fc-list-heading-alt"
          }, t.htmlEscape(i.format(e, a))) : "") + "</td>")
      }
      ,
      n
  }(t.View);
  function s(e) {
      for (var n = t.startOfDay(e.renderRange.start), r = e.renderRange.end, i = [], o = []; n < r; )
          i.push(n),
          o.push({
              start: n,
              end: t.addDays(n, 1)
          }),
          n = t.addDays(n, 1);
      return {
          dayDates: i,
          dayRanges: o
      }
  }
  o.prototype.fgSegSelector = ".fc-list-item";
  var a = t.createPlugin({
      views: {
          list: {
              class: o,
              buttonTextKey: "list",
              listDayFormat: {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
              }
          },
          listDay: {
              type: "list",
              duration: {
                  days: 1
              },
              listDayFormat: {
                  weekday: "long"
              }
          },
          listWeek: {
              type: "list",
              duration: {
                  weeks: 1
              },
              listDayFormat: {
                  weekday: "long"
              },
              listDayAltFormat: {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
              }
          },
          listMonth: {
              type: "list",
              duration: {
                  month: 1
              },
              listDayAltFormat: {
                  weekday: "long"
              }
          },
          listYear: {
              type: "list",
              duration: {
                  year: 1
              },
              listDayAltFormat: {
                  weekday: "long"
              }
          }
      }
  });
  e.ListView = o,
  e.default = a,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}
)),
/*!
FullCalendar Time Grid Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core"), require("@fullcalendar/daygrid")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core", "@fullcalendar/daygrid"], t) : t((e = e || self).FullCalendarTimeGrid = {}, e.FullCalendar, e.FullCalendarDayGrid)
}(this, (function(e, t, n) {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var r = function(e, t) {
      return (r = Object.setPrototypeOf || {
          __proto__: []
      }instanceof Array && function(e, t) {
          e.__proto__ = t
      }
      || function(e, t) {
          for (var n in t)
              t.hasOwnProperty(n) && (e[n] = t[n])
      }
      )(e, t)
  };
  function i(e, t) {
      function n() {
          this.constructor = e
      }
      r(e, t),
      e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
      new n)
  }
  var o = function() {
      return (o = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n])
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
      }
      ).apply(this, arguments)
  }
    , s = function(e) {
      function n(t) {
          var n = e.call(this) || this;
          return n.timeGrid = t,
          n
      }
      return i(n, e),
      n.prototype.renderSegs = function(n, r, i) {
          e.prototype.renderSegs.call(this, n, r, i),
          this.fullTimeFormat = t.createFormatter({
              hour: "numeric",
              minute: "2-digit",
              separator: this.context.options.defaultRangeSeparator
          })
      }
      ,
      n.prototype.attachSegs = function(e, t) {
          for (var n = this.timeGrid.groupSegsByCol(e), r = 0; r < n.length; r++)
              n[r] = this.sortEventSegs(n[r]);
          this.segsByCol = n,
          this.timeGrid.attachSegsByCol(n, this.timeGrid.fgContainerEls)
      }
      ,
      n.prototype.detachSegs = function(e) {
          e.forEach((function(e) {
              t.removeElement(e.el)
          }
          )),
          this.segsByCol = null
      }
      ,
      n.prototype.computeSegSizes = function(e) {
          var t = this.timeGrid
            , n = this.segsByCol
            , r = t.colCnt;
          if (t.computeSegVerticals(e),
          n)
              for (var i = 0; i < r; i++)
                  this.computeSegHorizontals(n[i])
      }
      ,
      n.prototype.assignSegSizes = function(e) {
          var t = this.timeGrid
            , n = this.segsByCol
            , r = t.colCnt;
          if (t.assignSegVerticals(e),
          n)
              for (var i = 0; i < r; i++)
                  this.assignSegCss(n[i])
      }
      ,
      n.prototype.computeEventTimeFormat = function() {
          return {
              hour: "numeric",
              minute: "2-digit",
              meridiem: !1
          }
      }
      ,
      n.prototype.computeDisplayEventEnd = function() {
          return !0
      }
      ,
      n.prototype.renderSegHtml = function(e, n) {
          var r, i, o, s = e.eventRange, a = s.def, l = s.ui, c = a.allDay, u = t.computeEventDraggable(this.context, a, l), d = e.isStart && t.computeEventStartResizable(this.context, a, l), p = e.isEnd && t.computeEventEndResizable(this.context, a, l), h = this.getSegClasses(e, u, d || p, n), f = t.cssToStr(this.getSkinCss(l));
          if (h.unshift("fc-time-grid-event"),
          t.isMultiDayRange(s.range)) {
              if (e.isStart || e.isEnd) {
                  var g = e.start
                    , v = e.end;
                  r = this._getTimeText(g, v, c),
                  i = this._getTimeText(g, v, c, this.fullTimeFormat),
                  o = this._getTimeText(g, v, c, null, !1)
              }
          } else
              r = this.getTimeText(s),
              i = this.getTimeText(s, this.fullTimeFormat),
              o = this.getTimeText(s, null, !1);
          return '<a class="' + h.join(" ") + '"' + (a.url ? ' href="' + t.htmlEscape(a.url) + '"' : "") + (f ? ' style="' + f + '"' : "") + '><div class="fc-content">' + (r ? '<div class="fc-time" data-start="' + t.htmlEscape(o) + '" data-full="' + t.htmlEscape(i) + '"><span>' + t.htmlEscape(r) + "</span></div>" : "") + (a.title ? '<div class="fc-title">' + t.htmlEscape(a.title) + "</div>" : "") + "</div>" + (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") + "</a>"
      }
      ,
      n.prototype.computeSegHorizontals = function(e) {
          var t, n, r;
          if (function(e) {
              var t, n, r, i, o;
              for (t = 0; t < e.length; t++)
                  for (n = e[t],
                  r = 0; r < n.length; r++)
                      for ((i = n[r]).forwardSegs = [],
                      o = t + 1; o < e.length; o++)
                          l(i, e[o], i.forwardSegs)
          }(t = function(e) {
              var t, n, r, i = [];
              for (t = 0; t < e.length; t++) {
                  for (n = e[t],
                  r = 0; r < i.length && l(n, i[r]).length; r++)
                      ;
                  n.level = r,
                  (i[r] || (i[r] = [])).push(n)
              }
              return i
          }(e)),
          n = t[0]) {
              for (r = 0; r < n.length; r++)
                  a(n[r]);
              for (r = 0; r < n.length; r++)
                  this.computeSegForwardBack(n[r], 0, 0)
          }
      }
      ,
      n.prototype.computeSegForwardBack = function(e, t, n) {
          var r, i = e.forwardSegs;
          if (void 0 === e.forwardCoord)
              for (i.length ? (this.sortForwardSegs(i),
              this.computeSegForwardBack(i[0], t + 1, n),
              e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1,
              e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1),
              r = 0; r < i.length; r++)
                  this.computeSegForwardBack(i[r], 0, e.forwardCoord)
      }
      ,
      n.prototype.sortForwardSegs = function(e) {
          var n = e.map(c)
            , r = [{
              field: "forwardPressure",
              order: -1
          }, {
              field: "backwardCoord",
              order: 1
          }].concat(this.context.eventOrderSpecs);
          return n.sort((function(e, n) {
              return t.compareByFieldSpecs(e, n, r)
          }
          )),
          n.map((function(e) {
              return e._seg
          }
          ))
      }
      ,
      n.prototype.assignSegCss = function(e) {
          for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              t.applyStyle(i.el, this.generateSegCss(i)),
              i.level > 0 && i.el.classList.add("fc-time-grid-event-inset"),
              i.eventRange.def.title && i.bottom - i.top < 30 && i.el.classList.add("fc-short")
          }
      }
      ,
      n.prototype.generateSegCss = function(e) {
          var t, n, r = this.context.options.slotEventOverlap, i = e.backwardCoord, o = e.forwardCoord, s = this.timeGrid.generateSegVerticalCss(e), a = this.context.isRtl;
          return r && (o = Math.min(1, i + 2 * (o - i))),
          a ? (t = 1 - o,
          n = i) : (t = i,
          n = 1 - o),
          s.zIndex = e.level + 1,
          s.left = 100 * t + "%",
          s.right = 100 * n + "%",
          r && e.forwardPressure && (s[a ? "marginLeft" : "marginRight"] = 20),
          s
      }
      ,
      n
  }(t.FgEventRenderer);
  function a(e) {
      var t, n, r = e.forwardSegs, i = 0;
      if (void 0 === e.forwardPressure) {
          for (t = 0; t < r.length; t++)
              a(n = r[t]),
              i = Math.max(i, 1 + n.forwardPressure);
          e.forwardPressure = i
      }
  }
  function l(e, t, n) {
      void 0 === n && (n = []);
      for (var r = 0; r < t.length; r++)
          i = e,
          o = t[r],
          i.bottom > o.top && i.top < o.bottom && n.push(t[r]);
      var i, o;
      return n
  }
  function c(e) {
      var n = t.buildSegCompareObj(e);
      return n.forwardPressure = e.forwardPressure,
      n.backwardCoord = e.backwardCoord,
      n
  }
  var u = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return i(t, e),
      t.prototype.attachSegs = function(e, t) {
          this.segsByCol = this.timeGrid.groupSegsByCol(e),
          this.timeGrid.attachSegsByCol(this.segsByCol, this.timeGrid.mirrorContainerEls),
          this.sourceSeg = t.sourceSeg
      }
      ,
      t.prototype.generateSegCss = function(t) {
          var n = e.prototype.generateSegCss.call(this, t)
            , r = this.sourceSeg;
          if (r && r.col === t.col) {
              var i = e.prototype.generateSegCss.call(this, r);
              n.left = i.left,
              n.right = i.right,
              n.marginLeft = i.marginLeft,
              n.marginRight = i.marginRight
          }
          return n
      }
      ,
      t
  }(s)
    , d = function(e) {
      function t(t) {
          var n = e.call(this) || this;
          return n.timeGrid = t,
          n
      }
      return i(t, e),
      t.prototype.attachSegs = function(e, t) {
          var n, r = this.timeGrid;
          return "bgEvent" === e ? n = r.bgContainerEls : "businessHours" === e ? n = r.businessContainerEls : "highlight" === e && (n = r.highlightContainerEls),
          r.attachSegsByCol(r.groupSegsByCol(t), n),
          t.map((function(e) {
              return e.el
          }
          ))
      }
      ,
      t.prototype.computeSegSizes = function(e) {
          this.timeGrid.computeSegVerticals(e)
      }
      ,
      t.prototype.assignSegSizes = function(e) {
          this.timeGrid.assignSegVerticals(e)
      }
      ,
      t
  }(t.FillRenderer)
    , p = [{
      hours: 1
  }, {
      minutes: 30
  }, {
      minutes: 15
  }, {
      seconds: 30
  }, {
      seconds: 15
  }]
    , h = function(e) {
      function r(n, r) {
          var i = e.call(this, n) || this;
          i.isSlatSizesDirty = !1,
          i.isColSizesDirty = !1,
          i.processOptions = t.memoize(i._processOptions),
          i.renderSkeleton = t.memoizeRendering(i._renderSkeleton),
          i.renderSlats = t.memoizeRendering(i._renderSlats, null, [i.renderSkeleton]),
          i.renderColumns = t.memoizeRendering(i._renderColumns, i._unrenderColumns, [i.renderSkeleton]),
          i.renderProps = r;
          var o = i.renderColumns
            , a = i.eventRenderer = new s(i)
            , l = i.fillRenderer = new d(i);
          return i.mirrorRenderer = new u(i),
          i.renderBusinessHours = t.memoizeRendering(l.renderSegs.bind(l, "businessHours"), l.unrender.bind(l, "businessHours"), [o]),
          i.renderDateSelection = t.memoizeRendering(i._renderDateSelection, i._unrenderDateSelection, [o]),
          i.renderFgEvents = t.memoizeRendering(a.renderSegs.bind(a), a.unrender.bind(a), [o]),
          i.renderBgEvents = t.memoizeRendering(l.renderSegs.bind(l, "bgEvent"), l.unrender.bind(l, "bgEvent"), [o]),
          i.renderEventSelection = t.memoizeRendering(a.selectByInstanceId.bind(a), a.unselectByInstanceId.bind(a), [i.renderFgEvents]),
          i.renderEventDrag = t.memoizeRendering(i._renderEventDrag, i._unrenderEventDrag, [o]),
          i.renderEventResize = t.memoizeRendering(i._renderEventResize, i._unrenderEventResize, [o]),
          i
      }
      return i(r, e),
      r.prototype._processOptions = function(e) {
          var n, r, i = e.slotDuration, o = e.snapDuration;
          i = t.createDuration(i),
          o = o ? t.createDuration(o) : i,
          null === (n = t.wholeDivideDurations(i, o)) && (o = i,
          n = 1),
          this.slotDuration = i,
          this.snapDuration = o,
          this.snapsPerSlot = n,
          r = e.slotLabelFormat,
          Array.isArray(r) && (r = r[r.length - 1]),
          this.labelFormat = t.createFormatter(r || {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "short"
          }),
          r = e.slotLabelInterval,
          this.labelInterval = r ? t.createDuration(r) : this.computeLabelInterval(i)
      }
      ,
      r.prototype.computeLabelInterval = function(e) {
          var n, r, i;
          for (n = p.length - 1; n >= 0; n--)
              if (r = t.createDuration(p[n]),
              null !== (i = t.wholeDivideDurations(r, e)) && i > 1)
                  return r;
          return e
      }
      ,
      r.prototype.render = function(e, t) {
          this.processOptions(t.options);
          var n = e.cells;
          this.colCnt = n.length,
          this.renderSkeleton(t.theme),
          this.renderSlats(e.dateProfile),
          this.renderColumns(e.cells, e.dateProfile),
          this.renderBusinessHours(t, e.businessHourSegs),
          this.renderDateSelection(e.dateSelectionSegs),
          this.renderFgEvents(t, e.fgEventSegs),
          this.renderBgEvents(t, e.bgEventSegs),
          this.renderEventSelection(e.eventSelection),
          this.renderEventDrag(e.eventDrag),
          this.renderEventResize(e.eventResize)
      }
      ,
      r.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderSlats.unrender(),
          this.renderColumns.unrender(),
          this.renderSkeleton.unrender()
      }
      ,
      r.prototype.updateSize = function(e) {
          var t = this
            , n = t.fillRenderer
            , r = t.eventRenderer
            , i = t.mirrorRenderer;
          (e || this.isSlatSizesDirty) && (this.buildSlatPositions(),
          this.isSlatSizesDirty = !1),
          (e || this.isColSizesDirty) && (this.buildColPositions(),
          this.isColSizesDirty = !1),
          n.computeSizes(e),
          r.computeSizes(e),
          i.computeSizes(e),
          n.assignSizes(e),
          r.assignSizes(e),
          i.assignSizes(e)
      }
      ,
      r.prototype._renderSkeleton = function(e) {
          var t = this.el;
          t.innerHTML = '<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + e.getClass("widgetHeader") + '" style="display:none" />',
          this.rootBgContainerEl = t.querySelector(".fc-bg"),
          this.slatContainerEl = t.querySelector(".fc-slats"),
          this.bottomRuleEl = t.querySelector(".fc-divider")
      }
      ,
      r.prototype._renderSlats = function(e) {
          var n = this.context.theme;
          this.slatContainerEl.innerHTML = '<table class="' + n.getClass("tableGrid") + '">' + this.renderSlatRowHtml(e) + "</table>",
          this.slatEls = t.findElements(this.slatContainerEl, "tr"),
          this.slatPositions = new t.PositionCache(this.el,this.slatEls,!1,!0),
          this.isSlatSizesDirty = !0
      }
      ,
      r.prototype.renderSlatRowHtml = function(e) {
          for (var n, r, i, o = this.context, s = o.dateEnv, a = o.theme, l = o.isRtl, c = "", u = t.startOfDay(e.renderRange.start), d = e.minTime, p = t.createDuration(0); t.asRoughMs(d) < t.asRoughMs(e.maxTime); )
              n = s.add(u, d),
              r = null !== t.wholeDivideDurations(p, this.labelInterval),
              i = '<td class="fc-axis fc-time ' + a.getClass("widgetContent") + '">' + (r ? "<span>" + t.htmlEscape(s.format(n, this.labelFormat)) + "</span>" : "") + "</td>",
              c += '<tr data-time="' + t.formatIsoTimeString(n) + '"' + (r ? "" : ' class="fc-minor"') + ">" + (l ? "" : i) + '<td class="' + a.getClass("widgetContent") + '"></td>' + (l ? i : "") + "</tr>",
              d = t.addDurations(d, this.slotDuration),
              p = t.addDurations(p, this.slotDuration);
          return c
      }
      ,
      r.prototype._renderColumns = function(e, r) {
          var i = this.context
            , o = i.calendar
            , s = i.view
            , a = i.isRtl
            , l = i.theme
            , c = i.dateEnv
            , u = new n.DayBgRow(this.context);
          this.rootBgContainerEl.innerHTML = '<table class="' + l.getClass("tableGrid") + '">' + u.renderHtml({
              cells: e,
              dateProfile: r,
              renderIntroHtml: this.renderProps.renderBgIntroHtml
          }) + "</table>",
          this.colEls = t.findElements(this.el, ".fc-day, .fc-disabled-day");
          for (var d = 0; d < this.colCnt; d++)
              o.publiclyTrigger("dayRender", [{
                  date: c.toDate(e[d].date),
                  el: this.colEls[d],
                  view: s
              }]);
          a && this.colEls.reverse(),
          this.colPositions = new t.PositionCache(this.el,this.colEls,!0,!1),
          this.renderContentSkeleton(),
          this.isColSizesDirty = !0
      }
      ,
      r.prototype._unrenderColumns = function() {
          this.unrenderContentSkeleton()
      }
      ,
      r.prototype.renderContentSkeleton = function() {
          var e, n = this.context.isRtl, r = [];
          r.push(this.renderProps.renderIntroHtml());
          for (var i = 0; i < this.colCnt; i++)
              r.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');
          n && r.reverse(),
          e = this.contentSkeletonEl = t.htmlToElement('<div class="fc-content-skeleton"><table><tr>' + r.join("") + "</tr></table></div>"),
          this.colContainerEls = t.findElements(e, ".fc-content-col"),
          this.mirrorContainerEls = t.findElements(e, ".fc-mirror-container"),
          this.fgContainerEls = t.findElements(e, ".fc-event-container:not(.fc-mirror-container)"),
          this.bgContainerEls = t.findElements(e, ".fc-bgevent-container"),
          this.highlightContainerEls = t.findElements(e, ".fc-highlight-container"),
          this.businessContainerEls = t.findElements(e, ".fc-business-container"),
          n && (this.colContainerEls.reverse(),
          this.mirrorContainerEls.reverse(),
          this.fgContainerEls.reverse(),
          this.bgContainerEls.reverse(),
          this.highlightContainerEls.reverse(),
          this.businessContainerEls.reverse()),
          this.el.appendChild(e)
      }
      ,
      r.prototype.unrenderContentSkeleton = function() {
          t.removeElement(this.contentSkeletonEl)
      }
      ,
      r.prototype.groupSegsByCol = function(e) {
          var t, n = [];
          for (t = 0; t < this.colCnt; t++)
              n.push([]);
          for (t = 0; t < e.length; t++)
              n[e[t].col].push(e[t]);
          return n
      }
      ,
      r.prototype.attachSegsByCol = function(e, t) {
          var n, r, i;
          for (n = 0; n < this.colCnt; n++)
              for (r = e[n],
              i = 0; i < r.length; i++)
                  t[n].appendChild(r[i].el)
      }
      ,
      r.prototype.getNowIndicatorUnit = function() {
          return "minute"
      }
      ,
      r.prototype.renderNowIndicator = function(e, n) {
          if (this.colContainerEls) {
              var r, i = this.computeDateTop(n), o = [];
              for (r = 0; r < e.length; r++) {
                  var s = t.createElement("div", {
                      className: "fc-now-indicator fc-now-indicator-line"
                  });
                  s.style.top = i + "px",
                  this.colContainerEls[e[r].col].appendChild(s),
                  o.push(s)
              }
              if (e.length > 0) {
                  var a = t.createElement("div", {
                      className: "fc-now-indicator fc-now-indicator-arrow"
                  });
                  a.style.top = i + "px",
                  this.contentSkeletonEl.appendChild(a),
                  o.push(a)
              }
              this.nowIndicatorEls = o
          }
      }
      ,
      r.prototype.unrenderNowIndicator = function() {
          this.nowIndicatorEls && (this.nowIndicatorEls.forEach(t.removeElement),
          this.nowIndicatorEls = null)
      }
      ,
      r.prototype.getTotalSlatHeight = function() {
          return this.slatContainerEl.getBoundingClientRect().height
      }
      ,
      r.prototype.computeDateTop = function(e, n) {
          return n || (n = t.startOfDay(e)),
          this.computeTimeTop(t.createDuration(e.valueOf() - n.valueOf()))
      }
      ,
      r.prototype.computeTimeTop = function(e) {
          var n, r, i = this.slatEls.length, o = this.props.dateProfile, s = (e.milliseconds - t.asRoughMs(o.minTime)) / t.asRoughMs(this.slotDuration);
          return s = Math.max(0, s),
          s = Math.min(i, s),
          n = Math.floor(s),
          r = s - (n = Math.min(n, i - 1)),
          this.slatPositions.tops[n] + this.slatPositions.getHeight(n) * r
      }
      ,
      r.prototype.computeSegVerticals = function(e) {
          var t, n, r, i = this.context.options.timeGridEventMinHeight;
          for (t = 0; t < e.length; t++)
              n = e[t],
              r = this.props.cells[n.col].date,
              n.top = this.computeDateTop(n.start, r),
              n.bottom = Math.max(n.top + i, this.computeDateTop(n.end, r))
      }
      ,
      r.prototype.assignSegVerticals = function(e) {
          var n, r;
          for (n = 0; n < e.length; n++)
              r = e[n],
              t.applyStyle(r.el, this.generateSegVerticalCss(r))
      }
      ,
      r.prototype.generateSegVerticalCss = function(e) {
          return {
              top: e.top,
              bottom: -e.bottom
          }
      }
      ,
      r.prototype.buildPositionCaches = function() {
          this.buildColPositions(),
          this.buildSlatPositions()
      }
      ,
      r.prototype.buildColPositions = function() {
          this.colPositions.build()
      }
      ,
      r.prototype.buildSlatPositions = function() {
          this.slatPositions.build()
      }
      ,
      r.prototype.positionToHit = function(e, n) {
          var r = this.context.dateEnv
            , i = this
            , o = i.snapsPerSlot
            , s = i.slatPositions
            , a = i.colPositions
            , l = a.leftToIndex(e)
            , c = s.topToIndex(n);
          if (null != l && null != c) {
              var u = s.tops[c]
                , d = s.getHeight(c)
                , p = (n - u) / d
                , h = c * o + Math.floor(p * o)
                , f = this.props.cells[l].date
                , g = t.addDurations(this.props.dateProfile.minTime, t.multiplyDuration(this.snapDuration, h))
                , v = r.add(f, g);
              return {
                  col: l,
                  dateSpan: {
                      range: {
                          start: v,
                          end: r.add(v, this.snapDuration)
                      },
                      allDay: !1
                  },
                  dayEl: this.colEls[l],
                  relativeRect: {
                      left: a.lefts[l],
                      right: a.rights[l],
                      top: u,
                      bottom: u + d
                  }
              }
          }
      }
      ,
      r.prototype._renderEventDrag = function(e) {
          e && (this.eventRenderer.hideByHash(e.affectedInstances),
          e.isEvent ? this.mirrorRenderer.renderSegs(this.context, e.segs, {
              isDragging: !0,
              sourceSeg: e.sourceSeg
          }) : this.fillRenderer.renderSegs("highlight", this.context, e.segs))
      }
      ,
      r.prototype._unrenderEventDrag = function(e) {
          e && (this.eventRenderer.showByHash(e.affectedInstances),
          e.isEvent ? this.mirrorRenderer.unrender(this.context, e.segs, {
              isDragging: !0,
              sourceSeg: e.sourceSeg
          }) : this.fillRenderer.unrender("highlight", this.context))
      }
      ,
      r.prototype._renderEventResize = function(e) {
          e && (this.eventRenderer.hideByHash(e.affectedInstances),
          this.mirrorRenderer.renderSegs(this.context, e.segs, {
              isResizing: !0,
              sourceSeg: e.sourceSeg
          }))
      }
      ,
      r.prototype._unrenderEventResize = function(e) {
          e && (this.eventRenderer.showByHash(e.affectedInstances),
          this.mirrorRenderer.unrender(this.context, e.segs, {
              isResizing: !0,
              sourceSeg: e.sourceSeg
          }))
      }
      ,
      r.prototype._renderDateSelection = function(e) {
          e && (this.context.options.selectMirror ? this.mirrorRenderer.renderSegs(this.context, e, {
              isSelecting: !0
          }) : this.fillRenderer.renderSegs("highlight", this.context, e))
      }
      ,
      r.prototype._unrenderDateSelection = function(e) {
          e && (this.context.options.selectMirror ? this.mirrorRenderer.unrender(this.context, e, {
              isSelecting: !0
          }) : this.fillRenderer.unrender("highlight", this.context))
      }
      ,
      r
  }(t.DateComponent)
    , f = function(e) {
      function n() {
          return null !== e && e.apply(this, arguments) || this
      }
      return i(n, e),
      n.prototype.getKeyInfo = function() {
          return {
              allDay: {},
              timed: {}
          }
      }
      ,
      n.prototype.getKeysForDateSpan = function(e) {
          return e.allDay ? ["allDay"] : ["timed"]
      }
      ,
      n.prototype.getKeysForEventDef = function(e) {
          return e.allDay ? t.hasBgRendering(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
      }
      ,
      n
  }(t.Splitter)
    , g = t.createFormatter({
      week: "short"
  })
    , v = function(e) {
      function r() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n.splitter = new f,
          n.renderSkeleton = t.memoizeRendering(n._renderSkeleton, n._unrenderSkeleton),
          n.renderHeadIntroHtml = function() {
              var e, r = n.context, i = r.theme, o = r.dateEnv, s = r.options, a = n.props.dateProfile.renderRange, l = t.diffDays(a.start, a.end);
              return s.weekNumbers ? (e = o.format(a.start, g),
              '<th class="fc-axis fc-week-number ' + i.getClass("widgetHeader") + '" ' + n.axisStyleAttr() + ">" + t.buildGotoAnchorHtml(s, o, {
                  date: a.start,
                  type: "week",
                  forceOff: l > 1
              }, t.htmlEscape(e)) + "</th>") : '<th class="fc-axis ' + i.getClass("widgetHeader") + '" ' + n.axisStyleAttr() + "></th>"
          }
          ,
          n.renderTimeGridBgIntroHtml = function() {
              return '<td class="fc-axis ' + n.context.theme.getClass("widgetContent") + '" ' + n.axisStyleAttr() + "></td>"
          }
          ,
          n.renderTimeGridIntroHtml = function() {
              return '<td class="fc-axis" ' + n.axisStyleAttr() + "></td>"
          }
          ,
          n.renderDayGridBgIntroHtml = function() {
              var e = n.context
                , r = e.theme
                , i = e.options;
              return '<td class="fc-axis ' + r.getClass("widgetContent") + '" ' + n.axisStyleAttr() + "><span>" + t.getAllDayHtml(i) + "</span></td>"
          }
          ,
          n.renderDayGridIntroHtml = function() {
              return '<td class="fc-axis" ' + n.axisStyleAttr() + "></td>"
          }
          ,
          n
      }
      return i(r, e),
      r.prototype.render = function(t, n) {
          e.prototype.render.call(this, t, n),
          this.renderSkeleton(n)
      }
      ,
      r.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.renderSkeleton.unrender()
      }
      ,
      r.prototype._renderSkeleton = function(e) {
          this.el.classList.add("fc-timeGrid-view"),
          this.el.innerHTML = this.renderSkeletonHtml(),
          this.scroller = new t.ScrollComponent("hidden","auto");
          var r = this.scroller.el;
          this.el.querySelector(".fc-body > tr > td").appendChild(r),
          r.classList.add("fc-time-grid-container");
          var i = t.createElement("div", {
              className: "fc-time-grid"
          });
          if (r.appendChild(i),
          this.timeGrid = new h(i,{
              renderBgIntroHtml: this.renderTimeGridBgIntroHtml,
              renderIntroHtml: this.renderTimeGridIntroHtml
          }),
          e.options.allDaySlot) {
              this.dayGrid = new n.DayGrid(this.el.querySelector(".fc-day-grid"),{
                  renderNumberIntroHtml: this.renderDayGridIntroHtml,
                  renderBgIntroHtml: this.renderDayGridBgIntroHtml,
                  renderIntroHtml: this.renderDayGridIntroHtml,
                  colWeekNumbersVisible: !1,
                  cellWeekNumbersVisible: !1
              });
              var o = this.el.querySelector(".fc-divider");
              this.dayGrid.bottomCoordPadding = o.getBoundingClientRect().height
          }
      }
      ,
      r.prototype._unrenderSkeleton = function() {
          this.el.classList.remove("fc-timeGrid-view"),
          this.timeGrid.destroy(),
          this.dayGrid && this.dayGrid.destroy(),
          this.scroller.destroy()
      }
      ,
      r.prototype.renderSkeletonHtml = function() {
          var e = this.context
            , t = e.theme
            , n = e.options;
          return '<table class="' + t.getClass("tableGrid") + '">' + (n.columnHeader ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (n.allDaySlot ? '<div class="fc-day-grid"></div><hr class="fc-divider ' + t.getClass("widgetHeader") + '" />' : "") + "</td></tr></tbody></table>"
      }
      ,
      r.prototype.getNowIndicatorUnit = function() {
          return this.timeGrid.getNowIndicatorUnit()
      }
      ,
      r.prototype.unrenderNowIndicator = function() {
          this.timeGrid.unrenderNowIndicator()
      }
      ,
      r.prototype.updateSize = function(t, n, r) {
          e.prototype.updateSize.call(this, t, n, r),
          this.timeGrid.updateSize(t),
          this.dayGrid && this.dayGrid.updateSize(t)
      }
      ,
      r.prototype.updateBaseSize = function(e, n, r) {
          var i, o, s, a = this;
          if (this.axisWidth = t.matchCellWidths(t.findElements(this.el, ".fc-axis")),
          this.timeGrid.colEls) {
              var l = t.findElements(this.el, ".fc-row").filter((function(e) {
                  return !a.scroller.el.contains(e)
              }
              ));
              this.timeGrid.bottomRuleEl.style.display = "none",
              this.scroller.clear(),
              l.forEach(t.uncompensateScroll),
              this.dayGrid && (this.dayGrid.removeSegPopover(),
              (i = this.context.options.eventLimit) && "number" != typeof i && (i = 5),
              i && this.dayGrid.limitRows(i)),
              r || (o = this.computeScrollerHeight(n),
              this.scroller.setHeight(o),
              ((s = this.scroller.getScrollbarWidths()).left || s.right) && (l.forEach((function(e) {
                  t.compensateScroll(e, s)
              }
              )),
              o = this.computeScrollerHeight(n),
              this.scroller.setHeight(o)),
              this.scroller.lockOverflow(s),
              this.timeGrid.getTotalSlatHeight() < o && (this.timeGrid.bottomRuleEl.style.display = ""))
          } else
              r || (o = this.computeScrollerHeight(n),
              this.scroller.setHeight(o))
      }
      ,
      r.prototype.computeScrollerHeight = function(e) {
          return e - t.subtractInnerElHeight(this.el, this.scroller.el)
      }
      ,
      r.prototype.computeDateScroll = function(e) {
          var t = this.timeGrid.computeTimeTop(e);
          return (t = Math.ceil(t)) && t++,
          {
              top: t
          }
      }
      ,
      r.prototype.queryDateScroll = function() {
          return {
              top: this.scroller.getScrollTop()
          }
      }
      ,
      r.prototype.applyDateScroll = function(e) {
          void 0 !== e.top && this.scroller.setScrollTop(e.top)
      }
      ,
      r.prototype.axisStyleAttr = function() {
          return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
      }
      ,
      r
  }(t.View);
  v.prototype.usesMinMaxTime = !0;
  var m = function(e) {
      function n(n) {
          var r = e.call(this, n.el) || this;
          return r.buildDayRanges = t.memoize(y),
          r.slicer = new E,
          r.timeGrid = n,
          r
      }
      return i(n, e),
      n.prototype.firstContext = function(e) {
          e.calendar.registerInteractiveComponent(this, {
              el: this.timeGrid.el
          })
      }
      ,
      n.prototype.destroy = function() {
          e.prototype.destroy.call(this),
          this.context.calendar.unregisterInteractiveComponent(this)
      }
      ,
      n.prototype.render = function(e, t) {
          var n = this.context.dateEnv
            , r = e.dateProfile
            , i = e.dayTable
            , s = this.dayRanges = this.buildDayRanges(i, r, n)
            , a = this.timeGrid;
          a.receiveContext(t),
          a.receiveProps(o({}, this.slicer.sliceProps(e, r, null, t.calendar, a, s), {
              dateProfile: r,
              cells: i.cells[0]
          }), t)
      }
      ,
      n.prototype.renderNowIndicator = function(e) {
          this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e, this.timeGrid, this.dayRanges), e)
      }
      ,
      n.prototype.buildPositionCaches = function() {
          this.timeGrid.buildPositionCaches()
      }
      ,
      n.prototype.queryHit = function(e, t) {
          var n = this.timeGrid.positionToHit(e, t);
          if (n)
              return {
                  component: this.timeGrid,
                  dateSpan: n.dateSpan,
                  dayEl: n.dayEl,
                  rect: {
                      left: n.relativeRect.left,
                      right: n.relativeRect.right,
                      top: n.relativeRect.top,
                      bottom: n.relativeRect.bottom
                  },
                  layer: 0
              }
      }
      ,
      n
  }(t.DateComponent);
  function y(e, t, n) {
      for (var r = [], i = 0, o = e.headerDates; i < o.length; i++) {
          var s = o[i];
          r.push({
              start: n.add(s, t.minTime),
              end: n.add(s, t.maxTime)
          })
      }
      return r
  }
  var E = function(e) {
      function n() {
          return null !== e && e.apply(this, arguments) || this
      }
      return i(n, e),
      n.prototype.sliceRange = function(e, n) {
          for (var r = [], i = 0; i < n.length; i++) {
              var o = t.intersectRanges(e, n[i]);
              o && r.push({
                  start: o.start,
                  end: o.end,
                  isStart: o.start.valueOf() === e.start.valueOf(),
                  isEnd: o.end.valueOf() === e.end.valueOf(),
                  col: i
              })
          }
          return r
      }
      ,
      n
  }(t.Slicer)
    , S = function(e) {
      function r() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n.buildDayTable = t.memoize(b),
          n
      }
      return i(r, e),
      r.prototype.render = function(t, n) {
          e.prototype.render.call(this, t, n);
          var r = this.props
            , i = r.dateProfile
            , s = r.dateProfileGenerator
            , a = n.nextDayThreshold
            , l = this.buildDayTable(i, s)
            , c = this.splitter.splitProps(t);
          this.header && this.header.receiveProps({
              dateProfile: i,
              dates: l.headerDates,
              datesRepDistinctDays: !0,
              renderIntroHtml: this.renderHeadIntroHtml
          }, n),
          this.simpleTimeGrid.receiveProps(o({}, c.timed, {
              dateProfile: i,
              dayTable: l
          }), n),
          this.simpleDayGrid && this.simpleDayGrid.receiveProps(o({}, c.allDay, {
              dateProfile: i,
              dayTable: l,
              nextDayThreshold: a,
              isRigid: !1
          }), n),
          this.startNowIndicator(i, s)
      }
      ,
      r.prototype._renderSkeleton = function(r) {
          e.prototype._renderSkeleton.call(this, r),
          r.options.columnHeader && (this.header = new t.DayHeader(this.el.querySelector(".fc-head-container"))),
          this.simpleTimeGrid = new m(this.timeGrid),
          this.dayGrid && (this.simpleDayGrid = new n.SimpleDayGrid(this.dayGrid))
      }
      ,
      r.prototype._unrenderSkeleton = function() {
          e.prototype._unrenderSkeleton.call(this),
          this.header && this.header.destroy(),
          this.simpleTimeGrid.destroy(),
          this.simpleDayGrid && this.simpleDayGrid.destroy()
      }
      ,
      r.prototype.renderNowIndicator = function(e) {
          this.simpleTimeGrid.renderNowIndicator(e)
      }
      ,
      r
  }(v);
  function b(e, n) {
      var r = new t.DaySeries(e.renderRange,n);
      return new t.DayTable(r,!1)
  }
  var D = t.createPlugin({
      defaultView: "timeGridWeek",
      views: {
          timeGrid: {
              class: S,
              allDaySlot: !0,
              slotDuration: "00:30:00",
              slotEventOverlap: !0
          },
          timeGridDay: {
              type: "timeGrid",
              duration: {
                  days: 1
              }
          },
          timeGridWeek: {
              type: "timeGrid",
              duration: {
                  weeks: 1
              }
          }
      }
  });
  e.AbstractTimeGridView = v,
  e.TimeGrid = h,
  e.TimeGridSlicer = E,
  e.TimeGridView = S,
  e.buildDayRanges = y,
  e.buildDayTable = b,
  e.default = D,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}
));
