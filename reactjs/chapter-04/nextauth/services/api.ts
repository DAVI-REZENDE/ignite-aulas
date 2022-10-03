import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['nextauth.token']}`
  }
})

api.interceptors.response.use(response => response, (error: AxiosError) => {
  if(error.response.status === 401) {
    if(error.response.data?.code === 'token.expired') {
      
    } else {

    }
  }
})