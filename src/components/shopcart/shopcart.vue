<template>
  <div>
    <div class="shopcart">
      <div class="leftcart" @click="toggleList">
        <div class="iconwrapper" :class="{'invalid': totalCount===0}">
          <div class="iconfont carticon">&#xe615;</div>
          <div class="countIcon" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <p class="totalprice" v-show="totalCount>0">{{'￥'+totalPrice}}</p>
        <p class="tip" v-show="totalCount===0">购物车还是空的~</p>
      </div>
      <div class="pay" :class="{'invalid': totalCount===0}" @click.stop="handleClickPay">点好了</div>
    </div>
    <transition name="fold">
      <div class="cartlist-wrapper" v-if="showlist">
        <div class="list-head border-bottom">
          <p class="head-left">已选商品</p>
          <div class="head-right" @click="clearall">
            <div class="iconfont">
              &#xe619;
            </div>
            清空购物车
          </div>
        </div>
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="selectedFoods"
          >
            <ul>
              <li class="fooditem border-bottom" v-for="food in selectedFoods" :key="food.name">
                <img :src="food.icon">
                <div>
                  <p class="name">{{food.name}}</p>
                  <p class="price">{{'￥'+food.price}}</p>
                </div>
                <cartcontrol class="cartcontrol" :food="food" @hidelist="hidelist" :totalCount="totalCount"></cartcontrol>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="backdrop" v-show="showlist" @click="toggleList"></div>
    </transition>
  </div>
</template>

<script>
import cartcontrol from '../cartcontrol/cartcontrol.vue'
export default {
  name: 'shopcart',
  props: {
    selectedFoods: Array,
    totalPrice: Number,
    totalCount: Number
  },
  data () {
    return {
      showlist: false
    }
  },
  methods: {
    toggleList () {
      if (this.totalCount === 0) {
        return
      }
      this.showlist = !this.showlist
    },
    clearall () {
      this.selectedFoods.forEach((food) => {
        food.count = 0
      })
      this.showlist = false
    },
    hidelist () {
      this.showlist = false
    },
    handleClickPay () {
      if (this.totalCount === 0) {
        return
      }
      this.$router.push({ path: '/order' })
    }
  },
  components: {
    cartcontrol: cartcontrol
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varible.styl'

.shopcart
  position fixed
  height 60px
  width 100%
  background #444
  bottom 0
  z-index 99
  display flex
  .leftcart
    flex 1
    display flex
    .totalprice
      color #fff
      position relative
      left 40px
      line-height 60px
      font-size 24px
    .tip
      color #aaa
      line-height 60px
      position relative
      left 40px
      font-size 14px
    .iconwrapper
      width 55px
      height 55px
      border-radius 50%
      background $themeColor
      position relative
      left 23px
      bottom 12px
      .countIcon
        background red
        width 16px
        height 16px
        border-radius 50%
        color #fff
        font-size 12px
        text-align center
        line-height 16px
        position absolute
        right 0
      .carticon
        font-size 30px
        color #fff
        position absolute
        top 10px
        left 10px
    .invalid
      background #aaa
  .pay
    flex  0 0 108px
    background $themeColor
    height 60px
    color #fff
    line-height 60px
    text-align center
  .invalid
    background #777
.cartlist-wrapper
  position fixed
  bottom 60px
  left 0
  width 100%
  border-radius 5px
  background #fff
  z-index 98
  overflow hidden
  &.fold-enter, &.fold-leave-to
    transform translateY(100%)
  &.fold-enter-active, &.fold-leave-active
    transition all 0.5s
  .scroll-list-wrap
    margin 0 20px
    max-height 450px
    /deep/.cube-scroll-wrapper
      max-height 450px
      .fooditem
        height 90px
        width 100%
        margin 20px 0
        display flex
        img
          width 70px
          height 70px
          border-radius 5px
        div
          margin-left 15px
          .name
            font-weight 900
          .price
            color red
            font-size 17px
            font-weight 600
            position relative
            top 40px
        .cartcontrol
          position relative
          flex 1
  .list-head
    height 50px
    font-size 13px
    font-weight 200
    position relative
    margin 0 20px
    .head-left
      height 50px
      line-height 50px
    .head-right
      position absolute
      top 0
      right 0
      height 50px
      line-height 50px
      display flex
.backdrop
  position fixed
  bottom 0
  width 100%
  height 100%
  background rgba(7, 17, 27, 0.6)
  backdrop-filter: blur(10px)
  z-index 1
  &.fade-enter, &.fade-leave-to
    opacity 0
    background: rgba(7, 17, 27, 0)
  &.fade-enter-active, &.fade-leave-active
    transition all 0.5s
</style>
