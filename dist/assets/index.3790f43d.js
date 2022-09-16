var ea = Object.defineProperty,
  ta = Object.defineProperties
var na = Object.getOwnPropertyDescriptors
var sl = Object.getOwnPropertySymbols
var la = Object.prototype.hasOwnProperty,
  oa = Object.prototype.propertyIsEnumerable
var rl = (e, t, n) =>
    t in e ? ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  ue = (e, t) => {
    for (var n in t || (t = {})) la.call(t, n) && rl(e, n, t[n])
    if (sl) for (var n of sl(t)) oa.call(t, n) && rl(e, n, t[n])
    return e
  },
  Se = (e, t) => ta(e, na(t))
var ot = (e, t, n) =>
  new Promise((l, o) => {
    var s = (a) => {
        try {
          u(n.next(a))
        } catch (i) {
          o(i)
        }
      },
      r = (a) => {
        try {
          u(n.throw(a))
        } catch (i) {
          o(i)
        }
      },
      u = (a) => (a.done ? l(a.value) : Promise.resolve(a.value).then(s, r))
    u((n = n.apply(e, t)).next())
  })
import {
  as as aa,
  at as An,
  au as pn,
  av as At,
  aw as sa,
  ax as jt,
  ay as vn,
  az as ra,
  aA as rn,
  aB as ia,
  aC as qn,
  aD as un,
  aE as Ul,
  aF as zt,
  aG as il,
  aH as ua,
  aI as ca,
  aJ as Yl,
  k as $,
  aK as da,
  S as be,
  a as A,
  s as Qe,
  v as Gn,
  P as ht,
  N as Xe,
  d as te,
  aL as fa,
  y as hn,
  A as xt,
  x as pa,
  aM as Wt,
  h as ae,
  a2 as he,
  n as Je,
  a3 as Xl,
  p as Ql,
  $ as Re,
  a0 as Tt,
  o as M,
  c as R,
  G as U,
  F as xe,
  E as N,
  i as f,
  B as ce,
  b as Q,
  C as Y,
  w as j,
  D as vt,
  Q as Ht,
  f as J,
  a6 as Ue,
  _ as va,
  t as ie,
  H as Ee,
  a4 as qt,
  J as bt,
  j as $e,
  ap as ul,
  aN as ha,
  aO as cn,
  X as Gt,
  e as st,
  I as gt,
  R as Xt,
  K as Ke,
  a1 as mn,
  aP as ma,
  r as yt,
  W as gn,
  a5 as W,
  V as Mt,
  g as we,
  Y as He,
  aQ as Un,
  aR as Bt,
  aS as wn,
  aT as Yn,
  ai as rt,
  aU as Ve,
  aV as ga,
  a7 as ba,
  aW as Ut,
  am as Jl,
  q as Zl,
  aX as ya,
  ao as Ca,
} from './index.3ffc5a30.js'
import {
  m as bn,
  U as Ne,
  d as Lt,
  t as dn,
  a as it,
  s as Sa,
  C as eo,
  E as Xn,
  u as to,
} from './UserInfo.vue_vue_type_style_index_0_lang.f9423c2d.js'
import {
  q as wa,
  a as Qt,
  d as Ye,
  g as yn,
  r as Ea,
  p as $a,
  b as ka,
  y as Ma,
  u as cl,
} from './el-popper.19524f62.js'
import { _ as xa } from './Header.vue_vue_type_style_index_0_lang.e5775b91.js'
import { _ as Ta } from './TopBarNav.vue_vue_type_style_index_0_lang.029c5067.js'
import {
  k as Yt,
  u as X,
  z as Pa,
  A as Aa,
  E as _e,
  d as no,
  _ as me,
  e as Pt,
  m as dl,
  c as fl,
  j as Ot,
  r as It,
  h as Dt,
  p as lo,
  B as Cn,
  o as pl,
  C as Oa,
  D as Ia,
  F as oo,
  G as La,
  H as vl,
  I as Na,
  g as hl,
  l as _a,
} from './index.c56c571a.js'
import { b as Qn, c as Jn, T as Ra } from './el-button.cb508bf4.js'
import { _ as ao } from './_plugin-vue_export-helper.cdc0426e.js'
import { C as so } from './Language.vue_vue_type_script_setup_true_lang.011767d8.js'
import { i as ml, V as za } from './icon.d7f7cba2.js'
import './_commonjsHelpers.c10bf6cb.js'
import './Search.vue_vue_type_script_setup_true_lang.9e00e96b.js'
import './Fullscreen.vue_vue_type_script_setup_true_lang.61e1eb2e.js'
var Fa = /\s/
function Ba(e) {
  for (var t = e.length; t-- && Fa.test(e.charAt(t)); );
  return t
}
var Wa = /^\s+/
function Ha(e) {
  return e && e.slice(0, Ba(e) + 1).replace(Wa, '')
}
var gl = 0 / 0,
  Da = /^[-+]0x[0-9a-f]+$/i,
  Va = /^0b[01]+$/i,
  Ka = /^0o[0-7]+$/i,
  ja = parseInt
function bl(e) {
  if (typeof e == 'number') return e
  if (aa(e)) return gl
  if (An(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = An(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = Ha(e)
  var n = Va.test(e)
  return n || Ka.test(e) ? ja(e.slice(2), n ? 2 : 8) : Da.test(e) ? gl : +e
}
var qa = pn(At, 'WeakMap')
const On = qa
var Ga = 9007199254740991
function ro(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Ga
}
function Ua(e) {
  return e != null && ro(e.length) && !sa(e)
}
var Ya = Object.prototype
function Xa(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || Ya
  return e === n
}
function Qa(e, t) {
  for (var n = -1, l = Array(e); ++n < e; ) l[n] = t(n)
  return l
}
var Ja = '[object Arguments]'
function yl(e) {
  return jt(e) && vn(e) == Ja
}
var io = Object.prototype,
  Za = io.hasOwnProperty,
  es = io.propertyIsEnumerable,
  ts = yl(
    (function () {
      return arguments
    })(),
  )
    ? yl
    : function (e) {
        return jt(e) && Za.call(e, 'callee') && !es.call(e, 'callee')
      }
const ns = ts
function ls() {
  return !1
}
var uo = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Cl = uo && typeof module == 'object' && module && !module.nodeType && module,
  os = Cl && Cl.exports === uo,
  Sl = os ? At.Buffer : void 0,
  as = Sl ? Sl.isBuffer : void 0,
  ss = as || ls
const In = ss
var rs = '[object Arguments]',
  is = '[object Array]',
  us = '[object Boolean]',
  cs = '[object Date]',
  ds = '[object Error]',
  fs = '[object Function]',
  ps = '[object Map]',
  vs = '[object Number]',
  hs = '[object Object]',
  ms = '[object RegExp]',
  gs = '[object Set]',
  bs = '[object String]',
  ys = '[object WeakMap]',
  Cs = '[object ArrayBuffer]',
  Ss = '[object DataView]',
  ws = '[object Float32Array]',
  Es = '[object Float64Array]',
  $s = '[object Int8Array]',
  ks = '[object Int16Array]',
  Ms = '[object Int32Array]',
  xs = '[object Uint8Array]',
  Ts = '[object Uint8ClampedArray]',
  Ps = '[object Uint16Array]',
  As = '[object Uint32Array]',
  ge = {}
ge[ws] = ge[Es] = ge[$s] = ge[ks] = ge[Ms] = ge[xs] = ge[Ts] = ge[Ps] = ge[As] = !0
ge[rs] =
  ge[is] =
  ge[Cs] =
  ge[us] =
  ge[Ss] =
  ge[cs] =
  ge[ds] =
  ge[fs] =
  ge[ps] =
  ge[vs] =
  ge[hs] =
  ge[ms] =
  ge[gs] =
  ge[bs] =
  ge[ys] =
    !1
function Os(e) {
  return jt(e) && ro(e.length) && !!ge[vn(e)]
}
function Is(e) {
  return function (t) {
    return e(t)
  }
}
var co = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Vt = co && typeof module == 'object' && module && !module.nodeType && module,
  Ls = Vt && Vt.exports === co,
  En = Ls && ra.process,
  Ns = (function () {
    try {
      var e = Vt && Vt.require && Vt.require('util').types
      return e || (En && En.binding && En.binding('util'))
    } catch (t) {}
  })()
const wl = Ns
var El = wl && wl.isTypedArray,
  _s = El ? Is(El) : Os
const fo = _s
var Rs = Object.prototype,
  zs = Rs.hasOwnProperty
function Fs(e, t) {
  var n = rn(e),
    l = !n && ns(e),
    o = !n && !l && In(e),
    s = !n && !l && !o && fo(e),
    r = n || l || o || s,
    u = r ? Qa(e.length, String) : [],
    a = u.length
  for (var i in e)
    (t || zs.call(e, i)) &&
      !(
        r &&
        (i == 'length' ||
          (o && (i == 'offset' || i == 'parent')) ||
          (s && (i == 'buffer' || i == 'byteLength' || i == 'byteOffset')) ||
          ia(i, a))
      ) &&
      u.push(i)
  return u
}
function Bs(e, t) {
  return function (n) {
    return e(t(n))
  }
}
var Ws = Bs(Object.keys, Object)
const Hs = Ws
var Ds = Object.prototype,
  Vs = Ds.hasOwnProperty
function Ks(e) {
  if (!Xa(e)) return Hs(e)
  var t = []
  for (var n in Object(e)) Vs.call(e, n) && n != 'constructor' && t.push(n)
  return t
}
function js(e) {
  return Ua(e) ? Fs(e) : Ks(e)
}
function qs(e, t) {
  for (var n = -1, l = t.length, o = e.length; ++n < l; ) e[o + n] = t[n]
  return e
}
function Gs() {
  ;(this.__data__ = new qn()), (this.size = 0)
}
function Us(e) {
  var t = this.__data__,
    n = t.delete(e)
  return (this.size = t.size), n
}
function Ys(e) {
  return this.__data__.get(e)
}
function Xs(e) {
  return this.__data__.has(e)
}
var Qs = 200
function Js(e, t) {
  var n = this.__data__
  if (n instanceof qn) {
    var l = n.__data__
    if (!un || l.length < Qs - 1) return l.push([e, t]), (this.size = ++n.size), this
    n = this.__data__ = new Ul(l)
  }
  return n.set(e, t), (this.size = n.size), this
}
function mt(e) {
  var t = (this.__data__ = new qn(e))
  this.size = t.size
}
mt.prototype.clear = Gs
mt.prototype.delete = Us
mt.prototype.get = Ys
mt.prototype.has = Xs
mt.prototype.set = Js
function Zs(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, o = 0, s = []; ++n < l; ) {
    var r = e[n]
    t(r, n, e) && (s[o++] = r)
  }
  return s
}
function er() {
  return []
}
var tr = Object.prototype,
  nr = tr.propertyIsEnumerable,
  $l = Object.getOwnPropertySymbols,
  lr = $l
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            Zs($l(e), function (t) {
              return nr.call(e, t)
            }))
      }
    : er
const or = lr
function ar(e, t, n) {
  var l = t(e)
  return rn(e) ? l : qs(l, n(e))
}
function kl(e) {
  return ar(e, js, or)
}
var sr = pn(At, 'DataView')
const Ln = sr
var rr = pn(At, 'Promise')
const Nn = rr
var ir = pn(At, 'Set')
const _n = ir
var Ml = '[object Map]',
  ur = '[object Object]',
  xl = '[object Promise]',
  Tl = '[object Set]',
  Pl = '[object WeakMap]',
  Al = '[object DataView]',
  cr = zt(Ln),
  dr = zt(un),
  fr = zt(Nn),
  pr = zt(_n),
  vr = zt(On),
  Et = vn
;((Ln && Et(new Ln(new ArrayBuffer(1))) != Al) ||
  (un && Et(new un()) != Ml) ||
  (Nn && Et(Nn.resolve()) != xl) ||
  (_n && Et(new _n()) != Tl) ||
  (On && Et(new On()) != Pl)) &&
  (Et = function (e) {
    var t = vn(e),
      n = t == ur ? e.constructor : void 0,
      l = n ? zt(n) : ''
    if (l)
      switch (l) {
        case cr:
          return Al
        case dr:
          return Ml
        case fr:
          return xl
        case pr:
          return Tl
        case vr:
          return Pl
      }
    return t
  })
const Ol = Et
var hr = At.Uint8Array
const Il = hr
var mr = '__lodash_hash_undefined__'
function gr(e) {
  return this.__data__.set(e, mr), this
}
function br(e) {
  return this.__data__.has(e)
}
function fn(e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.__data__ = new Ul(); ++t < n; ) this.add(e[t])
}
fn.prototype.add = fn.prototype.push = gr
fn.prototype.has = br
function yr(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length; ++n < l; ) if (t(e[n], n, e)) return !0
  return !1
}
function Cr(e, t) {
  return e.has(t)
}
var Sr = 1,
  wr = 2
function po(e, t, n, l, o, s) {
  var r = n & Sr,
    u = e.length,
    a = t.length
  if (u != a && !(r && a > u)) return !1
  var i = s.get(e),
    c = s.get(t)
  if (i && c) return i == t && c == e
  var v = -1,
    p = !0,
    g = n & wr ? new fn() : void 0
  for (s.set(e, t), s.set(t, e); ++v < u; ) {
    var d = e[v],
      m = t[v]
    if (l) var w = r ? l(m, d, v, t, e, s) : l(d, m, v, e, t, s)
    if (w !== void 0) {
      if (w) continue
      p = !1
      break
    }
    if (g) {
      if (
        !yr(t, function (E, b) {
          if (!Cr(g, b) && (d === E || o(d, E, n, l, s))) return g.push(b)
        })
      ) {
        p = !1
        break
      }
    } else if (!(d === m || o(d, m, n, l, s))) {
      p = !1
      break
    }
  }
  return s.delete(e), s.delete(t), p
}
function Er(e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (l, o) {
      n[++t] = [o, l]
    }),
    n
  )
}
function $r(e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (l) {
      n[++t] = l
    }),
    n
  )
}
var kr = 1,
  Mr = 2,
  xr = '[object Boolean]',
  Tr = '[object Date]',
  Pr = '[object Error]',
  Ar = '[object Map]',
  Or = '[object Number]',
  Ir = '[object RegExp]',
  Lr = '[object Set]',
  Nr = '[object String]',
  _r = '[object Symbol]',
  Rr = '[object ArrayBuffer]',
  zr = '[object DataView]',
  Ll = il ? il.prototype : void 0,
  $n = Ll ? Ll.valueOf : void 0
function Fr(e, t, n, l, o, s, r) {
  switch (n) {
    case zr:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
      ;(e = e.buffer), (t = t.buffer)
    case Rr:
      return !(e.byteLength != t.byteLength || !s(new Il(e), new Il(t)))
    case xr:
    case Tr:
    case Or:
      return ua(+e, +t)
    case Pr:
      return e.name == t.name && e.message == t.message
    case Ir:
    case Nr:
      return e == t + ''
    case Ar:
      var u = Er
    case Lr:
      var a = l & kr
      if ((u || (u = $r), e.size != t.size && !a)) return !1
      var i = r.get(e)
      if (i) return i == t
      ;(l |= Mr), r.set(e, t)
      var c = po(u(e), u(t), l, o, s, r)
      return r.delete(e), c
    case _r:
      if ($n) return $n.call(e) == $n.call(t)
  }
  return !1
}
var Br = 1,
  Wr = Object.prototype,
  Hr = Wr.hasOwnProperty
function Dr(e, t, n, l, o, s) {
  var r = n & Br,
    u = kl(e),
    a = u.length,
    i = kl(t),
    c = i.length
  if (a != c && !r) return !1
  for (var v = a; v--; ) {
    var p = u[v]
    if (!(r ? p in t : Hr.call(t, p))) return !1
  }
  var g = s.get(e),
    d = s.get(t)
  if (g && d) return g == t && d == e
  var m = !0
  s.set(e, t), s.set(t, e)
  for (var w = r; ++v < a; ) {
    p = u[v]
    var E = e[p],
      b = t[p]
    if (l) var h = r ? l(b, E, p, t, e, s) : l(E, b, p, e, t, s)
    if (!(h === void 0 ? E === b || o(E, b, n, l, s) : h)) {
      m = !1
      break
    }
    w || (w = p == 'constructor')
  }
  if (m && !w) {
    var C = e.constructor,
      O = t.constructor
    C != O &&
      'constructor' in e &&
      'constructor' in t &&
      !(typeof C == 'function' && C instanceof C && typeof O == 'function' && O instanceof O) &&
      (m = !1)
  }
  return s.delete(e), s.delete(t), m
}
var Vr = 1,
  Nl = '[object Arguments]',
  _l = '[object Array]',
  Jt = '[object Object]',
  Kr = Object.prototype,
  Rl = Kr.hasOwnProperty
function jr(e, t, n, l, o, s) {
  var r = rn(e),
    u = rn(t),
    a = r ? _l : Ol(e),
    i = u ? _l : Ol(t)
  ;(a = a == Nl ? Jt : a), (i = i == Nl ? Jt : i)
  var c = a == Jt,
    v = i == Jt,
    p = a == i
  if (p && In(e)) {
    if (!In(t)) return !1
    ;(r = !0), (c = !1)
  }
  if (p && !c)
    return s || (s = new mt()), r || fo(e) ? po(e, t, n, l, o, s) : Fr(e, t, a, n, l, o, s)
  if (!(n & Vr)) {
    var g = c && Rl.call(e, '__wrapped__'),
      d = v && Rl.call(t, '__wrapped__')
    if (g || d) {
      var m = g ? e.value() : e,
        w = d ? t.value() : t
      return s || (s = new mt()), o(m, w, n, l, s)
    }
  }
  return p ? (s || (s = new mt()), Dr(e, t, n, l, o, s)) : !1
}
function vo(e, t, n, l, o) {
  return e === t
    ? !0
    : e == null || t == null || (!jt(e) && !jt(t))
    ? e !== e && t !== t
    : jr(e, t, n, l, vo, o)
}
var qr = function () {
  return At.Date.now()
}
const kn = qr
var Gr = 'Expected a function',
  Ur = Math.max,
  Yr = Math.min
function Nt(e, t, n) {
  var l,
    o,
    s,
    r,
    u,
    a,
    i = 0,
    c = !1,
    v = !1,
    p = !0
  if (typeof e != 'function') throw new TypeError(Gr)
  ;(t = bl(t) || 0),
    An(n) &&
      ((c = !!n.leading),
      (v = 'maxWait' in n),
      (s = v ? Ur(bl(n.maxWait) || 0, t) : s),
      (p = 'trailing' in n ? !!n.trailing : p))
  function g(P) {
    var S = l,
      x = o
    return (l = o = void 0), (i = P), (r = e.apply(x, S)), r
  }
  function d(P) {
    return (i = P), (u = setTimeout(E, t)), c ? g(P) : r
  }
  function m(P) {
    var S = P - a,
      x = P - i,
      I = t - S
    return v ? Yr(I, s - x) : I
  }
  function w(P) {
    var S = P - a,
      x = P - i
    return a === void 0 || S >= t || S < 0 || (v && x >= s)
  }
  function E() {
    var P = kn()
    if (w(P)) return b(P)
    u = setTimeout(E, m(P))
  }
  function b(P) {
    return (u = void 0), p && l ? g(P) : ((l = o = void 0), r)
  }
  function h() {
    u !== void 0 && clearTimeout(u), (i = 0), (l = a = o = u = void 0)
  }
  function C() {
    return u === void 0 ? r : b(kn())
  }
  function O() {
    var P = kn(),
      S = w(P)
    if (((l = arguments), (o = this), (a = P), S)) {
      if (u === void 0) return d(a)
      if (v) return clearTimeout(u), (u = setTimeout(E, t)), g(a)
    }
    return u === void 0 && (u = setTimeout(E, t)), r
  }
  return (O.cancel = h), (O.flush = C), O
}
function Rn(e, t) {
  return vo(e, t)
}
const en = function (e, t, ...n) {
    let l
    t.includes('mouse') || t.includes('click')
      ? (l = 'MouseEvents')
      : t.includes('key')
      ? (l = 'KeyboardEvent')
      : (l = 'HTMLEvents')
    const o = document.createEvent(l)
    return o.initEvent(t, ...n), e.dispatchEvent(o), e
  },
  Xr = (e = '') => e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
  Qr = (e) => ca[e || 'default'],
  Jr = (e) => ['', ...Yl].includes(e),
  ho = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),
  Zr = ['class', 'style'],
  ei = /^on[A-Z]/,
  ti = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n } = e,
      l = $(() => ((n == null ? void 0 : n.value) || []).concat(Zr)),
      o = be()
    return o
      ? $(() => {
          var s
          return da(
            Object.entries((s = o.proxy) == null ? void 0 : s.$attrs).filter(
              ([r]) => !l.value.includes(r) && !(t && ei.test(r)),
            ),
          )
        })
      : $(() => ({}))
  },
  mo = Symbol('elPaginationKey'),
  ni = (e) => ({
    focus: () => {
      var t, n
      ;(n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t)
    },
  })
function li(e) {
  const t = A()
  function n() {
    if (e.value == null) return
    const { selectionStart: o, selectionEnd: s, value: r } = e.value
    if (o == null || s == null) return
    const u = r.slice(0, Math.max(0, o)),
      a = r.slice(Math.max(0, s))
    t.value = { selectionStart: o, selectionEnd: s, value: r, beforeTxt: u, afterTxt: a }
  }
  function l() {
    if (e.value == null || t.value == null) return
    const { value: o } = e.value,
      { beforeTxt: s, afterTxt: r, selectionStart: u } = t.value
    if (s == null || r == null || u == null) return
    let a = o.length
    if (o.endsWith(r)) a = o.length - r.length
    else if (o.startsWith(s)) a = s.length
    else {
      const i = s[u - 1],
        c = o.indexOf(i, u - 1)
      c !== -1 && (a = c + 1)
    }
    e.value.setSelectionRange(a, a)
  }
  return [n, l]
}
let Ge
const oi = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  ai = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
  ]
function si(e) {
  const t = window.getComputedStyle(e),
    n = t.getPropertyValue('box-sizing'),
    l =
      Number.parseFloat(t.getPropertyValue('padding-bottom')) +
      Number.parseFloat(t.getPropertyValue('padding-top')),
    o =
      Number.parseFloat(t.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(t.getPropertyValue('border-top-width'))
  return {
    contextStyle: ai.map((r) => `${r}:${t.getPropertyValue(r)}`).join(';'),
    paddingSize: l,
    borderSize: o,
    boxSizing: n,
  }
}
function zl(e, t = 1, n) {
  var l
  Ge || ((Ge = document.createElement('textarea')), document.body.appendChild(Ge))
  const { paddingSize: o, borderSize: s, boxSizing: r, contextStyle: u } = si(e)
  Ge.setAttribute('style', `${u};${oi}`), (Ge.value = e.value || e.placeholder || '')
  let a = Ge.scrollHeight
  const i = {}
  r === 'border-box' ? (a = a + s) : r === 'content-box' && (a = a - o), (Ge.value = '')
  const c = Ge.scrollHeight - o
  if (Yt(t)) {
    let v = c * t
    r === 'border-box' && (v = v + o + s), (a = Math.max(v, a)), (i.minHeight = `${v}px`)
  }
  if (Yt(n)) {
    let v = c * n
    r === 'border-box' && (v = v + o + s), (a = Math.min(v, a))
  }
  return (i.height = `${a}px`), (l = Ge.parentNode) == null || l.removeChild(Ge), (Ge = void 0), i
}
const ri = Qe({
    id: { type: String, default: void 0 },
    size: Gn,
    disabled: Boolean,
    modelValue: { type: ht([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: { type: String, values: ['none', 'both', 'horizontal', 'vertical'] },
    autosize: { type: ht([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String, default: '' },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: ml, default: '' },
    prefixIcon: { type: ml, default: '' },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: ht([Object, Array, String]), default: () => bn({}) },
  }),
  ii = {
    [Ne]: (e) => Xe(e),
    input: (e) => Xe(e),
    change: (e) => Xe(e),
    focus: (e) => e instanceof FocusEvent,
    blur: (e) => e instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (e) => e instanceof MouseEvent,
    mouseenter: (e) => e instanceof MouseEvent,
    keydown: (e) => e instanceof Event,
    compositionstart: (e) => e instanceof CompositionEvent,
    compositionupdate: (e) => e instanceof CompositionEvent,
    compositionend: (e) => e instanceof CompositionEvent,
  },
  ui = ['role'],
  ci = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
  ],
  di = ['id', 'tabindex', 'disabled', 'readonly', 'autocomplete', 'aria-label', 'placeholder'],
  fi = { name: 'ElInput', inheritAttrs: !1 },
  pi = te(
    Se(ue({}, fi), {
      props: ri,
      emits: ii,
      setup(e, { expose: t, emit: n }) {
        const l = e,
          o = { suffix: 'append', prefix: 'prepend' },
          s = be(),
          r = fa(),
          u = hn(),
          a = $(() => {
            const L = {}
            return (
              l.containerRole === 'combobox' &&
                ((L['aria-haspopup'] = r['aria-haspopup']),
                (L['aria-owns'] = r['aria-owns']),
                (L['aria-expanded'] = r['aria-expanded'])),
              L
            )
          }),
          i = ti({ excludeKeys: $(() => Object.keys(a.value)) }),
          { form: c, formItem: v } = Qn(),
          { inputId: p } = Jn(l, { formItemContext: v }),
          g = xt(),
          d = pa(),
          m = X('input'),
          w = X('textarea'),
          E = Wt(),
          b = Wt(),
          h = A(!1),
          C = A(!1),
          O = A(!1),
          P = A(!1),
          S = A(),
          x = Wt(l.inputStyle),
          I = $(() => E.value || b.value),
          D = $(() => {
            var L
            return (L = c == null ? void 0 : c.statusIcon) != null ? L : !1
          }),
          B = $(() => (v == null ? void 0 : v.validateState) || ''),
          V = $(() => B.value && za[B.value]),
          Z = $(() => (P.value ? Pa : Aa)),
          ee = $(() => [r.style, l.inputStyle]),
          fe = $(() => [l.inputStyle, x.value, { resize: l.resize }]),
          le = $(() => (wa(l.modelValue) ? '' : String(l.modelValue))),
          ye = $(
            () => l.clearable && !d.value && !l.readonly && !!le.value && (h.value || C.value),
          ),
          _ = $(
            () =>
              l.showPassword && !d.value && !l.readonly && !!le.value && (!!le.value || h.value),
          ),
          T = $(
            () =>
              l.showWordLimit &&
              !!i.value.maxlength &&
              (l.type === 'text' || l.type === 'textarea') &&
              !d.value &&
              !l.readonly &&
              !l.showPassword,
          ),
          F = $(() => Array.from(le.value).length),
          q = $(() => !!T.value && F.value > Number(i.value.maxlength)),
          oe = $(
            () =>
              !!u.suffix ||
              !!l.suffixIcon ||
              ye.value ||
              l.showPassword ||
              T.value ||
              (!!B.value && D.value),
          ),
          [se, ve] = li(E)
        Qt(b, (L) => {
          if (!T.value || l.resize !== 'both') return
          const ne = L[0],
            { width: We } = ne.contentRect
          S.value = { right: `calc(100% - ${We + 15 + 6}px)` }
        })
        const re = () => {
            const { type: L, autosize: ne } = l
            if (!(!Pt || L !== 'textarea'))
              if (ne) {
                const We = qt(ne) ? ne.minRows : void 0,
                  Pe = qt(ne) ? ne.maxRows : void 0
                x.value = ue({}, zl(b.value, We, Pe))
              } else x.value = { minHeight: zl(b.value).minHeight }
          },
          Ce = () => {
            const L = I.value
            !L || L.value === le.value || (L.value = le.value)
          },
          ke = (L) => {
            const { el: ne } = s.vnode
            if (!ne) return
            const Pe = Array.from(ne.querySelectorAll(`.${m.e(L)}`)).find(
              (G) => G.parentNode === ne,
            )
            if (!Pe) return
            const H = o[L]
            u[H]
              ? (Pe.style.transform = `translateX(${L === 'suffix' ? '-' : ''}${
                  ne.querySelector(`.${m.be('group', H)}`).offsetWidth
                }px)`)
              : Pe.removeAttribute('style')
          },
          pe = () => {
            ke('prefix'), ke('suffix')
          },
          Ae = (L) =>
            ot(this, null, function* () {
              se()
              let { value: ne } = L.target
              l.formatter && ((ne = l.parser ? l.parser(ne) : ne), (ne = l.formatter(ne))),
                !O.value && ne !== le.value && (n(Ne, ne), n('input', ne), yield he(), Ce(), ve())
            }),
          De = (L) => {
            n('change', L.target.value)
          },
          ut = (L) => {
            n('compositionstart', L), (O.value = !0)
          },
          Be = (L) => {
            var ne
            n('compositionupdate', L)
            const We = (ne = L.target) == null ? void 0 : ne.value,
              Pe = We[We.length - 1] || ''
            O.value = !ho(Pe)
          },
          tt = (L) => {
            n('compositionend', L), O.value && ((O.value = !1), Ae(L))
          },
          Ct = () => {
            ;(P.value = !P.value), ct()
          },
          ct = () =>
            ot(this, null, function* () {
              var L
              yield he(), (L = I.value) == null || L.focus()
            }),
          nt = () => {
            var L
            return (L = I.value) == null ? void 0 : L.blur()
          },
          Ze = (L) => {
            ;(h.value = !0), n('focus', L)
          },
          lt = (L) => {
            var ne
            ;(h.value = !1),
              n('blur', L),
              l.validateEvent &&
                ((ne = v == null ? void 0 : v.validate) == null ||
                  ne.call(v, 'blur').catch((We) => Lt()))
          },
          St = (L) => {
            ;(C.value = !1), n('mouseleave', L)
          },
          dt = (L) => {
            ;(C.value = !0), n('mouseenter', L)
          },
          ft = (L) => {
            n('keydown', L)
          },
          wt = () => {
            var L
            ;(L = I.value) == null || L.select()
          },
          pt = () => {
            n(Ne, ''), n('change', ''), n('clear'), n('input', '')
          }
        return (
          ae(
            () => l.modelValue,
            () => {
              var L
              he(() => re()),
                l.validateEvent &&
                  ((L = v == null ? void 0 : v.validate) == null ||
                    L.call(v, 'change').catch((ne) => Lt()))
            },
          ),
          ae(le, () => Ce()),
          ae(
            () => l.type,
            () =>
              ot(this, null, function* () {
                yield he(), Ce(), re(), pe()
              }),
          ),
          Je(() =>
            ot(this, null, function* () {
              !l.formatter && l.parser, Ce(), pe(), yield he(), re()
            }),
          ),
          Xl(() =>
            ot(this, null, function* () {
              yield he(), pe()
            }),
          ),
          t({
            input: E,
            textarea: b,
            ref: I,
            textareaStyle: fe,
            autosize: Ql(l, 'autosize'),
            focus: ct,
            blur: nt,
            select: wt,
            clear: pt,
            resizeTextarea: re,
          }),
          (L, ne) =>
            Re(
              (M(),
              R(
                'div',
                Ht(f(a), {
                  class: [
                    L.type === 'textarea' ? f(w).b() : f(m).b(),
                    f(m).m(f(g)),
                    f(m).is('disabled', f(d)),
                    f(m).is('exceed', f(q)),
                    {
                      [f(m).b('group')]: L.$slots.prepend || L.$slots.append,
                      [f(m).bm('group', 'append')]: L.$slots.append,
                      [f(m).bm('group', 'prepend')]: L.$slots.prepend,
                      [f(m).m('prefix')]: L.$slots.prefix || L.prefixIcon,
                      [f(m).m('suffix')]:
                        L.$slots.suffix || L.suffixIcon || L.clearable || L.showPassword,
                      [f(m).bm('suffix', 'password-clear')]: f(ye) && f(_),
                    },
                    L.$attrs.class,
                  ],
                  style: f(ee),
                  role: L.containerRole,
                  onMouseenter: dt,
                  onMouseleave: St,
                }),
                [
                  U(' input '),
                  L.type !== 'textarea'
                    ? (M(),
                      R(
                        xe,
                        { key: 0 },
                        [
                          U(' prepend slot '),
                          L.$slots.prepend
                            ? (M(),
                              R(
                                'div',
                                { key: 0, class: N(f(m).be('group', 'prepend')) },
                                [ce(L.$slots, 'prepend')],
                                2,
                              ))
                            : U('v-if', !0),
                          Q(
                            'div',
                            { class: N([f(m).e('wrapper'), f(m).is('focus', h.value)]) },
                            [
                              U(' prefix slot '),
                              L.$slots.prefix || L.prefixIcon
                                ? (M(),
                                  R(
                                    'span',
                                    { key: 0, class: N(f(m).e('prefix')) },
                                    [
                                      Q(
                                        'span',
                                        { class: N(f(m).e('prefix-inner')) },
                                        [
                                          ce(L.$slots, 'prefix'),
                                          L.prefixIcon
                                            ? (M(),
                                              Y(
                                                f(_e),
                                                { key: 0, class: N(f(m).e('icon')) },
                                                {
                                                  default: j(() => [(M(), Y(vt(L.prefixIcon)))]),
                                                  _: 1,
                                                },
                                                8,
                                                ['class'],
                                              ))
                                            : U('v-if', !0),
                                        ],
                                        2,
                                      ),
                                    ],
                                    2,
                                  ))
                                : U('v-if', !0),
                              Q(
                                'input',
                                Ht(
                                  { id: f(p), ref_key: 'input', ref: E, class: f(m).e('inner') },
                                  f(i),
                                  {
                                    type: L.showPassword ? (P.value ? 'text' : 'password') : L.type,
                                    disabled: f(d),
                                    formatter: L.formatter,
                                    parser: L.parser,
                                    readonly: L.readonly,
                                    autocomplete: L.autocomplete,
                                    tabindex: L.tabindex,
                                    'aria-label': L.label,
                                    placeholder: L.placeholder,
                                    style: L.inputStyle,
                                    onCompositionstart: ut,
                                    onCompositionupdate: Be,
                                    onCompositionend: tt,
                                    onInput: Ae,
                                    onFocus: Ze,
                                    onBlur: lt,
                                    onChange: De,
                                    onKeydown: ft,
                                  },
                                ),
                                null,
                                16,
                                ci,
                              ),
                              U(' suffix slot '),
                              f(oe)
                                ? (M(),
                                  R(
                                    'span',
                                    { key: 1, class: N(f(m).e('suffix')) },
                                    [
                                      Q(
                                        'span',
                                        { class: N(f(m).e('suffix-inner')) },
                                        [
                                          !f(ye) || !f(_) || !f(T)
                                            ? (M(),
                                              R(
                                                xe,
                                                { key: 0 },
                                                [
                                                  ce(L.$slots, 'suffix'),
                                                  L.suffixIcon
                                                    ? (M(),
                                                      Y(
                                                        f(_e),
                                                        { key: 0, class: N(f(m).e('icon')) },
                                                        {
                                                          default: j(() => [
                                                            (M(), Y(vt(L.suffixIcon))),
                                                          ]),
                                                          _: 1,
                                                        },
                                                        8,
                                                        ['class'],
                                                      ))
                                                    : U('v-if', !0),
                                                ],
                                                64,
                                              ))
                                            : U('v-if', !0),
                                          f(ye)
                                            ? (M(),
                                              Y(
                                                f(_e),
                                                {
                                                  key: 1,
                                                  class: N([f(m).e('icon'), f(m).e('clear')]),
                                                  onMousedown: Ue(f(va), ['prevent']),
                                                  onClick: pt,
                                                },
                                                { default: j(() => [J(f(no))]), _: 1 },
                                                8,
                                                ['class', 'onMousedown'],
                                              ))
                                            : U('v-if', !0),
                                          f(_)
                                            ? (M(),
                                              Y(
                                                f(_e),
                                                {
                                                  key: 2,
                                                  class: N([f(m).e('icon'), f(m).e('password')]),
                                                  onClick: Ct,
                                                },
                                                { default: j(() => [(M(), Y(vt(f(Z))))]), _: 1 },
                                                8,
                                                ['class'],
                                              ))
                                            : U('v-if', !0),
                                          f(T)
                                            ? (M(),
                                              R(
                                                'span',
                                                { key: 3, class: N(f(m).e('count')) },
                                                [
                                                  Q(
                                                    'span',
                                                    { class: N(f(m).e('count-inner')) },
                                                    ie(f(F)) + ' / ' + ie(f(i).maxlength),
                                                    3,
                                                  ),
                                                ],
                                                2,
                                              ))
                                            : U('v-if', !0),
                                          f(B) && f(V) && f(D)
                                            ? (M(),
                                              Y(
                                                f(_e),
                                                {
                                                  key: 4,
                                                  class: N([
                                                    f(m).e('icon'),
                                                    f(m).e('validateIcon'),
                                                    f(m).is('loading', f(B) === 'validating'),
                                                  ]),
                                                },
                                                { default: j(() => [(M(), Y(vt(f(V))))]), _: 1 },
                                                8,
                                                ['class'],
                                              ))
                                            : U('v-if', !0),
                                        ],
                                        2,
                                      ),
                                    ],
                                    2,
                                  ))
                                : U('v-if', !0),
                            ],
                            2,
                          ),
                          U(' append slot '),
                          L.$slots.append
                            ? (M(),
                              R(
                                'div',
                                { key: 1, class: N(f(m).be('group', 'append')) },
                                [ce(L.$slots, 'append')],
                                2,
                              ))
                            : U('v-if', !0),
                        ],
                        64,
                      ))
                    : (M(),
                      R(
                        xe,
                        { key: 1 },
                        [
                          U(' textarea '),
                          Q(
                            'textarea',
                            Ht(
                              { id: f(p), ref_key: 'textarea', ref: b, class: f(w).e('inner') },
                              f(i),
                              {
                                tabindex: L.tabindex,
                                disabled: f(d),
                                readonly: L.readonly,
                                autocomplete: L.autocomplete,
                                style: f(fe),
                                'aria-label': L.label,
                                placeholder: L.placeholder,
                                onCompositionstart: ut,
                                onCompositionupdate: Be,
                                onCompositionend: tt,
                                onInput: Ae,
                                onFocus: Ze,
                                onBlur: lt,
                                onChange: De,
                                onKeydown: ft,
                              },
                            ),
                            null,
                            16,
                            di,
                          ),
                          f(T)
                            ? (M(),
                              R(
                                'span',
                                { key: 0, style: Ee(S.value), class: N(f(m).e('count')) },
                                ie(f(F)) + ' / ' + ie(f(i).maxlength),
                                7,
                              ))
                            : U('v-if', !0),
                        ],
                        64,
                      )),
                ],
                16,
                ui,
              )),
              [[Tt, L.type !== 'hidden']],
            )
        )
      },
    }),
  )
var vi = me(pi, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue'],
])
const go = bt(vi)
var Fl = !1,
  $t,
  zn,
  Fn,
  tn,
  nn,
  bo,
  ln,
  Bn,
  Wn,
  Hn,
  yo,
  Dn,
  Vn,
  Co,
  So
function Fe() {
  if (!Fl) {
    Fl = !0
    var e = navigator.userAgent,
      t =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          e,
        ),
      n = /(Mac OS X)|(Windows)|(Linux)/.exec(e)
    if (
      ((Dn = /\b(iPhone|iP[ao]d)/.exec(e)),
      (Vn = /\b(iP[ao]d)/.exec(e)),
      (Hn = /Android/i.exec(e)),
      (Co = /FBAN\/\w+;/i.exec(e)),
      (So = /Mobile/i.exec(e)),
      (yo = !!/Win64/.exec(e)),
      t)
    ) {
      ;($t = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN),
        $t && document && document.documentMode && ($t = document.documentMode)
      var l = /(?:Trident\/(\d+.\d+))/.exec(e)
      ;(bo = l ? parseFloat(l[1]) + 4 : $t),
        (zn = t[2] ? parseFloat(t[2]) : NaN),
        (Fn = t[3] ? parseFloat(t[3]) : NaN),
        (tn = t[4] ? parseFloat(t[4]) : NaN),
        tn
          ? ((t = /(?:Chrome\/(\d+\.\d+))/.exec(e)), (nn = t && t[1] ? parseFloat(t[1]) : NaN))
          : (nn = NaN)
    } else $t = zn = Fn = nn = tn = NaN
    if (n) {
      if (n[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e)
        ln = o ? parseFloat(o[1].replace('_', '.')) : !0
      } else ln = !1
      ;(Bn = !!n[2]), (Wn = !!n[3])
    } else ln = Bn = Wn = !1
  }
}
var Kn = {
    ie: function () {
      return Fe() || $t
    },
    ieCompatibilityMode: function () {
      return Fe() || bo > $t
    },
    ie64: function () {
      return Kn.ie() && yo
    },
    firefox: function () {
      return Fe() || zn
    },
    opera: function () {
      return Fe() || Fn
    },
    webkit: function () {
      return Fe() || tn
    },
    safari: function () {
      return Kn.webkit()
    },
    chrome: function () {
      return Fe() || nn
    },
    windows: function () {
      return Fe() || Bn
    },
    osx: function () {
      return Fe() || ln
    },
    linux: function () {
      return Fe() || Wn
    },
    iphone: function () {
      return Fe() || Dn
    },
    mobile: function () {
      return Fe() || Dn || Vn || Hn || So
    },
    nativeApp: function () {
      return Fe() || Co
    },
    android: function () {
      return Fe() || Hn
    },
    ipad: function () {
      return Fe() || Vn
    },
  },
  hi = Kn,
  Zt = !!(typeof window < 'u' && window.document && window.document.createElement),
  mi = {
    canUseDOM: Zt,
    canUseWorkers: typeof Worker < 'u',
    canUseEventListeners: Zt && !!(window.addEventListener || window.attachEvent),
    canUseViewport: Zt && !!window.screen,
    isInWorker: !Zt,
  },
  wo = mi,
  Eo
wo.canUseDOM &&
  (Eo =
    document.implementation &&
    document.implementation.hasFeature &&
    document.implementation.hasFeature('', '') !== !0)
function gi(e, t) {
  if (!wo.canUseDOM || (t && !('addEventListener' in document))) return !1
  var n = 'on' + e,
    l = n in document
  if (!l) {
    var o = document.createElement('div')
    o.setAttribute(n, 'return;'), (l = typeof o[n] == 'function')
  }
  return (
    !l && Eo && e === 'wheel' && (l = document.implementation.hasFeature('Events.wheel', '3.0')), l
  )
}
var bi = gi,
  Bl = 10,
  Wl = 40,
  Hl = 800
function $o(e) {
  var t = 0,
    n = 0,
    l = 0,
    o = 0
  return (
    'detail' in e && (n = e.detail),
    'wheelDelta' in e && (n = -e.wheelDelta / 120),
    'wheelDeltaY' in e && (n = -e.wheelDeltaY / 120),
    'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
    (l = t * Bl),
    (o = n * Bl),
    'deltaY' in e && (o = e.deltaY),
    'deltaX' in e && (l = e.deltaX),
    (l || o) && e.deltaMode && (e.deltaMode == 1 ? ((l *= Wl), (o *= Wl)) : ((l *= Hl), (o *= Hl))),
    l && !t && (t = l < 1 ? -1 : 1),
    o && !n && (n = o < 1 ? -1 : 1),
    { spinX: t, spinY: n, pixelX: l, pixelY: o }
  )
}
$o.getEventType = function () {
  return hi.firefox() ? 'DOMMouseScroll' : bi('wheel') ? 'wheel' : 'mousewheel'
}
var yi = $o
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Ci = function (e, t) {
    if (e && e.addEventListener) {
      const n = function (l) {
        const o = yi(l)
        t && Reflect.apply(t, this, [l, o])
      }
      e.addEventListener('wheel', n, { passive: !0 })
    }
  },
  Si = {
    beforeMount(e, t) {
      Ci(e, t.value)
    },
  },
  wi = {
    modelValue: { type: Array, default: () => [] },
    disabled: Boolean,
    min: { type: Number, default: void 0 },
    max: { type: Number, default: void 0 },
    size: Gn,
    id: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    fill: { type: String, default: void 0 },
    textColor: { type: String, default: void 0 },
    tag: { type: String, default: 'div' },
    validateEvent: { type: Boolean, default: !0 },
  },
  ko = {
    modelValue: { type: [Number, String, Boolean], default: () => {} },
    label: { type: [String, Boolean, Number, Object] },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: { type: String, default: void 0 },
    trueLabel: { type: [String, Number], default: void 0 },
    falseLabel: { type: [String, Number], default: void 0 },
    id: { type: String, default: void 0 },
    controls: { type: String, default: void 0 },
    border: Boolean,
    size: Gn,
    tabindex: [String, Number],
    validateEvent: { type: Boolean, default: !0 },
  },
  Ft = () => {
    const { form: e, formItem: t } = Qn(),
      n = $e('CheckboxGroup', {}),
      l = $(() => n && (n == null ? void 0 : n.name) === 'ElCheckboxGroup'),
      o = $(() => (t == null ? void 0 : t.size))
    return { isGroup: l, checkboxGroup: n, elForm: e, elFormItemSize: o, elFormItem: t }
  },
  Ei = (e, { elFormItem: t }) => {
    const { inputId: n, isLabeledByFormItem: l } = Jn(e, { formItemContext: t })
    return { isLabeledByFormItem: l, groupId: n }
  },
  $i = (e) => {
    const t = A(!1),
      { emit: n } = be(),
      { isGroup: l, checkboxGroup: o, elFormItem: s } = Ft(),
      r = A(!1)
    return {
      model: $({
        get() {
          var a, i
          return l.value
            ? (a = o.modelValue) == null
              ? void 0
              : a.value
            : (i = e.modelValue) != null
            ? i
            : t.value
        },
        set(a) {
          var i
          l.value && Array.isArray(a)
            ? ((r.value = o.max !== void 0 && a.length > o.max.value),
              r.value === !1 && ((i = o == null ? void 0 : o.changeEvent) == null || i.call(o, a)))
            : (n(Ne, a), (t.value = a))
        },
      }),
      isGroup: l,
      isLimitExceeded: r,
      elFormItem: s,
    }
  },
  ki = (e, t, { model: n }) => {
    const { isGroup: l, checkboxGroup: o } = Ft(),
      s = A(!1),
      r = xt(o == null ? void 0 : o.checkboxGroupSize, { prop: !0 }),
      u = $(() => {
        const c = n.value
        return ha(c) === '[object Boolean]'
          ? c
          : Array.isArray(c)
          ? c.includes(e.label)
          : c != null
          ? c === e.trueLabel
          : !!c
      }),
      a = xt(
        $(() => {
          var c
          return l.value
            ? (c = o == null ? void 0 : o.checkboxGroupSize) == null
              ? void 0
              : c.value
            : void 0
        }),
      ),
      i = $(() => !!(t.default || e.label))
    return { isChecked: u, focus: s, size: r, checkboxSize: a, hasOwnLabel: i }
  },
  Mi = (e, { model: t, isChecked: n }) => {
    const { elForm: l, isGroup: o, checkboxGroup: s } = Ft(),
      r = $(() => {
        var a, i
        const c = (a = s.max) == null ? void 0 : a.value,
          v = (i = s.min) == null ? void 0 : i.value
        return (!!(c || v) && t.value.length >= c && !n.value) || (t.value.length <= v && n.value)
      })
    return {
      isDisabled: $(() => {
        var a, i
        const c = e.disabled || (l == null ? void 0 : l.disabled)
        return (i = o.value ? ((a = s.disabled) == null ? void 0 : a.value) || c || r.value : c) !=
          null
          ? i
          : !1
      }),
      isLimitDisabled: r,
    }
  },
  xi = (e, { model: t }) => {
    function n() {
      Array.isArray(t.value) && !t.value.includes(e.label)
        ? t.value.push(e.label)
        : (t.value = e.trueLabel || !0)
    }
    e.checked && n()
  },
  Ti = (
    e,
    { model: t, isLimitExceeded: n, hasOwnLabel: l, isDisabled: o, isLabeledByFormItem: s },
  ) => {
    const { elFormItem: r, checkboxGroup: u } = Ft(),
      { emit: a } = be()
    function i(d) {
      var m, w
      return d === e.trueLabel || d === !0
        ? (m = e.trueLabel) != null
          ? m
          : !0
        : (w = e.falseLabel) != null
        ? w
        : !1
    }
    function c(d, m) {
      a('change', i(d), m)
    }
    function v(d) {
      if (n.value) return
      const m = d.target
      a('change', i(m.checked), d)
    }
    function p(d) {
      return ot(this, null, function* () {
        n.value ||
          (!l.value &&
            !o.value &&
            s.value &&
            ((t.value = i([!1, e.falseLabel].includes(t.value))), yield he(), c(t.value, d)))
      })
    }
    const g = $(() => {
      var d
      return ((d = u.validateEvent) == null ? void 0 : d.value) || e.validateEvent
    })
    return (
      ae(
        () => e.modelValue,
        () => {
          g.value && (r == null || r.validate('change').catch((d) => Lt()))
        },
      ),
      { handleChange: v, onClickRoot: p }
    )
  },
  Mo = { [Ne]: (e) => Xe(e) || Yt(e) || dl(e), change: (e) => Xe(e) || Yt(e) || dl(e) },
  Pi = { [Ne]: (e) => ul(e), change: (e) => ul(e) },
  xo = (e, t) => {
    const { model: n, isGroup: l, isLimitExceeded: o, elFormItem: s } = $i(e),
      { focus: r, size: u, isChecked: a, checkboxSize: i, hasOwnLabel: c } = ki(e, t, { model: n }),
      { isDisabled: v } = Mi(e, { model: n, isChecked: a }),
      { inputId: p, isLabeledByFormItem: g } = Jn(e, {
        formItemContext: s,
        disableIdGeneration: c,
        disableIdManagement: l,
      }),
      { handleChange: d, onClickRoot: m } = Ti(e, {
        model: n,
        isLimitExceeded: o,
        hasOwnLabel: c,
        isDisabled: v,
        isLabeledByFormItem: g,
      })
    return (
      xi(e, { model: n }),
      {
        elFormItem: s,
        inputId: p,
        isLabeledByFormItem: g,
        isChecked: a,
        isDisabled: v,
        isGroup: l,
        checkboxSize: i,
        hasOwnLabel: c,
        model: n,
        handleChange: d,
        onClickRoot: m,
        focus: r,
        size: u,
      }
    )
  },
  Ai = ['tabindex', 'role', 'aria-checked'],
  Oi = ['id', 'aria-hidden', 'name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  Ii = ['id', 'aria-hidden', 'disabled', 'value', 'name', 'tabindex'],
  Li = { name: 'ElCheckbox' },
  Ni = te(
    Se(ue({}, Li), {
      props: ko,
      emits: Mo,
      setup(e) {
        const t = e,
          n = hn(),
          {
            inputId: l,
            isLabeledByFormItem: o,
            isChecked: s,
            isDisabled: r,
            checkboxSize: u,
            hasOwnLabel: a,
            model: i,
            handleChange: c,
            onClickRoot: v,
            focus: p,
          } = xo(t, n),
          g = X('checkbox')
        return (d, m) => (
          M(),
          Y(
            vt(!f(a) && f(o) ? 'span' : 'label'),
            {
              class: N([
                f(g).b(),
                f(g).m(f(u)),
                f(g).is('disabled', f(r)),
                f(g).is('bordered', d.border),
                f(g).is('checked', f(s)),
              ]),
              'aria-controls': d.indeterminate ? d.controls : null,
              onClick: f(v),
            },
            {
              default: j(() => [
                Q(
                  'span',
                  {
                    class: N([
                      f(g).e('input'),
                      f(g).is('disabled', f(r)),
                      f(g).is('checked', f(s)),
                      f(g).is('indeterminate', d.indeterminate),
                      f(g).is('focus', f(p)),
                    ]),
                    tabindex: d.indeterminate ? 0 : void 0,
                    role: d.indeterminate ? 'checkbox' : void 0,
                    'aria-checked': d.indeterminate ? 'mixed' : void 0,
                  },
                  [
                    d.trueLabel || d.falseLabel
                      ? Re(
                          (M(),
                          R(
                            'input',
                            {
                              key: 0,
                              id: f(l),
                              'onUpdate:modelValue':
                                m[0] || (m[0] = (w) => (Gt(i) ? (i.value = w) : null)),
                              class: N(f(g).e('original')),
                              type: 'checkbox',
                              'aria-hidden': d.indeterminate ? 'true' : 'false',
                              name: d.name,
                              tabindex: d.tabindex,
                              disabled: f(r),
                              'true-value': d.trueLabel,
                              'false-value': d.falseLabel,
                              onChange: m[1] || (m[1] = (...w) => f(c) && f(c)(...w)),
                              onFocus: m[2] || (m[2] = (w) => (p.value = !0)),
                              onBlur: m[3] || (m[3] = (w) => (p.value = !1)),
                            },
                            null,
                            42,
                            Oi,
                          )),
                          [[cn, f(i)]],
                        )
                      : Re(
                          (M(),
                          R(
                            'input',
                            {
                              key: 1,
                              id: f(l),
                              'onUpdate:modelValue':
                                m[4] || (m[4] = (w) => (Gt(i) ? (i.value = w) : null)),
                              class: N(f(g).e('original')),
                              type: 'checkbox',
                              'aria-hidden': d.indeterminate ? 'true' : 'false',
                              disabled: f(r),
                              value: d.label,
                              name: d.name,
                              tabindex: d.tabindex,
                              onChange: m[5] || (m[5] = (...w) => f(c) && f(c)(...w)),
                              onFocus: m[6] || (m[6] = (w) => (p.value = !0)),
                              onBlur: m[7] || (m[7] = (w) => (p.value = !1)),
                            },
                            null,
                            42,
                            Ii,
                          )),
                          [[cn, f(i)]],
                        ),
                    Q('span', { class: N(f(g).e('inner')) }, null, 2),
                  ],
                  10,
                  Ai,
                ),
                f(a)
                  ? (M(),
                    R(
                      'span',
                      { key: 0, class: N(f(g).e('label')) },
                      [
                        ce(d.$slots, 'default'),
                        d.$slots.default
                          ? U('v-if', !0)
                          : (M(), R(xe, { key: 0 }, [st(ie(d.label), 1)], 64)),
                      ],
                      2,
                    ))
                  : U('v-if', !0),
              ]),
              _: 3,
            },
            8,
            ['class', 'aria-controls', 'onClick'],
          )
        )
      },
    }),
  )
var _i = me(Ni, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue',
  ],
])
const Ri = ['name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  zi = ['name', 'tabindex', 'disabled', 'value'],
  Fi = { name: 'ElCheckboxButton' },
  Bi = te(
    Se(ue({}, Fi), {
      props: ko,
      emits: Mo,
      setup(e) {
        const t = e,
          n = hn(),
          { focus: l, isChecked: o, isDisabled: s, size: r, model: u, handleChange: a } = xo(t, n),
          { checkboxGroup: i } = Ft(),
          c = X('checkbox'),
          v = $(() => {
            var p, g, d, m
            const w =
              (g = (p = i == null ? void 0 : i.fill) == null ? void 0 : p.value) != null ? g : ''
            return {
              backgroundColor: w,
              borderColor: w,
              color:
                (m = (d = i == null ? void 0 : i.textColor) == null ? void 0 : d.value) != null
                  ? m
                  : '',
              boxShadow: w ? `-1px 0 0 0 ${w}` : void 0,
            }
          })
        return (p, g) => (
          M(),
          R(
            'label',
            {
              class: N([
                f(c).b('button'),
                f(c).bm('button', f(r)),
                f(c).is('disabled', f(s)),
                f(c).is('checked', f(o)),
                f(c).is('focus', f(l)),
              ]),
            },
            [
              p.trueLabel || p.falseLabel
                ? Re(
                    (M(),
                    R(
                      'input',
                      {
                        key: 0,
                        'onUpdate:modelValue':
                          g[0] || (g[0] = (d) => (Gt(u) ? (u.value = d) : null)),
                        class: N(f(c).be('button', 'original')),
                        type: 'checkbox',
                        name: p.name,
                        tabindex: p.tabindex,
                        disabled: f(s),
                        'true-value': p.trueLabel,
                        'false-value': p.falseLabel,
                        onChange: g[1] || (g[1] = (...d) => f(a) && f(a)(...d)),
                        onFocus: g[2] || (g[2] = (d) => (l.value = !0)),
                        onBlur: g[3] || (g[3] = (d) => (l.value = !1)),
                      },
                      null,
                      42,
                      Ri,
                    )),
                    [[cn, f(u)]],
                  )
                : Re(
                    (M(),
                    R(
                      'input',
                      {
                        key: 1,
                        'onUpdate:modelValue':
                          g[4] || (g[4] = (d) => (Gt(u) ? (u.value = d) : null)),
                        class: N(f(c).be('button', 'original')),
                        type: 'checkbox',
                        name: p.name,
                        tabindex: p.tabindex,
                        disabled: f(s),
                        value: p.label,
                        onChange: g[5] || (g[5] = (...d) => f(a) && f(a)(...d)),
                        onFocus: g[6] || (g[6] = (d) => (l.value = !0)),
                        onBlur: g[7] || (g[7] = (d) => (l.value = !1)),
                      },
                      null,
                      42,
                      zi,
                    )),
                    [[cn, f(u)]],
                  ),
              p.$slots.default || p.label
                ? (M(),
                  R(
                    'span',
                    {
                      key: 2,
                      class: N(f(c).be('button', 'inner')),
                      style: Ee(f(o) ? f(v) : void 0),
                    },
                    [ce(p.$slots, 'default', {}, () => [st(ie(p.label), 1)])],
                    6,
                  ))
                : U('v-if', !0),
            ],
            2,
          )
        )
      },
    }),
  )
var To = me(Bi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue',
  ],
])
const Wi = { name: 'ElCheckboxGroup' },
  Hi = te(
    Se(ue({}, Wi), {
      props: wi,
      emits: Pi,
      setup(e, { emit: t }) {
        const n = e,
          { elFormItem: l } = Ft(),
          { groupId: o, isLabeledByFormItem: s } = Ei(n, { elFormItem: l }),
          r = xt(),
          u = X('checkbox'),
          a = (c) => {
            t(Ne, c),
              he(() => {
                t('change', c)
              })
          },
          i = $({
            get() {
              return n.modelValue
            },
            set(c) {
              a(c)
            },
          })
        return (
          gt(
            'CheckboxGroup',
            Se(ue({ name: 'ElCheckboxGroup' }, Xt(n)), {
              modelValue: i,
              checkboxGroupSize: r,
              changeEvent: a,
            }),
          ),
          ae(
            () => n.modelValue,
            () => {
              n.validateEvent && (l == null || l.validate('change').catch((c) => Lt()))
            },
          ),
          (c, v) => {
            var p
            return (
              M(),
              Y(
                vt(c.tag),
                {
                  id: f(o),
                  class: N(f(u).b('group')),
                  role: 'group',
                  'aria-label': f(s) ? void 0 : c.label || 'checkbox-group',
                  'aria-labelledby': f(s) ? ((p = f(l)) == null ? void 0 : p.labelId) : void 0,
                },
                { default: j(() => [ce(c.$slots, 'default')]), _: 3 },
                8,
                ['id', 'class', 'aria-label', 'aria-labelledby'],
              )
            )
          }
        )
      },
    }),
  )
var Po = me(Hi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue',
  ],
])
const _t = bt(_i, { CheckboxButton: To, CheckboxGroup: Po })
Ke(To)
Ke(Po)
const Ao = Qe({
    closable: Boolean,
    type: { type: String, values: ['success', 'info', 'warning', 'danger', ''], default: '' },
    hit: Boolean,
    disableTransitions: Boolean,
    color: { type: String, default: '' },
    size: { type: String, values: Yl, default: '' },
    effect: { type: String, values: ['dark', 'light', 'plain'], default: 'light' },
    round: Boolean,
  }),
  Di = { close: (e) => e instanceof MouseEvent, click: (e) => e instanceof MouseEvent },
  Vi = { name: 'ElTag' },
  Ki = te(
    Se(ue({}, Vi), {
      props: Ao,
      emits: Di,
      setup(e, { emit: t }) {
        const n = e,
          l = xt(),
          o = X('tag'),
          s = $(() => {
            const { type: a, hit: i, effect: c, closable: v, round: p } = n
            return [
              o.b(),
              o.is('closable', v),
              o.m(a),
              o.m(l.value),
              o.m(c),
              o.is('hit', i),
              o.is('round', p),
            ]
          }),
          r = (a) => {
            t('close', a)
          },
          u = (a) => {
            t('click', a)
          }
        return (a, i) =>
          a.disableTransitions
            ? (M(),
              R(
                'span',
                { key: 0, class: N(f(s)), style: Ee({ backgroundColor: a.color }), onClick: u },
                [
                  Q('span', { class: N(f(o).e('content')) }, [ce(a.$slots, 'default')], 2),
                  a.closable
                    ? (M(),
                      Y(
                        f(_e),
                        { key: 0, class: N(f(o).e('close')), onClick: Ue(r, ['stop']) },
                        { default: j(() => [J(f(fl))]), _: 1 },
                        8,
                        ['class', 'onClick'],
                      ))
                    : U('v-if', !0),
                ],
                6,
              ))
            : (M(),
              Y(
                mn,
                { key: 1, name: `${f(o).namespace.value}-zoom-in-center`, appear: '' },
                {
                  default: j(() => [
                    Q(
                      'span',
                      { class: N(f(s)), style: Ee({ backgroundColor: a.color }), onClick: u },
                      [
                        Q('span', { class: N(f(o).e('content')) }, [ce(a.$slots, 'default')], 2),
                        a.closable
                          ? (M(),
                            Y(
                              f(_e),
                              { key: 0, class: N(f(o).e('close')), onClick: Ue(r, ['stop']) },
                              { default: j(() => [J(f(fl))]), _: 1 },
                              8,
                              ['class', 'onClick'],
                            ))
                          : U('v-if', !0),
                      ],
                      6,
                    ),
                  ]),
                  _: 3,
                },
                8,
                ['name'],
              ))
      },
    }),
  )
var ji = me(Ki, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue'],
])
const qi = bt(ji),
  Gi = { name: 'ElCollapseTransition' },
  Ui = te(
    Se(ue({}, Gi), {
      setup(e) {
        const t = X('collapse-transition'),
          n = {
            beforeEnter(l) {
              l.dataset || (l.dataset = {}),
                (l.dataset.oldPaddingTop = l.style.paddingTop),
                (l.dataset.oldPaddingBottom = l.style.paddingBottom),
                (l.style.maxHeight = 0),
                (l.style.paddingTop = 0),
                (l.style.paddingBottom = 0)
            },
            enter(l) {
              ;(l.dataset.oldOverflow = l.style.overflow),
                l.scrollHeight !== 0
                  ? ((l.style.maxHeight = `${l.scrollHeight}px`),
                    (l.style.paddingTop = l.dataset.oldPaddingTop),
                    (l.style.paddingBottom = l.dataset.oldPaddingBottom))
                  : ((l.style.maxHeight = 0),
                    (l.style.paddingTop = l.dataset.oldPaddingTop),
                    (l.style.paddingBottom = l.dataset.oldPaddingBottom)),
                (l.style.overflow = 'hidden')
            },
            afterEnter(l) {
              ;(l.style.maxHeight = ''), (l.style.overflow = l.dataset.oldOverflow)
            },
            beforeLeave(l) {
              l.dataset || (l.dataset = {}),
                (l.dataset.oldPaddingTop = l.style.paddingTop),
                (l.dataset.oldPaddingBottom = l.style.paddingBottom),
                (l.dataset.oldOverflow = l.style.overflow),
                (l.style.maxHeight = `${l.scrollHeight}px`),
                (l.style.overflow = 'hidden')
            },
            leave(l) {
              l.scrollHeight !== 0 &&
                ((l.style.maxHeight = 0), (l.style.paddingTop = 0), (l.style.paddingBottom = 0))
            },
            afterLeave(l) {
              ;(l.style.maxHeight = ''),
                (l.style.overflow = l.dataset.oldOverflow),
                (l.style.paddingTop = l.dataset.oldPaddingTop),
                (l.style.paddingBottom = l.dataset.oldPaddingBottom)
            },
          }
        return (l, o) => (
          M(),
          Y(
            mn,
            Ht({ name: f(t).b() }, ma(n)),
            { default: j(() => [ce(l.$slots, 'default')]), _: 3 },
            16,
            ['name'],
          )
        )
      },
    }),
  )
var on = me(Ui, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue',
  ],
])
on.install = (e) => {
  e.component(on.name, on)
}
const Yi = on,
  Xi = { name: 'ElContainer' },
  Qi = te(
    Se(ue({}, Xi), {
      props: { direction: { type: String } },
      setup(e) {
        const t = e,
          n = hn(),
          l = X('container'),
          o = $(() =>
            t.direction === 'vertical'
              ? !0
              : t.direction === 'horizontal'
              ? !1
              : n && n.default
              ? n.default().some((r) => {
                  const u = r.type.name
                  return u === 'ElHeader' || u === 'ElFooter'
                })
              : !1,
          )
        return (s, r) => (
          M(),
          R(
            'section',
            { class: N([f(l).b(), f(l).is('vertical', f(o))]) },
            [ce(s.$slots, 'default')],
            2,
          )
        )
      },
    }),
  )
var Ji = me(Qi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue',
  ],
])
const Zi = { name: 'ElAside' },
  eu = te(
    Se(ue({}, Zi), {
      props: { width: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = X('aside'),
          l = $(() => (t.width ? n.cssVarBlock({ width: t.width }) : {}))
        return (o, s) => (
          M(), R('aside', { class: N(f(n).b()), style: Ee(f(l)) }, [ce(o.$slots, 'default')], 6)
        )
      },
    }),
  )
var Oo = me(eu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue',
  ],
])
const tu = { name: 'ElFooter' },
  nu = te(
    Se(ue({}, tu), {
      props: { height: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = X('footer'),
          l = $(() => (t.height ? n.cssVarBlock({ height: t.height }) : {}))
        return (o, s) => (
          M(), R('footer', { class: N(f(n).b()), style: Ee(f(l)) }, [ce(o.$slots, 'default')], 6)
        )
      },
    }),
  )
var Io = me(nu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue',
  ],
])
const lu = { name: 'ElHeader' },
  ou = te(
    Se(ue({}, lu), {
      props: { height: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = X('header'),
          l = $(() => (t.height ? n.cssVarBlock({ height: t.height }) : {}))
        return (o, s) => (
          M(), R('header', { class: N(f(n).b()), style: Ee(f(l)) }, [ce(o.$slots, 'default')], 6)
        )
      },
    }),
  )
var Lo = me(ou, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue',
  ],
])
const au = { name: 'ElMain' },
  su = te(
    Se(ue({}, au), {
      setup(e) {
        const t = X('main')
        return (n, l) => (M(), R('main', { class: N(f(t).b()) }, [ce(n.$slots, 'default')], 2))
      },
    }),
  )
var No = me(su, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue',
  ],
])
const ru = bt(Ji, { Aside: Oo, Footer: Io, Header: Lo, Main: No }),
  iu = Ke(Oo),
  uu = Ke(Io),
  cu = Ke(Lo),
  du = Ke(No)
class fu {
  constructor(t, n) {
    ;(this.parent = t), (this.domNode = n), (this.subIndex = 0), (this.subIndex = 0), this.init()
  }
  init() {
    ;(this.subMenuItems = this.domNode.querySelectorAll('li')), this.addListeners()
  }
  gotoSubIndex(t) {
    t === this.subMenuItems.length ? (t = 0) : t < 0 && (t = this.subMenuItems.length - 1),
      this.subMenuItems[t].focus(),
      (this.subIndex = t)
  }
  addListeners() {
    const t = this.parent.domNode
    Array.prototype.forEach.call(this.subMenuItems, (n) => {
      n.addEventListener('keydown', (l) => {
        let o = !1
        switch (l.code) {
          case Ye.down: {
            this.gotoSubIndex(this.subIndex + 1), (o = !0)
            break
          }
          case Ye.up: {
            this.gotoSubIndex(this.subIndex - 1), (o = !0)
            break
          }
          case Ye.tab: {
            en(t, 'mouseleave')
            break
          }
          case Ye.enter:
          case Ye.space: {
            ;(o = !0), l.currentTarget.click()
            break
          }
        }
        return o && (l.preventDefault(), l.stopPropagation()), !1
      })
    })
  }
}
class pu {
  constructor(t, n) {
    ;(this.domNode = t), (this.submenu = null), (this.submenu = null), this.init(n)
  }
  init(t) {
    this.domNode.setAttribute('tabindex', '0')
    const n = this.domNode.querySelector(`.${t}-menu`)
    n && (this.submenu = new fu(this, n)), this.addListeners()
  }
  addListeners() {
    this.domNode.addEventListener('keydown', (t) => {
      let n = !1
      switch (t.code) {
        case Ye.down: {
          en(t.currentTarget, 'mouseenter'), this.submenu && this.submenu.gotoSubIndex(0), (n = !0)
          break
        }
        case Ye.up: {
          en(t.currentTarget, 'mouseenter'),
            this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
            (n = !0)
          break
        }
        case Ye.tab: {
          en(t.currentTarget, 'mouseleave')
          break
        }
        case Ye.enter:
        case Ye.space: {
          ;(n = !0), t.currentTarget.click()
          break
        }
      }
      n && t.preventDefault()
    })
  }
}
class vu {
  constructor(t, n) {
    ;(this.domNode = t), this.init(n)
  }
  init(t) {
    const n = this.domNode.childNodes
    Array.from(n).forEach((l) => {
      l.nodeType === 1 && new pu(l, t)
    })
  }
}
const hu = te({
  name: 'ElMenuCollapseTransition',
  setup() {
    const e = X('menu')
    return {
      listeners: {
        onBeforeEnter: (n) => (n.style.opacity = '0.2'),
        onEnter(n, l) {
          Ot(n, `${e.namespace.value}-opacity-transition`), (n.style.opacity = '1'), l()
        },
        onAfterEnter(n) {
          It(n, `${e.namespace.value}-opacity-transition`), (n.style.opacity = '')
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}),
            Dt(n, e.m('collapse'))
              ? (It(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                Ot(n, e.m('collapse')))
              : (Ot(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                It(n, e.m('collapse'))),
            (n.style.width = `${n.scrollWidth}px`),
            (n.style.overflow = 'hidden')
        },
        onLeave(n) {
          Ot(n, 'horizontal-collapse-transition'), (n.style.width = `${n.dataset.scrollWidth}px`)
        },
      },
    }
  },
})
function mu(e, t, n, l, o, s) {
  return (
    M(),
    Y(
      mn,
      Ht({ mode: 'out-in' }, e.listeners),
      { default: j(() => [ce(e.$slots, 'default')]), _: 3 },
      16,
    )
  )
}
var gu = me(hu, [
  ['render', mu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue',
  ],
])
function _o(e, t) {
  const n = $(() => {
    let o = e.parent
    const s = [t.value]
    for (; o.type.name !== 'ElMenu'; ) o.props.index && s.unshift(o.props.index), (o = o.parent)
    return s
  })
  return {
    parentMenu: $(() => {
      let o = e.parent
      for (; o && !['ElMenu', 'ElSubMenu'].includes(o.type.name); ) o = o.parent
      return o
    }),
    indexPath: n,
  }
}
function bu(e) {
  return $(() => {
    const n = e.backgroundColor
    return n ? new Ra(n).shade(20).toString() : ''
  })
}
const Ro = (e, t) => {
    const n = X('menu')
    return $(() =>
      n.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': bu(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${t}`,
      }),
    )
  },
  yu = Qe({
    index: { type: String, required: !0 },
    showTimeout: { type: Number, default: 300 },
    hideTimeout: { type: Number, default: 300 },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: { type: Boolean, default: void 0 },
    popperOffset: { type: Number, default: 6 },
  }),
  Mn = 'ElSubMenu'
var Zn = te({
  name: Mn,
  props: yu,
  setup(e, { slots: t, expose: n }) {
    const l = be(),
      { indexPath: o, parentMenu: s } = _o(
        l,
        $(() => e.index),
      ),
      r = X('menu'),
      u = X('sub-menu'),
      a = $e('rootMenu')
    a || dn(Mn, 'can not inject root menu')
    const i = $e(`subMenu:${s.value.uid}`)
    i || dn(Mn, 'can not inject sub menu')
    const c = A({}),
      v = A({})
    let p
    const g = A(!1),
      d = A(),
      m = A(null),
      w = $(() => (B.value === 'horizontal' && b.value ? 'bottom-start' : 'right-start')),
      E = $(() =>
        (B.value === 'horizontal' && b.value) || (B.value === 'vertical' && !a.props.collapse)
          ? lo
          : Cn,
      ),
      b = $(() => i.level === 0),
      h = $(() => (e.popperAppendToBody === void 0 ? b.value : Boolean(e.popperAppendToBody))),
      C = $(() =>
        a.props.collapse ? `${r.namespace.value}-zoom-in-left` : `${r.namespace.value}-zoom-in-top`,
      ),
      O = $(() =>
        B.value === 'horizontal' && b.value
          ? ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start']
          : ['right-start', 'left-start', 'bottom-start', 'bottom-end', 'top-start', 'top-end'],
      ),
      P = $(() => a.openedMenus.includes(e.index)),
      S = $(() => {
        let T = !1
        return (
          Object.values(c.value).forEach((F) => {
            F.active && (T = !0)
          }),
          Object.values(v.value).forEach((F) => {
            F.active && (T = !0)
          }),
          T
        )
      }),
      x = $(() => a.props.backgroundColor || ''),
      I = $(() => a.props.activeTextColor || ''),
      D = $(() => a.props.textColor || ''),
      B = $(() => a.props.mode),
      V = yt({ index: e.index, indexPath: o, active: S }),
      Z = $(() =>
        B.value !== 'horizontal'
          ? { color: D.value }
          : {
              borderBottomColor: S.value ? (a.props.activeTextColor ? I.value : '') : 'transparent',
              color: S.value ? I.value : D.value,
            },
      ),
      ee = () => {
        var T, F, q
        return (q =
          (F = (T = m.value) == null ? void 0 : T.popperRef) == null
            ? void 0
            : F.popperInstanceRef) == null
          ? void 0
          : q.destroy()
      },
      fe = (T) => {
        T || ee()
      },
      le = () => {
        ;(a.props.menuTrigger === 'hover' && a.props.mode === 'horizontal') ||
          (a.props.collapse && a.props.mode === 'vertical') ||
          e.disabled ||
          a.handleSubMenuClick({ index: e.index, indexPath: o.value, active: S.value })
      },
      ye = (T, F = e.showTimeout) => {
        var q
        T.type !== 'focus' &&
          ((a.props.menuTrigger === 'click' && a.props.mode === 'horizontal') ||
            (!a.props.collapse && a.props.mode === 'vertical') ||
            e.disabled ||
            ((i.mouseInChild.value = !0),
            p == null || p(),
            ({ stop: p } = pl(() => {
              a.openMenu(e.index, o.value)
            }, F)),
            h.value &&
              ((q = s.value.vnode.el) == null || q.dispatchEvent(new MouseEvent('mouseenter')))))
      },
      _ = (T = !1) => {
        var F, q
        ;(a.props.menuTrigger === 'click' && a.props.mode === 'horizontal') ||
          (!a.props.collapse && a.props.mode === 'vertical') ||
          (p == null || p(),
          (i.mouseInChild.value = !1),
          ({ stop: p } = pl(() => !g.value && a.closeMenu(e.index, o.value), e.hideTimeout)),
          h.value &&
            T &&
            ((F = l.parent) == null ? void 0 : F.type.name) === 'ElSubMenu' &&
            ((q = i.handleMouseleave) == null || q.call(i, !0)))
      }
    ae(
      () => a.props.collapse,
      (T) => fe(Boolean(T)),
    )
    {
      const T = (q) => {
          v.value[q.index] = q
        },
        F = (q) => {
          delete v.value[q.index]
        }
      gt(`subMenu:${l.uid}`, {
        addSubMenu: T,
        removeSubMenu: F,
        handleMouseleave: _,
        mouseInChild: g,
        level: i.level + 1,
      })
    }
    return (
      n({ opened: P }),
      Je(() => {
        a.addSubMenu(V), i.addSubMenu(V)
      }),
      gn(() => {
        i.removeSubMenu(V), a.removeSubMenu(V)
      }),
      () => {
        var T
        const F = [
            (T = t.title) == null ? void 0 : T.call(t),
            W(_e, { class: u.e('icon-arrow') }, { default: () => W(E.value) }),
          ],
          q = Ro(a.props, i.level + 1),
          oe = a.isMenuPopup
            ? W(
                yn,
                {
                  ref: m,
                  visible: P.value,
                  effect: 'light',
                  pure: !0,
                  offset: e.popperOffset,
                  showArrow: !1,
                  persistent: !0,
                  popperClass: e.popperClass,
                  placement: w.value,
                  teleported: h.value,
                  fallbackPlacements: O.value,
                  transition: C.value,
                  gpuAcceleration: !1,
                },
                {
                  content: () => {
                    var se
                    return W(
                      'div',
                      {
                        class: [r.m(B.value), r.m('popup-container'), e.popperClass],
                        onMouseenter: (ve) => ye(ve, 100),
                        onMouseleave: () => _(!0),
                        onFocus: (ve) => ye(ve, 100),
                      },
                      [
                        W(
                          'ul',
                          { class: [r.b(), r.m('popup'), r.m(`popup-${w.value}`)], style: q.value },
                          [(se = t.default) == null ? void 0 : se.call(t)],
                        ),
                      ],
                    )
                  },
                  default: () =>
                    W(
                      'div',
                      {
                        class: u.e('title'),
                        style: [Z.value, { backgroundColor: x.value }],
                        onClick: le,
                      },
                      F,
                    ),
                },
              )
            : W(xe, {}, [
                W(
                  'div',
                  {
                    class: u.e('title'),
                    style: [Z.value, { backgroundColor: x.value }],
                    ref: d,
                    onClick: le,
                  },
                  F,
                ),
                W(
                  Yi,
                  {},
                  {
                    default: () => {
                      var se
                      return Re(
                        W('ul', { role: 'menu', class: [r.b(), r.m('inline')], style: q.value }, [
                          (se = t.default) == null ? void 0 : se.call(t),
                        ]),
                        [[Tt, P.value]],
                      )
                    },
                  },
                ),
              ])
        return W(
          'li',
          {
            class: [
              u.b(),
              u.is('active', S.value),
              u.is('opened', P.value),
              u.is('disabled', e.disabled),
            ],
            role: 'menuitem',
            ariaHaspopup: !0,
            ariaExpanded: P.value,
            onMouseenter: ye,
            onMouseleave: () => _(!0),
            onFocus: ye,
          },
          [oe],
        )
      }
    )
  },
})
const Cu = Qe({
    mode: { type: String, values: ['horizontal', 'vertical'], default: 'vertical' },
    defaultActive: { type: String, default: '' },
    defaultOpeneds: { type: ht(Array), default: () => bn([]) },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
  }),
  xn = (e) => Array.isArray(e) && e.every((t) => Xe(t)),
  Su = {
    close: (e, t) => Xe(e) && xn(t),
    open: (e, t) => Xe(e) && xn(t),
    select: (e, t, n, l) => Xe(e) && xn(t) && qt(n) && (l === void 0 || l instanceof Promise),
  }
var wu = te({
  name: 'ElMenu',
  props: Cu,
  emits: Su,
  setup(e, { emit: t, slots: n, expose: l }) {
    const o = be(),
      s = o.appContext.config.globalProperties.$router,
      r = A(),
      u = X('menu'),
      a = X('sub-menu'),
      i = A(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      c = A(e.defaultActive),
      v = A({}),
      p = A({}),
      g = $(() => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)),
      d = () => {
        const S = c.value && v.value[c.value]
        if (!S || e.mode === 'horizontal' || e.collapse) return
        S.indexPath.forEach((I) => {
          const D = p.value[I]
          D && m(I, D.indexPath)
        })
      },
      m = (S, x) => {
        i.value.includes(S) ||
          (e.uniqueOpened && (i.value = i.value.filter((I) => x.includes(I))),
          i.value.push(S),
          t('open', S, x))
      },
      w = (S, x) => {
        const I = i.value.indexOf(S)
        I !== -1 && i.value.splice(I, 1), t('close', S, x)
      },
      E = ({ index: S, indexPath: x }) => {
        i.value.includes(S) ? w(S, x) : m(S, x)
      },
      b = (S) => {
        ;(e.mode === 'horizontal' || e.collapse) && (i.value = [])
        const { index: x, indexPath: I } = S
        if (!(x === void 0 || I === void 0))
          if (e.router && s) {
            const D = S.route || x,
              B = s.push(D).then((V) => (V || (c.value = x), V))
            t('select', x, I, { index: x, indexPath: I, route: D }, B)
          } else (c.value = x), t('select', x, I, { index: x, indexPath: I })
      },
      h = (S) => {
        const x = v.value,
          I = x[S] || (c.value && x[c.value]) || x[e.defaultActive]
        I ? (c.value = I.index) : (c.value = S)
      },
      C = () => {
        he(() => o.proxy.$forceUpdate())
      }
    ae(
      () => e.defaultActive,
      (S) => {
        v.value[S] || (c.value = ''), h(S)
      },
    ),
      ae(
        () => e.collapse,
        (S) => {
          S && (i.value = [])
        },
      ),
      ae(v.value, d)
    let O
    Mt(() => {
      e.mode === 'horizontal' && e.ellipsis ? (O = Qt(r, C).stop) : O == null || O()
    })
    {
      const S = (B) => {
          p.value[B.index] = B
        },
        x = (B) => {
          delete p.value[B.index]
        }
      gt(
        'rootMenu',
        yt({
          props: e,
          openedMenus: i,
          items: v,
          subMenus: p,
          activeIndex: c,
          isMenuPopup: g,
          addMenuItem: (B) => {
            v.value[B.index] = B
          },
          removeMenuItem: (B) => {
            delete v.value[B.index]
          },
          addSubMenu: S,
          removeSubMenu: x,
          openMenu: m,
          closeMenu: w,
          handleMenuItemClick: b,
          handleSubMenuClick: E,
        }),
      ),
        gt(`subMenu:${o.uid}`, { addSubMenu: S, removeSubMenu: x, mouseInChild: A(!1), level: 0 })
    }
    Je(() => {
      e.mode === 'horizontal' && new vu(o.vnode.el, u.namespace.value)
    }),
      l({
        open: (x) => {
          const { indexPath: I } = p.value[x]
          I.forEach((D) => m(D, I))
        },
        close: w,
        handleResize: C,
      })
    const P = (S) => {
      const x = Array.isArray(S) ? S : [S],
        I = []
      return (
        x.forEach((D) => {
          Array.isArray(D.children) ? I.push(...P(D.children)) : I.push(D)
        }),
        I
      )
    }
    return () => {
      var S, x, I, D
      let B = (x = (S = n.default) == null ? void 0 : S.call(n)) != null ? x : []
      const V = []
      if (e.mode === 'horizontal' && r.value) {
        const fe = Array.from(
            (D = (I = r.value) == null ? void 0 : I.childNodes) != null ? D : [],
          ).filter((re) => re.nodeName !== '#text' || re.nodeValue),
          le = P(B),
          ye = 64,
          _ = Number.parseInt(getComputedStyle(r.value).paddingLeft, 10),
          T = Number.parseInt(getComputedStyle(r.value).paddingRight, 10),
          F = r.value.clientWidth - _ - T
        let q = 0,
          oe = 0
        fe.forEach((re, Ce) => {
          ;(q += re.offsetWidth || 0), q <= F - ye && (oe = Ce + 1)
        })
        const se = le.slice(0, oe),
          ve = le.slice(oe)
        ;(ve == null ? void 0 : ve.length) &&
          e.ellipsis &&
          ((B = se),
          V.push(
            W(
              Zn,
              { index: 'sub-menu-more', class: a.e('hide-arrow') },
              {
                title: () => W(_e, { class: a.e('icon-more') }, { default: () => W(Oa) }),
                default: () => ve,
              },
            ),
          ))
      }
      const Z = Ro(e, 0),
        ee = W(
          'ul',
          {
            key: String(e.collapse),
            role: 'menubar',
            ref: r,
            style: Z.value,
            class: { [u.b()]: !0, [u.m(e.mode)]: !0, [u.m('collapse')]: e.collapse },
          },
          [...B, ...V],
        )
      return e.collapseTransition && e.mode === 'vertical' ? W(gu, () => ee) : ee
    }
  },
})
const Eu = Qe({
    index: { type: ht([String, null]), default: null },
    route: { type: ht([String, Object]) },
    disabled: Boolean,
  }),
  $u = { click: (e) => Xe(e.index) && Array.isArray(e.indexPath) },
  Tn = 'ElMenuItem',
  ku = te({
    name: Tn,
    components: { ElTooltip: yn },
    props: Eu,
    emits: $u,
    setup(e, { emit: t }) {
      const n = be(),
        l = $e('rootMenu'),
        o = X('menu'),
        s = X('menu-item')
      l || dn(Tn, 'can not inject root menu')
      const { parentMenu: r, indexPath: u } = _o(n, Ql(e, 'index')),
        a = $e(`subMenu:${r.value.uid}`)
      a || dn(Tn, 'can not inject sub menu')
      const i = $(() => e.index === l.activeIndex),
        c = yt({ index: e.index, indexPath: u, active: i }),
        v = () => {
          e.disabled ||
            (l.handleMenuItemClick({ index: e.index, indexPath: u.value, route: e.route }),
            t('click', c))
        }
      return (
        Je(() => {
          a.addSubMenu(c), l.addMenuItem(c)
        }),
        gn(() => {
          a.removeSubMenu(c), l.removeMenuItem(c)
        }),
        {
          Effect: Ea,
          parentMenu: r,
          rootMenu: l,
          active: i,
          nsMenu: o,
          nsMenuItem: s,
          handleClick: v,
        }
      )
    },
  })
function Mu(e, t, n, l, o, s) {
  const r = we('el-tooltip')
  return (
    M(),
    R(
      'li',
      {
        class: N([
          e.nsMenuItem.b(),
          e.nsMenuItem.is('active', e.active),
          e.nsMenuItem.is('disabled', e.disabled),
        ]),
        role: 'menuitem',
        tabindex: '-1',
        onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u)),
      },
      [
        e.parentMenu.type.name === 'ElMenu' && e.rootMenu.props.collapse && e.$slots.title
          ? (M(),
            Y(
              r,
              {
                key: 0,
                effect: e.Effect.DARK,
                placement: 'right',
                'fallback-placements': ['left'],
                persistent: '',
              },
              {
                content: j(() => [ce(e.$slots, 'title')]),
                default: j(() => [
                  Q(
                    'div',
                    { class: N(e.nsMenu.be('tooltip', 'trigger')) },
                    [ce(e.$slots, 'default')],
                    2,
                  ),
                ]),
                _: 3,
              },
              8,
              ['effect'],
            ))
          : (M(), R(xe, { key: 1 }, [ce(e.$slots, 'default'), ce(e.$slots, 'title')], 64)),
      ],
      2,
    )
  )
}
var zo = me(ku, [
  ['render', Mu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue',
  ],
])
const xu = { title: String },
  Tu = 'ElMenuItemGroup',
  Pu = te({
    name: Tu,
    props: xu,
    setup() {
      return { ns: X('menu-item-group') }
    },
  })
function Au(e, t, n, l, o, s) {
  return (
    M(),
    R(
      'li',
      { class: N(e.ns.b()) },
      [
        Q(
          'div',
          { class: N(e.ns.e('title')) },
          [
            e.$slots.title
              ? ce(e.$slots, 'title', { key: 1 })
              : (M(), R(xe, { key: 0 }, [st(ie(e.title), 1)], 64)),
          ],
          2,
        ),
        Q('ul', null, [ce(e.$slots, 'default')]),
      ],
      2,
    )
  )
}
var Fo = me(Pu, [
  ['render', Au],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue',
  ],
])
const Ou = bt(wu, { MenuItem: zo, MenuItemGroup: Fo, SubMenu: Zn }),
  Bo = Ke(zo),
  Iu = Ke(Fo),
  Lu = Ke(Zn),
  Nu = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    prevText: { type: String },
  }),
  _u = { click: (e) => e instanceof MouseEvent },
  Ru = ['disabled', 'aria-disabled'],
  zu = { key: 0 },
  Fu = { name: 'ElPaginationPrev' },
  Bu = te(
    Se(ue({}, Fu), {
      props: Nu,
      emits: _u,
      setup(e) {
        const t = e,
          n = $(() => t.disabled || t.currentPage <= 1)
        return (l, o) => (
          M(),
          R(
            'button',
            {
              type: 'button',
              class: 'btn-prev',
              disabled: f(n),
              'aria-disabled': f(n),
              onClick: o[0] || (o[0] = (s) => l.$emit('click', s)),
            },
            [
              l.prevText
                ? (M(), R('span', zu, ie(l.prevText), 1))
                : (M(), Y(f(_e), { key: 1 }, { default: j(() => [J(f(Ia))]), _: 1 })),
            ],
            8,
            Ru,
          )
        )
      },
    }),
  )
var Wu = me(Bu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue',
  ],
])
const Hu = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, default: 50 },
    nextText: { type: String },
  }),
  Du = ['disabled', 'aria-disabled'],
  Vu = { key: 0 },
  Ku = { name: 'ElPaginationNext' },
  ju = te(
    Se(ue({}, Ku), {
      props: Hu,
      emits: ['click'],
      setup(e) {
        const t = e,
          n = $(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0)
        return (l, o) => (
          M(),
          R(
            'button',
            {
              type: 'button',
              class: 'btn-next',
              disabled: f(n),
              'aria-disabled': f(n),
              onClick: o[0] || (o[0] = (s) => l.$emit('click', s)),
            },
            [
              l.nextText
                ? (M(), R('span', Vu, ie(l.nextText), 1))
                : (M(), Y(f(_e), { key: 1 }, { default: j(() => [J(f(Cn))]), _: 1 })),
            ],
            8,
            Du,
          )
        )
      },
    }),
  )
var qu = me(ju, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue',
  ],
])
const Wo = 'ElSelectGroup',
  Sn = 'ElSelect'
function Gu(e, t) {
  const n = $e(Sn),
    l = $e(Wo, { disabled: !1 }),
    o = $(() => Object.prototype.toString.call(e.value).toLowerCase() === '[object object]'),
    s = $(() =>
      n.props.multiple ? v(n.props.modelValue, e.value) : p(e.value, n.props.modelValue),
    ),
    r = $(() => {
      if (n.props.multiple) {
        const m = n.props.modelValue || []
        return !s.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0
      } else return !1
    }),
    u = $(() => e.label || (o.value ? '' : e.value)),
    a = $(() => e.value || e.label || ''),
    i = $(() => e.disabled || t.groupDisabled || r.value),
    c = be(),
    v = (m = [], w) => {
      if (o.value) {
        const E = n.props.valueKey
        return m && m.some((b) => He(b, E) === He(w, E))
      } else return m && m.includes(w)
    },
    p = (m, w) => {
      if (o.value) {
        const { valueKey: E } = n.props
        return He(m, E) === He(w, E)
      } else return m === w
    },
    g = () => {
      !e.disabled && !l.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy))
    }
  ae(
    () => u.value,
    () => {
      !e.created && !n.props.remote && n.setSelected()
    },
  ),
    ae(
      () => e.value,
      (m, w) => {
        const { remote: E, valueKey: b } = n.props
        if (!e.created && !E) {
          if (b && typeof m == 'object' && typeof w == 'object' && m[b] === w[b]) return
          n.setSelected()
        }
      },
    ),
    ae(
      () => l.disabled,
      () => {
        t.groupDisabled = l.disabled
      },
      { immediate: !0 },
    )
  const { queryChange: d } = Un(n)
  return (
    ae(d, (m) => {
      const { query: w } = f(m),
        E = new RegExp(Xr(w), 'i')
      ;(t.visible = E.test(u.value) || e.created), t.visible || n.filteredOptionsCount--
    }),
    { select: n, currentLabel: u, currentValue: a, itemSelected: s, isDisabled: i, hoverItem: g }
  )
}
const Uu = te({
  name: 'ElOption',
  componentName: 'ElOption',
  props: {
    value: { required: !0, type: [String, Number, Boolean, Object] },
    label: [String, Number],
    created: Boolean,
    disabled: { type: Boolean, default: !1 },
  },
  setup(e) {
    const t = X('select'),
      n = yt({ index: -1, groupDisabled: !1, visible: !0, hitState: !1, hover: !1 }),
      { currentLabel: l, itemSelected: o, isDisabled: s, select: r, hoverItem: u } = Gu(e, n),
      { visible: a, hover: i } = Xt(n),
      c = be().proxy,
      v = c.value
    r.onOptionCreate(c),
      gn(() => {
        const { selected: g } = r,
          m = (r.props.multiple ? g : [g]).some((w) => w.value === c.value)
        he(() => {
          r.cachedOptions.get(v) === c && !m && r.cachedOptions.delete(v)
        }),
          r.onOptionDestroy(v, c)
      })
    function p() {
      e.disabled !== !0 && n.groupDisabled !== !0 && r.handleOptionSelect(c, !0)
    }
    return {
      ns: t,
      currentLabel: l,
      itemSelected: o,
      isDisabled: s,
      select: r,
      hoverItem: u,
      visible: a,
      hover: i,
      selectOptionClick: p,
      states: n,
    }
  },
})
function Yu(e, t, n, l, o, s) {
  return Re(
    (M(),
    R(
      'li',
      {
        class: N([
          e.ns.be('dropdown', 'item'),
          e.ns.is('disabled', e.isDisabled),
          { selected: e.itemSelected, hover: e.hover },
        ]),
        onMouseenter: t[0] || (t[0] = (...r) => e.hoverItem && e.hoverItem(...r)),
        onClick:
          t[1] || (t[1] = Ue((...r) => e.selectOptionClick && e.selectOptionClick(...r), ['stop'])),
      },
      [ce(e.$slots, 'default', {}, () => [Q('span', null, ie(e.currentLabel), 1)])],
      34,
    )),
    [[Tt, e.visible]],
  )
}
var el = me(Uu, [
  ['render', Yu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue',
  ],
])
const Xu = te({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = $e(Sn),
      t = X('select'),
      n = $(() => e.props.popperClass),
      l = $(() => e.props.multiple),
      o = $(() => e.props.fitInputWidth),
      s = A('')
    function r() {
      var u
      s.value = `${(u = e.selectWrapper) == null ? void 0 : u.offsetWidth}px`
    }
    return (
      Je(() => {
        r(), Qt(e.selectWrapper, r)
      }),
      { ns: t, minWidth: s, popperClass: n, isMultiple: l, isFitInputWidth: o }
    )
  },
})
function Qu(e, t, n, l, o, s) {
  return (
    M(),
    R(
      'div',
      {
        class: N([e.ns.b('dropdown'), e.ns.is('multiple', e.isMultiple), e.popperClass]),
        style: Ee({ [e.isFitInputWidth ? 'width' : 'minWidth']: e.minWidth }),
      },
      [ce(e.$slots, 'default')],
      6,
    )
  )
}
var Ju = me(Xu, [
  ['render', Qu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue',
  ],
])
function Zu(e) {
  const { t } = it()
  return yt({
    options: new Map(),
    cachedOptions: new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: '',
    currentPlaceholder: t('el.select.placeholder'),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
  })
}
const ec = (e, t, n) => {
    const { t: l } = it(),
      o = X('select'),
      s = A(null),
      r = A(null),
      u = A(null),
      a = A(null),
      i = A(null),
      c = A(null),
      v = A(-1),
      p = Wt({ query: '' }),
      g = Wt(''),
      { form: d, formItem: m } = Qn(),
      w = $(() => !e.filterable || e.multiple || !t.visible),
      E = $(() => e.disabled || (d == null ? void 0 : d.disabled)),
      b = $(() => {
        const y = e.multiple
          ? Array.isArray(e.modelValue) && e.modelValue.length > 0
          : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== ''
        return e.clearable && !E.value && t.inputHovering && y
      }),
      h = $(() => (e.remote && e.filterable ? '' : e.suffixIcon)),
      C = $(() => o.is('reverse', h.value && t.visible)),
      O = $(() => (e.remote ? 300 : 0)),
      P = $(() =>
        e.loading
          ? e.loadingText || l('el.select.loading')
          : e.remote && t.query === '' && t.options.size === 0
          ? !1
          : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0
          ? e.noMatchText || l('el.select.noMatch')
          : t.options.size === 0
          ? e.noDataText || l('el.select.noData')
          : null,
      ),
      S = $(() => Array.from(t.options.values())),
      x = $(() => Array.from(t.cachedOptions.values())),
      I = $(() => {
        const y = S.value.filter((k) => !k.created).some((k) => k.currentLabel === t.query)
        return e.filterable && e.allowCreate && t.query !== '' && !y
      }),
      D = xt(),
      B = $(() => (['small'].includes(D.value) ? 'small' : 'default')),
      V = $({
        get() {
          return t.visible && P.value !== !1
        },
        set(y) {
          t.visible = y
        },
      })
    ae([() => E.value, () => D.value, () => (d == null ? void 0 : d.size)], () => {
      he(() => {
        Z()
      })
    }),
      ae(
        () => e.placeholder,
        (y) => {
          t.cachedPlaceHolder = t.currentPlaceholder = y
        },
      ),
      ae(
        () => e.modelValue,
        (y, k) => {
          e.multiple &&
            (Z(),
            (y && y.length > 0) || (r.value && t.query !== '')
              ? (t.currentPlaceholder = '')
              : (t.currentPlaceholder = t.cachedPlaceHolder),
            e.filterable && !e.reserveKeyword && ((t.query = ''), ee(t.query))),
            ye(),
            e.filterable && !e.multiple && (t.inputLength = 20),
            !Rn(y, k) && e.validateEvent && (m == null || m.validate('change').catch((z) => Lt()))
        },
        { flush: 'post', deep: !0 },
      ),
      ae(
        () => t.visible,
        (y) => {
          var k, z, K
          y
            ? ((z = (k = u.value) == null ? void 0 : k.updatePopper) == null || z.call(k),
              e.filterable &&
                ((t.filteredOptionsCount = t.optionsCount),
                (t.query = e.remote ? '' : t.selectedLabel),
                e.multiple
                  ? (K = r.value) == null || K.focus()
                  : t.selectedLabel &&
                    ((t.currentPlaceholder = `${t.selectedLabel}`), (t.selectedLabel = '')),
                ee(t.query),
                !e.multiple && !e.remote && ((p.value.query = ''), Bt(p), Bt(g))))
            : (r.value && r.value.blur(),
              (t.query = ''),
              (t.previousQuery = null),
              (t.selectedLabel = ''),
              (t.inputLength = 20),
              (t.menuVisibleOnFocus = !1),
              T(),
              he(() => {
                r.value &&
                  r.value.value === '' &&
                  t.selected.length === 0 &&
                  (t.currentPlaceholder = t.cachedPlaceHolder)
              }),
              e.multiple ||
                (t.selected &&
                  (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel
                    ? (t.selectedLabel = t.createdLabel)
                    : (t.selectedLabel = t.selected.currentLabel),
                  e.filterable && (t.query = t.selectedLabel)),
                e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))),
            n.emit('visible-change', y)
        },
      ),
      ae(
        () => t.options.entries(),
        () => {
          var y, k, z
          if (!Pt) return
          ;(k = (y = u.value) == null ? void 0 : y.updatePopper) == null || k.call(y),
            e.multiple && Z()
          const K = ((z = i.value) == null ? void 0 : z.querySelectorAll('input')) || []
          Array.from(K).includes(document.activeElement) || ye(),
            e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && le()
        },
        { flush: 'post' },
      ),
      ae(
        () => t.hoverIndex,
        (y) => {
          typeof y == 'number' && y > -1 && (v.value = S.value[y] || {}),
            S.value.forEach((k) => {
              k.hover = v.value === k
            })
        },
      )
    const Z = () => {
        ;(e.collapseTags && !e.filterable) ||
          he(() => {
            var y, k
            if (!s.value) return
            const z = s.value.$el.querySelector('input'),
              K = a.value,
              de = Qr(D.value || (d == null ? void 0 : d.size))
            ;(z.style.height = `${
              (t.selected.length === 0
                ? de
                : Math.max(K ? K.clientHeight + (K.clientHeight > de ? 6 : 0) : 0, de)) - 2
            }px`),
              (t.tagInMultiLine = Number.parseFloat(z.style.height) >= de),
              t.visible &&
                P.value !== !1 &&
                ((k = (y = u.value) == null ? void 0 : y.updatePopper) == null || k.call(y))
          })
      },
      ee = (y) => {
        if (!(t.previousQuery === y || t.isOnComposition)) {
          if (
            t.previousQuery === null &&
            (typeof e.filterMethod == 'function' || typeof e.remoteMethod == 'function')
          ) {
            t.previousQuery = y
            return
          }
          ;(t.previousQuery = y),
            he(() => {
              var k, z
              t.visible &&
                ((z = (k = u.value) == null ? void 0 : k.updatePopper) == null || z.call(k))
            }),
            (t.hoverIndex = -1),
            e.multiple &&
              e.filterable &&
              he(() => {
                const k = r.value.value.length * 15 + 20
                ;(t.inputLength = e.collapseTags ? Math.min(50, k) : k), fe(), Z()
              }),
            e.remote && typeof e.remoteMethod == 'function'
              ? ((t.hoverIndex = -1), e.remoteMethod(y))
              : typeof e.filterMethod == 'function'
              ? (e.filterMethod(y), Bt(g))
              : ((t.filteredOptionsCount = t.optionsCount), (p.value.query = y), Bt(p), Bt(g)),
            e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && le()
        }
      },
      fe = () => {
        t.currentPlaceholder !== '' &&
          (t.currentPlaceholder = r.value.value ? '' : t.cachedPlaceHolder)
      },
      le = () => {
        const y = S.value.filter((K) => K.visible && !K.disabled && !K.states.groupDisabled),
          k = y.find((K) => K.created),
          z = y[0]
        t.hoverIndex = De(S.value, k || z)
      },
      ye = () => {
        var y
        if (e.multiple) t.selectedLabel = ''
        else {
          const z = _(e.modelValue)
          ;(y = z.props) != null && y.created
            ? ((t.createdLabel = z.props.value), (t.createdSelected = !0))
            : (t.createdSelected = !1),
            (t.selectedLabel = z.currentLabel),
            (t.selected = z),
            e.filterable && (t.query = t.selectedLabel)
          return
        }
        const k = []
        Array.isArray(e.modelValue) &&
          e.modelValue.forEach((z) => {
            k.push(_(z))
          }),
          (t.selected = k),
          he(() => {
            Z()
          })
      },
      _ = (y) => {
        let k
        const z = wn(y).toLowerCase() === 'object',
          K = wn(y).toLowerCase() === 'null',
          de = wn(y).toLowerCase() === 'undefined'
        for (let je = t.cachedOptions.size - 1; je >= 0; je--) {
          const ze = x.value[je]
          if (z ? He(ze.value, e.valueKey) === He(y, e.valueKey) : ze.value === y) {
            k = { value: y, currentLabel: ze.currentLabel, isDisabled: ze.isDisabled }
            break
          }
        }
        if (k) return k
        const Oe = z ? y.label : !K && !de ? y : '',
          Me = { value: y, currentLabel: Oe }
        return e.multiple && (Me.hitState = !1), Me
      },
      T = () => {
        setTimeout(() => {
          const y = e.valueKey
          e.multiple
            ? t.selected.length > 0
              ? (t.hoverIndex = Math.min.apply(
                  null,
                  t.selected.map((k) => S.value.findIndex((z) => He(z, y) === He(k, y))),
                ))
              : (t.hoverIndex = -1)
            : (t.hoverIndex = S.value.findIndex((k) => Pe(k) === Pe(t.selected)))
        }, 300)
      },
      F = () => {
        var y, k
        q(),
          (k = (y = u.value) == null ? void 0 : y.updatePopper) == null || k.call(y),
          e.multiple && !e.filterable && Z()
      },
      q = () => {
        var y
        t.inputWidth = (y = s.value) == null ? void 0 : y.$el.getBoundingClientRect().width
      },
      oe = () => {
        e.filterable && t.query !== t.selectedLabel && ((t.query = t.selectedLabel), ee(t.query))
      },
      se = Nt(() => {
        oe()
      }, O.value),
      ve = Nt((y) => {
        ee(y.target.value)
      }, O.value),
      re = (y) => {
        Rn(e.modelValue, y) || n.emit(eo, y)
      },
      Ce = (y) => {
        if (y.target.value.length <= 0 && !nt()) {
          const k = e.modelValue.slice()
          k.pop(), n.emit(Ne, k), re(k)
        }
        y.target.value.length === 1 &&
          e.modelValue.length === 0 &&
          (t.currentPlaceholder = t.cachedPlaceHolder)
      },
      ke = (y, k) => {
        const z = t.selected.indexOf(k)
        if (z > -1 && !E.value) {
          const K = e.modelValue.slice()
          K.splice(z, 1), n.emit(Ne, K), re(K), n.emit('remove-tag', k.value)
        }
        y.stopPropagation()
      },
      pe = (y) => {
        y.stopPropagation()
        const k = e.multiple ? [] : ''
        if (typeof k != 'string') for (const z of t.selected) z.isDisabled && k.push(z.value)
        n.emit(Ne, k), re(k), (t.visible = !1), n.emit('clear')
      },
      Ae = (y, k) => {
        var z
        if (e.multiple) {
          const K = (e.modelValue || []).slice(),
            de = De(K, y.value)
          de > -1
            ? K.splice(de, 1)
            : (e.multipleLimit <= 0 || K.length < e.multipleLimit) && K.push(y.value),
            n.emit(Ne, K),
            re(K),
            y.created && ((t.query = ''), ee(''), (t.inputLength = 20)),
            e.filterable && ((z = r.value) == null || z.focus())
        } else n.emit(Ne, y.value), re(y.value), (t.visible = !1)
        ;(t.isSilentBlur = k),
          ut(),
          !t.visible &&
            he(() => {
              Be(y)
            })
      },
      De = (y = [], k) => {
        if (!qt(k)) return y.indexOf(k)
        const z = e.valueKey
        let K = -1
        return y.some((de, Oe) => (He(de, z) === He(k, z) ? ((K = Oe), !0) : !1)), K
      },
      ut = () => {
        t.softFocus = !0
        const y = r.value || s.value
        y && (y == null || y.focus())
      },
      Be = (y) => {
        var k, z, K, de, Oe
        const Me = Array.isArray(y) ? y[0] : y
        let je = null
        if (Me != null && Me.value) {
          const ze = S.value.filter((Ie) => Ie.value === Me.value)
          ze.length > 0 && (je = ze[0].$el)
        }
        if (u.value && je) {
          const ze =
            (de =
              (K =
                (z = (k = u.value) == null ? void 0 : k.popperRef) == null
                  ? void 0
                  : z.contentRef) == null
                ? void 0
                : K.querySelector) == null
              ? void 0
              : de.call(K, `.${o.be('dropdown', 'wrap')}`)
          ze && Sa(ze, je)
        }
        ;(Oe = c.value) == null || Oe.handleScroll()
      },
      tt = (y) => {
        t.optionsCount++,
          t.filteredOptionsCount++,
          t.options.set(y.value, y),
          t.cachedOptions.set(y.value, y)
      },
      Ct = (y, k) => {
        t.options.get(y) === k && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(y))
      },
      ct = (y) => {
        y.code !== Ye.backspace && nt(!1), (t.inputLength = r.value.value.length * 15 + 20), Z()
      },
      nt = (y) => {
        if (!Array.isArray(t.selected)) return
        const k = t.selected[t.selected.length - 1]
        if (!!k)
          return y === !0 || y === !1
            ? ((k.hitState = y), y)
            : ((k.hitState = !k.hitState), k.hitState)
      },
      Ze = (y) => {
        const k = y.target.value
        if (y.type === 'compositionend') (t.isOnComposition = !1), he(() => ee(k))
        else {
          const z = k[k.length - 1] || ''
          t.isOnComposition = !ho(z)
        }
      },
      lt = () => {
        he(() => Be(t.selected))
      },
      St = (y) => {
        t.softFocus
          ? (t.softFocus = !1)
          : ((e.automaticDropdown || e.filterable) &&
              (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), (t.visible = !0)),
            n.emit('focus', y))
      },
      dt = () => {
        var y
        ;(t.visible = !1), (y = s.value) == null || y.blur()
      },
      ft = (y) => {
        he(() => {
          t.isSilentBlur ? (t.isSilentBlur = !1) : n.emit('blur', y)
        }),
          (t.softFocus = !1)
      },
      wt = (y) => {
        pe(y)
      },
      pt = () => {
        t.visible = !1
      },
      L = (y) => {
        t.visible && (y.preventDefault(), y.stopPropagation(), (t.visible = !1))
      },
      ne = () => {
        var y
        E.value ||
          (t.menuVisibleOnFocus ? (t.menuVisibleOnFocus = !1) : (t.visible = !t.visible),
          t.visible && ((y = r.value || s.value) == null || y.focus()))
      },
      We = () => {
        t.visible ? S.value[t.hoverIndex] && Ae(S.value[t.hoverIndex], void 0) : ne()
      },
      Pe = (y) => (qt(y.value) ? He(y.value, e.valueKey) : y.value),
      H = $(() => S.value.filter((y) => y.visible).every((y) => y.disabled)),
      G = (y) => {
        if (!t.visible) {
          t.visible = !0
          return
        }
        if (
          !(t.options.size === 0 || t.filteredOptionsCount === 0) &&
          !t.isOnComposition &&
          !H.value
        ) {
          y === 'next'
            ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0))
            : y === 'prev' &&
              (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1))
          const k = S.value[t.hoverIndex]
          ;(k.disabled === !0 || k.states.groupDisabled === !0 || !k.visible) && G(y),
            he(() => Be(v.value))
        }
      }
    return {
      optionsArray: S,
      selectSize: D,
      handleResize: F,
      debouncedOnInputChange: se,
      debouncedQueryChange: ve,
      deletePrevTag: Ce,
      deleteTag: ke,
      deleteSelected: pe,
      handleOptionSelect: Ae,
      scrollToOption: Be,
      readonly: w,
      resetInputHeight: Z,
      showClose: b,
      iconComponent: h,
      iconReverse: C,
      showNewOption: I,
      collapseTagSize: B,
      setSelected: ye,
      managePlaceholder: fe,
      selectDisabled: E,
      emptyText: P,
      toggleLastOptionHitState: nt,
      resetInputState: ct,
      handleComposition: Ze,
      onOptionCreate: tt,
      onOptionDestroy: Ct,
      handleMenuEnter: lt,
      handleFocus: St,
      blur: dt,
      handleBlur: ft,
      handleClearClick: wt,
      handleClose: pt,
      handleKeydownEscape: L,
      toggleMenu: ne,
      selectOption: We,
      getValueKey: Pe,
      navigateOptions: G,
      dropMenuVisible: V,
      queryChange: p,
      groupQueryChange: g,
      reference: s,
      input: r,
      tooltipRef: u,
      tags: a,
      selectWrapper: i,
      scrollbar: c,
    }
  },
  Dl = 'ElSelect',
  tc = te({
    name: Dl,
    componentName: Dl,
    components: {
      ElInput: go,
      ElSelectMenu: Ju,
      ElOption: el,
      ElTag: qi,
      ElScrollbar: Xn,
      ElTooltip: yn,
      ElIcon: _e,
    },
    directives: { ClickOutside: so },
    props: {
      name: String,
      id: String,
      modelValue: { type: [Array, String, Number, Boolean, Object], default: void 0 },
      autocomplete: { type: String, default: 'off' },
      automaticDropdown: Boolean,
      size: { type: String, validator: Jr },
      effect: { type: String, default: 'light' },
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: { type: String, default: '' },
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: { type: Number, default: 0 },
      placeholder: { type: String },
      defaultFirstOption: Boolean,
      reserveKeyword: { type: Boolean, default: !0 },
      valueKey: { type: String, default: 'value' },
      collapseTags: Boolean,
      collapseTagsTooltip: { type: Boolean, default: !1 },
      teleported: $a.teleported,
      persistent: { type: Boolean, default: !0 },
      clearIcon: { type: [String, Object], default: no },
      fitInputWidth: { type: Boolean, default: !1 },
      suffixIcon: { type: [String, Object], default: oo },
      tagType: Se(ue({}, Ao.type), { default: 'info' }),
      validateEvent: { type: Boolean, default: !0 },
    },
    emits: [Ne, eo, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(e, t) {
      const n = X('select'),
        l = X('input'),
        { t: o } = it(),
        s = Zu(e),
        {
          optionsArray: r,
          selectSize: u,
          readonly: a,
          handleResize: i,
          collapseTagSize: c,
          debouncedOnInputChange: v,
          debouncedQueryChange: p,
          deletePrevTag: g,
          deleteTag: d,
          deleteSelected: m,
          handleOptionSelect: w,
          scrollToOption: E,
          setSelected: b,
          resetInputHeight: h,
          managePlaceholder: C,
          showClose: O,
          selectDisabled: P,
          iconComponent: S,
          iconReverse: x,
          showNewOption: I,
          emptyText: D,
          toggleLastOptionHitState: B,
          resetInputState: V,
          handleComposition: Z,
          onOptionCreate: ee,
          onOptionDestroy: fe,
          handleMenuEnter: le,
          handleFocus: ye,
          blur: _,
          handleBlur: T,
          handleClearClick: F,
          handleClose: q,
          handleKeydownEscape: oe,
          toggleMenu: se,
          selectOption: ve,
          getValueKey: re,
          navigateOptions: Ce,
          dropMenuVisible: ke,
          reference: pe,
          input: Ae,
          tooltipRef: De,
          tags: ut,
          selectWrapper: Be,
          scrollbar: tt,
          queryChange: Ct,
          groupQueryChange: ct,
        } = ec(e, s, t),
        { focus: nt } = ni(pe),
        {
          inputWidth: Ze,
          selected: lt,
          inputLength: St,
          filteredOptionsCount: dt,
          visible: ft,
          softFocus: wt,
          selectedLabel: pt,
          hoverIndex: L,
          query: ne,
          inputHovering: We,
          currentPlaceholder: Pe,
          menuVisibleOnFocus: H,
          isOnComposition: G,
          isSilentBlur: y,
          options: k,
          cachedOptions: z,
          optionsCount: K,
          prefixWidth: de,
          tagInMultiLine: Oe,
        } = Xt(s),
        Me = $(() => {
          const Ie = [n.b()],
            qe = f(u)
          return qe && Ie.push(n.m(qe)), e.disabled && Ie.push(n.m('disabled')), Ie
        }),
        je = $(() => ({ maxWidth: `${f(Ze) - 32}px`, width: '100%' }))
      gt(
        Sn,
        yt({
          props: e,
          options: k,
          optionsArray: r,
          cachedOptions: z,
          optionsCount: K,
          filteredOptionsCount: dt,
          hoverIndex: L,
          handleOptionSelect: w,
          onOptionCreate: ee,
          onOptionDestroy: fe,
          selectWrapper: Be,
          selected: lt,
          setSelected: b,
          queryChange: Ct,
          groupQueryChange: ct,
        }),
      ),
        Je(() => {
          ;(s.cachedPlaceHolder = Pe.value = e.placeholder || o('el.select.placeholder')),
            e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Pe.value = ''),
            Qt(Be, i),
            e.remote && e.multiple && h(),
            he(() => {
              const Ie = pe.value && pe.value.$el
              if (!!Ie && ((Ze.value = Ie.getBoundingClientRect().width), t.slots.prefix)) {
                const qe = Ie.querySelector(`.${l.e('prefix')}`)
                de.value = Math.max(qe.getBoundingClientRect().width + 5, 30)
              }
            }),
            b()
        }),
        e.multiple && !Array.isArray(e.modelValue) && t.emit(Ne, []),
        !e.multiple && Array.isArray(e.modelValue) && t.emit(Ne, '')
      const ze = $(() => {
        var Ie, qe
        return (qe = (Ie = De.value) == null ? void 0 : Ie.popperRef) == null
          ? void 0
          : qe.contentRef
      })
      return {
        tagInMultiLine: Oe,
        prefixWidth: de,
        selectSize: u,
        readonly: a,
        handleResize: i,
        collapseTagSize: c,
        debouncedOnInputChange: v,
        debouncedQueryChange: p,
        deletePrevTag: g,
        deleteTag: d,
        deleteSelected: m,
        handleOptionSelect: w,
        scrollToOption: E,
        inputWidth: Ze,
        selected: lt,
        inputLength: St,
        filteredOptionsCount: dt,
        visible: ft,
        softFocus: wt,
        selectedLabel: pt,
        hoverIndex: L,
        query: ne,
        inputHovering: We,
        currentPlaceholder: Pe,
        menuVisibleOnFocus: H,
        isOnComposition: G,
        isSilentBlur: y,
        options: k,
        resetInputHeight: h,
        managePlaceholder: C,
        showClose: O,
        selectDisabled: P,
        iconComponent: S,
        iconReverse: x,
        showNewOption: I,
        emptyText: D,
        toggleLastOptionHitState: B,
        resetInputState: V,
        handleComposition: Z,
        handleMenuEnter: le,
        handleFocus: ye,
        blur: _,
        handleBlur: T,
        handleClearClick: F,
        handleClose: q,
        handleKeydownEscape: oe,
        toggleMenu: se,
        selectOption: ve,
        getValueKey: re,
        navigateOptions: Ce,
        dropMenuVisible: ke,
        focus: nt,
        reference: pe,
        input: Ae,
        tooltipRef: De,
        popperPaneRef: ze,
        tags: ut,
        selectWrapper: Be,
        scrollbar: tt,
        wrapperKls: Me,
        selectTagsStyle: je,
        nsSelect: n,
      }
    },
  }),
  nc = { class: 'select-trigger' },
  lc = ['disabled', 'autocomplete'],
  oc = {
    style: {
      height: '100%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  }
function ac(e, t, n, l, o, s) {
  const r = we('el-tag'),
    u = we('el-tooltip'),
    a = we('el-icon'),
    i = we('el-input'),
    c = we('el-option'),
    v = we('el-scrollbar'),
    p = we('el-select-menu'),
    g = Yn('click-outside')
  return Re(
    (M(),
    R(
      'div',
      {
        ref: 'selectWrapper',
        class: N(e.wrapperKls),
        onClick: t[22] || (t[22] = Ue((...d) => e.toggleMenu && e.toggleMenu(...d), ['stop'])),
      },
      [
        J(
          u,
          {
            ref: 'tooltipRef',
            visible: e.dropMenuVisible,
            placement: 'bottom-start',
            teleported: e.teleported,
            'popper-class': [e.nsSelect.e('popper'), e.popperClass],
            'fallback-placements': ['bottom-start', 'top-start', 'right', 'left'],
            effect: e.effect,
            pure: '',
            trigger: 'click',
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            'stop-popper-mouse-event': !1,
            'gpu-acceleration': !1,
            persistent: e.persistent,
            onShow: e.handleMenuEnter,
          },
          {
            default: j(() => [
              Q('div', nc, [
                e.multiple
                  ? (M(),
                    R(
                      'div',
                      {
                        key: 0,
                        ref: 'tags',
                        class: N(e.nsSelect.e('tags')),
                        style: Ee(e.selectTagsStyle),
                      },
                      [
                        e.collapseTags && e.selected.length
                          ? (M(),
                            R(
                              'span',
                              {
                                key: 0,
                                class: N([
                                  e.nsSelect.b('tags-wrapper'),
                                  { 'has-prefix': e.prefixWidth && e.selected.length },
                                ]),
                              },
                              [
                                J(
                                  r,
                                  {
                                    closable: !e.selectDisabled && !e.selected[0].isDisabled,
                                    size: e.collapseTagSize,
                                    hit: e.selected[0].hitState,
                                    type: e.tagType,
                                    'disable-transitions': '',
                                    onClose: t[0] || (t[0] = (d) => e.deleteTag(d, e.selected[0])),
                                  },
                                  {
                                    default: j(() => [
                                      Q(
                                        'span',
                                        {
                                          class: N(e.nsSelect.e('tags-text')),
                                          style: Ee({ maxWidth: e.inputWidth - 123 + 'px' }),
                                        },
                                        ie(e.selected[0].currentLabel),
                                        7,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['closable', 'size', 'hit', 'type'],
                                ),
                                e.selected.length > 1
                                  ? (M(),
                                    Y(
                                      r,
                                      {
                                        key: 0,
                                        closable: !1,
                                        size: e.collapseTagSize,
                                        type: e.tagType,
                                        'disable-transitions': '',
                                      },
                                      {
                                        default: j(() => [
                                          e.collapseTagsTooltip
                                            ? (M(),
                                              Y(
                                                u,
                                                {
                                                  key: 0,
                                                  disabled: e.dropMenuVisible,
                                                  'fallback-placements': [
                                                    'bottom',
                                                    'top',
                                                    'right',
                                                    'left',
                                                  ],
                                                  effect: e.effect,
                                                  placement: 'bottom',
                                                  teleported: e.teleported,
                                                },
                                                {
                                                  default: j(() => [
                                                    Q(
                                                      'span',
                                                      { class: N(e.nsSelect.e('tags-text')) },
                                                      '+ ' + ie(e.selected.length - 1),
                                                      3,
                                                    ),
                                                  ]),
                                                  content: j(() => [
                                                    Q(
                                                      'div',
                                                      { class: N(e.nsSelect.e('collapse-tags')) },
                                                      [
                                                        (M(!0),
                                                        R(
                                                          xe,
                                                          null,
                                                          rt(
                                                            e.selected.slice(1),
                                                            (d, m) => (
                                                              M(),
                                                              R(
                                                                'div',
                                                                {
                                                                  key: m,
                                                                  class: N(
                                                                    e.nsSelect.e('collapse-tag'),
                                                                  ),
                                                                },
                                                                [
                                                                  (M(),
                                                                  Y(
                                                                    r,
                                                                    {
                                                                      key: e.getValueKey(d),
                                                                      class: 'in-tooltip',
                                                                      closable:
                                                                        !e.selectDisabled &&
                                                                        !d.isDisabled,
                                                                      size: e.collapseTagSize,
                                                                      hit: d.hitState,
                                                                      type: e.tagType,
                                                                      'disable-transitions': '',
                                                                      style: { margin: '2px' },
                                                                      onClose: (w) =>
                                                                        e.deleteTag(w, d),
                                                                    },
                                                                    {
                                                                      default: j(() => [
                                                                        Q(
                                                                          'span',
                                                                          {
                                                                            class: N(
                                                                              e.nsSelect.e(
                                                                                'tags-text',
                                                                              ),
                                                                            ),
                                                                            style: Ee({
                                                                              maxWidth:
                                                                                e.inputWidth -
                                                                                75 +
                                                                                'px',
                                                                            }),
                                                                          },
                                                                          ie(d.currentLabel),
                                                                          7,
                                                                        ),
                                                                      ]),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    [
                                                                      'closable',
                                                                      'size',
                                                                      'hit',
                                                                      'type',
                                                                      'onClose',
                                                                    ],
                                                                  )),
                                                                ],
                                                                2,
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                      ],
                                                      2,
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ['disabled', 'effect', 'teleported'],
                                              ))
                                            : (M(),
                                              R(
                                                'span',
                                                { key: 1, class: N(e.nsSelect.e('tags-text')) },
                                                '+ ' + ie(e.selected.length - 1),
                                                3,
                                              )),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['size', 'type'],
                                    ))
                                  : U('v-if', !0),
                              ],
                              2,
                            ))
                          : U('v-if', !0),
                        U(' <div> '),
                        e.collapseTags
                          ? U('v-if', !0)
                          : (M(),
                            Y(
                              mn,
                              { key: 1, onAfterLeave: e.resetInputHeight },
                              {
                                default: j(() => [
                                  Q(
                                    'span',
                                    {
                                      class: N([
                                        e.nsSelect.b('tags-wrapper'),
                                        { 'has-prefix': e.prefixWidth && e.selected.length },
                                      ]),
                                    },
                                    [
                                      (M(!0),
                                      R(
                                        xe,
                                        null,
                                        rt(
                                          e.selected,
                                          (d) => (
                                            M(),
                                            Y(
                                              r,
                                              {
                                                key: e.getValueKey(d),
                                                closable: !e.selectDisabled && !d.isDisabled,
                                                size: e.collapseTagSize,
                                                hit: d.hitState,
                                                type: e.tagType,
                                                'disable-transitions': '',
                                                onClose: (m) => e.deleteTag(m, d),
                                              },
                                              {
                                                default: j(() => [
                                                  Q(
                                                    'span',
                                                    {
                                                      class: N(e.nsSelect.e('tags-text')),
                                                      style: Ee({
                                                        maxWidth: e.inputWidth - 75 + 'px',
                                                      }),
                                                    },
                                                    ie(d.currentLabel),
                                                    7,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['closable', 'size', 'hit', 'type', 'onClose'],
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    2,
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ['onAfterLeave'],
                            )),
                        U(' </div> '),
                        e.filterable
                          ? Re(
                              (M(),
                              R(
                                'input',
                                {
                                  key: 2,
                                  ref: 'input',
                                  'onUpdate:modelValue': t[1] || (t[1] = (d) => (e.query = d)),
                                  type: 'text',
                                  class: N([e.nsSelect.e('input'), e.nsSelect.is(e.selectSize)]),
                                  disabled: e.selectDisabled,
                                  autocomplete: e.autocomplete,
                                  style: Ee({
                                    marginLeft:
                                      (e.prefixWidth && !e.selected.length) || e.tagInMultiLine
                                        ? `${e.prefixWidth}px`
                                        : '',
                                    flexGrow: 1,
                                    width: `${e.inputLength / (e.inputWidth - 32)}%`,
                                    maxWidth: `${e.inputWidth - 42}px`,
                                  }),
                                  onFocus:
                                    t[2] || (t[2] = (...d) => e.handleFocus && e.handleFocus(...d)),
                                  onBlur:
                                    t[3] || (t[3] = (...d) => e.handleBlur && e.handleBlur(...d)),
                                  onKeyup:
                                    t[4] ||
                                    (t[4] = (...d) =>
                                      e.managePlaceholder && e.managePlaceholder(...d)),
                                  onKeydown: [
                                    t[5] ||
                                      (t[5] = (...d) =>
                                        e.resetInputState && e.resetInputState(...d)),
                                    t[6] ||
                                      (t[6] = Ve(
                                        Ue((d) => e.navigateOptions('next'), ['prevent']),
                                        ['down'],
                                      )),
                                    t[7] ||
                                      (t[7] = Ve(
                                        Ue((d) => e.navigateOptions('prev'), ['prevent']),
                                        ['up'],
                                      )),
                                    t[8] ||
                                      (t[8] = Ve(
                                        (...d) =>
                                          e.handleKeydownEscape && e.handleKeydownEscape(...d),
                                        ['esc'],
                                      )),
                                    t[9] ||
                                      (t[9] = Ve(
                                        Ue(
                                          (...d) => e.selectOption && e.selectOption(...d),
                                          ['stop', 'prevent'],
                                        ),
                                        ['enter'],
                                      )),
                                    t[10] ||
                                      (t[10] = Ve(
                                        (...d) => e.deletePrevTag && e.deletePrevTag(...d),
                                        ['delete'],
                                      )),
                                    t[11] || (t[11] = Ve((d) => (e.visible = !1), ['tab'])),
                                  ],
                                  onCompositionstart:
                                    t[12] ||
                                    (t[12] = (...d) =>
                                      e.handleComposition && e.handleComposition(...d)),
                                  onCompositionupdate:
                                    t[13] ||
                                    (t[13] = (...d) =>
                                      e.handleComposition && e.handleComposition(...d)),
                                  onCompositionend:
                                    t[14] ||
                                    (t[14] = (...d) =>
                                      e.handleComposition && e.handleComposition(...d)),
                                  onInput:
                                    t[15] ||
                                    (t[15] = (...d) =>
                                      e.debouncedQueryChange && e.debouncedQueryChange(...d)),
                                },
                                null,
                                46,
                                lc,
                              )),
                              [[ga, e.query]],
                            )
                          : U('v-if', !0),
                      ],
                      6,
                    ))
                  : U('v-if', !0),
                J(
                  i,
                  {
                    id: e.id,
                    ref: 'reference',
                    modelValue: e.selectedLabel,
                    'onUpdate:modelValue': t[16] || (t[16] = (d) => (e.selectedLabel = d)),
                    type: 'text',
                    placeholder: e.currentPlaceholder,
                    name: e.name,
                    autocomplete: e.autocomplete,
                    size: e.selectSize,
                    disabled: e.selectDisabled,
                    readonly: e.readonly,
                    'validate-event': !1,
                    class: N([e.nsSelect.is('focus', e.visible)]),
                    tabindex: e.multiple && e.filterable ? -1 : void 0,
                    onFocus: e.handleFocus,
                    onBlur: e.handleBlur,
                    onInput: e.debouncedOnInputChange,
                    onPaste: e.debouncedOnInputChange,
                    onCompositionstart: e.handleComposition,
                    onCompositionupdate: e.handleComposition,
                    onCompositionend: e.handleComposition,
                    onKeydown: [
                      t[17] ||
                        (t[17] = Ve(
                          Ue((d) => e.navigateOptions('next'), ['stop', 'prevent']),
                          ['down'],
                        )),
                      t[18] ||
                        (t[18] = Ve(
                          Ue((d) => e.navigateOptions('prev'), ['stop', 'prevent']),
                          ['up'],
                        )),
                      Ve(Ue(e.selectOption, ['stop', 'prevent']), ['enter']),
                      Ve(e.handleKeydownEscape, ['esc']),
                      t[19] || (t[19] = Ve((d) => (e.visible = !1), ['tab'])),
                    ],
                    onMouseenter: t[20] || (t[20] = (d) => (e.inputHovering = !0)),
                    onMouseleave: t[21] || (t[21] = (d) => (e.inputHovering = !1)),
                  },
                  ba(
                    {
                      suffix: j(() => [
                        e.iconComponent && !e.showClose
                          ? (M(),
                            Y(
                              a,
                              {
                                key: 0,
                                class: N([
                                  e.nsSelect.e('caret'),
                                  e.nsSelect.e('icon'),
                                  e.iconReverse,
                                ]),
                              },
                              { default: j(() => [(M(), Y(vt(e.iconComponent)))]), _: 1 },
                              8,
                              ['class'],
                            ))
                          : U('v-if', !0),
                        e.showClose && e.clearIcon
                          ? (M(),
                            Y(
                              a,
                              {
                                key: 1,
                                class: N([e.nsSelect.e('caret'), e.nsSelect.e('icon')]),
                                onClick: e.handleClearClick,
                              },
                              { default: j(() => [(M(), Y(vt(e.clearIcon)))]), _: 1 },
                              8,
                              ['class', 'onClick'],
                            ))
                          : U('v-if', !0),
                      ]),
                      _: 2,
                    },
                    [
                      e.$slots.prefix
                        ? { name: 'prefix', fn: j(() => [Q('div', oc, [ce(e.$slots, 'prefix')])]) }
                        : void 0,
                    ],
                  ),
                  1032,
                  [
                    'id',
                    'modelValue',
                    'placeholder',
                    'name',
                    'autocomplete',
                    'size',
                    'disabled',
                    'readonly',
                    'class',
                    'tabindex',
                    'onFocus',
                    'onBlur',
                    'onInput',
                    'onPaste',
                    'onCompositionstart',
                    'onCompositionupdate',
                    'onCompositionend',
                    'onKeydown',
                  ],
                ),
              ]),
            ]),
            content: j(() => [
              J(p, null, {
                default: j(() => [
                  Re(
                    J(
                      v,
                      {
                        ref: 'scrollbar',
                        tag: 'ul',
                        'wrap-class': e.nsSelect.be('dropdown', 'wrap'),
                        'view-class': e.nsSelect.be('dropdown', 'list'),
                        class: N([
                          e.nsSelect.is(
                            'empty',
                            !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0,
                          ),
                        ]),
                      },
                      {
                        default: j(() => [
                          e.showNewOption
                            ? (M(),
                              Y(c, { key: 0, value: e.query, created: !0 }, null, 8, ['value']))
                            : U('v-if', !0),
                          ce(e.$slots, 'default'),
                        ]),
                        _: 3,
                      },
                      8,
                      ['wrap-class', 'view-class', 'class'],
                    ),
                    [[Tt, e.options.size > 0 && !e.loading]],
                  ),
                  e.emptyText &&
                  (!e.allowCreate || e.loading || (e.allowCreate && e.options.size === 0))
                    ? (M(),
                      R(
                        xe,
                        { key: 0 },
                        [
                          e.$slots.empty
                            ? ce(e.$slots, 'empty', { key: 0 })
                            : (M(),
                              R(
                                'p',
                                { key: 1, class: N(e.nsSelect.be('dropdown', 'empty')) },
                                ie(e.emptyText),
                                3,
                              )),
                        ],
                        64,
                      ))
                    : U('v-if', !0),
                ]),
                _: 3,
              }),
            ]),
            _: 3,
          },
          8,
          ['visible', 'teleported', 'popper-class', 'effect', 'transition', 'persistent', 'onShow'],
        ),
      ],
      2,
    )),
    [[g, e.handleClose, e.popperPaneRef]],
  )
}
var sc = me(tc, [
  ['render', ac],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue',
  ],
])
const rc = te({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: { type: Boolean, default: !1 } },
  setup(e) {
    const t = X('select'),
      n = A(!0),
      l = be(),
      o = A([])
    gt(Wo, yt(ue({}, Xt(e))))
    const s = $e(Sn)
    Je(() => {
      o.value = r(l.subTree)
    })
    const r = (a) => {
        const i = []
        return (
          Array.isArray(a.children) &&
            a.children.forEach((c) => {
              var v
              c.type && c.type.name === 'ElOption' && c.component && c.component.proxy
                ? i.push(c.component.proxy)
                : (v = c.children) != null && v.length && i.push(...r(c))
            }),
          i
        )
      },
      { groupQueryChange: u } = Un(s)
    return (
      ae(u, () => {
        n.value = o.value.some((a) => a.visible === !0)
      }),
      { visible: n, ns: t }
    )
  },
})
function ic(e, t, n, l, o, s) {
  return Re(
    (M(),
    R(
      'ul',
      { class: N(e.ns.be('group', 'wrap')) },
      [
        Q('li', { class: N(e.ns.be('group', 'title')) }, ie(e.label), 3),
        Q('li', null, [Q('ul', { class: N(e.ns.b('group')) }, [ce(e.$slots, 'default')], 2)]),
      ],
      2,
    )),
    [[Tt, e.visible]],
  )
}
var Ho = me(rc, [
  ['render', ic],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue',
  ],
])
const uc = bt(sc, { Option: el, OptionGroup: Ho }),
  cc = Ke(el)
Ke(Ho)
const tl = () => $e(mo, {}),
  dc = Qe({
    pageSize: { type: Number, required: !0 },
    pageSizes: { type: ht(Array), default: () => bn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String },
    disabled: Boolean,
    size: { type: String, default: 'default' },
  }),
  fc = { name: 'ElPaginationSizes' },
  pc = te(
    Se(ue({}, fc), {
      props: dc,
      emits: ['page-size-change'],
      setup(e, { emit: t }) {
        const n = e,
          { t: l } = it(),
          o = X('pagination'),
          s = tl(),
          r = A(n.pageSize)
        ae(
          () => n.pageSizes,
          (i, c) => {
            if (!Rn(i, c) && Array.isArray(i)) {
              const v = i.includes(n.pageSize) ? n.pageSize : n.pageSizes[0]
              t('page-size-change', v)
            }
          },
        ),
          ae(
            () => n.pageSize,
            (i) => {
              r.value = i
            },
          )
        const u = $(() => n.pageSizes)
        function a(i) {
          var c
          i !== r.value && ((r.value = i), (c = s.handleSizeChange) == null || c.call(s, Number(i)))
        }
        return (i, c) => (
          M(),
          R(
            'span',
            { class: N(f(o).e('sizes')) },
            [
              J(
                f(uc),
                {
                  'model-value': r.value,
                  disabled: i.disabled,
                  'popper-class': i.popperClass,
                  size: i.size,
                  onChange: a,
                },
                {
                  default: j(() => [
                    (M(!0),
                    R(
                      xe,
                      null,
                      rt(
                        f(u),
                        (v) => (
                          M(),
                          Y(
                            f(cc),
                            { key: v, value: v, label: v + f(l)('el.pagination.pagesize') },
                            null,
                            8,
                            ['value', 'label'],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ['model-value', 'disabled', 'popper-class', 'size'],
              ),
            ],
            2,
          )
        )
      },
    }),
  )
var vc = me(pc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue',
  ],
])
const hc = ['disabled'],
  mc = { name: 'ElPaginationJumper' },
  gc = te(
    Se(ue({}, mc), {
      setup(e) {
        const { t } = it(),
          n = X('pagination'),
          { pageCount: l, disabled: o, currentPage: s, changeEvent: r } = tl(),
          u = A(),
          a = $(() => {
            var v
            return (v = u.value) != null ? v : s == null ? void 0 : s.value
          })
        function i(v) {
          u.value = +v
        }
        function c(v) {
          ;(v = Math.trunc(+v)), r == null || r(+v), (u.value = void 0)
        }
        return (v, p) => (
          M(),
          R(
            'span',
            { class: N(f(n).e('jump')), disabled: f(o) },
            [
              st(ie(f(t)('el.pagination.goto')) + ' ', 1),
              J(
                f(go),
                {
                  size: 'small',
                  class: N([f(n).e('editor'), f(n).is('in-pagination')]),
                  min: 1,
                  max: f(l),
                  disabled: f(o),
                  'model-value': f(a),
                  type: 'number',
                  'onUpdate:modelValue': i,
                  onChange: c,
                },
                null,
                8,
                ['class', 'max', 'disabled', 'model-value'],
              ),
              st(' ' + ie(f(t)('el.pagination.pageClassifier')), 1),
            ],
            10,
            hc,
          )
        )
      },
    }),
  )
var bc = me(gc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue',
  ],
])
const yc = Qe({ total: { type: Number, default: 1e3 } }),
  Cc = ['disabled'],
  Sc = { name: 'ElPaginationTotal' },
  wc = te(
    Se(ue({}, Sc), {
      props: yc,
      setup(e) {
        const { t } = it(),
          n = X('pagination'),
          { disabled: l } = tl()
        return (o, s) => (
          M(),
          R(
            'span',
            { class: N(f(n).e('total')), disabled: f(l) },
            ie(f(t)('el.pagination.total', { total: o.total })),
            11,
            Cc,
          )
        )
      },
    }),
  )
var Ec = me(wc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue',
  ],
])
const $c = Qe({
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, required: !0 },
    pagerCount: { type: Number, default: 7 },
    disabled: Boolean,
  }),
  kc = ['onKeyup'],
  Mc = ['aria-current', 'tabindex'],
  xc = ['tabindex'],
  Tc = ['aria-current', 'tabindex'],
  Pc = ['tabindex'],
  Ac = ['aria-current', 'tabindex'],
  Oc = { name: 'ElPaginationPager' },
  Ic = te(
    Se(ue({}, Oc), {
      props: $c,
      emits: ['change'],
      setup(e, { emit: t }) {
        const n = e,
          l = X('pager'),
          o = X('icon'),
          s = A(!1),
          r = A(!1),
          u = A(!1),
          a = A(!1),
          i = A(!1),
          c = A(!1),
          v = $(() => {
            const E = n.pagerCount,
              b = (E - 1) / 2,
              h = Number(n.currentPage),
              C = Number(n.pageCount)
            let O = !1,
              P = !1
            C > E && (h > E - b && (O = !0), h < C - b && (P = !0))
            const S = []
            if (O && !P) {
              const x = C - (E - 2)
              for (let I = x; I < C; I++) S.push(I)
            } else if (!O && P) for (let x = 2; x < E; x++) S.push(x)
            else if (O && P) {
              const x = Math.floor(E / 2) - 1
              for (let I = h - x; I <= h + x; I++) S.push(I)
            } else for (let x = 2; x < C; x++) S.push(x)
            return S
          }),
          p = $(() => (n.disabled ? -1 : 0))
        Mt(() => {
          const E = (n.pagerCount - 1) / 2
          ;(s.value = !1),
            (r.value = !1),
            n.pageCount > n.pagerCount &&
              (n.currentPage > n.pagerCount - E && (s.value = !0),
              n.currentPage < n.pageCount - E && (r.value = !0))
        })
        function g(E = !1) {
          n.disabled || (E ? (u.value = !0) : (a.value = !0))
        }
        function d(E = !1) {
          E ? (i.value = !0) : (c.value = !0)
        }
        function m(E) {
          const b = E.target
          if (b.tagName.toLowerCase() === 'li' && Array.from(b.classList).includes('number')) {
            const h = Number(b.textContent)
            h !== n.currentPage && t('change', h)
          } else
            b.tagName.toLowerCase() === 'li' && Array.from(b.classList).includes('more') && w(E)
        }
        function w(E) {
          const b = E.target
          if (b.tagName.toLowerCase() === 'ul' || n.disabled) return
          let h = Number(b.textContent)
          const C = n.pageCount,
            O = n.currentPage,
            P = n.pagerCount - 2
          b.className.includes('more') &&
            (b.className.includes('quickprev')
              ? (h = O - P)
              : b.className.includes('quicknext') && (h = O + P)),
            Number.isNaN(+h) || (h < 1 && (h = 1), h > C && (h = C)),
            h !== O && t('change', h)
        }
        return (E, b) => (
          M(),
          R(
            'ul',
            { class: N(f(l).b()), onClick: w, onKeyup: Ve(m, ['enter']) },
            [
              E.pageCount > 0
                ? (M(),
                  R(
                    'li',
                    {
                      key: 0,
                      class: N([
                        [f(l).is('active', E.currentPage === 1), f(l).is('disabled', E.disabled)],
                        'number',
                      ]),
                      'aria-current': E.currentPage === 1,
                      tabindex: f(p),
                    },
                    ' 1 ',
                    10,
                    Mc,
                  ))
                : U('v-if', !0),
              s.value
                ? (M(),
                  R(
                    'li',
                    {
                      key: 1,
                      class: N([
                        'more',
                        'btn-quickprev',
                        f(o).b(),
                        f(l).is('disabled', E.disabled),
                      ]),
                      tabindex: f(p),
                      onMouseenter: b[0] || (b[0] = (h) => g(!0)),
                      onMouseleave: b[1] || (b[1] = (h) => (u.value = !1)),
                      onFocus: b[2] || (b[2] = (h) => d(!0)),
                      onBlur: b[3] || (b[3] = (h) => (i.value = !1)),
                    },
                    [
                      u.value || i.value
                        ? (M(), Y(f(La), { key: 0 }))
                        : (M(), Y(f(vl), { key: 1 })),
                    ],
                    42,
                    xc,
                  ))
                : U('v-if', !0),
              (M(!0),
              R(
                xe,
                null,
                rt(
                  f(v),
                  (h) => (
                    M(),
                    R(
                      'li',
                      {
                        key: h,
                        class: N([
                          [f(l).is('active', E.currentPage === h), f(l).is('disabled', E.disabled)],
                          'number',
                        ]),
                        'aria-current': E.currentPage === h,
                        tabindex: f(p),
                      },
                      ie(h),
                      11,
                      Tc,
                    )
                  ),
                ),
                128,
              )),
              r.value
                ? (M(),
                  R(
                    'li',
                    {
                      key: 2,
                      class: N([
                        'more',
                        'btn-quicknext',
                        f(o).b(),
                        f(l).is('disabled', E.disabled),
                      ]),
                      tabindex: f(p),
                      onMouseenter: b[4] || (b[4] = (h) => g()),
                      onMouseleave: b[5] || (b[5] = (h) => (a.value = !1)),
                      onFocus: b[6] || (b[6] = (h) => d()),
                      onBlur: b[7] || (b[7] = (h) => (c.value = !1)),
                    },
                    [
                      a.value || c.value
                        ? (M(), Y(f(Na), { key: 0 }))
                        : (M(), Y(f(vl), { key: 1 })),
                    ],
                    42,
                    Pc,
                  ))
                : U('v-if', !0),
              E.pageCount > 1
                ? (M(),
                  R(
                    'li',
                    {
                      key: 3,
                      class: N([
                        [
                          f(l).is('active', E.currentPage === E.pageCount),
                          f(l).is('disabled', E.disabled),
                        ],
                        'number',
                      ]),
                      'aria-current': E.currentPage === E.pageCount,
                      tabindex: f(p),
                    },
                    ie(E.pageCount),
                    11,
                    Ac,
                  ))
                : U('v-if', !0),
            ],
            42,
            kc,
          )
        )
      },
    }),
  )
var Lc = me(Ic, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue',
  ],
])
const Le = (e) => typeof e != 'number',
  Nc = Qe({
    total: Number,
    pageSize: Number,
    defaultPageSize: Number,
    currentPage: Number,
    defaultCurrentPage: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator: (e) =>
        typeof e == 'number' && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
      default: 7,
    },
    layout: {
      type: String,
      default: ['prev', 'pager', 'next', 'jumper', '->', 'total'].join(', '),
    },
    pageSizes: { type: ht(Array), default: () => bn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String, default: '' },
    prevText: { type: String, default: '' },
    nextText: { type: String, default: '' },
    small: Boolean,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
  }),
  _c = {
    'update:current-page': (e) => typeof e == 'number',
    'update:page-size': (e) => typeof e == 'number',
    'size-change': (e) => typeof e == 'number',
    'current-change': (e) => typeof e == 'number',
    'prev-click': (e) => typeof e == 'number',
    'next-click': (e) => typeof e == 'number',
  },
  Vl = 'ElPagination'
var Rc = te({
  name: Vl,
  props: Nc,
  emits: _c,
  setup(e, { emit: t, slots: n }) {
    const { t: l } = it(),
      o = X('pagination'),
      s = be().vnode.props || {},
      r = 'onUpdate:currentPage' in s || 'onUpdate:current-page' in s || 'onCurrentChange' in s,
      u = 'onUpdate:pageSize' in s || 'onUpdate:page-size' in s || 'onSizeChange' in s,
      a = $(() => {
        if ((Le(e.total) && Le(e.pageCount)) || (!Le(e.currentPage) && !r)) return !1
        if (e.layout.includes('sizes')) {
          if (Le(e.pageCount)) {
            if (!Le(e.total) && !Le(e.pageSize) && !u) return !1
          } else if (!u) return !1
        }
        return !0
      }),
      i = A(Le(e.defaultPageSize) ? 10 : e.defaultPageSize),
      c = A(Le(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage),
      v = $({
        get() {
          return Le(e.pageSize) ? i.value : e.pageSize
        },
        set(h) {
          Le(e.pageSize) && (i.value = h), u && (t('update:page-size', h), t('size-change', h))
        },
      }),
      p = $(() => {
        let h = 0
        return (
          Le(e.pageCount)
            ? Le(e.total) || (h = Math.max(1, Math.ceil(e.total / v.value)))
            : (h = e.pageCount),
          h
        )
      }),
      g = $({
        get() {
          return Le(e.currentPage) ? c.value : e.currentPage
        },
        set(h) {
          let C = h
          h < 1 ? (C = 1) : h > p.value && (C = p.value),
            Le(e.currentPage) && (c.value = C),
            r && (t('update:current-page', C), t('current-change', C))
        },
      })
    ae(p, (h) => {
      g.value > h && (g.value = h)
    })
    function d(h) {
      g.value = h
    }
    function m(h) {
      v.value = h
      const C = p.value
      g.value > C && (g.value = C)
    }
    function w() {
      e.disabled || ((g.value -= 1), t('prev-click', g.value))
    }
    function E() {
      e.disabled || ((g.value += 1), t('next-click', g.value))
    }
    function b(h, C) {
      h && (h.props || (h.props = {}), (h.props.class = [h.props.class, C].join(' ')))
    }
    return (
      gt(mo, {
        pageCount: p,
        disabled: $(() => e.disabled),
        currentPage: g,
        changeEvent: d,
        handleSizeChange: m,
      }),
      () => {
        var h, C
        if (!a.value) return Lt(Vl, l('el.pagination.deprecationWarning')), null
        if (!e.layout || (e.hideOnSinglePage && p.value <= 1)) return null
        const O = [],
          P = [],
          S = W('div', { class: o.e('rightwrapper') }, P),
          x = {
            prev: W(Wu, {
              disabled: e.disabled,
              currentPage: g.value,
              prevText: e.prevText,
              onClick: w,
            }),
            jumper: W(bc),
            pager: W(Lc, {
              currentPage: g.value,
              pageCount: p.value,
              pagerCount: e.pagerCount,
              onChange: d,
              disabled: e.disabled,
            }),
            next: W(qu, {
              disabled: e.disabled,
              currentPage: g.value,
              pageCount: p.value,
              nextText: e.nextText,
              onClick: E,
            }),
            sizes: W(vc, {
              pageSize: v.value,
              pageSizes: e.pageSizes,
              popperClass: e.popperClass,
              disabled: e.disabled,
              size: e.small ? 'small' : 'default',
            }),
            slot:
              (C = (h = n == null ? void 0 : n.default) == null ? void 0 : h.call(n)) != null
                ? C
                : null,
            total: W(Ec, { total: Le(e.total) ? 0 : e.total }),
          },
          I = e.layout.split(',').map((B) => B.trim())
        let D = !1
        return (
          I.forEach((B) => {
            if (B === '->') {
              D = !0
              return
            }
            D ? P.push(x[B]) : O.push(x[B])
          }),
          b(O[0], o.is('first')),
          b(O[O.length - 1], o.is('last')),
          D &&
            P.length > 0 &&
            (b(P[0], o.is('first')), b(P[P.length - 1], o.is('last')), O.push(S)),
          W(
            'div',
            {
              role: 'pagination',
              'aria-label': 'pagination',
              class: [o.b(), o.is('background', e.background), { [o.m('small')]: e.small }],
            },
            O,
          )
        )
      }
    )
  },
})
const zc = bt(Rc)
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var Fc = /["'&<>]/,
  Bc = Wc
function Wc(e) {
  var t = '' + e,
    n = Fc.exec(t)
  if (!n) return t
  var l,
    o = '',
    s = 0,
    r = 0
  for (s = n.index; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
      case 34:
        l = '&quot;'
        break
      case 38:
        l = '&amp;'
        break
      case 39:
        l = '&#39;'
        break
      case 60:
        l = '&lt;'
        break
      case 62:
        l = '&gt;'
        break
      default:
        continue
    }
    r !== s && (o += t.substring(r, s)), (r = s + 1), (o += l)
  }
  return r !== s ? o + t.substring(r, s) : o
}
const Pn = function (e) {
    var t
    return (t = e.target) == null ? void 0 : t.closest('td')
  },
  Kl = function (e) {
    return e !== null && typeof e == 'object'
  },
  Hc = function (e, t, n, l, o) {
    if (!t && !l && (!o || (Array.isArray(o) && !o.length))) return e
    typeof n == 'string' ? (n = n === 'descending' ? -1 : 1) : (n = n && n < 0 ? -1 : 1)
    const s = l
        ? null
        : function (u, a) {
            return o
              ? (Array.isArray(o) || (o = [o]),
                o.map((i) => (typeof i == 'string' ? He(u, i) : i(u, a, e))))
              : (t !== '$key' && Kl(u) && '$value' in u && (u = u.$value), [Kl(u) ? He(u, t) : u])
          },
      r = function (u, a) {
        if (l) return l(u.value, a.value)
        for (let i = 0, c = u.key.length; i < c; i++) {
          if (u.key[i] < a.key[i]) return -1
          if (u.key[i] > a.key[i]) return 1
        }
        return 0
      }
    return e
      .map((u, a) => ({ value: u, index: a, key: s ? s(u, a) : null }))
      .sort((u, a) => {
        let i = r(u, a)
        return i || (i = u.index - a.index), i * +n
      })
      .map((u) => u.value)
  },
  Do = function (e, t) {
    let n = null
    return (
      e.columns.forEach((l) => {
        l.id === t && (n = l)
      }),
      n
    )
  },
  Dc = function (e, t) {
    let n = null
    for (let l = 0; l < e.columns.length; l++) {
      const o = e.columns[l]
      if (o.columnKey === t) {
        n = o
        break
      }
    }
    return n
  },
  jl = function (e, t, n) {
    const l = (t.className || '').match(new RegExp(`${n}-table_[^\\s]+`, 'gm'))
    return l ? Do(e, l[0]) : null
  },
  Te = (e, t) => {
    if (!e) throw new Error('Row is required when get row identity')
    if (typeof t == 'string') {
      if (!t.includes('.')) return `${e[t]}`
      const n = t.split('.')
      let l = e
      for (const o of n) l = l[o]
      return `${l}`
    } else if (typeof t == 'function') return t.call(null, e)
  },
  kt = function (e, t) {
    const n = {}
    return (
      (e || []).forEach((l, o) => {
        n[Te(l, t)] = { row: l, index: o }
      }),
      n
    )
  }
function Vc(e, t) {
  const n = {}
  let l
  for (l in e) n[l] = e[l]
  for (l in t)
    if (Ut(t, l)) {
      const o = t[l]
      typeof o != 'undefined' && (n[l] = o)
    }
  return n
}
function nl(e) {
  return (
    e === '' || (e !== void 0 && ((e = Number.parseInt(e, 10)), Number.isNaN(e) && (e = ''))), e
  )
}
function Vo(e) {
  return e === '' || (e !== void 0 && ((e = nl(e)), Number.isNaN(e) && (e = 80))), e
}
function Kc(e) {
  return typeof e == 'number'
    ? e
    : typeof e == 'string'
    ? /^\d+(?:px)?$/.test(e)
      ? Number.parseInt(e, 10)
      : e
    : null
}
function jc(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...l) =>
            t(n(...l)),
      )
}
function an(e, t, n) {
  let l = !1
  const o = e.indexOf(t),
    s = o !== -1,
    r = () => {
      e.push(t), (l = !0)
    },
    u = () => {
      e.splice(o, 1), (l = !0)
    }
  return typeof n == 'boolean' ? (n && !s ? r() : !n && s && u()) : s ? u() : r(), l
}
function qc(e, t, n = 'children', l = 'hasChildren') {
  const o = (r) => !(Array.isArray(r) && r.length)
  function s(r, u, a) {
    t(r, u, a),
      u.forEach((i) => {
        if (i[l]) {
          t(i, null, a + 1)
          return
        }
        const c = i[n]
        o(c) || s(i, c, a + 1)
      })
  }
  e.forEach((r) => {
    if (r[l]) {
      t(r, null, 0)
      return
    }
    const u = r[n]
    o(u) || s(r, u, 0)
  })
}
let at
function Gc(e, t, n, l, o) {
  const { nextZIndex: s } = ka(),
    r = e == null ? void 0 : e.dataset.prefix,
    u = e == null ? void 0 : e.querySelector(`.${r}-scrollbar__wrap`)
  function a() {
    const d = o === 'light',
      m = document.createElement('div')
    return (
      (m.className = `${r}-popper ${d ? 'is-light' : 'is-dark'}`),
      (n = Bc(n)),
      (m.innerHTML = n),
      (m.style.zIndex = String(s())),
      e == null || e.appendChild(m),
      m
    )
  }
  function i() {
    const d = document.createElement('div')
    return (d.className = `${r}-popper__arrow`), d
  }
  function c() {
    v && v.update()
  }
  at == null || at(),
    (at = () => {
      try {
        v && v.destroy(),
          p && (e == null || e.removeChild(p)),
          t.removeEventListener('mouseenter', c),
          t.removeEventListener('mouseleave', at),
          u == null || u.removeEventListener('scroll', at),
          (at = void 0)
      } catch (d) {}
    })
  let v = null
  const p = a(),
    g = i()
  return (
    p.appendChild(g),
    (v = Ma(
      t,
      p,
      ue(
        {
          strategy: 'absolute',
          modifiers: [
            { name: 'offset', options: { offset: [0, 8] } },
            { name: 'arrow', options: { element: g, padding: 10 } },
          ],
        },
        l,
      ),
    )),
    t.addEventListener('mouseenter', c),
    t.addEventListener('mouseleave', at),
    u == null || u.addEventListener('scroll', at),
    v
  )
}
const Ko = (e, t, n, l) => {
    let o = 0,
      s = e
    if (l) {
      if (l[e].colSpan > 1) return {}
      for (let a = 0; a < e; a++) o += l[a].colSpan
      s = o + l[e].colSpan - 1
    } else o = e
    let r
    const u = n.states.columns
    switch (t) {
      case 'left':
        s < n.states.fixedLeafColumnsLength.value && (r = 'left')
        break
      case 'right':
        o >= u.value.length - n.states.rightFixedLeafColumnsLength.value && (r = 'right')
        break
      default:
        s < n.states.fixedLeafColumnsLength.value
          ? (r = 'left')
          : o >= u.value.length - n.states.rightFixedLeafColumnsLength.value && (r = 'right')
    }
    return r ? { direction: r, start: o, after: s } : {}
  },
  ll = (e, t, n, l, o) => {
    const s = [],
      { direction: r, start: u } = Ko(t, n, l, o)
    if (r) {
      const a = r === 'left'
      s.push(`${e}-fixed-column--${r}`),
        a && u === l.states.fixedLeafColumnsLength.value - 1
          ? s.push('is-last-column')
          : !a &&
            u === l.states.columns.value.length - l.states.rightFixedLeafColumnsLength.value &&
            s.push('is-first-column')
    }
    return s
  }
function ql(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth)
}
const ol = (e, t, n, l) => {
    const { direction: o, start: s = 0 } = Ko(e, t, n, l)
    if (!o) return
    const r = {},
      u = o === 'left',
      a = n.states.columns.value
    return (
      u
        ? (r.left = a.slice(0, e).reduce(ql, 0))
        : (r.right = a
            .slice(s + 1)
            .reverse()
            .reduce(ql, 0)),
      r
    )
  },
  Rt = (e, t) => {
    !e || Number.isNaN(e[t]) || (e[t] = `${e[t]}px`)
  }
function Uc(e) {
  const t = be(),
    n = A(!1),
    l = A([])
  return {
    updateExpandRows: () => {
      const a = e.data.value || [],
        i = e.rowKey.value
      if (n.value) l.value = a.slice()
      else if (i) {
        const c = kt(l.value, i)
        l.value = a.reduce((v, p) => {
          const g = Te(p, i)
          return c[g] && v.push(p), v
        }, [])
      } else l.value = []
    },
    toggleRowExpansion: (a, i) => {
      an(l.value, a, i) && t.emit('expand-change', a, l.value.slice())
    },
    setExpandRowKeys: (a) => {
      t.store.assertRowKey()
      const i = e.data.value || [],
        c = e.rowKey.value,
        v = kt(i, c)
      l.value = a.reduce((p, g) => {
        const d = v[g]
        return d && p.push(d.row), p
      }, [])
    },
    isRowExpanded: (a) => {
      const i = e.rowKey.value
      return i ? !!kt(l.value, i)[Te(a, i)] : l.value.includes(a)
    },
    states: { expandRows: l, defaultExpandAll: n },
  }
}
function Yc(e) {
  const t = be(),
    n = A(null),
    l = A(null),
    o = (i) => {
      t.store.assertRowKey(), (n.value = i), r(i)
    },
    s = () => {
      n.value = null
    },
    r = (i) => {
      const { data: c, rowKey: v } = e
      let p = null
      v.value && (p = (f(c) || []).find((g) => Te(g, v.value) === i)),
        (l.value = p),
        t.emit('current-change', l.value, null)
    }
  return {
    setCurrentRowKey: o,
    restoreCurrentRowKey: s,
    setCurrentRowByKey: r,
    updateCurrentRow: (i) => {
      const c = l.value
      if (i && i !== c) {
        ;(l.value = i), t.emit('current-change', l.value, c)
        return
      }
      !i && c && ((l.value = null), t.emit('current-change', null, c))
    },
    updateCurrentRowData: () => {
      const i = e.rowKey.value,
        c = e.data.value || [],
        v = l.value
      if (!c.includes(v) && v) {
        if (i) {
          const p = Te(v, i)
          r(p)
        } else l.value = null
        l.value === null && t.emit('current-change', null, v)
      } else n.value && (r(n.value), s())
    },
    states: { _currentRowKey: n, currentRow: l },
  }
}
function Xc(e) {
  const t = A([]),
    n = A({}),
    l = A(16),
    o = A(!1),
    s = A({}),
    r = A('hasChildren'),
    u = A('children'),
    a = be(),
    i = $(() => {
      if (!e.rowKey.value) return {}
      const E = e.data.value || []
      return v(E)
    }),
    c = $(() => {
      const E = e.rowKey.value,
        b = Object.keys(s.value),
        h = {}
      return (
        b.length &&
          b.forEach((C) => {
            if (s.value[C].length) {
              const O = { children: [] }
              s.value[C].forEach((P) => {
                const S = Te(P, E)
                O.children.push(S), P[r.value] && !h[S] && (h[S] = { children: [] })
              }),
                (h[C] = O)
            }
          }),
        h
      )
    }),
    v = (E) => {
      const b = e.rowKey.value,
        h = {}
      return (
        qc(
          E,
          (C, O, P) => {
            const S = Te(C, b)
            Array.isArray(O)
              ? (h[S] = { children: O.map((x) => Te(x, b)), level: P })
              : o.value && (h[S] = { children: [], lazy: !0, level: P })
          },
          u.value,
          r.value,
        ),
        h
      )
    },
    p = (
      E = !1,
      b = ((h) => ((h = a.store) == null ? void 0 : h.states.defaultExpandAll.value))(),
    ) => {
      var h
      const C = i.value,
        O = c.value,
        P = Object.keys(C),
        S = {}
      if (P.length) {
        const x = f(n),
          I = [],
          D = (V, Z) => {
            if (E)
              return t.value ? b || t.value.includes(Z) : !!(b || (V == null ? void 0 : V.expanded))
            {
              const ee = b || (t.value && t.value.includes(Z))
              return !!((V == null ? void 0 : V.expanded) || ee)
            }
          }
        P.forEach((V) => {
          const Z = x[V],
            ee = ue({}, C[V])
          if (((ee.expanded = D(Z, V)), ee.lazy)) {
            const { loaded: fe = !1, loading: le = !1 } = Z || {}
            ;(ee.loaded = !!fe), (ee.loading = !!le), I.push(V)
          }
          S[V] = ee
        })
        const B = Object.keys(O)
        o.value &&
          B.length &&
          I.length &&
          B.forEach((V) => {
            const Z = x[V],
              ee = O[V].children
            if (I.includes(V)) {
              if (S[V].children.length !== 0)
                throw new Error('[ElTable]children must be an empty array.')
              S[V].children = ee
            } else {
              const { loaded: fe = !1, loading: le = !1 } = Z || {}
              S[V] = {
                lazy: !0,
                loaded: !!fe,
                loading: !!le,
                expanded: D(Z, V),
                children: ee,
                level: '',
              }
            }
          })
      }
      ;(n.value = S), (h = a.store) == null || h.updateTableScrollY()
    }
  ae(
    () => t.value,
    () => {
      p(!0)
    },
  ),
    ae(
      () => i.value,
      () => {
        p()
      },
    ),
    ae(
      () => c.value,
      () => {
        p()
      },
    )
  const g = (E) => {
      ;(t.value = E), p()
    },
    d = (E, b) => {
      a.store.assertRowKey()
      const h = e.rowKey.value,
        C = Te(E, h),
        O = C && n.value[C]
      if (C && O && 'expanded' in O) {
        const P = O.expanded
        ;(b = typeof b == 'undefined' ? !O.expanded : b),
          (n.value[C].expanded = b),
          P !== b && a.emit('expand-change', E, b),
          a.store.updateTableScrollY()
      }
    },
    m = (E) => {
      a.store.assertRowKey()
      const b = e.rowKey.value,
        h = Te(E, b),
        C = n.value[h]
      o.value && C && 'loaded' in C && !C.loaded ? w(E, h, C) : d(E, void 0)
    },
    w = (E, b, h) => {
      const { load: C } = a.props
      C &&
        !n.value[b].loaded &&
        ((n.value[b].loading = !0),
        C(E, h, (O) => {
          if (!Array.isArray(O)) throw new TypeError('[ElTable] data must be an array')
          ;(n.value[b].loading = !1),
            (n.value[b].loaded = !0),
            (n.value[b].expanded = !0),
            O.length && (s.value[b] = O),
            a.emit('expand-change', E, !0)
        }))
    }
  return {
    loadData: w,
    loadOrToggle: m,
    toggleTreeExpansion: d,
    updateTreeExpandKeys: g,
    updateTreeData: p,
    normalize: v,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: l,
      lazy: o,
      lazyTreeNodeMap: s,
      lazyColumnIdentifier: r,
      childrenColumnName: u,
    },
  }
}
const Qc = (e, t) => {
    const n = t.sortingColumn
    return !n || typeof n.sortable == 'string'
      ? e
      : Hc(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy)
  },
  sn = (e) => {
    const t = []
    return (
      e.forEach((n) => {
        n.children ? t.push.apply(t, sn(n.children)) : t.push(n)
      }),
      t
    )
  }
function Jc() {
  var e
  const t = be(),
    { size: n } = Xt((e = t.proxy) == null ? void 0 : e.$props),
    l = A(null),
    o = A([]),
    s = A([]),
    r = A(!1),
    u = A([]),
    a = A([]),
    i = A([]),
    c = A([]),
    v = A([]),
    p = A([]),
    g = A([]),
    d = A([]),
    m = A(0),
    w = A(0),
    E = A(0),
    b = A(!1),
    h = A([]),
    C = A(!1),
    O = A(!1),
    P = A(null),
    S = A({}),
    x = A(null),
    I = A(null),
    D = A(null),
    B = A(null),
    V = A(null)
  ae(o, () => t.state && fe(!1), { deep: !0 })
  const Z = () => {
      if (!l.value) throw new Error('[ElTable] prop row-key is required')
    },
    ee = () => {
      ;(c.value = u.value.filter((z) => z.fixed === !0 || z.fixed === 'left')),
        (v.value = u.value.filter((z) => z.fixed === 'right')),
        c.value.length > 0 &&
          u.value[0] &&
          u.value[0].type === 'selection' &&
          !u.value[0].fixed &&
          ((u.value[0].fixed = !0), c.value.unshift(u.value[0]))
      const H = u.value.filter((z) => !z.fixed)
      a.value = [].concat(c.value).concat(H).concat(v.value)
      const G = sn(H),
        y = sn(c.value),
        k = sn(v.value)
      ;(m.value = G.length),
        (w.value = y.length),
        (E.value = k.length),
        (i.value = [].concat(y).concat(G).concat(k)),
        (r.value = c.value.length > 0 || v.value.length > 0)
    },
    fe = (H, G = !1) => {
      H && ee(), G ? t.state.doLayout() : t.state.debouncedUpdateLayout()
    },
    le = (H) => h.value.includes(H),
    ye = () => {
      ;(b.value = !1), h.value.length && ((h.value = []), t.emit('selection-change', []))
    },
    _ = () => {
      let H
      if (l.value) {
        H = []
        const G = kt(h.value, l.value),
          y = kt(o.value, l.value)
        for (const k in G) Ut(G, k) && !y[k] && H.push(G[k].row)
      } else H = h.value.filter((G) => !o.value.includes(G))
      if (H.length) {
        const G = h.value.filter((y) => !H.includes(y))
        ;(h.value = G), t.emit('selection-change', G.slice())
      }
    },
    T = () => (h.value || []).slice(),
    F = (H, G = void 0, y = !0) => {
      if (an(h.value, H, G)) {
        const z = (h.value || []).slice()
        y && t.emit('select', z, H), t.emit('selection-change', z)
      }
    },
    q = () => {
      var H, G
      const y = O.value ? !b.value : !(b.value || h.value.length)
      b.value = y
      let k = !1,
        z = 0
      const K =
        (G = (H = t == null ? void 0 : t.store) == null ? void 0 : H.states) == null
          ? void 0
          : G.rowKey.value
      o.value.forEach((de, Oe) => {
        const Me = Oe + z
        P.value
          ? P.value.call(null, de, Me) && an(h.value, de, y) && (k = !0)
          : an(h.value, de, y) && (k = !0),
          (z += ve(Te(de, K)))
      }),
        k && t.emit('selection-change', h.value ? h.value.slice() : []),
        t.emit('select-all', h.value)
    },
    oe = () => {
      const H = kt(h.value, l.value)
      o.value.forEach((G) => {
        const y = Te(G, l.value),
          k = H[y]
        k && (h.value[k.index] = G)
      })
    },
    se = () => {
      var H, G, y
      if (((H = o.value) == null ? void 0 : H.length) === 0) {
        b.value = !1
        return
      }
      let k
      l.value && (k = kt(h.value, l.value))
      const z = function (Me) {
        return k ? !!k[Te(Me, l.value)] : h.value.includes(Me)
      }
      let K = !0,
        de = 0,
        Oe = 0
      for (let Me = 0, je = (o.value || []).length; Me < je; Me++) {
        const ze =
            (y = (G = t == null ? void 0 : t.store) == null ? void 0 : G.states) == null
              ? void 0
              : y.rowKey.value,
          Ie = Me + Oe,
          qe = o.value[Me],
          Zo = P.value && P.value.call(null, qe, Ie)
        if (z(qe)) de++
        else if (!P.value || Zo) {
          K = !1
          break
        }
        Oe += ve(Te(qe, ze))
      }
      de === 0 && (K = !1), (b.value = K)
    },
    ve = (H) => {
      var G
      if (!t || !t.store) return 0
      const { treeData: y } = t.store.states
      let k = 0
      const z = (G = y.value[H]) == null ? void 0 : G.children
      return (
        z &&
          ((k += z.length),
          z.forEach((K) => {
            k += ve(K)
          })),
        k
      )
    },
    re = (H, G) => {
      Array.isArray(H) || (H = [H])
      const y = {}
      return (
        H.forEach((k) => {
          ;(S.value[k.id] = G), (y[k.columnKey || k.id] = G)
        }),
        y
      )
    },
    Ce = (H, G, y) => {
      I.value && I.value !== H && (I.value.order = null),
        (I.value = H),
        (D.value = G),
        (B.value = y)
    },
    ke = () => {
      let H = f(s)
      Object.keys(S.value).forEach((G) => {
        const y = S.value[G]
        if (!y || y.length === 0) return
        const k = Do({ columns: i.value }, G)
        k &&
          k.filterMethod &&
          (H = H.filter((z) => y.some((K) => k.filterMethod.call(null, K, z, k))))
      }),
        (x.value = H)
    },
    pe = () => {
      o.value = Qc(x.value, { sortingColumn: I.value, sortProp: D.value, sortOrder: B.value })
    },
    Ae = (H = void 0) => {
      ;(H && H.filter) || ke(), pe()
    },
    De = (H) => {
      const { tableHeaderRef: G } = t.refs
      if (!G) return
      const y = Object.assign({}, G.filterPanels),
        k = Object.keys(y)
      if (!!k.length)
        if ((typeof H == 'string' && (H = [H]), Array.isArray(H))) {
          const z = H.map((K) => Dc({ columns: i.value }, K))
          k.forEach((K) => {
            const de = z.find((Oe) => Oe.id === K)
            de && (de.filteredValue = [])
          }),
            t.store.commit('filterChange', { column: z, values: [], silent: !0, multi: !0 })
        } else
          k.forEach((z) => {
            const K = i.value.find((de) => de.id === z)
            K && (K.filteredValue = [])
          }),
            (S.value = {}),
            t.store.commit('filterChange', { column: {}, values: [], silent: !0 })
    },
    ut = () => {
      !I.value || (Ce(null, null, null), t.store.commit('changeSortCondition', { silent: !0 }))
    },
    {
      setExpandRowKeys: Be,
      toggleRowExpansion: tt,
      updateExpandRows: Ct,
      states: ct,
      isRowExpanded: nt,
    } = Uc({ data: o, rowKey: l }),
    {
      updateTreeExpandKeys: Ze,
      toggleTreeExpansion: lt,
      updateTreeData: St,
      loadOrToggle: dt,
      states: ft,
    } = Xc({ data: o, rowKey: l }),
    {
      updateCurrentRowData: wt,
      updateCurrentRow: pt,
      setCurrentRowKey: L,
      states: ne,
    } = Yc({ data: o, rowKey: l })
  return {
    assertRowKey: Z,
    updateColumns: ee,
    scheduleLayout: fe,
    isSelected: le,
    clearSelection: ye,
    cleanSelection: _,
    getSelectionRows: T,
    toggleRowSelection: F,
    _toggleAllSelection: q,
    toggleAllSelection: null,
    updateSelectionByRowKey: oe,
    updateAllSelected: se,
    updateFilters: re,
    updateCurrentRow: pt,
    updateSort: Ce,
    execFilter: ke,
    execSort: pe,
    execQuery: Ae,
    clearFilter: De,
    clearSort: ut,
    toggleRowExpansion: tt,
    setExpandRowKeysAdapter: (H) => {
      Be(H), Ze(H)
    },
    setCurrentRowKey: L,
    toggleRowExpansionAdapter: (H, G) => {
      i.value.some(({ type: k }) => k === 'expand') ? tt(H, G) : lt(H, G)
    },
    isRowExpanded: nt,
    updateExpandRows: Ct,
    updateCurrentRowData: wt,
    loadOrToggle: dt,
    updateTreeData: St,
    states: ue(
      ue(
        ue(
          {
            tableSize: n,
            rowKey: l,
            data: o,
            _data: s,
            isComplex: r,
            _columns: u,
            originColumns: a,
            columns: i,
            fixedColumns: c,
            rightFixedColumns: v,
            leafColumns: p,
            fixedLeafColumns: g,
            rightFixedLeafColumns: d,
            leafColumnsLength: m,
            fixedLeafColumnsLength: w,
            rightFixedLeafColumnsLength: E,
            isAllSelected: b,
            selection: h,
            reserveSelection: C,
            selectOnIndeterminate: O,
            selectable: P,
            filters: S,
            filteredData: x,
            sortingColumn: I,
            sortProp: D,
            sortOrder: B,
            hoverRow: V,
          },
          ct,
        ),
        ft,
      ),
      ne,
    ),
  }
}
function jn(e, t) {
  return e.map((n) => {
    var l
    return n.id === t.id
      ? t
      : ((l = n.children) != null && l.length && (n.children = jn(n.children, t)), n)
  })
}
function jo(e) {
  e.forEach((t) => {
    var n, l
    ;(t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t)),
      (l = t.children) != null && l.length && jo(t.children)
  }),
    e.sort((t, n) => t.no - n.no)
}
function Zc() {
  const e = be(),
    t = Jc(),
    n = X('table'),
    l = {
      setData(r, u) {
        const a = f(r._data) !== u
        ;(r.data.value = u),
          (r._data.value = u),
          e.store.execQuery(),
          e.store.updateCurrentRowData(),
          e.store.updateExpandRows(),
          e.store.updateTreeData(e.store.states.defaultExpandAll.value),
          f(r.reserveSelection)
            ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey())
            : a
            ? e.store.clearSelection()
            : e.store.cleanSelection(),
          e.store.updateAllSelected(),
          e.$ready && e.store.scheduleLayout()
      },
      insertColumn(r, u, a) {
        const i = f(r._columns)
        let c = []
        a
          ? (a && !a.children && (a.children = []), a.children.push(u), (c = jn(i, a)))
          : (i.push(u), (c = i)),
          jo(c),
          (r._columns.value = c),
          u.type === 'selection' &&
            ((r.selectable.value = u.selectable), (r.reserveSelection.value = u.reserveSelection)),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      removeColumn(r, u, a) {
        const i = f(r._columns) || []
        if (a)
          a.children.splice(
            a.children.findIndex((c) => c.id === u.id),
            1,
          ),
            a.children.length === 0 && delete a.children,
            (r._columns.value = jn(i, a))
        else {
          const c = i.indexOf(u)
          c > -1 && (i.splice(c, 1), (r._columns.value = i))
        }
        e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      sort(r, u) {
        const { prop: a, order: i, init: c } = u
        if (a) {
          const v = f(r.columns).find((p) => p.property === a)
          v &&
            ((v.order = i),
            e.store.updateSort(v, a, i),
            e.store.commit('changeSortCondition', { init: c }))
        }
      },
      changeSortCondition(r, u) {
        const { sortingColumn: a, sortProp: i, sortOrder: c } = r
        f(c) === null && ((r.sortingColumn.value = null), (r.sortProp.value = null))
        const v = { filter: !0 }
        e.store.execQuery(v),
          (!u || !(u.silent || u.init)) &&
            e.emit('sort-change', { column: f(a), prop: f(i), order: f(c) }),
          e.store.updateTableScrollY()
      },
      filterChange(r, u) {
        const { column: a, values: i, silent: c } = u,
          v = e.store.updateFilters(a, i)
        e.store.execQuery(), c || e.emit('filter-change', v), e.store.updateTableScrollY()
      },
      toggleAllSelection() {
        e.store.toggleAllSelection()
      },
      rowSelectedChanged(r, u) {
        e.store.toggleRowSelection(u), e.store.updateAllSelected()
      },
      setHoverRow(r, u) {
        r.hoverRow.value = u
      },
      setCurrentRow(r, u) {
        e.store.updateCurrentRow(u)
      },
    },
    o = function (r, ...u) {
      const a = e.store.mutations
      if (a[r]) a[r].apply(e, [e.store.states].concat(u))
      else throw new Error(`Action not found: ${r}`)
    },
    s = function () {
      he(() => e.layout.updateScrollY.apply(e.layout))
    }
  return Se(ue({ ns: n }, t), { mutations: l, commit: o, updateTableScrollY: s })
}
const Kt = {
  rowKey: 'rowKey',
  defaultExpandAll: 'defaultExpandAll',
  selectOnIndeterminate: 'selectOnIndeterminate',
  indent: 'indent',
  lazy: 'lazy',
  data: 'data',
  ['treeProps.hasChildren']: { key: 'lazyColumnIdentifier', default: 'hasChildren' },
  ['treeProps.children']: { key: 'childrenColumnName', default: 'children' },
}
function ed(e, t) {
  if (!e) throw new Error('Table is required.')
  const n = Zc()
  return (
    (n.toggleAllSelection = Nt(n._toggleAllSelection, 10)),
    Object.keys(Kt).forEach((l) => {
      qo(Go(t, l), l, n)
    }),
    td(n, t),
    n
  )
}
function td(e, t) {
  Object.keys(Kt).forEach((n) => {
    ae(
      () => Go(t, n),
      (l) => {
        qo(l, n, e)
      },
    )
  })
}
function qo(e, t, n) {
  let l = e,
    o = Kt[t]
  typeof Kt[t] == 'object' && ((o = o.key), (l = l || Kt[t].default)), (n.states[o].value = l)
}
function Go(e, t) {
  if (t.includes('.')) {
    const n = t.split('.')
    let l = e
    return (
      n.forEach((o) => {
        l = l[o]
      }),
      l
    )
  } else return e[t]
}
class nd {
  constructor(t) {
    ;(this.observers = []),
      (this.table = null),
      (this.store = null),
      (this.columns = []),
      (this.fit = !0),
      (this.showHeader = !0),
      (this.height = A(null)),
      (this.scrollX = A(!1)),
      (this.scrollY = A(!1)),
      (this.bodyWidth = A(null)),
      (this.fixedWidth = A(null)),
      (this.rightFixedWidth = A(null)),
      (this.gutterWidth = 0)
    for (const n in t) Ut(t, n) && (Gt(this[n]) ? (this[n].value = t[n]) : (this[n] = t[n]))
    if (!this.table) throw new Error('Table is required for Table Layout')
    if (!this.store) throw new Error('Store is required for Table Layout')
  }
  updateScrollY() {
    if (this.height.value === null) return !1
    const n = this.table.refs.scrollBarRef
    if (this.table.vnode.el && n) {
      let l = !0
      const o = this.scrollY.value
      return (l = n.wrap$.scrollHeight > n.wrap$.clientHeight), (this.scrollY.value = l), o !== l
    }
    return !1
  }
  setHeight(t, n = 'height') {
    if (!Pt) return
    const l = this.table.vnode.el
    if (((t = Kc(t)), (this.height.value = Number(t)), !l && (t || t === 0)))
      return he(() => this.setHeight(t, n))
    typeof t == 'number'
      ? ((l.style[n] = `${t}px`), this.updateElsHeight())
      : typeof t == 'string' && ((l.style[n] = t), this.updateElsHeight())
  }
  setMaxHeight(t) {
    this.setHeight(t, 'max-height')
  }
  getFlattenColumns() {
    const t = []
    return (
      this.table.store.states.columns.value.forEach((l) => {
        l.isColumnGroup ? t.push.apply(t, l.columns) : t.push(l)
      }),
      t
    )
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers('scrollable')
  }
  headerDisplayNone(t) {
    if (!t) return !0
    let n = t
    for (; n.tagName !== 'DIV'; ) {
      if (getComputedStyle(n).display === 'none') return !0
      n = n.parentElement
    }
    return !1
  }
  updateColumnsWidth() {
    if (!Pt) return
    const t = this.fit,
      n = this.table.vnode.el.clientWidth
    let l = 0
    const o = this.getFlattenColumns(),
      s = o.filter((a) => typeof a.width != 'number')
    if (
      (o.forEach((a) => {
        typeof a.width == 'number' && a.realWidth && (a.realWidth = null)
      }),
      s.length > 0 && t)
    ) {
      if (
        (o.forEach((a) => {
          l += Number(a.width || a.minWidth || 80)
        }),
        l <= n)
      ) {
        this.scrollX.value = !1
        const a = n - l
        if (s.length === 1) s[0].realWidth = Number(s[0].minWidth || 80) + a
        else {
          const i = s.reduce((p, g) => p + Number(g.minWidth || 80), 0),
            c = a / i
          let v = 0
          s.forEach((p, g) => {
            if (g === 0) return
            const d = Math.floor(Number(p.minWidth || 80) * c)
            ;(v += d), (p.realWidth = Number(p.minWidth || 80) + d)
          }),
            (s[0].realWidth = Number(s[0].minWidth || 80) + a - v)
        }
      } else
        (this.scrollX.value = !0),
          s.forEach((a) => {
            a.realWidth = Number(a.minWidth)
          })
      ;(this.bodyWidth.value = Math.max(l, n)),
        (this.table.state.resizeState.value.width = this.bodyWidth.value)
    } else
      o.forEach((a) => {
        !a.width && !a.minWidth
          ? (a.realWidth = 80)
          : (a.realWidth = Number(a.width || a.minWidth)),
          (l += a.realWidth)
      }),
        (this.scrollX.value = l > n),
        (this.bodyWidth.value = l)
    const r = this.store.states.fixedColumns.value
    if (r.length > 0) {
      let a = 0
      r.forEach((i) => {
        a += Number(i.realWidth || i.width)
      }),
        (this.fixedWidth.value = a)
    }
    const u = this.store.states.rightFixedColumns.value
    if (u.length > 0) {
      let a = 0
      u.forEach((i) => {
        a += Number(i.realWidth || i.width)
      }),
        (this.rightFixedWidth.value = a)
    }
    this.notifyObservers('columns')
  }
  addObserver(t) {
    this.observers.push(t)
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t)
    n !== -1 && this.observers.splice(n, 1)
  }
  notifyObservers(t) {
    this.observers.forEach((l) => {
      var o, s
      switch (t) {
        case 'columns':
          ;(o = l.state) == null || o.onColumnsChange(this)
          break
        case 'scrollable':
          ;(s = l.state) == null || s.onScrollableChange(this)
          break
        default:
          throw new Error(`Table Layout don't have event ${t}.`)
      }
    })
  }
}
const { CheckboxGroup: ld } = _t,
  od = te({
    name: 'ElTableFilterPanel',
    components: {
      ElCheckbox: _t,
      ElCheckboxGroup: ld,
      ElScrollbar: Xn,
      ElTooltip: yn,
      ElIcon: _e,
      ArrowDown: lo,
      ArrowUp: oo,
    },
    directives: { ClickOutside: so },
    props: {
      placement: { type: String, default: 'bottom-start' },
      store: { type: Object },
      column: { type: Object },
      upDataColumn: { type: Function },
    },
    setup(e) {
      const t = be(),
        { t: n } = it(),
        l = X('table-filter'),
        o = t == null ? void 0 : t.parent
      o.filterPanels.value[e.column.id] || (o.filterPanels.value[e.column.id] = t)
      const s = A(!1),
        r = A(null),
        u = $(() => e.column && e.column.filters),
        a = $({
          get: () => {
            var C
            return (((C = e.column) == null ? void 0 : C.filteredValue) || [])[0]
          },
          set: (C) => {
            i.value &&
              (typeof C != 'undefined' && C !== null
                ? i.value.splice(0, 1, C)
                : i.value.splice(0, 1))
          },
        }),
        i = $({
          get() {
            return e.column ? e.column.filteredValue || [] : []
          },
          set(C) {
            e.column && e.upDataColumn('filteredValue', C)
          },
        }),
        c = $(() => (e.column ? e.column.filterMultiple : !0)),
        v = (C) => C.value === a.value,
        p = () => {
          s.value = !1
        },
        g = (C) => {
          C.stopPropagation(), (s.value = !s.value)
        },
        d = () => {
          s.value = !1
        },
        m = () => {
          b(i.value), p()
        },
        w = () => {
          ;(i.value = []), b(i.value), p()
        },
        E = (C) => {
          ;(a.value = C), b(typeof C != 'undefined' && C !== null ? i.value : []), p()
        },
        b = (C) => {
          e.store.commit('filterChange', { column: e.column, values: C }),
            e.store.updateAllSelected()
        }
      ae(
        s,
        (C) => {
          e.column && e.upDataColumn('filterOpened', C)
        },
        { immediate: !0 },
      )
      const h = $(() => {
        var C, O
        return (O = (C = r.value) == null ? void 0 : C.popperRef) == null ? void 0 : O.contentRef
      })
      return {
        tooltipVisible: s,
        multiple: c,
        filteredValue: i,
        filterValue: a,
        filters: u,
        handleConfirm: m,
        handleReset: w,
        handleSelect: E,
        isActive: v,
        t: n,
        ns: l,
        showFilterPanel: g,
        hideFilterPanel: d,
        popperPaneRef: h,
        tooltip: r,
      }
    },
  }),
  ad = { key: 0 },
  sd = ['disabled'],
  rd = ['label', 'onClick']
function id(e, t, n, l, o, s) {
  const r = we('el-checkbox'),
    u = we('el-checkbox-group'),
    a = we('el-scrollbar'),
    i = we('arrow-up'),
    c = we('arrow-down'),
    v = we('el-icon'),
    p = we('el-tooltip'),
    g = Yn('click-outside')
  return (
    M(),
    Y(
      p,
      {
        ref: 'tooltip',
        visible: e.tooltipVisible,
        offset: 0,
        placement: e.placement,
        'show-arrow': !1,
        'stop-popper-mouse-event': !1,
        teleported: '',
        effect: 'light',
        pure: '',
        'popper-class': e.ns.b(),
        persistent: '',
      },
      {
        content: j(() => [
          e.multiple
            ? (M(),
              R('div', ad, [
                Q(
                  'div',
                  { class: N(e.ns.e('content')) },
                  [
                    J(
                      a,
                      { 'wrap-class': e.ns.e('wrap') },
                      {
                        default: j(() => [
                          J(
                            u,
                            {
                              modelValue: e.filteredValue,
                              'onUpdate:modelValue': t[0] || (t[0] = (d) => (e.filteredValue = d)),
                              class: N(e.ns.e('checkbox-group')),
                            },
                            {
                              default: j(() => [
                                (M(!0),
                                R(
                                  xe,
                                  null,
                                  rt(
                                    e.filters,
                                    (d) => (
                                      M(),
                                      Y(
                                        r,
                                        { key: d.value, label: d.value },
                                        { default: j(() => [st(ie(d.text), 1)]), _: 2 },
                                        1032,
                                        ['label'],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ['modelValue', 'class'],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['wrap-class'],
                    ),
                  ],
                  2,
                ),
                Q(
                  'div',
                  { class: N(e.ns.e('bottom')) },
                  [
                    Q(
                      'button',
                      {
                        class: N({ [e.ns.is('disabled')]: e.filteredValue.length === 0 }),
                        disabled: e.filteredValue.length === 0,
                        type: 'button',
                        onClick:
                          t[1] || (t[1] = (...d) => e.handleConfirm && e.handleConfirm(...d)),
                      },
                      ie(e.t('el.table.confirmFilter')),
                      11,
                      sd,
                    ),
                    Q(
                      'button',
                      {
                        type: 'button',
                        onClick: t[2] || (t[2] = (...d) => e.handleReset && e.handleReset(...d)),
                      },
                      ie(e.t('el.table.resetFilter')),
                      1,
                    ),
                  ],
                  2,
                ),
              ]))
            : (M(),
              R(
                'ul',
                { key: 1, class: N(e.ns.e('list')) },
                [
                  Q(
                    'li',
                    {
                      class: N([
                        e.ns.e('list-item'),
                        { [e.ns.is('active')]: e.filterValue === void 0 || e.filterValue === null },
                      ]),
                      onClick: t[3] || (t[3] = (d) => e.handleSelect(null)),
                    },
                    ie(e.t('el.table.clearFilter')),
                    3,
                  ),
                  (M(!0),
                  R(
                    xe,
                    null,
                    rt(
                      e.filters,
                      (d) => (
                        M(),
                        R(
                          'li',
                          {
                            key: d.value,
                            class: N([e.ns.e('list-item'), e.ns.is('active', e.isActive(d))]),
                            label: d.value,
                            onClick: (m) => e.handleSelect(d.value),
                          },
                          ie(d.text),
                          11,
                          rd,
                        )
                      ),
                    ),
                    128,
                  )),
                ],
                2,
              )),
        ]),
        default: j(() => [
          Re(
            (M(),
            R(
              'span',
              {
                class: N([
                  `${e.ns.namespace.value}-table__column-filter-trigger`,
                  `${e.ns.namespace.value}-none-outline`,
                ]),
                onClick: t[4] || (t[4] = (...d) => e.showFilterPanel && e.showFilterPanel(...d)),
              },
              [
                J(v, null, {
                  default: j(() => [
                    e.column.filterOpened ? (M(), Y(i, { key: 0 })) : (M(), Y(c, { key: 1 })),
                  ]),
                  _: 1,
                }),
              ],
              2,
            )),
            [[g, e.hideFilterPanel, e.popperPaneRef]],
          ),
        ]),
        _: 1,
      },
      8,
      ['visible', 'placement', 'popper-class'],
    )
  )
}
var ud = me(od, [
  ['render', id],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue',
  ],
])
function Uo(e) {
  const t = be()
  Jl(() => {
    n.value.addObserver(t)
  }),
    Je(() => {
      l(n.value), o(n.value)
    }),
    Xl(() => {
      l(n.value), o(n.value)
    }),
    Zl(() => {
      n.value.removeObserver(t)
    })
  const n = $(() => {
      const s = e.layout
      if (!s) throw new Error('Can not find table layout.')
      return s
    }),
    l = (s) => {
      var r
      const u = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll('colgroup > col')) || []
      if (!u.length) return
      const a = s.getFlattenColumns(),
        i = {}
      a.forEach((c) => {
        i[c.id] = c
      })
      for (let c = 0, v = u.length; c < v; c++) {
        const p = u[c],
          g = p.getAttribute('name'),
          d = i[g]
        d && p.setAttribute('width', d.realWidth || d.width)
      }
    },
    o = (s) => {
      var r, u
      const a =
        ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll('colgroup > col[name=gutter]')) ||
        []
      for (let c = 0, v = a.length; c < v; c++)
        a[c].setAttribute('width', s.scrollY.value ? s.gutterWidth : '0')
      const i = ((u = e.vnode.el) == null ? void 0 : u.querySelectorAll('th.gutter')) || []
      for (let c = 0, v = i.length; c < v; c++) {
        const p = i[c]
        ;(p.style.width = s.scrollY.value ? `${s.gutterWidth}px` : '0'),
          (p.style.display = s.scrollY.value ? '' : 'none')
      }
    }
  return { tableLayout: n.value, onColumnsChange: l, onScrollableChange: o }
}
const et = Symbol('ElTable')
function cd(e, t) {
  const n = be(),
    l = $e(et),
    o = (m) => {
      m.stopPropagation()
    },
    s = (m, w) => {
      !w.filters && w.sortable ? d(m, w, !1) : w.filterable && !w.sortable && o(m),
        l == null || l.emit('header-click', w, m)
    },
    r = (m, w) => {
      l == null || l.emit('header-contextmenu', w, m)
    },
    u = A(null),
    a = A(!1),
    i = A({}),
    c = (m, w) => {
      if (!!Pt && !(w.children && w.children.length > 0) && u.value && e.border) {
        a.value = !0
        const E = l
        t('set-drag-visible', !0)
        const h = (E == null ? void 0 : E.vnode.el).getBoundingClientRect().left,
          C = n.vnode.el.querySelector(`th.${w.id}`),
          O = C.getBoundingClientRect(),
          P = O.left - h + 30
        Ot(C, 'noclick'),
          (i.value = {
            startMouseLeft: m.clientX,
            startLeft: O.right - h,
            startColumnLeft: O.left - h,
            tableLeft: h,
          })
        const S = E == null ? void 0 : E.refs.resizeProxy
        ;(S.style.left = `${i.value.startLeft}px`),
          (document.onselectstart = function () {
            return !1
          }),
          (document.ondragstart = function () {
            return !1
          })
        const x = (D) => {
            const B = D.clientX - i.value.startMouseLeft,
              V = i.value.startLeft + B
            S.style.left = `${Math.max(P, V)}px`
          },
          I = () => {
            if (a.value) {
              const { startColumnLeft: D, startLeft: B } = i.value,
                Z = Number.parseInt(S.style.left, 10) - D
              ;(w.width = w.realWidth = Z),
                E == null || E.emit('header-dragend', w.width, B - D, w, m),
                requestAnimationFrame(() => {
                  e.store.scheduleLayout(!1, !0)
                }),
                (document.body.style.cursor = ''),
                (a.value = !1),
                (u.value = null),
                (i.value = {}),
                t('set-drag-visible', !1)
            }
            document.removeEventListener('mousemove', x),
              document.removeEventListener('mouseup', I),
              (document.onselectstart = null),
              (document.ondragstart = null),
              setTimeout(() => {
                It(C, 'noclick')
              }, 0)
          }
        document.addEventListener('mousemove', x), document.addEventListener('mouseup', I)
      }
    },
    v = (m, w) => {
      var E
      if (w.children && w.children.length > 0) return
      const b = (E = m.target) == null ? void 0 : E.closest('th')
      if (!(!w || !w.resizable) && !a.value && e.border) {
        const h = b.getBoundingClientRect(),
          C = document.body.style
        h.width > 12 && h.right - m.pageX < 8
          ? ((C.cursor = 'col-resize'),
            Dt(b, 'is-sortable') && (b.style.cursor = 'col-resize'),
            (u.value = w))
          : a.value ||
            ((C.cursor = ''),
            Dt(b, 'is-sortable') && (b.style.cursor = 'pointer'),
            (u.value = null))
      }
    },
    p = () => {
      !Pt || (document.body.style.cursor = '')
    },
    g = ({ order: m, sortOrders: w }) => {
      if (m === '') return w[0]
      const E = w.indexOf(m || null)
      return w[E > w.length - 2 ? 0 : E + 1]
    },
    d = (m, w, E) => {
      var b
      m.stopPropagation()
      const h = w.order === E ? null : E || g(w),
        C = (b = m.target) == null ? void 0 : b.closest('th')
      if (C && Dt(C, 'noclick')) {
        It(C, 'noclick')
        return
      }
      if (!w.sortable) return
      const O = e.store.states
      let P = O.sortProp.value,
        S
      const x = O.sortingColumn.value
      ;(x !== w || (x === w && x.order === null)) &&
        (x && (x.order = null), (O.sortingColumn.value = w), (P = w.property)),
        h ? (S = w.order = h) : (S = w.order = null),
        (O.sortProp.value = P),
        (O.sortOrder.value = S),
        l == null || l.store.commit('changeSortCondition')
    }
  return {
    handleHeaderClick: s,
    handleHeaderContextMenu: r,
    handleMouseDown: c,
    handleMouseMove: v,
    handleMouseOut: p,
    handleSortClick: d,
    handleFilterClick: o,
  }
}
function dd(e) {
  const t = $e(et),
    n = X('table')
  return {
    getHeaderRowStyle: (u) => {
      const a = t == null ? void 0 : t.props.headerRowStyle
      return typeof a == 'function' ? a.call(null, { rowIndex: u }) : a
    },
    getHeaderRowClass: (u) => {
      const a = [],
        i = t == null ? void 0 : t.props.headerRowClassName
      return (
        typeof i == 'string'
          ? a.push(i)
          : typeof i == 'function' && a.push(i.call(null, { rowIndex: u })),
        a.join(' ')
      )
    },
    getHeaderCellStyle: (u, a, i, c) => {
      var v
      let p = (v = t == null ? void 0 : t.props.headerCellStyle) != null ? v : {}
      typeof p == 'function' &&
        (p = p.call(null, { rowIndex: u, columnIndex: a, row: i, column: c }))
      const g = c.isSubColumn ? null : ol(a, c.fixed, e.store, i)
      return Rt(g, 'left'), Rt(g, 'right'), Object.assign({}, p, g)
    },
    getHeaderCellClass: (u, a, i, c) => {
      const v = c.isSubColumn ? [] : ll(n.b(), a, c.fixed, e.store, i),
        p = [c.id, c.order, c.headerAlign, c.className, c.labelClassName, ...v]
      c.children || p.push('is-leaf'), c.sortable && p.push('is-sortable')
      const g = t == null ? void 0 : t.props.headerCellClassName
      return (
        typeof g == 'string'
          ? p.push(g)
          : typeof g == 'function' &&
            p.push(g.call(null, { rowIndex: u, columnIndex: a, row: i, column: c })),
        p.push(n.e('cell')),
        p.filter((d) => Boolean(d)).join(' ')
      )
    },
  }
}
const Yo = (e) => {
    const t = []
    return (
      e.forEach((n) => {
        n.children ? (t.push(n), t.push.apply(t, Yo(n.children))) : t.push(n)
      }),
      t
    )
  },
  fd = (e) => {
    let t = 1
    const n = (s, r) => {
      if ((r && ((s.level = r.level + 1), t < s.level && (t = s.level)), s.children)) {
        let u = 0
        s.children.forEach((a) => {
          n(a, s), (u += a.colSpan)
        }),
          (s.colSpan = u)
      } else s.colSpan = 1
    }
    e.forEach((s) => {
      ;(s.level = 1), n(s, void 0)
    })
    const l = []
    for (let s = 0; s < t; s++) l.push([])
    return (
      Yo(e).forEach((s) => {
        s.children
          ? ((s.rowSpan = 1), s.children.forEach((r) => (r.isSubColumn = !0)))
          : (s.rowSpan = t - s.level + 1),
          l[s.level - 1].push(s)
      }),
      l
    )
  }
function pd(e) {
  const t = $e(et),
    n = $(() => fd(e.store.states.originColumns.value))
  return {
    isGroup: $(() => {
      const s = n.value.length > 1
      return s && t && (t.state.isGroup.value = !0), s
    }),
    toggleAllSelection: (s) => {
      s.stopPropagation(), t == null || t.store.commit('toggleAllSelection')
    },
    columnRows: n,
  }
}
var vd = te({
  name: 'ElTableHeader',
  components: { ElCheckbox: _t },
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
  },
  setup(e, { emit: t }) {
    const n = be(),
      l = $e(et),
      o = X('table'),
      s = A({}),
      { onColumnsChange: r, onScrollableChange: u } = Uo(l)
    Je(() =>
      ot(this, null, function* () {
        yield he(), yield he()
        const { prop: P, order: S } = e.defaultSort
        l == null || l.store.commit('sort', { prop: P, order: S, init: !0 })
      }),
    )
    const {
        handleHeaderClick: a,
        handleHeaderContextMenu: i,
        handleMouseDown: c,
        handleMouseMove: v,
        handleMouseOut: p,
        handleSortClick: g,
        handleFilterClick: d,
      } = cd(e, t),
      {
        getHeaderRowStyle: m,
        getHeaderRowClass: w,
        getHeaderCellStyle: E,
        getHeaderCellClass: b,
      } = dd(e),
      { isGroup: h, toggleAllSelection: C, columnRows: O } = pd(e)
    return (
      (n.state = { onColumnsChange: r, onScrollableChange: u }),
      (n.filterPanels = s),
      {
        ns: o,
        filterPanels: s,
        onColumnsChange: r,
        onScrollableChange: u,
        columnRows: O,
        getHeaderRowClass: w,
        getHeaderRowStyle: m,
        getHeaderCellClass: b,
        getHeaderCellStyle: E,
        handleHeaderClick: a,
        handleHeaderContextMenu: i,
        handleMouseDown: c,
        handleMouseMove: v,
        handleMouseOut: p,
        handleSortClick: g,
        handleFilterClick: d,
        isGroup: h,
        toggleAllSelection: C,
      }
    )
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: l,
      getHeaderCellClass: o,
      getHeaderRowClass: s,
      getHeaderRowStyle: r,
      handleHeaderClick: u,
      handleHeaderContextMenu: a,
      handleMouseDown: i,
      handleMouseMove: c,
      handleSortClick: v,
      handleMouseOut: p,
      store: g,
      $parent: d,
    } = this
    let m = 1
    return W(
      'thead',
      { class: { [e.is('group')]: t } },
      n.map((w, E) =>
        W(
          'tr',
          { class: s(E), key: E, style: r(E) },
          w.map(
            (b, h) => (
              b.rowSpan > m && (m = b.rowSpan),
              W(
                'th',
                {
                  class: o(E, h, w, b),
                  colspan: b.colSpan,
                  key: `${b.id}-thead`,
                  rowspan: b.rowSpan,
                  style: l(E, h, w, b),
                  onClick: (C) => u(C, b),
                  onContextmenu: (C) => a(C, b),
                  onMousedown: (C) => i(C, b),
                  onMousemove: (C) => c(C, b),
                  onMouseout: p,
                },
                [
                  W(
                    'div',
                    {
                      class: [
                        'cell',
                        b.filteredValue && b.filteredValue.length > 0 ? 'highlight' : '',
                        b.labelClassName,
                      ],
                    },
                    [
                      b.renderHeader
                        ? b.renderHeader({ column: b, $index: h, store: g, _self: d })
                        : b.label,
                      b.sortable &&
                        W('span', { onClick: (C) => v(C, b), class: 'caret-wrapper' }, [
                          W('i', {
                            onClick: (C) => v(C, b, 'ascending'),
                            class: 'sort-caret ascending',
                          }),
                          W('i', {
                            onClick: (C) => v(C, b, 'descending'),
                            class: 'sort-caret descending',
                          }),
                        ]),
                      b.filterable &&
                        W(ud, {
                          store: g,
                          placement: b.filterPlacement || 'bottom-start',
                          column: b,
                          upDataColumn: (C, O) => {
                            b[C] = O
                          },
                        }),
                    ],
                  ),
                ],
              )
            ),
          ),
        ),
      ),
    )
  },
})
function hd(e) {
  const t = $e(et),
    n = A(''),
    l = A(W('div')),
    o = (p, g, d) => {
      var m
      const w = t,
        E = Pn(p)
      let b
      const h = (m = w == null ? void 0 : w.vnode.el) == null ? void 0 : m.dataset.prefix
      E &&
        ((b = jl({ columns: e.store.states.columns.value }, E, h)),
        b && (w == null || w.emit(`cell-${d}`, g, b, E, p))),
        w == null || w.emit(`row-${d}`, g, b, p)
    },
    s = (p, g) => {
      o(p, g, 'dblclick')
    },
    r = (p, g) => {
      e.store.commit('setCurrentRow', g), o(p, g, 'click')
    },
    u = (p, g) => {
      o(p, g, 'contextmenu')
    },
    a = Nt((p) => {
      e.store.commit('setHoverRow', p)
    }, 30),
    i = Nt(() => {
      e.store.commit('setHoverRow', null)
    }, 30)
  return {
    handleDoubleClick: s,
    handleClick: r,
    handleContextMenu: u,
    handleMouseEnter: a,
    handleMouseLeave: i,
    handleCellMouseEnter: (p, g, d) => {
      var m
      const w = t,
        E = Pn(p),
        b = (m = w == null ? void 0 : w.vnode.el) == null ? void 0 : m.dataset.prefix
      if (E) {
        const S = jl({ columns: e.store.states.columns.value }, E, b),
          x = (w.hoverState = { cell: E, column: S, row: g })
        w == null || w.emit('cell-mouse-enter', x.row, x.column, x.cell, p)
      }
      const h = p.target.querySelector('.cell')
      if (!(Dt(h, `${b}-tooltip`) && h.childNodes.length)) return
      const C = document.createRange()
      C.setStart(h, 0), C.setEnd(h, h.childNodes.length)
      const O = C.getBoundingClientRect().width,
        P =
          (Number.parseInt(hl(h, 'paddingLeft'), 10) || 0) +
          (Number.parseInt(hl(h, 'paddingRight'), 10) || 0)
      ;(O + P > h.offsetWidth || h.scrollWidth > h.offsetWidth) &&
        Gc(
          t == null ? void 0 : t.refs.tableWrapper,
          E,
          E.innerText || E.textContent,
          { placement: 'top', strategy: 'fixed' },
          d,
        )
    },
    handleCellMouseLeave: (p) => {
      if (!Pn(p)) return
      const d = t == null ? void 0 : t.hoverState
      t == null ||
        t.emit(
          'cell-mouse-leave',
          d == null ? void 0 : d.row,
          d == null ? void 0 : d.column,
          d == null ? void 0 : d.cell,
          p,
        )
    },
    tooltipContent: n,
    tooltipTrigger: l,
  }
}
function md(e) {
  const t = $e(et),
    n = X('table')
  return {
    getRowStyle: (i, c) => {
      const v = t == null ? void 0 : t.props.rowStyle
      return typeof v == 'function' ? v.call(null, { row: i, rowIndex: c }) : v || null
    },
    getRowClass: (i, c) => {
      const v = [n.e('row')]
      ;(t == null ? void 0 : t.props.highlightCurrentRow) &&
        i === e.store.states.currentRow.value &&
        v.push('current-row'),
        e.stripe && c % 2 === 1 && v.push(n.em('row', 'striped'))
      const p = t == null ? void 0 : t.props.rowClassName
      return (
        typeof p == 'string'
          ? v.push(p)
          : typeof p == 'function' && v.push(p.call(null, { row: i, rowIndex: c })),
        v
      )
    },
    getCellStyle: (i, c, v, p) => {
      const g = t == null ? void 0 : t.props.cellStyle
      let d = g != null ? g : {}
      typeof g == 'function' &&
        (d = g.call(null, { rowIndex: i, columnIndex: c, row: v, column: p }))
      const m = p.isSubColumn ? null : ol(c, e == null ? void 0 : e.fixed, e.store)
      return Rt(m, 'left'), Rt(m, 'right'), Object.assign({}, d, m)
    },
    getCellClass: (i, c, v, p) => {
      const g = p.isSubColumn ? [] : ll(n.b(), c, e == null ? void 0 : e.fixed, e.store),
        d = [p.id, p.align, p.className, ...g],
        m = t == null ? void 0 : t.props.cellClassName
      return (
        typeof m == 'string'
          ? d.push(m)
          : typeof m == 'function' &&
            d.push(m.call(null, { rowIndex: i, columnIndex: c, row: v, column: p })),
        d.push(n.e('cell')),
        d.filter((w) => Boolean(w)).join(' ')
      )
    },
    getSpan: (i, c, v, p) => {
      let g = 1,
        d = 1
      const m = t == null ? void 0 : t.props.spanMethod
      if (typeof m == 'function') {
        const w = m({ row: i, column: c, rowIndex: v, columnIndex: p })
        Array.isArray(w)
          ? ((g = w[0]), (d = w[1]))
          : typeof w == 'object' && ((g = w.rowspan), (d = w.colspan))
      }
      return { rowspan: g, colspan: d }
    },
    getColspanRealWidth: (i, c, v) => {
      if (c < 1) return i[v].realWidth
      const p = i.map(({ realWidth: g, width: d }) => g || d).slice(v, v + c)
      return Number(p.reduce((g, d) => Number(g) + Number(d), -1))
    },
  }
}
function gd(e) {
  const t = $e(et),
    n = X('table'),
    {
      handleDoubleClick: l,
      handleClick: o,
      handleContextMenu: s,
      handleMouseEnter: r,
      handleMouseLeave: u,
      handleCellMouseEnter: a,
      handleCellMouseLeave: i,
      tooltipContent: c,
      tooltipTrigger: v,
    } = hd(e),
    {
      getRowStyle: p,
      getRowClass: g,
      getCellStyle: d,
      getCellClass: m,
      getSpan: w,
      getColspanRealWidth: E,
    } = md(e),
    b = $(() => e.store.states.columns.value.findIndex(({ type: S }) => S === 'default')),
    h = (S, x) => {
      const I = t.props.rowKey
      return I ? Te(S, I) : x
    },
    C = (S, x, I, D = !1) => {
      const { tooltipEffect: B, store: V } = e,
        { indent: Z, columns: ee } = V.states,
        fe = g(S, x)
      let le = !0
      return (
        I && (fe.push(n.em('row', `level-${I.level}`)), (le = I.display)),
        W(
          'tr',
          {
            style: [le ? null : { display: 'none' }, p(S, x)],
            class: fe,
            key: h(S, x),
            onDblclick: (_) => l(_, S),
            onClick: (_) => o(_, S),
            onContextmenu: (_) => s(_, S),
            onMouseenter: () => r(x),
            onMouseleave: u,
          },
          ee.value.map((_, T) => {
            const { rowspan: F, colspan: q } = w(S, _, x, T)
            if (!F || !q) return null
            const oe = ue({}, _)
            oe.realWidth = E(ee.value, q, T)
            const se = {
              store: e.store,
              _self: e.context || t,
              column: oe,
              row: S,
              $index: x,
              cellIndex: T,
              expanded: D,
            }
            T === b.value &&
              I &&
              ((se.treeNode = { indent: I.level * Z.value, level: I.level }),
              typeof I.expanded == 'boolean' &&
                ((se.treeNode.expanded = I.expanded),
                'loading' in I && (se.treeNode.loading = I.loading),
                'noLazyChildren' in I && (se.treeNode.noLazyChildren = I.noLazyChildren)))
            const ve = `${x},${T}`,
              re = oe.columnKey || oe.rawColumnKey || '',
              Ce = O(T, _, se)
            return W(
              'td',
              {
                style: d(x, T, S, _),
                class: m(x, T, S, _),
                key: `${re}${ve}`,
                rowspan: F,
                colspan: q,
                onMouseenter: (ke) => a(ke, S, B),
                onMouseleave: i,
              },
              [Ce],
            )
          }),
        )
      )
    },
    O = (S, x, I) => x.renderCell(I)
  return {
    wrappedRowRender: (S, x) => {
      const I = e.store,
        { isRowExpanded: D, assertRowKey: B } = I,
        { treeData: V, lazyTreeNodeMap: Z, childrenColumnName: ee, rowKey: fe } = I.states,
        le = I.states.columns.value
      if (le.some(({ type: _ }) => _ === 'expand')) {
        const _ = D(S),
          T = C(S, x, void 0, _),
          F = t.renderExpanded
        return _
          ? F
            ? [
                [
                  T,
                  W('tr', { key: `expanded-row__${T.key}` }, [
                    W(
                      'td',
                      { colspan: le.length, class: 'el-table__cell el-table__expanded-cell' },
                      [F({ row: S, $index: x, store: I, expanded: _ })],
                    ),
                  ]),
                ],
              ]
            : (console.error('[Element Error]renderExpanded is required.'), T)
          : [[T]]
      } else if (Object.keys(V.value).length) {
        B()
        const _ = Te(S, fe.value)
        let T = V.value[_],
          F = null
        T &&
          ((F = { expanded: T.expanded, level: T.level, display: !0 }),
          typeof T.lazy == 'boolean' &&
            (typeof T.loaded == 'boolean' &&
              T.loaded &&
              (F.noLazyChildren = !(T.children && T.children.length)),
            (F.loading = T.loading)))
        const q = [C(S, x, F)]
        if (T) {
          let oe = 0
          const se = (re, Ce) => {
            !(re && re.length && Ce) ||
              re.forEach((ke) => {
                const pe = {
                    display: Ce.display && Ce.expanded,
                    level: Ce.level + 1,
                    expanded: !1,
                    noLazyChildren: !1,
                    loading: !1,
                  },
                  Ae = Te(ke, fe.value)
                if (Ae == null) throw new Error('For nested data item, row-key is required.')
                if (
                  ((T = ue({}, V.value[Ae])),
                  T &&
                    ((pe.expanded = T.expanded),
                    (T.level = T.level || pe.level),
                    (T.display = !!(T.expanded && pe.display)),
                    typeof T.lazy == 'boolean' &&
                      (typeof T.loaded == 'boolean' &&
                        T.loaded &&
                        (pe.noLazyChildren = !(T.children && T.children.length)),
                      (pe.loading = T.loading))),
                  oe++,
                  q.push(C(ke, x + oe, pe)),
                  T)
                ) {
                  const De = Z.value[Ae] || ke[ee.value]
                  se(De, T)
                }
              })
          }
          T.display = !0
          const ve = Z.value[_] || S[ee.value]
          se(ve, T)
        }
        return q
      } else return C(S, x, void 0)
    },
    tooltipContent: c,
    tooltipTrigger: v,
  }
}
const bd = {
  store: { required: !0, type: Object },
  stripe: Boolean,
  tooltipEffect: String,
  context: { default: () => ({}), type: Object },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: { type: String, default: '' },
  highlight: Boolean,
}
var yd = te({
  name: 'ElTableBody',
  props: bd,
  setup(e) {
    const t = be(),
      n = $e(et),
      l = X('table'),
      { wrappedRowRender: o, tooltipContent: s, tooltipTrigger: r } = gd(e),
      { onColumnsChange: u, onScrollableChange: a } = Uo(n)
    return (
      ae(e.store.states.hoverRow, (i, c) => {
        if (!e.store.states.isComplex.value || !Pt) return
        let v = window.requestAnimationFrame
        v || (v = (p) => window.setTimeout(p, 16)),
          v(() => {
            var p
            const g =
                (p = t == null ? void 0 : t.vnode.el) == null
                  ? void 0
                  : p.querySelectorAll(`.${l.e('row')}`),
              d = g[c],
              m = g[i]
            d && It(d, 'hover-row'), m && Ot(m, 'hover-row')
          })
      }),
      Zl(() => {
        var i
        ;(i = at) == null || i()
      }),
      {
        ns: l,
        onColumnsChange: u,
        onScrollableChange: a,
        wrappedRowRender: o,
        tooltipContent: s,
        tooltipTrigger: r,
      }
    )
  },
  render() {
    const { wrappedRowRender: e, store: t } = this,
      n = t.states.data.value || []
    return W('tbody', {}, [n.reduce((l, o) => l.concat(e(o, l.length)), [])])
  },
})
function al(e) {
  const t = e.tableLayout === 'auto'
  let n = e.columns || []
  t && n.every((o) => o.width === void 0) && (n = [])
  const l = (o) => {
    const s = { key: `${e.tableLayout}_${o.id}`, style: {}, name: void 0 }
    return t ? (s.style = { width: `${o.width}px` }) : (s.name = o.id), s
  }
  return W(
    'colgroup',
    {},
    n.map((o) => W('col', l(o))),
  )
}
al.props = ['columns', 'tableLayout']
function Cd() {
  const e = $e(et),
    t = e == null ? void 0 : e.store,
    n = $(() => t.states.fixedLeafColumnsLength.value),
    l = $(() => t.states.rightFixedColumns.value.length),
    o = $(() => t.states.columns.value.length),
    s = $(() => t.states.fixedColumns.value.length),
    r = $(() => t.states.rightFixedColumns.value.length)
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: l,
    columnsCount: o,
    leftFixedCount: s,
    rightFixedCount: r,
    columns: t.states.columns,
  }
}
function Sd(e) {
  const { columns: t } = Cd(),
    n = X('table')
  return {
    getCellClasses: (s, r) => {
      const u = s[r],
        a = [n.e('cell'), u.id, u.align, u.labelClassName, ...ll(n.b(), r, u.fixed, e.store)]
      return u.className && a.push(u.className), u.children || a.push(n.is('leaf')), a
    },
    getCellStyles: (s, r) => {
      const u = ol(r, s.fixed, e.store)
      return Rt(u, 'left'), Rt(u, 'right'), u
    },
    columns: t,
  }
}
var wd = te({
  name: 'ElTableFooter',
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: l } = Sd(e)
    return { ns: X('table'), getCellClasses: t, getCellStyles: n, columns: l }
  },
  render() {
    const {
        columns: e,
        getCellStyles: t,
        getCellClasses: n,
        summaryMethod: l,
        sumText: o,
        ns: s,
      } = this,
      r = this.store.states.data.value
    let u = []
    return (
      l
        ? (u = l({ columns: e, data: r }))
        : e.forEach((a, i) => {
            if (i === 0) {
              u[i] = o
              return
            }
            const c = r.map((d) => Number(d[a.property])),
              v = []
            let p = !0
            c.forEach((d) => {
              if (!Number.isNaN(+d)) {
                p = !1
                const m = `${d}`.split('.')[1]
                v.push(m ? m.length : 0)
              }
            })
            const g = Math.max.apply(null, v)
            p
              ? (u[i] = '')
              : (u[i] = c.reduce((d, m) => {
                  const w = Number(m)
                  return Number.isNaN(+w) ? d : Number.parseFloat((d + m).toFixed(Math.min(g, 20)))
                }, 0))
          }),
      W('table', { class: s.e('footer'), cellspacing: '0', cellpadding: '0', border: '0' }, [
        al({ columns: e }),
        W('tbody', [
          W('tr', {}, [
            ...e.map((a, i) =>
              W(
                'td',
                { key: i, colspan: a.colSpan, rowspan: a.rowSpan, class: n(e, i), style: t(a, i) },
                [W('div', { class: ['cell', a.labelClassName] }, [u[i]])],
              ),
            ),
          ]),
        ]),
      ])
    )
  },
})
function Ed(e) {
  return {
    setCurrentRow: (c) => {
      e.commit('setCurrentRow', c)
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (c, v) => {
      e.toggleRowSelection(c, v, !1), e.updateAllSelected()
    },
    clearSelection: () => {
      e.clearSelection()
    },
    clearFilter: (c) => {
      e.clearFilter(c)
    },
    toggleAllSelection: () => {
      e.commit('toggleAllSelection')
    },
    toggleRowExpansion: (c, v) => {
      e.toggleRowExpansionAdapter(c, v)
    },
    clearSort: () => {
      e.clearSort()
    },
    sort: (c, v) => {
      e.commit('sort', { prop: c, order: v })
    },
  }
}
function $d(e, t, n, l) {
  const o = A(!1),
    s = A(null),
    r = A(!1),
    u = (_) => {
      r.value = _
    },
    a = A({ width: null, height: null, headerHeight: null }),
    i = A(!1),
    c = { display: 'inline-block', verticalAlign: 'middle' },
    v = A(),
    p = A(0),
    g = A(0),
    d = A(0),
    m = A(0)
  Mt(() => {
    t.setHeight(e.height)
  }),
    Mt(() => {
      t.setMaxHeight(e.maxHeight)
    }),
    ae(
      () => [e.currentRowKey, n.states.rowKey],
      ([_, T]) => {
        !f(T) || n.setCurrentRowKey(`${_}`)
      },
      { immediate: !0 },
    ),
    ae(
      () => e.data,
      (_) => {
        l.store.commit('setData', _)
      },
      { immediate: !0, deep: !0 },
    ),
    Mt(() => {
      e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys)
    })
  const w = () => {
      l.store.commit('setHoverRow', null), l.hoverState && (l.hoverState = null)
    },
    E = (_, T) => {
      const { pixelX: F, pixelY: q } = T
      Math.abs(F) >= Math.abs(q) && (l.refs.bodyWrapper.scrollLeft += T.pixelX / 5)
    },
    b = $(
      () =>
        e.height ||
        e.maxHeight ||
        n.states.fixedColumns.value.length > 0 ||
        n.states.rightFixedColumns.value.length > 0,
    ),
    h = $(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : '' })),
    C = () => {
      b.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(x)
    }
  Je(() =>
    ot(this, null, function* () {
      yield he(), n.updateColumns(), I(), requestAnimationFrame(C)
      const _ = l.vnode.el,
        T = l.refs.headerWrapper
      e.flexible && _ && _.parentElement && (_.parentElement.style.minWidth = '0'),
        (a.value = {
          width: (v.value = _.offsetWidth),
          height: _.offsetHeight,
          headerHeight: e.showHeader && T ? T.offsetHeight : null,
        }),
        n.states.columns.value.forEach((F) => {
          F.filteredValue &&
            F.filteredValue.length &&
            l.store.commit('filterChange', { column: F, values: F.filteredValue, silent: !0 })
        }),
        (l.$ready = !0)
    }),
  )
  const O = (_, T) => {
      if (!_) return
      const F = Array.from(_.classList).filter((q) => !q.startsWith('is-scrolling-'))
      F.push(t.scrollX.value ? T : 'is-scrolling-none'), (_.className = F.join(' '))
    },
    P = (_) => {
      const { tableWrapper: T } = l.refs
      O(T, _)
    },
    S = (_) => {
      const { tableWrapper: T } = l.refs
      return !!(T && T.classList.contains(_))
    },
    x = function () {
      if (!l.refs.scrollBarRef) return
      if (!t.scrollX.value) {
        const re = 'is-scrolling-none'
        S(re) || P(re)
        return
      }
      const _ = l.refs.scrollBarRef.wrap$
      if (!_) return
      const { scrollLeft: T, offsetWidth: F, scrollWidth: q } = _,
        { headerWrapper: oe, footerWrapper: se } = l.refs
      oe && (oe.scrollLeft = T), se && (se.scrollLeft = T)
      const ve = q - F - 1
      T >= ve ? P('is-scrolling-right') : P(T === 0 ? 'is-scrolling-left' : 'is-scrolling-middle')
    },
    I = () => {
      !l.refs.scrollBarRef ||
        (l.refs.scrollBarRef.wrap$ && cl(l.refs.scrollBarRef.wrap$, 'scroll', x, { passive: !0 }),
        e.fit ? Qt(l.vnode.el, D) : cl(window, 'resize', D))
    },
    D = () => {
      var _, T, F
      const q = l.vnode.el
      if (!l.$ready || !q) return
      let oe = !1
      const { width: se, height: ve, headerHeight: re } = a.value,
        Ce = (v.value = q.offsetWidth)
      se !== Ce && (oe = !0)
      const ke = q.offsetHeight
      ;(e.height || b.value) && ve !== ke && (oe = !0)
      const pe =
        e.tableLayout === 'fixed'
          ? l.refs.headerWrapper
          : (_ = l.refs.tableHeaderRef) == null
          ? void 0
          : _.$el
      e.showHeader && (pe == null ? void 0 : pe.offsetHeight) !== re && (oe = !0),
        (p.value = ((T = l.refs.tableWrapper) == null ? void 0 : T.scrollHeight) || 0),
        (d.value = (pe == null ? void 0 : pe.scrollHeight) || 0),
        (m.value = ((F = l.refs.footerWrapper) == null ? void 0 : F.scrollHeight) || 0),
        (g.value = p.value - d.value - m.value),
        oe &&
          ((a.value = {
            width: Ce,
            height: ke,
            headerHeight: (e.showHeader && (pe == null ? void 0 : pe.offsetHeight)) || 0,
          }),
          C())
    },
    B = xt(),
    V = $(() => {
      const { bodyWidth: _, scrollY: T, gutterWidth: F } = t
      return _.value ? `${_.value - (T.value ? F : 0)}px` : ''
    }),
    Z = $(() => (e.maxHeight ? 'fixed' : e.tableLayout)),
    ee = $(() => {
      if (e.data && e.data.length) return null
      let _ = '100%'
      e.height && g.value && (_ = `${g.value}px`)
      const T = v.value
      return { width: T ? `${T}px` : '', height: _ }
    }),
    fe = $(() =>
      e.height
        ? { height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px` }
        : e.maxHeight
        ? { maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px` }
        : {},
    ),
    le = $(() => {
      var _, T
      if (e.height) return { height: '100%' }
      if (e.maxHeight) {
        if (Number.isNaN(Number(e.maxHeight)))
          return { maxHeight: `calc(${e.maxHeight} - ${d.value + m.value}px)` }
        {
          const F = ((_ = l.refs.headerWrapper) == null ? void 0 : _.scrollHeight) || 0,
            q = ((T = l.refs.footerWrapper) == null ? void 0 : T.scrollHeight) || 0,
            oe = e.maxHeight
          if (p.value >= Number(oe)) return { maxHeight: `${p.value - F - q}px` }
        }
      }
      return {}
    })
  return {
    isHidden: o,
    renderExpanded: s,
    setDragVisible: u,
    isGroup: i,
    handleMouseLeave: w,
    handleHeaderFooterMousewheel: E,
    tableSize: B,
    emptyBlockStyle: ee,
    handleFixedMousewheel: (_, T) => {
      const F = l.refs.bodyWrapper
      if (Math.abs(T.spinY) > 0) {
        const q = F.scrollTop
        T.pixelY < 0 && q !== 0 && _.preventDefault(),
          T.pixelY > 0 && F.scrollHeight - F.clientHeight > q && _.preventDefault(),
          (F.scrollTop += Math.ceil(T.pixelY / 5))
      } else F.scrollLeft += Math.ceil(T.pixelX / 5)
    },
    resizeProxyVisible: r,
    bodyWidth: V,
    resizeState: a,
    doLayout: C,
    tableBodyStyles: h,
    tableLayout: Z,
    scrollbarViewStyle: c,
    tableInnerStyle: fe,
    scrollbarStyle: le,
  }
}
var kd = {
  data: { type: Array, default: () => [] },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: { type: Boolean, default: !0 },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: { type: Boolean, default: !0 },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: { type: Boolean, default: !0 },
  indent: { type: Number, default: 16 },
  treeProps: {
    type: Object,
    default: () => ({ hasChildren: 'hasChildren', children: 'children' }),
  },
  lazy: Boolean,
  load: Function,
  style: { type: Object, default: () => ({}) },
  className: { type: String, default: '' },
  tableLayout: { type: String, default: 'fixed' },
  scrollbarAlwaysOn: { type: Boolean, default: !1 },
  flexible: Boolean,
}
const Md = () => {
  const e = A(),
    t = (s, r) => {
      const u = e.value
      u && u.scrollTo(s, r)
    },
    n = (s, r) => {
      const u = e.value
      u && Yt(r) && ['Top', 'Left'].includes(s) && u[`setScroll${s}`](r)
    }
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (s) => n('Top', s),
    setScrollLeft: (s) => n('Left', s),
  }
}
let xd = 1
const Td = te({
    name: 'ElTable',
    directives: { Mousewheel: Si },
    components: { TableHeader: vd, TableBody: yd, TableFooter: wd, ElScrollbar: Xn, hColgroup: al },
    props: kd,
    emits: [
      'select',
      'select-all',
      'selection-change',
      'cell-mouse-enter',
      'cell-mouse-leave',
      'cell-contextmenu',
      'cell-click',
      'cell-dblclick',
      'row-click',
      'row-contextmenu',
      'row-dblclick',
      'header-click',
      'header-contextmenu',
      'sort-change',
      'filter-change',
      'current-change',
      'header-dragend',
      'expand-change',
    ],
    setup(e) {
      const { t } = it(),
        n = X('table'),
        l = be()
      gt(et, l)
      const o = ed(l, e)
      l.store = o
      const s = new nd({ store: l.store, table: l, fit: e.fit, showHeader: e.showHeader })
      l.layout = s
      const r = $(() => (o.states.data.value || []).length === 0),
        {
          setCurrentRow: u,
          getSelectionRows: a,
          toggleRowSelection: i,
          clearSelection: c,
          clearFilter: v,
          toggleAllSelection: p,
          toggleRowExpansion: g,
          clearSort: d,
          sort: m,
        } = Ed(o),
        {
          isHidden: w,
          renderExpanded: E,
          setDragVisible: b,
          isGroup: h,
          handleMouseLeave: C,
          handleHeaderFooterMousewheel: O,
          tableSize: P,
          emptyBlockStyle: S,
          handleFixedMousewheel: x,
          resizeProxyVisible: I,
          bodyWidth: D,
          resizeState: B,
          doLayout: V,
          tableBodyStyles: Z,
          tableLayout: ee,
          scrollbarViewStyle: fe,
          tableInnerStyle: le,
          scrollbarStyle: ye,
        } = $d(e, s, o, l),
        { scrollBarRef: _, scrollTo: T, setScrollLeft: F, setScrollTop: q } = Md(),
        oe = Nt(V, 50),
        se = `el-table_${xd++}`
      ;(l.tableId = se),
        (l.state = { isGroup: h, resizeState: B, doLayout: V, debouncedUpdateLayout: oe })
      const ve = $(() => e.sumText || t('el.table.sumText')),
        re = $(() => e.emptyText || t('el.table.emptyText'))
      return {
        ns: n,
        layout: s,
        store: o,
        handleHeaderFooterMousewheel: O,
        handleMouseLeave: C,
        tableId: se,
        tableSize: P,
        isHidden: w,
        isEmpty: r,
        renderExpanded: E,
        resizeProxyVisible: I,
        resizeState: B,
        isGroup: h,
        bodyWidth: D,
        tableBodyStyles: Z,
        emptyBlockStyle: S,
        debouncedUpdateLayout: oe,
        handleFixedMousewheel: x,
        setCurrentRow: u,
        getSelectionRows: a,
        toggleRowSelection: i,
        clearSelection: c,
        clearFilter: v,
        toggleAllSelection: p,
        toggleRowExpansion: g,
        clearSort: d,
        doLayout: V,
        sort: m,
        t,
        setDragVisible: b,
        context: l,
        computedSumText: ve,
        computedEmptyText: re,
        tableLayout: ee,
        scrollbarViewStyle: fe,
        tableInnerStyle: le,
        scrollbarStyle: ye,
        scrollBarRef: _,
        scrollTo: T,
        setScrollLeft: F,
        setScrollTop: q,
      }
    },
  }),
  Pd = ['data-prefix'],
  Ad = { ref: 'hiddenColumns', class: 'hidden-columns' }
function Od(e, t, n, l, o, s) {
  const r = we('hColgroup'),
    u = we('table-header'),
    a = we('table-body'),
    i = we('el-scrollbar'),
    c = we('table-footer'),
    v = Yn('mousewheel')
  return (
    M(),
    R(
      'div',
      {
        ref: 'tableWrapper',
        class: N([
          {
            [e.ns.m('fit')]: e.fit,
            [e.ns.m('striped')]: e.stripe,
            [e.ns.m('border')]: e.border || e.isGroup,
            [e.ns.m('hidden')]: e.isHidden,
            [e.ns.m('group')]: e.isGroup,
            [e.ns.m('fluid-height')]: e.maxHeight,
            [e.ns.m('scrollable-x')]: e.layout.scrollX.value,
            [e.ns.m('scrollable-y')]: e.layout.scrollY.value,
            [e.ns.m('enable-row-hover')]: !e.store.states.isComplex.value,
            [e.ns.m('enable-row-transition')]:
              (e.store.states.data.value || []).length !== 0 &&
              (e.store.states.data.value || []).length < 100,
            'has-footer': e.showSummary,
          },
          e.ns.m(e.tableSize),
          e.className,
          e.ns.b(),
          e.ns.m(`layout-${e.tableLayout}`),
        ]),
        style: Ee(e.style),
        'data-prefix': e.ns.namespace.value,
        onMouseleave: t[0] || (t[0] = (p) => e.handleMouseLeave()),
      },
      [
        Q(
          'div',
          { class: N(e.ns.e('inner-wrapper')), style: Ee(e.tableInnerStyle) },
          [
            Q('div', Ad, [ce(e.$slots, 'default')], 512),
            e.showHeader && e.tableLayout === 'fixed'
              ? Re(
                  (M(),
                  R(
                    'div',
                    { key: 0, ref: 'headerWrapper', class: N(e.ns.e('header-wrapper')) },
                    [
                      Q(
                        'table',
                        {
                          ref: 'tableHeader',
                          class: N(e.ns.e('header')),
                          style: Ee(e.tableBodyStyles),
                          border: '0',
                          cellpadding: '0',
                          cellspacing: '0',
                        },
                        [
                          J(
                            r,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout,
                            },
                            null,
                            8,
                            ['columns', 'table-layout'],
                          ),
                          J(
                            u,
                            {
                              ref: 'tableHeaderRef',
                              border: e.border,
                              'default-sort': e.defaultSort,
                              store: e.store,
                              onSetDragVisible: e.setDragVisible,
                            },
                            null,
                            8,
                            ['border', 'default-sort', 'store', 'onSetDragVisible'],
                          ),
                        ],
                        6,
                      ),
                    ],
                    2,
                  )),
                  [[v, e.handleHeaderFooterMousewheel]],
                )
              : U('v-if', !0),
            Q(
              'div',
              { ref: 'bodyWrapper', class: N(e.ns.e('body-wrapper')) },
              [
                J(
                  i,
                  {
                    ref: 'scrollBarRef',
                    'view-style': e.scrollbarViewStyle,
                    'wrap-style': e.scrollbarStyle,
                    always: e.scrollbarAlwaysOn,
                  },
                  {
                    default: j(() => [
                      Q(
                        'table',
                        {
                          ref: 'tableBody',
                          class: N(e.ns.e('body')),
                          cellspacing: '0',
                          cellpadding: '0',
                          border: '0',
                          style: Ee({ width: e.bodyWidth, tableLayout: e.tableLayout }),
                        },
                        [
                          J(
                            r,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout,
                            },
                            null,
                            8,
                            ['columns', 'table-layout'],
                          ),
                          e.showHeader && e.tableLayout === 'auto'
                            ? (M(),
                              Y(
                                u,
                                {
                                  key: 0,
                                  ref: 'tableHeaderRef',
                                  border: e.border,
                                  'default-sort': e.defaultSort,
                                  store: e.store,
                                  onSetDragVisible: e.setDragVisible,
                                },
                                null,
                                8,
                                ['border', 'default-sort', 'store', 'onSetDragVisible'],
                              ))
                            : U('v-if', !0),
                          J(
                            a,
                            {
                              context: e.context,
                              highlight: e.highlightCurrentRow,
                              'row-class-name': e.rowClassName,
                              'tooltip-effect': e.tooltipEffect,
                              'row-style': e.rowStyle,
                              store: e.store,
                              stripe: e.stripe,
                            },
                            null,
                            8,
                            [
                              'context',
                              'highlight',
                              'row-class-name',
                              'tooltip-effect',
                              'row-style',
                              'store',
                              'stripe',
                            ],
                          ),
                        ],
                        6,
                      ),
                      e.isEmpty
                        ? (M(),
                          R(
                            'div',
                            {
                              key: 0,
                              ref: 'emptyBlock',
                              style: Ee(e.emptyBlockStyle),
                              class: N(e.ns.e('empty-block')),
                            },
                            [
                              Q(
                                'span',
                                { class: N(e.ns.e('empty-text')) },
                                [ce(e.$slots, 'empty', {}, () => [st(ie(e.computedEmptyText), 1)])],
                                2,
                              ),
                            ],
                            6,
                          ))
                        : U('v-if', !0),
                      e.$slots.append
                        ? (M(),
                          R(
                            'div',
                            { key: 1, ref: 'appendWrapper', class: N(e.ns.e('append-wrapper')) },
                            [ce(e.$slots, 'append')],
                            2,
                          ))
                        : U('v-if', !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['view-style', 'wrap-style', 'always'],
                ),
              ],
              2,
            ),
            e.showSummary
              ? Re(
                  (M(),
                  R(
                    'div',
                    { key: 1, ref: 'footerWrapper', class: N(e.ns.e('footer-wrapper')) },
                    [
                      J(
                        c,
                        {
                          border: e.border,
                          'default-sort': e.defaultSort,
                          store: e.store,
                          style: Ee(e.tableBodyStyles),
                          'sum-text': e.computedSumText,
                          'summary-method': e.summaryMethod,
                        },
                        null,
                        8,
                        ['border', 'default-sort', 'store', 'style', 'sum-text', 'summary-method'],
                      ),
                    ],
                    2,
                  )),
                  [
                    [Tt, !e.isEmpty],
                    [v, e.handleHeaderFooterMousewheel],
                  ],
                )
              : U('v-if', !0),
            e.border || e.isGroup
              ? (M(), R('div', { key: 2, class: N(e.ns.e('border-left-patch')) }, null, 2))
              : U('v-if', !0),
          ],
          6,
        ),
        Re(Q('div', { ref: 'resizeProxy', class: N(e.ns.e('column-resize-proxy')) }, null, 2), [
          [Tt, e.resizeProxyVisible],
        ]),
      ],
      46,
      Pd,
    )
  )
}
var Id = me(Td, [
  ['render', Od],
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue'],
])
const Ld = { selection: 'table-column--selection', expand: 'table__expand-column' },
  Nd = {
    default: { order: '' },
    selection: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    expand: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    index: { width: 48, minWidth: 48, realWidth: 48, order: '' },
  },
  _d = (e) => Ld[e] || '',
  Rd = {
    selection: {
      renderHeader({ store: e }) {
        function t() {
          return e.states.data.value && e.states.data.value.length === 0
        }
        return W(_t, {
          disabled: t(),
          size: e.states.tableSize.value,
          indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
          'onUpdate:modelValue': e.toggleAllSelection,
          modelValue: e.states.isAllSelected.value,
        })
      },
      renderCell({ row: e, column: t, store: n, $index: l }) {
        return W(_t, {
          disabled: t.selectable ? !t.selectable.call(null, e, l) : !1,
          size: n.states.tableSize.value,
          onChange: () => {
            n.commit('rowSelectedChanged', e)
          },
          onClick: (o) => o.stopPropagation(),
          modelValue: n.isSelected(e),
        })
      },
      sortable: !1,
      resizable: !1,
    },
    index: {
      renderHeader({ column: e }) {
        return e.label || '#'
      },
      renderCell({ column: e, $index: t }) {
        let n = t + 1
        const l = e.index
        return (
          typeof l == 'number' ? (n = t + l) : typeof l == 'function' && (n = l(t)),
          W('div', {}, [n])
        )
      },
      sortable: !1,
    },
    expand: {
      renderHeader({ column: e }) {
        return e.label || ''
      },
      renderCell({ row: e, store: t, expanded: n }) {
        const { ns: l } = t,
          o = [l.e('expand-icon')]
        return (
          n && o.push(l.em('expand-icon', 'expanded')),
          W(
            'div',
            {
              class: o,
              onClick: function (r) {
                r.stopPropagation(), t.toggleRowExpansion(e)
              },
            },
            { default: () => [W(_e, null, { default: () => [W(Cn)] })] },
          )
        )
      },
      sortable: !1,
      resizable: !1,
    },
  }
function zd({ row: e, column: t, $index: n }) {
  var l
  const o = t.property,
    s = o && ya(e, o).value
  return t && t.formatter
    ? t.formatter(e, t, s, n)
    : ((l = s == null ? void 0 : s.toString) == null ? void 0 : l.call(s)) || ''
}
function Fd({ row: e, treeNode: t, store: n }, l = !1) {
  const { ns: o } = n
  if (!t) return l ? [W('span', { class: o.e('placeholder') })] : null
  const s = [],
    r = function (u) {
      u.stopPropagation(), n.loadOrToggle(e)
    }
  if (
    (t.indent &&
      s.push(W('span', { class: o.e('indent'), style: { 'padding-left': `${t.indent}px` } })),
    typeof t.expanded == 'boolean' && !t.noLazyChildren)
  ) {
    const u = [o.e('expand-icon'), t.expanded ? o.em('expand-icon', 'expanded') : '']
    let a = Cn
    t.loading && (a = _a),
      s.push(
        W(
          'div',
          { class: u, onClick: r },
          {
            default: () => [
              W(_e, { class: { [o.is('loading')]: t.loading } }, { default: () => [W(a)] }),
            ],
          },
        ),
      )
  } else s.push(W('span', { class: o.e('placeholder') }))
  return s
}
function Gl(e, t) {
  return e.reduce((n, l) => ((n[l] = l), n), t)
}
function Bd(e, t) {
  const n = be()
  return {
    registerComplexWatchers: () => {
      const s = ['fixed'],
        r = { realWidth: 'width', realMinWidth: 'minWidth' },
        u = Gl(s, r)
      Object.keys(u).forEach((a) => {
        const i = r[a]
        Ut(t, i) &&
          ae(
            () => t[i],
            (c) => {
              let v = c
              i === 'width' && a === 'realWidth' && (v = nl(c)),
                i === 'minWidth' && a === 'realMinWidth' && (v = Vo(c)),
                (n.columnConfig.value[i] = v),
                (n.columnConfig.value[a] = v)
              const p = i === 'fixed'
              e.value.store.scheduleLayout(p)
            },
          )
      })
    },
    registerNormalWatchers: () => {
      const s = [
          'label',
          'filters',
          'filterMultiple',
          'sortable',
          'index',
          'formatter',
          'className',
          'labelClassName',
          'showOverflowTooltip',
        ],
        r = { property: 'prop', align: 'realAlign', headerAlign: 'realHeaderAlign' },
        u = Gl(s, r)
      Object.keys(u).forEach((a) => {
        const i = r[a]
        Ut(t, i) &&
          ae(
            () => t[i],
            (c) => {
              n.columnConfig.value[a] = c
            },
          )
      })
    },
  }
}
function Wd(e, t, n) {
  const l = be(),
    o = A(''),
    s = A(!1),
    r = A(),
    u = A(),
    a = X('table')
  Mt(() => {
    ;(r.value = e.align ? `is-${e.align}` : null), r.value
  }),
    Mt(() => {
      ;(u.value = e.headerAlign ? `is-${e.headerAlign}` : r.value), u.value
    })
  const i = $(() => {
      let h = l.vnode.vParent || l.parent
      for (; h && !h.tableId && !h.columnId; ) h = h.vnode.vParent || h.parent
      return h
    }),
    c = $(() => {
      const { store: h } = l.parent
      if (!h) return !1
      const { treeData: C } = h.states,
        O = C.value
      return O && Object.keys(O).length > 0
    }),
    v = A(nl(e.width)),
    p = A(Vo(e.minWidth)),
    g = (h) => (
      v.value && (h.width = v.value),
      p.value && (h.minWidth = p.value),
      h.minWidth || (h.minWidth = 80),
      (h.realWidth = Number(h.width === void 0 ? h.minWidth : h.width)),
      h
    ),
    d = (h) => {
      const C = h.type,
        O = Rd[C] || {}
      Object.keys(O).forEach((S) => {
        const x = O[S]
        S !== 'className' && x !== void 0 && (h[S] = x)
      })
      const P = _d(C)
      if (P) {
        const S = `${f(a.namespace)}-${P}`
        h.className = h.className ? `${h.className} ${S}` : S
      }
      return h
    },
    m = (h) => {
      Array.isArray(h) ? h.forEach((O) => C(O)) : C(h)
      function C(O) {
        var P
        ;((P = O == null ? void 0 : O.type) == null ? void 0 : P.name) === 'ElTableColumn' &&
          (O.vParent = l)
      }
    }
  return {
    columnId: o,
    realAlign: r,
    isSubColumn: s,
    realHeaderAlign: u,
    columnOrTableParent: i,
    setColumnWidth: g,
    setColumnForcedProps: d,
    setColumnRenders: (h) => {
      e.renderHeader ||
        (h.type !== 'selection' &&
          (h.renderHeader = (P) => {
            l.columnConfig.value.label
            const S = t.header
            return S ? S(P) : h.label
          }))
      let C = h.renderCell
      const O = c.value
      return (
        h.type === 'expand'
          ? ((h.renderCell = (P) => W('div', { class: 'cell' }, [C(P)])),
            (n.value.renderExpanded = (P) => (t.default ? t.default(P) : t.default)))
          : ((C = C || zd),
            (h.renderCell = (P) => {
              let S = null
              if (t.default) {
                const B = t.default(P)
                S = B.some((V) => V.type !== Ca) ? B : C(P)
              } else S = C(P)
              const x = O && P.cellIndex === 0,
                I = Fd(P, x),
                D = { class: 'cell', style: {} }
              return (
                h.showOverflowTooltip &&
                  ((D.class = `${D.class} ${f(a.namespace)}-tooltip`),
                  (D.style = { width: `${(P.column.realWidth || Number(P.column.width)) - 1}px` })),
                m(S),
                W('div', D, [I, S])
              )
            })),
        h
      )
    },
    getPropsData: (...h) =>
      h.reduce(
        (C, O) => (
          Array.isArray(O) &&
            O.forEach((P) => {
              C[P] = e[P]
            }),
          C
        ),
        {},
      ),
    getColumnElIndex: (h, C) => Array.prototype.indexOf.call(h, C),
  }
}
var Hd = {
  type: { type: String, default: 'default' },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: { type: [String, Number], default: '' },
  minWidth: { type: [String, Number], default: '' },
  renderHeader: Function,
  sortable: { type: [Boolean, String], default: !1 },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: { type: Boolean, default: !0 },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: { type: Boolean, default: !0 },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ['ascending', 'descending', null],
    validator: (e) => e.every((t) => ['ascending', 'descending', null].includes(t)),
  },
}
let Dd = 1
var Xo = te({
  name: 'ElTableColumn',
  components: { ElCheckbox: _t },
  props: Hd,
  setup(e, { slots: t }) {
    const n = be(),
      l = A({}),
      o = $(() => {
        let b = n.parent
        for (; b && !b.tableId; ) b = b.parent
        return b
      }),
      { registerNormalWatchers: s, registerComplexWatchers: r } = Bd(o, e),
      {
        columnId: u,
        isSubColumn: a,
        realHeaderAlign: i,
        columnOrTableParent: c,
        setColumnWidth: v,
        setColumnForcedProps: p,
        setColumnRenders: g,
        getPropsData: d,
        getColumnElIndex: m,
        realAlign: w,
      } = Wd(e, t, o),
      E = c.value
    ;(u.value = `${E.tableId || E.columnId}_column_${Dd++}`),
      Jl(() => {
        a.value = o.value !== E
        const b = e.type || 'default',
          h = e.sortable === '' ? !0 : e.sortable,
          C = Se(ue({}, Nd[b]), {
            id: u.value,
            type: b,
            property: e.prop || e.property,
            align: w,
            headerAlign: i,
            showOverflowTooltip: e.showOverflowTooltip || e.showTooltipWhenOverflow,
            filterable: e.filters || e.filterMethod,
            filteredValue: [],
            filterPlacement: '',
            isColumnGroup: !1,
            isSubColumn: !1,
            filterOpened: !1,
            sortable: h,
            index: e.index,
            rawColumnKey: n.vnode.key,
          })
        let I = d(
          [
            'columnKey',
            'label',
            'className',
            'labelClassName',
            'type',
            'renderHeader',
            'formatter',
            'fixed',
            'resizable',
          ],
          ['sortMethod', 'sortBy', 'sortOrders'],
          ['selectable', 'reserveSelection'],
          [
            'filterMethod',
            'filters',
            'filterMultiple',
            'filterOpened',
            'filteredValue',
            'filterPlacement',
          ],
        )
        ;(I = Vc(C, I)), (I = jc(g, v, p)(I)), (l.value = I), s(), r()
      }),
      Je(() => {
        var b
        const h = c.value,
          C = a.value
            ? h.vnode.el.children
            : (b = h.refs.hiddenColumns) == null
            ? void 0
            : b.children,
          O = () => m(C || [], n.vnode.el)
        ;(l.value.getColumnIndex = O),
          O() > -1 &&
            o.value.store.commit('insertColumn', l.value, a.value ? h.columnConfig.value : null)
      }),
      gn(() => {
        o.value.store.commit('removeColumn', l.value, a.value ? E.columnConfig.value : null)
      }),
      (n.columnId = u.value),
      (n.columnConfig = l)
  },
  render() {
    var e, t, n
    try {
      const l =
          (t = (e = this.$slots).default) == null
            ? void 0
            : t.call(e, { row: {}, column: {}, $index: -1 }),
        o = []
      if (Array.isArray(l))
        for (const r of l)
          ((n = r.type) == null ? void 0 : n.name) === 'ElTableColumn' || r.shapeFlag & 2
            ? o.push(r)
            : r.type === xe &&
              Array.isArray(r.children) &&
              r.children.forEach((u) => {
                ;(u == null ? void 0 : u.patchFlag) !== 1024 &&
                  !Xe(u == null ? void 0 : u.children) &&
                  o.push(u)
              })
      return W('div', o)
    } catch (l) {
      return W('div', [])
    }
  },
})
const Vd = bt(Id, { TableColumn: Xo })
Ke(Xo)
const Kd = { class: 'item-content' },
  Qo = te({
    __name: 'ItemContent',
    props: { item: { type: Object, default: () => ({}) } },
    setup(e) {
      const t = e,
        { item: n } = Un(t)
      return (l, o) => {
        const s = we('eli-svg-icon')
        return (
          M(),
          R('div', Kd, [
            J(s, { name: f(n).icon }, null, 8, ['name']),
            Q('span', { class: N(['menu-title', f(n).icon ? 'mglt16' : '']) }, ie(f(n).title), 3),
          ])
        )
      }
    },
  })
const jd = te({
  __name: 'SubMenu',
  props: { submenu: { type: Object, default: () => ({}) } },
  setup(e) {
    return (t, n) => {
      const l = Bo,
        o = Iu,
        s = Lu
      return (
        M(),
        Y(
          s,
          { index: e.submenu.path },
          {
            title: j(() => [J(Qo, { item: e.submenu }, null, 8, ['item'])]),
            default: j(() => [
              J(o, null, {
                default: j(() => [
                  (M(!0),
                  R(
                    xe,
                    null,
                    rt(
                      e.submenu.children,
                      (r) => (
                        M(),
                        Y(
                          l,
                          { index: r.path, key: r.path },
                          {
                            default: j(() => [J(Jo, { menuItem: r }, null, 8, ['menuItem'])]),
                            _: 2,
                          },
                          1032,
                          ['index'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          },
          8,
          ['index'],
        )
      )
    }
  },
})
const qd = te({
  __name: 'MenuItem',
  props: { menuItem: { type: Object, default: () => ({}) } },
  setup(e) {
    return (t, n) => {
      const l = Bo
      return (
        M(),
        Y(
          l,
          { index: e.menuItem.path },
          { default: j(() => [J(Qo, { item: e.menuItem }, null, 8, ['item'])]), _: 1 },
          8,
          ['index'],
        )
      )
    }
  },
})
const Gd = ao(qd, [['__scopeId', 'data-v-ce213d40']]),
  Ud = { key: 0 },
  Yd = { key: 1 },
  Jo = te({
    __name: 'RenderMenu',
    props: { menuItem: { type: Object, default: () => ({}) } },
    setup(e) {
      return (t, n) =>
        e.menuItem.hiddenChildren
          ? (M(), R('div', Ud, [J(Gd, { menuItem: e.menuItem }, null, 8, ['menuItem'])]))
          : (M(), R('div', Yd, [J(jd, { submenu: e.menuItem }, null, 8, ['submenu'])]))
    },
  }),
  Xd = [
    {
      name: 'chart',
      path: '/chart',
      title: '\u56FE\u8868',
      parent: 'root',
      icon: 'menu-charts',
      redirect: '/echart',
      type: 'M',
      children: [
        {
          name: 'chartIndex',
          path: '/echart',
          title: '\u62A5\u8868',
          parent: 'chart',
          icon: '',
          children: [],
          hiddenChildren: !0,
          uniqueId: 3,
          level: 2,
        },
        {
          name: 'chartDetail',
          path: '/echart/detail',
          title: '\u7EDF\u8BA1',
          parent: 'chart',
          icon: '',
          children: [],
          hiddenChildren: !0,
          uniqueId: 3,
          level: 2,
        },
      ],
      hiddenChildren: !1,
      uniqueId: 2,
      level: 1,
    },
    {
      name: 'employ',
      path: '/employ',
      title: '\u804C\u5DE5',
      parent: 'root',
      icon: 'menu-system',
      children: '',
      hiddenChildren: !0,
      uniqueId: 1,
      level: 1,
    },
    {
      name: 'system',
      path: '/system',
      title: '\u7CFB\u7EDF',
      parent: 'root',
      icon: 'menu-home',
      children: null,
      hiddenChildren: !0,
      uniqueId: 3,
      level: 1,
    },
  ],
  Qd = te({
    __name: 'index',
    setup(e) {
      let t = A([])
      t.value = Xd
      const n = to()
      console.log(n)
      const l = $(() => n.getIsCollapse),
        o = (r, u) => {
          console.log(r, u)
        },
        s = (r, u) => {
          console.log(r, u)
        }
      return (r, u) => {
        const a = Ou
        return (
          M(),
          Y(
            a,
            {
              'default-active': '2',
              class: 'el-menu-vertical-demo',
              collapse: f(l),
              onOpen: o,
              onClose: s,
            },
            {
              default: j(() => [
                (M(!0),
                R(
                  xe,
                  null,
                  rt(
                    f(t),
                    (i) => (M(), Y(Jo, { key: i.path, menuItem: i }, null, 8, ['menuItem'])),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
            8,
            ['collapse'],
          )
        )
      }
    },
  })
const Jd = { class: 'common-layout' },
  Zd = { class: 'page-topnav' },
  ef = { class: 'page-content' },
  tf = st(
    ' Copyright \xA9 2013-2022 Eli eli.hero.com All Rights Reserved. \u5907\u6848\u53F7\uFF1A\u5DDDICP\u590715874534\u53F7-1 ',
  ),
  nf = te({
    __name: 'index',
    setup(e) {
      const t = to()
      console.log(t)
      const n = A(1),
        l = yt([])
      return (o, s) => {
        const r = cu,
          u = iu,
          a = Vd,
          i = zc,
          c = we('router-view'),
          v = du,
          p = uu,
          g = ru
        return (
          M(),
          R('div', Jd, [
            J(
              g,
              { class: 'container-style' },
              {
                default: j(() => [
                  J(r, null, { default: j(() => [J(xa)]), _: 1 }),
                  J(g, null, {
                    default: j(() => [
                      J(
                        u,
                        {
                          width: f(t).getIsCollapse ? '64px' : '200px',
                          class: N({
                            'animation-open': !f(t).getIsCollapse,
                            'animation-close': f(t).getIsCollapse,
                          }),
                        },
                        { default: j(() => [J(Qd)]), _: 1 },
                        8,
                        ['width', 'class'],
                      ),
                      J(g, null, {
                        default: j(() => [
                          J(v, null, {
                            default: j(() => [
                              Q('div', Zd, [J(Ta)]),
                              Q('div', ef, [
                                (M(),
                                R(
                                  xe,
                                  null,
                                  rt(32, (d) => Q('h1', { key: d }, ie(d), 1)),
                                  64,
                                )),
                                st(' Main' + ie(n.value) + ie(l) + ' ', 1),
                                J(a, { 'mb-1': '', data: [] }),
                                J(i, { total: 100 }),
                                J(c),
                              ]),
                            ]),
                            _: 1,
                          }),
                          J(p, null, { default: j(() => [tf]), _: 1 }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
            ),
          ])
        )
      }
    },
  })
const bf = ao(nf, [['__scopeId', 'data-v-146b58a7']])
export { bf as default }
