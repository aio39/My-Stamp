import { Button, Input, message, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import stampModel from '../../models/stampModel';
import { Stamp } from '../../types/Stamp';

type Props = { stamp: Stamp };

const UpdateStampModalBtn: React.FC<Props> = ({
  stamp: { content: oldContent, id, path, title: oldTitle },
}) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    stampModel
      .update({ content, id, title, path: '' })
      .then(() => {
        setVisible(false);
        message.success('Stamp updated!', 2);
      })
      .catch(() => {
        message.error('Error updating stamp', 2);
      })
      .finally(() => {
        setConfirmLoading(false);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        confirmLoading={confirmLoading}
      >
        <Input.Group compact>
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
        </Input.Group>
      </Modal>
    </>
  );
};

export default UpdateStampModalBtn;
