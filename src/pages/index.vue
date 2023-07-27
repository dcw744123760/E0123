<template>
    <div id="fullpage">
        <pageHeader></pageHeader>
        <router-view></router-view>
        <Footer></Footer>
        <el-backtop target="html" :bottom="100" ref="backTop">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue';
import Footer from "../components/footer.vue";
export default {
    name: 'indexPage',
    components: {
        pageHeader,
        Footer
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (!!this.$refs.backTop) {
                // 滚动条距文档顶部的距离
                let scrollTop = window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                if (scrollTop > 1000) {
                    this.$refs.backTop.visible = true;
                } else {
                    this.$refs.backTop.visible = false;
                }
            }

        })
    }

}
</script> 

<style scoped>
:global(body) {
    background-color: #fff !important;
}

.com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
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

.com-con h2,
.com-con1 h2 {
    padding-top: 25px;
    font-size: 40px;
    line-height: 60px;
    color: #4a4a4a !important;
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
    position: relative;
    left: 50%;
    margin-top: 50px;
    display: inline-block;
    margin-left: -100px;
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
</style>