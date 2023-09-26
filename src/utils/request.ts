import axios from 'axios';
import { clearToken, getToken } from './token';

export const request = axios.create({
  baseURL: 'http://127.0.0.1:19061/api/v1',
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  error => {
    if (error.response.status === 401) {
      // 删除token
      clearToken();
      // 跳转到登录页
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default request;
