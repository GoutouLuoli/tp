(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hot-hot"],{"121c":function(t,i,e){"use strict";e.r(i);var a=e("a8f9"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"2aa68":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"none_tip"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/images/none_tip.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"none_tip_text"},[i("v-uni-text",{staticClass:"text"},[this._v("什么也没有~")])],1)],1)},n=[]},"60c9":function(t,i,e){"use strict";e.r(i);var a=e("2aa68"),n=e("e093");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("617f");var s=e("828b"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"685e5c06",null,!1,a["a"],void 0);i["default"]=r.exports},"617f":function(t,i,e){"use strict";var a=e("90bc"),n=e.n(a);n.a},"6f42":function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,".none_tip[data-v-685e5c06]{padding:%?80?%;text-align:center}.none_tip .image[data-v-685e5c06]{height:%?200?%;width:%?200?%}.none_tip_text[data-v-685e5c06]{padding:%?20?%}.none_tip_text .text[data-v-685e5c06]{font-size:%?28?%;color:#999;font-weight:200}",""]),t.exports=i},"90bc":function(t,i,e){var a=e("6f42");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("72fb7870",a,!0,{sourceMap:!1,shadowMode:!1})},a224:function(t,i,e){"use strict";var a=e("e487"),n=e.n(a);n.a},a8f9:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("01a2"),e("e39c"),e("c223");var n=a(e("4617")),o=a(e("97c2")),s=a(e("60c9")),r=e("ea2b"),l=e("e638"),d=e("e2e2"),c={data:function(){return this.default={background:"",title:"热门标题，请在后台修改",description:"热门描述，请在后台修改"},this.sorts=["views","likes","favorites","comments"],{setting:{background:"",title:"",description:""},tabbar:["浏览数","点赞数","收藏数","评论数"],currentTab:0,posts:[],loadding:!1,pullUpOn:!0,loaded:!1,tl_background:""}},components:{JiangqieLoadmore:n.default,JiangqieNomore:o.default,JiangqieNoData:s.default},onLoad:function(t){var i=this;d.get(l.JIANGQIE_SETTING_HOT).then((function(t){i.setting={background:t.data.background,title:t.data.title?t.data.title:i.default.title,description:t.data.description?t.data.description:i.default.description},i.tl_background=t.data.tl_background})),this.loadPosts(!0)},onShow:function(){},onReachBottom:function(){this.pullUpOn&&this.loadPosts(!1)},onShareAppMessage:function(){return{title:getApp().globalData.appName,path:"pages/index/index"}},methods:{swichNav:function(t){var i=t.currentTarget.dataset.current;if(this.currentTab==i)return!1;this.currentTab=i,this.loadPosts(!0)},handlerHotArticle:function(t){var i=t.currentTarget.dataset.id;uni.navigateTo({url:"/pages/article/article?post_id="+i})},loadPosts:function(t){var i=this;this.loadding=!0,d.get(l.JIANGQIE_POSTS_HOT,{offset:t?0:this.posts.length,sort:this.sorts[this.currentTab]}).then((function(e){i.loaded=!0,i.loadding=!1,i.posts=t?e.data:i.posts.concat(e.data),i.pullUpOn=e.data.length>=r.JQ_PER_PAGE_COUNT}))}}};i.default=c},dc7d:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={name:"JiangqieNoData",data:function(){return{}},components:{},props:{},methods:{}}},e093:function(t,i,e){"use strict";e.r(i);var a=e("dc7d"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},e260:function(t,i,e){"use strict";e.r(i);var a=e("f44e"),n=e("121c");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("a224");var s=e("828b"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"2c2e5051",null,!1,a["a"],void 0);i["default"]=r.exports},e487:function(t,i,e){var a=e("ff44");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("0d6c272a",a,!0,{sourceMap:!1,shadowMode:!1})},f44e:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"jiangqie-timeline-head"},[t.setting.background&&t.setting.background.length>0?e("v-uni-image",{attrs:{src:t.setting.background,mode:"aspectFill"}}):t._e(),t.setting.title.length>0||t.setting.description.length>0?e("v-uni-view",{staticClass:"timeline-head-text"},[e("v-uni-text",[t._v(t._s(t.setting.title))]),e("v-uni-view",{staticClass:"timeline-head-describe"},[t._v(t._s(t.setting.description))])],1):t._e()],1),e("v-uni-scroll-view",{staticClass:"tab-view",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":0}},t._l(t.tabbar,(function(i,a){return e("v-uni-view",{key:a,staticClass:"tab-bar-item",class:t.currentTab==a?"active":"",attrs:{"data-current":a},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.swichNav.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"tab-bar-title"},[t._v(t._s(i))])],1)})),1),e("v-uni-view",{style:t.tl_background?"background: url("+t.tl_background+") repeat-y; background-position: -30rpx 0;":""},[t.posts.length>0?[e("v-uni-view",{staticClass:"jiangqie-timeline-view"},[t._l(t.posts,(function(i,a){return e("v-uni-view",{key:a,staticClass:"jiangqie-timeline-block",attrs:{"data-id":i.id},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handlerHotArticle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"jiangqie-timeline-times"},[e("v-uni-image",{attrs:{src:"/static/images/timelinedot.png",mode:"aspectFill"}}),e("v-uni-text",[t._v(t._s(i.time))])],1),e("v-uni-view",{staticClass:"jiangqie-timeline-box timeline-single"},[e("v-uni-view",{staticClass:"jiangqie-timeline-text"},[e("v-uni-view",{staticClass:"jiangqie-timeline-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"jiangqie-timeline-info"},[e("v-uni-view",{staticClass:"jiangqie-timeline-cmt"},[0==t.currentTab?[e("v-uni-image",{attrs:{src:"/static/images/ctm2.png",mode:"aspectFill"}}),t._v(t._s(i.views?i.views:""))]:1==t.currentTab?[e("v-uni-image",{attrs:{src:"/static/images/laud.png",mode:"aspectFill"}}),t._v(t._s(i.likes?i.likes:""))]:2==t.currentTab?[e("v-uni-image",{attrs:{src:"/static/images/ctm3.png",mode:"aspectFill"}}),t._v(t._s(i.favorites?i.favorites:""))]:3==t.currentTab?[e("v-uni-image",{attrs:{src:"/static/images/ctm.png",mode:"aspectFill"}}),t._v(t._s(i.comment_count?i.comment_count:""))]:t._e()],2),t._l(i.tags,(function(i,a){return e("v-uni-text",{key:a,staticClass:"jiangqie-timeline-tag"},[t._v(t._s(i.name))])}))],2)],1),e("v-uni-view",{staticClass:"jiangqie-timeline-image"},[e("v-uni-image",{attrs:{src:i.thumbnail,mode:"aspectFill"}})],1)],1)],1)})),e("jiangqie-loadmore",{attrs:{visible:t.loadding}}),e("jiangqie-nomore",{attrs:{visible:!t.pullUpOn}})],2)]:t.loaded?[e("jiangqie-no-data")]:t._e()],2)],1)},n=[]},ff44:function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,'.jiangqie-timeline-view[data-v-2c2e5051]{text-align:left;padding-left:%?66?%;padding-right:%?30?%}.jiangqie-timeline-block[data-v-2c2e5051]{display:block;position:relative;padding-top:%?20?%;margin-top:%?30?%;border-bottom:%?1?% solid #ddd}.jiangqie-timeline-times[data-v-2c2e5051]{position:absolute;top:%?-18?%;left:%?-38?%}.jiangqie-timeline-times uni-image[data-v-2c2e5051]{height:%?17?%;width:%?17?%;margin-right:%?20?%}.jiangqie-timeline-times uni-text[data-v-2c2e5051]{font-size:%?24?%;font-weight:400;color:#bbb}.jiangqie-timeline-box[data-v-2c2e5051]{padding:%?30?% %?0?%;background:#fff}.jiangqie-timeline-image[data-v-2c2e5051]{height:%?180?%;width:%?180?%}.jiangqie-timeline-image uni-image[data-v-2c2e5051]{height:100%;width:100%;border-radius:%?16?%}.jiangqie-timeline-text[data-v-2c2e5051]{text-align:left;width:%?440?%;overflow:hidden}.jiangqie-timeline-title[data-v-2c2e5051]{font-size:%?32?%;color:#333;font-weight:400;line-height:%?46?%;margin-bottom:%?24?%;max-height:%?92?%;overflow:hidden}.jiangqie-timeline-describe[data-v-2c2e5051]{font-size:%?24?%;color:#999;line-height:%?30?%}.jiangqie-timeline-info[data-v-2c2e5051]{font-size:%?22?%;color:#aaa;vertical-align:bottom;height:%?26?%}.jiangqie-timeline-cmt[data-v-2c2e5051]{float:right;padding-right:%?4?%}.jiangqie-timeline-cmt uni-image[data-v-2c2e5051]{vertical-align:middle;height:%?26?%;width:%?26?%;margin-right:%?8?%;border-radius:%?10?%;margin-bottom:%?8?%}.jiangqie-timeline-tag[data-v-2c2e5051]{float:left;line-height:%?32?%;height:%?30?%;padding:0 %?16?%;border:%?1?% solid #aaa;border-radius:%?26?%;margin-right:%?12?%}.jiangqie-news-tl-redline[data-v-2c2e5051]{padding:%?20?%;text-align:center}.jiangqie-news-tl-redlinebox[data-v-2c2e5051]{display:inline-table;padding:0 %?30?% %?4?%;background:#ffe8e8;border-radius:%?40?%;left:50%}.jiangqie-news-tl-redlinebox uni-text[data-v-2c2e5051]{font-weight:400;font-size:%?22?%;color:#cc6565;padding:0 %?10?%}.timeline-single[data-v-2c2e5051]{padding-top:%?10?%;display:flex;align-items:center;justify-content:space-between}.timeline-single .jiangqie-timeline-image[data-v-2c2e5051]{height:%?180?%;width:%?180?%}.timeline-big .jiangqie-timeline-image[data-v-2c2e5051]{width:100%;margin-bottom:%?30?%}.timeline-mult[data-v-2c2e5051]{clear:both;margin-bottom:%?30?%;min-height:%?180?%}.timeline-mult .jiangqie-timeline-image[data-v-2c2e5051]{float:left;margin-right:%?27?%;width:%?180?%}.timeline-mult .jiangqie-timeline-image[data-v-2c2e5051]:last-child{margin-right:0}.jiangqie-timeline-head[data-v-2c2e5051]{height:%?280?%;width:100%;position:relative}.jiangqie-timeline-head uni-image[data-v-2c2e5051]{height:%?280?%;width:100%}.timeline-head-text[data-v-2c2e5051]{width:%?610?%;background:rgba(0,0,0,.4);padding:%?20?% %?40?%;position:absolute;bottom:%?20?%;left:%?30?%;border-radius:%?16?%}.timeline-head-text uni-text[data-v-2c2e5051]{color:#fff;font-weight:500;line-height:%?40?%;font-size:%?36?%}.timeline-head-describe[data-v-2c2e5051]{color:#fff;font-weight:400;font-size:%?24?%}\n\n/*tabbar start*/.tab-more[data-v-2c2e5051]{height:%?100?%;width:%?120?%;position:absolute;right:0}.tab-more uni-image[data-v-2c2e5051]{height:%?100?%;width:%?120?%}[data-v-2c2e5051]::-webkit-scrollbar{width:0;height:0;color:transparent}.tab-view[data-v-2c2e5051]::before{content:"";position:absolute;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0}.tab-view[data-v-2c2e5051]{position:-webkit-sticky;position:sticky;top:var(--window-top);width:100%;height:%?100?%;overflow:hidden;box-sizing:border-box;left:0;z-index:99;background:#fff;white-space:nowrap;border-bottom:%?1?% solid #ddd}.tab-bar-item[data-v-2c2e5051]{padding:0;height:%?100?%;width:15%;line-height:%?100?%;margin:0 %?38?%;display:inline-block;text-align:center;box-sizing:border-box}.tab-bar-title[data-v-2c2e5051]{height:%?100?%;line-height:%?100?%;font-size:%?32?%;color:#999;font-weight:400}.active[data-v-2c2e5051]{border-bottom:%?6?% solid #e6321d}.active .tab-bar-title[data-v-2c2e5051]{color:#e6321d!important;font-size:%?36?%;font-weight:700}\n\n/*tabbar end*/.scoll-y[data-v-2c2e5051]{height:100%}',""]),t.exports=i}}]);