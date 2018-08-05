import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import login from "./login.vue";
import register from "./register.vue";
import "mint-ui/lib/style.min.css";
import mintui from "mint-ui";
import "../statics/mui/css/mui.css";
Vue.use(mintui);
Vue.use(vueRouter);
var router=new vueRouter({
    routes:[
        {path:"/login",component:login},
        {path:"/register",component:register},
    ]
});
new Vue({
    el:"#app",
    router:router,
    //render:function(create){create(App)}
    render:c=>c(App),
});