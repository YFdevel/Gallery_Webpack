const {resolve}=require("path");

exports.default={
    entry:"./js/index.js",
    mode:"development",
    output:{
        path:resolve(__dirname,"build"),
        filename:"main.[contenthash].js"
    }
}