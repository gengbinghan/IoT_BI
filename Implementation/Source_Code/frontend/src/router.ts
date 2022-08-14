import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
  
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { hidden: true, title: 'Login', }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          meta: {
            title: 'Dashboard',
            icon: 'dashboard',
          },
        },
        {
          path: 'addDashboard',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/addDashboard/index.vue'),
          meta: {
            title: 'add Dashboard',
            icon: 'tree'
          }
        },
      ]
    },
    {
      path: '/data',
      component: Layout,
      meta: {
        title: 'equipment',
        icon: 'equipment'
      },
      children: [
        {
          path: 'info',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/data/dataInfo.vue'),
          meta: {
            title: 'Data info',
            icon: 'list'
          }
        },
      ]
    },
    {
      path: '/equipment',
      component: Layout,
      redirect: '/equipment/list',
      meta: {
        title: 'equipment',
        icon: 'equipment'
      },
      children: [
        {
          path: 'list',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/equipment/index.vue'),
          meta: {
            title: 'Equipment',
            icon: 'list'
          }
        },
      ]
    },

    {
      path: '/fingerMark',
      component: Layout,
      redirect: '/fingerMark/list',
      meta: {
        title: 'Indicator',
        icon: 'fingerMark'
      },
      children: [
        {
          path: 'list',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/fingerMark/index.vue'),
          meta: {
            title: 'Indicator list',
            icon: 'list'
          }
        },
      ]
    },

    {
      path: '/alarmLog',
      component: Layout,
      redirect: '/alarmLog/list',
      meta: {
        title: 'Alarm log',
        icon: 'alarmLog'
      },
      children: [
        {
          path: 'list',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/alarmLog/index.vue'),
          meta: {
            title: 'Alarm list',
            icon: 'list'
          }
        },
      ]
    },

    {
      path: '/alarmManage',
      component: Layout,
      redirect: '/alarmManage/list',
      meta: {
        title: 'Alarm manage',
        icon: 'alarmManage'
      },
      children: [
        {
          path: 'list',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/alarmManage/index.vue'),
          meta: {
            title: 'Alarm manage',
            icon: 'list'
          }
        },
      ]
    },

    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})
