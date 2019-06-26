import {fetch} from '../ajax.js';
import api from './api.js';

const actions = {
    getSlideActions ({commit}, params) {
        return fetch(api.homeSlide , params)
    },
    getNavigationActions ({commit}, params) {
        return fetch(api.navigation , params)
    },
    getKeywordsActions ({commit}, params) {
        return fetch(api.getKeywords , params)
    },

};
export default actions;
