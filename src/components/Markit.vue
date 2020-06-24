<template>
  <div class="dis-f justify-around">
    <div class="flex-1">
      <textarea
        cols="40"
        class="marked-input"
        v-model="defaultText"
        rows="40"
        @input="throttleGetVal"
      ></textarea>
    </div>
    <div class="flex-1">
      <article
        class="fill-height text-left marked-article"
        v-html="compiledMarkdown"
      ></article>
    </div>
  </div>
</template>

<script>
import { MARKED_TEXT } from "/src/config.js";
import hljsMixin from "/src/mixin/hljsMixin.js";
export default {
  name: "Markit",
  props: {
    isTrottled: Boolean,
  },
  mounted() {
    // 首次渲染
    this.content = this.defaultText;
  },
  data() {
    return {
      defaultText: MARKED_TEXT,
    };
  },
  mixins: [hljsMixin],
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";
.marked-input {
  line-height: 20px;
  padding: 10px;
  border: 3px solid #222222;
  border-radius: 8px;
  font-size: 18px;
  transition: all 0.5s ease;
  &:focus {
    transition: all 0.5s ease;

    border: 3px solid #6737b8;
  }
}
::v-deep(.marked-article) {
  max-height: 100vh;
  overflow-y: scroll;
  @include blog;
}
</style>
