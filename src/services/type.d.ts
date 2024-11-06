export interface bannersItem {
    imageUrl: string;
    targetId: number
}


export interface bannersRes {
    banners: bannersItem[];
    code: number;
}