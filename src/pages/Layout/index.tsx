import { DiffOutlined, EditOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Popconfirm } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './index.scss';
import { useStore } from '@/store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
const { Header, Sider } = Layout;

const GeekLayout: React.FC = () => {
  const { userStore, loginStore } = useStore();
  const navigate = useNavigate();

  const onLogout = () => {
    loginStore.logOut();
    navigate('/login');
  };

  useEffect(() => {
    try {
      userStore.getUserInfo();
    } catch {}
  }, [userStore]);

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="logo-text">
          <div className="name">Photo CMS</div>
        </div>
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.username}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              { key: '/', icon: <HomeOutlined />, label: <Link to="/">数据概览</Link> },
              { key: '/article', icon: <DiffOutlined />, label: <Link to="/article">照片管理</Link> },
              { key: '/publish', icon: <EditOutlined />, label: <Link to="/publish">发布照骗</Link> },
            ]}
          />
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由默认页面 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default observer(GeekLayout);
