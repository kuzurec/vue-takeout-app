<template>
  <div class="order-detail">
    <div class="detail-header">
      <p class="tip">已完成</p>
      <!-- <p class="cancelBtn">取消订单</p> -->
      <div class="tablemsg border-bottom">
        <p class="left-title">
          <span class="iconfont tableicon">&#xe613;</span>
          座位
        </p>
        <p class="right-value">2号桌</p>
      </div>
    </div>
    <order-list :orderlist="orderlist" v-if="orderlist"></order-list>
    <div class="order-msg">
      <div class="line border-bottom">
        <div class="price">{{'合计￥'+totalPrice}}</div>
      </div>
      <div class="line border-bottom">
        <p class="left-title">
          订单号码
        </p>
        <p class="right-value">3829 3332 2323 2233 3</p>
      </div>
      <div class="line border-bottom">
        <p class="left-title">
          下单时间
        </p>
        <p class="right-value">2020-3-22 18:20</p>
      </div>
    </div>
    <!-- <div class="pay-order">
      微信支付
    </div> -->
  </div>
</template>

<script>
import orderList from '../components/order-list/order-list.vue'
export default {
  name: 'OrderDetail',
  data () {
    return {
      orderlist: this.$route.params.orderlist
    }
  },
  computed: {
    totalPrice () {
      let price = 0
      if (this.orderlist) {
        this.orderlist.forEach((food) => {
          price += food.price * food.count
        })
      }
      return price
    }
  },
  components: {
    orderList: orderList
  }
}
</script>

<style lang='stylus' scoped>
.detail-header
  height 120px
  margin 0 40px
  position relative
  .tip
    font-size 24px
    font-weight 550
    margin 20px 0
  .cancelBtn
    border 1px solid gray
    width 66px
    text-align center
    padding 2px
    border-radius 10px
    color gray
    font-size 14px
    position absolute
    top 5px
    right 0
  .tablemsg
    position relative
    height 50px
    display flex
.left-title
  line-height 50px
  color gray
  .tableicon
    color orange
.right-value
  position absolute
  right 5px
  line-height 50px
.line
  height 50px
  position relative
  margin 0 40px
  display flex
  .price
    line-height 50px
    position absolute
    right 0
.order-msg
  margin-bottom 100px
.pay-order
  position fixed
  bottom 30px
  width 40%
  margin 0 30%
  border-radius 70px
  height 50px
  line-height 50px
  color #fff
  background #3cb034
  box-shadow 0.5px 0.5px 10px gray
  text-align center
</style>
