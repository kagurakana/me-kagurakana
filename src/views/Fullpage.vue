<template>
  <div id="fullpage">
    <div id="menu"></div>
    <!-- ME -->
    <div class="section active text-center me">
      <div class="me-title">
        <div class="me-title">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div v-show="me.titleShow">Hi，我是刘嘉康。</div>
          </transition>

          <div class="me-title-line">
            <transition
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
            >
              <div
                class="dis-f justify-around btn-wrapper"
                v-show="me.buttonsShow"
              >
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
          <div
            v-show="work.contentShow"
            class="work-wrapper dis-f justify-around"
          >
            <Card
              v-for="(item, index) in showWorkSet"
              :key="index"
              :item="item"
            ></Card>
          </div>
        </transition>
      </div>
    </div>
    <!-- BANGUMI -->
    <div class="section bangumi">
      <div
        class="dis-f flex-col bangumi-container fill-height justify-between align-center"
      >
        <transition enter-active-class="animated slideInDown">
          <h1 v-show="bangumi.titleShow" class="bangumi-title">追番列表。</h1>
        </transition>
        <transition enter-active-class="animated slideInUp">
          <div
            v-show="bangumi.contentShow"
            class="bangumi-wrapper dis-f f-wrap justify-around"
            @wheel="emitScroll('.bangumi-wrapper', 'work', 'game', 5, $event)"
          >
            <Card
              width="300px"
              hight="430px"
              v-for="(item, index) in bangumiset"
              :key="index"
              :item="item"
            ></Card>
          </div>
        </transition>
        <button @click="getBangumi(bangumiPage++)">
          加载更多[一共{{ bangumiCount }}个] {{ bangumiLoadText }}
        </button>
      </div>
    </div>
    <!-- STEAM -->
    <div class="section game text-center">
      <div class="bangumi-title-line"></div>
      <div class="dis-f flex-col align-center justify-between">
        <h1>我正在玩。</h1>
        <div
          class="game-wrapper dis-f f-wrap justify-center"
          @wheel="emitScroll('.game-wrapper', 'bangumi', 'blog', 5, $event)"
          ref="gameWrapper"
        >
          <Card
            v-for="(item, index) in gameset"
            height="200px"
            :item="item"
            :key="index"
            width="350px"
          ></Card>
        </div>
        <button @click="loadMoreGame(gamePage++)">
          {{ gameLoadText }}
        </button>
      </div>
    </div>
    <div class="section blog text-center">
      <div
        class="blog-wrapper dis-f flex-col justify-around fill-height align-center"
      >
        <h1>最近文章。</h1>
        <div class="dis-f justify-around f-wrap align-center">
          <Blog
            width="480px"
            height="600px"
            v-for="(item, index) in blogShow"
            :blog="item"
            :key="index"
            :blogShow="blog.show"
          ></Blog>
        </div>
      </div>
    </div>
    <!-- markdown -->
    <div class="section markit text-center">
      <div class="dis-f flex-col justify-around">
        <div>
          <h1>markdown widget</h1>
          <h3>markdown解析</h3>
          <label>
            <input type="checkbox" v-model="isTrottled" />
            使用节流（500ms）
          </label>
        </div>
        <Markit :isTrottled="isTrottled"></Markit>
      </div>
    </div>
    <div class="section contact text-center">
      <div
        class="contact-wrapper dis-f flex-col justify-center fill-height align-center"
      >
        <!-- content -->
        <div class="dis-f flex-col contact justify-center contact-content">
          <h1>
            与我联系。
            <div class="line"></div>
          </h1>

          <div class="icon-group">
            <transition-group enter-active-class="animated fadeInUp">
              <a
                v-for="(icon, index) in contact.iconset"
                :key="index"
                :href="icon.link"
                target="_blank"
                :title="icon.title"
                v-show="icon.iconShow"
              >
                <i :class="icon.class"></i>
              </a>
            </transition-group>
          </div>
        </div>
        <div class="circle-wrapper dis-f justify-center align-center">
          <div class="dis-f justify-center circle circle-1 align-center">
            <div class="dis-f justify-center circle circle-2 align-center">
              <div class="dis-f justify-center circle circle-3 align-center">
                <div class="dis-f justify-center circle circle-4 align-center">
                  <div
                    class="dis-f justify-center circle circle-5 align-center"
                  >
                    <div
                      class="dis-f justify-center circle circle-6 align-center"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "/src/config.js";
import Card from "/src/components/Card.vue";
import Blog from "/src/components/Blog.vue";
import Markit from "/src/components/Markit.vue";
export default {
  name: "Fullpage",
  components: {
    Card,
    Blog,
    Markit,
  },
  created() {
    console.log(BASE_URL);
    // get steam games
    $.ajax({
      method: "GET",
      url:
        "https://bird.ioliu.cn/v1?url=https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=93D0C129F98018D2DBB494BEBAB4AC5F&steamid=76561198267937561&include_appinfo=1",
    }).done((res) => {
      let all = res.response.games;
      let games = res.response.games.slice(0, 10);
      all.forEach((game) => {
        this.gamesetAll.push({
          title: game.name,
          img: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`,
          desc: game.name,
          link: "https://store.steampowered.com/app/" + game.appid,
        });
      });
      this.gameset = this.gamesetAll.slice(0, 10);
      // 手动触发resize事件。
      setTimeout(() => {
        let resizeEvent = document.createEvent("UIEvent");
        resizeEvent.initEvent("resize");
        window.dispatchEvent(resizeEvent);
      }, 100);
    });

    // get bloglist
    $.ajax({
      method: "GET",
      url: `${BASE_URL}/api/blog/getbloglist`,
    }).done((res) => {
      console.log(res);
      this.blogListAll = res.data;
      this.blogShow = this.blogListAll.slice(0, 2);
      console.log(this.blogShow);
    });
    this.C_WIDTH = document.body.offsetWidth;
    window.onresize = () => {
      this.C_WIDTH = document.body.offsetWidth;
    };
  },
  mounted() {
    console.log("Vue mounted");
    console.log("fullpage.js inited");
    this.getBangumi(this.bangumiPage++);
    try {
      new fullpage("#fullpage", {
        navigation: true,
        navigationPosition: "right",
        menu: "#menu", //绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。
        anchors: ["me", "work", "bangumi", "game", "blog", "markit", "contact"], //anchors定义锚链接，默认为[]
        sectionsColor: [
          "#f2f2f2",
          "#E3F2FD",
          "#7BAABE",
          "whitesmoke",
          "#7BAABE",
          "#f2f2f2",
        ],
        // scrollOverflow: true,
        useTransform: true,
        normalScrollElements:
          ".game-wrapper, .marked-input, .marked-article, .bangumi-wrapper",
        // scrollOverflowOptions: {
        //   useTransform: true,
        //   useTransition: true,
        //   mouseWheel: true,
        // },
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
                  transition: "all 1s ease-in-out",
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
                  transition: "all 1s ease-in-out",
                });
              });
          }
          if (after.anchor === "bangumi") {
            new Promise((resolve, reject) => {
              resolve();
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
                  transition: "all 1s ease-in-out",
                });
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve();
                  }, 1100);
                }).then(() => {
                  // this.bangumi.buttonShow = true;
                  //TODO
                  this.calcSize();
                });
              });
          }
          if (after.anchor === "blog") {
            this.blog.show = true;
          }
          if (after.anchor === "contact") {
            new Promise((resolve, reject) => {
              resolve();
            })
              .then(() => {
                this.contact.title = true;
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve();
                  }, 500);
                });
              })
              .then(() => {
                this.contact.iconset.forEach((icon, index) => {
                  setTimeout(() => {
                    icon.iconShow = true;
                  }, 200 * index);
                });
              });
          }
        },
      });
    } catch (err) {}
  },
  data() {
    return {
      C_WIDTH: 0,
      me: {
        titleShow: false,
        leftShow: false,
        buttonsShow: false,
      },
      work: {
        titleShow: false,
        contentShow: false,
      },
      bangumi: {
        titleShow: false,
        contentShow: false,
      },
      contact: {
        titleShow: false,
        iconset: [
          {
            class: "iconfont icon-github",
            title: "github",
            link: "https://github.com/kagurakana",
            iconShow: false,
          },
          {
            class: "iconfont icon-blog",
            title: "blog",
            link: "https://www.kagurakana.xyz/",
            iconShow: false,
          },
          {
            class: "iconfont icon-email",
            title: "email",
            link: "mailto:1278820830@qq.com",
            iconShow: false,
          },
          {
            class: "iconfont  icon-qq",
            title: "qq",
            link: "http://wpa.qq.com/msgrd?v=3&uin=1278820830&site=qq&menu=yes",
            iconShow: false,
          },
          {
            class: "iconfont icon-steam",
            title: "steam",
            link: "https://steamcommunity.com/id/kagura_kana/",
            iconShow: false,
          },
        ],
        iconsShow: [false, false, false, false, false],
      },
      workset: [
        {
          title: "MUXI地板",
          img: "https://cdn.kagurakana.xyz/QQ截图20200621172534.png",
          link: "https://kagurakana.gitee.io/h5/muxi/index.html",
          desc: "使用bootstacp响应式布局，根据屏幕尺寸不同提供不同的layout。",
        },
        {
          title: "家居医生",
          img: "https://cdn.kagurakana.xyz/QQ截图20200621175806.png",
          link: "https://kagurakana.gitee.io/h5/iframe/index.html",
          desc: "使用iframe标签，多页面开发，点击标签切换不同的页面。",
        },
        {
          title: "小米商城",
          img: "https://cdn.kagurakana.xyz/QQ截图20200621175930.png",
          link: "https://kagurakana.gitee.io/h5/xiaomisite/index.html",
          desc:
            "使用grid和flex布局，开发滚动轮播图，边框线设置为1px，还原小米官网。",
        },
      ],
      gamesetAll: [], //所有的gameList
      gameset: [], //展示的game
      gameLoadText: "加载更多",
      gamePage: 1,
      bangumiset: [], //展示的bangumi
      bangumiPage: 1,
      bangumiCount: 0, //total bangumi
      bangumiLoadText: "",
      blog: {
        show: false,
      },
      blogListAll: [],
      blogShow: [],
      blogPage: 1,
      isTrottled: false, //markdown 节流

      scrollQueue: [], //长度为4 的队列 保存scrollTop，滚动触发上下
    };
  },
  computed: {
    showWorkSet() {
      let ret = this.workset;
      if (this.C_WIDTH >= 600 && this.C_WIDTH < 1200)
        ret = this.workset.slice(1);
      if (this.C_WIDTH < 600) ret = this.workset.slice(2);
      return ret;
    },
  },
  methods: {
    getBangumi(page) {
      $.ajax({
        method: "GET",
        url: `${BASE_URL}/api/out/bangumi?pn=${page}&sn=10&type=1&follow_status=0&vmid=14076737`,
      }).done((res) => {
        this.bangumiCount = res.data.total;
        let bangumiList = res.data.list;
        bangumiList.forEach((bangumi) => {
          let link = bangumi.cover.match(/http:\/\/(.*)/)[1];
          this.bangumiset.push({
            title: bangumi.title,
            img: `${BASE_URL}/api/out/${link}`,
            desc: bangumi.evaluate,
            link: bangumi.url,
          });
        });
        this.bangumiCount === 0 && this.bangumiLoadText === "没有更多了。。。";
        setTimeout(() => {
          this.calcSize();
        }, 100);
        this.bangumiCount === 0 ||
          setTimeout(() => {
            document.querySelector(".bangumi-wrapper").scrollBy({
              top: 1000,
              behavior: "smooth",
            });
          }, 500);
      });
    },
    loadMoreGame(page) {
      this.gameset.push(...this.gamesetAll.slice(page * 10, (page + 1) * 10));
      this.calcSize();
      this.$nextTick(() => {
        this.gameset.length === this.gamesetAll.length
          ? (this.gameLoadText = "没有更多了。。。")
          : this.$refs.gameWrapper.scrollBy({
              top: 1080,
              behavior: "smooth",
            });
      });
    },
    calcSize() {
      console.log("Ajax resaved data, re-calculate container's size...");
      let resizeEvent = document.createEvent("UIEvent");
      resizeEvent.initEvent("resize");
      window.dispatchEvent(resizeEvent);
      let loadEvent = document.createEvent("event");
      loadEvent.initEvent("load");
      window.dispatchEvent(loadEvent);
    },
    emitScroll(nodeStr, prevTarget, nextTarget, queueLength = 5, event) {
      let node = document.querySelector(nodeStr);
      let equalArr = [];
      this.scrollQueue.length === queueLength && this.scrollQueue.shift();
      this.scrollQueue.push(node.scrollTop);
      console.log(this.scrollQueue);
      equalArr = this.scrollQueue.filter((oldScrollTop) => {
        return oldScrollTop === node.scrollTop;
      });

      if (
        equalArr.length === this.scrollQueue.length &&
        this.scrollQueue.length === queueLength
      ) {
        this.scrollQueue = [];
        if (event.deltaY) {
          location.hash = event.deltaY < 0 ? prevTarget : nextTarget;
        } else if (event.wheelDeltaY) {
          location.hash = event.wheelDeltaY > 0 ? prevTarget : nextTarget;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";
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
  h1 {
    color: #f0ebf3;
    padding: 10px;
  }
  button {
    @include btn-transparent;
  }
  .game-wrapper {
    height: 80vh;
    overflow-y: auto;
  }
}
.section.bangumi {
  position: relative;
  .bangumi-container {
    padding: 5px;
  }
  .bangumi-wrapper {
    height: 80vh;
    overflow-y: auto;
  }
  button {
    margin: 20px;
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
.section.blog {
  background: #f2f2f2;
}
.section.contact {
  .contact-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    .contact-content {
      width: 350px;
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
    }
    .circle-wrapper {
      z-index: -1;
      position: absolute;
      width: 100vw;
      height: 100vh;
      .circle {
        border: 3px solid transparent;
        border-radius: 50%;
      }
      .circle-1 {
        width: 98vh;
        height: 98vh;
        z-index: 2;
        border-right: 3px solid #000;
        animation: rotate 20s infinite linear;
      }
      .circle-2 {
        width: 90vh;
        height: 90vh;
        z-index: 2;
        border-left: 3px solid #000;
        animation: rotate 25s infinite linear;
      }
      .circle-3 {
        width: 82vh;
        height: 82vh;
        z-index: 2;
        border-top: 3px solid #000;
        animation: rotate 27s infinite linear;
      }
      .circle-4 {
        width: 74vh;
        height: 74vh;
        z-index: 2;
        border-bottom: 3px solid #000;
        animation: rotate 30s infinite linear;
      }
      .circle-5 {
        width: 66vh;
        height: 66vh;
        z-index: 2;
        border-right: 3px solid #000;
        animation: rotate 35s infinite linear;
      }
      .circle-6 {
        width: 60vh;
        height: 60vh;
        z-index: 2;
        border-left: 3px solid #000;
        animation: rotate 40s infinite linear;
      }
    }
    // background-color: red;
  }
  .icon-group {
    text-align: left;
    margin: 15px;
    align-self: flex-start;
    // width: ;
    i {
      padding: 0px;
      margin: 15px;
      transition: all 0.5s ease;
      font-size: 26px;
      border-radius: 50%;
      &:hover {
        padding: 8px;
        transition: all 0.5s ease;
        border-radius: 50%;
        background-color: #222;
        color: #efefef;
      }
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
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
