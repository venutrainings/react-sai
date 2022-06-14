import axios from "axios";

export  const fetchRegister = async(userData)=>{
    const response = await axios.post('/api/users',userData)
    if(response.data){
        localStorage.setItem('users',JSON.stringify(response.data));
    }
    return response.data;
}
