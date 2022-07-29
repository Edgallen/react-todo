import React, { FC, useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../services/todoContext';
import { TFilter, TTodoItem } from '../../types';
import { v4 as uuid } from 'uuid';
import './todoList.css';

type TTodos = {
  todo: TTodoItem,
  index: number
}

const Todos: FC<TTodos> = ({ todo, index }) => {
  const { todos, completeTodo, filter } = useContext(TodoContext);
  const [isFiltered, setIsFiltered] = useState<boolean>(true)

  const handleComplete = () => {
    const newArr = [...todos];
    newArr[index].status = 'complete';

    if (completeTodo) {
      completeTodo(newArr);
    }
  }

  useEffect(() => {
    if (filter === 'all') {
      setIsFiltered(true);
    } else if (filter === 'active' && todo.status === 'active') {
      setIsFiltered(true);
    } else if (filter === 'complete' && todo.status === 'complete') {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, []);

  return (
    <>
      {isFiltered && <li className='list__item'>
        <div className={`list__circle ${todo.status === 'active' && `list__circle__active`}`} onClick={handleComplete}></div>
        {todo.status === 'complete' && <i className={`ri-check-line list__check`}></i>}
        <p className={`list__text ${todo.status === 'complete' && 'list__text__disabled'}`}>{todo.text}</p>
      </li>}
    </>
  )
}

const TodoList = () => {
  const { todos, showList, filter, changeFilter, clearCompleted } = useContext(TodoContext);

  const getActiveCount = (): number => {
    const activeTodos = todos.filter(todo => todo.status === 'active');
    return activeTodos.length;
  }

  const handleFilterChange = (filter: TFilter) => {
    if (changeFilter) {
      changeFilter(filter);
    }
  }

  const handleClear = () => {
    const newArr = [...todos];

    if (clearCompleted) {
      clearCompleted(newArr.filter(todo => todo.status === 'active'));
    }
  }

  return (
  <div className={`list ${showList && 'list__show'}`}>
      {todos.length > 0 && <ul className='list__container'>
        {todos.map((todo: TTodoItem, index: number) => (
          <Todos 
            todo={todo} 
            index={index} 
            key={uuid()}
          />
        ))}
      </ul>}

      <div className='footer'>
        <p className='footer__title'>{getActiveCount()} items left</p>

        <ul className='footer__sort'>
          <li 
            className={`sort__item ${filter === 'all' && 'sort__item__active'}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </li>
          <li 
            className={`sort__item ${filter === 'active' && 'sort__item__active'}`}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </li>
          <li 
            className={`sort__item ${filter === 'completed' && 'sort__item__active'}`}
            onClick={() => handleFilterChange('complete')}
          >
            Completed
          </li>
        </ul>

        <p className='clear__button' onClick={handleClear}>Clear completed</p>
      </div>
      <div className='bottom__container'>
        <span className='bottom__child'></span>
        <span className='bottom__child'></span>
      </div>
  </div>
  )
}

export default TodoList;