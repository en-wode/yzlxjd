<template>
    <div class="productlist">
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
                    <Row  :gutter="46" class="productimg">
                        <Col span="12">
                            <router-link  :to="{path:'/product', query: { id: 0}}" >
                                <img src="../assets/img/iw-g.jpg" alt=""/>
                            </router-link>
                            <p>一体化智能截污井</p>
                        </Col>
                        <Col span="12">
                            <router-link  :to="{path:'/product', query: { id: 1}}" >
                                <img src="../assets/img/wxlogin.jpg" alt="" style="width: 180px"/>
                            </router-link>
                            <p>智慧物联控制系统</p>
                        </Col>
                        <Col span="12">
                            <router-link  :to="{path:'/product', query: { id: 2}}" >
                                <img src="../assets/img/shengtaihuoshui.jpg" alt=""/>
                            </router-link>
                            <p>景观瀑布翻板闸门</p>
                        </Col>
                        <Col span="12">
                            <router-link  :to="{path:'/product', query: { id: 3}}" >
                                <img src="../assets/img/shengtaixushui.jpg" alt=""/>
                            </router-link>
                            <p>生态蓄水钢坝</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product_list'
    }
</script>

<style scoped>
    .productlist{
        margin: 0px auto;
    }
    .banner{
        width: 100%;
    }
    .productlist .content{
        min-width: 1220px;
        width: 80%;
        margin: 68px auto;
    }
    .productlist .content .productContact{
        border: 8px solid #3a65c2;
        width: 60%;
        margin: 30px auto;
        background: #3a65c2;
    }
    .productlist .content .productContact h3{
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        background: #3a65c2;
        color: white;
        margin-bottom: 12px;
        border-bottom: 1px solid #333333;
    }
    .productlist .content .productContact p{
        font-size: 20px;
        padding-top: 12px;
        color: white;
        font-weight: bolder;
    }
    .productlist .content .productContact p .ivu-icon{
        font-size: 38px;
    }
    .productlist .productleft {
        width: 60%;
        margin: 0 auto;
        border: 8px solid #3a65c2;
        color: #333333;
    }
    .productlist .productleft h3{
        color: white;
        background: #3a65c2;zxczxczxcz
        height: 68px;
        line-height: 68px;
        font-size: 26px;
        border-bottom: 2px solid #cccccc;
    }
    .productlist .productleft li{
        text-align: center;
        height: 41px;
        border-bottom: 1px solid #ccc;
        font-size: 22px;
        line-height: 41px;
        padding: 0 14px;
        cursor: pointer;
        color: #333333;
    }
    .productlist .productleft li:hover{
        background: cornflowerblue;
    }
    .productimg img{
        width: 49%;
        height: 240px;
        cursor: pointer;
    }
    .productimg .ivu-col {
        border-bottom: 1px solid #cccccc;
        margin-bottom: 44px;
    }
    .productimg p{
        padding: 12px 0;
        font-size: 20px;
    }
    .content .productContact .location{
        width: 210px;
        height: 150px;
    }
    .content .productContact .iphone{
        vertical-align: -4px;
        padding-right: 10px;
    }
</style>