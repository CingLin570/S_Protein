(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d358950"],{"057f":function(t,e,n){var a=n("fc6a"),r=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):r(a(t))}},1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination justify-content-center"},[n("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[n("i",{staticClass:"fas fa-angle-left"})])]),t._l(t.pages.total_pages,(function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[n("a",{staticClass:"page-link border",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[n("i",{staticClass:"fas fa-angle-right"})])])],2)])},r=[],i={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},o=i,s=(n("6ccd"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports},"3f2d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("h2",[t._v("圖片頁面")]),n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",t._l(t.storages,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row",width:"100px"}},[n("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(n){return t.openModel(e)}}},[t._v("刪除")])]),n("td",[n("img",{staticClass:"img-fluid w-25",attrs:{src:e.path,alt:""}})])])})),0)]),n("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getData}}),n("div",{staticClass:"modal fade",attrs:{id:"delStorages",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(1),t._m(2),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.delStorages(t.tempStorages.id)}}},[t._v(" 確認刪除 ")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("刪除")]),n("th",{attrs:{scope:"col"}},[t._v("圖片庫")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header bg-danger text-white"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("刪除產品")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-body"},[n("strong",{staticClass:"text-danger"},[t._v("是否刪除(刪除後將無法恢復)。")])])}],i=(n("99af"),n("5530")),o=n("1157"),s=n.n(o),c=n("1799"),u={name:"Storages",components:{Pagination:c["a"]},data:function(){return{pagination:{},storages:{},isLoading:!1,tempStorages:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.tempStorages={},this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/admin/storage?page=").concat(e,"&paged=").concat(n);this.$http.get(a).then((function(e){t.isLoading=!1,t.pagination=e.data.meta.pagination,t.storages=e.data.data}))},openModel:function(t){this.tempStorages=Object(i["a"])({},t),s()("#delStorages").modal("show")},delStorages:function(t){var e=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/admin/storage/").concat(t);this.$http.delete(n).then((function(){e.isLoading=!1,e.getData(),e.$bus.$emit("message:push","產品刪除成功囉~","success"),s()("#delStorages").modal("hide")}))}}},l=u,f=n("2877"),d=Object(f["a"])(l,a,r,!1,null,null,null);e["default"]=d.exports},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"6ccd":function(t,e,n){"use strict";var a=n("a3ac"),r=n.n(a);r.a},"746f":function(t,e,n){var a=n("428f"),r=n("5135"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});r(e,t)||o(e,t,{value:i.f(t)})}},a3ac:function(t,e,n){},a4d3:function(t,e,n){"use strict";var a=n("23e7"),r=n("da84"),i=n("d066"),o=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),g=n("861d"),p=n("825a"),b=n("7b0b"),h=n("fc6a"),m=n("c04e"),v=n("5c6c"),y=n("7c73"),O=n("df75"),w=n("241c"),_=n("057f"),j=n("7418"),P=n("06cf"),S=n("9bf2"),C=n("d1e7"),k=n("9112"),x=n("6eeb"),D=n("5692"),E=n("f772"),$=n("d012"),L=n("90e3"),N=n("b622"),J=n("e538"),M=n("746f"),F=n("d44e"),T=n("69f3"),I=n("b727").forEach,Q=E("hidden"),W="Symbol",q="prototype",z=N("toPrimitive"),A=T.set,B=T.getterFor(W),G=Object[q],H=r.Symbol,K=i("JSON","stringify"),R=P.f,U=S.f,V=_.f,X=C.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),at=r.QObject,rt=!at||!at[q]||!at[q].findChild,it=s&&l((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var a=R(G,e);a&&delete G[e],U(t,e,n),a&&t!==G&&U(G,e,a)}:U,ot=function(t,e){var n=Y[t]=y(H[q]);return A(n,{type:W,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,n){t===G&&ct(Z,e,n),p(t);var a=m(e,!0);return p(n),f(Y,a)?(n.enumerable?(f(t,Q)&&t[Q][a]&&(t[Q][a]=!1),n=y(n,{enumerable:v(0,!1)})):(f(t,Q)||U(t,Q,v(1,{})),t[Q][a]=!0),it(t,a,n)):U(t,a,n)},ut=function(t,e){p(t);var n=h(e),a=O(n).concat(pt(n));return I(a,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=m(t,!0),n=X.call(this,e);return!(this===G&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,Q)&&this[Q][e])||n)},dt=function(t,e){var n=h(t),a=m(e,!0);if(n!==G||!f(Y,a)||f(Z,a)){var r=R(n,a);return!r||!f(Y,a)||f(n,Q)&&n[Q][a]||(r.enumerable=!0),r}},gt=function(t){var e=V(h(t)),n=[];return I(e,(function(t){f(Y,t)||f($,t)||n.push(t)})),n},pt=function(t){var e=t===G,n=V(e?Z:h(t)),a=[];return I(n,(function(t){!f(Y,t)||e&&!f(G,t)||a.push(Y[t])})),a};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===G&&n.call(Z,t),f(this,Q)&&f(this[Q],e)&&(this[Q][e]=!1),it(this,e,v(1,t))};return s&&rt&&it(G,e,{configurable:!0,set:n}),ot(e,t)},x(H[q],"toString",(function(){return B(this).tag})),x(H,"withoutSetter",(function(t){return ot(L(t),t)})),C.f=ft,S.f=ct,P.f=dt,w.f=_.f=gt,j.f=pt,J.f=function(t){return ot(N(t),t)},s&&(U(H[q],"description",{configurable:!0,get:function(){return B(this).description}}),o||x(G,"propertyIsEnumerable",ft,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),I(O(nt),(function(t){M(t)})),a({target:W,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=H(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:gt,getOwnPropertySymbols:pt}),a({target:"Object",stat:!0,forced:l((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(b(t))}}),K){var bt=!c||l((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));a({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var a,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(a=e,(g(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!st(e))return e}),r[1]=e,K.apply(null,r)}})}H[q][z]||k(H[q],z,H[q].valueOf),F(H,W),$[Q]=!0},dbb4:function(t,e,n){var a=n("23e7"),r=n("83ab"),i=n("56ef"),o=n("fc6a"),s=n("06cf"),c=n("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,a=o(t),r=s.f,u=i(a),l={},f=0;while(u.length>f)n=r(a,e=u[f++]),void 0!==n&&c(l,e,n);return l}})},e439:function(t,e,n){var a=n("23e7"),r=n("d039"),i=n("fc6a"),o=n("06cf").f,s=n("83ab"),c=r((function(){o(1)})),u=!s||c;a({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,n){var a=n("b622");e.f=a}}]);
//# sourceMappingURL=chunk-2d358950.a70d5112.js.map