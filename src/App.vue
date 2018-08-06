<template>
    <!--html书写-->
    <div>
    <mt-header fixed title="传智播客.黑马程序员VUE商城" ></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item " to="/Home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/tabbar-with-chat">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/car">
            <span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item"to="/tabbar-with-map">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>

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
</style>