<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li v-for="item in list" class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                       {{item.title}}
                        <p class='mui-ellipsis' v-text="item.zhanyao"></p>
                        <div class="fn">
                            <span>发表时间：{{item.add_time | datafmt("YY-MM-DD HH:mm:ss")}}</span>
                            <span class="last">点击数：{{item.click}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "newslist",
        data(){/*相当于data:function() {}*/
            return {
                list:[],
            }
        },
        created(){
            this.getList()
        },
        methods:{
            getList:function () {
                this.list=[
                    {
                        "id":13,
                        "title":"饿哦无无多多多多付付大大大",
                        "add_time":new Date(),
                        "zhanyao":"等等等凤飞飞的打开看看",
                        "click":1,
                        "img_url":"../../../statics/image/1.jpg"
                    },
                    {
                        "id":13,
                        "title":"饿哦无无多多多多付付大大大",
                        "add_time":new Date(),
                        "zhanyao":"等等等凤飞飞的打开看看",
                        "click":1,
                        "img_url":"../../../statics/image/1.jpg"
                    },
                    {
                        "id":13,
                        "title":"饿哦无无多多多多付付大大大",
                        "add_time":new Date(),
                        "zhanyao":"等等等凤飞飞的打开看看",
                        "click":1,
                        "img_url":"../../../statics/image/1.jpg"
                    },
                    {
                        "id":13,
                        "title":"饿哦无无多多多多付付大大大",
                        "add_time":new Date(),
                        "zhanyao":"等等等凤飞飞的打开看看",
                        "click":1,
                        "img_url":"../../../statics/image/1.jpg"
                    },

                ]
            }
        }
    }
</script>

<style scoped>
    .mui-table-view img{
        height: 80px;
        width: 80px;
    }
    .mui-table-view .mui-media-object{
        max-width:80px;
        line-height:80px;
    }
    .fn{
        margin-top:1em ;
        font-size: 12px;
        color:paleturquoise;
    }
    .last{
        margin-left:20px;
    }
</style>