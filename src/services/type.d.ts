
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
export interface recommendItem {
    name:string;
    al: alItem;
    publishTime: number;
}

export interface recommendReasonsItem {
    songId:number;
    reason:string;
    reasonId:string;
}
export interface recommendRes {
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

// 所有榜单 start
//  artistToplist 类型
export interface artistItem {
    first: string;
    third: number;
}
export interface artistToplist {
    name: string;
    coverUrl:string;
    upateFrequency: string;
    updateFrequency: string;
    artists: artistItem[]
}

//  list数据的类型
interface listItemtrackItem {
    first: string;
    second: string;
}
export interface listItem {
    name: string;
    coverImgUrl: string;
    coverImgId:number;
    tracks: listItemtrackItem[];
}


//  rewardToplist 类型
export interface artistsItem {
    name: string;
    id:number;
    img1v1Url: string;
    picId: number;
}
export interface album{
    artists: artistsItem[];
}
export interface songsItem {
    name: string;
    album: album;
    artists:album[];
}
export interface rewardToplist {
    name: string;
    coverUrl:string;
    songs: songsItem[]
}


export interface toplistRes {
    code: number;
    artistToplist: artistToplist[];
    list: listItem[];
    rewardToplist: rewardToplist;
}
// 所有榜单 end

// 歌单详情
export interface tracksItem {
    name: string;
    al: alItem;
    ar: arItem[];
}
export interface playlist{
    id:number;
    adType: number;
    commentThreadId: string;
    coverImgId: number;
    coverImgId_str: string;
    coverImgUrl: string;
    createTime: number;
    name:string;
    playlistType:number;
    tags:string[];
    tracks: tracksItem[]
}

export interface playlistDetailRes {
    code: number;
    playlist: playlist;
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



