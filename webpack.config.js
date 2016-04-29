var path = require('path');
module.exports = {
    entry: "./public/javascripts/greeter/greeter.ts",
    output: {
        filename: '[name].bundle.js'
    },
    resolve: {
        root:[path.join(__dirname,'node_modules')],
        extensions:['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};