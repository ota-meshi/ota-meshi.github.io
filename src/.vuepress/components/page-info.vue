<template>
  <div class="page-info">
    <div
      class="fb-like"
      :data-href="href"
      data-layout="button_count"
      data-action="like"
      data-size="small"
      data-show-faces="true"
      data-share="true"
      style="display: inline-block"
    ></div>
    <a
      :href="hatena"
      class="hatena-bookmark-button"
      data-hatena-bookmark-layout="basic-label-counter"
      data-hatena-bookmark-lang="ja"
      title="このエントリーをはてなブックマークに追加"
    >
      <img
        src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
        alt="このエントリーをはてなブックマークに追加"
        width="20"
        height="20"
        style="border: none"
      />
    </a>
  </div>
</template>

<script>
import { loadFbButtonsScript, loadHatenaButtonsScript } from "./scripts/buttons"

export default {
  name: "PageInfo",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    hatena() {
      return this.href.replace("https://", "https://b.hatena.ne.jp/entry/s/")
    },
  },
  mounted() {
    loadFbButtonsScript()
    loadHatenaButtonsScript()
  },
}
</script>

<style scoped>
.page-info {
  display: inline-flex;
  align-items: flex-end;
}

.page-info >>> .hatena-bookmark-button-frame {
  margin-left: 4px;
}
</style>
