<template>
  <div class="ch-ex-info">
    <a
      :href="`https://chrome.google.com/webstore/detail/select-box-filter/${appKey}`"
    >
      <img
        :src="`https://img.shields.io/chrome-web-store/v/${appKey}.svg?maxAge=3600`"
      />
      <img
        :src="`https://img.shields.io/chrome-web-store/users/${appKey}.svg?maxAge=3600`"
      />
      <!-- <img
        :src="
          `https://img.shields.io/chrome-web-store/stars/${appKey}.svg?maxAge=3600`
        "
      />
      <img
        :src="
          `https://img.shields.io/chrome-web-store/rating/${appKey}.svg?maxAge=3600`
        "
      />
      <img
        :src="
          `https://img.shields.io/chrome-web-store/rating-count/${appKey}.svg?maxAge=3600`
        "
      /> -->
    </a>
  </div>
</template>

<script>
export default {
  name: "ChExInfo",
  props: {
    appKey: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.ch-ex-info {
  display: inline-block;
}
</style>
