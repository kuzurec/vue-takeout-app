<template>
  <div class="orderlist-wrapper border-bottom">
    <ul class="orderlist">
      <li v-for="food in showlist" :key="food.name">
        <div class="food-item">
          <img :src="food.icon" alt="">
          <div class="food-center">
            <p class="food-name">{{food.name}}</p>
            <div class="food-count">{{'x'+food.count}}</div>
          </div>
          <div class="food-price">{{'￥'+food.count*food.price}}</div>
        </div>
      </li>
    </ul>
    <div class="open-more" v-if="!opened&&this.foodNumber>3" @click="handleOpenClick">
      展开更多
      <span class="iconfont">&#xe60d;</span>
    </div>
    <div class="close" v-if="opened" @click="handleCloseClick">
      点击收起
      <span class="iconfont">&#xe6a2;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderList',
  props: {
    orderlist: Array
  },
  data () {
    return {
      opened: false
    }
  },
  computed: {
    showlist () {
      if (this.foodNumber > 3 && !this.opened) {
        return this.orderlist.slice(0, 3)
      }
      return this.orderlist
    },
    foodNumber () {
      return this.orderlist.length
    }
  },
  methods: {
    handleOpenClick () {
      this.opened = !this.opened
    },
    handleCloseClick () {
      this.opened = !this.opened
    }
  }
}
</script>

<style lang='stylus' scoped>
.orderlist-wrapper
  display flow-root
  margin 0 40px
  .orderlist
    padding 20px 0
    padding-bottom 0
    .food-item
      display flex
      margin-bottom 20px
      img
        width 55px
        height 55px
        border-radius 5px
        margin-right 20px
      .food-center
        flex 1
        position relative
        .food-name
          position absolute
          top 0
        .food-count
          position absolute
          bottom 0
      .food-price
        flex 0 0 auto
        font-weight 550
  .open-more, .close
    text-align center
    font-size 14px
    color gray
    margin-bottom 20px
</style>
