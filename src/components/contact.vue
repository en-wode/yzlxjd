<template>
    <div class="contact">
        <Row  :gutter="46">
            <Col span="24"  class="content">
                <h3>联系我们</h3>
                <el-amap class="amap-box" :center="center" vid="map"  :plugin="plugin" :zoom="zoom">
                    <el-amap-marker :position="center" vid="marker" :label="label"></el-amap-marker>
                </el-amap>
                <ul>
                    <li><Icon type="md-contact" />联系人：刘雪岭</li>
                    <li><Icon type="md-phone-portrait" />联系电话：13905254407</li>
                    <li><Icon type="ios-mail-open-outline" />邮箱：13905254407@139.com</li>
                    <li><Icon type="md-pin" />地址：扬州市高邮市汤庄镇沙堰工业区</li>
                </ul>
            </Col>
        </Row>
    </div>
</template>

<script>
    import vSidebar from './sidebar.vue';
    export default {
        name: 'contact',
        components: {
            vSidebar
        },
        data(){
            return{
                zoom: 12,
                center: [119.729332,32.771995],
                label:{
                    content:'扬州蓝翔机电工程有限公司',
                    offset:[-60,-30]
                },
                plugin: [{
                    showButton: true, // 显示定位按钮，默认：true
                    showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
                    events: {
                        init (o) {
                        }
                    }
                }],
            }
        }
    }
</script>

<style scoped>
    .contact{
        margin: 88px auto;
        width: 50%;
    }
    .contact h3{
        text-align: left;
        font-size: 24px;
        border-bottom: 2px solid #ccc;
        padding: 14px 12px 12px 12px;
    }
    .content{
        border: 8px solid #3a65c2;
        min-height: 250px;
    }
    .contact .amap-markers{
        width: 14px;
        height: 14px;
        border-radius: 50%;
        opacity: 0.7;
        background: deepskyblue;
    }
    .contact .amap-box{
        height: 360px;
        width: 600px;
        margin: 18px auto;
    }
    .contact ul{
        text-align: left;
        font-size: 16px;
        width: 80%;
        margin: 48px auto;
        border-top: 2px solid #ccc;
        padding: 8px 12px;
    }
    .contact ul li {
        padding: 10px 0;
    }
    .contact ul .ivu-icon{
        margin-right: 8px;
        font-size: 24px;
    }
</style>