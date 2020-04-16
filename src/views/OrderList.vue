<template>
  <div class="scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :data="orderlist"
      :options="options"
      @pulling-up="onPullingUp">
      <ul>
        <li v-for="item in orderlist" :key="item.orderId" class="border-bottom order-item" @click="handleItemClick(item.orderId)">
          <p class="order-time">{{item.updateTime | time}}</p>
          <p class="order-amount">{{"总价: ￥"+item.orderAmount}}</p>
          <p class="order-status">{{item.orderStatus | orderStatusName(item.payStatus)}}</p>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import { getList, getCookie } from '@/api'
export default {
  name: 'OrderList',
  data () {
    return {
      orderlist: []
    }
  },
  computed: {
    options () {
      return {
        pullUpLoad: true,
        scrollbar: true
      }
    }
  },
  methods: {
    handleItemClick (value) {
      // console.log(value)
      this.$router.push({ name: 'OrderDetail', params: { orderId: value } })
    },
    onPullingUp () {
      // console.log('onPullingUp')
      setTimeout(() => {
        if (Math.random() > 50) {
          // 如果有新数据
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  },
  created () {
    getList({
      openid: getCookie('openid'),
      page: 0,
      size: 100
    }).then((res) => {
      this.orderlist = res.map((item) => {
        return {
          orderId: item.orderId,
          orderAmount: item.orderAmount,
          orderStatus: item.orderStatus,
          payStatus: item.payStatus,
          createTime: item.createTime,
          updateTime: item.updateTime
        }
      })
    })
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
  }
}
</script>

<style lang='stylus' scoped>
.scroll-list-wrap
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%
.order-item
  position relative
  height 55px
  margin 20px 30px
  color #555
  .order-amount
    position absolute
    bottom 0
  .order-status
    position absolute
    right 0
    top 0
</style>
