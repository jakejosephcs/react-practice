import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

export default function Header() {
  const { theme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
    padding: '0.5em 2em',
    marginBottom: '1em',
    border: '1px solid black',
  };

  return (
    <div style={themeStyles}>
      <h1>This is my header</h1>
    </div>
  );
}
