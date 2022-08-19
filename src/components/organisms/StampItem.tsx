import Card from 'antd/lib/card/Card';
import { FC } from 'react';
import { Stamp } from '../../types/Stamp';

type Props = { stamp: Stamp };

const StampItem: FC<Props> = ({ stamp }) => {
  return (
    <Card size="default">
      <h1>{stamp.title}</h1>
      <h2> {stamp.content}</h2>
    </Card>
  );
};

export default StampItem;
