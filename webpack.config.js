var path = require('path');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + "/public",
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
            }
        ]
    }
};
