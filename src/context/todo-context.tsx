import { Mode } from 'fs';
import React, { Children, useContext, useState } from 'react';
import { Todo } from '../types/todo';

interface TodoContextState {
  todos: Todo[];
  filteredTodos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setMode: (mode: Mode) => void;
  mode: Mode;
}
interface TodoContextProps {
  children: React.ReactNode;
}

const Context = React.createContext<TodoContextState>({} as TodoContextState);

const TodoContext: React.FC<TodoContextProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [mode, _setMode] = useState<Mode>('all');

  const filteredTodos = todos.filter(todo =>
    mode === 'complited' ? todo.isComplited : !todo.isComplited
  );

  const addTodo = (todo: Todo) => {
    if (!todo.body.trim()) return;
    
    setTodos(prevState => [todo, ...prevState]);
  };

  const removeTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) todo.isComplited = !todo.isComplited;
        return todo;
      })
    );
  };

  const setMode = (mode: Mode) => {
    _setMode(mode);
  };

  return (
    <Context.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        removeTodo,
        toggleTodo,
        setMode,
        mode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoContext;

export const useTodosContext = () => useContext(Context);
