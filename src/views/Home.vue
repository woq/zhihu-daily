<template>
  <div class="home">

          <span v-text="today"></span><span v-text="amPm"></span><span class="avatar">User</span>
          <div class="swipeTopStories" style="display:flex;justify-content:center">
            <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
                width="640"
                height="640"
                style="width: 640px; height: 640px;"
            >
              <van-swipe-item
                  v-for="top_Stories in latest.top_stories"
                  :key="top_Stories.id"
              >
                <img :src="top_Stories.image" :alt="top_Stories.hint">
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="articles">
            <homeArticle
                v-for="stories in latest.stories"
                :key="stories.id"
                v-bind:stories = "stories"
            ></homeArticle>
          </div>

  </div>
</template>

<script>
// @ is an alias to /src
import api from './../api/index.js';
import homeArticle from '@/components/home-article.vue';
import dayjs from 'dayjs';
export default {
  name: 'Home',
  components:{
    homeArticle,
  },
  data(){
    return{
      today: dayjs().format('M月DD|'),
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
.articles{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>