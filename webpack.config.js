const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    devtool:false,
    entry:'./src/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.css$/, use:['style-loader', 'css-loader']
            }
        ],
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}