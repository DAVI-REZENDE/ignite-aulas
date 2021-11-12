import axios from 'axios'

export const api = axios.create({
  baseURL: 'localhost://localhost:3000/api',
})