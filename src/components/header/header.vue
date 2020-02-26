<template>
  <div class="header-wrapper">
    <img :src="seller.avatar" />
    <p>{{seller.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'sellerHeader',
  props: {
    seller: Object
  }
}
</script>

<style lang='stylus' scoped>
  .header-wrapper
    height 56px
    display flex
    background #444
    color #fff
    img
      width 40px
      height 40px
      border 1px solid #fff
      position: relative
      top: 6px
      left: 10px
    p
      height 56px
      line-height 56px
      margin-left 20px
</style>
