import {
  o,
  c as t,
  b as e,
  d as h,
  f as i,
  F as u,
  ai as m,
  e as v,
  t as g,
  a6 as f,
} from './index.3ffc5a30.js'
const x = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  C = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z',
    },
    null,
    -1,
  ),
  $ = [C]
function k(_, n) {
  return o(), t('svg', x, $)
}
const w = { name: 'ep-arrow-right-bold', render: k },
  B = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  L = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
    },
    null,
    -1,
  ),
  M = [L]
function b(_, n) {
  return o(), t('svg', B, M)
}
const N = { name: 'ep-close', render: b },
  y = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  z = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z',
    },
    null,
    -1,
  ),
  A = [z]
function R(_, n) {
  return o(), t('svg', y, A)
}
const T = { name: 'ep-arrow-left-bold', render: R },
  V = { class: 'topbar-nav' },
  Y = { class: 'icon left' },
  F = { class: 'bar-box' },
  I = ['onClick'],
  D = ['onClick'],
  E = { class: 'icon right' },
  q = h({
    __name: 'TopBarNav',
    setup(_) {
      function n(s) {
        console.log('onClickClose', s)
      }
      function a(s) {
        console.log('onClickBarItem', s)
      }
      return (s, S) => {
        const r = T,
          l = N,
          d = w
        return (
          o(),
          t('div', V, [
            e('div', Y, [i(r)]),
            e('div', F, [
              (o(),
              t(
                u,
                null,
                m(12, (c) =>
                  e(
                    'div',
                    { class: 'bar-item', key: c, onClick: (p) => a(c) },
                    [
                      v(g(c) + ' ', 1),
                      e(
                        'div',
                        { class: 'icon close', onClick: f((p) => n(c), ['stop']) },
                        [i(l)],
                        8,
                        D,
                      ),
                    ],
                    8,
                    I,
                  ),
                ),
                64,
              )),
            ]),
            e('div', E, [i(d)]),
          ])
        )
      }
    },
  })
export { q as _ }
