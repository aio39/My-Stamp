import { useLocation } from 'react-router-dom';
import ImageSave from '../components/templates/ImageSave';
import NewIconInputModalButton from '../components/templates/NewIconInputModalButton';

const SaveNewStampPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <NewIconInputModalButton />
      <ImageSave />
      <h1>{pathname}</h1>
    </div>
  );
};

export default SaveNewStampPage;
