import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

export default function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
    padding: '0.5em 2em',
  };

  return (
    <div>
      <button style={themeStyles} onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}
