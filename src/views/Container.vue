<template>
  <div id="fullpage">
    <div id="menu"></div>
    <!-- ME -->
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
    <!-- WORK -->
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
            <Card v-for="(item, index) in showWorkSet" :key="index" :item="item"></Card>
          </div>
        </transition>
      </div>
    </div>
    <!-- BANGUMI -->
    <div class="section bangumi">
      <div class="dis-f flex-col bangumi-container fill-height justify-between align-center">
        <h1 v-show="bangumi.titleShow" class="bangumi-title">追番列表。</h1>
        <transition enter-active-class="animated slideInUp">
          <div v-show="bangumi.contentShow" class="bangumi-wrapper dis-f f-wrap justify-around">
            <Card
              width="300px"
              hight="430px"
              v-for="(item, index) in bangumiset"
              :key="index"
              :item="item"
            ></Card>
          </div>
        </transition>
        <button @click="getBangumi(bangumiPage++)">加载更多</button>
      </div>
    </div>
    <!-- STEAM -->
    <div class="section game text-center">
      <div class="bangumi-title-line"></div>
      <div class="game-wrapper dis-f f-wrap justify-center">
        <Card
          v-for="(item, index) in gameset"
          height="200px"
          :item="item"
          :key="index"
          width="350px"
        ></Card>
      </div>
    </div>
    <div class="section">Some section</div>
  </div>
</template>

<script>
import Card from "/src/components/Card.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Card
  },
  created() {
    $.ajax({
      method: "GET",
      url:
        "https://bird.ioliu.cn/v1?url=https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=93D0C129F98018D2DBB494BEBAB4AC5F&steamid=76561198267937561&include_appinfo=1"
    }).done(data => {
      let games = data.response.games.slice(0, 10);
      games.forEach(game => {
        this.gameset.push({
          title: game.name,
          img: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`,
          desc: game.name
        });
      });
      // 手动触发resize事件。

      setTimeout(() => {
        let resizeEvent = document.createEvent("UIEvent");
        resizeEvent.initEvent("resize");
        window.dispatchEvent(resizeEvent);
      }, 100);
    });

    // this.getBangumi(this.bangumiPage++);
    this.C_WIDTH = document.body.offsetWidth;
    window.onresize = () => {
      this.C_WIDTH = document.body.offsetWidth;
    };
  },
  mounted() {
    new fullpage("#fullpage", {
      navigation: true,
      navigationPosition: "right",
      loopBottom: true,
      controlArrows: true,
      menu: "#menu", //绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。
      anchors: ["me", "work", "bangumi", "game", "blog"], //anchors定义锚链接，默认为[]
      sectionsColor: ["#f2f2f2", "#E3F2FD", "#7BAABE", "whitesmoke", "#ccddff"],
      fixedElements: "",
      scrollOverflow: true,
      useTransform: true,
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
            });
        }
        if (after.anchor === "bangumi") {
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 500);
          })
            .then(() => {
              this.bangumi.contentShow = true;

              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 500);
              });
            })
            .then(() => {
              this.bangumi.titleShow = true;
              $(".bangumi-title-line").css({
                left: "0",
                width: "100%",
                transition: "all 1s ease-in-out"
              });
            });
        }
      },
      afterRender(){
        this.getBangumi(page++)
      }
    });
  },
  data() {
    return {
      C_WIDTH: 0,
      me: {
        titleShow: false,
        leftShow: false,
        buttonsShow: false
      },
      work: {
        titleShow: false,
        contentShow: false
      },
      bangumi: {
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
      ],
      gameset: [],
      bangumiset: [],
      bangumiPage: 1
    };
  },
  computed: {
    showWorkSet() {
      let ret = this.workset;
      if (this.C_WIDTH >= 600 && this.C_WIDTH < 1200)
        ret = this.workset.slice(1);
      if (this.C_WIDTH < 600) ret = this.workset.slice(2);
      return ret;
    }
  },
  methods: {
    getBangumi(page) {
      $.ajax({
        method: "GET",
        url: `https://www.kagurakana.xyz/api/out/bangumi?pn=${page}&sn=15&type=1&follow_status=0&vmid=14076737`
      }).done(data => {
        console.log(data);
        let bangumiList = data.data.list;
        bangumiList.forEach(bangumi => {
          let link = bangumi.cover.match(/http:\/\/(.*)/)[1];
          this.bangumiset.push({
            title: bangumi.title,
            img: `https://www.kagurakana.xyz/api/out/${link}`,
            desc: bangumi.evaluate
          });
        });
        setTimeout(() => {
          let resizeEvent = document.createEvent("UIEvent");
          resizeEvent.initEvent("resize");
          window.dispatchEvent(resizeEvent);
        }, 100);
        console.log(this.bangumiset[0]);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
}

.section.work {
  background-color: #f5e2e1;
  background-image: linear-gradient(19deg, #f5e2e1 0%, #dad7e6 100%);
}
.section.game {
  background-image: linear-gradient(#2a475e, #1b2838);
}
.section.bangumi {
  position: relative;
  .bangumi-container {
    padding: 5px;
  }
  .bangumi-wrapper {
    min-height: 80vh;
  }
  button {
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #efefef;
    color: #efefef;
    padding: 12px 15px;
    transition: all 0.2s ease;
    &:hover {
      background-color: #567c8d;
      transition: all 0.5s ease;
      transform: translate(0, -2px);
    }
    &:active {
      transition: all 0.2s ease;
      transform: translate(0, 2px);
    }
  }
}
@media (max-width: 950px) {
  .me-title {
    font-size: 56px !important;
  }
}
@media (max-width: 600px) {
  .me-title {
    font-size: 46px !important;
  }
}
</style>

