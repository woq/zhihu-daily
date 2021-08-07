<template>
  <div class="home">
    <van-row class="topBar">
      <van-col span="12">
        <div class="date">
          <span v-text="today"></span><span v-text="amPm"></span><span class="avatar">占个位置</span>
        </div>
      </van-col>
    </van-row>
    <van-row class="swipe">
      <van-col span="12">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item
              v-for="top_Stories in latest.top_stories"
              :key="top_Stories.id"
              @click="alertSome(top_Stories.id)"
          >
            <img :src="top_Stories.image" alt="alt" class="swipeImg">
            <p v-html="top_Stories.title+'<br/>'+top_Stories.hint"></p>
          </van-swipe-item>
        </van-swipe>

      </van-col>
    </van-row>
    <van-row class="articles">
      <van-col span="12" >
        <Article
            v-for="stories in latest.stories"
            :key="stories.id"
            v-bind:stories = "stories"
        ></Article>
      </van-col>

    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
import api from './../api/index.js';
import Article from '@/components/Article.vue';
import dayjs from 'dayjs';
export default {
  name: 'Home',
  components: {
    Article
  },
  data(){
    return{
      today: dayjs().format('M月DD|分隔符|'),
      amPm: dayjs().format('A') === 'AM' ? '上午好' : '下午好',
      latest: {},
    }
  },
  mounted() {
    this.getLast();
  },
  methods: {
    getLast(){
      api.getStoriesLast().then((res) => {
        this.latest = res.data;
        // this.today = res.data.date;
        // this.storiesMore.push(res.data.stories)
      })
    },
    alertSome(text){
      alert(text);
    }
    // getDate(date){
    //   api.getStoriesByDate(date).then((res) => {
    //     this.storiesMore.push(res.data.stories)
    //   })},
  }
}
</script>

<style>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.topBar,.swipe,.articles,.date{
  display:flex;
  justify-content:center;
  align-items:center;
}
.swipe{
  position: relative;
  text-align: center;
  color: white;
}
.swipe p{
  z-index: 100;
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: bold;
  left: 5vw;
  top: 55vh;
}
</style>