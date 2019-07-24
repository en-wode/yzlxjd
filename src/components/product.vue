<template>
    <div class="product">
        <img src="../assets/img/banner2.jpg" alt="" class="banner">
        <div class="article">
            <h3 class="title">{{productlist.title}}</h3>
            <p class="time">{{productlist.time}}</p>
            <div  v-html="productlist.content" class="content"></div>
        </div>
    </div>
</template>

<script>
    import product from '../../static/json/product'
    export default {
        name: 'product',
        data () {
            return {
                productlist: ''
            }
        },
        mounted () {
            var i = this.$route.query.id;
            console.log(i)
            this.productlist = product.product[i];
            console.log(this.$route.query.id);
            console.log(this.productlist);
        }
    }
</script>

<style >
    .product .article{
        width: 60%;
        margin: 68px auto;
    }
    .product .title{
        font-size: 28px;
    }
    .product .time{
        text-align: right;
        margin-top: 28px;
        font-size: 22px;
    }
    .product .content p{
        text-align: left;
        text-indent: 48px;
        margin: 28px auto;
        font-size: 20px;
    }
    .product .content p{
        margin-top: 28px;
    }
    .product .content img{
        width: 700px;
        height: 550px;
        margin: 16px auto;
    }
    .banner{
        width: 100%;
    }
</style>