<template>
  <div class="header-wrapper">
    <div class="content-wrapper border-bottom">
      <div class="content">
        <p><span class="iconfont tableicon">&#xe613;</span>座位</p>
        <cube-select
          v-model="value"
          :options="options"
          @change="change">
        </cube-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderHeader',
  data () {
    return {
      options: ['1号桌', '2号桌', '3号桌', '4号桌', '5号桌', '6号桌'],
      value: '1号桌'
    }
  },
  methods: {
    change (value, index, text) {
      this.$emit('changeTableNumber', parseInt(value))
    }
  }
}
</script>

<style lang='stylus' scoped>
.header-wrapper
  height 120px
  .content-wrapper
    width 60%
    height 100%
    margin-left 20%
    display flex
    align-items center
    justify-content center
    .content
      display flex
      height 40px
      p
        margin-right 20px
        line-height 40px
        .tableicon
          margin-right 10px
          color orange
      /deep/.cube-select::after
        border-radius 60px
      /deep/.cube-select
        padding 10px 20px
      /deep/.cube-select-icon
        border-color orange  transparent transparent transparent
      /deep/.cube-select-text
        margin-right 5px
</style>
