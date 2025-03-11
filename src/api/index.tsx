import request from "./axios"

const isProductEnvironment = process.env.REACT_APP_IS_PROD_ENV
const baseUrl = isProductEnvironment? 'https://www.ykytools.top/api' :'http://localhost:8080/api'

export const getUser = ()=>{
    return request(
        {
            baseURL:baseUrl,
            url:'/userInfos/1',
            method:'get',
        }
    )
}

export const loginInfo =()=>{
    return request(
        {
            baseURL:baseUrl,
            url:'/loginInfo',
            method:'get',
        }
    )
}

export const logout =()=>{
    window.location.href=baseUrl+'/logout'
}

