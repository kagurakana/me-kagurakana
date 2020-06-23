<template>
  <transition
  enter-active-class="animated zoomIn"
  >
    <a
      v-show="blogShow"
      :href="`https://www.kagurakana.xyz/detail/${blog.id}`"
      target="_blank"
    >
      <div
        class="blog-card dis-f flex-col text-center"
        :style="{ width: width, height: height }"
      >
        <div
          :style="{
            background: `url('${blog.headPic}') center/cover no-repeat`,
            width: width,
            height: `${height.match(/(.*)px$/)[1] * 0.7}px`,
          }"
        ></div>
        <h1 class="title">{{ blog.title }}</h1>
        <div>{{ date }}</div>
        <div>
          {{ blog.desc }}
        </div>
      </div>
    </a>
  </transition>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {},
    width: "",
    height: "",
    blogShow: {
      default: false,
    },
  },

  computed: {
    date() {
      let time = this.blog.createTime;
      let unixTimeStrap = new Date(time);
      console.log(unixTimeStrap.toLocaleString());
      return unixTimeStrap.toLocaleString();
    },
  },
};
</script>

<style id="st" lang="scss" scoped>
.blog-card {
  margin: 15px;
  padding: 10px;
  position: relative;
  box-sizing: content-box;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 6%;
    width: 6%;
    transition: all 0.5s ease;
    border: {
      left: 3px solid #000000;
      top: 3px solid #000000;
    }
  }
  &:hover::before {
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    transition: all 0.5s ease;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 6%;
    width: 6%;
    transition: all 0.5s ease;
    border: {
      right: 3px solid #000000;
      bottom: 3px solid #000000;
    }
  }
  &:hover::after {
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    transition: all 0.5s ease;
  }
}
</style>
