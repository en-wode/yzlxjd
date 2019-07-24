<template>
    <div class="newslist">
        <img src="../assets/img/banner2.jpg" alt="" class="banner">
        <div  class="content">
            <Row  :gutter="46">
                <Col span="8">
                    <ul class="productleft">
                        <h3>产品列表</h3>
                        <h3>Product List</h3>
                        <router-link  :to="{path:'/product', query: { id: 0}}" >
                            <li>一体化智能截污井</li>
                        </router-link>
                        <router-link  :to="{path:'/product', query: { id: 1}}" >
                            <li>智慧物联控制系统</li>
                        </router-link>
                        <router-link  :to="{path:'/product', query: { id: 2}}" >
                            <li>生态活水坝</li>
                        </router-link>
                        <router-link  :to="{path:'/product', query: { id: 3}}" >
                            <li>生态蓄水钢坝</li>
                        </router-link>
                    </ul>
                    <div class="productContact">
                        <h3>联系方式</h3>
                        <img src="../assets/img/lanxianglocation.jpg" alt="蓝翔机电工程有限公司" class="location">
                        <p><img src="../assets/img/z_tel.png" alt="" class="iphone">13905254407</p>
                    </div>
                </Col>
                <Col span="16">
                    <ul class="newmenu">
                        <li><router-link  :to="{path:'/news', query: { id: 0}}" >2019年黑臭水体整治技术研讨会</router-link> <span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/news', query: { id: 1}}" >省政府办公厅江苏省环境基础设施三年建设方案</router-link><span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/news', query: { id: 2}}" >一体化智能截污井小程序</router-link><span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/news', query: { id: 3}}" >镇江丁卯一体化截污井验收</router-link><span>2019-05-10</span></li>
                    </ul>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news_list'
    }
</script>

<style scoped>
    .newslist{
        margin: 0px auto;
    }
    .banner{
        width: 100%;
    }
    .newslist .content{
        min-width: 1220px;
        width: 80%;
        margin: 68px auto;
    }
    .newslist .content .productContact{
        border: 8px solid #3a65c2;
        width: 60%;
        margin: 30px auto;
        background: #3a65c2;
    }
    .newslist .content .productContact h3{
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        background: #3a65c2;
        color: white;
        margin-bottom: 12px;
        border-bottom: 1px solid #333333;
    }
    .newslist .content .productContact p{
        font-size: 20px;
        padding-top: 12px;
        color: white;
        font-weight: bolder;
    }
    .newslist .content .productContact p .ivu-icon{
        font-size: 38px;
    }
    .newslist .productleft {
        width: 60%;
        margin: 0 auto;
        border: 8px solid #3a65c2;
        color: #333333;
    }
    .newslist .productleft h3{
        color: white;
        background: #3a65c2;
        height: 68px;
        line-height: 68px;
        font-size: 26px;
        border-bottom: 2px solid #cccccc;
    }
    .newslist .productleft li:hover{
        background: cornflowerblue;
    }
    .newslist .productleft li{
        text-align: center;
        height: 41px;
        border-bottom: 1px solid #ccc;
        font-size: 22px;
        line-height: 41px;
        padding: 0 14px;
        cursor: pointer;
    }
    .content .productContact .location{
        width: 210px;
        height: 150px;
    }
    .content .productContact .iphone{
        vertical-align: -4px;
        padding-right: 10px;
    }
    .newslist .newmenu {
        border: 1px solid #cccccc;
        margin-top: 38px;
        padding: 0 18px;
    }
    .newslist .newmenu a{
        color: #333333;
    }
    .newslist .newmenu li:last-child{
        border-bottom: none;
    }
    .newslist .newmenu li{
        text-align: left;
        font-size: 20px;
        line-height: 48px;
        height: 48px;
        border-bottom: 1px solid #cccccc;
        cursor: pointer;
    }
    .newslist .newmenu li span{
        float: right;
    }
</style>