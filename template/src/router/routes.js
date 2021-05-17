import layout from '@/layout'

// system级别通用路由，无需包裹在layout中
const systemRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/system-page/login')
  },
  {
    path: '/401',
    name: 'page-401',
    component: () => import('@/system-page/page-401.vue')
  },
  {
    path: '/404',
    name: 'page-404',
    component: () => import('@/system-page/page-404.vue')
  },
  {
    path: '/500',
    name: 'page-500',
    component: () => import('@/system-page/page-500.vue')
  }
]

// 业务级别路由
// 根节点component为layout
// 叶子节点component为具体业务组件
// 其余节点component为parent-view用以传递router-view
const serviceRoutes = [
  {
    path: '/home',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { title: '主页' }
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: layout,
    children: [
      {
        path: 'list',
        name: 'demoList',
        component: () => import('@/views/demo/list'),
        meta: { title: '业务模块列表' }
      },
      {
        path: 'detail',
        name: 'demoDetail',
        component: () => import('@/views/demo/detail'),
        meta: { title: '业务模块详情' }
      }
    ]
  }
]
const routes = [
  ...systemRoutes,
  ...serviceRoutes,
  {
    path: '*',
    redirect: '/404'
  }
]

export default routes