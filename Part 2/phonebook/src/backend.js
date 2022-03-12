import axios from "axios"

const url='http://localhost:3001/names';


const getAll=()=>{
    const promise=axios.get(url)
    return promise.then(response=>response.data);
}
const create=(obj)=>{
    const promise=axios.post(url,obj)
    return promise.then(response=>response.data)
}
const update=()=>{}
const remove=()=>{}

export default {getAll,create,update,remove};
