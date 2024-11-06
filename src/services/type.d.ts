export interface bannersItem {
    imageUrl: string;
    targetId: number
}


export interface bannersRes {
    banners: bannersItem[];
    code: number;
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



