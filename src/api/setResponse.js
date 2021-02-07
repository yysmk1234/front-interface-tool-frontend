import axios from "../util/request"

export function addResponse(data){
    return axios.request({
        method:"POST",
        data:data
    })
}