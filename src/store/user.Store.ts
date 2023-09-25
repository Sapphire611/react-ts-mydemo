// 用户模块
import { makeAutoObservable } from 'mobx';
import { request } from '@/utils';

interface userInfo {
  id?: string;
  username?: string;
  iat?: number;
  exp?: number;
}

class UserStore {
  userInfo: userInfo = {};
  constructor() {
    makeAutoObservable(this);
  }
  async getUserInfo() {
    const res = await request.get('/auth/profile');
    this.userInfo = res.data;
  }
}

export default UserStore;
