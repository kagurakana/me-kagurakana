<template>
  <div class="dis-f justify-around">
    <div class="flex-1">
      <textarea
        cols="50"
        class="marked-input"
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
import hljsMixin from "/src/mixin/hljsMixin.js";
export default {
  name: "Markit",
  props: {
    isTrottled: Boolean,
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
::v-deep .marked-article {
  max-height: 100vh;
  overflow-y: scroll;
  @include blog;
}
</style>
