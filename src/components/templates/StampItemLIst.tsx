import { Space } from 'antd';
import { useEffect, useState } from 'react';
import stampModel from '../../models/stampModel';
import { Stamp } from '../../types/Stamp';
import StampItem from '../organisms/StampItem';

const StampItemList = () => {
  const [stamps, setStamps] = useState<Stamp[]>([]);

  useEffect(() => {
    stampModel.all().then((stamps) => {
      console.log(stamps);
      setStamps(stamps);
    });
  }, []);

  return (
    <Space
      direction="horizontal"
      size="middle"
      style={{ display: 'flex', width: '100%', height: '100%' }}
    >
      {stamps.map((stamp) => {
        return <StampItem key={stamp.id} stamp={stamp} />;
      })}
    </Space>
  );
};

export default StampItemList;
