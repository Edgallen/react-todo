import React from 'react';
import { TodoProvider } from '../../services/todoContext';
import TodoForm from '../todoForm/todoForm';
import TodoList from '../todoList/todoList';
import './App.css';

function App() {
  return (
    <section className='app'>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </section>
  );
}

export default App;
