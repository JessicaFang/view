var htmlwp=require("html-webpack-plugin");
var VueLoaderPlugin=require("vue-loader/lib/plugin");
module.exports= {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.(png|jpg|git|ttf)$/,
                loader: "url-loader?limit=10000"//limit表示图片的大小为40K是临界值，
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }

        ]
    },
    plugins: [
        new htmlwp({
            title: "首页",
            filename: "index.html",
            template: "index1.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new VueLoaderPlugin()
    ]
};
