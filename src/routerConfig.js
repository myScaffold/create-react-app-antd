// import { createBrowserHistory } from 'history'

import Overview from '@/pages/Overview'
import Goods from '@/pages/Goods'

// export const histort = createBrowserHistory()

const routeList = [
  {
    name: '概览',
    path: '/overview',
    component: Overview,
  },
  {
    name: '商品管理',
    path: '/goods',
    component: Goods,
  },
  {
    name: '订单管理',
    path: '/order',
    component: Overview,
  },
  {
    name: '运费模版管理',
    path: '/freightTemplate',
    component: Overview,
  },
  {
    name: '发货地址管理',
    path: '/sendGoodAddress',
    component: Overview,
  },
]
export default routeList
