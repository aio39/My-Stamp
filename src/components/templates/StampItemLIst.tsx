import { useEffect, useState } from 'react';
import stampModel from '../../models/stampModel';
import { Stamp } from '../../types/Stamp';
import StampItem from '../organisms/StampItem';

const StampItemList = () => {
  const [stamps, setStamps] = useState<Stamp[]>([]);

  useEffect(() => {
    stampModel.all().then((stamps) => {
      setStamps(stamps);
    });
  }, []);

  return (
    <div>
      {stamps.map((stamp) => {
        return <StampItem key={stamp.id} stamp={stamp} />;
      })}
    </div>
  );
};

export default StampItemList;
