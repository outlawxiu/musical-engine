import request from "./request"

export const getBannersApi = () => {
    return request({ url:'https://zyxcl.xyz/music/api/banner' })
}

export const getHotApi = () => {
    return request({ url:'https://zyxcl.xyz/music/api/top/song?type=96' })
}

export const getMusicList = () => {
    return request({ url:'https://zyxcl.xyz/music/api/top/playlist/highquality?limit=10' })
}

export const getMusic = () => {
    return request({ url:'https://zyxcl.xyz/music/api/playlist/track/all?id=24381616&limit=10&offset=1' })

}

export const getMusicUrl = (id:number) => {
    return request({ url:'https://zyxcl.xyz/music/api/song/url?id='+id }) 
}