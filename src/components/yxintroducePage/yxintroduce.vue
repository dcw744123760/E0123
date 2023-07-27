<template>
    <div id="fullpage">
        <section class="section" style="    justify-content: flex-start !important;     background: #f8f8fa;">

            <Subnav></Subnav>
            <div class="banner">
                <img src="../../images/yx-banner.jpg" />
                <div class="intor-banner">
                    <h2 class="tit">隐形眼镜批次管理<br />方便快捷、自动追踪库存、到期提醒，从E0123开始</h2>
                    <p class="des">据说<br />
                        药监局根据隐形眼镜批次管理条文要求，隔三差五登门拜访，各大商户甚是堪忧<br />
                        怎么做得更好，E0123解决方案，还你高枕无忧！</p>
                </div>
                <div class="intor-info">
                    <h3>为什么要做条码批次管理？</h3>
                    <p>→ 1.不贴条码没法做到批次的跟踪，批量化扫码处理调拨和批发出货</p>
                    <p>→ 2.零售前台有专门隐形的简化程序，扫码即可自动填写光度和批次，流程速度会比从前加快很多</p>
                    <p>→ 3.每个条码，客户回去后，可以扫码查看，还可以扫码再次购买，通过微信商城，连接未来的机会。</p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="padtb40 pal-con1" style="background:#fafafa;">
                <div class="clearfix center-block ">
                    <div class="yx-info">
                        <h2>每个隐形光度和批次，全部独立二维码</h2><br />
                        <div>
                            <p>全面二维码商品管理，支持扫码批量化操作，批次自动匹配跟上，智能加减库存。<br />
                                支持手工录入及手动选择批次，支持定制隐形及调货隐形事后补录批次。</p>
                        </div>
                    </div>
                </div>
                <div class="yx-img">
                    <div class="pull-left yx-img1">
                        <img src="../../images/yxintro1/1.jpg" />
                    </div>
                    <div class="pull-left yx-img1">
                        <img src="../../images/yxintro1/2.jpg" />
                    </div>
                    <div class="pull-left yx-img1">
                        <img src="../../images/yxintro1/3.jpg" />
                    </div>
                    <div class="pull-left yx-img1">
                        <img src="../../images/yxintro1/4.jpg" />
                    </div>
                </div>
            </div>
        </section>
        <CarouselImg v-for="(c, index) in CarouselImgData" v-bind:key="index" v-bind:imgItem="c"></CarouselImg>
    </div>
</template>

<script>
import Subnav from "../subnav.vue";
import CarouselImg from "../carouselImg.vue";
import fullpage from '../../assets/js/fullpage.js';
import '../../assets/css/fullpage.min.css';
export default {
    name: "Yxintroduce",
    data() {
        return {
            CarouselImgData: [
                {
                    t1: '全业务流订单强制录入批次',
                    t2: '无论是首次采购，还是调拨，销售，批发，每个业务流程细节都加入了批次优化体验，',
                    t3:'所有订单查询可进行批号的追踪查询。',
                    imgArray: [require('@/images/yxintro2/1.png'), require('@/images/yxintro2/2.png'), require('@/images/yxintro2/3.png'), require('@/images/yxintro2/4.png')]
                },
                {
                    t1: '更快的销售开单，扫码自动补录验光记录',
                    t2: ' 客户信息自助微信录入，根据扫码商品光度自动补录验光记录，没有比这更快的了。',
                    imgArray: [require('@/images/yxintro3/1.png'), require('@/images/yxintro3/2.png'), require('@/images/yxintro3/3.png')]
                },
                {
                    t1: '批次管理中心，即将到期提醒',
                    t2: ' 支持全系统库存批次信息查询调整，可调整批次，并防止商品有效期逾期亏损。',
                    imgArray: [require('@/images/yxintro4/1.png'), require('@/images/yxintro4/2.png'), require('@/images/yxintro4/3.png')]
                },
                {
                    t1: '每个条码，都可微信扫一扫再次购买',
                    t2: '  全面对接微信商城，为商户带来更多的再次消费机会。线上线下价格同步，可加优惠卷补充调整优惠。',
                    imgArray: [require('@/images/yxintro5/1.png'), require('@/images/yxintro5/2.png'), require('@/images/yxintro4/3.png')]
                },
                {
                    t1: '根据备货量智能补货',
                    t2: '  隐形光度销售后，可根据备货量自动计算减少的光度，自动计算补货',
                    imgArray: [require('@/images/yxintro6/1.png'), require('@/images/yxintro6/2.png'), require('@/images/yxintro6/3.png')]
                },
            ]

        }
    },
    components: {
        Subnav,
        CarouselImg
    },
    beforeDestroy() {
        this.Newfullpage.destroy('all');//解决滑动插件只能注册一次的问题
    },
    mounted() {
        this.Newfullpage = new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            scrollBar: true,
            scrollOverflow:false,
            paddingTop: '60px',
            paddingBottom: '60px',
            scrollingSpeed: 500
        });
    },

}
</script>

<style scoped>
.banner {
    /* height: 300px; */
    width: 100%;
    /* height: 100%; */
    background: #f8f8fa;
}

.banner img {
    width: 100%;
    display: block;
    height: 100%;
}

.intor-banner {
    width: 100%;
    margin: 0px auto;
    color: #000;
    position: absolute;
    bottom: 340px;
    left: 0px;
    text-align: center;
}

.intor-banner .tit {
    color: #784c47;
    font-size: 36px;
    line-height: 48px;
    margin-top: 10vh;
}

.intor-banner .des {
    font-size: 16px;
    margin-top: 15px;
    line-height: 30px;
    color: #666;
}

section :deep(.fp-overflow){
    overflow-y: hidden !important;
    position: relative;
}

.intor-info {
    width: 900px;
    margin: 0 auto;
    border: 2px solid #0099cc;
    position: absolute;
    bottom: 91px;
    left: 50%;
    padding-bottom: 10px;
    transform: translate(-50%, 0px);
}

.intor-info h3 {
    line-height: 30px;
    position: relative;
    top: -20px;
    left: 300px;
    background: #f8f8fa;
    display: inline-block;
    margin: 0 auto;
}

.intor-info p {
    line-height: 30px;
    font-size: 16px;
    margin-left: 20px;
}

.padtb40 {
    padding: 0px;
    display: block;
}

.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}

.yx-info {
    width: 900px;
    margin: 0 auto;
    border: 2px solid #0099cc;
    position: relative;
    top: 100px;
    left: 0px;
    padding-bottom: 10px;
}

.yx-info h2 {
    line-height: 30px;
    position: relative;
    top: -18px;
    background: #f8f8fa;
    display: inline-block;
    margin: 0 auto;
}

.yx-info p {
    line-height: 30px;
    font-size: 16px;
    margin-left: 20px;
    text-align: center;
}

.yx-img {
    width: 80vw;
    height: 20vw;
    margin: 0 auto;
    /* background: #999; */
}

.yx-img1 {
    margin: 0 1vw;
}

.yx-img1 img {
    display: block;
    width: 18vw;
    height: 20vw;
    margin: 0 auto;
    margin-top: 200px;
}</style>