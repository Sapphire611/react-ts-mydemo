import { DiffOutlined, EditOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Popconfirm } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import './index.scss';

const { Header, Sider } = Layout;

const GeekLayout: React.FC = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="logo-text">
          <div className="name">React-ts-myDemo</div>
        </div>
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to="/">数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to="/article">内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to="/publish">发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由默认页面 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;
