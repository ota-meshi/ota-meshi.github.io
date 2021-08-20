<template>
  <div class="gh-info">
    <a
      class="github-button"
      :href="`https://github.com/${repo}`"
      data-icon="octicon-star"
      data-show-count="true"
      :aria-label="`Star ${repo} on GitHub`"
      target="_blank"
      >Star</a
    >
    <a :href="`https://github.com/${repo}/releases`" target="_blank">
      <img
        :src="`https://img.shields.io/badge/dynamic/json?label=latest release&query=$.created_at&url=https://api.github.com/repos/${repo}/releases/latest?maxAge=3600`"
      />
    </a>
    <!-- <a :href="`https://github.com/${repo}`" target="_blank">
      <img :src="extraPin" />
    </a> -->
  </div>
</template>

<script>
import { loadGhButtonsScript } from "./scripts/buttons"
export default {
  name: "GhInfo",
  props: {
    repo: {
      type: String,
      required: true,
    },
  },
  computed: {
    extraPin() {
      const [, user, repo] = /(.*)\/(.*)/.exec(this.repo)
      return `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&show_owner=true`
    },
  },
  mounted() {
    loadGhButtonsScript()
  },
}
</script>

<style scoped>
.gh-info {
  display: inline-block;
}
</style>
