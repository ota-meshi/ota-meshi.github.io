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
    <a
      v-if="releases"
      :href="`https://github.com/${repo}/releases`"
      target="_blank"
    >
      <img
        v-if="latestAtLabel"
        :src="`https://img.shields.io/badge/latest%20release-${latestAtLabel.replace(
          /-/g,
          '--',
        )}-green`"
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

const cache = {}

export default {
  name: "GhInfo",
  props: {
    repo: {
      type: String,
      required: true,
    },
    releases: {
      type: Boolean,
      default: true,
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
      const url = `https://api.github.com/repos/${user}/${repo}/releases/latest`
      return (
        cache[url] ||
        (cache[url] = fetch(
          `https://api.github.com/repos/${user}/${repo}/releases/latest`,
          { mode: "cors" },
        ))
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
      let diff = (Date.now() - at.getTime()) / 1000
      if (diff < 1) {
        return "just now"
      }
      if (diff < 60) {
        return labelForUnit(diff, "second")
      }
      diff /= 60
      if (diff < 60) {
        return labelForUnit(diff, "minute")
      }
      diff /= 60
      if (diff < 24) {
        return labelForUnit(diff, "hour")
      }
      diff /= 24
      if (diff <= 30) {
        return labelForUnit(diff, "day")
      }
      return `${at.getFullYear()}-${at.getMonth() + 1}-${at.getDate()}`

      function labelForUnit(num, unit) {
        const n = Math.floor(num)
        if (n === 1) {
          return `${n} ${unit} ago`
        }
        return `${n} ${unit}s ago`
      }
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
