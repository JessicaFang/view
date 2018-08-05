<template>
    <!--html书写-->
    <div>
    <span v-text="msg" @click="add" class="c" ></span>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
    <mt-button type="danger" @click="tip"  size="large">danger</mt-button>
        <button @click="add1">点击</button>
        <button @click="add2">点击</button>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    import object from "./login.vue";
    import { Toast} from "mint-ui";
    export default {
        data:function(){
            return{
                msg:"hello vue.js",
            }
        },
        methods:{
            add2:function () {
                alert("hello");
                console.log(object);
                console.log(object.methods.add);
            },
            tip:function () {
                Toast("消息");
            }
        }
    }
</script>

<style scoped>
    /*css样式，scopd表示只在当前页面有效*/
    .c{
        color:red;
    }
</style>