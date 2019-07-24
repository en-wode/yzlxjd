<template>
  <div id="header">
      <Row class="headtop">
          <Col :sm="12" :xs="24"><h3>欢迎来到江苏蓝翔机电工程有限公司官网</h3></Col>
          <Col :sm="12" :xs="0"></Col>
      </Row>
      <Row class="headname">
          <Col :sm="12" :xs="24"><img src="../assets/img/logo.png" alt="江苏蓝翔机电工程有限公司" /></Col>
          <Col :sm="12" :xs="0" class="headphone">热线电话:  0514-8472 8668</Col>
      </Row>
      <Row class="nav">
          <Col span="4"> </Col>
          <Col span="4"><router-link  :to="{path:'/'}" >首页</router-link></Col>
          <Col span="4"><router-link  :to="{path:'/productlist'}" >产品详情</router-link></Col>
          <Col span="4"><router-link  :to="{path:'/anli'}" >工程案例</router-link></Col>
          <Col span="4"><router-link  :to="{path:'/newslist'}" >新闻动态</router-link></Col>
          <Col span="4"><router-link  :to="{path:'/contact'}" >联系我们</router-link></Col>
      </Row>
  </div>
</template>

<script>
export default {
    name: 'Head',
        data () {
            return {
                value: 0
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .headtop{
        border-bottom: 1px solid #ddd;
        color: #999;
        padding: 10px 0;
    }
    .nav{
        width: 100%;
        font-size: 18px;
        height: 54px;
        background: #3a65c2;
        color: white;
    }
    .headname{
        padding: 24px 0 20px 0;
        font-size: 18px;
    }
    .headname .headphone{
        line-height: 86px;
    }
    .nav .ivu-col{
        height: 54px;
        line-height: 54px;
        cursor: pointer;
    }
    .nav .ivu-col:hover{
        background: #4f7ed8;
    }
    .nav a{
        width: 100%;
        display: inline-block;
        color: white;
    }
</style>
