import axios from "axios";

const bac = 'https://6.react.pages.academy/wtw'
const timeuot = 5000

export const createAPI = () => {
  const api = axios.create({
    baseURL: bac,
    timeout: timeuot,
  })

  const res = (response) => response

  const ups = (err) => {throw err}

  api.interceptors.response.use(res, ups)

  return api
}


