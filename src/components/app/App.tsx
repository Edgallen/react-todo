import React from 'react';
import TodoForm from '../todoForm/todoForm';
import TodoList from '../todoList/todoList';
import './App.css';

function App() {
  return (
    <section className='app'>
      <TodoForm />
      <TodoList />
    </section>
  );
}

export default App;
