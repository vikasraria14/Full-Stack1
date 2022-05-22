import axios from "axios"

const url='http://localhost:3001/names';


const getAll=()=>{
    const promise=axios.get(url)
    return promise.then(response=>response.data);
}
const create=(obj)=>{
    const promise=axios.post(url,obj)
   // console.log(promise)
    return promise.then(response=>response.data)
}
const update=(id,obj)=>{
    const promise=axios.put(url+'/'+id,obj)
    return promise.then(response=>response.data)
}
const remove=(id)=>{
    const promise= axios.delete(url+'/'+id);
    return promise
}

export default {getAll,create,update,remove};
