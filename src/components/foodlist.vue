<template>
  <div class='view-wrapper'>
    <cube-scroll-nav
      :side='true'
      :data='goods'
      :current='current'
      :options="scrollOptions"
      @change='changeHandler'
      @sticky-change='stickyChangeHandler'
    >
      <ul class='prepend-header' slot='prepend'>
      </ul>
      <cube-scroll-nav-panel
        v-for='item in goods'
        :key='item.name'
        :label='item.name'
        :title='item.name'>
        <ul>
          <li v-for='food in item.foods' :key='food.name'>
            <div class="food-item">
              <img :src="food.icon" width="200px">
              <div>
                <p class="name">{{food.name}}</p>
                <p class="price">{{'￥'+food.price}}</p>
              </div>
              <div class="iconfont minus">&#xe623;</div>
              <p class="count">5</p>
              <div class="iconfont plus">&#xe691;</div>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
  </cube-scroll-nav>
  </div>
</template>

<script>

export default {
  name: 'foodlist',
  props: {
    goods: Array
  },
  data: function () {
    return {
      current: this.goods[0].name,
      scrollOptions: {
        click: false,
        passive: false,
        directionLockThreshold: 0
      }
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.view-wrapper
  position: fixed
  top: 50px
  left: 0
  bottom: 0
  width: 100%

/deep/.cube-scroll-nav-panel
  background #eee
  margin-bottom 10px
/deep/.cube-sticky
  background #eee

/deep/.cube-scroll-nav-panel-title
  font-size 16px
  padding 18px
  background #fff

/deep/.cube-scroll-wrapper
  background #fff
  width 80px

/deep/.cube-sticky-ele
  background #fff

/deep/.cube-scroll-nav-bar-item_active
  background orange
  color #fff
.food-item
  margin 10px
  height 100px
  display flex
  background #fff
  position relative
  img
    width 80px
    height 80px
    margin-top 10px
    margin-left 10px
  div
    margin-top 10px
    margin-left 15px
    .price
      color orange
      font-size 17px
      font-weight bold
      position relative
      top 40px
  .minus
    position absolute
    bottom 15px
    right 70px
    font-size 25px
    color orange
  .plus
    position absolute
    bottom 17px
    right 15px
    font-size 22px
    color orange
  .count
    position absolute
    bottom 18px
    right 50px
    font-size 18px
</style>
