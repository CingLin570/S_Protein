## 前台頁面

https://cinglin570.github.io/s_protein/#/

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

## 網頁流程功能介紹

進入首頁，使用swiper動態切換圖片，觀看最新動態以及觀看熱門產品，使用aos視差滾動效果

![image1](https://github.com/CingLin570/s_proteinPicture/blob/master/2.1.png?raw=true)

![image2](https://github.com/CingLin570/s_proteinPicture/blob/master/3.PNG?raw=true)

進入產品頁面，可點擊商品進入單一產品頁面，左側選單可過濾產品項目

![image3](https://github.com/CingLin570/s_proteinPicture/blob/master/4.PNG?raw=true)

![image4](https://github.com/CingLin570/s_proteinPicture/blob/master/5.PNG?raw=true)

![image5](https://github.com/CingLin570/s_proteinPicture/blob/master/6.PNG?raw=true)

![image6](https://github.com/CingLin570/s_proteinPicture/blob/master/7.PNG?raw=true)

![image7](https://github.com/CingLin570/s_proteinPicture/blob/master/8.PNG?raw=true)

![image8](https://github.com/CingLin570/s_proteinPicture/blob/master/9.PNG?raw=true)

![image9](https://github.com/CingLin570/s_proteinPicture/blob/master/10.PNG?raw=true)
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
