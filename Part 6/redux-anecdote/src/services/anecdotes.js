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
const x={getAll,setAll}
export default x;