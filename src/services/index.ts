import request from "./request";

import type { bannersRes, recommendRes, flutterRes } from "./type";


// 获取轮播图数据
export const getBannerApi = () => {
    return request<bannersRes>({ url: "/banner" });
}

// 每日推荐
export const recommendSongsApi = () => {
    return request<recommendRes>({ url: `/recommend/songs` })
}

// 心动模式数据
export const flutterListApi = (id: string) =>{
    return request<flutterRes>({ 
        url: '/playmode/intelligence/list',
        data:{
            pid:id
        }
    })
}

// 所有榜单
export const toplistApi = () => {
    return request({ url: '/toplist/detail' })
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