<template>
  <div class="gh-info">
    <a :href="`https://github.com/${repo}`" target="_blank">
      <svg
        version="1.1"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        class="octicon octicon-mark-github svelte-jet77t"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          style="fill: rgb(44, 62, 80)"
        ></path>
      </svg>
    </a>
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

const map = new Map()
const observer =
  typeof IntersectionObserver !== "undefined" &&
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const vm = map.get(entry.target)
        if (vm) {
          vm.inViewed = true
          observer.unobserve(entry.target)
        }
      }
    })
  })
let queue = Promise.resolve()

function pushQueue(fn) {
  const result = queue.then(fn)
  queue = result.then(() => new Promise((r) => setTimeout(r, 100)))
  return result
}

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
      inViewed: false,
    }
  },
  computed: {
    extraPin() {
      const [, user, repo] = /(.*)\/(.*)/.exec(this.repo)
      return `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&show_owner=true`
    },
    latestReq() {
      if (!this.inViewed) {
        return false
      }
      const [, user, repo] = /(.*)\/(.*)/.exec(this.repo)
      if (typeof fetch === "undefined") {
        return null
      }
      const url = `https://api.github.com/repos/${user}/${repo}/releases/latest`
      if (cache[url]) {
        return cache[url]
      }
      return (cache[url] = pushQueue(() =>
        fetch(`https://api.github.com/repos/${user}/${repo}/releases/latest`, {
          mode: "cors",
        }),
      ))
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
        if (!req) return
        const body = await (await req).json()
        this.latest = body
      },
      immediate: true,
    },
  },
  mounted() {
    map.set(this.$el, this)
    observer.observe(this.$el)
    loadGhButtonsScript()
  },
  beforeDestroy() {
    observer.unobserve(this.$el)
    map.delete(this.$el)
  },
}
</script>

<style scoped>
.gh-info {
  display: inline-flex;
  gap: 2px;
  flex-wrap: wrap;
  vertical-align: top;
  padding-right: 2px;
  padding-bottom: 2px;
}
</style>
