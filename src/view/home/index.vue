<template>
    <div class="welcome">
        <i class="iconfont icon-num-one bgNum"></i>
        <div class="w">W</div>
        <div class="e">E</div>
        <div class="l">L</div>
        <div class="c">C</div>
        <div class="o">O</div>
        <div class="m">M</div>
        <div class="ex">E</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                welcome:''
            }
        },
        created(){
            this.loadData();
        },
        methods:{
            loadData(){
                const _this = this
                _this.$axios.get('/welcome').then((rs) => {
                    _this.welcome = rs.data
                    console.log (_this.welcome)
                })
            }
        }
    }
</script>
<style lang="scss">
    @import "./../../assets/css/color.scss";
    .welcome{
        width:930px;
        margin: 200px auto;
        font-size: 200px;
        position: relative;
        text-transform: uppercase;
        div{
           display: inline-block;
           text-shadow: 15px 15px 0 rgba($color: #000000, $alpha:0.1);
           color: #f5f5f5;
           position: absolute;
           transition: all .2s;
           &:hover{
               transform: scale(1.2,1.2);
               color:$green;
               cursor:none;
           }
       }
       .w{
           left: 0;
           top: 0;
           font-size: 200px;
       }
       .e{
           left: 180px;
           top: 50px;
           font-size: 150px;
           transform: rotate(-15deg);
       }
       .l{
           left: 280px;
           top: -50px;
           font-size: 250px;
           transform: rotate(15deg);
       }
       .c{
           left: 380px;
           top: 20px;
           font-size: 180px;
           transform: rotate(0deg);
       }
       .o{
           left: 500px;
           top: 50px;
           font-size: 150px;
           transform: rotate(15deg);
       }
       .m{
           left: 600px;
           top: -60px;
           font-size: 250px;
           transform: rotate(-15deg);
       }
       .ex{
           left: 800px;
           top: 50px;
           font-size: 160px;
           transform: rotate(15deg);
       }
    }
</style>