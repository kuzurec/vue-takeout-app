<template>
  <div class="order-detail" v-if="Object.keys(order).length>0">
    <div class="detail-header">
      <p class="tip">{{order.orderStatus | orderStatusName(order.payStatus)}}</p>
      <p class="cancelBtn" v-show="!order.orderStatus" @click="handleCancelBtn(order.orderId)">{{cancelText}}</p>
      <div class="tablemsg border-bottom">
        <p class="left-title">
          <span class="iconfont tableicon">&#xe613;</span>
          座位
        </p>
        <p class="right-value" v-if="tableNumber!=undefined">{{tableNumber+"号桌"}}</p>
      </div>
    </div>
    <order-list :orderlist="foodlist" v-if="foodlist"></order-list>
    <div class="order-msg">
      <div class="line border-bottom">
        <div class="price">{{'合计￥'+order.orderAmount}}</div>
      </div>
      <div class="line border-bottom">
        <p class="left-title">
          订单号码
        </p>
        <p class="right-value">{{order.orderId}}</p>
      </div>
      <div class="line border-bottom">
        <p class="left-title">
          下单时间
        </p>
        <p class="right-value">{{order.createTime | time}}</p>
      </div>
    </div>
    <div class="pay-order" v-show="!order.payStatus" @click="handlePayBtnClick((order.orderId))">
      微信支付
    </div>
  </div>
</template>

<script>
import orderList from '../components/order-list/order-list.vue'
import { getDetail, postCancel, getCookie } from '@/api'
import { wechatPayUrl, sellUrl } from '@/constants'
export default {
  name: 'OrderDetail',
  data () {
    return {
      order: {},
      tableNumber: 1,
      orderDetailList: [],
      foodlist: [],
      cancelText: '取消订单'
    }
  },
  created () {
    getDetail({
      openid: getCookie('openid'),
      orderId: this.$route.params.orderId
    }).then((res) => {
      this.order = res
      this.tableNumber = this.order.tableNumber
      this.orderDetailList = res.orderDetailList
      this.foodlist = this.orderDetailList.map((item) => {
        return {
          name: item.productName,
          price: item.productPrice,
          count: item.productQuantity,
          icon: item.productIcon
        }
      })
    })
  },
  methods: {
    handleCancelBtn (orderId) {
      this.cancelText = '取消中...'
      postCancel({
        openid: getCookie('openid'),
        orderId: orderId
      }).then((res) => {
        location.reload()
      })
    },
    handlePayBtnClick (orderId) {
      location.href = wechatPayUrl +
      '?openid=' + 'oTgZpwSy_sQjDABm488bVw6AMnDY' +
      '&orderId=' + orderId +
      '&returnUrl=' + sellUrl + '/order/' + orderId
      localStorage.setItem('selectedGoods', '[]')
    }
  },
  filters: {
    time (value) {
      const date = new Date(value * 1000)
      return date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    },
    orderStatusName (value1, value2) {
      if (value1 === 0 && value2 === 0) {
        return '新订单/待支付'
      } else if (value1 === 0 && value2 === 1) {
        return '新订单/已支付'
      } else if (value1 === 1) {
        return '订单已完结'
      } else if (value1 === 2) {
        return '订单已取消'
      } else {
        return ''
      }
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
