import axios from "../util/request"

export function addResponse(data){
    return axios.request({
        url:'/manager/addResponse',
        method:"POST",
        data:data
    })
}