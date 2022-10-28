const {join} = require('path')

module.exports = {
    mode: 'production',
    entry:[
        join(__dirname, 'src', 'App.js')
    ],
    output:{
        path: join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module:{
        rules:[
        //     {
        //     test:/\.jsx?$/,
        //     exclude: /node_modules/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //           presets: [
        //             ['@babel/preset-env', "@babel/preset-react"]
        //           ]
        //         }
        //       }
        // },
        {
            test:/\.styl$/,
            exclude: /node_modules/,
            use: ['style-loader',{
                loader:'css-loader',
                options:{
                    importLoaders:2
                }
            },'stylus-loader'],
        }]
    },
}