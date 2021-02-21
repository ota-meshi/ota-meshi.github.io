<template>
  <div class="sublime-info">
    <a class="sub" :href="`https://packagecontrol.io/packages/${linkAppName}`">
      <div class="inline">
        <img
          :src="`https://img.shields.io/github/release/${repo}.svg?label=package%20control&maxAge=3600`"
        />
        <img
          :src="`https://img.shields.io/packagecontrol/dd/${linkAppName}.svg?maxAge=3600`"
        />
        <img
          :src="`https://img.shields.io/packagecontrol/dw/${linkAppName}.svg?maxAge=3600`"
        />
        <img
          :src="`https://img.shields.io/packagecontrol/dm/${linkAppName}.svg?maxAge=3600`"
        />
        <img
          :src="`https://img.shields.io/packagecontrol/dt/${linkAppName}.svg?maxAge=3600`"
        />
        <img
          :src="`https://img.shields.io/badge/dynamic/json.svg?label=downloads&colorB=green&query=$.installs.total&uri=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2F${linkAppName.replace(
            /%/g,
            '%25',
          )}.json&maxAge=3600`"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SublimeInfo",
  props: {
    appName: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkAppName() {
      return this.appName.replace(/ /g, "%20")
    },
  },
}
</script>

<style scoped>
.sublime-info {
  display: inline-block;
}
</style>
