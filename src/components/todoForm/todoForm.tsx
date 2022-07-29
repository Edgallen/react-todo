import React, { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../services/todoContext';
import { TTodoItem } from '../../types';
import './todoForm.css';

const TodoForm = () => {
  const { addTodo, todos } = useContext(TodoContext);
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
    if (todos.length === 10) {
      console.log('Усе');
      return
    }

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

      {todos.length === 10 && (
        <div className='notification'>
            <p className='notification__text'>
              Хватит добавлять таски, выгоришь же. Больше 10 не разрешаю
            </p>
        </div>
      )}
    </div>
  )
}

export default TodoForm