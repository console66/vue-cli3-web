/**
 * Created by kangshuou.Li on 2019/6/17.
 */
export default {
    /**
     * 传入毫秒，格式化时间
     * @param second 毫秒数
     * @param fmt 格式，常见：'yyyy-MM-dd hh:mm:ss.S'、'yyyy-M-d h:m:s.S'
     * @returns {*}
     */
    formateDate (second, fmt) {
        if (!second) {
            return '';
        }

        let date = new Date(second);// 后台时间转javascript时间戳
        let o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
            'H+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            S: date.getMilliseconds() // 毫秒
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
        }

        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr((o[k].toString()).length)));
            }
        }
        return fmt;
    },
    /**
     * 从href抓取需要的数据
     * @param paramString 属性名称
     * @returns {*} 属性的值
     */
    localSearchQuery (url , paramString) {
        'use strict';
        let search = url;
        let reg = new RegExp('[?&]' + paramString + '=([^&|^#]+)');
        let result = null;

        search.replace(reg, ($1, $2) => {
            result = decodeURIComponent($2);
        });
        return result;
    },
    //假如当前 Url 是 http// www. liangshunet. com/pub/item.aspx?t=osw7，则截取到的相对路径为：/pub/item.aspx。
    getUrlRelativePath(url){
        let relUrl = '';
        // 有http才进行去域名
        if (url.startsWith('http://')){
            let arrUrl = url.split("//");
            let start = arrUrl[1].indexOf("/");
             relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符　
            if(relUrl.indexOf("?") != -1){
                relUrl = relUrl.split("?")[0];
            }
        }　else {
            relUrl = url
        }


        return relUrl;　
    }

};
