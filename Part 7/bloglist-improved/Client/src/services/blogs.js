import axios from 'axios'
const baseUrl = '/api/blogs'
let token=null
const setToken= newToken =>
{
  token =`bearer ${newToken}`
 // console.log(token)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const setAll = async (blog) =>{
 // console.log(token)
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl,blog,config)
  return response;
}
const updateComment=async(id,blog)=>{
  const url=baseUrl+"/"+id;
  console.log(url,blog)
  const response=await axios.put(url,blog)
  return response;
}
const updateAll= async (id,blog)=>{
  const url=baseUrl+'/'+id;
  const response= await axios.put(url,blog)
  return response;
}

const deleteAll = async (id)=>{
  const config = {
    headers: { Authorization: token },
  }
  const url=baseUrl+'/'+id;
  const response=await axios.delete(url,config);
  return response;
}
const blogService={ getAll ,setAll, setToken,updateAll,deleteAll,updateComment}
export default blogService