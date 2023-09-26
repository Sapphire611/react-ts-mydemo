// 用户模块
import { action, makeAutoObservable, observable } from 'mobx';
import { request } from '@/utils';

interface userInfo {
  id?: string;
  username?: string;
  iat?: number;
  exp?: number;
}

class UserStore {
  @observable userInfo: userInfo = {};

  @action setUserInfo = (newUserInfo: userInfo) => {
    this.userInfo = newUserInfo;
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getUserInfo() {
    const res = await request.get('/auth/profile');
    // this.userInfo = res.data;
    this.setUserInfo(res.data);
  }
}

export default UserStore;
