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
import {
  getGoods
} from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo () {
      getGoods().then((res) => {
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
