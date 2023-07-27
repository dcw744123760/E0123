<template>
    <footer>
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
	</footer>
</template>
<script>
    export default{
        name:'Footer'
    }
</script>

<style scoped>
footer {
    border-top: 2px solid #ededed;
    background: #fff;
    z-index: 99;
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 10px 0px;
    font-size: 12px;
    line-height: 24px;
}
    .com-con {
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
}
footer>div img {
    margin-right: 5px;
}
</style>