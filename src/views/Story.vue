<template>
  <div class="storyMaintain" v-html="story">
    wtf
  </div>
</template>

<script>
import api from './../api/index.js'
export default {
  name: "Story",
  date(){
    return{
      story: String,
    }
  },
  methods:{
    getStory(){
      api.getStoryByID(this.$route.params.id).then((res) => {
        this.story = res.data.body;
      })
    }
  },
  mounted() {
    this.getStory();
  }
}
</script>

<style scoped>
</style>