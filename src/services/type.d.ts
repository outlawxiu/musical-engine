<<<<<<< HEAD
// banner 轮播图接口
=======
>>>>>>> yds
export interface bannersItem {
    imageUrl: string;
    targetId: number
}
<<<<<<< HEAD
=======
//轮播图
>>>>>>> yds
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
<<<<<<< HEAD
    code: number;
    values: {
=======
    // data: any;
    code: number;
    data: {
>>>>>>> yds
        dailySongs: recommendItem[];
        recommendReasons: recommendReasonsItem[];
    }
}
<<<<<<< HEAD


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



=======
>>>>>>> yds
