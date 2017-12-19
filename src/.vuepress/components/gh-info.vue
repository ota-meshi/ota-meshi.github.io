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
    <!-- <a :href="`https://github.com/${repo}`" target="_blank">
      <img :src="extraPin" />
    </a> -->
  </div>
</template>

<script>
import debounce from "lodash/debounce";

const loadScript = debounce(function() {
  const d = document;
  const id = "gh-buttons-script";
  var js,
    fjs = d.getElementsByTagName("script")[0];
  if (d.getElementById(id)) return;
  js = d.createElement("script");
  js.id = id;
  js.src = "https://buttons.github.io/buttons.js";
  fjs.parentNode.insertBefore(js, fjs);
}, 1000);

export default {
  name: "gh-info",
  props: {
    repo: {
      type: String,
      required: true
    }
  },
  computed: {
    extraPin() {
      const [, user, repo] = /(.*)\/(.*)/.exec(this.repo);
      return `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&show_owner=true`;
    }
  },
  mounted() {
    loadScript();
  }
};
</script>

<style scoped>
.gh-info {
  display: inline-block;
}
</style>
