
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const files = require.context('.', true, /\.js$/);
let configRouters = [];
files.keys().forEach(key => {
    if (key === './index.js') return;
    configRouters = configRouters.concat(files(key).default);
});
export default new Router({
    routes: configRouters
})
