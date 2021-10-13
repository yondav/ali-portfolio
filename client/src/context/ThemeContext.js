import React, { createContext, useReducer, useEffect } from 'react';

export const ThemeContext = createContext();

const themeState = JSON.parse(localStorage.getItem('theme')) || {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return { darkMode: false };
    case 'DARKMODE':
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, themeState);

  useEffect(
    () => localStorage.setItem('theme', JSON.stringify(state)),
    [state]
  );

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
