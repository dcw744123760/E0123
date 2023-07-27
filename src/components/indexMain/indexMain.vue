<template>
    <div>
        <section class="web-banner-st  section">
            <Subnav></Subnav>
            <div class="web-banner-con text-center" :style="{ backgroundImage: 'url(' + require('@/images/bg.jpg') + ')' }"
                style="background-size:cover;">
                <h1>眼镜行业PAAS平台化管理软件</h1>
                <p class="banner-text">始于2006年，专注眼镜行业信息化管理十年</p>
                <p>助力各商户，从零售店日常管理，到O2O营销引流，到品牌批发商商品渗透，共赢改革！</p>
            </div>
            <div class="padtb40 pal-con1" style="background:#fafafa; padding-top:30px!important; text-align: center;">
                <div class="clearfix center-block weixin-box">
                    <div class="pull-left text-center weixin-icon">
                        <i class="fa fa-wechat"></i>
                    </div>
                    <div class="pull-left">
                        <h2>更酷，更炫的体验，成本更低，更小的空间</h2>
                        <div style="font-size: 18px;color: #666;margin-top: 10px;">基于微信，员工手机或iPad、电脑全部皆可作为开单销售工具</div>
                    </div>
                </div>
                <div class="clearfix text-center com-con h-img-box padtb40" style="margin-top:10px;">
                    <div class="pull-left person-phone">
                        <img src="../../images/phone.png" />
                        <div>个人手机</div>
                    </div>
                    <div class="pull-left wifi-printer">
                        <img src="../../images/wifi.jpg" />
                        <div>wifi打印机</div>
                        <p class="red">1800元</p>
                    </div>
                    <div class="pull-left bluetooth-scan">
                        <img src="../../images/smq.png" />
                        <div>蓝牙扫描枪</div>
                        <p class="red">500元</p>
                    </div>
                    <div class="pull-left desktop-scan">
                        <img src="../../images/smq2.png" />
                        <div>桌面扫描枪</div>
                        <p class="red">500元</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="  section">
            <div class="text-center com-con padtb40 com-con-text pc-con">
                <h2 style="color: #4a4a4a;">指尖上的门店管理的新体验</h2>
                <div style="color: #999;">从未如此简单，使用个人微信即可完成注册登录及员工绑定操作</div>
                <div style="color: #999;">基础功能:<span class="red">自助，简易</span></div>
                <a>自助使用教材<i class="fa fa-angle-right"></i></a>
                <div class="pc-img-box" style="position: relative;margin-top: 4px;" id="a1">
                    <div class="pc-img" style=""><img src="../../images/pc.png" /></div>
                    <div class="ipad-img"><img src="../../images/ipad.png" /></div>
                    <div class="phone-img"><img src="../../images/phone.png" /></div>
                </div>
            </div>
        </section>
        <!--滑动轮播图-->
        <CarouselImg v-for="(c, index) in CarouselImgData" v-bind:key="index" v-bind:imgItem="c"></CarouselImg>
        <section class="section" style="height: 300px; position: relative;">
            <div class="text-center center-block com-con1">
                <h2>隐形与护理产品批次管理</h2>
                <div>符合医疗器械许可要求，增加各类商品跟踪，销售及库存跟踪管理批次、生产日期、到期日期、证件公文查询……</div>
            </div>
            <div></div>
            <div class="com-con center-block">
                <span class="btn-success use-btn">立即使用</span>
            </div>
        </section>
    </div>
</template>


<script>
import CarouselImg from "../carouselImg.vue";
import Subnav from "../subnav.vue";
import fullpage from '../../assets/js/fullpage.js';
import '../../assets/css/fullpage.min.css';
import 'font-awesome/css/font-awesome.min.css'
export default {
    name: 'indexMain',
    data() {
        return {
            CarouselImgData: [
                {
                    t1: '专业验光及客户管理',
                    t2: '针对眼镜行业的专用界面，移动优化',
                    imgArray: [require('@/images/img1/1.png'), require('@/images/img1/2.png'), require('@/images/img1/9.png'), require('@/images/img1/5.png')]
                },
                {
                    t1: '更智能的库存管理跟踪',
                    t2: '全二维码管理，手机扫码，批次跟踪，分店查询f',
                    imgArray: [require('@/images/img2/1.png'), require('@/images/img2/2.png'), require('@/images/img2/3.png'), require('@/images/img2/4.png'), require('@/images/img2/5.png'), require('@/images/img2/6.png'), require('@/images/img2/7.jpg')]
                },
                {
                    t1: '更专业的门店管理工具',
                    t2: '门店营业收入统计，现金流水账，员工业绩日标及统计，合作伙伴往来账',
                    imgArray: [require('@/images/img3/1.png'), require('@/images/img3/2.png'),]
                },
                {
                    t1: '验光开单',
                    t2: '业绩统计，员工绩效考核，物料统计，客户评分等等',
                    imgArray: [require('@/images/img4/1.png'), require('@/images/img4/2.png'), require('@/images/img4/2.png'), require('@/images/img4/3.png'), require('@/images/img4/4.png'), require('@/images/img4/4.png'), require('@/images/img4/5.png'), require('@/images/img4/6.png'), require('@/images/img4/7.png'), require('@/images/img4/8.png'), require('@/images/img4/9.png')]
                },
                {
                    t1: '客户管理，自动化的客户回访平台',
                    t2: '会员级别，短期营销，自动打折，客户评分',
                    imgArray: [require('@/images/img4/1.png'), require('@/images/img4/2.png'), require('@/images/img4/2.png'), require('@/images/img4/3.png'), require('@/images/img4/4.png'), require('@/images/img4/4.png'), require('@/images/img4/5.png'), require('@/images/img4/6.png'), require('@/images/img4/7.png'), require('@/images/img4/8.png'), require('@/images/img4/9.png')]
                }
            ]

        }
    },
    components: {
        CarouselImg,
        Subnav
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

.com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
}
.fp-table {
background-color: #fff;
}
.pc-img img {
    width: 75%;
    max-width: 774px;
}

.ipad-img img {
    width: 100%;
    max-width: 515px;
}

.phone-img img {
    width: 100%;
    max-width: 150px;
}

/* @media screen and (min-width: 960px) and (max-width: 1200px){
    .pc-img img {
        width: 55%;
    }
    .ipad-img img {
        width: 75%;
    }
    .phone-img img {
        width: 55%;
    }
} */

.subnav a {
    color: #333;
    line-height: 50px;
    display: inline-block;
    padding: 0px 10px;
}

.red {
    color: #ff6666 !important;
}

.web-banner-con {
    background: #535e62;
    color: #fff;
    padding-bottom: 180px;
    padding: 60px 0px;
}

.web-banner-con h1 {
    font-size: 48px;
    position: relative;
    left: 0px;
    top: -10px;
}

.web-banner-con p {
    font-size: 18px;
    line-height: 36px;
    position: relative;
    top: 10px;
}

.padtb40 {}

.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.weixin-box{
    display:inline-block;
}

.weixin-icon {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    /* background: #009900; */
    margin-right: 20px;
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#0abb15), to(#0a9a16));
}

.weixin-icon i {
    color: #fff;
    font-size: 50px;
    line-height: 70px;
}

.person-phone,
.wifi-printer,
.bluetooth-scan,
.desktop-scan {
    width: 25%;
    font-size: 16px;
}

.person-phone img {
    height: 245px;
}

.person-phone>div {
    margin-top: 10px;
}

.wifi-printer img {
    height: 230px;
    margin-bottom: 23px;
}

.bluetooth-scan img {
    height: 196px;
    margin-top: 23px;
    margin-bottom: 30px;
}

.desktop-scan img {
    height: 196px;
    margin-top: 10px;
    margin-bottom: 40px;
}

.wifi-printer>div,
.bluetooth-scan>div,
.desktop-scan>div {
    margin-top: 30px;
    line-height: 30px;
}



.com-con-text>div,
.com-con-text>a,
.com-con-text>p {
    font-size: 18px;
    line-height: 30px;
}

.com-con-text>div,
.com-con-text>a,
.com-con-text>p {
    font-size: 18px;
    line-height: 30px;
}

.com-con-text>div,
.com-con-text>a,
.com-con-text>p {
    font-size: 18px;
    line-height: 30px;
}

.ipad-img {
    position: absolute;
    top: 105px;
    left: 50%;
    /* margin-left: 40px; */
    width: 47%;
}

.phone-img {
    position: absolute;
    bottom: 166px;
    left: 50%;
    width: 14%;
}

.use-btn {
    cursor: pointer;
    font-size: 20px;
    padding: 20px 0px;
    width: 200px;
    text-align: center;
    left: 50%;
    margin-top: 50px;
    display: inline-block;
}

.web-banner-st {
    justify-content: flex-start !important;
}

.weixin-box[data-v-57509004] {
    /* position: absolute; */
    /* margin-left: -320px; */
    /* left: 50%; */
    text-align: center;
    margin: 0 auto;
    display: inline-block;
}
.com-con1 h2 {
    margin-top: 25px;
    font-size: 40px;
    line-height: 60px;
    color: #4a4a4a!important;
}
.com-con1 h2+div {
    font-size: 18px;
    margin: 10px 0px;
    color: #999;
}
.com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
}
@media screen and (min-width: 960px) and (max-width: 1200px) {
    .web-banner-con h1 {
        font-size: 30px;
        top: 0px;
    }

    .web-banner-con p {
        top: 7px;
        line-height: 26px;
        font-size: 16px;
    }

    .web-banner-con {
        padding: 26px 0px;
    }

    .weixin-box h2 {
        font-size: 22px;
    }
    .weixin-box div {
    font-size: 16px!important;
}
.desktop-scan img {
    height: 170px;
    margin-bottom: 20px;
}
.bluetooth-scan img {
    height: 156px;
    margin-top: 10px;
}
.wifi-printer img {
    height: 170px;
}
.person-phone img {
    height: 185px;
}
}</style>
