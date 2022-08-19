import { Button, Input, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageSave from '../components/templates/ImageSave';
import stampModel from '../models/stampModel';

const SaveNewStampPage = () => {
  const { pathname } = useLocation();
  const [originalFilePath, setOriginalFilePath] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const hide = message.loading('Action in progress..', 0);

    stampModel
      .create({
        content,
        title,
        path: originalFilePath,
      })
      .then((stamp) => {
        message.success('Stamp created!', 2);
      })
      .catch(() => message.error('Error creating stamp', 2))
      .finally(() => {
        hide();
      });
  };

  return (
    <div>
      <Input.Group compact>
        <ImageSave setPath={setOriginalFilePath} />
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          placeholder="stamp name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Input.Group>
    </div>
  );
};

export default SaveNewStampPage;
