import request from "./request";

import type { bannersRes, recommendRes } from "./type";


// 获取轮播图数据
export const getBannerApi = () => {
    return request<bannersRes>({ url: "/banner" });
}

// 每日推荐
export const recommendSongsApi = () => {
    return request<recommendRes>({ url: `/recommend/songs` })
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