import {
  d as n,
  o as s,
  c as a,
  f as c,
  w as u,
  F as r,
  b as _,
  e as i,
  u as l,
} from './index.3ffc5a30.js'
import { E as m } from './el-button.cb508bf4.js'
import './index.c56c571a.js'
import './icon.d7f7cba2.js'
const d = _('div', null, 'account', -1),
  p = i('\u5730\u78C1\u573A\u9519\u9519'),
  N = n({
    __name: 'index',
    setup(f) {
      const t = l()
      function e() {
        t.push('/system/account_detail/1')
      }
      return (h, x) => {
        const o = m
        return s(), a(r, null, [d, c(o, { onClick: e }, { default: u(() => [p]), _: 1 })], 64)
      }
    },
  })
export { N as default }
