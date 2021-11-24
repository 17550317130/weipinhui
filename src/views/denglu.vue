<template>
  <div class="denglu_box">
    <div class="denglu_box_top">
      <div class="denglu_box_top_left"></div>
      <div class="denglu_box_top_right"></div>
    </div>
    <div class="denglu_box_banner">
      <div class="denglu">
        <div class="denglu_saoma">
          <div class="denglu_saoma_top">
            <div class="denglu_saoma_top_left"><b>扫码登录</b></div>
            <div class="denglu_saoma_top_right"><b>账户登录</b></div>
          </div>
          <div class="denglu_saoma_zhongjian">
            <div class="denglu_saoma_erweima">
              <div class="erweima_box">
                <div class="erweima">
                  <img src="../assets/images/二维码.png" alt="" />
                </div>
              </div>
              <div class="saoyisao">
                <ul>
                  <li class="icon_saoma"></li>
                  <li>打开</li>
                  <li style="color: #f10180">唯品会APP-个人中心</li>
                  <li>，扫一扫登录</li>
                </ul>
              </div>
            </div>
            <div class="yuedu">
              <div class="yuedu_inp"></div>
              <div class="yuedu_yinsi">
                我已阅读并接受以下条款：
                <a
                  href="https://h5rsc.vip.com/h5rscSupportClause/h5rscSupportClause/index.html"
                  >《唯品会服务条款》</a
                >
                <a href="https://www.vip.com/privacy">《唯品会隐私政策》</a>
                <a href="https://i.vpal.com/portal/clause/clause.html"
                  >《唯品支付用户服务协议》</a
                >
              </div>
            </div>
          </div>
          <div class="denglu_saoma_bottom">
            <div class="weixin">
              <div>
                <span></span>
              </div>
            </div>
            <div class="denglu_gengduo">
              <ul>
                <li style="color: #999">新浪微博</li>
                <li style="color: #999; font-size: 11px">|</li>
                <li class="denglu_QQ" style="color: #333">QQ</li>
                <li style="color: #999">|</li>
                <li class="denglu_zhufubao" style="color: #333">支付宝</li>
                <li style="color: #999">更多></li>
                <li class="denglu_zhuce" style="color: #333">免费注册</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      Copyright 2008-2020 vip.com，All Rights Reserved ICP证：粤 B2-20080329
    </div>
  </div>
</template>
<style lang="scss" scoped>
.denglu_box {
  width: 100%;
  height: 1000px;
  min-width: 1000px;
  .denglu_box_top {
    position: relative;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    width: 1000px;
    height: 100px;
    zoom: 1;
    .denglu_box_top_left {
      background-image: url("../assets/images/登录图片精灵.png");
      background-position: -308px -57px;
      width: 125px;
      height: 100px;
      display: inline-block;
      vertical-align: top;
      line-height: 500px;
      overflow: hidden;
    }
    .denglu_box_top_right {
      background-image: url("../assets/images/登录图片精灵.png");
      background-position: 0 0;
      width: 304px;
      height: 100px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
  }
  .denglu_box_banner {
    width: 100%;
    height: 650px;
    background-image: url("../assets/images/登录banner.jpg");
    .denglu {
      width: 1040px;
      height: 650px;
      margin: 0 auto;
      .denglu_saoma {
        width: 360px;
        height: 511px;
        border-radius: 2px;
        background-color: #fff;
        float: right;
        margin-top: 60px;
        .denglu_saoma_top {
          width: 360px;
          height: 50px;
          border-bottom: 1px solid #e0e0e0;
          .denglu_saoma_top_left {
            width: 180px;
            height: 50px;
            color: #f10180;
            float: left;
            // background-color: chocolate;
            text-align: center;
            line-height: 50px;
          }
          .denglu_saoma_top_left::after {
            position: absolute;
            top: 176px;
            right: 611px;
            z-index: 1;
            width: 1px;
            height: 20px;
            background-color: #ccc;
            content: "";
            font-size: 0;
            line-height: 0;
          }
          .denglu_saoma_top_right {
            width: 180px;
            height: 50px;
            float: left;
            // background-color: rgb(58, 58, 58);
            text-align: center;
            line-height: 50px;
          }
        }
        .denglu_saoma_zhongjian {
          width: 360px;
          height: 336px;
          //   background-color: cornsilk;
          .denglu_saoma_erweima {
            width: 360px;
            height: 264px;
            // background-color: darkgray;
            position: relative;
            .erweima_box {
              width: 360px;
              position: absolute;
              height: 192px;
              //   background-color: darkseagreen;
              padding-top: 35px;
              .erweima {
                width: 172px;
                height: 172px;
                margin: 10px auto;
                border: 1px solid #f4f4f4;
                img {
                  margin: 11px;
                }
              }
            }
            .saoyisao {
              width: 233px;
              position: absolute;
              height: 16px;
              //   background-color: darkturquoise;
              margin: 248px 0 0 63px;
              font-size: 12px;
              line-height: 16px;
              .icon_saoma {
                background-image: url("../assets/images/登录图片精灵.png");
                background-position: -605px -121px;
                width: 16px;
                height: 16px;
                margin-right: 6px;
              }
              ul,
              li {
                list-style: none;
                float: left;
              }
            }
          }
          .yuedu {
            width: 299px;
            height: 36px;
            // background-color: deepskyblue;
            margin: 20px 40px;
            position: relative;
            .yuedu_inp {
              position: absolute;
              background-image: url("../assets/images/图标精灵.png");
              background-position: -48px 0;
              width: 19px;
              height: 16px;
              float: left;
              margin-right: 6px;
            }
            .yuedu_yinsi {
              margin-left: 20px;
              font-size: 12px;
              a {
                text-decoration: none;
                color: #1d94d1;
              }
            }
          }
        }
        .denglu_saoma_bottom {
          width: 300px;
          height: 74px;
          //   background-color: gainsboro;
          padding: 30px 30px 15px 30px;
          .weixin {
            width: 300px;
            height: 40px;
            position: relative;
            // background-color: honeydew;
            div {
              width: 60px;
              height: 40px;
              background-color: hotpink;
              margin: 0 auto;
              position: relative;
              z-index: 2;
              margin-right: auto;
              margin-left: auto;
              width: 40px;
              height: 40px;
              span {
                background-image: url("../assets/images/登录图片精灵.png");
                background-position: -580px -161px;
                width: 40px;
                height: 40px;
                display: inline-block;
                position: relative;
                z-index: 3;
              }
            }
            div::after {
              position: absolute;
              top: 0;
              left: 50%;
              margin-left: -30px;
              z-index: 2;
              width: 60px;
              height: 40px;
              content: "";
              background-color: #fff;
            }
          }
          .weixin::after {
            position: absolute;
            z-index: 1;
            content: "";
            top: 20px;
            left: 0;
            width: 100%;
            border-top: 1px solid #e0e0e0;
          }
          .denglu_gengduo {
            width: 310px;
            height: 24px;
            // background-color: lavenderblush;
            margin: 15px 0 0 -5px;
            ul,
            li {
              list-style: none;
              float: left;
              font-size: 12px;
              margin: 0 7px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
  .foot {
    width: 1000px;
    height: 78px;
    margin: 0 auto;
    text-align: center;
    line-height: 78px;
    font-size: 12px;
    color: #666;
  }
}
</style>