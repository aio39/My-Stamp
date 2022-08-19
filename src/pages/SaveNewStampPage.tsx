import { Button, Input } from 'antd';
import { useLocation } from 'react-router-dom';
import NewTagsInput from '../components/organisms/NewTagsInput';
import ImageSave from '../components/templates/ImageSave';
import NewIconInputModalButton from '../components/templates/NewIconInputModalButton';

const SaveNewStampPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <NewIconInputModalButton />
      <ImageSave />
      <Input.Group compact>
        <NewTagsInput />
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          placeholder="stamp name"
        />
        <Button type="primary">Submit</Button>
      </Input.Group>
    </div>
  );
};

export default SaveNewStampPage;
