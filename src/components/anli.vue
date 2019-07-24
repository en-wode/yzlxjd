<template>
    <div class="anli">
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
                        <li><router-link  :to="{path:'/anlidetail', query: { id: 0}}" >余杭塘栖圩区防洪排涝一期工程</router-link> <span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/anlidetail', query: { id: 1}}" >睢宁县黄河东闸除险加固工程C标段</router-link><span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/anlidetail', query: { id: 2}}" >镇江丁卯一体化截污井验收</router-link><span>2019-04-18</span></li>
                        <li><router-link  :to="{path:'/anlidetail', query: { id: 3}}" >常州跃进桥一体化智能渠道截污井</router-link><span>2019-05-10</span></li>
                        <li><router-link  :to="{path:'/anlidetail', query: { id: 4}}" >宁夏大型灌区续建配套与节水改造工程</router-link><span>2019-05-10</span></li>
                    </ul>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'anli'
    }
</script>

<style scoped>
    .banner{
        width: 100%;
    }
    .anli .newmenu {
        border: 1px solid #cccccc;
        padding: 0 18px;
        margin: 38px auto;
    }
    .anli .newmenu li:last-child{
        border-bottom: none;
    }
    .anli .newmenu li{
        text-align: left;
        font-size: 20px;
        line-height: 48px;
        height: 48px;
        border-bottom: 1px solid #cccccc;
        cursor: pointer;
    }
    .anli .newmenu li span{
        float: right;
    }
    .anli .content{
        min-width: 1220px;
        width: 80%;
        margin: 68px auto;
    }
    .anli .productleft {
        width: 60%;
        margin: 0 auto;
        border: 8px solid #3a65c2;
    }
    .anli .productleft a{
        color: #333333;
    }
    .anli .productleft h3{
        color: white;
        background: #3a65c2;
        height: 68px;
        line-height: 68px;
        font-size: 26px;
        border-bottom: 2px solid #cccccc;
    }
    .anli .productleft li:hover{
        background: cornflowerblue;
    }
    .anli .newmenu a{
        color: #333333;
    }
    .anli .productleft li{
        text-align: center;
        height: 41px;
        border-bottom: 1px solid #ccc;
        font-size: 22px;
        line-height: 41px;
        padding: 0 14px;
        cursor: pointer;
    }
    .anli .content .productContact{
        border: 8px solid #3a65c2;
        width: 60%;
        margin: 30px auto;
        background: #3a65c2;
    }
    .anli .content .productContact h3{
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        background: #3a65c2;
        color: white;
        margin-bottom: 12px;
        border-bottom: 1px solid #333333;
    }
    .anli .content .productContact p{
        font-size: 20px;
        padding-top: 12px;
        color: white;
        font-weight: bolder;
    }
    .anli .content .productContact p .ivu-icon{
        font-size: 38px;
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