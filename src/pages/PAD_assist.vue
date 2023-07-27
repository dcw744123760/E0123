<template>
    <div>
        <pageHeader></pageHeader>
        <div class="iframeBox">
            <iframe ref="iframe"  id="priceCounter_iframe" src="https://crm.e0123.cn/crm/onlineStoreGoods/pageModeEdit.xhtml?companyId=50&amp;customPageId=38" style=""></iframe>
        </div>
        <!-- <Footer></Footer> -->
    </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue';
import Footer from "../components/footer.vue";
export default {
    name: 'PAD_assist',
    components: {
        pageHeader,
        //Footer
    },
    mounted(){
        
    }

}
</script> 

<style scoped>

:global(body) {
    background-color: #fff !important;
}
.iframeBox{
    height: calc(100vh - 66px);
}
footer{
    position: unset;
}
iframe {
    width: 100%;
    border: 0;
    min-height: 700px;
    height: 100%;
}
</style>