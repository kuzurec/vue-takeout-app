<template>
  <div class="order-bottom">
    <div class="totalprice-wrapper">
      <p class="price-title">
        订单总金额
      </p>
      <p class="price">{{totalPrice+"元"}}</p>
    </div>
    <div class="confirm-order" @click="handleConfirmClick">
      确认下单
    </div>
  </div>
</template>

<script>
import { postOrder, getCookie } from '@/api'
import { sellUrl } from '@/constants'
export default {
  name: 'orderBottom',
  props: {
    totalPrice: Number,
    orderlist: Array,
    tableNumber: Number
  },
  methods: {
    handleConfirmClick () {
      const foods = this.orderlist.map((item) => (
        { productId: item.id, productQuantity: item.count }
      ))
      postOrder({
        tablenumber: this.tableNumber,
        openid: getCookie('openid'),
        items: JSON.stringify(foods)
      }).then((res) => {
        // this.$router.push({ name: 'OrderDetail', params: { orderId: res.orderId } })
        location.href = sellUrl + '/order/' + res.orderId
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/varible.styl'
.order-bottom
  text-align center
  .totalprice-wrapper
    position relative
    top 40px
    margin-bottom 100px
    .price
      margin-top 20px
      font-weight 550
  .confirm-order
    position fixed
    bottom 30px
    width 50%
    margin 0 25%
    border-radius 70px
    height 50px
    line-height 50px
    color #fff
    background-image: linear-gradient(to bottom right, orange , $themeColor)
    box-shadow 0.5px 0.5px 10px gray
</style>
