import React, { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../services/todoContext';
import { TTodoItem } from '../../types';
import './todoForm.css';

const TodoForm = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState<TTodoItem>({
    text: '',
    status: 'active'
  });

  const { showList, toggleList } = useContext(TodoContext);

  const handleArrowClick = () => {
    if (toggleList) {
      toggleList();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      text: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (addTodo && toggleList) {
      addTodo(newTodo);
      setNewTodo({
        text: '',
        status: 'active'
      });
    }
  }

  return (
    <div className='todo'>
      <h1 className='todo__title'>todos</h1>

      <form 
        className='todo__form'
        onSubmit={(e) => handleSubmit(e)}
      >
        <i 
          className={`ri-arrow-up-s-line todo__arrow ${showList ? 'todo__arrow__active' : ''}`}
          onClick={handleArrowClick}
        ></i>
        <input 
          className='todo__input'
          type="text"
          name='todo__input'
          value={newTodo.text}
          onChange={(e) => handleInputChange(e)}
          placeholder='What needs to be done?'
        />
      </form>
    </div>
  )
}

export default TodoForm