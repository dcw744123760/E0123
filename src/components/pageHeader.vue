<template>
    <div>
        <div id="nav" style="height: 60px;">
            <header>
                <nav class="navbar navbar-default" role="navigation">
                    <div class="pull-left">
                        <div class="com-logo"><img src="../images/logo-colour.jpg" /></div>
                        <h2>E0123</h2>
                    </div>
                    <span class="login-btn" v-on:click="linkboxOpen">登录</span>
                    <!-- <div class="head-drop-body">
                        <div class="head-drop"><img src="../static/logo-colour.jpg" /></div>
                        <div class="drop-con">
                            <div><img src="../static/logo-colour.jpg" /> <a>王迪民</a></div>
                            <div>明睿软件公司<a style="margin-left: 5px;">切换</a></div>
                            <div><a>进入后台></a></div>
                            <div class="esc-login">退出</div>
                        </div>
                    </div> -->
                    <div class="container-fluid ">
                        <div class="navbar-header">
                            <el-dropdown trigger="click" class="phoneNavBtn">
                                <div class="el-dropdown-link menuBtn" >
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" style="margin-right: 0" data-target="#example-navbar-collapse">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-s-help"><router-link to="/index">管理软件</router-link></el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-s-opportunity"><router-link to="/PAD_assist">解决方案</router-link></el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-edit-outline"><router-link to="/prical">价格计算器</router-link></el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-connection"><router-link to="/aboutus">关于我们</router-link></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="collapse navbar-collapse " id="example-navbar-collapse">
                             <ul class="nav navbar-nav pull-right">
                                <li>
                                    <router-link to="/index">管理软件</router-link>
                                </li>
                                <li><router-link to="/PAD_assist">解决方案</router-link></li>
                                <li><router-link to="/prical">价格计算器</router-link></li>
                                <li>
                                    <router-link to="/aboutus">关于我们</router-link>
                                </li>
                            </ul> 

                            <!-- <el-tabs style="float: right;">
                                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                            </el-tabs> -->
                        </div>



                    </div>
                </nav>
            </header>
            <!-- <footer>
                <div class="com-con">
                    <div class="pull-left">
                        <p>Copyright © 2016 明睿软件. 保留所有权利。</p>
                        <p><a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19129016号</a></p>
                    </div>
                    <div class="pull-right">
                        <img class="pull-left" src="../images/comewm.png" />
                        <div class="pull-left">
                            <p>电话：020-85584349</p>
                            <p>地址：广州市越秀区中山六路238号越秀新都会16C02</p>
                        </div>
                    </div>
                </div>
            </footer> -->
            <!--弹框  -->
            <div id="mark" v-show="linkboxShow"  style="display:none;" v-on:click="closeLinkbox"></div>
            <div id='linkbox' v-show="linkboxShow" style="display:none;">
                <div>
                    <a href="https://crm.e0123.cn/crm/login/login2.xhtml">
                        <div class="linkimg-box"><img src="../images/logo-colour.jpg" /></div>
                        <div>直连CRM</div>
                        <span>建议使用</span>
                    </a>
                    <a href="https://cdn.e0123.cn/crm/login/login2.xhtml">
                        <div class="linkimg-box"><img src="../images/txyLogo.png" /></div>
                        <div>腾讯云加速CRM</div>
                        <span>备用网络，无法连接时使用</span>
                    </a>
                    <a href="https://open.e0123.cn/crm//httpmine/videoCarousel_login.xhtml">
                        <div class="linkimg-box"><img src="../images/sptf.png" /></div>
                        <div>视频投放</div>
                    </a>
                </div>
            </div>
            <div id="RightNav" :class="{opacity:!customView}">
                <div class="RightNavBra" style="display: none;" v-show="customView">
                    <div class="rightnav-phone">
                        <div>
                            <div class="rightnav-phone-img"><img src="../images/Customer Service.png" /></div>
                        </div>
                        <span class="RightNav_return">×</span>
                        <div class="title">客服电话</div>
                        <ul>
                            <li>020-85584349</li>
                        </ul>
                    </div>
                    <div class="rightnav-qq">
                        <a class="qq1" target="_blank" alt="点击这里给我发送消息" title="点击这里给我发送消息">
                            <div class="rightnav-qq-img"><img src="../images/Customer Service1.png" /></div>
                            <div class="title">QQ客服</div>
                        </a>
                        <ul>
                            <li><a>1744035281</a></li>
                        </ul>
                    </div>
                    <div class="rightnav-QR" style="background: rgb(234,244,247);">
                        <div>
                            <div class="rightnav-QR-img"><img src="../images/QRcode.jpg" /></div>
                        </div>
                        <ul>
                            <li><a>E0123公众号</a></li>
                        </ul>
                    </div>
                </div>
                <div class="RightNav_btnBox" v-on:click="switchCustomView">
                    <a :class="{tackdow:!customView,tackup:customView}">在线客服</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageHeader',
    data() {
        return {
            linkboxShow:false,
            customView:false
        }
    },
    methods:{
        linkboxOpen(){
            this.linkboxShow = true;
        },
        closeLinkbox(){
            this.linkboxShow = false;
        },
        switchCustomView(){
            this.customView = !this.customView
        }
    }
}
</script>

<style scoped>
/*官网头部样式  */
.navbar {
    z-index: 1
}
.router-link-active{
    color: #409eff !important;
}


header {
    height: 60px;
    line-height: 60px;
    background: #fafafa;
    font-size: 14px;
    border-bottom: 1px solid #ededed;
    color: #333;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 1;
}


.com-logo {
    /* width: 50px;
	height: 50px;
	overflow: hidden;
	border-radius:50%; */
    margin-right: 10px;
    float: left;
}

.com-logo img {
    width: 30px;
    height: 30px;
}

header h2 {
    font-size: 24px;
    float: left;
    font-family: '宋体';
    line-height: 60px;
}

.red {
    color: #ff6666 !important;
}

.login-btn {
    border: 1px solid #3399ff;
    color: #3399ff;
    border-radius: 4px;
    line-height: 30px;
    float: right;
    text-align: center;
    margin-top: 15px;
    display: inline-block;
    width: 80px;
    cursor: pointer;
}

header .navbar {
    border: none;
    margin: 0px auto;
}

header .navbar-toggle {
    margin-top: 15px;
}

header .navbar-nav {
    margin-right: 10px;
}

header .navbar-nav>li>a {
    line-height: 30px;
    padding-left: 30px;
    padding-right: 30px;
}


header .navbar-default .navbar-nav>.active>a,
header .navbar-default .navbar-nav>.active>a:hover,
header .navbar-default .navbar-nav>.active>a:focus {
    background: #fafafa;
   
}

#nav {
    height: 60px;
}

/*登录后  */
.head-drop-body {
    display: none;
}

.head-drop {
    position: absolute;
    right: 0px;
    top: 0px;
}

.head-drop img {
    width: 25px;
    height: 25px;
}

.drop-con {
    position: absolute;
    right: 0px;
    top: 60px;
    background: #fff;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
}

.drop-con>div {
    padding: 5px 10px;
}

.drop-con img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
}

.esc-login {
    padding: 5px 10px;
    background: #f8f8f8;
    color: red;
    cursor: pointer;
}

/*右边悬浮框  */
#RightNav {
    position: fixed;
    top: 30vh;
    right: 0px;
    z-index: 99;
    background: #29a7e2;
    border-radius: 6px 0 0 6px;
    text-align: center;
    padding: 5px;
}

.rightnav-phone {
    background: #e9edfb;
    padding: 28px 5px 26px 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
}

.RightNav_return {
    position: absolute;
    right: -5px;
    top: -17px;
    font-size: 14px;
    background: #efbfbf;
    width: 25px;
    line-height: 26px;
    height: 25px;
    border-radius: 100%;
    color: #e86a42;
    font-family: simsun;
    font-weight: bold;
    cursor: pointer;
}

.rightnav-phone>div:first-child {
    position: absolute;
    top: -32px;
    left: 18px;
}

.rightnav-phone .title {
    margin-top: 20px;
}

.rightnav-phone-img {
    height: 20px;
}

.rightnav-phone-img img {
    width: 75%;
}

#RightNav li,
#RightNav li a {
    color: #ff6f2f;
    margin-top: 5px;
}

.rightnav-qq,
.rightnav-QR {
    background-color: #faf9ee;
    padding: 15px 5px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.rightnav-qq-img img {
    width: 44%;
}

.rightnav-QR-img img {
    width: 70%;
}

.rightnav-qq .title {
    margin-top: 5px;
}

/*共用样式  */
.subnav a {
    color: #333;
    line-height: 50px;
    display: inline-block;
    padding: 0px 10px;
}

.subnav a:hover {
    color: #666;
}

.com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
}

.text-center {
    text-align: center;
}

.padtb40 {
    padding-top: 70px;
    padding-bottom: 50px;
}

#mark {
    top: 0px;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, .6);
    z-index: 999;
}

.RightNavBra {
    float: right;
    width: 120px;
}

.RightNav_btnBox {
    float: left;
    font-size: 0;
    /* text-indent: -999em; */
    width: 36px;
    background: #29a7e2;
    padding-top: 10px;
}

.RightNav_btnBox>a {
    z-index: 9;
    left: 0;
    background-image: url(../images/lanrenzhijia.png);
    background-repeat: no-repeat;
    height: 146px;
    padding: 8px;
    display: block;
    background-position: 0px 0;
}

.RightNav_btnBox>.tackup {
    background-position: -37px 0;
}

.RightNav_btnBox>.tackdown {
    background-position: 0 0;
}

.opacity {
    opacity: 0.75;
    ;
}

#linkbox {
    width: 900px;
    height: 470px;
    position: fixed;
    left: 50%;
    margin-left: -450px;
    top: 100px;
    background: #fff;
    z-index: 999;
}

.linkimg-box img {
    width: 100%;
}

#linkbox>div {
    overflow: hidden;
    width: 85%;
    margin: 150px auto;
    display: flex;
    justify-content: space-evenly;
}

#linkbox>div>a {
    float: left;
    width: 200px;
    height: 200px;
    border: 1px solid #ddd;
    margin-right: 20px;
    display: block;
}

#linkbox>div>a>div {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 16px auto;
    margin-bottom: 0;
}

#linkbox>div>a>span {
    font-size: 12px;
    text-align: center;
    display: block;
    color: #ccc;
    margin-top: 2px;
}

.linkimg-box {
    width: 95px;
    height: 95px;
    margin: 28px auto 6px !important;
}

#linkbox>div>a:last-child {
    margin-right: 0px;
}
.navbar-header{
    display:none;
}
@media (min-width: 768px) and (max-width:960px){
    header .navbar {
        border: none;
        margin: 0px auto;
        width: 90%;
    }
}

@media screen and (min-width:960px) {
    .com-con {
        width: 90%;
        margin: 0px auto;
        overflow: hidden;
    }

    header .navbar {
        border: none;
        margin: 0px auto;
        width: 90%;
    }
}
@media (max-width: 768px) {
    header .navbar {
        border: none;
        margin: 0px auto;
        padding: 0 10px;
    }
    .navbar-header{
        display:block;
    }

}

.fa-star {
    color: #999;
}
.phoneNavBtn{
    float: right;
    margin-right: 10px;
}
.phoneNavBtn > .menuBtn {
    font-size: 30px;
}
.hidden {
    display: none;
}</style>