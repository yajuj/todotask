import React from 'react';
import { useTodosContext } from '../context/todo-context';
import { Todo } from '../types/todo';

const TodoForm: React.FC = () => {
  const { addTodo } = useTodosContext();
  const [text, setText] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  const handleSubmit = () => {
    const todo: Todo = {
      id: Date.now() + Math.random(),
      body: text,
      isComplited: false,
      created_At: new Date(),
    };
    addTodo(todo);
    setText('');
  };
  return (
    <div className='controls'>
      <input
        className='todo-input'
        type='text'
        placeholder='What needs to be done?'
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};

export default TodoForm;
