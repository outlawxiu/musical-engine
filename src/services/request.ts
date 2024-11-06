const BaseURL = 'http://121.89.213.194:5001'

// 接口请求函数的参数类型
interface RequestParams {
    url: string;
    method?: 'GET' | 'POST' | 'PUT';
    data?: any;
    header?: any;
}

type ReponseType<T = AnyObject> = Omit<UniApp.RequestSuccessCallbackResult, 'data'> & { data: T };

const request = <T>({ 
    url,
    method = 'GET',
    data = {},
    header = {}
}: RequestParams) => {
    return new Promise<ReponseType<T>>((resolve, reject) => {
        uni.request({
            url : BaseURL + url, //仅为示例，并非真实接口地址。
            method,
            data,
            header,
<<<<<<< HEAD
            success: (res: ReponseType<{}>) => {
=======
            success: (res: ReponseType<T>) => {
>>>>>>> yds
                resolve(res)
            },
            fail: reject
        });
    })
}


export default request;