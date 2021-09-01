<template>
  <div class="storyMaintain" v-html="this.story.body">
    wtf
  </div>
</template>

<script>
export default {
  name: "Story",
  props: {
    story: Object,
  }
}
</script>

<style scoped>
</style>