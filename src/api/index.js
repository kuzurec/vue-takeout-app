import { get } from './helpers'

const getGoods = get('/api/goods')
const getSeller = get('api/seller')

export {
  getGoods,
  getSeller
}
