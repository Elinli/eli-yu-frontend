import { d as c, u as p, a as _, o as i, c as u } from './index.b73a18cc.js'
const h = c({
  __name: 'index',
  setup(l) {
    const { currentRoute: o, replace: a } = p(),
      { params: e, query: n } = _(o),
      { path: r, _redirect_type: s = 'path' } = e
    Reflect.deleteProperty(e, '_redirect_type'), Reflect.deleteProperty(e, 'path')
    const t = Array.isArray(r) ? r.join('/') : r
    return (
      a(
        s === 'name'
          ? { name: t, query: n, params: e }
          : { path: t.startsWith('/') ? t : '/' + t, query: n },
      ),
      (d, m) => (i(), u('div'))
    )
  },
})
export { h as default }
