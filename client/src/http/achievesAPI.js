import {$authHost, $host} from "./index";

export const createAchieves = async (achieves) =>{
    const {data} = await $authHost.post('api/achieves', achieves)
    return data

}
export const fetchAchieves = async () =>{
    const {data} = await $host.get('api/achieves')

    return data

}

