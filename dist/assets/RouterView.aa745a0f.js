import { _ as n } from './_plugin-vue_export-helper.cdc0426e.js'
import {
  o as e,
  c as l,
  f as i,
  w as u,
  C as t,
  D as a,
  G as s,
  ar as m,
  g as _,
} from './index.3ffc5a30.js'
const p = {},
  f = { class: 'router-view' }
function v(o, d) {
  const c = _('router-view', !0)
  return (
    e(),
    l('div', f, [
      i(c, null, {
        default: u(({ Component: r }) => [
          (e(),
          t(m, null, [o.$route.meta.keepAlive ? (e(), t(a(r), { key: 0 })) : s('', !0)], 1024)),
          o.$route.meta.keepAlive ? s('', !0) : (e(), t(a(r), { key: 0 })),
        ]),
        _: 1,
      }),
    ])
  )
}
const C = n(p, [['render', v]])
export { C as default }
