import axios from "axios";

const instance = axios.create()

const intercepion = (axiosInstance: any) => {
    // 添加请求拦截器
    axiosInstance.interceptors.request.use((config: any) => {
        // 在发送请求之前做些什么
        return config;
    }, function (error: any) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axiosInstance.interceptors.response.use((response: any) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
    },
        // function (error: any) {
        //     if (error.code == "ERR_NETWORK") {
        //         // 跳转到登录页面
        //         window.location.href = '/login';
        //         return Promise.reject(error);
        //     }
        //     // 超出 2xx 范围的状态码都会触发该函数。
        //     // 对响应错误做点什么
        //     return error.response.data;;
        // }
    );
}

// //还有其他 parameter 类型，详见 https://axios-http.com/docs/req_config
// interface AxiosExtraParameter{
//     url:string,
//     method:string,
//     params:object,
//     data:object | string,
// }

const request = (parameters: any) => {
      const options = {
        ...parameters
    }
    intercepion(instance)
    return instance(options)
}

export default request
