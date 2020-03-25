<template>
  <div class="header-wrapper">
    <div class="order-butt" @click="handleButtClick">我的订单 >></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleButtClick () {
      this.$router.push({ name: 'OrderList' })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/varible.styl'
  .header-wrapper
    height 36px
    display flex
    color #fff
    position relative
    align-items center
    background-image: linear-gradient(to bottom right, orange , $themeColor)
    .order-butt
      position absolute
      right 10px
      background #fff
      border-radius 10px
      padding 4px 9px
      color orange
      font-size 12px
</style>
