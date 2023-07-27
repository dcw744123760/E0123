<template>
        <section class="  section">
            <div class="text-center padtb40  center-block com-con1">
                <h2>{{ imgItem.t1 }}</h2>
                <div>{{ imgItem.t2 }}</div>
                <!-- <div class="swiper-container swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../images/img1/1.png" /></div>
                        <div class="swiper-slide"><img src="../images/img1/2.png" /></div>
                        <div class="swiper-slide"><img src="../images/img1/9.png" /></div>
                        <div class="swiper-slide"><img src="../images/img1/5.png" /></div>
                        <div class="swiper-slide"></div>
                    </div>
                    
                    <div class="swiper-pagination swiper-pagination1"></div>
                    <div class="swiper-button-next swiper-button-blue swiper-button-next1"></div>
                    <div class="swiper-button-prev swiper-button-blue swiper-button-prev1"></div>
                </div> -->
                <div class="swiper_con">
                    <template>
                        <el-carousel indicator-position="outside" type="card"  :height="height+'px'" :autoplay="false">

                            <el-carousel-item v-for="(i_src,index) in imgItem.imgArray" v-bind:key="index">
                                <div class="swiper-slide"><img :src="i_src" /></div>
                            </el-carousel-item>
                           
                        </el-carousel>
                    </template>
                </div>
            </div>
        </section>
        
</template>

<script>
export default {
    name: "CarouselImg",
    props:{
        imgItem:Object

    },
    data(){
        return {
            height:600
        }
    },
    mounted(){
        console.log( window.innerWidth)
        if( window.innerWidth > 1200){
            this.height = 600;

        }else{
            this.height = 450;
        }
       
    }
}
</script>

<style scoped>

.el-carousel__mask {
    opacity: .34 !important;
}

.swiper-slide,.swiper-slide img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.com-con1 h2+div {
    font-size: 18px;
    margin: 10px 0px;
    color: #999;
}

.com-con h2,
.com-con1 h2 {
    padding-top: 25px;
    font-size: 40px;
    line-height: 60px;
    color: #4a4a4a !important;
}
@media screen and (min-width: 960px) and (max-width: 1180px) {
    .com-con h2,
.com-con1 h2 {
    padding-top: 15px;
    font-size: 32px;
    line-height: 51px;
}
.com-con1 h2+div[data-v-0027223a] {
    font-size: 16px;
}

}

</style>