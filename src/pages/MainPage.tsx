import { useLocation } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import StampItemList from '../components/templates/StampItemLIst';

const MainPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <SearchInput />
      <StampItemList />
      <h1>{pathname}</h1>
    </div>
  );
};

export default MainPage;
