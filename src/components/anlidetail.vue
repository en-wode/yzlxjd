<template>
    <div class="anlidetail">
        <img src="../assets/img/banner2.jpg" alt="" class="banner">
        <div class="article">
            <h3 class="title">{{anli.title}}</h3>
            <p class="time">{{anli.time}}</p>
            <div  v-html="anli.content" class="content"></div>
        </div>
    </div>
</template>

<script>
    import anli from '../../static/json/anli'
    export default {
        name: 'anlidetail',
        data () {
            return {
                anli: ''
            }
        },
        mounted () {
            var i = this.$route.query.id;
            console.log(i)
            this.anli = anli.news[i];
            console.log(this.$route.query.id);
        }
    }
</script>

<style >
    .anlidetail .article{
        width: 60%;
        margin: 68px auto;
    }
    .anlidetail .title{
        font-size: 28px;
    }
    .anlidetail .time{
        text-align: right;
        margin-top: 28px;
        font-size: 22px;
    }
    .anlidetail .content{
        margin: 28px auto;
        font-size: 20px;
    }
    .anlidetail .content p{
        text-indent: 48px;
        text-align: left;
        margin-top: 28px;
    }
    .anlidetail .content img{
        width: 700px;
        height: 550px;
        margin: 16px auto;
    }
    .banner{
        width: 100%;
    }
</style>