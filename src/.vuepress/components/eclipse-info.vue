<template>
  <div class="eclipse-info">
    <a class="sub" :href="`https://marketplace.eclipse.org/content/${appName}`">
      <div class="inline">
        <img
          :src="
            `https://img.shields.io/eclipse-marketplace/v/${appName}.svg?maxAge=3600`
          "
        />
        <img
          :src="
            `https://img.shields.io/eclipse-marketplace/last-update/${appName}.svg?maxAge=3600`
          "
        />
        <img
          :src="
            `https://img.shields.io/eclipse-marketplace/favorites/${appName}.svg?maxAge=3600`
          "
        />
        <img
          :src="
            `https://img.shields.io/eclipse-marketplace/dm/${appName}.svg?maxAge=3600`
          "
        />
        <img
          :src="
            `https://img.shields.io/eclipse-marketplace/dt/${appName}.svg?maxAge=3600`
          "
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "eclipse-info",
  props: {
    appName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.eclipse-info {
  display: inline-block;
}
</style>
