import React from 'react';
import useDarkMode from 'hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';

export default ({ children }) => {
  const [mode, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider
      theme={{
        mode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
