
const api = {
    register: '/api/user/register', //注册
    SendMessageJob: '/api/sms/SendMessageJob', // 发送验证码
    login: '/api/user/login', // 登录
    resetpwd: '/api/user/resetpwd', //重置密码
    userInfo: '/api/user/userInfo', // 获取用户信息
    logout: '/api/user/logout', // 登出
    changemobile: '/api/user/changemobile', //修改手机号码
    getAgreement : '/api/user/GetAgreement' //协议获取接口

};

export default api;
