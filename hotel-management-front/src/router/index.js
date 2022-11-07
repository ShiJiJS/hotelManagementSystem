import Vue from 'vue'
import VueRouter from 'vue-router'

const homePage = () => import('../components/homePage.vue')

const loginPage = () => import('../components/loginPage.vue')

const logManagement = () => import('../components/systemManagement/logManagement.vue')
const userManagement = () => import('../components/systemManagement/userManagement.vue')

const checkInReportManagement = () => import('../components/reportManagement/checkInReportManagement.vue')
const checkOutReportManagement = () => import('../components/reportManagement/checkOutReportManagement.vue')
const reservationReportManagement = () => import('../components/reportManagement/reservationReportManagement.vue')
const receiptsReportManagement = () => import('../components/reportManagement/receiptsReportManagement.vue')

const reservationManagement = () => import('../components/guestManagement/reservationManagement.vue')
const checkInManagement = () => import('../components/guestManagement/checkInManagement.vue')
const roomChangeManagement = () => import('../components/guestManagement/roomChangeManagement.vue')
const checkOutManagement = () => import('../components/guestManagement/checkOutManagement.vue')

const guestRoomInformationManagement = () =>import('../components/guestRoomManagement/guestRoomInformationManagement.vue')

const additionalConsumptionManagement = () =>import('../components/consumptionManagement/additionalConsumptionManagement.vue')

const roomTypeManagement = () =>import('../components/basicInfomationManagement/roomTypeManagement.vue')
const floorManagement = () =>import('../components/basicInfomationManagement/floorManagement.vue')
const goodsTypeManagement = () =>import('../components/basicInfomationManagement/goodsTypeManagement.vue')
const goodsManagement = () =>import('../components/basicInfomationManagement/goodsManagement.vue')
const vipManagement = () =>import('../components/basicInfomationManagement/vipManagement.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/loginPage'
  },
  {
    path: '/loginPage',
    component: loginPage,
  },
  {
    path: '/homePage',
    component: homePage,
    children: [
      {
        path: '/userManagement',
        component: userManagement,
      },
      {
        path: '/logManagement',
        component: logManagement,
      },
      {
        path: '/checkInReportManagement',
        component: checkInReportManagement,
      },
      {
        path: '/checkOutReportManagement',
        component: checkOutReportManagement,
      },
      {
        path: '/reservationReportManagement',
        component: reservationReportManagement,
      },
      {
        path: '/receiptsReportManagement',
        component: receiptsReportManagement,
      },
      {
        path: '/reservationManagement',
        component: reservationManagement,
      },
      {
        path: '/checkInManagement',
        component: checkInManagement,
      },
      {
        path: '/roomChangeManagement',
        component: roomChangeManagement,
      },
      {
        path: '/checkOutManagement',
        component: checkOutManagement,
      },
      {
        path: '/guestRoomInformationManagement',
        component: guestRoomInformationManagement,
      },
      {
        path: '/additionalConsumptionManagement',
        component: additionalConsumptionManagement,
      },
      {
        path: '/roomTypeManagement',
        component: roomTypeManagement,
      },
      {
        path: '/floorManagement',
        component: floorManagement,
      },
      {
        path: '/goodsTypeManagement',
        component: goodsTypeManagement,
      },
      {
        path: '/goodsManagement',
        component: goodsManagement,
      },
      {
        path: '/vipManagement',
        component: vipManagement,
      },
    ],
  },
]

const router = new VueRouter({
  routes
})
/*验证Token之前强制跳转*/
router.beforeEach((to, from, next) => {
  // to 将访问哪一个路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数,表示放行
  //   next() 放行 next('/loginPage') 强制跳转
  if (to.path === '/loginPage') return next()
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/loginPage')
  next()
})

export default router
