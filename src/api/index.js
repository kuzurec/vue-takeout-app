import {
  get,
  post,
  getCookie
} from './helpers'

const getGoods = get('/sell/buyer/product/list')
const postOrder = post('/sell/buyer/order/create')
const getDetail = get('/sell/buyer/order/detail')
const postCancel = post('/sell/buyer/order/cancel')
const getList = get('/sell/buyer/order/list')

export {
  getGoods,
  getCookie,
  postOrder,
  getDetail,
  postCancel,
  getList
}
