import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'produciton' ? 'deployment link here' : 'https://localhost:3000'

const api = axios.create({
  baseURL: baseURL
})






export default api;