import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL || '', // api 的 base_url
  timeout: 1000*10, // 请求超时时间
  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
})

// request拦截器
service.interceptors.request.use(
  config => {
    let token = localStorage.getItem('sys_token') || ''
    if (token) {
      config.headers['sys_token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if(res.status === 40313) {
      window.open(res.data, "_self")
    }
    return { response, data: res }
  },
  error => {
    console.log('err：', error.response) // for debug
    return Promise.reject(error && error.response && error.response.data)
  }
)

export default service