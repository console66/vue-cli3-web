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
        const test = 'http://192.172.9.85:8002/server';
        const prod = 'http://192.172.9.85:8002/server';
        return this.isTest ? test : prod;
    },
    // base url
    get imgUrl () {
        const test = 'http://hchysj-xpl.oss-cn-hangzhou.aliyuncs.com';
        const prod = 'http://hchysj-xpl.oss-cn-hangzhou.aliyuncs.com';
        return this.isTest ? test : prod;
    },
    // 模板
    get model () {
        return [
            {
                name: '素材中心',
                id: 1
            },
            {
                name: '模板中心',
                id: 2
            }
           ]
    }
};

module.exports = exports;
