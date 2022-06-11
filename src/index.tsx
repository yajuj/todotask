import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContext from './context/todo-context';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TodoContext>
    <App />
  </TodoContext>
);
