<template>
  <div id="app">
    <!-- 语言切换 -->
    <ButtonGroup class="lang">
        <i class="iconfont icon-lang-cn" @click="changeLocale('CN')" :class="langActive?'active':''"></i> 
        <i class="iconfont icon-lang-en" @click="changeLocale('EN')" :class="!langActive?'active':''"></i> 
    </ButtonGroup>
    <!-- 菜单区域 -->
    <dx-menu></dx-menu>
    <!-- 页面内容区域 -->
    <transition :name="transitionName" mode="out-in"> <!-- 如果Router中keepAlive为true -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName"> <!-- 如果Router中keepAlive为false -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import dxMenu from './view/components/nav.vue'
export default {
  components: {dxMenu},
  name: 'app',
  data(){
    return{
      transitionName:'transitionRouter',
      langActive:true
    }
  },
  created(){
    localStorage.setItem('locale', 'CN')
  },
  methods:{
      changeLocale(lang){
        if(lang === 'CN'){
          localStorage.setItem('locale', 'CN')
          this.$i18n.locale = localStorage.getItem('locale')
          this.langActive = true
        } else if (lang === 'EN') {
          localStorage.setItem('locale', 'EN')
          this.$i18n.locale = localStorage.getItem('locale')
          this.langActive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  //语言切换
  .lang{
    position: fixed!important;
    top: 20px;
    right: 20px;
    i{
      cursor: pointer;
      margin-right:5px;
      display: inline-block;
      color: rgba(255,255,255,.5);
      font-size:45px;
    }
    .active{
      color: #00f883;
      opacity: 1;
    }
  }
  // 页面路由切换转场动画
  .transitionRouter-enter-active{  // 进场
    transition: all .5s ease;
  }
  .transitionRouter-leave-active {  // 退场
    transition: all 0s ease;
  }
  .transitionRouter-enter,
  .transitionRouter-leave
  {
    // transform:translate3d(50%, 0, 0); // 自右向左
    // transform:translate3d(0, 50%, 0); // 自下而上
    // transform:rotateX(90deg); // 绕X轴旋转
    transform:rotateY(90deg); // 绕Y轴旋转
    opacity: 0;
  }
  
</style>
