import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { Button, Layout, Dropdown } from 'antd';
import { useDispatch } from 'react-redux'
import { MenuFoldOutlined } from '@ant-design/icons'
import './index.css'
import { useNavigate } from "react-router-dom";
import { collapseMenu } from "../../store/reducers/tab";
import { loginInfo, logout as logoutRequest } from "../../api";

const { Header } = Layout;
const CommonHeader = () => {
  const navigate = useNavigate()
  const [userInfo,setUserInfo] = useState<any>()
  const logout = () => {
    logoutRequest()
    console.log("成功登出");
  }
  const personalCenter = () => {
    navigate("/personalCenter")
    console.log("进入个人中心")
  }
  const dispatch = useDispatch()
  const setCollapsed = () => {
    dispatch(collapseMenu())
  }
  const items = [
    {
      key: '1',
      label: (
        <a onClick={personalCenter} target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={logout} target="_blank" rel="noopener noreferrer">
          退出
        </a>
      ),
    },
  ];

  const fetchUserInfo = async ()=>{
      console.log("获取用户信息")
 }
 useEffect(()=>{fetchUserInfo()},[])

  return (
    <Header className="header-container">
      <Button
        type="text"
        icon={<MenuFoldOutlined />}
        style={{
          fontSize: '16px',
          width: 64,
          height: 32,
          backgroundColor: '#fff'
        }}
        onClick={setCollapsed}
      />
      {userInfo &&
        <Dropdown menu={{ items }}>
          <div>
          <Avatar size={"large"} src={userInfo.avatar_url} />
          <span className="userName">{userInfo.login}</span>
          </div>
        </Dropdown>
      }
    </Header>
  );
}

export default CommonHeader
