import request from "./request";
import type { bannersRes, recommendRes } from './type'

// 获取轮播图
export const bannerApi = () => {
    return request<bannersRes>({ url: '/banner' })
}

// 获取推荐歌单
export const recommendSongsApi = () => {
    return request<recommendRes>({ url: '/recommend/songs' })
}