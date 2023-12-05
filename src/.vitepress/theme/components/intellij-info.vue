<template>
  <div class="intellij-info">
    <a :href="`https://plugins.jetbrains.com/plugin/${appKey}`">
      <img
        :src="`https://img.shields.io/jetbrains/plugin/v/${appKey}.svg?maxAge=3600`"
      />
      <img
        :src="`https://img.shields.io/jetbrains/plugin/d/${appKey}svg?maxAge=3600`"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "IntellijInfo",
  props: {
    appKey: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.intellij-info,
.intellij-info a {
  display: inline-flex;
  gap: 2px;
  flex-wrap: wrap;
  vertical-align: top;
}
.intellij-info {
  padding-right: 2px;
  padding-bottom: 2px;
}
</style>
