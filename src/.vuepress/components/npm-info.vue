<template>
  <div class="npm-info">
    <a :href="`https://www.npmjs.com/package/${name}`" target="_blank">
      <img :src="`https://img.shields.io/npm/l/${name}.svg?maxAge=3600`" />
      <img :src="`https://img.shields.io/npm/v/${name}.svg?maxAge=3600`" />
    </a>
    <a :href="`https://www.npmtrends.com/${name}`" target="_blank">
      <img
        :src="`https://img.shields.io/badge/dynamic/json.svg?label=downloads&colorB=green&suffix=/day&query=$.downloads&uri=https://api.npmjs.org//downloads/point/last-day/${name}&maxAge=3600`"
      />
      <img :src="`https://img.shields.io/npm/dw/${name}.svg?maxAge=3600`" />
      <img :src="`https://img.shields.io/npm/dm/${name}.svg?maxAge=3600`" />
      <img :src="`https://img.shields.io/npm/dy/${name}.svg?maxAge=3600`" />
      <img :src="`https://img.shields.io/npm/dt/${name}.svg?maxAge=3600`" />
    </a>
  </div>
</template>

<script>
export default {
  name: "NpmInfo",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.npm-info {
  display: inline-block;
}
</style>
