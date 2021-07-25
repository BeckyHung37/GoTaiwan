'use strict';
const path=require("path");
module.exports={
    //建置的模式，預設值為production（叫做上線的模式），不寫也沒關係。另一個選擇是development，通常開發中會用development，要上線才會換成production
    mode:"development",
    //入口
    entry:"./src/index.js",
    //輸出
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist") //dirname代表目前現在這個路徑react_practice_project
    },
    //DevServer設定
    devServer:{
        contentBase:"./dist",
        inline:true,
        historyApiFallback:true
    },
    //模組載入規則
    module:{
        rules:[
            //CSS樣式表載入規則
            {
                test:/\.css$/i, //此行代表.css結尾，就套入下方的載入器
                use:["style-loader","css-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                    }
            },
            {    test: /\.(png|jpg|gif|svg)$/i,
                use: [
                {
                loader: 'url-loader',
                }
                ]
            }
        ]
    }
};