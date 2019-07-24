<template>
    <div id="home">
        <Carousel v-model="value" loop class="car">
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assets/img/banner4.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assets/img/lunbo4.png" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <section class="product">
            <h3>PRODUCT</h3>
            <p class="detail">为用户提供高品质的产品和完善的服务</p>
            <Row class="productimg">
                <Col span="12">
                    <Row>
                        <Col span="10">
                            <router-link  :to="{path:'/product', query: { id: 0}}" >
                                <h3>一体化智能截污井</h3>
                                <p>专注于城市合流制管道的污水截流井，设置在雨水管与污水管的汇合处，将雨水和污水自动分流到各自的管道中。</p>
                            </router-link>
                        </Col>
                        <Col span="12">
                            <img src="../assets/img/iw-g.jpg" alt="">
                        </Col>
                    </Row>
                    <!--<p class="name">一体化智能截污井</p>-->
                </Col>
                <Col span="12">
                    <Row>
                        <Col span="10">
                            <router-link  :to="{path:'/product', query: { id: 1}}" >
                                <h3>微信小程序远程控制系统</h3>
                                <p>与一体化智能截污井通过GPRS通讯模块进行互相关联，可以通过微信 小程序远程控制截污井运转状况，并实时监控一体化智能截污井运转状况实现真正的无人值守。</p>
                            </router-link>
                        </Col>
                        <Col span="12">
                            <img src="../assets/img/wxlogin.jpg" alt="" style="width: 180px">
                        </Col>
                    </Row>
                </Col>
                <Col span="12">
                    <Row>
                        <Col span="10">
                            <router-link  :to="{path:'/product', query: { id: 2}}" >
                                <h3>景观瀑布翻板闸门</h3>
                                <p>铺设在河道上的翻板闸门，用于改善河道综合环境、蓄水发电或形成人工瀑布等景观效果</p>
                            </router-link>
                        </Col>
                        <Col span="12">
                            <img src="../assets/img/shengtaihuoshui.jpg" alt="">
                        </Col>
                    </Row>
                </Col>
                <Col span="12">
                    <Row>
                        <Col span="10">
                            <router-link  :to="{path:'/product', query: { id: 3}}" >
                                <h3>生态蓄水钢坝</h3>
                                <p>黑臭水体治理控源截污解决方案</p>
                            </router-link>
                        </Col>
                        <Col span="12">
                            <img src="../assets/img/shengtaixushui.jpg" alt="">
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
        <section class="news">
            <h3>NEWS</h3>
            <p class="detail">为用户提供高品质的产品和完善的服务</p>
            <Row>
                <Col span="12">
                    <!--<div v-on:click="playVideo()">-->
                        <!--<video :src="videoSrc" id="videoPlay" class="video" webkit-playsinline="true" :muted="muteStatus">您的浏览器不支持 video 视屏播放。</video>-->
                        <!--<div class="controls" id="controls">-->
                            <!--<Icon type="md-notifications" :class="{ active: isMute }" v-on:click="closeSoundClick()"/>-->
                            <!--<span class="ico ico-sound" ></span>-->
                        <!--</div>-->
                    <!--</div>-->
                    <embed src="../../static/video/dingmou.mp4"  autostart="true" loop="true" align="bottom" title="镇江丁卯项目宣传片" height="300" width="480" />
                </Col>
                <Col span="12">
                    <ul class="newmenu">
                        <li><router-link  :to="{path:'/news', query: { id: 0}}" >2019年黑臭水体整治技术研讨会</router-link> <span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/news', query: { id: 1}}" >省政府办公厅江苏省环境基础设施三年建设方案</router-link><span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/news', query: { id: 2}}" >一体化智能截污井小程序</router-link><span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/news', query: { id: 3}}" >镇江丁卯一体化截污井验收</router-link><span>2019-05-10</span></li>
                    </ul>
                </Col>
            </Row>

        </section>
        <section class="zizhi">
            <h3>Enterprise honor</h3>
            <p class="detail">企业荣誉</p>
            <div class="rongyu">
                <Row :gutter="26">
                    <Col span="6"><img src="../../static/img/zizhi/gangbengzhimeng1.png" alt=""></Col>
                    <Col span="6"><img src="../../static/img/zizhi/qiyexinyong1.png" alt=""></Col>
                    <Col span="6"><img src="../../static/img/zizhi/shigong1.png" alt=""></Col>
                    <Col span="6"><img src="../../static/img/zizhi/shenchan.png" alt=""></Col>
                </Row>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
      name: 'home',
      data () {
        return {
            value: 0,
            videoSrc: '../../static/video/dingmou.mp4',
            isMute:true,
            muteStatus:''
        }
      },
       methods: {
           playVideo(){
               var vdo = document.getElementById("videoPlay");
               vdo.play();
           },
           closeSoundClick(){
               this.isMute = !this.isMute;
               if(this.isMute){
                   this.muteStatus = '';
               }else{
                   this.muteStatus = 'muted';
               }
           }
       }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .car{
        height: 560px;
    }
    section{
        padding: 26px 0;
    }
    .product h3, .news h3, .zizhi h3 {
        font-size: 30px;
        padding: 10px 0;
        color: #3a65c2;
    }
    .product .detail, .news .detail, .zizhi .detail {
        font-size: 28px;
        padding: 10px 0;
        color: #333333;
    }
    .nav{
        width: 70%;
        margin: 18px auto;
    }
    .nav .ivu-col{
        height: 300px;
        background: cornflowerblue;
    }
    .ivu-carousel img{
        width: 100%;
        height: 560px;
    }
    .product{
        width: 80%;
        margin: 0 auto;
        min-width: 1280px;
        border-bottom: 1px solid #cccccc;
    }
    .product p{
        padding: 12px 0;
        font-size: 20px;
    }
    .productimg img{
        width: 80%;
        height: 240px;
        -webkit-animation-name: fadeIn; /*动画名称*/
        -webkit-animation-duration: 2s; /*动画持续时间*/
        -webkit-animation-iteration-count: 1; /*动画次数*/
        -webkit-animation-delay: 0s; /*延迟时间*/
    }
    .productimg h3 {
        font-size: 20px;
    }
    .productimg p {
        font-size: 14px;
        text-indent:35px;
        line-height: 24px;
        text-align: left;
        color: #333333;
        font-weight: 700;
    }
    .productimg .name {
        text-align: center;
    }
    .news{
        width: 60%;
        margin: 0 auto;
        padding: 48px 0;
        min-width: 1280px;
        border-bottom: 1px solid #cccccc;
    }
    .news .newmenu {
        margin-top: 38px;
        padding: 0 18px;
    }
    .productimg .ivu-col{
        margin-bottom: 28px;
        margin-top: 28px;
    }
    .news .newmenu li{
        text-align: left;
        font-size: 20px;
        line-height: 48px;
        height: 48px;
        border-bottom: 1px solid #cccccc;
    }
    .news .newmenu li span{
        float: right;
    }
    .zizhi .rongyu{
        width: 70%;
        margin: 48px auto;
        border: 8px solid #cccccc;
        padding: 18px;
    }
    .zizhi .rongyu img{
        width: 100%;
    }

    /*动画*/
    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0; /*初始状态 透明度为0*/
        }
        50% {
            opacity: 0.5; /*中间状态 透明度为0*/
        }
        100% {
            opacity: 1; /*结尾状态 透明度为1*/
        }
    }
</style>
