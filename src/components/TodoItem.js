// /src/components/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions/todoActions';


const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="toggle"
      />
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
