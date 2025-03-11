import React from 'react';
import { Layout, theme } from 'antd';
import CommonAside from '../components/aside';
import CommonHeader from '../components/header';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const Main: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='main-container'>
      <CommonAside />
      <Layout>
        <CommonHeader />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        {/* 
        footer 可以显示备案信息
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default Main;
