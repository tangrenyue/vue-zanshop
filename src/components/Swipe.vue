<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide"  v-for="(list, index) in lists" :key="index">
            <a class="js-no-follow" :href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.img">
            </a>
            </div>
        </div>
        <div class="swiper-pagination" style="text-align: center"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'Swiper/dist/css/swiper.css'
export default {
  name: "Swipe",
  props:['lists'],
  data() {
    return {};
  },
  components: {},
  mounted() {
      new Swiper('.swiper-container',{
          autoplay:true,
          loop: true,
          pagination: {
              el: '.swiper-pagination',
          },
      })
  },
};
</script>

<style >
.swiper-slide img{
    height: 100%;
    width: 100%;
}
</style>
