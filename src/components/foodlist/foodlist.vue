<template>
  <div class='view-wrapper'>
    <cube-scroll-nav
      :side='true'
      :data='goods'
      :current='current'
      @change='changeHandler'
      @sticky-change='stickyChangeHandler'
      v-if='goods.length>0'
    >
      <ul class='prepend-header' slot='prepend'>
        <slot></slot>
      </ul>
      <cube-scroll-nav-panel
        v-for='item in goods'
        :key='item.name'
        :label='item.name'
        :title='item.name'>
        <ul>
          <li v-for='food in item.foods' :key='food.name'>
            <div class="food-item">
              <img :src="food.icon">
              <div>
                <p class="name">{{food.name}}</p>
                <p class="price">{{'￥'+food.price}}</p>
              </div>
              <cartcontrol class="cartcontrol" :food="food" :totalCount="totalCount"></cartcontrol>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
  </cube-scroll-nav>
  <shopcart :selectedFoods="selectedFoods" :totalPrice="totalPrice" :totalCount="totalCount"></shopcart>
  </div>
</template>

<script>
import shopcart from '../shopcart/shopcart.vue'
import cartcontrol from '../cartcontrol/cartcontrol.vue'

export default {
  name: 'foodlist',
  props: {
    goods: Array
  },
  data: function () {
    return {
      current: this.goods[0].name
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    }
  },
  computed: {
    selectedFoods () {
      const foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    },
    totalPrice () {
      let price = 0
      this.selectedFoods.forEach((food) => {
        price += food.price * food.count
      })
      return price
    },
    totalCount () {
      let count = 0
      this.selectedFoods.forEach((food) => {
        count += food.count
      })
      return count
    }
  },
  components: {
    shopcart: shopcart,
    cartcontrol: cartcontrol
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '../../assets/styles/varible.styl'

.view-wrapper
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%

/deep/.cube-scroll-nav-panel-title
  font-size 15px
  padding 15px
  background #fff

/deep/.cube-scroll-nav-bar
  background #f7f7f7
  width 80px

/deep/.cube-scroll-nav-bar-item_active
  background #fff
  color #000
  font-weight 500
/deep/.cube-sticky
  background #fff

/deep/.cube-sticky-content
  opacity 0.8

.food-item
  height 100px
  display flex
  background #fff
  position relative
  img
    width 80px
    height 80px
    margin-top 10px
    margin-left 10px
    border-radius 5px
  div
    margin-top 10px
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
</style>
