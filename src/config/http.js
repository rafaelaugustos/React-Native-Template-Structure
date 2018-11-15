import axios from 'axios'
import { API_URL } from './'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type':  'application/json'
    }
})

instance.interceptors.response.use(interceptedRequest => {
    // Valida Token
})

export default instance