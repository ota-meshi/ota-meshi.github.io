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
        v-if="latestAtLabel"
        :src="`https://img.shields.io/badge/latest%20release-${latestAtLabel}-green`"
      />
      <img
        v-else
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
  data() {
    return {
      latest: null,
    }
  },
  computed: {
    extraPin() {
      const [, user, repo] = /(.*)\/(.*)/.exec(this.repo)
      return `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&show_owner=true`
    },
    latestReq() {
      const [, user, repo] = /(.*)\/(.*)/.exec(this.repo)
      if (typeof fetch === "undefined") {
        return null
      }
      return fetch(
        `https://api.github.com/repos/${user}/${repo}/releases/latest`,
        { mode: "cors" },
      )
    },
    latestAt() {
      const at = this.latest && this.latest.published_at
      return at && new Date(at)
    },
    latestAtLabel() {
      const at = this.latestAt
      if (!at) {
        return null
      }
      const diff = Date.now() - at.getTime() / 86400000
      if (diff < 1) {
        return `${at.getHours()}:${at.getMinutes()}`
      }
      if (1 <= diff && diff <= 30) {
        return `${Math.floor(diff)} days ago`
      }
      return `${at.getFullYear()}-${at.getMonth() + 1}-${at.getDate()}`
    },
  },
  watch: {
    latestReq: {
      async handler(req) {
        const body = await (await req).json()
        this.latest = body
      },
      immediate: true,
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
