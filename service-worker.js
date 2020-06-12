/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1cf0e531cea0b4efe63100a935b7ac37"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.45a4b416.css",
    "revision": "cc213840b0aa94059a87923660befced"
  },
  {
    "url": "assets/img/browser.c410deac.png",
    "revision": "c410deaca20d2cd4244acc2405df56f7"
  },
  {
    "url": "assets/img/create-eslint.6c5b6f39.gif",
    "revision": "6c5b6f39d16e01771fd603c3a3f66a1e"
  },
  {
    "url": "assets/img/css_gzip.6af4ea24.png",
    "revision": "6af4ea240ef9a0758f91020c060c9d1e"
  },
  {
    "url": "assets/img/echarts.3fd01554.png",
    "revision": "3fd01554d9b798cc306d7cad70de8cde"
  },
  {
    "url": "assets/img/echarts.min.ddd4ee79.png",
    "revision": "ddd4ee7935bd6f29e5cca241afcf4f3c"
  },
  {
    "url": "assets/img/electron-install.1f27f590.gif",
    "revision": "1f27f590dbe10daca8263dd19e2971cc"
  },
  {
    "url": "assets/img/electron-vue-start.2d9ac1cb.png",
    "revision": "2d9ac1cb829adffcd9ce1715d2978825"
  },
  {
    "url": "assets/img/eslintFixed.878d7e3e.gif",
    "revision": "878d7e3e87e80cf0793c88d047517748"
  },
  {
    "url": "assets/img/has-skeleton.4ef4cf09.gif",
    "revision": "4ef4cf098dd85e5389ca3f64132748a3"
  },
  {
    "url": "assets/img/icon.723fd79b.gif",
    "revision": "723fd79bbe4c9269965c167ae36e5aa5"
  },
  {
    "url": "assets/img/layout.142f44f2.png",
    "revision": "142f44f2be93fca04f4460c431109d32"
  },
  {
    "url": "assets/img/normal-page.a0921d19.gif",
    "revision": "a0921d1902652b29c4f7917b566a4045"
  },
  {
    "url": "assets/img/oa.8ab660b7.gif",
    "revision": "8ab660b79271a005241f3aa7e42b45b5"
  },
  {
    "url": "assets/img/oa2.d09e5748.gif",
    "revision": "d09e5748d8a3b81191acf84f4448a803"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/skeleton-no.c48d3b2a.gif",
    "revision": "c48d3b2ae9e5f19da9d1da35a0029696"
  },
  {
    "url": "assets/js/10.574f5b7a.js",
    "revision": "71e9866a38e7ec73aac79dc1c5f2f85b"
  },
  {
    "url": "assets/js/11.5bff9711.js",
    "revision": "8ee639a70369dcae2e6fc466fbc5b756"
  },
  {
    "url": "assets/js/12.ff63d05f.js",
    "revision": "f4fc922f6ad3afb84f1ad7530bcf337d"
  },
  {
    "url": "assets/js/13.d013621e.js",
    "revision": "548da9c0ba9ed51718926f5dedcb9514"
  },
  {
    "url": "assets/js/14.a8e96e0a.js",
    "revision": "016d3639e831ac474462c468de0c8abc"
  },
  {
    "url": "assets/js/15.1b1c9dd3.js",
    "revision": "8203a96c4243c620ec39c5f2602074e5"
  },
  {
    "url": "assets/js/16.7ca626cc.js",
    "revision": "92ca90b007212f0cf84ee7acfb885221"
  },
  {
    "url": "assets/js/17.a6207ad6.js",
    "revision": "1f800dcfcbd26ae6c0ecb25092b38593"
  },
  {
    "url": "assets/js/18.c7f94dce.js",
    "revision": "ad09d447906814f64a42830b0048b043"
  },
  {
    "url": "assets/js/19.587256dd.js",
    "revision": "fd6703b9667b323b5d8cc5a8bccbfedb"
  },
  {
    "url": "assets/js/2.1d0a08e0.js",
    "revision": "fe7f3eae11768a1d9125e07d581ec6ae"
  },
  {
    "url": "assets/js/20.071cb7d5.js",
    "revision": "ea0a23dec7da070dba9fd4e01bb3f1b6"
  },
  {
    "url": "assets/js/21.38ccae86.js",
    "revision": "797302af56397f39d6c98fa3926aeb36"
  },
  {
    "url": "assets/js/22.0e2ff414.js",
    "revision": "25ea7adb6461f508d340b0e1f8d196fd"
  },
  {
    "url": "assets/js/23.e0be07a6.js",
    "revision": "45fcf464ad9faf5f937d5eea419c81e2"
  },
  {
    "url": "assets/js/24.8eb177b8.js",
    "revision": "bdb991bae48cc8b45e6938d6670c66b8"
  },
  {
    "url": "assets/js/25.0bf22208.js",
    "revision": "b9ca8d4dd1c8d307d661d0b64320b4b5"
  },
  {
    "url": "assets/js/26.4f5e5123.js",
    "revision": "0c434b0aff061c86f0bfebf359a8bbbd"
  },
  {
    "url": "assets/js/27.34b51861.js",
    "revision": "5900e4049212fea35c19ee7c4e64f949"
  },
  {
    "url": "assets/js/28.aa1ce9b7.js",
    "revision": "aedb675a4e09cd4bf29b4c4e981b8e61"
  },
  {
    "url": "assets/js/29.dbd4593f.js",
    "revision": "7f3c12207524e3c00a4f7add7c6e4789"
  },
  {
    "url": "assets/js/3.96cb2bff.js",
    "revision": "b7acab43ba2c07a4741c38ca062e7d0c"
  },
  {
    "url": "assets/js/30.277ba010.js",
    "revision": "f1242223471e7d638ceae1a8468ce3f3"
  },
  {
    "url": "assets/js/31.f35095c0.js",
    "revision": "9cbf19d7a3048c0f8affebef307a1cf1"
  },
  {
    "url": "assets/js/32.342b25d7.js",
    "revision": "844107d7c892fab0898707894eb63e62"
  },
  {
    "url": "assets/js/33.6e14f421.js",
    "revision": "9fba795904557276edf3d025aac2c725"
  },
  {
    "url": "assets/js/34.5d8820c9.js",
    "revision": "55e2a97aada7a3532cde0ffe144b590d"
  },
  {
    "url": "assets/js/35.4d7f178d.js",
    "revision": "413e90009d2ebd9e62327faf8e93451e"
  },
  {
    "url": "assets/js/36.6c7d2c30.js",
    "revision": "df67c96a5f18705485769b174754818a"
  },
  {
    "url": "assets/js/37.2f0996a2.js",
    "revision": "a2bb3e94570a12f3bbfca0ce4ab3cce6"
  },
  {
    "url": "assets/js/38.dc2a042f.js",
    "revision": "6690bfbda3b57ef0c005ebe3a1cb17f0"
  },
  {
    "url": "assets/js/39.a07087ab.js",
    "revision": "90a96f6bdf57dcfb321e911fda78f12f"
  },
  {
    "url": "assets/js/4.d1bdaa8b.js",
    "revision": "ec96814f58cf66551fe9b49f7532fa98"
  },
  {
    "url": "assets/js/40.30ce39fb.js",
    "revision": "685f5cfeb44ee59e73c77adb4f582000"
  },
  {
    "url": "assets/js/41.7c4b3c79.js",
    "revision": "8ba2870e0bba616a060154bd7d378d8c"
  },
  {
    "url": "assets/js/42.7cdcd873.js",
    "revision": "22b886285cb33cd3bb5409f3bffd4241"
  },
  {
    "url": "assets/js/43.22023e35.js",
    "revision": "0ef203deab102e20a6c0001c3717691a"
  },
  {
    "url": "assets/js/44.bd11e721.js",
    "revision": "a6cde6fc729d289a0e46f50015e02609"
  },
  {
    "url": "assets/js/45.e94200fa.js",
    "revision": "7d40c28b160dce9afe75cc118500fd8e"
  },
  {
    "url": "assets/js/46.16f3ac4c.js",
    "revision": "1da3fd41e1a68e2dcbf3f0eed5327552"
  },
  {
    "url": "assets/js/47.fbb92c3c.js",
    "revision": "b2e10e920f989f9cc3f2399078a14607"
  },
  {
    "url": "assets/js/5.af0ad02b.js",
    "revision": "705090c2eb6ebf49432b8afa575e05a5"
  },
  {
    "url": "assets/js/6.7bc0b853.js",
    "revision": "db044bcedbb40b91ce419a3d9239ff4c"
  },
  {
    "url": "assets/js/7.4adfa46a.js",
    "revision": "cf5e062706e1f92f21b131acdc31a011"
  },
  {
    "url": "assets/js/8.ae32901f.js",
    "revision": "8ccaae6f21f89943e754096bbba46dbc"
  },
  {
    "url": "assets/js/9.9451fc41.js",
    "revision": "53af0ccd201962ca876f2c42f9eee236"
  },
  {
    "url": "assets/js/app.d454cfc0.js",
    "revision": "77c26292431216913185a975b2809252"
  },
  {
    "url": "config.html",
    "revision": "9cc862d00410d6d6d0ccf234b048cfac"
  },
  {
    "url": "electron/electron-demo.html",
    "revision": "f2fe370a1d538301b2a569e2d33d57fb"
  },
  {
    "url": "electron/electron-process.html",
    "revision": "cfef44bda7951cbbb7bbcceab87e8a7e"
  },
  {
    "url": "electron/electron-quick-start.html",
    "revision": "365904f5667cd49fa75526b950d903d7"
  },
  {
    "url": "electron/index.html",
    "revision": "4e169c40445fec0e5c8081cd6530ed02"
  },
  {
    "url": "favicon.png",
    "revision": "cdf60616a641d69985753bf433a885cd"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "imgs/hot.png",
    "revision": "388c03ac72bf33fea2071fd5ab07893d"
  },
  {
    "url": "imgs/params.png",
    "revision": "3426d06933e1a19688927cee81615444"
  },
  {
    "url": "imgs/vuex.png",
    "revision": "9c3d022c9c9f0c5b146e71cad7ca12d0"
  },
  {
    "url": "index.html",
    "revision": "96e985f0e20dffefc58d696117e4127d"
  },
  {
    "url": "javaScript/index.html",
    "revision": "733c988a9a12120bcaa0b1949ee833b4"
  },
  {
    "url": "javaScript/urlSearchParams.html",
    "revision": "7bfa48a6f34b669e04ae601f3b5f0a3d"
  },
  {
    "url": "javaScript/数组去重.html",
    "revision": "eb3991644bfa773869df032a03a42599"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "poluo.jpg",
    "revision": "10c2df925d3e79e592c245965ce545b5"
  },
  {
    "url": "problem2solve/echarts按需加载.html",
    "revision": "15200947d2ea7a2bdcd41a6128485a0e"
  },
  {
    "url": "problem2solve/element样式更改失效.html",
    "revision": "c3d3c37082b01b64bd74540fa68cfd5a"
  },
  {
    "url": "problem2solve/index.html",
    "revision": "8fdbcfcc437207bf17d03136b0333387"
  },
  {
    "url": "problem2solve/mobile-rem.html",
    "revision": "91c60fc94f245f5acc0cdc714e2efdd2"
  },
  {
    "url": "problem2solve/mock.html",
    "revision": "6a0b4fc49cef27e618c744bbbbe11d72"
  },
  {
    "url": "problem2solve/node-sass下载失败.html",
    "revision": "db7ba280bf4a7fa44b4a1ca1ca8385c1"
  },
  {
    "url": "problem2solve/pc大屏自适应.html",
    "revision": "e451e646b03fbb528aa2165115e00d8d"
  },
  {
    "url": "problem2solve/前端文件下载.html",
    "revision": "6f71689b4534928835eb1846794281c6"
  },
  {
    "url": "problem2solve/更改数组的length为何生效了.html",
    "revision": "7b161ce2acb3c4140207cc931928159c"
  },
  {
    "url": "problem2solve/浏览器顶部进度条.html",
    "revision": "a09bdadaf8ac46ccbd8c7a77385c1f91"
  },
  {
    "url": "problem2solve/移动端之骨架屏.html",
    "revision": "6ec635ce734ab07b7c33b156802b2b54"
  },
  {
    "url": "vue/ElScrollbar.html",
    "revision": "02484b2d63ee51ec7a0d0dfdb2c2c960"
  },
  {
    "url": "vue/index.html",
    "revision": "ffc5da3c010d005903d302d16cd725d0"
  },
  {
    "url": "vue/vue组件通信.html",
    "revision": "c36ae6e35161a307425e54293641a34a"
  },
  {
    "url": "vue2manager/authRoutes.html",
    "revision": "8a5ae31d0233d5974db96ad0c4713c75"
  },
  {
    "url": "vue2manager/index.html",
    "revision": "5dc0286812d6c41e9e123234234e0948"
  },
  {
    "url": "vue2manager/Layout.html",
    "revision": "d92bc789473a67305b6c8be35e1c4d6b"
  },
  {
    "url": "vue2manager/sideNav.html",
    "revision": "881b57b717a355d74acf3880a61bd809"
  },
  {
    "url": "vue2standards/chartAndIcon.html",
    "revision": "0323672aea755394d306611db0f9e77d"
  },
  {
    "url": "vue2standards/debounce.html",
    "revision": "beb4b728edc2ab2b850a6a6a2103d852"
  },
  {
    "url": "vue2standards/deploy.html",
    "revision": "af09a608d7e0d69b1c3c7da8128a23f1"
  },
  {
    "url": "vue2standards/ESLint.html",
    "revision": "4ea98f3fc4bf5a3c1a2e1e40848badae"
  },
  {
    "url": "vue2standards/filterAndDirective.html",
    "revision": "aed78738c0bc6952163cdcfa2dbe262d"
  },
  {
    "url": "vue2standards/gitcommit.html",
    "revision": "db884667bb284243d6a3ae7cd4af22f2"
  },
  {
    "url": "vue2standards/index.html",
    "revision": "6cfe152ce5546e8ae4c01b59cb6246ef"
  },
  {
    "url": "vue2standards/oa.html",
    "revision": "4b655282265f537c6f9a2726d34f005b"
  },
  {
    "url": "vue2standards/oaBuild.html",
    "revision": "97891dd9af9c525ed7c8038bffa6a555"
  },
  {
    "url": "vue2standards/promise.html",
    "revision": "38ef0743cd4f50e3acf56150fbf3c148"
  },
  {
    "url": "vue2standards/reactiveData.html",
    "revision": "c372e9153ae7f0f6972cf17145d3f49a"
  },
  {
    "url": "vue2standards/stylesheet.html",
    "revision": "f0d22385c2ba3632e5a5adef67139e9b"
  },
  {
    "url": "Wheel/index.html",
    "revision": "98fe1bb9dcfd78389940554a69221c19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
