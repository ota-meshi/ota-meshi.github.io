<template>
  <div class="vs-info">
    <a
      :href="
        `https://marketplace.visualstudio.com/items?itemName=${extensionId}`
      "
      target="_blank"
    >
      <img
        :src="
          `https://img.shields.io/visual-studio-marketplace/v/${extensionId}`
        "
      />
      <img
        :src="
          `https://img.shields.io/visual-studio-marketplace/i/${extensionId}`
        "
      />
      <img
        :src="
          `https://img.shields.io/visual-studio-marketplace/stars/${extensionId}`
        "
      />
      <img
        :src="
          `https://img.shields.io/visual-studio-marketplace/r/${extensionId}`
        "
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "vs-info",
  props: {
    extensionId: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.vs-info {
  display: inline-block;
}
</style>
