<template>
    <div class="content">
        <i class="iconfont icon-num-five bgNum"></i>
        <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
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
    .demo-carousel{font-size:400px;width:100%;color:#ffffff}
</style>