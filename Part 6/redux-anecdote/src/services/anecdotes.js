import axios from 'axios'

const baseUrl="http://localhost:3003/anecdotes";

const getAll=async()=>{
    const response= await axios.get(baseUrl)
    return response.data
}

const setAll=async(dat)=>{
    const response=await axios.post(baseUrl,dat)
    return response.data
}

const updateAll=async(id,dat)=>{
    const url=baseUrl+'/'+id;
    const response=await axios.put(url,dat)
    return response.data
}
const x={getAll,setAll,updateAll}
export default x;