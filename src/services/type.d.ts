// banner 轮播图接口
export interface bannersItem {
    imageUrl: string;
    targetId: number
}
export interface bannersRes {
    banners: bannersItem[];
    code: number;
}

// 每日推荐
export interface alItem {
    id:number;
    name:string;
    pic:string;
    picUrl:string;
    pic_str:string;
}
export interface recommendItem{
    name:string;
    al: alItem;
    publishTime: number;
    ar: any[];
}
export interface recommendReasonsItem{
    songId:number;
    reason:string;
    reasonId:string;
}
export interface recommendRes{
    data: any;
    code: number;
    values: {
        dailySongs: recommendItem[];
        recommendReasons: recommendReasonsItem[];
    }
}
// 热搜列表
export interface hotListItem {
    alg: string;
    content: string;
    iconType: number;
    iconUrl: string;
    score: number;
    searchWord: string;
    source:number;
    url: string;
    id: number;
}
export interface hotListRes {
    code:number;
    hotList: hotListItem[];
}

// 推荐歌单
export interface recommendPlaylistItem {
    id: number;
    name: string;
    playCount: number;
    trackCount: number;
    picUrl: string;
}
export interface recommendPlaylistRes {
    code: number;
    data: {
        result: recommendPlaylistItem[]
    }
}
// 歌单详情
