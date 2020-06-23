<template>
  <div class="dis-f justify-around align-center">
    <div class="flex-1">
      <textarea cols="30" rows="10" v-model="content"></textarea>
    </div>
    <div class="flex-1">
      <article class="fill-height" v-html="compiledMarkdown"></article>
    </div>
  </div>
</template>

<script>
import hljsMixin from "/src/mixin/hljsMixin.js";
export default {
  name: "Markit",
  mixins: [hljsMixin],
};
</script>

<style lang="scss" scoped></style>
