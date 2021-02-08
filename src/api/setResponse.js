import axios from "../util/request"

export function addResponse(data){
    return axios.request({
        url:'/response/add',
        method:"POST",
        data:data
    })
}