import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Palace from '@/page/palace/palace'
import WinterOne from '@/page/winterOne/winterOne'
import Oneday from '@/page/oneday/oneday.vue'
import Hotspring from '@/page/hotspring/hotspring.vue'
import Order from '@/page/order/order.vue'
import Identity from '@/page/order/identity.vue'
import HongKong from '@/page/hongkong/hongkong.vue'
import Reserve from '@/page/reserve/reserve.vue'
import Skiing from '@/page/skiing/skiing.vue'
import Search from '@/page/search/search.vue'
import Acount from '@/page/acount/disacount.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },
  { path: '/oneday',
    name: 'oneday',
    component: Oneday
  },
  { path: '/hotspring',
    name: 'hotspring',
    component: Hotspring
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/identity',
    name: 'Identity',
    component: Identity
  },
  {
    path: '/hongkong',
    name: 'hongkong',
    component: HongKong
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: Reserve
  },
  {
    path: '/skiing',
    name: 'skiing',
    component: Skiing
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/palace',
    name: 'palace',
    component: Palace
  },
  {
    path: '/winterOne',
    name: 'winterOne',
    component: WinterOne
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/acount',
    name: 'acount',
    component: Acount
  }]
})
