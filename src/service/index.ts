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