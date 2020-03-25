<template>
  <div class="orderlist">
    <ul>
      <li v-for="item in orderlist" :key="item.orderId" class="border-bottom order-item" @click="handleItemClick">
        <p class="order-time">{{"下单时间: "+"2020-03-20 17:36"}}</p>
        <p class="order-amount">{{"总价: ￥"+item.orderAmount}}</p>
        <p class="order-status">已完成</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      orderlist: [{
        orderId: '161873371171128075',
        orderAmount: 119,
        orderStatus: 1,
        payStatus: 0,
        createTime: 1490171219,
        updateTime: 1490171219
      },
      {
        orderId: '1618733711711280888',
        orderAmount: 66,
        orderStatus: 0,
        payStatus: 0,
        createTime: 1490171219,
        updateTime: 1490171219
      },
      {
        orderId: '1618733711711280889',
        orderAmount: 68,
        orderStatus: 0,
        payStatus: 0,
        createTime: 1490171219,
        updateTime: 1490171219
      },
      {
        orderId: '1618733711711280822',
        orderAmount: 68,
        orderStatus: 0,
        payStatus: 0,
        createTime: 1490171219,
        updateTime: 1490171219
      },
      {
        orderId: '1618733711711280845',
        orderAmount: 68,
        orderStatus: 0,
        payStatus: 0,
        createTime: 1490171219,
        updateTime: 1490171219
      },
      {
        orderId: '1618733711711280822',
        orderAmount: 68,
        orderStatus: 0,
        payStatus: 0,
        createTime: 1490171219,
        updateTime: 1490171219
      }]
    }
  },
  methods: {
    handleItemClick () {
      this.$router.push({ name: 'OrderDetail' })
    }
  }
}
</script>

<style lang='stylus' scoped>
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
