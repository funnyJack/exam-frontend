import { Button } from "antd"
import {useState} from "react";
import {UserInfoView} from "../../interfaces/UserInfo";
import {getUser} from "../../api";

const Home = ()=>{
    const [userInfo, setUserInfo] = useState<UserInfoView>()
    const getUserInfo = async ()=>{
            const result = await getUser()
         setUserInfo(result.data)
    }
    return <div>
        <h1>主页</h1>
        <Button type="primary" onClick={getUserInfo}>获取登录信息测试</Button>
        {userInfo && <div>
        <span>{userInfo.username} - {userInfo.password}</span>
        </div>}
    </div>
}
export default Home
