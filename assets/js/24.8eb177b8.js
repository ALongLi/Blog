(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{251:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"element样式更改失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element样式更改失效"}},[s._v("#")]),s._v(" element样式更改失效")]),s._v(" "),a("p",[s._v("在使用vue开发的时候，后台系统大都使用element ui ，书写组件的时候都会给style加上scope，该组件样式只能够在本组件才能执行，就不会影响全局样式了，但是更改Element组件样式的时候就不起作用了，去掉scope就生效，但是就变成全局样式了。")]),s._v(" "),a("h2",{attrs:{id:"更改样式单独写在全局样式里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改样式单独写在全局样式里"}},[s._v("#")]),s._v(" 更改样式单独写在全局样式里")]),s._v(" "),a("p",[s._v("直接写在全局样式里，但是要给样式加个限定class， .customClassName，这个是我以前的写法")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* steps-box是限定的父元素className */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".steps-box .el-steps .iconfont")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 26px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"使用深度作用选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用深度作用选择器"}},[s._v("#")]),s._v(" 使用深度作用选择器")]),s._v(" "),a("p",[s._v(".vue中的vue-loader提供了一个新写法能够直接更改样式，如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v(" <style scoped>\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* steps-box是限定的父元素className */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".steps-box >>> .el-steps .iconfont")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 26px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n</style>\n")])])]),a("p",[s._v("如果使用了scss语法，则无法正确解析 >>>。这种情况下你可以使用 /deep/。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<style lang="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss"')]),s._v(" scoped>\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* steps-box是限定的父元素className */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".steps-box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("/deep/ .el-steps .iconfont")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 26px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n</style>\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);