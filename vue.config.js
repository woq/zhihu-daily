// vue.config.js
module.exports = {
    devServer: {
        open: true,
        host: "localhost",
        port: '8080',
        https: false,
        hotOnly: false,
        hot: true,
        // proxy: {
        //     '/api': {
        //         target: 'https://news-at.zhihu.com/', //对应自己的接口
        //         changeOrigin: true,
        //         secure: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    publicPath:process.env.NODE_ENV === 'production'
        ? '/zhihu-daily/'
        : '/'
}