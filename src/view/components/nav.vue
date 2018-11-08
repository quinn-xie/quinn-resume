<template>
    <div class="nav">
        <i class="iconfont icon-logo logo"></i>
        <router-link to="/">{{ $t("nav.home")}}</router-link>
        <router-link to="/about">{{ $t("nav.about")}}</router-link>
        <router-link to="/skills">{{ $t("nav.skill")}}</router-link>
        <router-link to="/holyland">{{ $t("nav.holyland")}} </router-link>
        <router-link to="/formula">{{ $t("nav.formula")}}</router-link>
        <router-link to="/tools">{{ $t("nav.tools")}}</router-link>
    </div>
</template>
<script>
    export default {
        name: 'dxMenu',
        created() {
            // console.log('thispage ==> keep-alive:' + this.$route.meta.keepAlive) //当前路由是否缓存
            // alert('路由===' + JSON.stringify(this.$router))
        }
    }
</script>
<style lang="scss">
    @import "./../../assets/css/color.scss";
    //菜单样式
    .nav { 
        width:150px;
        font-size:14px;
        text-decoration: none;
        display: inline-block;
        letter-spacing: 1px;
        position:fixed;
        left:30px;
        top:150px;
        .logo{
            position:fixed;
            top:0px;
            left:0px;
            font-size:80px;
            display: inline-block;
            vertical-align: middle;
            margin: 0 20px;
            color:$green;
        }
        a{
            color:rgba(255, 255, 255, .5);
            text-decoration: none;
            margin:10px;
            padding:8px 10px;
            box-sizing: border-box;
            text-transform:uppercase;
            vertical-align: middle;
            transition: all .5s;
            display: inline-block;
            text-align: left;
            &:hover{
                color:$green;
                transform: rotate(5deg) scale(1.1);
                &::before, &::after{
                    transition: all 0.3s ease;
                    opacity: 1;
                    width: 10px;
                }
            }
            &::before,&::after{
                opacity: 0;
                border-top: 1px solid $green;
                content: '';
                display: block;
                position: relative;
                z-index: -1;
                margin: auto;
                width: 0px;
                top: 0px;
            }
            &::before{
                transform: rotate(120deg) translateY(-50%) translateX(-50%);
            }
            &::after {
                transform: rotate(-60deg) translateY(-50%) translateX(-50%);
            }

        }
        .router-link-exact-active{ //当前路由样式
            color:$green;
            transform: rotate(5deg) scale(1.1);
             &::before, &::after{
                    transition: all 0.3s ease;
                    -webkit-transition: all 0.3s ease;
                    -moz-transition: all 0.3s ease;
                    opacity: 1;
                    width: 10px;
                }
        }

        
    }
</style>
