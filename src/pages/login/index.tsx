import { Button, message, notification } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './index.css'
import { useLocation } from 'react-router';
import { useEffect } from 'react';
const Login = () => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage;
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (errorMessage) {
      api.error({
        message: `登录失败！`,
        description: errorMessage,
        placement: 'top',
    });
    }
}, [errorMessage]);
 const login = () => {
     console.log("点击登录")
 }
  return <div className="login-container">
       {contextHolder}
      <div className="login_title">登录界面</div>
      <Button onClick={login} icon={<GithubOutlined />}>GitHub 登录</Button>
    </div> ;
};

export default Login;
