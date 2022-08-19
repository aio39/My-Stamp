import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import todoModel from '../../models/todoModel';
import ImageUploadBox from '../atoms/ImageUploadBox';
import NewTagsInput from '../organisms/NewTagsInput';

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
    const todo = await todoModel.create('test');
    console.log(todo);
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
        <NewTagsInput />
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
