import { mapState} from  'vuex'
export const myMixin = {
    computed:{
        ...mapState({
            userInfo: state =>state.login.userInfo
        })
    },
    methods: {
        showMessages(message = '错了哦，这是一条错误消息',  type='success', duration = 1000, showClose = false,) {
            this.$message({
                showClose: showClose,
                message: message,
                type:  type,
                duration: duration
            });
        },
        // 去登录
        goLoginPage() {
            this.$router.push({
                path: '/login',
                query:{ type: 0 } // 0是登录 1是注册
            })
        }

    }
}
