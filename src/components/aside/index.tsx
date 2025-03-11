import {
    HomeOutlined,
    EditOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {useNavigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
const {Sider} = Layout;

const items = [
    {
        key: '/home',
        icon: <HomeOutlined/>,
        label: '主页'
    },
    {
        key: '/oauthConfig',
        icon: <EditOutlined />,
        label: '权限配置'
    },
]

const CommonAside = () => {
    //获取展开收起的状态
    const collapsed = useSelector((state: any) => state.tab.isCollapse)
    const navigate = useNavigate()
    const location = useLocation()
    const selectedKey = location.pathname;

    const selectMenu = (e: any) => {
        navigate(e.key)
    }
    return (
        <Sider trigger={null} collapsed={collapsed}>
            <h3 className="app-name">{collapsed ? '馨园' : '馨园后台管理'}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/home']}
                selectedKeys={[selectedKey]}
                items={items}
                onClick={selectMenu}
                style={{
                    height: '100%'
                }}/>
        </Sider>
    );
}

export default CommonAside