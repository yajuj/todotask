import React, { ReactHTMLElement } from 'react';
import './App.css';
import ListTodos from './componetns/ListTodos';
import SelectMode from './componetns/SelectMode';
import TodoForm from './componetns/TodoForm';
import { useTodosContext } from './context/todo-context';
import { Todo } from './types/todo';

function App() {
  const { todos, filteredTodos, mode } = useTodosContext();

  return (
    <div className='app'>
      <header>TODOS</header>
      <div className='container'>
        <TodoForm />
        <>
          {mode === 'all' ? (
            <ListTodos todos={todos} />
          ) : (
            <ListTodos todos={filteredTodos} />
          )}
        </>
        <div className='sort'>
          <div className='sort_item '>{`${filteredTodos.length || 'no'} item${
            filteredTodos.length > 1 || filteredTodos.length === 0 ? 's' : ''
          } left.`}</div>
          <SelectMode />
        </div>
      </div>
    </div>
  );
}

export default App;
