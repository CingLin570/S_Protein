(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5724f464"],{"057f":function(t,e,a){var s=a("fc6a"),n=a("241c").f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return n(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==r.call(t)?i(t):n(s(t))}},1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("i",{staticClass:"fas fa-angle-left"})])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link border",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("i",{staticClass:"fas fa-angle-right"})])])],2)])},n=[],r={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},o=r,i=(a("6ccd"),a("2877")),c=Object(i["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"6ccd":function(t,e,a){"use strict";var s=a("a3ac"),n=a.n(s);n.a},"746f":function(t,e,a){var s=a("428f"),n=a("5135"),r=a("e538"),o=a("9bf2").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});n(e,t)||o(e,t,{value:r.f(t)})}},a3ac:function(t,e,a){},a4d3:function(t,e,a){"use strict";var s=a("23e7"),n=a("da84"),r=a("d066"),o=a("c430"),i=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),p=a("e8b5"),f=a("861d"),m=a("825a"),v=a("7b0b"),g=a("fc6a"),h=a("c04e"),b=a("5c6c"),_=a("7c73"),y=a("df75"),C=a("241c"),P=a("057f"),x=a("7418"),w=a("06cf"),O=a("9bf2"),k=a("d1e7"),$=a("9112"),j=a("6eeb"),S=a("5692"),L=a("f772"),q=a("d012"),T=a("90e3"),E=a("b622"),D=a("e538"),I=a("746f"),N=a("d44e"),M=a("69f3"),A=a("b727").forEach,Q=L("hidden"),U="Symbol",J="prototype",W=E("toPrimitive"),z=M.set,B=M.getterFor(U),F=Object[J],G=n.Symbol,H=r("JSON","stringify"),V=w.f,K=O.f,R=P.f,X=k.f,Y=S("symbols"),Z=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),at=S("wks"),st=n.QObject,nt=!st||!st[J]||!st[J].findChild,rt=i&&u((function(){return 7!=_(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,a){var s=V(F,e);s&&delete F[e],K(t,e,a),s&&t!==F&&K(F,e,s)}:K,ot=function(t,e){var a=Y[t]=_(G[J]);return z(a,{type:U,tag:t,description:e}),i||(a.description=e),a},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,a){t===F&&ct(Z,e,a),m(t);var s=h(e,!0);return m(a),d(Y,s)?(a.enumerable?(d(t,Q)&&t[Q][s]&&(t[Q][s]=!1),a=_(a,{enumerable:b(0,!1)})):(d(t,Q)||K(t,Q,b(1,{})),t[Q][s]=!0),rt(t,s,a)):K(t,s,a)},lt=function(t,e){m(t);var a=g(e),s=y(a).concat(mt(a));return A(s,(function(e){i&&!dt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?_(t):lt(_(t),e)},dt=function(t){var e=h(t,!0),a=X.call(this,e);return!(this===F&&d(Y,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(Y,e)||d(this,Q)&&this[Q][e])||a)},pt=function(t,e){var a=g(t),s=h(e,!0);if(a!==F||!d(Y,s)||d(Z,s)){var n=V(a,s);return!n||!d(Y,s)||d(a,Q)&&a[Q][s]||(n.enumerable=!0),n}},ft=function(t){var e=R(g(t)),a=[];return A(e,(function(t){d(Y,t)||d(q,t)||a.push(t)})),a},mt=function(t){var e=t===F,a=R(e?Z:g(t)),s=[];return A(a,(function(t){!d(Y,t)||e&&!d(F,t)||s.push(Y[t])})),s};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),a=function(t){this===F&&a.call(Z,t),d(this,Q)&&d(this[Q],e)&&(this[Q][e]=!1),rt(this,e,b(1,t))};return i&&nt&&rt(F,e,{configurable:!0,set:a}),ot(e,t)},j(G[J],"toString",(function(){return B(this).tag})),j(G,"withoutSetter",(function(t){return ot(T(t),t)})),k.f=dt,O.f=ct,w.f=pt,C.f=P.f=ft,x.f=mt,D.f=function(t){return ot(E(t),t)},i&&(K(G[J],"description",{configurable:!0,get:function(){return B(this).description}}),o||j(F,"propertyIsEnumerable",dt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),A(y(at),(function(t){I(t)})),s({target:U,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=G(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),s({target:"Object",stat:!0,forced:!c,sham:!i},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:pt}),s({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),s({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),H){var vt=!c||u((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));s({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,a){var s,n=[t],r=1;while(arguments.length>r)n.push(arguments[r++]);if(s=e,(f(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!it(e))return e}),n[1]=e,H.apply(null,n)}})}G[J][W]||$(G[J],W,G[J].valueOf),N(G,U),q[Q]=!0},d2e2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h2",[t._v("模擬下單")]),a("div",{staticClass:"row mt-4 justify-content-center"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-3 mb-4"},[a("div",{staticClass:"card border-0 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.content)}},[t._v(t._s(e.content))]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?a("div",[a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("total")(e.origin_price))+" 元")]),a("div",{staticClass:"h5"},[t._v(" 現在只要 "),a("span",{staticClass:"text-danger"},[t._v(t._s(t._f("total")(e.price)))]),t._v(" 元 ")])]):a("div",{staticClass:"h5"},[t._v(t._s(t._f("total")(e.origin_price))+" 元")])])]),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.getDetailed(e.id)}}},[t._v("查看更多")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addCart(e)}}},[t.status.loadingItem===e.id?a("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.tempProduct.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl[0],alt:""}}),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.tempProduct.content)}}),a("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.tempProduct.description))])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.tempProduct.price?a("div",[a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.tempProduct.origin_price)+" 元")]),a("div",{staticClass:"h4"},[t._v("現在只要 "+t._s(t.tempProduct.price)+" 元")])]):a("div",{staticClass:"h4"},[t._v(t._s(t.tempProduct.origin_price)+" 元")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"num",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇數量")]),t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v("選購 "+t._s(e)+" "+t._s(t.tempProduct.unit))])}))],2)]),a("div",{staticClass:"modal-footer"},[t.tempProduct.num?a("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小計 "),a("strong",[t._v(t._s(t.tempProduct.num*t.tempProduct.price))]),t._v(" 元 ")]):t._e(),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addCart(t.tempProduct,t.tempProduct.num)}}},[t.tempProduct.id===t.status.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])]),a("div",{staticClass:"row my-4"},[a("div",{staticClass:"col-5"},[a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v("套用優惠碼")])])]),a("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,n=e.classes;return[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:n,attrs:{id:"username",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("收件人姓名"+s[0].slice(9,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,n=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:n,attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("信箱"+s[0].slice(6,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|min:8|numeric"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,n=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:n,attrs:{id:"tel",type:"tel"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("電話"+s[0].slice(4,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,n=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:n,attrs:{id:"address",type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("地址"+s[0].slice(8,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("購買方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),a("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),a("option",{attrs:{value:"ATM"}},[t._v("ATM")]),a("option",{attrs:{value:"CVS"}},[t._v("CVS")]),a("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),a("option",{attrs:{value:"Credit"}},[t._v("Credit")]),a("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),a("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",staticStyle:{resize:"none"},attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"submit",disabled:s}},[t._v("送出表單")])])]}}])})],1),a("div",{staticClass:"col-7"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeAllCartItem()}}},[a("i",{staticClass:"far fa-trash-alt"},[t._v("刪除所有品項")])]),a("table",{staticClass:"table"},[t._m(1),t.cart.length?a("tbody",{staticClass:"text-right"},t._l(t.cart,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.product.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),a("td",{staticClass:"align-middle"},[a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-sm btn-outline-primary mr-2",attrs:{type:"button",disabled:1===e.quantity},on:{click:function(a){return t.quantityUpdata(e.product.id,e.quantity-1)}}},[t._v("-")]),a("span",{staticClass:"m-2"},[t._v(t._s(e.quantity))]),a("button",{staticClass:"btn btn-sm btn-outline-primary ml-2",attrs:{type:"button"},on:{click:function(a){return t.quantityUpdata(e.product.id,e.quantity+1)}}},[t._v("+")])])]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("total")(e.product.price)))])])})),0):t._e(),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("total")(t.cartTotal)))])]),t.coupon.enabled?a("tr",{staticClass:"text-success"},[a("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("折扣價")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("total")(parseInt(t.cartTotal*(t.coupon.percent/100)))))])]):t._e()])])])])])]),a("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getProduct}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"30px"}},[t._v("刪除")]),a("th",[t._v("品名")]),a("th",{attrs:{width:"110px"}},[t._v("數量")]),a("th",{staticClass:"text-right"},[t._v("單位")]),a("th",{staticClass:"text-right"},[t._v("單價")])])}],r=(a("99af"),a("4160"),a("159b"),a("5530")),o=a("1157"),i=a.n(o),c=a("1799"),l={name:"order",components:{Pagination:c["a"]},data:function(){return{status:{loadingItem:""},tempProduct:{num:0,imageUrl:[]},products:{},pagination:{},isLoading:!1,form:{name:"",email:"",tel:"",address:"",payment:"",message:""},cart:{},cartTotal:0,cartQuantity:0,coupon:{},couponCode:""}},created:function(){this.getProduct(),this.getCart()},methods:{getProduct:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/admin/ec/products?page=").concat(e,"&paged=").concat(a);this.$http.get(s).then((function(e){t.isLoading=!1,t.products=e.data.data,t.pagination=e.data.meta.pagination}))},getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping");this.$http.get(e).then((function(e){t.cart=e.data.data,t.cart.forEach((function(e){t.cartTotal+=e.product.price*e.quantity,t.cartQuantity+=e.quantity})),t.isLoading=!1}))},addCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t.id;var s={product:t.id,quantity:a},n="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping");this.$http.post(n,s).then((function(t){e.status.loadingItem="",e.$bus.$emit("message:push","加入購物車成功囉，好棒ヽ(＾Д＾)ﾉ ","success"),e.cartTotal=0,e.cartQuantity=0,e.getCart(),i()("#productModal").modal("hide")})).catch((function(t){e.status.loadingItem="";var a=t.response.data.errors;a.forEach((function(t){e.$bus.$emit("message:push","加入失敗惹，好糗Σ( ° △ °|||)︴\n          ".concat(t),"danger")})),i()("#productModal").modal("hide")}))},quantityUpdata:function(t,e){var a=this;if(!(e<=0)){this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping"),n={product:t,quantity:e};this.$http.patch(s,n).then((function(t){a.cartTotal=0,a.cartQuantity=0,a.isLoading=!1,a.getCart()}))}},removeAllCartItem:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping/all/product");this.$http.delete(e).then((function(e){t.cartTotal=0,t.cartQuantity=0,t.isLoading=!1,t.getCart()}))},removeCartItem:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping/").concat(t);this.$http.delete(a).then((function(t){e.cartTotal=0,e.cartQuantity=0,e.isLoading=!1,e.getCart()}))},createOrder:function(){var t=this;this.isLoading=!0;var e=Object(r["a"])({},this.form),a="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/orders");this.coupon.enabled&&(e.coupon=this.coupon.code),this.$http.post(a,e).then((function(e){e.data.data.id&&(t.isLoading=!0,t.$bus.$emit("message:push","訂單建立成功囉~","success"),t.$router.push("/admin/customer_checkout/".concat(e.data.data.id)))})).catch((function(e){var a=e.response.data.errors;a.forEach((function(e){t.$bus.$emit("message:push","建立訂單失敗惹，好糗Σ( ° △ °|||)︴\n          ".concat(e),"danger")})),t.isLoading=!1}))},addCoupon:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/coupon/search");this.$http.post(e,{code:this.couponCode}).then((function(e){console.log(e.data.data),t.coupon=e.data.data,t.isLoading=!1})).catch((function(e){t.isLoading=!1;var a=e.response.data.errors;if(console.log(e.response),a)a.code.forEach((function(e){t.$bus.$emit("message:push","優惠碼錯誤 ".concat(e),"danger")}));else{t.isLoading=!1;var s=e.response.data.message;t.$bus.$emit("message:push","優惠碼錯誤 ".concat(s),"danger")}}))},getDetailed:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/product/").concat(t);this.$http.get(a).then((function(t){e.tempProduct=t.data.data,e.$set(e.tempProduct,"num",0),i()("#productModal").modal("show"),e.isLoading=!1}))}}},u=l,d=a("2877"),p=Object(d["a"])(u,s,n,!1,null,null,null);e["default"]=p.exports},dbb4:function(t,e,a){var s=a("23e7"),n=a("83ab"),r=a("56ef"),o=a("fc6a"),i=a("06cf"),c=a("8418");s({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,s=o(t),n=i.f,l=r(s),u={},d=0;while(l.length>d)a=n(s,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var s=a("23e7"),n=a("d039"),r=a("fc6a"),o=a("06cf").f,i=a("83ab"),c=n((function(){o(1)})),l=!i||c;s({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})},e538:function(t,e,a){var s=a("b622");e.f=s}}]);