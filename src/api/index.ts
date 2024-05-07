import axios from "axios";

export let cancel:any
export const fetchApi = async(url:any)=>{
    try {
        const responce = await axios.get(url,{cancelToken:new axios.CancelToken(c => cancel=c)})
    } catch (Error) {

    }
}