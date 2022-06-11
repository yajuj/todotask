import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface ListTodosProps {
  todos: Todo[];
}

const ListTodos: React.FC<ListTodosProps> = ({ todos }) => {
  return (
    <div className='notes-container'>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ListTodos;
