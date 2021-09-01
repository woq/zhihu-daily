<template>
    <van-card
        @click="goStoryByID(stories.id)"
        :desc="stories.hint"
        :title="stories.title"
        :thumb="stories.images[0]"
        style="width: 30rem"
    />
</template>

<script>
import api from './../api/index.js';
export default {
  name: "home-article",
  props:{
    stories: Object,
  },
  methods:{
    goStoryByID(id){
      this.$router.push({
        path: `/story/${id}`,
        params: {
          story: api.getStoryByID(id)
        }
      })
    }
  }
}
</script>

<style>

</style>