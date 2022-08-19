import { useLocation } from 'react-router-dom';

const SettingPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>{pathname}</h1>
    </div>
  );
};

export default SettingPage;
