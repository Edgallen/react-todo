import React, { createContext, FC, useState } from "react";
import { TFilter, TTodoItem } from "../types";

export interface ITodoContext {
  filter: string;
  changeFilter?: (newFilter: TFilter) => void;

  showList: boolean;
  toggleList?: () => void;

  todos: Array<TTodoItem>;
  addTodo?: (todo: TTodoItem) => void;
  completeTodo?: (newArr: Array<TTodoItem>) => void;
  clearCompleted?: (newArr: Array<TTodoItem>) => void;
}

const defaultState = {
  filter: 'all',
  showList: false,
  todos: []
}

export const TodoContext = createContext<ITodoContext>(defaultState);

type TTodoProvider = {
  children: React.ReactNode
}

export const TodoProvider: FC<TTodoProvider> = ({ children }) => {
  const [showList, setShowList] = useState<boolean>(defaultState.showList);
  const [todos, setTodos] = useState<Array<TTodoItem>>(defaultState.todos);
  const [filter, setFilter] = useState<string>(defaultState.filter);

  const toggleList = () => {
    setShowList(!showList);
  };

  const addTodo = (todo: TTodoItem) => {
    setTodos([
      ...todos,
      todo
    ]);
  }

  const completeTodo = (newArr: Array<TTodoItem>) => {
    setTodos(newArr);
  }

  const clearCompleted = (newArr: Array<TTodoItem>) => {
    setTodos(newArr);
  }

  const changeFilter = (newFilter: TFilter) => {
    setFilter(newFilter);
  }

  return (
    <TodoContext.Provider
      value={{
        filter,
        changeFilter,
        showList,
        toggleList,
        todos,
        addTodo,
        completeTodo,
        clearCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};