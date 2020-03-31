<template>
  <div class="home">
    <foodlist :goods="goods" v-if="goods.length">
      <Header></Header>
    </foodlist>
  </div>
</template>

<script>
// @ is an alias to /src
import foodlist from '@/components/foodlist/foodlist.vue'
import Header from '@/components/header/header.vue'
// import {
//   openidUrl,
//   sellUrl
// } from '@/constants'
import {
  getGoods
  // getCookie
} from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      goods: []
    }
  },
  created () {
    // var openid = this.$route.query.openid
    // if (typeof openid !== 'undefined') {
    //   var exp = new Date()
    //   exp.setTime(exp.getTime() + 3600 * 1000)// 过期时间60分钟
    //   document.cookie = 'openid=' + openid + ';expires=' + exp.toGMTString()
    // }
    // if (getCookie('openid') == null) {
    //   location.href = openidUrl + '?returnUrl=' + encodeURIComponent(sellUrl + '/#/')
    // }
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo () {
      let selectedGoods = localStorage.getItem('selectedGoods')
      selectedGoods = selectedGoods ? JSON.parse(selectedGoods) : []
      getGoods().then((res) => {
        selectedGoods.forEach((item) => {
          res.forEach((good) => {
            good.foods.forEach((food) => {
              if (food.id === item.id) {
                food.count = item.count
              }
            })
          })
        })
        this.goods = res
      })
    }
  },
  components: {
    foodlist: foodlist,
    Header: Header
  }
}
</script>
