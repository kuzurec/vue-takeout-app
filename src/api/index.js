import {
  get,
  post,
  getCookie
} from './helpers'

const getGoods = get('/sell/buyer/product/list')
const postOrder = post('/sell/buyer/order/create')
const getDetail = get('/sell/buyer/order/detail')
const postCancel = get('/sell/buyer/order/cancel')

export {
  getGoods,
  getCookie,
  postOrder,
  getDetail,
  postCancel
}
