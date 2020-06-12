(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{248:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-sass下载失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-sass下载失败"}},[s._v("#")]),s._v(" node-sass下载失败")]),s._v(" "),t("p",[s._v("在现代开发过程中，css的书写方式也便了，scss无疑是很常用的，但是编译为css需要我们安装node-sass模块，这个包安装失败的几率几乎为100%。\n因为npm 安装 node-sass 依赖时，会从 github.com 上下载 .node 文件。由于国内网络环境的问题，这个下载时间可能会很长，甚至导致超时失败。\n下面记录几种解决方式")]),s._v(" "),t("h2",{attrs:{id:"安装时使用淘宝镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装时使用淘宝镜像"}},[s._v("#")]),s._v(" 安装时使用淘宝镜像")]),s._v(" "),t("p",[s._v("设置变量 sass_binary_site，指向淘宝镜像地址。示例")]),s._v(" "),t("ul",[t("li",[s._v("优点 ：可以拿到其返回时机，可以做交互")]),s._v(" "),t("li",[s._v("缺点 ：线上会存储大量的中间临时文件，可以用设置时限来优化。另外涉及用户隐私的问题，可以用token等验证机制实现。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i node-sass --sass_binary_site"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/node-sass/\n")])])]),t("h2",{attrs:{id:"创建-npmrc文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-npmrc文件"}},[s._v("#")]),s._v(" 创建 .npmrc文件")]),s._v(" "),t("p",[s._v("在项目根目录创建.npmrc文件，然后在文件中写入下面代码")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sass_binary_site")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/node-sass/\n\n  //  随后卸载node-sass重新安装\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall node-sass\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node-sass\n")])])]),t("h2",{attrs:{id:"设置全局代理（个人推荐）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置全局代理（个人推荐）"}},[s._v("#")]),s._v(" 设置全局代理（个人推荐）")]),s._v(" "),t("p",[s._v("上面的方法解决了问题，但是下次再安装还要重新指定代理路径，直接设置全局代理一次配置，终身使用")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);