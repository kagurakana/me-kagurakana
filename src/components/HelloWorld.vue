<template>
  <div id="fullpage">
    <div class="section active">Some section</div>
    <div class="section">Some section</div>
    <div class="section">
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
      <div class="slide">Slide 4</div>
    </div>
    <div class="section">Some section</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    $("#fullpage").fullpage();
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
