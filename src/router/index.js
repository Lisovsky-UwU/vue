import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/MainPageView'),
  },
  {
    path: '/lk',
    component: () => import('@/views/LkView'),
    children: [
      {
        path: '',
        component: () => import('@/views/lk/MainView')
      },
      {
        path: 'create-entry',
        component: () => import('@/views/lk/CreateEntryView')
      },
      {
        path: 'coach-support',
        component: () => import('@/views/lk/CoachSupportView')
      },
      {
        path: 'support',
        component: () => import('@/views/lk/SupportView')
      },
      {
        path: 'profile-settings',
        component: () => import('@/views/lk/ProfileSettingsView')
      }, 
      {
        path: 'students-chat',
        component: () => import('@/views/lk/StudentsChat')
      },
      {
        path: 'student-list',
        component: () => import('@/views/lk/StudentList'),
        children: [
          {
            path: '',
            component: () => import('@/views/lk/StudentListSelectDay'),
          },
          {
            path: ':weekday',
            component: () => import('@/views/lk/StudentListDay'),
            props: true,
          },
        ]
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
