<template>
  <div id="fullpage">
    <div id="menu"></div>
    <div class="section active text-center me">
      <div class="me-title">
        <div class="me-title">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div v-show="me.titleShow">Hi，我是刘嘉康。</div>
          </transition>

          <div class="me-title-line">
            <transition
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
            >
              <div class="dis-f justify-around btn-wrapper" v-show="me.buttonsShow">
                <a href="https://github.com/kagurakana" target="_blank">
                  <div class="me-btn">
                    <i class="iconfont icon-github"></i>
                    github
                  </div>
                </a>
                <a href="https://www.kagurakana.xyz" target="_blank">
                  <div class="me-btn">
                    <i class="iconfont icon-blog"></i>
                    blog
                  </div>
                </a>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <div v-show="me.leftShow" class="me-left">
          <div>就读于武汉工程大学</div>
          <div>软件工程03班</div>
          <div class="me-title-line"></div>
        </div>
      </transition>
      <div class="me-bottom">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="section text-center work">
      <div class="work-container">
        <transition enter-active-class="animated slideInDown">
          <h1 v-show="work.titleShow" class="work-title">
            实习作品。
            <div class="work-title-line"></div>
          </h1>
        </transition>

        <transition enter-active-class="animated slideInUp">
          <div v-show="work.contentShow" class="work-wrapper dis-f justify-around">
            <a
              v-for="(item, index) in workset"
              class="work-link"
              :href="item.link"
              :key="index"
              target="_blank"
            >
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
          </div>
        </transition>
      </div>
    </div>
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
      navigation: true,
      navigationPosition: "right",
      loopBottom: true,
      controlArrows: true,
      menu: "#menu", //绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。
      anchors: ["me", "work", "hobby", "game", "blog"], //anchors定义锚链接，默认为[]
      sectionsColor: ["#f2f2f2", "#E3F2FD", "#7BAABE", "whitesmoke", "#ccddff"],
      fixedElements: "",
      afterLoad: (before, after) => {
        if (after.anchor === "me") {
          new Promise((resolve, reject) => {
            resolve();
          })
            .then(() => {
              this.me.titleShow = true;
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 500);
              });
            })
            .then(() => {
              this.me.leftShow = true;
              $(".me-title-line").css({
                left: "0",
                width: "100%",
                transition: "all 1s ease-in-out"
              });
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 1000);
              });
            })
            .then(() => {
              this.me.buttonsShow = true;
            });
        }
        if (after.anchor === "work") {
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 500);
          })
            .then(() => {
              this.work.titleShow = true;
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 500);
              });
            })
            .then(() => {
              this.work.contentShow = true;
              $(".work-title-line").css({
                left: "0",
                width: "100%",
                transition: "all 1s ease-in-out"
              });
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 1000);
              });
            });
        }
      }
    });
  },
  data() {
    return {
      me: {
        titleShow: false,
        leftShow: false,
        buttonsShow: false
      },
      work: {
        titleShow: false,
        contentShow: false
      },
      workset: [
        {
          title: "MUXI地板",
          img: "https://cdn.kagurakana.xyz/QQ截图20200621172534.png",
          link: "https://kagurakana.gitee.io/h5/muxi/index.html",
          desc: "使用bootstacp响应式布局，根据屏幕尺寸不同提供不同的layout。"
        },
        {
          title: "家居医生",
          img: "https://cdn.kagurakana.xyz/QQ截图20200621175806.png",
          link: "https://kagurakana.gitee.io/h5/iframe/index.html",
          desc: "使用iframe标签，多页面开发，点击标签切换不同的页面。"
        },
        {
          title: "小米商城",
          img: "https://cdn.kagurakana.xyz/QQ截图20200621175930.png",
          link: "https://kagurakana.gitee.io/h5/xiaomisite/index.html",
          desc:
            "使用grid和flex布局，开发滚动轮播图，边框线设置为1px，还原小米官网。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  color: #000;
  text-decoration: none;
  &:active {
    color: #000;
  }
}
.dis-n {
  display: none !important;
}
.dis-f {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-1 {
  flex: 1;
}
.justify-center {
  justify-content: center;
}
.justify-around {
  justify-content: space-around;
}
.justify-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
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
      transition: all 1s ease-in-out;
      background-color: #000;
    }
    .btn-wrapper {
      margin: 25px 0;
      .me-btn {
        padding: 3px 20px;
        border: 2px solid #000000;
        font-size: 24px;
        transition: all 0.5s ease;

        .iconfont {
          font-size: 28px;
        }
        &:hover {
          transition: all 0.5s ease;

          background-color: #222222;
          color: #efefef;
        }
      }
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
.work {
  .work-container {
    height: 600px;
    position: relative;
  }
  .work-title {
    font-size: 28px;
    padding: 15px 0;
    margin: 35px 100px;
    position: relative;
    .work-title-line {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 3px;
      transition: all 1s ease-in-out;
      background-color: #000;
    }
  }
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
}
</style>

