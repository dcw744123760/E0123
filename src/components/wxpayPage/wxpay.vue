<template>
    <div>

        <Subnav></Subnav>
        <div class="banner" :style="`background: url(${require('@/images/intor-images/intor-banner.png')})center no-repeat;`">
            <div class="intor-banner">
                <h2 class="tit">帮你快速接入<span class="green">微信支付</span></h2>
                <p class="des">E0123整合<span class="vs">|</span>免费<span class="vs">|</span>扫码收款</br>轻松实现收款、查账</p>
            </div>
        </div>
        <div class="process-warp warp">
            <h3 class="process-tit">资金商户与微信支付直接结算</h3>
            <p class="process-text">E0123纯信息服务，更安全，更快捷</p>
            <div class="process-img" :style="`background: url(${require('@/images/intor-images/process-img.png')})center no-repeat;`"></div>
        </div>

        <ul class="intor-nav warp">
            <li class="active"><span>扫码支付</span></li>
            <li><span>刷卡支付</span></li>
            <li><span>微商城支付</span></li>
            <li><span>消息支付</span></li>
        </ul>
        <div class="container-warp warp">
            <!-- 扫码支付 -->
            <div class="intro-item">
                <div class="intro-con">
                    <div class="depict">
                        <h3 class="title">扫码支付介绍</h3>
                        <p class="state">扫码支付是指商户系统按微信支付协议生成支付二维码，用户再用微信"扫一扫"来完成支付。</p>
                        <span class="suits">适用于PC网站支付、实体店单品等场景。</span>
                    </div>
                    <div class="photo"><img src="../../images/intor-images/item-img1.png" /></div>
                </div>
                <h4 class="part-tit">案列介绍</h4>
                <div class="icon-warp">
                    <div><i class="supermarket-icon" :style="`background: url(${require('@/images/intor-images/supermarket.png')})center no-repeat;`"></i>电脑扫码</div>
                </div>
                <div class="case-body">
                    <div class="img-chart warp active">
                        <span class="arrow"></span>
                        <div><img src="../../images/intor-images/wechatpay-icon.png" />
                            <div>微信扫码</div>
                        </div>
                        <div><img src="../../images/intor-images/wechatpay-icon2.png" />
                            <div>储值卡扫码</div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- 刷卡支付 -->
            <div class="intro-item">
                <div class="intro-con">
                    <div class="depict">
                        <h3 class="title">刷卡支付介绍</h3>
                        <p class="state">刷卡支付是指用户展示微信钱包内的“刷卡条码/二维码”给商户系统扫描后直接完成支付。</p>
                        <span class="suits">适用于线下面对面收银的场景，如超市、便利店等。</span>
                    </div>
                    <div class="photo"><img src="../../images/intor-images/item-img2.png" /></div>
                </div>
                <h4 class="part-tit">案列介绍</h4>
                <div class="icon-warp PayCard">
                    <div class="active"><i class="supermarket-icon" :style="`background: url(${require('@/images/intor-images/supermarket.png')})center no-repeat;`"></i>电脑扫码</div>
                    <div><i class="store-icon" :style="`background: url(${require('@/images/intor-images/store.png')})center no-repeat;`"></i>手机扫码</div>
                </div>
                <div class="case-body">
                    <div class="img-chart warp active">
                        <span class="arrow" style="margin-left: -70px;"></span>
                        <div><img src="../../images/intor-images/paybycard1.png" />
                            <div>微信刷卡</div>
                        </div>
                        <div><img src="../../images/intor-images/paybycard2.png" />
                            <div>储值卡刷卡</div>
                        </div>
                    </div>
                    <div class="img-chart warp ">
                        <span class="arrow" style="margin-left: 45px;"></span>
                        <div><img src="../../images/intor-images/paybycard3.png" />
                            <div>选择支付方式</div>
                        </div>
                        <div><img src="../../images/intor-images/paybycard4.png" />
                            <div>微信刷卡</div>
                        </div>
                        <div><img src="../../images/intor-images/paybycard5.png" />
                            <div>储值卡刷卡</div>
                        </div>
                        <div><img src="../../images/intor-images/paybycard6.png" />
                            <div>扫码</div>
                        </div>
                        <div><img src="../../images/intor-images/paybycard7.png" />
                            <div>微信支付</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 微商城支付 -->
            <div class="intro-item">
                <div class="intro-con">
                    <div class="depict">
                        <h3 class="title">微商城支付介绍</h3>
                        <p class="state">微商城支付是指用户在微商城购买商品时使用的支付方式。</p>
                        <span class="suits">适用于线上购买商品的时候选择支付方式的场景。</span>
                    </div>
                    <div class="photo"><img src="../../images/intor-images/item-img3.png" /></div>
                </div>
                <h4 class="part-tit">案列介绍</h4>
                <div class="icon-warp">
                    <div><i class="commerce" :style="`background: url(${require('@/images/intor-images/commerce.png')})center no-repeat;`"></i>微商城</div>
                </div>
                <div class="case-body">
                    <div class="img-chart warp active">
                        <span class="arrow"></span>
                        <div><img src="../../images/intor-images/wechatshop1.png" />
                            <div>微信扫码</div>
                        </div>
                        <div><img src="../../images/intor-images/wechatshop2.png" />
                            <div>储值卡扫码</div>
                        </div>
                        <div><img src="../../images/intor-images/wechatshop3.png" />
                            <div>支付界面</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 消息支付 -->
            <div class="intro-item">
                <div class="intro-con">
                    <div class="depict">
                        <h3 class="title">消息支付介绍</h3>
                        <p class="state">微商城支付是指商家发送一条支付消息到客户手机微信上，客户点击链接进行支付即完成。</p>
                        <span class="suits">适用于线下实体店开单收款操作。</span>
                    </div>
                    <div class="photo"><img src="../../images/intor-images/item-img4.png" /></div>
                </div>
                <h4 class="part-tit">案列介绍</h4>
                <div class="icon-warp">
                    <div><i class="commerce"></i>消息支付</div>
                </div>
                <div class="case-body">
                    <div class="img-chart warp active">
                        <span class="arrow"></span>
                        <div><img src="../../images/intor-images/pay-icon1.png" />
                            <div>消息支付</div>
                        </div>
                        <div><img src="../../images/intor-images/pay-icon2.png" />
                            <div>接受消息</div>
                        </div>
                        <div><img src="../../images/intor-images/pay-icon3.png" />
                            <div>确认支付</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--  -->
        <div class="apply warp">
            <div style="overflow: hidden;margin-bottom: 35px;">
                <h4 style="float: left;">申请流程</h4>
                <a href="#" style="float: right;"> 了解详细流程</a>
            </div>
            <ul class="apply-process">
                <li>
                    <i style=""><span>1</span></i>
                    <div>
                        <h4>申请E0123商户</h4>
                        <p>关注公众号,点击CRM注册商户并通过商户和门店认证。</p>
                    </div>
                </li>
                <li>
                    <i><span>2</span></i>
                    <div>
                        <h4>申请微信支付</h4>
                        <p>提交资料，E0123带代申请，待资料审核通过后，完成账户认证。</p>
                        <a href="#">>教材</a>
                    </div>
                </li>
                <li>
                    <i><span>3</span></i>
                    <i style="right: 0px;font-size: 14px;"><span>ok</span></i>
                    <div>
                        <p>OK</p>
                    </div>
                </li>
            </ul>
        <!-- <div>
		<div>
			<h4>申请E0123商户</h4>
			<p>关注公众号,点击CRM注册商户并通过商户和门店认证。</p>
		</div>
		<div>
			<h4>申请微信支付</h4>
			<p>提交资料，E0123带代申请，待资料审核通过后，完成账户认证。</p>
			<a href="#">>教材</a>
		</div>
		<div>OK</div>
	</div> -->
    </div>
</div></template>

<script>
import Subnav from "../subnav.vue";
export default {
    name: 'Wxpay',
    components: {
        Subnav
    }
}
</script>

<style scoped>
    .warp{
	width: 1000px;
}
.banner{
	height: 408px;
	/* background: url(../images/intor-images/intor-banner.png)center no-repeat; */
}
.intor-banner{
	width: 1025px;
	margin: 0px auto;
	color: #fff;
	padding-top: 85px;
}
.green{color: #34da4d;}
.intor-banner .tit{
	font-size: 36px;
}
.intor-banner .des{
	font-size: 18px;
    margin-top: 15px;
    line-height: 30px;
    
}
.vs{
	margin: 0px 5px;
	display: inline-block;
}
h2,h3{font-weight: 400;}
.process-warp{
	margin: 50px auto;
	text-align: center;
}
.process-tit{
	font-size: 26px;
	margin-bottom: 10px;
}
.process-text{font-size: 16px;color: #999;}
.process-img{
	height: 426px;
	/* background: url(../images/intor-images/process-img.png)center no-repeat ; */
}
.intor-nav{
	display: flex;
	margin: 0px auto;
}
.intor-nav li{
	text-align: center;
	width: 25%;
	font-size: 16px;
	cursor: pointer;
	padding-bottom: 10px;
}
.intor-nav li span{padding-bottom: 5px;}
.intor-nav li+li{
	border-left: 2px solid #c0c0c0;
}
.intor-nav li.active span{
	border-bottom: 2px solid #269937;
}
.intro-con{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:40px 20px;
}
.depict{width: 480px;}
.photo{width: 440px;}
.depict .title{
	font-size: 32px;
    margin-bottom: 10px;
}
.depict .state{font-size: 16px;}
.depict .suits{
	margin-top: 10px;
	color: #54bd2f;
	display: inline-block;
}
.part-tit{
	border-bottom: 1px solid #ddd;
	padding-bottom: 10px;
	margin: 20px auto;
	font-size: 18px;		
}
.container-warp{
	margin-left: auto;
	margin-right: auto;
}
.container-warp .intro-item{
	display: none;
}
.container-warp .intro-item:first-child{
	display: block;
}
.apply{
	margin-top: 40px;
	margin-bottom: 100px;
	margin-left: auto;
	margin-right: auto;
}
.apply-process{
	display: flex;
	margin: 20px auto;
}
.apply-process li{
	width: 33.3%;
	border-top: 2px solid #54bd2f;
	position: relative;
	padding: 20px 0px;
}
.apply-process li i{
	position: absolute;
	display: block;
	width: 30px;
	height: 30px;
	background: #fff;
	border-radius:50%;
	top: -17px;
	font-style: normal;

}
.apply-process li i span{
	display: block;
	width: 24px;
	height: 24px;
	font-size: 16px;
	border-radius:50%;
	border:2px solid #54bd2f;
	text-align: center;
	margin: 3px auto;
	color: #54bd2f;
	line-height: 19px;
	background: #fff;
}
.apply-process li>div{
	padding: 10px;
}
.apply-process li>div h4{color: #333;margin-bottom: 10px;}
.apply-process li>div p{color: #999;line-height: 20px;font-size: 14px;}
.icon-warp{
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}
.icon-warp>div+div{margin-left: 50px;}

.supermarket-icon{
	display: block;
	width: 70px;
	height: 70px;
	/* background: url(../images/intor-images/supermarket.png)center no-repeat ; */
	margin: 0px auto 10px auto;
}

.store-icon{
	display: block;
	width: 70px;
	height: 70px;
	/* background: url(../images/intor-images/store.png)center no-repeat ; */
	margin: 0px auto 10px auto;
	
}
.commerce{
	display: block;
	width: 70px;
	height: 70px;
	/* background: url(../images/intor-images/commerce.png)center no-repeat ; */
	margin: 0px auto 10px auto;
}

.img-chart{
	margin: 30px auto;
	background: #e7e7e7;
	border: 1px solid #ddd;
	padding: 40px;
	display: none;
	justify-content: center;
	text-align: center;
	position: relative;
}
.case-body>.active{display:flex;}

.img-chart>div+div{
	margin-left: 20px;
}
.img-chart img{margin-bottom: 20px;}
.img-chart .arrow{
  	width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid #e7e7e7;
	position: absolute;
	top:  -15px;
	left: 50%;
	margin-left: -10px;

}
</style>