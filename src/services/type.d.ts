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
    // data: any;
    code: number;
    data: {
        dailySongs: recommendItem[];
        recommendReasons: recommendReasonsItem[];
    }
}
