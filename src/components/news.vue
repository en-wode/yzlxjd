<template>
    <div class="news">
        <img src="../assets/img/banner2.jpg" alt="" class="banner">
        <div class="article">
            <h3 class="title">{{newslist.title}}</h3>
            <p class="time">{{newslist.time}}</p>
            <div  v-html="newslist.content" class="content"></div>
        </div>
    </div>
</template>

<script>
    import news from '../../static/json/news'
    export default {
        name: 'news',
        data () {
            return {
                newslist: ''
            }
        },
        mounted () {
            var i = this.$route.query.id;
            console.log(i)
            this.newslist = news.news[i];
            console.log(this.$route.query.id);
            console.log(this.newslist);
        }
    }
</script>

<style>
    .news .article{
        width: 60%;
        margin: 68px auto;
    }
    .news .title{
        font-size: 28px;
    }
    .news .time{
        text-align: right;
        margin-top: 28px;
        font-size: 22px;
    }
    .news .content{
        text-indent: 48px;
        margin: 28px auto;
        text-align: left;
        font-size: 20px;
    }
    .news .content p{
        margin-top: 28px;
    }
    .news .content img{
        width: 700px;
        height: 550px;
        margin: 16px auto;
    }
    .banner{
        width: 100%;
    }
</style>