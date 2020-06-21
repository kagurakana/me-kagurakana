<template>
  <div id="fullpage">
    <div id="menu"></div>
    <div class="section active text-center me">
      <h1 class="me-title dis-n">
        Hi，我是刘嘉康。
        <div class="me-title-line"></div>
      </h1>
      <div class="me-left dis-n">
        <div>就读于武汉工程大学</div>
        <div>软件工程03班</div>
      </div>
      <div class="me-bottom">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="section"></div>
    <div class="section">
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
      <div class="slide">Slide 4</div>
    </div>
    <div class="section">Some section</div>
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
    new fullpage("#fullpage", {
      //options here
      // autoScrolling: true,
      // menu:"#menu",
      // scrollHorizontally: true,
      navigation: true,
      navigationPosition: "right",
      loopBottom: true,
      controlArrows: true,
      menu: "#menu", //绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。
      anchors: ["me", "intr", "hobby", "game", "blog"], //anchors定义锚链接，默认为[]
      sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#ccddff"],
      fixedElements: "",
      afterLoad: (before, after) => {
        if (after.index == 0) {
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 500);
          })
            .then(() => {
              $(".me-title")
                .removeClass("dis-n")
                .addClass("animated fadeIn");
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 500);
              });
            })
            .then(() => {
              $(".me-title-line").css({
                width: "100%",
                left: "0",
                transition: "all 0.5s ease"
              });
              $(".me-left")
                .removeClass("dis-n")
                .addClass("animated slideInLeft");
            });
        }
      },
      afterRender() {
        $(".fp-controlArrow").css({
          "margin-left": "100px",
          "margin-right": "100px"
        });
      }
    });
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.dis-n {
  display: none !important;
}
#fullpage {
  font-family: source-han-serif-sc, serif !important;
  font-style: normal;
  font-weight: 200;
}
.text-center {
  text-align: center;
}
.me {
  position: relative;
  .me-title {
    font-size: 96px;
    padding: 0 25px;
    display: inline-block;
    position: relative;
    .me-title-line {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 3px;
      background-color: #000;
    }
  }
  .me-left {
    writing-mode: vertical-lr;
    text-align: justify;
    text-align-last: justify;
    position: absolute;
    left: 15px;
    top: 15px;
    div:first-child {
      font-size: 28px;
    }
    div:nth-child(2) {
      font-size: 42px;
    }
  }
  .me-bottom {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
}
</style>

