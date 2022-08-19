import { message } from 'antd';
import Card from 'antd/lib/card/Card';
import { FC } from 'react';
import stampModel from '../../models/stampModel';
import { Stamp } from '../../types/Stamp';
import UpdateStampModalBtn from '../templates/UpdateStampModalBtn';

type Props = { stamp: Stamp };

const DeleteStampBtn: FC<{ stampId: number }> = ({ stampId }) => {
  const handleDelete = () => {
    stampModel
      .remove(stampId)
      .then(() => {
        message.success('Stamp deleted!', 2);
      })
      .catch(() => {
        message.error('Error deleting stamp', 2);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

const StampItem: FC<Props> = ({ stamp }) => {
  return (
    <Card size="default">
      <h1>{stamp.title}</h1>
      <h2> {stamp.content}</h2>
      <DeleteStampBtn stampId={stamp.id} />
      <UpdateStampModalBtn stamp={stamp} />
    </Card>
  );
};

export default StampItem;
