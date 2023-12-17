import React from 'react';
import TodoList from '../../components/TodoList';
import AddTodo from '../../components/AddTodo';

const TodoApp = () => {
  return (
    <div className="todo-app">
      <div className="todo-header">
        <h1 className="todo-title">Today</h1>
        <button className="todo-menu-btn">...</button>
      </div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoApp;