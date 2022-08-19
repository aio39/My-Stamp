import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Content } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchInput from './components/SearchInput';
import ImageSave from './components/templates/ImageSave';
import NewIconInputModalButton from './components/templates/NewIconInputModalButton';
import SideBar from './components/templates/SideBar';
import StampItemList from './components/templates/StampItemLIst';
import Page from './pages/Page';

function App() {
  return (
    <>
      <Layout style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Layout>
          {/* <Header>Header</Header> */}
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/" element={<Page />}>
                <Route index element={<Page />} />
                <Route path="create" element={<Page />}>
                  <Route path=":teamId" element={<Page />} />
                  <Route path="new" element={<Page />} />
                  <Route index element={<Page />} />
                </Route>
                <Route path="setting" element={<Page />}></Route>
              </Route>
            </Routes>
            <Layout>
              <SearchInput />
              <NewIconInputModalButton />
              <StampItemList />
              <ImageSave />
            </Layout>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </>
  );
}

export default App;
