// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'; // 主题颜色样式
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../static/css/vux.css'
import AMap from "vue-amap";
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})
Vue.use(AMap);
AMap.initAMapApiLoader({
    key: '8fbf8551b222df9683ce698cc2774368',
    plugin: ['AMap.Geolocation'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
