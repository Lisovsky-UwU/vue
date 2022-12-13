import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lk',
    component: () => import('@/views/LkView'),
    children: [
      {
        path: '',
        component: () => import('@/views/MainView')
      },
      {
        path: 'create-entry',
        component: () => import('@/views/CreateEntryView')
      },
      {
        path: 'coach-support',
        component: () => import('@/views/CoachSupportView')
      },
      {
        path: 'support',
        component: () => import('@/views/SupportView')
      },
      {
        path: 'profile-settings',
        component: () => import('@/views/ProfileSettingsView')
      }, 
    ],
  },
  // {
  //   path: '/',
  //   component: () => import('@/views/MainView')
  // },
  // {
  //   path: '/create-entry',
  //   component: () => import('@/views/CreateEntryView')
  // },
  // {
  //   path: '/coach-support',
  //   component: () => import('@/views/CoachSupportView')
  // },
  // {
  //   path: '/support',
  //   component: () => import('@/views/SupportView')
  // },
  // {
  //   path: '/profile-settings',
  //   component: () => import('@/views/ProfileSettingsView')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
