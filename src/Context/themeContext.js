import React, { useState } from 'react';

const ThemeContext = React.createContext();

function ThemeContextProdivder(props) {
  const [theme, setTheme] = useState(props.defaultTheme);

  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ThemeContextProdivder.defaultProps = {
  defaultTheme: 'dark',
};

export { ThemeContextProdivder, ThemeContext };
