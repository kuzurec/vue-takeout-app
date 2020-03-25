<template>
  <div class="order">
    <order-header></order-header>
    <order-list :orderlist="orderlist" v-if="orderlist"></order-list>
    <order-bottom :totalPrice="totalPrice" :orderlist="orderlist"></order-bottom>
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
      orderlist: this.$route.params.selectedList
    }
  },
  created () {
    console.log(this.orderlist)
    if (this.orderlist === undefined) {
      this.$router.push({ path: '/' })
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
