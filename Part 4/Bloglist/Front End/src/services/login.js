import axios from 'axios'

const baseUrl='/api/login'

const setAll=async (loginData) =>{
    const response = await axios.post(baseUrl,loginData)
    return response.data
}
export default setAll;