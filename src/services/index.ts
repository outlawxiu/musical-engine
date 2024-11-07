import request from "./request";

import type { bannersRes, recommendRes, flutterRes, toplistRes } from "./type";


// 获取轮播图数据
export const getBannerApi = () => {
    return request<bannersRes>({ url: "/banner" });
}

// 每日推荐
export const recommendSongsApi = () => {
    return request<recommendRes>({ url: `/recommend/songs` })
}

// 心动模式数据
export const flutterListApi = (id: string, pid: string) =>{
    return request<flutterRes>({ 
        url: '/playmode/intelligence/list',
        data:{
            pid,
            id
        }
    })
}

// 所有榜单
export const toplistApi = () => {
    return request<toplistRes>({ url: '/toplist/detail' })
}

// 歌单详情
export const playlistDetailApi = (id: string) => {
    return request({ url: '/playlist/detail', data: { id } })
}

// 热搜列表
export const searchHotApi = () => {
    return request({ url: '/search/hot/detail' })
}

// 搜索
export const searchApi = (keywords: string) => {
    return request({
        url: '/search',
        data: {
            keywords
        }
    })
}
//游客登陆 touristLogin
export const touristLogin = () => {
    return request({
        url: '/register/anonimous'
    })
}

//获取手机验证
export const getCodeLogin = (phone:number) => {
    return request({
        url: '/captcha/sent',
        data : {
            phone
        }
    })
}
//手机号验证码登录
export const getAndLogin = (phone:number , captcha :number) => {
    return request({
        url: '/captcha/verify',
        data : {
            phone,
            captcha
        }
    })
}

//获取二维码的key生成接口
export const getKey = () => {
    return request({
        url: '/login/qr/key',
        timestamp : Date.now(),
    })
}

//二维码生成接口
export const getQR = (key:string) => {
    return request({
        url: '/login/qr/create',
        data : {
            key,
            timestamp : Date.now(),
            qrimg:true
        }
    })
}
//. 二维码检测扫码状态接口
export const canLogin = (key:string) => {
    return request({
        url: '/login/qr/check',
        data : {
            key,
            timestamp : Date.now()
        }
    })
}
