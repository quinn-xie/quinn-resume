<template>
    <div class="content">
        <i class="iconfont icon-num-two bgNum"></i>
        <div class="aboutMe">
            <div class="labelTag">
                <span class="js">JavaScript</span>
                <span class="vue">Vue.js</span>
                <span class="css">CSS3</span>
                <span class="h5">HTML5</span>
                <span class="canvas">CANVAS</span>
                <span class="wp">webpack</span>
                <span class="node">Node.js</span>
                <span class="sass">Sass</span>
            </div>
            <i class="header"><img src="../../assets/img/header.jpg"/></i>
            <div class="info">
                <dl><dt>{{$t("about.name")}}：</dt><dd><i class="iconfont icon-info-name"></i>{{$t("about.nameIs")}}</dd></dl>
                <dl><dt>{{$t("about.tel")}}：</dt><dd><i class="iconfont icon-info-tel"></i>{{$t("about.telIs")}}</dd></dl>
                <dl><dt>{{$t("about.eMail")}}：</dt><dd><i class="iconfont icon-info-mail"></i>{{$t("about.eMailIs")}}</dd></dl>
                <dl><dt>{{$t("about.from")}}：</dt><dd><i class="iconfont icon-info-from"></i>{{$t("about.fromIs")}}</dd></dl>
            </div>
        </div>
        <div class="fed">
            <div class="effect"><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span>
            <span>e</span><span>n</span><span>d</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        created(){

        },
        methods:{
            
        }
    }
</script>
<style lang="scss">
 .fed{
     width: 100%;
     margin-top:80px;
     .effect{
        display:inline-block;
        margin: 0 1px;
        position: relative;
        span{
            display:inline-table;
            background:#00f883;
            padding:2px 12px;
            font-size:30px;
            text-shadow: 1px 0px 0px #555;
            text-transform: uppercase;
            color:#ffffff;
            font-weight: 500;
            transition: all .2s;
            transform: skewY(-15deg);
            transform-origin: 0 0;
        }
        span:nth-child(even){
            transform: skewY(15deg);
            transform-origin: 100% 100%;
            background:#03b15e;
        }
     }
     .effect:nth-child(even){
         span{ transform: skewY(15deg);}
         span:nth-child(even){transform: skewY(-15deg);}
         top:-11px;
     }
 }
.aboutMe{
    margin-top:20px;
    width:100%;
    text-align: center;
    position: relative;
    .labelTag{
        width: 5px;
        height:5px;
        position: absolute;
        left:50%;
        margin-left:-250px;
        span{
          position: absolute; 
          color:#ffffff;
          display: inline-block;
          letter-spacing: 1px;
          &:hover{
              animation:swing .5s;
              cursor:default;
          }
        }
        .js{font-size:30px; right:-510px;top:100px;opacity:.3;}
        .css{font-size:45px;right:-510px; top:-50px;color:#00f883;opacity:.8;}
        .wp{font-size:28px;right:-460px;top:30px;opacity:.3;}
        .node{font-size:25px;right:-560px;top:45px;opacity:.3;}
        .vue{font-size:35px;left:-60px;top:20px;color:#00f883;opacity:.6;}
        .h5{font-size:40px;left:-30px;top:80px;opacity:.3;}
        .canvas{font-size:30px;left:40px;top:-50px;opacity:.3;}
        .sass{font-size:22px;left:90px;top:20px;opacity:.5;}
        
    }
    .header{
        width:150px;
        height:150px;
        overflow: hidden;
        display: inline-block;
        border-radius:100%;
        border:5px solid #00f883;
        img{width: 100%}
        &:hover{
            animation :swing .8s
        }
    }
    .info{
        width:50%;
        margin: 0 auto;
        position: relative;
        padding-top:80px;
        &::before{
            position: absolute;
            content: '';
            display: block;
            width: 5px;
            height: 370px;
            left: 50%;
            top: -5px;
            background:#00f883;
        }
        dl,dt,dd{padding: 0;margin: 0;}
        dt,dd{display: inline-block; width:48%;box-sizing: border-box}
        dl{
            display: block;font-size:16px;line-height: 50px; height: 50px; transition: all .5s;color:#ffffff;
            &:hover{
                font-size: 20px;
                color:#00f883;
                dd i{font-size:40px;color:#00f883;}
            }
        }
        dt{
            text-align: right;
            padding-right:30px;
        }
        dd{
            text-align: left;
            padding-left:30px;
            i{font-size:30px; margin-right:5px; vertical-align: middle;transition: all .5s;}
        }
    }
}
</style>