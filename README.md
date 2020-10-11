## 前台頁面

https://cinglin570.github.io/s_protein/index.html#/

#/ 前台模擬的

首頁 /

關於我們 /about

產品列表 /products

  單一產品頁面 /product
  
購物車 /cart

前台客戶訂單 /checkoutorder

前台填寫訂單資訊 /orderfinish/:orderid'

購物成功 /ordersuccess

## 後台管理頁面
(驗證)登入管理頁面 /login

產品管理頁面 /admin/products

優惠卷管理頁面 /admin/coupons

圖片儲存庫頁面 /admin/storages

客戶訂單明細頁面 /admin/detail

模擬訂單頁面 /admin/order

用戶訂單列表 /admin/customer_checkout/:orderId

### (vue頁面建立流程)

1.開啟 .vue 檔案

2.建立路由

3.加入路徑 router-link or $router.push

使用的是絕對路徑，必須到vue ui設定裡更改(公開路徑)，改成  /hexschool-jsClass/demo_project/dist/

## 使用技術

1.Vue CLI 4
2.Vue Router
3.Vue Components
4.RESTful APIs
5.RWD
6.Bootstrap 4
7.JavaScript (ES6)
8.ESlint (Standard)

## 使用 Plugins

AOS
Bootstrap-Vue
Vue-awesome-swiper
Vue-axios
Vue-loading-overlay
Vue-backtotop
Vue-step-progress

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
