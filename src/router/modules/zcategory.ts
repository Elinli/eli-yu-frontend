import { AppRouteModule } from '/@/router/constant'

const category: AppRouteModule = {
  path: '/category',
  name: 'Category',
  component: 'Default',
  meta: {
    title: '分类',
  },
  redirect: '/category/index',
  children: [
    {
      path: 'index',
      name: 'index',
      component: 'category/index',
      meta: {
        title: '分类',
        keepAlive: true,
      },
    },
    {
      path: 'edit',
      name: 'Edit',
      component: 'category/Edit',
      meta: {
        title: '编辑',
      },
    },
  ],
}

export default category
