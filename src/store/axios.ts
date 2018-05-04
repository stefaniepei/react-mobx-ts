import createBrowserHistory from 'history/createBrowserHistory'
import axios from 'axios'
import _debug from 'debug'
import { message } from 'antd'
import { UNAUTHORIZED, TIMEOUT } from '../utils/constant'
import Configs from '../common/Configs'
import ErrorCode from '../utils/errorCode'

const debug = _debug('promise:Axios')
const history = createBrowserHistory()

axios.defaults.timeout = TIMEOUT //tslint:disable-line

axios.defaults.baseURL = Configs.DEFAULT.SERVER

axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

//request to show loading
axios.interceptors.request.use((config) => {
  debug('[AxiosRequest]', config)
  const apiType = config.data && config.data.apiType ? config.data.apiType : ''
  switch (apiType) {
    case 'sso':
      config.baseURL = Configs.DEFAULT.SSO_SERVER
      break
    case 'token':
      config.baseURL = Configs.DEFAULT.TOKEN_SERVER
      break
    default:
      break
  }
  delete config.data.apiType
  return config
}, (error) => {

  return Promise.reject(error)
})

//response to hide loading
axios.interceptors.response.use((response) => {
  debug('[AxiosResponse]', response)
  const code = response.data.code
  if (code === UNAUTHORIZED) {
    message.error(response.data.message || '请登录')
    localStorage.removeItem('userToken')
    localStorage.removeItem('userLoginPermission')
    localStorage.removeItem('ssoToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('userInfo')
    history.replace('/login')
    location.reload()
  } else if (code === 0 || code === 1) {
    return response.data
  } else {
    if (ErrorCode.hasOwnProperty(String(code))) {
      response.data.errorMsg = (ErrorCode[String(code)]['zh_CN'])
    } else {
      response.data.errorMsg = response.data.message
    }
    return response.data
  }
}, (error) => {
  debug('[AxiosError]', error, error.response)
  let code = error.response.status
  if (code === UNAUTHORIZED) {
    message.error(error.response.statusText || '请登录')
    localStorage.removeItem('userToken')
    localStorage.removeItem('userLoginPermission')
    localStorage.removeItem('ssoToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('userInfo')
    history.replace('/login')
    location.reload()
  } else {
    if (ErrorCode.hasOwnProperty(String(code))) {
      message.error(ErrorCode[String(code)]['zh_CN'])
    } else {
      message.error(error.response.statusText)
    }
  }
})

// debug(axios.defaults)
export default axios
