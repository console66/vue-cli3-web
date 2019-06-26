import axios from 'axios';
import store from './index'
import qs from 'qs'
import { removeToken, getToken } from '@/utils/auth'
var instance = axios.create({
    baseURL: $conf.baseUrl,
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

/* 返回拦截器
axios的拦截器有个奇怪的设定：如果没有reject则认为成功，即使是在失败回调函数里面也这样。
但有些错误处理（比如登出和断网）希望在拦截器里面处理后不再往外抛，这时需要中断promise，
虽然axios官方不建议这么做，但有个取巧的方案是返回一个空的promise：return new Promise(() => {})
*/
instance.interceptors.response.use(function (response) {
    // token 过期  1046 移除token 和 用户信息
    if (response.data.code === 1046) {
        removeToken();
        store.commit('GET_USERINFO', '');
        location.reload()
    }else {
        return response.data;
    }

}, function (error) {
    if (error.response) {
    // 请求已发送，服务器回复状态码在2xx之外

        return Promise.reject(error.response);
    } else if (error.request) {
    // 请求已发送，但没有收到回应
        return Promise.reject(error.request);
    } else {
    // 请求尚未发送就失败了，可以认为是某些设置引发的问题（代码问题、跨域、断网）
    // 建议错误在这里拦截处理，中断promise
    // return new Promise(() => {})
        return Promise.reject(error);
    }
    // return Promise.reject(error)
});


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return instance.get(url, {
        params : params,
        headers : {
            token: getToken()
        }
    }).then(res => {
        return Promise.resolve(res);
    });
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,params = {},headers ={}){
     let odj = Object.assign({ token: getToken()}, headers);
    return instance.post(url, params,{
        headers: odj
    }).then(res => {
        return Promise.resolve(res);
    });
}
/**
 * 封装post form-data请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postFormData(url,params = {}){
    return instance.post(url, qs.stringify(params),{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            token: getToken()
        }
    }).then(res => {
        return Promise.resolve(res);
    });
}
export default instance;
