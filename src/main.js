import Vue from 'vue'
import App from './App.vue'
import router from "./router" // 引入路由
import "./assets/iconfont/iconfont.css" // 引入iconfont
import "./assets/css/common.scss" // 引入公共样式

// 引入使用IVIEW UI 组件库
import iView from 'iview'; 
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// 引入使用i18n国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

// 引入Animate.css
import animate from 'animate.css'
Vue.use(animate);

// 引入axios
import axios from './untils/http'; 
Vue.prototype.$axios = axios;  

Vue.config.productionTip = false
//开启debug模式
Vue.config.debug = true

// 动态修改vue-cli标题钩子函数
router.beforeEach((to, from, next) => {
  if(to.meta.title){
      document.title = to.meta.title
  }else{
      document.title = '大侠谷'
  }
  next()
})

// 使用语言包
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'CN', // 默认语言标识
  messages: {
    'CN': require('./assets/lang/cn'),   // 中文语言包
    'EN': require('./assets/lang/en')    // 英文语言包
  },
})

new Vue({
  el: '#app',
  router,  
  i18n,
  render: h => h(App)
}).$mount('#app')
