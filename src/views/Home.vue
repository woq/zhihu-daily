<template>
  <div class="home">

          <span v-text="today"></span><span v-text="greeting"></span><span class="avatar">User</span>
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

          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
          >
            <div class="articles">
              <homeArticle
                  v-for="story in stories"
                  :key="story.id"
                  :stories = "story"
              />
            </div>
            <van-divider content-position="left">
              {{today}}
            </van-divider>
          </van-list>

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
      today: dayjs().format('M月D日 dddd '),
      greeting: dayjs().format('A') === 'AM' ? '上午好 ' : '下午好 ',
      latest: {},
      stories: {},
      loading: false,
      finished: false,
      before: 1,
      testObject: {},
    }
  },
  mounted() {
    this.getLast();
  },
  methods: {
    getLast(){
      api.getStoriesLast().then((res) => {
        this.latest = res.data;
        this.stories = res.data.stories;
      })
    },
    onLoad() {
      api.getStoriesByDate(Number(dayjs(dayjs().subtract(this.before, 'day')).format('YYYYMMDD'))).then((res) => {

        for (let stories in res.data.stories){
          this.stories.push(res.data.stories[stories]);
        }
        this.before += 1;
        this.loading = false;
      })
    },
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