import axios from "../util/request"

export function restartInterfaceServer(data){
    return axios.request({
        url:'/manager/restartInterfaceServer',
        method:"GET",
        data:data
    })
}

export function shutDownInterfaceServer(data){
    return axios.request({
        url:'/manager/shutDownInterfaceServer',
        method:"GET",
        data:data
    })
}

export function getServerStatus(data){
    return axios.request({
        url:'/manager/getServerStatus',
        method:"GET",
        data:data
    })
}