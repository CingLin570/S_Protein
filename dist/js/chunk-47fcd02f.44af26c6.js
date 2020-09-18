(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47fcd02f"],{"056d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-5 row no-gutters justify-content-center"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"col-md-10"},[e("table",{staticClass:"table mt-4"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,s){return e("tr",{key:s,class:{"text-secondary":!a.is_paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[t._v(t._s(a.payment))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",{staticClass:"text-right"},[t._v(t._s(a.amount))]),e("td",[a.paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("未付款")])]),e("td",[e("div",{staticClass:"btn-group btn-group-sm"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:a.paid},on:{click:function(e){return e.preventDefault(),t.getDetailed(a.id)}}},[t._v("選擇")])])])])})),0):t._e()]),e("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrders}})],1),e("hr",{staticClass:"w-100"}),e("form",{staticClass:"col-md-6",on:{submit:function(a){return a.preventDefault(),t.payOrder(a)}}},[e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.order.products,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.quantity)+"/"+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("total")(a.product.price)))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),t.order.amount?e("td",{staticClass:"text-right"},[t._v(t._s(t._f("total")(parseInt(t.order.amount))))]):t._e()])])]),e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])]),!1===t.order.paid?e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("購買時間")]),e("th",[t._v("購買方式")]),e("th",[t._v("商品列表")]),e("th",[t._v("應付金額")]),e("th",[t._v("付款狀態")]),e("th",[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])}],r=(e("99af"),e("1799")),n={name:"customerCheckout",components:{Pagination:r["a"]},data:function(){return{order:{user:{}},orders:[],orderId:"",isLoading:!1,pagination:{}}},created:function(){this.orderId=this.$route.params.orderId,this.orderId&&this.getDetailed(this.orderId),this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/orders?page=").concat(a,"&paged=").concat(e);this.$http.get(s).then((function(a){t.isLoading=!1,t.pagination=a.data.meta.pagination,t.orders=a.data.data}))},getDetailed:function(t){var a=this;this.isLoading=!0,this.orderId=t;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/orders/").concat(t);this.$http.get(e).then((function(t){a.order=t.data.data,a.isLoading=!1}))},payOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/orders/").concat(this.orderId,"/paying");this.$http.post(a).then((function(a){a.data.data.paid&&t.getDetailed(t.orderId),t.isLoading=!1}))}}},c=n,o=e("2877"),d=Object(o["a"])(c,s,i,!1,null,null,null);a["default"]=d.exports},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("i",{staticClass:"fas fa-angle-left"})])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link border",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("i",{staticClass:"fas fa-angle-right"})])])],2)])},i=[],r={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},n=r,c=(e("6ccd"),e("2877")),o=Object(c["a"])(n,s,i,!1,null,null,null);a["a"]=o.exports},"6ccd":function(t,a,e){"use strict";var s=e("a3ac"),i=e.n(s);i.a},a3ac:function(t,a,e){}}]);
//# sourceMappingURL=chunk-47fcd02f.44af26c6.js.map