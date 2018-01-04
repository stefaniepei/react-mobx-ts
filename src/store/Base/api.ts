import axios from '../axios'

// 登录
export function userLogin(params: any) {
  return axios.post('/user/login', params, { 'withCredentials': true })
}

// 登出 token
export function userLogoutToken(params: any) {
  return axios.post('/login/logout', params, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('userToken') } })
}

