import { u as i, _ as r } from './UserInfo.vue_vue_type_style_index_0_lang.f9423c2d.js'
import { _ as l } from './Search.vue_vue_type_script_setup_true_lang.9e00e96b.js'
import { _ as p } from './Fullscreen.vue_vue_type_script_setup_true_lang.61e1eb2e.js'
import { _ as m } from './Language.vue_vue_type_script_setup_true_lang.011767d8.js'
import {
  d,
  k as u,
  o as f,
  c as g,
  b as _,
  f as e,
  i as o,
  e as h,
  g as v,
} from './index.3ffc5a30.js'
const x = { class: 'header-content' },
  C = { class: 'logo' },
  k = h(' \xA0 '),
  $ = { class: 'operation-area' },
  I = d({
    __name: 'Header',
    setup(B) {
      const t = i(),
        s = u({
          get: () => t.getIsCollapse,
          set: (a) => {
            t.setIsCollapse(a)
          },
        })
      function c() {
        s.value = !s.value
      }
      return (a, N) => {
        const n = v('eli-svg-icon')
        return (
          f(),
          g('div', x, [
            _('div', C, [
              e(n, { name: 'logo', width: '120px', height: '28px' }),
              k,
              e(
                n,
                {
                  onClick: c,
                  name: o(s) ? 'menu-fold' : 'menu-unfold',
                  width: '20px',
                  height: '20px',
                },
                null,
                8,
                ['name'],
              ),
            ]),
            _('div', $, [e(o(l)), e(o(p)), e(o(m)), e(o(r))]),
          ])
        )
      }
    },
  })
export { I as _ }
