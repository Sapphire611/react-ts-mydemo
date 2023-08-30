import { useStore } from '@/store';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.scss';

interface LoginValues {
  name: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  const navigate = useNavigate();
  const { loginStore } = useStore();
  const onFinish = async (values: LoginValues) => {
    console.debug(values);
    const { name, password } = values;
    try {
      const result = await loginStore.login(name, password);
      if (result !== undefined) {
        navigate('/');
      }
    } catch (e: any) {
      console.error(e.response?.data?.message || '登录失败');
    }
  };

  return (
    <div className="login">
      <Card className="login-container">
        <h1>Login</h1>
        <Form validateTrigger={['onBlur', 'onChange']} onFinish={onFinish}>
          <Form.Item name="name" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input size="large" placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input type="password" size="large" placeholder="请输入密码" />
          </Form.Item>
          {/** valuePropName = 设置子节点的值的属性*/}
          <Form.Item name="remember" valuePropName="checked" rules={[{ required: true, message: '请同意用户协议' }]}>
            <Checkbox className="login-checkbox-label">我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
