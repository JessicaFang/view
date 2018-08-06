import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import home from "./component/Home.vue";
import shopcar from "./component/shopcar/car.vue";
import "mint-ui/lib/style.min.css";
import mintui from "mint-ui";
import "../statics/mui/css/mui.css";
import "../statics/css/site.css";
import newslist from "./component/news/newslist.vue";
import moment from "moment";
Vue.use(mintui);
Vue.use(vueRouter);
Vue.filter("datafmt",function (input,fmtstring) {
    //使用monent.js这个日期格式化类库实现日的格式化功能
    return moment(input).format(fmtstring);
});
var router=new vueRouter({
    linkActiveClass:"mui-active",//改变路由激活时的class名称
    routes:[
        {path:"/",redirect:"/Home"},
        {path:"/Home",component:home},
        {path:"/car",component:shopcar},
        {path:"/news/newslist",component:newslist},
    ]
});
new Vue({
    el:"#app",
    router:router,
    //render:function(create){create(App)}
    render:c=>c(App),
});