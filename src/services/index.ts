import request from "./request";
import type { bannersRes } from "./type";


// 获取轮播图数据
export const getSongsApi = () => {
    return request<bannersRes>({ url: "/banner" });
}

