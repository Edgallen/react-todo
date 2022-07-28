import React, { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { TTodoItem } from "../types";

interface IThemeContext {
  showList: boolean;
  toggleList?: () => void;
  todos: Array<TTodoItem>;
  setTodos?: () => void;
}

const defaultState = {
  showList: false,
  todos: []
}

export const TodoContext = createContext<IThemeContext>(defaultState);

type TTodoProvider = {
  children: React.ReactNode
}

export const TodoProvider: FC<TTodoProvider> = ({ children }) => {
  const [showList, setShowList] = useState(defaultState.showList);
  const [todos, setTodos] = useState(defaultState.todos);

  const toggleList = () => {
    setShowList(!showList);
    console.log('Сработало')
  };

  return (
    <TodoContext.Provider
      value={{
        showList,
        toggleList,
        todos
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};