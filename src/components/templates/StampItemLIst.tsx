import { useEffect, useState } from 'react';
import todoModel from '../../models/todoModel';
import { Todo } from '../../types/Todo';
import StampItem from '../organisms/StampItem';

const StampItemList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    todoModel.all().then((todos) => {
      setTodos(todos);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return <StampItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default StampItemList;
