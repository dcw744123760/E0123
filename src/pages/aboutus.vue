<template>
    <div>
        <pageHeader></pageHeader>
        <div class="com-con subnav">
            <div class="pull-left"><a>关于我们</a></div>
            <div class="pull-right aboutus-btn" id="btnBuy">
                
                <a :class="{red:index == shoowAboutusConIndex}" v v-for="(nav,index) in aboutusNav" v-bind:key="index" v-on:click="navClickFun(index)">{{ nav }}</a>
               
            </div>
        </div>
       
        <div class="com-con aboutus-con" style="min-height: 80vh;" id="bb">
            <!-- 简介 -->
            <div v-show="shoowAboutusConIndex==0">
                <div class="aboutus-banner" style="position: relative;min-height:150px;">
                    <!-- <img src="../images/comm.png" /> -->
                    <el-image :src="require('@/images/comm.png')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                    <div style="position: absolute;top: 64px;left: 300px;font-size: 18px;"><span
                            style="width: 14px;height: 14px;display: inline-block;border:3px solid #47bcce;border-radius: 50%;margin-right: 5px;"></span>营业执照（正本、副本）
                    </div>
                    <div style="position: absolute;top: 64px;left: 710px;font-size: 18px;"><span
                            style="width: 14px;height: 14px;display: inline-block;border:3px solid #47bcce;border-radius: 50%;margin-right: 5px;"></span>印章（公司章、法人章、财务章）
                    </div>
                </div>
                <div class="clearfix aboutus-text">
                    <div style="display: block; position: relative;">
                        <h2>广州市明睿软件科技有限公司</h2>
                        <div style="float: left; margin-left: -195px;margin-top:10px;position: absolute;left: 50%;">
                            <div>统一社会信用代码：91440104664043863Q</div>
                            <div>网站：<a href="http://www.e0123.cn">e0123.cn</a></div>
                            <div>微信：E0123</div>
                        </div>
                    </div>
                    <div>
                        <div class="address-info">
                            <div>经营范围：软件和信息技术服务业务</div>
                            <div>具体范围：计算机技术开发、技术服务、计算机硬件、眼镜、互联网商品批发、零售维护、软件开发、信息技术咨询服务；</div>

                        </div>

                    </div>
                </div>
            </div>
            <!-- 历史 -->
            <div  v-show="shoowAboutusConIndex==1">
                <div class="aboutus-banner">
                    <el-image :src="require('@/images/aboutus-bar-4.jpg')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div class="clearfix aboutus-text">
                    <div>
                        <div>
                            <h2>E0123对未来的理解</h2>
                            <div style="text-align: center;margin-top: 10px;">移动、免费、增值服务、O2O引流方案，商城及分销</div>
                        </div>
                    </div>
                    <div>
                        <h4 style="font-weight: bold;margin-bottom: 10px;">明睿十年历史记录</h4>
                        <div>2006年6月，我们成立了明睿研发团队，开始了摸索性开发！</div>
                        <div>2007年7月31日，正式注册了“广州市明睿软件科技有限公司”！</div>
                        <div>2008年售出了我们GCS的第一个客户，GCS订单号全部2008开始！</div>
                        <div>2016年6月，十周年，E0123.cn全新域名及产品正式推出！</div>
                        <div>2017年2月，上海展，我们再次将手机自助注册，销售开单等升级！</div>
                    </div>
                </div>
            </div>
            <!-- 免费理念 -->
            <div  v-show="shoowAboutusConIndex==2">
                <div class="aboutus-banner">
                    <el-image :src="require('@/images/aboutus-bar-3.jpg')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div class="clearfix aboutus-text">
                    <div>
                        <h2>基础功能免费，增值服务收费</h2>
                    </div>
                    <div class="text-details">
                        <div>
                            <font>免费产品：</font>
                            <span>客户记录、验光查询、商品添加、销售开单及打印自助注册和使用，不限制门店，员工，客户，订单数等等。</span>
                        </div>
                        <div>
                            <font>收费项目：</font>
                            <span>人工维护培训等服务收费、增值功能收费，营销功能收费，硬件收费。即使过期了，只会降低到原来的免费版本，客户资料及销售开单等都不受影响！</span>
                        </div>
                        <div>
                            <span>以微信登录，手机、ipad、电脑全平台支持，未来门店或者真的不存在，甚至前台……就像苹果专卖店，那感觉真的很棒！</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 社交网络 -->
            <div  v-show="shoowAboutusConIndex==3">
                <div class="aboutus-banner">
                    <el-image :src="require('@/images/aboutus-bar-2.jpg')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div class="clearfix aboutus-text" id="text-details">
                    <div>
                        <h2>社交网络未来及O2O方案</h2>
                    </div>
                    <div class="text-details">
                        <div>
                            <span>@ 10余年的管理软件开发及企业交流经验，我们深度了解商户及实体店的各种需求</span>
                        </div>
                        <div>
                            <div>@ 实体门店做O2O，最有效的方式就是引导现有的客户进行朋友圈传播，分销，再次消费引导等。。。</div>
                            <div>@ 整个过程，需要与原有的销售系统一体化，与微信朋友圈关系链自动绑定，与商品库存定价系统一体化。。。（任何独立的营销方案，都存在“执行”问题，而E0123提供了一体化的完整方案）
                            </div>
                            <div>@ 精美的移动商品展示，我们加入了供应链，由品牌商提供集中的素材引用支持，提供授权中心。</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 关于我们 -->
            <div  v-show="shoowAboutusConIndex==4">
                <div class="aboutus-banner">
                    <el-image :src="require('@/images/aboutus-bar-1.jpg')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div class="clearfix aboutus-text">
                    <div>
                        <h2>联系我们</h2>
                    </div>
                    <div>
                        <div class="address-info">
                            <div>地址：广州市越秀区中山六路238号越秀新都会16C02</div>
                            <div>电话：020-85584349</div>
                            <div>公众号：E0123</div>
                            <div>EMAIL:weeky1@163.com</div>
                        </div>
                        <div class="aboutus-ewm-box"><img src="../images/ewm2.png" /></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import pageHeader from '../components/pageHeader.vue';
import Footer from "../components/footer.vue";
export default {
    name: 'Aboutus',
    components: {
        pageHeader,
        Footer
    },
    data(){
        return {
            shoowAboutusConIndex:0,
            aboutusNav:['简介','历史','理念','社交网络','联系网络']
        }
    },
    methods:{
        navClickFun(index){
            this.shoowAboutusConIndex = index;
        }
    }

}
</script>

<style scoped>
.com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
}

.subnav a {
    color: #333;
    line-height: 50px;
    display: inline-block;
    padding: 0px 10px;
}
.red {
    color: #ff6666!important;
}

.aboutus-con>div:first-child{display: block;}
.aboutus-banner{margin: 10px 0px 20px 0px;}
.aboutus-banner img{width: 100%;}
.aboutus-text>div{
	width: 50%;
	padding: 10px 20px;
	float: left;
	
}
.aboutus-text div{
	font-size: 15px;
	line-height: 26px;
	overflow: hidden;
}
.aboutus-text>div:first-child{
	display: flex;
	align-items: center;
	justify-content: center;
	/*height: 100%;*/
	min-height: 200px;
}
.aboutus-text h2{
	text-align: center;
	color: #666;
}
.aboutus-ewm-box{width: 200px;}
.aboutus-ewm-box img{width: 100%;}
.address-info{
	padding: 0px 10px;
	font-size: 14px;
	line-height: 24px;
}
.text-details>div{
	margin-bottom: 20px;
}
.text-details font{
	font-weight: bold;
}
</style>