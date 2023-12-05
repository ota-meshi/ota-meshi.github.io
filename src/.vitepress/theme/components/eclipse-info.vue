<template>
  <div class="eclipse-info">
    <a class="sub" :href="`https://marketplace.eclipse.org/content/${appName}`">
      <img
        :src="`https://img.shields.io/eclipse-marketplace/v/${appName}.svg?maxAge=3600`"
      />
      <img
        :src="`https://img.shields.io/eclipse-marketplace/last-update/${appName}.svg?maxAge=3600`"
      />
      <img
        :src="`https://img.shields.io/eclipse-marketplace/favorites/${appName}.svg?maxAge=3600`"
      />
      <img
        :src="`https://img.shields.io/eclipse-marketplace/dm/${appName}.svg?maxAge=3600`"
      />
      <img
        :src="`https://img.shields.io/eclipse-marketplace/dt/${appName}.svg?maxAge=3600`"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "EclipseInfo",
  props: {
    appName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.eclipse-info,
.eclipse-info a {
  display: inline-flex;
  gap: 2px;
  flex-wrap: wrap;
  vertical-align: top;
}
.eclipse-info {
  padding-right: 2px;
  padding-bottom: 2px;
}
</style>
