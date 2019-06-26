import { postFormData } from '../ajax.js';
import api from './api.js';
const actions = {
    getRegisterActions ({commit}, params,) {
        return  postFormData(api.register, params)
    },
    getSendMessageActions ({commit}, params) {
        return  postFormData(api.SendMessageJob, params)
    },
    getLoginActions ({commit}, params) {
        return  postFormData(api.login, params)
    },
    getResetpwdActions ({commit}, params) {
        return  postFormData(api.resetpwd, params)
    },
    getUserInfoActions ({commit}) {
       return postFormData(api.userInfo).then(res =>{
            if(res.code === 0) {
                commit( 'GET_USERINFO', res.data.userinfo)
            }
       })
    },
    getLogoutActions ({commit}, params) {
        return  postFormData(api.logout, params)
    },
    getChangemobileActions ({commit}, params) {
        return  postFormData(api.changemobile, params)
    },
    getGetAgreementActions ({commit}, params) {
        return  postFormData(api.getAgreement, params)
    },

};
export default actions;
