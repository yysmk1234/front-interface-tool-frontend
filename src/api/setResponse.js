import axios from "../util/request"

export function addResponse(data){
    return axios.request({
        url:'/manager/addResponse',
        method:"POST",
        data:data
    })
}

export function getResponse(data){
    return axios.request({
        url:'/manager/getResponse',
        method:"POST",
        data:data
    })
}

export function getResponseById(data){
    return axios.request({
        url:'/manager/getResponseById',
        method:"POST",
        data:data
    })
}

export function updateResponseById(data){
    return axios.request({
        url:'/manager/updateResponseById',
        method:"POST",
        data:data
    })
}