import Vue from 'vue'
import VueRouter from 'vue-router'

//파일만든거 임포트
import DefaultLayout from '@/layouts/default/Index'
import Breakpoints from '@/views/Breakpoints'
import Buttons from '@/views/Buttons'
import DashBoard from '@/views/DashBoard'
import Forms from '@/views/Forms'
import GridListPage from '@/views/GridListPage'
import GridSystem from '@/views/GridSystem'
import Icons from '@/views/Icons'
import Tables from '@/views/Tables'
import Typography from '@/views/Typography'

import AuthenticationLayout from '@/layouts/authentication/Index'
import pageLayout from '@/layouts/page/Index'

import SignIn from '@/views/authentication/SignIn'
import SignUp from '@/views/authentication/SignUp'
import ProductList from '@/views/page/ProductList'


Vue.use(VueRouter)

const routes = [//라우츠 변수 설정
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',//루트페이지 요청하면
        name: 'DashBoard',//대쉬보드 페이지 불러오자
        component: DashBoard
      },
      {
        path: '/GridSystem',
        name: 'Grid System',
        component: GridSystem
      },
      {
        path: '/GridListPage',
        name: 'Grid List Page',
        component: GridListPage
      },
      {
        path: '/Breakpoints',
        name: 'Breakpoints',
        component: Breakpoints
      },
      {
        path: '/Typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: '/Tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: '/Forms',
        name: 'Forms',
        component: Forms
      },
      {
        path: '/Buttons',
        name: 'Buttons',
        component: Buttons
      },
      {
        path: '/Icons',
        name: 'Icons',
        component: Icons
      },
    ]
  },

  //회원가입
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp
      },
    ]
  },

  //제품 리스트
  {
    path: '/page',
    component: pageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
