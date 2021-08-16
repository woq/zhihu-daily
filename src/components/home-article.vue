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
export default {
  name: "home-article",
  props:{
    stories: Object,
  },
  methods:{
    goStoryByID(id){
      this.$router.push({
        path: `/story/${id}`,
      })
    }
  }
}
</script>

<style>

</style>