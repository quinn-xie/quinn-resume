<template>
    <div class="content">
        <!-- <i class="iconfont icon-num-five bgNum"></i> -->
        <div class="f2e">
            F2E<br/><span>web前端工程师</span>
            <div class="shine"></div>
            <div class="round rounda">HTML5</div>
            <div class="round roundb">CSS3</div>
            <div class="round roundc">CANVAS</div>
            <div class="round roundd">vue.js</div>
            <div class="round rounde">node.js</div>
            <div class="round roundf">ES6</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        },
        created(){
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    @import "./../../assets/css/color.scss";
    .f2e{
        transform: scale(1.5,1.5);
        width: 220px;height:220px;text-align: center;border-radius: 100%;
        background:rgba($color: $duck_green, $alpha:1);position:relative;margin: 0 auto;margin-top:245px;
        font-size:80px;font-weight:bold;box-sizing:content-box; color:#4d5a5f; vertical-align: middle; line-height:180px;
        span{width:100%;font-size: 20px;line-height:20px;position: absolute;top:140px;left:0;display:block; text-align: center;font-weight: normal}
        .shine{
            width:250px;height:250px;border-radius: 100%;
            background:#ffffff; position: absolute; opacity: 0;
            left:50%;top:50%;margin-top: -125px;margin-left:-125px;
            animation: zoomIns 2s linear 0s infinite;
            z-index: -1;
        }
        &::before{
            content: '';
            display: block;
            width: 350px;height: 350px;border-radius: 100%;
            border:2px dashed $green;
            position: absolute;
            left:50%;top:50%;margin-top: -175px;margin-left:-175px;
            animation: rotatingTwo 100s linear 0s infinite;
        }
        &::after{
            content: '';
            display: block;
            width: 500px;height: 500px;border-radius: 100%;
            border:2px dotted rgba($color: $duck_green, $alpha:.5);
            position: absolute;
            left:50%;top:50%;margin-top: -250px;margin-left:-250px;
            animation: rotating 100s linear 0s infinite;
        }
        .round{
            position:absolute;z-index: 2;
        }
        .rounda{
            width:150px;height:150px;line-height:150px;border-radius:150px;
            left:270px;top:-80px;font-size:35px;background:$duck_green;
            color:#ffffff;
        }
        .roundb{
            width:80px;height:80px;line-height:80px;border-radius:80px;
            left:-170px;top:0px;font-size:25px;background:#4c585d;border:2px dotted $green;
            color:#ffffff;
        }
        .roundc{
            width:100px;height:100px;line-height:100px;border-radius:100px;
            left:0px;top:300px;font-size:22px;background:rgba($color:#1bb2e7, $alpha:.5);
            color:#ffffff;
        }
        .roundd{
            width:60px;height:60px;line-height:60px;border-radius:60px;
            left:-80px;top:150px;font-size:18px;background:rgba($color:$duck_gray, $alpha:1);
            color:#ffffff;font-weight: normal
        }
        .rounde{
            width:75px;height:75px;line-height:75px;border-radius:75px;
            left:270px;top:150px;font-size:18px;border:2px dashed $green;
            color:$green;
        }
        .roundf{
            width:50px;height:50px;line-height:50px;border-radius:50px;
            left:80px;top:-90px;font-size:18px;background:$duck_green;
            color:#ffffff;
        }
    }

    @keyframes rotating{
        from{
            transform: rotate(0)
        }
        to{
            transform: rotate(360deg)
        }
    }
    @keyframes rotatingTwo{
        from{
            transform: rotate(0)
        }
        to{
            transform: rotate(-360deg)
        }
    }
    @keyframes zoomIns {
        from{
            transform:scale(1.0,1.0);
            opacity: .2;
        }
        to{
            transform: scale(1.1,1.1);
            opacity: 0;
        }
    }
</style>