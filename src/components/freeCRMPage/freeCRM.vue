<template>
    <div>
        
        <div id="fullpage">
        <div class="banner section" style="justify-content: flex-start !important;">
            <Subnav></Subnav>
            <img src="../../images/crm.jpg" />
        </div>

        <div class="bg1 warp section">
            <div class="f-info">
                <p>不花一分钱，也可以享受E0123先进的客户管理系统</p>
                <h3>电脑、平板、手机全平台可以同步使用</h3>
            </div>
            <div class="f-img">
                <img src="../../images/pingtai.png" />
            </div>
        </div>
        <div class="bg2 warp section">
            <div class="f-left"><img src="../../images/gui-1.png" style="width: 80%;height: 80%;" /></div>
            <div class="f-right">
                <h3>1.关注E0123公众号，注册商户</h3>
                <p>免费注册，免费使用软件系统</p>
                <a href="#" target="_blank">操作指南>></a>
                <br />
                <img src="../../images/QRcode.jpg" />
                <p>微信扫码关注公众号</p>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="bg1 warp section">
            <div class="f-com">
                <h3>2.使用电脑、平板登录系统平台</h3>
                <p>网址：<a href="http://e0123.cn" target="_blank">http://e0123.cn</a>使用chrome浏览器或iPad自带浏览器</p>
            </div>
            <div class="f-img">
                <img src="../../images/denglu.png" />
            </div>
        </div>

        <div class="bg2 warp section">
            <div class="f-com">
                <h3>3.添加员工，设置权限</h3>
                <p>基于微信开发，需关注E0123公众号并由注册人审核通过</p>
                <p><a href="http://wechat.mygcs.cc/wechat/manage/pictext_item.xhtml?imgTxtItemID=2161 "
                        target="_blank">人员管理教材、添加新员工及权限使用教材>></a></p>
            </div>
            <div class="f-img">
                <img src="../../images/addperson.png" />
            </div>
        </div>

        <div class="bg1 warp section">
            <div class="f-com">
                <h3>4.添加商品列表信息</h3>
                <p>填写在售品牌系列，售价，店长30-60分钟完成整个公司商品录入</p>
                <p><a href="http://wechat.mygcs.cc/wechat/manage/pictext_item.xhtml?imgTxtItemID=1961"
                        target="_blank">商品添加基本教材>></a></p>
            </div>
            <div class="f-img">
                <img src="../../images/addgoods.png" />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Subnav from "../subnav.vue";
import fullpage from '../../assets/js/fullpage.js';
import '../../assets/css/fullpage.min.css';
export default {
    name: 'FreeCRM',
    components: {
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
    .banner {
    width: 100%;
    height: 100%;
    background: #f8f8fa;
    object-fit: cover;
}
.banner img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    max-height: 700px;
}
.bg1 {
    background: #f9f9f9;
    width: 100%;
    height: 100%;
    padding: 50px 0px;
}
.f-info {
    margin-bottom: 30px 0px;
    text-align: center;
}
.f-info p {
    font-size: 24px;
    color: #999;
}
.f-info h3 {
    color: #ec9c09;
    margin-top: 10px;
    margin-bottom: 30px;
}
.f-img img {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
}
.bg2 {
    background: #fff;
    height: 100%;
    padding: 50px 0px;
}
.f-left {
    float: left;
}
.f-left img {
    margin-left: 30px;
}
.f-right {
    float: left;
    margin-top: 50px;
    margin-left: -60px;
}
.f-right h3 {
    color: #ec9c09;
    font-size: 30px;
}
.f-right p {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #999;
}
.f-right h3, p, a {
    margin-left: 15px;
}
.f-com {
    margin: 0 auto;
    width: 1000px;
    text-align: center;
}
.f-com h3 {
    font-size: 30px;
    color: #ec9c09;
}
.f-com p {
    margin: 20px 0px;
    color: #999;
}
.f-com p a {
    color: #ec9c09;
    margin-right: 20px;
}
.warp {
    width: 1000px;
    margin: 0 auto;
}
</style>