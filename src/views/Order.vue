<template>
  <div class="order" v-if="orderlist.length>0">
    <order-header @changeTableNumber="changeTableNumber"></order-header>
    <order-list :orderlist="orderlist"></order-list>
    <order-bottom :totalPrice="totalPrice" :orderlist="orderlist" :tableNumber="tableNumber"></order-bottom>
  </div>
</template>

<script>
import orderHeader from '../components/order-header/order-header.vue'
import orderList from '../components/order-list/order-list.vue'
import orderBottom from '../components/order-bottom/order-bottom.vue'
export default {
  name: 'Order',
  data () {
    return {
      orderlist: localStorage.getItem('selectedGoods') ? JSON.parse(localStorage.getItem('selectedGoods')) : [],
      tableNumber: 1
    }
  },
  methods: {
    changeTableNumber (value) {
      this.tableNumber = value
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
    orderHeader: orderHeader,
    orderList: orderList,
    orderBottom: orderBottom
  }
}
</script>
