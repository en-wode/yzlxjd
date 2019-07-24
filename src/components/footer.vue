<template>
    <div class="footer">
        <Row class="nav">
            <Col span="10">
                <p>手机：13905254407</p>
                <p>联系人：刘雪岭</p>
                <p>邮箱：13905254407@139.com</p>
                <p>联系地址：扬州市高邮市汤庄镇沙堰工业区</p>
            </Col>
            <Col span="10" class="mid">
                <p>火热产品： <a href="">一体化智能截污井</a> <a href="">钢坝</a> <a href="">下开式堰门</a> </p>
                <p>专业城市黑色水体，海绵城市智能装备服务商</p>
                <p>全球首家一体化智能截污井制造商</p>
            </Col>
            <Col span="4">
                <img src="../assets/img/qrcode.jpg" alt="微信公众号" class="qrcode">
                <p class="bold tip">扫码关注公众号！</p>
            </Col>
        </Row>
        <div class="banquan">
            <p>Copyright (C) All rights reserved</p>
            <p>苏ICP备19034306号-1</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
        width: 100%;
        background: #3a65c2;
        color: white;
        font-size: 16px;
        padding: 16px 0 8px 0;
    }
    .footer .nav{
        width: 60%;
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
    }
    .footer .nav p{
        text-align: left;
        padding: 8px 0;
    }
    .footer .nav .mid a{
        padding: 0 6px;
        color: white;
    }
    .footer .nav .mid a:hover{
        color: firebrick;
    }
    .footer .banquan{
        color: #7eaff4;
        padding-top: 8px;
        margin-bottom: 12px;
    }
    .footer .banquan p{
        text-align: center;
    }
    .footer .qrcode{
        width: 120px;
        height: 120px;
        vertical-align: middle;
    }
    .footer .tip{
        text-align: center!important;
    }
</style>
