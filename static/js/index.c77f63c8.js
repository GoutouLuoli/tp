(function(e){function n(n){for(var t,r,s=n[0],g=n[1],c=n[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(t in g)Object.prototype.hasOwnProperty.call(g,t)&&(e[t]=g[t]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,s=1;s<a.length;s++){var g=a[s];0!==i[g]&&(t=!1)}t&&(o.splice(n--,1),e=r(r.s=a[0]))}return e}var t={},i={index:0},o=[];function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var n=[],a=i[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,t){a=i[e]=[n,t]}));n.push(a[2]=t);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"static/js/"+({"pages-2048-index":"pages-2048-index","pages-AlgorithmIntroduction":"pages-AlgorithmIntroduction","pages-about-about":"pages-about-about","pages-article-article~pages-hot-hot~pages-index-index~pages-list-list":"pages-article-article~pages-hot-hot~pages-index-index~pages-list-list","pages-article-article~pages-index-index":"pages-article-article~pages-index-index","pages-index-index":"pages-index-index","pages-article-article~pages-viewhtml-viewhtml":"pages-article-article~pages-viewhtml-viewhtml","pages-article-article":"pages-article-article","pages-hot-hot":"pages-hot-hot","pages-list-list":"pages-list-list","pages-viewhtml-viewhtml":"pages-viewhtml-viewhtml","pages-base64":"pages-base64","pages-categories-categories":"pages-categories-categories","pages-fh-1":"pages-fh-1","pages-fh-2":"pages-fh-2","pages-fh-index":"pages-fh-index","pages-login-login":"pages-login-login","pages-login-ystk":"pages-login-ystk","pages-mosi-index":"pages-mosi-index","pages-search-search":"pages-search-search","pages-ucenter-ucenter":"pages-ucenter-ucenter","pages-verify-verify":"pages-verify-verify","pages-webview-webview":"pages-webview-webview","pages-wgg~pages-ygg":"pages-wgg~pages-ygg","pages-wgg":"pages-wgg","pages-ygg":"pages-ygg"}[e]||e)+"."+{"pages-2048-index":"ca5fb015","pages-AlgorithmIntroduction":"b283be6c","pages-about-about":"aa89ac6c","pages-article-article~pages-hot-hot~pages-index-index~pages-list-list":"ae820b8f","pages-article-article~pages-index-index":"342161a2","pages-index-index":"4050e907","pages-article-article~pages-viewhtml-viewhtml":"d6ed7c76","pages-article-article":"e7e1da1f","pages-hot-hot":"9d17199d","pages-list-list":"d4e870cd","pages-viewhtml-viewhtml":"793fa34c","pages-base64":"2e1aea22","pages-categories-categories":"53acbf5c","pages-fh-1":"54f78e58","pages-fh-2":"3d53b09e","pages-fh-index":"903c758b","pages-login-login":"45837f9f","pages-login-ystk":"d6721397","pages-mosi-index":"2f5ebb37","pages-search-search":"39d4375e","pages-ucenter-ucenter":"4b4c5c10","pages-verify-verify":"221faf20","pages-webview-webview":"0b0cda25","pages-wgg~pages-ygg":"77eca168","pages-wgg":"2e24569b","pages-ygg":"0f9a344c"}[e]+".js"}(e);var g=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(c);var a=i[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;g.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",g.name="ChunkLoadError",g.type=t,g.request=o,a[1](g)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,a){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(a,t,function(n){return e[n]}.bind(null,t));return a},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="./",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],g=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=g;o.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("2fe5")},"2b7b":function(e,n,a){var t=a("ea2b");function i(){var e=uni.getStorageSync(t.JQ_USER_KEY);return!!e&&e.token}function o(){uni.setStorageSync(t.JQ_USER_KEY,!1)}e.exports={checkSession:function(){uni.checkSession({fail:function(){o()}})},logout:o,getToken:i,isLogin:i,setUser:function(e){uni.setStorageSync(t.JQ_USER_KEY,e)},getUser:function(){return uni.getStorageSync(t.JQ_USER_KEY)}}},"2fe5":function(e,n,a){"use strict";var t=a("f5bd").default,i=t(a("9b1b"));a("3dde"),a("a8b2"),a("1480"),a("6e4a"),a("64b9"),a("9337");var o=t(a("9b8e")),r=t(a("e747"));o.default.config.productionTip=!1,r.default.mpType="app";var s=new o.default((0,i.default)({},r.default));s.$mount()},3104:function(e,n,a){"use strict";a.r(n);var t=a("76a3"),i=a.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=i.a},3638:function(e,n,a){"use strict";var t=a("9edf"),i=a.n(t);i.a},"3ba0":function(e,n,a){var t=a("c86c");n=t(!1),n.push([e.i,'uni-page-body{background:#fff}body.?%PAGE?%{background:#fff}uni-button::after{border-radius:0;border:none}.jiangqie-loadmore{width:48%;margin:1.5em auto;line-height:1.5em;font-size:%?24?%;text-align:center}.jiangqie-nomore{position:relative;text-align:center;display:flex;justify-content:center;margin-top:%?10?%;padding-bottom:%?44?%}.jiangqie-nomore::before{content:"";position:absolute;border-bottom:%?1?% solid #e5e5e5;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:%?360?%;top:%?18?%}.jiangqie-text{position:absolute;color:#999;font-size:%?24?%;text-align:center;padding:0 %?18?%;height:%?36?%;line-height:%?36?%;z-index:1}.jiangqie-nomore-dot{position:relative;text-align:center;display:flex;justify-content:center;margin-top:%?10?%;padding-bottom:%?40?%}.jiangqie-nomore-dot::before{content:"";position:absolute;border-bottom:%?1?% solid #e5e5e5;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:%?360?%;top:%?18?%}.jiangqie-dot-text{position:absolute;color:#e5e5e5;font-size:10px;text-align:center;width:%?50?%;height:%?36?%;line-height:%?36?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center;z-index:1}',""]),e.exports=n},"549e":function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var t=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},"64b9":function(e,n,a){"use strict";(function(e){var n=a("f5bd").default;a("473f"),a("bf0f"),a("de6c"),a("5c47"),a("a1c1");var t=n(a("9b8e")),i={keys:function(){return[]}};e["____BEBBCA7____"]=!0,delete e["____BEBBCA7____"],e.__uniConfig={tabBar:{color:"#bfbfbf",selectedColor:"#e6372f",backgroundColor:"#FFFFFF",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"/static/images/tabbar/index_gray.png",selectedIconPath:"/static/images/tabbar/index_active.png",redDot:!1,badge:""},{pagePath:"pages/categories/categories",text:"分类",iconPath:"/static/images/tabbar/cat_gray.png",selectedIconPath:"/static/images/tabbar/cat_active.png",redDot:!1,badge:""},{pagePath:"pages/hot/hot",text:"热榜",iconPath:"/static/images/tabbar/hot_gray.png",selectedIconPath:"/static/images/tabbar/hot_active.png",redDot:!1,badge:""},{pagePath:"pages/ucenter/ucenter",text:"我的",iconPath:"/static/images/tabbar/my_gray.png",selectedIconPath:"/static/images/tabbar/my_active.png",redDot:!1,badge:""}],borderStyle:"black"},networkTimeout:{request:1e4,connectSocket:1e4,uploadFile:1e4,downloadFile:1e4},sitemapLocation:"sitemap.json",globalStyle:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#E6321D",navigationBarTitleText:"WeChat",navigationBarTextStyle:"white",backgroundColor:"#F7F7F7",backgroundColorTop:"#F7F7F7",backgroundColorBottom:"#F7F7F7"}},e.__uniConfig.compilerVersion="4.15",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__BEBBCA7",e.__uniConfig.appName="北的屋",e.__uniConfig.appVersion="2.2.9",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:1e4,connectSocket:1e4,uploadFile:1e4,downloadFile:1e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(n);return Object.assign(e[a]||(e[a]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-index-index",(function(e){var n={component:Promise.all([a.e("pages-article-article~pages-hot-hot~pages-index-index~pages-list-list"),a.e("pages-article-article~pages-index-index"),a.e("pages-index-index")]).then(function(){return e(a("a452"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-ygg",(function(e){var n={component:Promise.all([a.e("pages-wgg~pages-ygg"),a.e("pages-ygg")]).then(function(){return e(a("93d8"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-fh-index",(function(e){var n={component:a.e("pages-fh-index").then(function(){return e(a("61e7"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-base64",(function(e){var n={component:a.e("pages-base64").then(function(){return e(a("02fe"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-2048-index",(function(e){var n={component:a.e("pages-2048-index").then(function(){return e(a("608c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-mosi-index",(function(e){var n={component:a.e("pages-mosi-index").then(function(){return e(a("3050"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-AlgorithmIntroduction",(function(e){var n={component:a.e("pages-AlgorithmIntroduction").then(function(){return e(a("119f"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-wgg",(function(e){var n={component:Promise.all([a.e("pages-wgg~pages-ygg"),a.e("pages-wgg")]).then(function(){return e(a("f5477"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-hot-hot",(function(e){var n={component:Promise.all([a.e("pages-article-article~pages-hot-hot~pages-index-index~pages-list-list"),a.e("pages-hot-hot")]).then(function(){return e(a("e260"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-ucenter-ucenter",(function(e){var n={component:a.e("pages-ucenter-ucenter").then(function(){return e(a("bf11"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-search-search",(function(e){var n={component:a.e("pages-search-search").then(function(){return e(a("e8df"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-list-list",(function(e){var n={component:Promise.all([a.e("pages-article-article~pages-hot-hot~pages-index-index~pages-list-list"),a.e("pages-list-list")]).then(function(){return e(a("d31f"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-categories-categories",(function(e){var n={component:a.e("pages-categories-categories").then(function(){return e(a("0dd8"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-login-ystk",(function(e){var n={component:a.e("pages-login-ystk").then(function(){return e(a("cebb"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-article-article",(function(e){var n={component:Promise.all([a.e("pages-article-article~pages-hot-hot~pages-index-index~pages-list-list"),a.e("pages-article-article~pages-viewhtml-viewhtml"),a.e("pages-article-article~pages-index-index"),a.e("pages-article-article")]).then(function(){return e(a("907e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-about-about",(function(e){var n={component:a.e("pages-about-about").then(function(){return e(a("ff2d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-login-login",(function(e){var n={component:a.e("pages-login-login").then(function(){return e(a("fd33"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-viewhtml-viewhtml",(function(e){var n={component:Promise.all([a.e("pages-article-article~pages-viewhtml-viewhtml"),a.e("pages-viewhtml-viewhtml")]).then(function(){return e(a("1842"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-webview-webview",(function(e){var n={component:a.e("pages-webview-webview").then(function(){return e(a("ba8c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-verify-verify",(function(e){var n={component:a.e("pages-verify-verify").then(function(){return e(a("0ed6"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-fh-1",(function(e){var n={component:a.e("pages-fh-1").then(function(){return e(a("363c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-fh-2",(function(e){var n={component:a.e("pages-fh-2").then(function(){return e(a("da5b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"首页",navigationStyle:"custom",onReachBottomDistance:50})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/ygg",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Xbb解密"})},[e("pages-ygg",{slot:"page"})])}},meta:{name:"pages-ygg",isNVue:!1,maxWidth:0,pagePath:"pages/ygg",windowTop:44}},{path:"/pages/fh/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"链接设置"})},[e("pages-fh-index",{slot:"page"})])}},meta:{name:"pages-fh-index",isNVue:!1,maxWidth:0,pagePath:"pages/fh/index",windowTop:44}},{path:"/pages/base64",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"base64"})},[e("pages-base64",{slot:"page"})])}},meta:{name:"pages-base64",isNVue:!1,maxWidth:0,pagePath:"pages/base64",windowTop:44}},{path:"/pages/2048/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"2048"})},[e("pages-2048-index",{slot:"page"})])}},meta:{name:"pages-2048-index",isNVue:!1,maxWidth:0,pagePath:"pages/2048/index",windowTop:44}},{path:"/pages/mosi/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"摩斯密码"})},[e("pages-mosi-index",{slot:"page"})])}},meta:{name:"pages-mosi-index",isNVue:!1,maxWidth:0,pagePath:"pages/mosi/index",windowTop:44}},{path:"/pages/AlgorithmIntroduction",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"介绍"})},[e("pages-AlgorithmIntroduction",{slot:"page"})])}},meta:{name:"pages-AlgorithmIntroduction",isNVue:!1,maxWidth:0,pagePath:"pages/AlgorithmIntroduction",windowTop:44}},{path:"/pages/wgg",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Xbb解密"})},[e("pages-wgg",{slot:"page"})])}},meta:{name:"pages-wgg",isNVue:!1,maxWidth:0,pagePath:"pages/wgg",windowTop:44}},{path:"/pages/hot/hot",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"热榜",onReachBottomDistance:50})},[e("pages-hot-hot",{slot:"page"})])}},meta:{id:2,name:"pages-hot-hot",isNVue:!1,maxWidth:0,pagePath:"pages/hot/hot",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/ucenter/ucenter",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"我的",backgroundColorTop:"#DA2A1A",navigationBarBackgroundColor:"#DA2A1A",backgroundColorBottom:"#DA2A1A",onReachBottomDistance:50})},[e("pages-ucenter-ucenter",{slot:"page"})])}},meta:{id:3,name:"pages-ucenter-ucenter",isNVue:!1,maxWidth:0,pagePath:"pages/ucenter/ucenter",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/search/search",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"搜索"})},[e("pages-search-search",{slot:"page"})])}},meta:{name:"pages-search-search",isNVue:!1,maxWidth:0,pagePath:"pages/search/search",windowTop:44}},{path:"/pages/list/list",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"...",onReachBottomDistance:50})},[e("pages-list-list",{slot:"page"})])}},meta:{name:"pages-list-list",isNVue:!1,maxWidth:0,pagePath:"pages/list/list",windowTop:44}},{path:"/pages/categories/categories",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"文章分类"})},[e("pages-categories-categories",{slot:"page"})])}},meta:{id:4,name:"pages-categories-categories",isNVue:!1,maxWidth:0,pagePath:"pages/categories/categories",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/login/ystk",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"隐私条款及用户协议"})},[e("pages-login-ystk",{slot:"page"})])}},meta:{name:"pages-login-ystk",isNVue:!1,maxWidth:0,pagePath:"pages/login/ystk",windowTop:44}},{path:"/pages/article/article",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"文章详情",onReachBottomDistance:50})},[e("pages-article-article",{slot:"page"})])}},meta:{name:"pages-article-article",isNVue:!1,maxWidth:0,pagePath:"pages/article/article",windowTop:44}},{path:"/pages/about/about",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"关于我们"})},[e("pages-about-about",{slot:"page"})])}},meta:{name:"pages-about-about",isNVue:!1,maxWidth:0,pagePath:"pages/about/about",windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",navigationBarBackgroundColor:"#DA291A"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/viewhtml/viewhtml",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"..."})},[e("pages-viewhtml-viewhtml",{slot:"page"})])}},meta:{name:"pages-viewhtml-viewhtml",isNVue:!1,maxWidth:0,pagePath:"pages/viewhtml/viewhtml",windowTop:44}},{path:"/pages/webview/webview",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-webview-webview",{slot:"page"})])}},meta:{name:"pages-webview-webview",isNVue:!1,maxWidth:0,pagePath:"pages/webview/webview",windowTop:44}},{path:"/pages/verify/verify",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-verify-verify",{slot:"page"})])}},meta:{name:"pages-verify-verify",isNVue:!1,maxWidth:0,pagePath:"pages/verify/verify",windowTop:44}},{path:"/pages/fh/1",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"请复制后到浏览器打开"})},[e("pages-fh-1",{slot:"page"})])}},meta:{name:"pages-fh-1",isNVue:!1,maxWidth:0,pagePath:"pages/fh/1",windowTop:44}},{path:"/pages/fh/2",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:""})},[e("pages-fh-2",{slot:"page"})])}},meta:{name:"pages-fh-2",isNVue:!1,maxWidth:0,pagePath:"pages/fh/2",windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("0ee4"))},"76a3":function(e,n,a){"use strict";a("6a54");var t=a("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t(a("9b8e")),a("2b7b");n.default={globalData:{appName:"北的屋"},onLaunch:function(){},methods:{}}},"9edf":function(e,n,a){var t=a("3ba0");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=a("967d").default;i("e1f2f6dc",t,!0,{sourceMap:!1,shadowMode:!1})},e747:function(e,n,a){"use strict";a.r(n);var t=a("549e"),i=a("3104");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(n,e,(function(){return i[e]}))}(o);a("3638");var r=a("828b"),s=Object(r["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=s.exports},ea2b:function(e,n){e.exports={JQ_VERSION:"2.2.9",JQ_PER_PAGE_COUNT:10,JQ_SEARCH_MAX_COUNT:10,JQ_SEARCH_KEY:"jiangqie_search",JQ_USER_KEY:"jiangqie_user"}}});