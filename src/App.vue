<template>
  <div id="app">
    <router-view v-show="!PAD_assistShow"></router-view>

    <!-- <indexPage></indexPage>-->
    <PAD_assist v-show="PAD_assistShow"></PAD_assist>




  </div>
</template>

<script>
import PAD_assist from '../src/pages/PAD_assist.vue';
import router from './router/router';

export default {
  data() {
    return {
      PAD_assistShow: false
    }
  },
  name: 'App',
  router,
  components: {
    PAD_assist
  },
  mounted() {

  },
  watch: {
    $route: {
      immediate: true,//首次加载的时候执行函数
      handler: function (to, from) {
        console.log(to);
        if (to.path == '/PAD_assist') {
          this.PAD_assistShow = true;
        } else {
          this.PAD_assistShow = false;
        }

      }
    },
  }
}
</script>

<style>
heard,
div,
p,
li,
a,
ul,
h1,
h2,
img,
h3,
h4,
h5,
h6 {
  margin: 0px;
  padding: 0px;
  font-family: '微软雅黑' !important;
}
body{
  overflow-y: scroll;
}
.center-block {
  margin-right: unset;
  margin-left: unset;
  text-align: center;
}

li,
ul {
  list-style-type: none;
}

a {
  text-decoration: none !important;
  cursor: pointer;
}

/*滚动条样式start*/
html::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 6px;
}

html::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background-color: #c2c2c2;
  background-clip: padding-box;
  min-height: 28px;
  border-radius: 100px;
}

html::-webkit-scrollbar-track-piece {
  /*滚动条里面轨道*/
  background-color: rgba(0, 0, 0, 0);
}

/*滚动条样式end*/</style>
