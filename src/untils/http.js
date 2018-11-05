/*
 * @Author: quinn.xie 
 * @Date: 2018-11-05 14:48:04 
 * @Last Modified by:   quinn.xie 
 * @Last Modified time: 2018-11-05 14:48:04 
 */

'use strict'

const root = 'https://www.easy-mock.com/mock/5bc83ee14645473183fb6359/daxiagu'

import axios from 'axios'
import qs from 'qs'

//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {    // 这里的config包含每次请求的内容
    // 判断localStorage中是否存在api_token
    if (localStorage.getItem('api_token')) {
        //  存在将api_token写入 request header
        config.headers.apiToken = `${localStorage.getItem('api_token')}`;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

//请求到结果的拦截处理
axios.interceptors.response.use(response => {
    //返回请求的正确结果
    return response
}, error => {
    //错误的请求处理，这里根据后台返回的状态吗返回相应的信息
    if(error && error.response){
        switch (error.response.status){
            case 400:
            error.message = '错误请求'
            break
            case 401:
                error.message = '未授权，请重新登录'
                break
            case 403:
                error.message = '拒绝访问'
                break
            case 404:
                error.message = '请求错误,未找到该资源'
                break
            case 405:
                error.message = '请求方法未允许'
                break
            case 408:
                error.message = '请求超时'
                break
            case 500:
                error.message = '服务器端出错'
                break
            case 501:
                error.message = '网络未实现'
                break
            case 502:
                error.message = '网络错误'
                break
            case 503:
                error.message = '服务不可用'
                break
            case 504:
                error.message = '网络超时'
                break
            case 505:
                error.message = 'http版本不支持该请求'
                break
            default:
                error.message = `连接错误${error.response.status}`
        }
    }else{
        error.message='链接服务器失败'
    }
    return Promise.reject(error.message)
});

function checkStatus (response) {
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 ||
            response.status === 400)) {
        return response
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode (res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
        // alert(res.data.error_msg)
    }
    return res
}
// 请求方式的配置
export default {
    post (url, data) {  //  post
        return axios({
            method: 'post',
            baseURL: root,
            url,
            data: qs.stringify(data),
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get (url, params) {  // get
        return axios({
            method: 'get',
            baseURL: root,
            url,
            params, // get 请求时带的参数
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    }
}