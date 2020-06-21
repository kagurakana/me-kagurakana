<template>
  <a class="work-link" :href="item.link">
    <div class="work-card dis-f flex-col">
      <div class="img-wrapper">
        <div
          class="work-img"
          :style="{
                   background:`url('${item.img}') center/cover no-repeat`,
                   width:'300px',
                   height:'350px'
                   }"
        ></div>
        <div class="fade-text">{{item.desc}}</div>
      </div>

      <h1 class="dis-f flex-1 align-center justify-center">{{item.title}}</h1>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      default: {}
    }
  }
};
</script>

<style lang='scss' scoped>

  .work-card {
    height: 100%;
  }
  .work-link {
    height: 430px;
    background-color: #ffffff;
    color: #222222;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
    position: relative;
    top: 0;
    .img-wrapper {
      width: 300px;
      height: 350px;
      overflow: hidden;
      position: relative;
    }
    .work-img {
      transition: all 0.5s ease;
      position: relative;
    }
    .fade-text {
      content: "";
      z-index: 5;
      vertical-align: middle;
      color: #ffffff;
      font-size: 22px;
      position: absolute;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      background-color: rgba(22, 22, 22, 0);
      left: 0;
      top: -100%;
      height: 100%;
      width: 100%;
    }
    &:hover {
      transition: all 0.5s ease;
      .work-img {
        transition: all 0.5s ease;

        transform: scale(1.1);
      }
      .fade-text {
        position: absolute;
        padding: 15px;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: rgba(22, 22, 22, 0.7);
        left: 0;
        top: 0;
        height: 100%;
        width: 300px;
      }
      top: -15px;
      box-shadow: 0 0 30px 15px rgba(0, 0, 0, 0.3);
    }
  }
</style>