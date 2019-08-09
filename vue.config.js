const webpack = require('webpack')
const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            '$conf': path.resolve(__dirname, './src/project-config.js')
        }]);
    },
};
