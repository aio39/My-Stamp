import { HomeOutlined, SaveOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Sider
      collapsible
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <HomeOutlined />
          <span>home</span>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <SaveOutlined />
          <span>new</span>
          <Link to="/save" />
        </Menu.Item>
        <Menu.Item key="3">
          <SettingOutlined />
          <span>new</span>
          <Link to="/setting" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
