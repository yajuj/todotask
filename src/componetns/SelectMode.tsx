import React from 'react';
import { useTodosContext } from '../context/todo-context';

const SelectMode = () => {
  const { setMode, mode } = useTodosContext();
  return (
    <>
      <div
        onClick={() => setMode('all')}
        className={`sort_item ${mode === 'all' ? 'active' : ''}`}
      >
        All
      </div>
      <div
        onClick={() => setMode('complited')}
        className={`sort_item ${mode === 'complited' ? 'active' : ''}`}
      >
        Complited
      </div>
      <div
        onClick={() => setMode('active')}
        className={`sort_item ${mode === 'active' ? 'active' : ''}`}
      >
        Active
      </div>
    </>
  );
};

export default SelectMode;
