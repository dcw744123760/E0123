<template>
        <div class="com-con subnav">
            <div class="pull-left"><a>管理软件</a></div>
            <div class="pull-right">
                <router-link to="/index">概况</router-link>
                <router-link to="/index/freeCRM">CRM系统</router-link>
                <router-link to="/index/wxpay">微信支付</router-link>
                <router-link to="/index/yxintroduce">隐形管理介绍</router-link>
                <!-- <a href="wxpay.html">微信支付</a>
                <a href="yxintroduce.html">隐形管理介绍</a> -->
                <!-- <a>硬件</a> -->
            </div>
        </div>
</template>

<script>
export default {
name: "Subnav",
props:{
    imgItem:Object

}
}
</script>

<style scoped>
.subnav a {
    color: #666;
    line-height: 50px;
    display: inline-block;
    margin-left: 15px;
    padding: 0px 10px;
}
.com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
}
.active {
    color: #ff6666!important;
}
.com-con h2,
.com-con1 h2 {
    padding-top: 25px;
    font-size: 40px;
    line-height: 60px;
    color: #4a4a4a !important;
}

</style>