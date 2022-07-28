import React, { useState } from 'react';
import './todoForm.css';

const TodoForm = () => {
  const [showTodos, setShowTodos] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleArrowClick = () => {
    setShowTodos(!showTodos);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  return (
    <div className='todo'>
      <h1 className='todo__title'>todos</h1>

      <form 
        className='todo__form'
      >
        <i 
          className={`ri-arrow-up-s-line todo__arrow ${showTodos ? 'todo__arrow__active' : ''}`}
          onClick={handleArrowClick}
        ></i>
        <input 
          className='todo__input'
          type="text"
          name='todo__input'
          onChange={(e) => handleInputChange(e)}
          placeholder='What needs to be done?'
        />
      </form>
    </div>
  )
}

export default TodoForm