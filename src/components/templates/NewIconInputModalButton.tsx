import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import stampModel from '../../models/stampModel';
import ImageUploadBox from '../atoms/ImageUploadBox';

const NewIconInputModalButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const handleClick = async () => {
    const stamp = await stampModel.create('test');
    console.log(stamp);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
        <ImageUploadBox />
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            defaultValue="https://ant.design"
          />
          <Button type="primary" onClick={handleClick}>
            Submit
          </Button>
        </Input.Group>
      </Modal>
    </>
  );
};

export default NewIconInputModalButton;
