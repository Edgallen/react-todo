import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../services/todoContext';
import './todoList.css'

const TodoList = () => {
  const { showList } = useContext(TodoContext);

  return (
  <div className={`list ${showList ? 'list__show' : ''}`}>
      <ul className='list__container'>
        <li className='list__item'>
          <div className='list__circle'></div>
          <i className={`ri-check-line list__check`}></i>
          <p className='list__text'>Тестовое задание</p>
        </li>
      </ul>

      <div className='footer'>
        <p className='footer__title'>2 items left</p>

        <ul className='footer__sort'>
          <li className='sort__item'>All</li>
          <li className='sort__item'>Active</li>
          <li className='sort__item'>Completed</li>
        </ul>

        <p className='clear__button'>Clear completed</p>
      </div>
      <div className='bottom__container'>
        <span className='bottom__child'></span>
        <span className='bottom__child'></span>
      </div>
  </div>
  )
}

export default TodoList