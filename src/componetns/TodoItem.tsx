import React from 'react';
import { useTodosContext } from '../context/todo-context';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodosContext();

  const _toggleTodo = () => toggleTodo(todo.id);
  const _removeTodo = () => removeTodo(todo.id);
  return (
    <div data-testid='todo' className='todo'>
      <label htmlFor='check'>
        <input
          type='checkbox'
          checked={todo.isComplited}
          onChange={() => {}}
          name=''
          id='check'
          data-testid='checkbox'
        />
        <span data-testid='toggle' onClick={_toggleTodo} className='checkbox'>
          <span className='icon'>✓</span>
        </span>
      </label>
      <div className='body'>{todo.body}</div>
      <div
        data-testid='remove-btn'
        onClick={_removeTodo}
        className='remove-btn'
      >
        &#10005;
      </div>
    </div>
  );
};

export default TodoItem;
