import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';

const SideBar = () => {
  return (
    <Sider
      collapsible
      style={{
        overflow: 'auto',
        height: '100vh',
        // position: 'fixed',
        // left: 0,
        // top: 0,
        // bottom: 0,
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
