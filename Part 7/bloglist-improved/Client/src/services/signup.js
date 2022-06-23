import axios from 'axios'

const baseUrl='/api/users'

const setAll=async (signupData) =>{
    const response = await axios.post(baseUrl,signupData)
    console.log("ResmonSignUp",response.data)
    return response.data
}
export default setAll;