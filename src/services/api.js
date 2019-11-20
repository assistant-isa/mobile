import axios from 'axios'



export const api = axios.create({
   baseURL: "https://testando2000.000webhostapp.com/ISA/CONSULTA.php"
})

export default api;