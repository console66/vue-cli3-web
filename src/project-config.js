'use strict';
var exports = {
    // 是否是开发环境和测试环境
    get isTest () {
        let env = process.env.NODE_ENV === 'development' ? 'development' :
            process.env.VUE_APP_TITLE === 'buildTest' ? 'buildTest' : 'production';
        return env === 'development' || env === 'buildTest';
    },
    // base url
    get baseUrl () {
        const test = '';
        const prod = '';
        return this.isTest ? test : prod;
    },

};

module.exports = exports;
