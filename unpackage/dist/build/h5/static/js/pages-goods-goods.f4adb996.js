(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"569b":function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n("75fc"));n("96cf");var r=o(n("3b8d")),s=o(n("c9bd")),a=o(n("9e06")),i=n("cc5c"),d=n("3d75"),c={data:function(){return{pageindex:1,flag:!1,goods:[]}},onLoad:function(){this.getProducts()},methods:{getProducts:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.myRequestGet)(d.GoodsUrl,{pageindex:this.pageindex});case 2:e=t.sent,0===e.status&&(this.goods=[].concat((0,u.default)(this.goods),(0,u.default)(e.message)));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},onReachBottom:function(){this.pageindex++,this.pageindex<=2?this.getProducts():this.flag=!0},onPullDownRefresh:function(){this.pageindex=1,this.flag=!1,this.goods=[],this.getProducts().then(function(){uni.stopPullDownRefresh()})},components:{uniLoadMore:s.default,goodlist:a.default}};e.default=c},"7d77":function(t,e,n){"use strict";n.r(e);var o=n("569b"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},bed8:function(t,e,n){"use strict";n.r(e);var o=n("f01d"),u=n("7d77");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);var s=n("2877"),a=Object(s["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},f01d:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("goodlist",{attrs:{goods:t.goods}}),t.flag?n("uni-load-more",{attrs:{status:"noMore"}}):n("uni-load-more",{attrs:{status:"loading"}})],1)},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})}}]);