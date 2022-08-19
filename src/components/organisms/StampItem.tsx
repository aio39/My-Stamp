import { FC } from 'react';
import { Stamp } from '../../types/Stamp';

type Props = { stamp: Stamp };

const StampItem: FC<Props> = ({ stamp }) => {
  return <div>{stamp.title}</div>;
};

export default StampItem;
