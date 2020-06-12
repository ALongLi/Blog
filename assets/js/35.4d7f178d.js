(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{263:function(n,t,e){"use strict";e.r(t);var s=e(2),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[n._v("#")]),n._v(" 介绍")]),n._v(" "),e("p",[n._v("这个文档的内容主要是介绍 vue-cli 创建项目的一些建议以及规范")]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),e("p",[n._v("以下内容仅为个人建议。")])]),n._v(" "),e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[n._v("#")]),n._v(" 目录结构")]),n._v(" "),e("div",{staticClass:"language-tree extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("├─.browserslistrc ---------- // 浏览器配置\n├─.eslintrc.js ------------- // eslint配置\n├─.gitignore --------------- // git忽略文件\n├─babel.config.js ---------- // babel 插件配置\n├─mock --------------------- // 数据mock\n├─package-lock.json\n├─package.json\n├─postcss.config.js -------- // postcss 配置\n├─public\n│ ├─favicon.ico\n│ ├─images\n│ └─index.html\n├─src\n│ ├─App.vue\n│ ├─assets\n│ │ ├─css\n│ │ │ ├─main.scss\n│ │ │ ├─mixin.scss\n│ │ │ ├─transition.scss\n│ │ │ ├─_global.scss\n│ │ │ └─_variable.scss\n│ │ ├─font\n│ │ ├─img\n│ │ ├─json\n│ │ └─logo.png\n│ ├─components\n│ │ └─HelloWorld.vue\n│ ├─fetch\n│ │ ├─excelDownload.js ----- // excel文件下载函数\n│ │ ├─index.js ------------- // api接口管理入口\n│ │ └─instance.js ---------- // axios实例化\n│ ├─filters\n│ │ └─index.js ------------- // 全局过滤器\n│ ├─lib -------------------- // 第三方插件库\n│ │ ├─eoa.js\n│ │ └─initEcharts.js ------- // 初始化echarts配置\n│ ├─main.js ---------------- // app入口文件\n│ ├─router.js\n│ ├─skeleton --------------- // 骨架屏\n│ │ ├─entry-skeleton.js ---- // 骨架屏入口\n│ │ ├─Skeleton1.vue\n│ │ └─Skeleton2.vue\n│ ├─store.js\n│ ├─utils ------------------ // 工具函数\n│ │ └─dom.js --------------- // dom操作\n│ └─views\n│   ├─demo.vue\n│   └─Home.vue\n└─vue.config.js\n")])])]),e("p",[n._v("这里是一个小型项目的目录结构，中大型可以在此基础上扩展，比如 router，store 等都可以单独一个文件夹，里面放上相应的配置")]),n._v(" "),e("h2",{attrs:{id:"项目地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[n._v("#")]),n._v(" 项目地址")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 克隆项目")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" clone git@gitlab.idc.safecenter.cn:lal/jsdata-mobile.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 进入项目目录")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" jsdata-mobile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("set")]),n._v(" registry https://registry.npm.taobao.org\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装依赖")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 跑服务")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" run serve\n\n")])])]),e("p",[n._v("可以通过以上操作查看这个项目")]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),e("p",[n._v("强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug ，我已经很久没用过 cnpm 了，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。")]),n._v(" "),e("p",[n._v("Windows 用户若安装不成功（大家基本都是），很大概率是"),e("code",[n._v("node-sass")]),n._v("安装失败，"),e("a",{attrs:{href:"http://192.168.9.116:8090/pages/viewpage.action?pageId=9424363",target:"_blank",rel:"noopener noreferrer"}},[n._v("解决方案"),e("OutboundLink")],1),n._v("。")])]),n._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[n._v("#")]),n._v(" 其他")]),n._v(" "),e("p",[n._v("在公司 wiki 处分享的有项目中用到的一些技术")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://192.168.9.116:8090/pages/viewpage.action?pageId=9424363",target:"_blank",rel:"noopener noreferrer"}},[n._v("node-sass 安装失败解决方法"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://192.168.9.116:8090/pages/viewpage.action?pageId=16843360",target:"_blank",rel:"noopener noreferrer"}},[n._v("Element 组件样式更改无效解决方案"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://192.168.9.116:8090/pages/viewpage.action?pageId=16843455",target:"_blank",rel:"noopener noreferrer"}},[n._v("el-scrollbar 滚动条组件"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://192.168.9.116:8090/pages/viewpage.action?pageId=9421936",target:"_blank",rel:"noopener noreferrer"}},[n._v("前端文件下载"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://192.168.9.116:8090/pages/viewpage.action?pageId=16844368",target:"_blank",rel:"noopener noreferrer"}},[n._v("给路由跳转加上进度条(vue)"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);