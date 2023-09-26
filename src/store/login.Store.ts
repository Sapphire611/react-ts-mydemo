// 登录模块
import { request } from '@/utils';
import { clearToken, getToken, setToken } from '@/utils/token';
import md5 from 'md5';
import { makeAutoObservable } from 'mobx';

export default class LoginStore {
  token: string;

  constructor() {
    this.token = getToken() ?? '';
    makeAutoObservable(this);
  }
  // 登录
  login = async (name: string, password: string) => {
    const res = await request.post('/auth/login', {
      name,
      password: md5(password),
    }); 
    if (res.data.access_token) {
      this.token = res.data.access_token;
      setToken(res.data.access_token);
      return true;
    } else {
      return false;
    }
  };

  logOut = () => {
    this.token = '';
    clearToken();
  }
}
