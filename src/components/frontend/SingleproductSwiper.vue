<template>
  <div class="thumb-example">
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
    <swiper-slide v-for="(item, i) in this.product.imageUrl" :key="i+1">
      <button type="button" class="p-0 border">
        <img :src="item" alt="" class="w-100 h-auto">
      </button>
    </swiper-slide>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptionTop: {
        effect: 'fade',
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      product: {
        origin_price: 0,
        price: 0,
        imageUrl: []
      }
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      const loader = this.$loading.show()
      const id = this.$route.params.id
      this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((response) => {
          this.product = response.data.data
          loader.hide()
        })
    }
  }
}
</script>
