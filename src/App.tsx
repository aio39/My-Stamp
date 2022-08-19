import 'antd/dist/antd.css';
import './App.css';
import SearchInput from './components/SearchInput';
import NewIconInputModalButton from './components/templates/NewIconInputModalButton';
import StampItemList from './components/templates/StampItemLIst';

function App() {
  return (
    <>
      <SearchInput />
      <NewIconInputModalButton />
      <StampItemList />
    </>
  );
}

export default App;
