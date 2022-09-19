import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { AppRouteModule } from './constant'
import { dynamicImportRoutes } from './util'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

const routeModuleList: AppRouteModule[] = []

Object.keys(modules).forEach((key) => {
  const module: any = modules[key]
  const mod = module.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})
console.log(routeModuleList)

const basicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: 'login/index',
    meta: {
      title: 'routes.basic.login',
    },
    redirect: '',
  },

  {
    path: '/',
    name: 'Index',
    component: 'layouts/index',
    meta: {
      title: 'routes.basic.home',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: 'home/index',
        meta: {
          orderNo: 500,
          icon: 'ion:bar-chart-outline',
          title: 'routes.demo.charts.charts',
        },
      },

      ...routeModuleList,
    ],
  },
]
console.log(1)

dynamicImportRoutes(basicRoutes)
console.log(2)

console.log(basicRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
