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

### 進入首頁，使用swiper動態切換圖片，觀看最新動態以及觀看熱門產品，使用aos視差滾動效果。

![image1](https://github.com/CingLin570/s_proteinPicture/blob/master/2.1.png?raw=true)

![image2](https://github.com/CingLin570/s_proteinPicture/blob/master/3.1.png?raw=true)

### 進入產品頁面，可點擊商品進入單一產品頁面，左側選單可過濾產品項目。

![image3](https://github.com/CingLin570/s_proteinPicture/blob/master/4.PNG?raw=true)

### 進入單一產品頁面，可點選數量加入購物車，產品圖片可放大觀看，觀看產品詳細圖片。

![image4](https://github.com/CingLin570/s_proteinPicture/blob/master/5.1.png?raw=true)

### 進入購物車頁面，可觀看選擇的商品並可增加或減少數量，不想要的時候可直接移除購物車商品。

![image5](https://github.com/CingLin570/s_proteinPicture/blob/master/6.1.PNG?raw=true)

![image5](https://github.com/CingLin570/s_proteinPicture/blob/master/6.2.png?raw=true)

### 進入填寫訂單程序，輸入折扣碼，訂單填寫驗證，以及必填項目必須填寫完成才可進去訂單確認

![image6](https://github.com/CingLin570/s_proteinPicture/blob/master/7.PNG?raw=true)

### 進入訂單資料填寫程序，必須輸入必填項目才可進行至下一步，使用 vee-validate 來判斷是否正確

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
