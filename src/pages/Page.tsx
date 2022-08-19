import { useLocation } from 'react-router-dom';

const Page = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>{pathname}</h1>
    </div>
  );
};

export default Page;
