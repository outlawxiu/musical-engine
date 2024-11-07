
// banner 轮播图接口
export interface bannersItem {
    imageUrl: string;
    targetId: number
}

//轮播图
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
}

export interface recommendReasonsItem{
    songId:number;
    reason:string;
    reasonId:string;
}
export interface recommendRes{
    code: number;
    data: {
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
}
export interface hotListRes {
    code:number;
    hotList: hotListItem[];
}



// 心动模式
export interface arItem {
    name: string;
    id: number;
}
export interface songInfoItem {
    no:string;
    name:string;
    privilege:string;
    al: alItem[];
}

export interface flutterListItem{
    id: number;
    songInfo: songInfoItem;
}

export interface flutterRes {
    code: number;
    data:flutterListItem[]
}