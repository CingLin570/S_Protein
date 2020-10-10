<template>
  <div class="home position-relative" id="home">
    <div class="aside position-fixed bg-primary">
      <ul class="p-0">
        <li class="d-flex p-2 border-top border-bottom border-white justify-content-between align-items-center">
          <span class="text-white">主選單</span>
          <button type="button" class="asideClose btn">
            <i class="fas fa-times"></i>
          </button>
        </li>
        <li class="p-2 border-top border-bottom border-white">
          <router-link to="/" class="asideClose d-block text-light m-0">首頁</router-link>
        </li>
        <li class="p-2 border-bottom border-white">
          <router-link to="/about" class="asideClose d-block text-light m-0">關於我們</router-link>
        </li>
        <li class="p-2 border-bottom border-white">
          <router-link to="/products" class="asideClose d-block text-light m-0">產品列表</router-link>
        </li>
        <li class="p-2 border-bottom border-white">
          <router-link to="/cart" class="asideClose d-block text-light m-0">購物車</router-link>
        </li>
      </ul>
    </div>
    <div class="homeNavbar p-0 position-fixed w-100 z-index">
      <nav id="navbar" class="navbarAnimate bg-transparent px-3">
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <a
            class="shadow-none bg-transparent mr-3 p-0 font-style font-xs text-dark"
            id="logo"
            href
          >S Protein</a>
          <ul class="d-none d-md-flex justify-content-around list-unstyled m-0">
            <li class="px-2 py-3">
              <router-link to="/"  class="homeLink text-dark h5 m-0">首頁</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/about" class="homeLink text-dark h5 m-0">關於我們</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/products" class="homeLink text-dark h5 m-0">產品列表</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/cart" class="homeLink text-dark h5 m-0">購物車</router-link>
            </li>
          </ul>
          <ul class="d-flex justify-content-center align-items-center ml-auto mb-0 list-unstyled">
            <li class="mr-3 d-md-none">
              <button type="button" class="btn" @click.prevent="asideToggle">
                <i class="fas fa-align-justify fa-2x text-dark border border-dark p-2"></i>
              </button>
            </li>
            <li>
              <a id="cart" class="position-relative d-block" href="#" @click.prevent="cartClick">
                <i class="fas fa-shopping-cart fa-2x text-dark"></i>
                <span class="badge badge-danger cartAmount" v-if="cartQuantity">{{ cartQuantity }}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="cart" id="cartList">
        <div>
          <div class="card card-body rounded-0 px-0 pt-3 pb-0 border border-primary" v-if="cartQuantity > 0">
            <span class="h5 mb-0 text-center">已選擇商品</span>
            <div class="cartList">
              <div class="container-fluid">
                <div class="cartItem pt-2" v-for="item in cart" :key="item.product.id">
                  <div class="row mb-3">
                    <div class="col-5">
                      <img :src="item.product.imageUrl[0]" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-7">
                      <div class="text-left d-flex flex-column justify-content-between h-100">
                        <span class="d-block">{{ item.product.title }}</span>
                        <div class="d-flex justify-content-between align-items-center">
                          <span>{{ item.quantity }} x {{ item.product.price | total }}</span>
                          <a href="#" @click.prevent="removeCartItem(item.product.id)">
                            <i class="fas fa-trash-alt text-primary"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary rounded-0 text-black" @click="goCart">前去購買</button>
          </div>
          <div class="card card-body rounded-0 py-5 border border-primary" v-else>
            <span class="h5 text-center">您未選擇商品</span>
          </div>
        </div>
      </div>
    </div>
    <back-to-top text="Back to top" visibleoffset="50">
      <i class="fas fa-arrow-alt-circle-up fa-4x text-dark"></i>
    </back-to-top>
    <router-view />
  </div>
</template>

<script type="module">
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      cart: [],
      cartTotal: 0,
      cartQuantity: 0,
      closeCart: false
    }
  },
  created () {
    this.$bus.$on('updateCart', () => {
      this.getCarticon()
    })
    this.$bus.$on('changeCart', () => {
      this.getCart()
    })
    this.getCart()
  },
  mounted () {
    $(document).ready(function () {
      $(window).scroll(function () {
        var scrollPos = $(window).scrollTop()
        $('#navbar').each(function () {
          if (scrollPos > 20) {
            $('#navbar').removeClass('bg-transparent')
            $('#navbar').addClass('bg-light')
          } else {
            $('#navbar').removeClass('bg-light')
            $('#navbar').addClass('bg-transparent')
          }
        })
      })
      $('.asideClose').click(function (event) {
        event.preventDefault()
        $('#home').removeClass('open')
      })
      $(document).click(function (e) {
        const cartList = $('#cartList')
        const cart = $('#cart')
        if (!cartList.is(e.target) && cartList.has(e.target).length === 0 && !cart.is(e.targe) && cart.has(e.target).length === 0) {
          $('#cartList').removeClass('cartList')
        }
      })
    })
  },
  beforeDestroy () {
    this.$bus.$off('updateCart')
    this.$bus.$off('changeCart')
  },
  methods: {
    asideToggle () {
      $('#home').toggleClass('open')
    },
    cartClick () {
      $('#cartList').toggleClass('cartList')
    },
    goCart () {
      this.$router.push('/cart')
      $('#cartList').removeClass('cartList')
    },
    getCarticon () {
      const loader = this.$loading.show()
      this.cartTotal = 0
      this.cartQuantity = 0
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((response) => {
          this.cart = response.data.data
          this.cart.forEach((item) => {
            this.cartTotal += (item.product.price * item.quantity)
            this.cartQuantity += item.quantity
          })
          $('#cartList').addClass('cartList')
          loader.hide()
        }).catch((error) => {
          const errorData = error.response.data.errors
          this.$bus.$emit('message:push',
          `錯誤 ${errorData}`, 'danger')
        })
    },
    getCart () {
      this.cartTotal = 0
      this.cartQuantity = 0
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((response) => {
          this.cart = response.data.data
          this.cart.forEach((item) => {
            this.cartTotal += (item.product.price * item.quantity)
            this.cartQuantity += item.quantity
          })
        }).catch((error) => {
          const errorData = error.response.data.errors
          this.$bus.$emit('message:push',
          `錯誤 ${errorData}`, 'danger')
        })
    },
    getremoveCart () {
      this.cartTotal = 0
      this.cartQuantity = 0
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((response) => {
          this.cart = response.data.data
          this.cart.forEach((item) => {
            this.cartTotal += (item.product.price * item.quantity)
            this.cartQuantity += item.quantity
          })
          if (this.cartTotal === 0) {
            $('#cartList').removeClass('cartList')
          }
        }).catch((error) => {
          const errorData = error.response.data.errors
          this.$bus.$emit('message:push',
          `錯誤 ${errorData}`, 'danger')
        })
    },
    removeCartItem (id) {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(() => {
        this.getremoveCart()
        if (this.$route.name === '前台購物車') {
          this.$bus.$emit('delete')
        }
        loader.hide()
      }).catch((error) => {
        const errorData = error.response.data.errors
        this.$bus.$emit('message:push',
        `錯誤 ${errorData}`, 'danger')
      })
    }
  }
}
</script>

<style lang="scss">
  .aside{
    z-index: 10000;
    top: 0;
    bottom: 0;
    width: 250px;
    overflow: hidden;
    transform: translateX(-300px);
    transition: all 0.3s;
  }
  .open .aside{
    transform: translateX(0px);
  }
  .home{
    .cart{
    z-index: 1;
    position: absolute;
    height: 0;
    right: 0;
    width: 280px;
    transition: all 0.5s;
    transform: translateX(300px);
  }
    .homeLink{
      font-size: 24px;
    }
    .cartList{
    transform: translateX(0px);
    right: 30px;
  }
    .cartAmount{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -8px;
    right: -9px;
    width: 20px;
    height: 20px;
    font-size: 12px;
    border-radius: 50%;
  }
    .margin-auto{
    margin: 0 auto;
  }
    .cartList .container-fluid > .cartItem:not(:first-child){
    border-top:1px solid #adb5bd;
  }
    .goTop{
    opacity: 0;
    z-index: 10000;
    position: fixed;
    right: 20px;
    bottom: 100px;
    transition: opacity 0.7s;
  }
    .topAnimate{
    opacity: 1;
  }
    .navbarAnimate{
    transition: all 0.5s;
  }
  }
</style>
