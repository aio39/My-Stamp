import { FC } from 'react';
import { Todo } from '../../types/Todo';

type Props = { todo: Todo };

const StampItem: FC<Props> = ({ todo }) => {
  return <div>{todo.title}</div>;
};

export default StampItem;
