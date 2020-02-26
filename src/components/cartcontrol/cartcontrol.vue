<template>
  <div class="cart-control">
    <transition name="move">
      <div class="iconfont minus" @click.stop="dereaseCount" v-show="food.count>0">&#xe623;</div>
    </transition>
    <p class="count" v-show="food.count>0">{{food.count}}</p>
    <div class="iconfont plus" @click.stop="addCount">&#xe691;</div>
  </div>
</template>

<script>
export default {
  name: 'cartcontrol',
  props: {
    food: Object,
    totalCount: Number
  },
  methods: {
    addCount () {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    dereaseCount () {
      if (this.food.count) {
        this.food.count--
      }
      if (this.totalCount === 1) {
        this.$emit('hidelist')
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/varible.styl'

.cart-control
  .minus
    position absolute
    bottom 15px
    right 70px
    font-size 23px
    color #ddd
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(24px)
    &.move-enter-active, &.move-leave-active
      transition all .2s linear
  .plus
    position absolute
    bottom 17px
    right 15px
    font-size 20px
    color $themeColor
  .count
    position absolute
    bottom 18px
    right 50px
    font-size 18px
</style>
