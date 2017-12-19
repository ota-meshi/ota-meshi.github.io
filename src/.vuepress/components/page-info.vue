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
      style="display: inline-block;"
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
        style="border: none;"
      />
    </a>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

const loadScript = debounce(function() {
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.11";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  (function() {
    const d = document;
    const id = "hatena-buttons-script";
    var js,
      fjs = d.getElementsByTagName("script")[0];
    if (d.getElementById(id)) return;
    js = d.createElement("script");
    js.id = id;
    js.src = "https://b.st-hatena.com/js/bookmark_button.js";
    fjs.parentNode.insertBefore(js, fjs);
  })();
}, 1000);

export default {
  name: "page-info",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    hatena() {
      return this.href.replace("https://", "https://b.hatena.ne.jp/entry/s/");
    }
  },
  mounted() {
    loadScript();
  }
};
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
