<template>
  <div class="home">
    <seller-header :seller="seller" v-if="seller"></seller-header>
    <foodlist :goods="goods" v-if="goods.length">
    </foodlist>
  </div>
</template>

<script>
// @ is an alias to /src
import foodlist from '@/components/foodlist.vue'
import sellerHeader from '@/components/header.vue'
import {
  getGoods,
  getSeller
} from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      goods: [],
      seller: {}
    }
  },
  created () {
    this.getGoodsInfo()
    this.getSellersInfo()
  },
  methods: {
    getGoodsInfo () {
      getGoods().then((res) => {
        this.goods = res
      })
    },
    getSellersInfo () {
      getSeller().then((res) => {
        this.seller = res
      })
    }
  },
  components: {
    foodlist: foodlist,
    sellerHeader: sellerHeader
  }
}
</script>
