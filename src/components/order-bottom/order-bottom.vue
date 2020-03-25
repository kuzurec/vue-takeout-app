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
export default {
  name: 'orderBottom',
  props: {
    totalPrice: Number,
    orderlist: Array
  },
  methods: {
    handleConfirmClick () {
      this.$router.push({ name: 'OrderDetail', params: { orderlist: this.orderlist } })
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
