(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fh-2"],{"3f5f":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"background-color":"#383335","text-align":"center"},attrs:{id:"app"}},[e("div",{staticClass:"ios-wechat-qq"},[e("div",{staticStyle:{margin:"0 auto",width:"334px"},attrs:{id:"Pan_QQ"}},[e("img",{staticStyle:{margin:"0px 0"},attrs:{width:"234px",src:"https://img.alicdn.com/imgextra/i1/3167704208/O1CN01ZxNMlX1gxJS8zr7Pu_!!3167704208.png"}}),e("div",{staticClass:"download-area"},[e("img",{staticClass:"logo",attrs:{src:"https://pp.myapp.com/ma_icon/0/icon_11384_1538964692/96",alt:""}}),e("div",[e("div",{staticClass:"t-1",staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.downloadUrl))]),e("div",{staticClass:"t-2"},[t._v("您也可以复制本站网址，到其它浏览器打开")])]),e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyUrl.apply(void 0,arguments)}}},[t._v("复制")])],1)])])])},o=[]},5148:function(t,a,e){"use strict";e.r(a);var i=e("ff1c"),o=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},"88fe":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,"html[data-v-4e726b0a]{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *[data-v-4e726b0a]{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:transparent}body[data-v-4e726b0a], html[data-v-4e726b0a]{font-family:sans-serif}a[data-v-4e726b0a]:hover{text-decoration:underline}a[data-v-4e726b0a], ins[data-v-4e726b0a]{text-decoration:none}#app[data-v-4e726b0a], body[data-v-4e726b0a], html[data-v-4e726b0a]{width:100%;height:100%;margin:0;padding:0}.ios-wechat-qq[data-v-4e726b0a]{height:100%;width:100%;position:relative}.left-22[data-v-4e726b0a]{width:38%;margin-top:2.32rem;float:left}.right-33[data-v-4e726b0a]{width:38%;margin-right:10px;float:right}.description-1[data-v-4e726b0a]{font-size:15px;margin-left:5px;margin-top:30%;float:left}.description-1 .t-1[data-v-4e726b0a]{color:#757575;letter-spacing:0}.description-1 .t-2[data-v-4e726b0a]{color:#0f0f0f;letter-spacing:0}.line-1[data-v-4e726b0a]{width:14%;float:right}.line-2[data-v-4e726b0a]{top:5.33333rem;width:8%;float:left}.description-2[data-v-4e726b0a]{text-align:center;font-size:15px;margin-left:10px;margin-top:10px;float:right}.download-area[data-v-4e726b0a]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;width:80%;margin:40% auto auto auto;padding:5%;background:#f9f9f9;border-radius:4px;-ms-flex-align:center;align-items:center}.download-area .logo[data-v-4e726b0a]{width:15%;margin-right:5%}.download-area .t-1[data-v-4e726b0a]{text-align:left;font-size:14px;color:#fb7299}.download-area .t-2[data-v-4e726b0a]{text-align:left;margin-top:.21333rem;font-size:15px;color:#999}.download-area .button[data-v-4e726b0a]{font-size:14px;color:#fff;width:5rem;height:1.5rem;line-height:1.5rem;text-align:center;background:#fb7299;border-radius:4px;margin-left:auto}",""]),t.exports=a},da5b:function(t,a,e){"use strict";e.r(a);var i=e("3f5f"),o=e("5148");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("e4b1");var r=e("828b"),d=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"4e726b0a",null,!1,i["a"],void 0);a["default"]=d.exports},dce6:function(t,a,e){var i=e("88fe");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("967d").default;o("3e5189af",i,!0,{sourceMap:!1,shadowMode:!1})},e4b1:function(t,a,e){"use strict";var i=e("dce6"),o=e.n(i);o.a},ff1c:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("4626"),e("5ac7");var i={data:function(){return{downloadUrl:""}},created:function(){var t=this.$route.fullPath;this.downloadUrl=t.includes("?")?t.split("?")[1]:"默认值"},methods:{copyUrl:function(){var t=this;uni.setClipboardData({data:this.downloadUrl,success:function(){t.copySuccess=!0,setTimeout((function(){t.copySuccess=!1}),2e3)}})}}};a.default=i}}]);