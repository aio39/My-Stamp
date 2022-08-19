import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Content } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/templates/SideBar';
import MainPage from './pages/MainPage';
import SaveNewStampPage from './pages/SaveNewStampPage';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <>
      <Layout style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Layout>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="save" element={<SaveNewStampPage />}></Route>
              <Route path="setting" element={<SettingPage />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
