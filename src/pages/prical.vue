<template>
	<div>
		<pageHeader></pageHeader>
		<section class="pageMain">
			<div class="prical-banner" v-bind:style="{backgroundImage:'url('+pricalBanner+')'}">
				<h2>价格计算器</h2>
				<div>您可根据自身需求，选择最适合的产品组合，使用价格计算器估算成本</div>
			</div>
			<div class="com-con mart20">
				<ul class="prical-icon">
					<li v-for="(item,index) in navListItems" v-bind:key="index" v-on:click="navListItemClickFun(index)">
						<span><img v-bind:src="item.icon"></span>
						<span>{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="clearfix mart20 com-con " style="margin-bottom: 100px;">
				<div class="pull-left left-box">
					<h4 class="pri-con-title"><span class="pri-con-title1">库存管理</span><span class="pull-right pri-totle-box"><span class="pri-totle on hidden">价格总览</span><span class="cp-xq">产品详情</span></span></h4>
					<div class="pri-data-con pri-data-con1">
						<div class="prical-con">
							<div class="active">
								<!--认证内容  -->
								<h3 class="pri-sm-tit">认证内容</h3>
								<div class="tem-btn">
									<span class="" v-bind:class="{on:item.checked}" v-for="(item,index) in pricalConObj[navListItems[navListItemsCheckedIndex].id]" v-bind:key="index" v-on:click="pricalConClickFun(index,navListItems[navListItemsCheckedIndex].id)">
										{{item.name}}
									</span>
								</div>
								<div class="p-con-box">
									<template v-for="(item,index) in pricalConObj[navListItems[navListItemsCheckedIndex].id]" >
										<div class="p-con" v-bind:class="{active:item.checked}" v-bind:key="index" v-show="item.checked">
											<font>
												{{item.name}} 
												<template v-if="item.unit"><span>/</span><span class="" >{{item.unit}}</span></template>
												<template v-if="item.cycle"><span>/</span><span class="cycle" >年</span></template>
											</font>
											<span class="f-o-color"><span name="500">{{item.pricalName * item.num}}</span>元</span>
											<div class="clearfix"></div>
											<div class="n-input">
												<span class="fa  fa-minus  minu"  v-on:click="minuFun(index,navListItems[navListItemsCheckedIndex].id)"></span>
												<input type="text" value="1" class="nums" v-model="item.num">
												<span class="fa fa-plus plus" v-on:click="plusFun(index,navListItems[navListItemsCheckedIndex].id)"></span>
											</div>
										</div>
									</template>
								</div>
							</div>
						</div>
					</div>
					<div class="pri-data-footer">
						<div>总计费用：
							<span class="f-o-color"><span class="font24 sum1" nextyearnum="1100">{{itemTotalMoney}}</span>元</span>
							<span class="" style=" color: #999;">（后付费产品费用以实际使用情况为准，此数据仅供参考）</span>
						</div>
						<span class="mart10 budget-btn"  v-on:click="addBudgetListFun()">加入预算清单</span>
					</div>
				</div>
				<div class="pull-right right-box">
					<h4 class="pri-con-title pri-con-title2">价格预算清单</h4>
					<div class="pri-data-body">
						<div class="pri-data-con" v-for="(item,index) in navListItems" v-bind:key = "index" v-if="item.repertoire">
							<h3>{{item.name}}<span class="pull-right" v-on:click="priRemoveFun(index)"><i class="fa fa-trash-o pri-remove "></i></span></h3>
							<div class="">
								<div v-for="(item2,index2) in pricalConObj[navListItems[index].id]" v-bind:key = "index2" v-if="item2.budgetList">
									<font>{{item2.name}}</font>
									<span>{{item2.pricalName}}</span>
									<span>    ( {{item2.budgetListNum}} )</span>
									<span style="float:right;" v-if="item2.cycle"> / {{item2.cycle}}</span>
								</div>
							</div>
							<div class="f-o-color"><span class="font24 sum2">{{bl_itemTotalMoney(index)}}</span>元</div>
						</div>
					</div>
					<div class="pri-data-footer">
						<div>
							<span class="f-o-color">
								<span class="font24 sum3">{{pageTotalMoneyNum}}</span>元
							<span style="margin-left:10px;color: #999;font-size:13px;">次年年费：<span class="nextYearNum3">{{ nextyearnum }}</span>元</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import pageHeader from '../components/pageHeader.vue';
	import pricalBanner from '../images/prical-banner.png'
	export default {
        name:'Prical',
		data() {
			return {
				pricalBanner: pricalBanner,
				navListItemsCheckedIndex: 0,
				pageTotalMoneyNum:0,//页面总金额
                nextyearnum:0,//次年年费
				navListItems: [{
						name: '商户服务',
						icon: require('../images/1-1.png'),
						id: "pos_sv",
						repertoire:false,//记录是否加入清单
					},
					{
						name: '门店项目',
						icon: require('../images/2-1.png'),
						id: "stock_amn",
						repertoire:false,//记录是否加入清单
					},
					{
						name: '微信方案',
						icon: require('../images/5-1.png'),
						id: "wx_plan",
						repertoire:false,//记录是否加入清单
					}, {
						name: '硬件耗材',
						icon: require('../images/3-1.png'),
						id: "hd_scb",
						repertoire:false,//记录是否加入清单
					},
					{
						name: '其他服务',
						icon: require('../images/4-1.png'),
						id: "other_sv",
						repertoire:false,//记录是否加入清单
					},
					{
						name: 'API开放接口',
						icon: require('../images/4-1.png'),
						id: "api_itf",
						repertoire:false,//记录是否加入清单
					},
				],
				pricalConObj: {
					pos_sv: [{
							name: '总后台',
							unit: false,  //是否带单位
							pricalName: "500",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年' //单位年，需要计入次年收费
						},
						{
							name: '移动支付',
							unit: false,
							pricalName: "99",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
						{
							name: '微小易员工码',
							unit: false,
							pricalName: "60",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: "年"
						},
						{
							name: '标签码',
							unit: "个",
							pricalName: "0.5",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
						{
							name: '镜片助手',
							unit: "个",
							pricalName: "880",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: 'POST机',
							unit: "个",
							pricalName: "500",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        
					],
					stock_amn: [{
							name: '零售前台',
							unit: '店',
							pricalName: "300",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '仓库',
							unit: '店',
							pricalName: "800",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '批发前台',
							unit: '店',
							pricalName: "1200",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '加工中心',
							unit: '店',
							pricalName: "500",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '视光中心',
							unit: false,
							pricalName: "1200",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '视力普查',
							unit: '3万条数据',
							pricalName: "1800",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '加工提交店',
							unit: '店',
							pricalName: "300",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: 'AI文字识别',
							unit: '店',
							pricalName: "3000",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '设备接口服务年费',
							unit: false,
							pricalName: "300",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '蓝牙解析+设备',
							unit: '台',
							pricalName: "800",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '加盟店',
							unit: '店',
							pricalName: "300",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '视力表投屏',
							unit: '台',
							pricalName: "300",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '零售UDI码解析',
							unit: "店",
							pricalName: "300",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '批发UDI码解析',
							unit: "店",
							pricalName: "1200",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
                        {
							name: '短信',
							unit: '1000条',
							pricalName: "100",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						}
					],
					wx_plan:[{
							name: '基础模块',
							unit: false,
							pricalName: "1200",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '营销模块',
							unit: false,
							pricalName: "1200",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '商城模块',
							unit: false,
							pricalName: "1200",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '腾讯云图空间',
							unit: 'G',
							pricalName: "400",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '年'
						},
						{
							name: '微信营销技术托管',
							unit: false,
							pricalName: "10000",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '季'
						},
                        {
							name: '微信营销执行托管',
							unit: false,
							pricalName: "20000",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: '季'
						}
					],
                    hd_scb:[{
							name: 'WIFI打印机',
							unit: '个',
							pricalName: "1800",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        // {
						// 	name: '无线专业扫码枪',
						// 	unit: '个',
						// 	pricalName: "600",
						// 	checked: false,
						// 	budgetList:false,//是否加入了预算清单
						// 	budgetListNum:1,//加入了预算清单的数量
						// 	num: 1,
						// 	cycle: false
						// },
                        {
							name: '有线工业扫码枪',
							unit: '个',
							pricalName: "600",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '无线工业扫码枪',
							unit: '个',
							pricalName: "800",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '高清条码打印机',
							unit: '个',
							pricalName: "2200",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '镜架类标签纸',
							unit: '个',
							pricalName: "80",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:6,//加入了预算清单的数量
							num: 6,
							cycle: false
						},
                        {
							name: '专用小色带',
							unit: '个',
							pricalName: "60",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
						{
							name: '隐形标签纸',
							unit: '个',
							pricalName: "100",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:2,//加入了预算清单的数量
							num: 2,
							cycle: false
						},
                        {
							name: '隐形瓶装标签纸',
							unit: '个',
							pricalName: "100",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:2,//加入了预算清单的数量
							num: 2,
							cycle: false
						},
                        {
							name: '进口高清条码打印机',
							unit: '个',
							pricalName: "3000",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '高清度色带',
							unit: '个',
							pricalName: "200",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: 'wifi标签机',
							unit: '个',
							pricalName: "1800",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '网络打印盒子',
							unit: '个',
							pricalName: "600",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '云盒子打印数',
							unit: '1000条',
							pricalName: "100",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
						
					],
                    other_sv:[
                        {
							name: '条码远程服务',
							unit: '个',
							pricalName: "300",
							checked: true,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '实施服务费',
							unit: false,
							pricalName: "1000",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '开放get接口',
							unit: false,
							pricalName: "50000",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle: false
						},
                        {
							name: '开放get接口年费',
							unit: false,
							pricalName: "10000",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle:  '年'
						},
                        {
							name: '蓝牙设备年费',
							unit: false,
							pricalName: "600",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle:  '年'
						},
                        {
							name: 'AI 视光拍摄识别',
							unit: '2000次',
							pricalName: "500",
							checked: false,
							budgetList:false,//是否加入了预算清单
							budgetListNum:1,//加入了预算清单的数量
							num: 1,
							cycle:false
						},
                    ],
                    api_itf:[
                            {
                                name: '预约排队叫号机',
                                unit: false,
                                pricalName: "1200",
                                checked: false,
                                budgetList:false,//是否加入了预算清单
                                budgetListNum:1,//加入了预算清单的数量
                                num: 1,
                                cycle:'年'
                            },
                            {
                                name: '推送POST数据',
                                unit: false,
                                pricalName: "10000",
                                checked: false,
                                budgetList:false,//是否加入了预算清单
                                budgetListNum:1,//加入了预算清单的数量
                                num: 1,
                                cycle:'年'
                            },
                            {
                                name: '接收POST更新数据',
                                unit: false,
                                pricalName: "10000",
                                checked: false,
                                budgetList:false,//是否加入了预算清单
                                budgetListNum:1,//加入了预算清单的数量
                                num: 1,
                                cycle:'年'
                            },
                            {
                                name: '接收POST新建数据',
                                unit: false,
                                pricalName: "10000",
                                checked: false,
                                budgetList:false,//是否加入了预算清单
                                budgetListNum:1,//加入了预算清单的数量
                                num: 1,
                                cycle:'年'
                            },
                            {
                                name: '读取GET数据',
                                unit: false,
                                pricalName: "10000",
                                checked: false,
                                budgetList:false,//是否加入了预算清单
                                budgetListNum:1,//加入了预算清单的数量
                                num: 1,
                                cycle:'年'
                            }
                        ]
				}
			}
		},
		components: {
			pageHeader
		},
		watch:{
			'pricalConObj':function(){
				console.log("12232")
			}
		},
		methods:{
			navListItemClickFun:function(index,e){
				this.navListItemsCheckedIndex = index;
			},
			pricalConClickFun:function(index,type){
				this.pricalConObj[type][index].checked = !this.pricalConObj[type][index].checked;
			},
			minuFun:function(index,type){
				this.pricalConObj[type][index].num = --this.pricalConObj[type][index].num
			},
			plusFun:function(index,type){
				this.pricalConObj[type][index].num = ++this.pricalConObj[type][index].num
			},
			addBudgetListFun:function(){
				let navListItemsCheckedIndex = this.navListItemsCheckedIndex;
				let navListItems = this.navListItems;
				let thisPricalConObjItem = this.pricalConObj[navListItems[navListItemsCheckedIndex].id];
				navListItems[navListItemsCheckedIndex].repertoire = true;
				for (var i = 0; i < thisPricalConObjItem.length; i++) {
					thisPricalConObjItem[i].budgetListNum = thisPricalConObjItem[i].num;
					thisPricalConObjItem[i].budgetList = thisPricalConObjItem[i].checked;
				}
				this.pageTotalMoneyFun();
			},
			priRemoveFun:function(index){
				let navListItems = this.navListItems;
				let thisPricalConObjItem = this.pricalConObj[navListItems[index].id];
				navListItems[index].repertoire = false;
				for (var i = 0; i < thisPricalConObjItem.length; i++) {
					thisPricalConObjItem[i].budgetListNum = 1;
					thisPricalConObjItem[i].budgetList = false;
				}
				this.pageTotalMoneyFun();
			},
			pageTotalMoneyFun:function(e){  //
				let pricalConObj = this.pricalConObj;
				let pageTotalMoneyNum = 0;
                let nextyearnum = 0;
				for (var key in pricalConObj) {
					for (var i = 0; i < pricalConObj[key].length; i++) {
						if(!!pricalConObj[key][i].budgetList){
							pageTotalMoneyNum += pricalConObj[key][i].budgetListNum * pricalConObj[key][i].pricalName;
						}
                        if(!!pricalConObj[key][i].budgetList &&pricalConObj[key][i].cycle ){
                            nextyearnum += pricalConObj[key][i].budgetListNum * pricalConObj[key][i].pricalName;
						}
					}
				}
				console.log(nextyearnum)
				this.pageTotalMoneyNum = pageTotalMoneyNum;
                this.nextyearnum = nextyearnum;
			},
		},
		computed:{
			itemTotalMoney:function(){
				let itemTotalMoneyNum = 0;
				let pricalConObj = this.pricalConObj;
				let navListItems = this.navListItems;
				let navListItemsCheckedIndex = this.navListItemsCheckedIndex;
				for(let i=0;i<pricalConObj[navListItems[navListItemsCheckedIndex].id].length;i++){
					let thisItem  = pricalConObj[navListItems[this.navListItemsCheckedIndex].id][i];
					if(!!thisItem.checked){
						itemTotalMoneyNum += thisItem.num * thisItem.pricalName
					}
				}
				return itemTotalMoneyNum;
			},
			bl_itemTotalMoney:function(){  //预算清单 单个项目金额
				let that = this;
				return function(e){
					let itemTotalMoneyNum = 0;
					let pricalConObj = this.pricalConObj;
					let navListItems = this.navListItems;
					let navListItemsCheckedIndex = e;
					for(let i=0;i<pricalConObj[navListItems[navListItemsCheckedIndex].id].length;i++){
						let thisItem  = pricalConObj[navListItems[e].id][i];
						if(!!thisItem.budgetList){
							itemTotalMoneyNum += thisItem.budgetListNum * thisItem.pricalName
						}
					}
					//that.pageTotalMoneyFun(itemTotalMoneyNum);
					return itemTotalMoneyNum;
				}
			},
			
			
			
		}
	}
</script>

<style scoped>
	:global(body){
        background: #f0f2f5;
    }
	.prical-banner {
		text-align: center;
		width: 100%;
		position: relative;
		height: 170px;
		background: url('../images/prical-banner.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.prical-banner h2 {
		font-size: 24px;
		font-weight: bold;
		padding-bottom: 20px;
		top: 40px;
		position: relative;
	}
	
	.prical-banner div {
		line-height: 24px;
		top: 40px;
		position: relative;
		font-size: 16px;
		padding: 0px 10px;
	}
	
	.prical-icon {
		overflow: hidden;
	}
	
	.prical-icon li {
		width: 19.2%;
		margin-right: 1%;
		margin-bottom: 10px;
		text-align: left;
		padding: 0px 20px;
		float: left;
		background: #f9f9f9;
		height: 70px;
		line-height: 70px;
		min-width: 120px!important;
		cursor: pointer;
	}
	
	.prical-icon li:nth-child(5n) {
		margin-right: 0px;
	}
	
	.mart10 {
		margin-top: 10px;
	}
	
	.mart20 {
		margin-top: 20px;
	}
	
	.left-box {
		width: 68%;
		margin-right: 2%;
		background: #fff;
	}
	
	.pri-con-title {
		border-bottom: 1px solid #ddd;
		padding: 10px 20px;
		font-size: 16px;
		font-weight: bold;
	}
	
	.pri-con-title span {
		font-weight: normal;
		color: #999;
		font-size: 12px;
		cursor: pointer;
		padding: 0px 5px;
	}
	
	.pri-totle-box .on {
		color: #ff9966;
	}
	
	.pri-data-con {
		font-size: 14px;
	}
	
	.pri-data-con>div {
		padding: 10px 20px;
	}
	
	.pri-data-con h3 {
		font-size: 14px;
		font-weight: bold;
	}
	
	.tem-btn {
		overflow: hidden;
		margin-top: 10px;
	}
	
	.tem-btn>span {
        min-width: 100px;
        text-align: center;
        display: block;
        float: left;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
        cursor: pointer;
        border-right: 1px solid #ddd;
        padding: 5px 10px;
        margin-bottom: 5px;
        margin-right: 3px;
        border-radius: 5px;
	}
	
	.p-con {
		overflow: hidden;
		margin: 15px 0px;
	}
	
	.p-con>font {
		display: block;
		min-width: 210px;
		float: left;
	}
	
	.p-con>font>span {
		padding: 0px 5px;
	}
	
	.n-input {
		margin-top: 15px;
		overflow: hidden;
	}
	
	.n-input input {
		width: 80px;
		padding: 3px;
		text-align: center;
		border: 1px solid #ddd;
		outline: none;
		float: left;
	}
	
	.n-input>span {
		border: 1px solid #ddd;
		float: left;
		padding: 6px 12px;
		cursor: pointer;
		color: #999;
	}
	
	.p-con>span {
		float: left;
	}
	
	.tem-btn>span:last-child {
		border-right: 1px solid #ddd;
	}
	/*ä»·æ ¼æ€»è§ˆ  */
	
	.pri-list li {
		border-bottom: 1px solid #ddd;
		overflow: hidden;
		padding: 10px 0px;
	}
	
	.pri-list li div {
		float: left;
	}
	
	.pri-list li div:first-child {
		width: 100px;
		height: 100%;
		overflow: hidden;
	}
	
	.pri-list li div span {
		text-align: center;
		padding: 10px;
		border: 1px solid #ddd;
		width: 130px;
		float: left;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	
	.pri-list li div:last-child {
		width: 85%;
	}
	
	.pri-list li div p {
		color: #ff9966;
	}
	
	.right-box {
		width: 30%;
        background: #f5f5f5;
        border-radius: 5px;
	}
	
	.right-box h3 {
		padding: 10px 20px;
	}
	
	.right-box h3 i {
		font-size: 16px;
		margin-left: 10px;
		cursor: pointer;
		padding: 0px 10px;
	}
	
	.right-box .pri-data-con>div {
		padding: 5px 20px;
		color: #999;
	}
	
	.right-box .pri-data-con>div font {
		text-align: left;
		margin-right: 10px;
		display: inline-block;
		min-width: 100px;
	}
	
	.pri-data-footer {
		border-top: 2px solid #ddd;
		padding: 10px 20px;
	}
	
	.export-btn,
	.budget-btn {
		padding: 3px 10px;
		border: 1px solid #ddd;
		color: #0071ce;
		cursor: pointer;
		display: inline-block;
		min-width: 80px;
		text-align: center;
	}
	
	.font24 {
		font-size: 24px;
	}
	
	.icon {
		width: 30px;
		height: 30px;
		display: inline-block;
	}
	
	.prical-icon span {
		display: inline-block;
	}
	
	.prical-icon span:first-child {
		width: 36px;
		height: 36px;
		margin-right: 5%;
	}
	
	.prical-icon span:first-child img {
		width: 100%;
	}
	
	@media screen and (min-width:960px) and (max-width:1200px) {
		.pri-list li div:last-child {
			width: 80%;
		}
	}
	
	@media screen and (max-width: 400px) {
		/*å½“å±å¹•å°ºå¯¸å°äºŽ600pxæ—¶ï¼Œåº”ç”¨ä¸‹é¢çš„CSSæ ·å¼*/
		.login-btn {
			display: none;
		}
	}
	
	.prical-con>div {
		display: none;
	}
	
	.prical-con>.active {
		display: block;
	}
	
	.tem-btn .on {
		background: #ff9966;
		color: #fff;
		border-right: 1px solid #fff;
		border-left: 1px solid #fff;
	}
	
	li,
	ul {
		list-style-type: none;
	}
	
	.com-con {
		width: 70%;
		margin: 0px auto;
		overflow: hidden;
	}
	
	.mart20 {
		margin-top: 20px;
	}
	.f-o-color {
	    color: #ff6633!important;
	}
</style>