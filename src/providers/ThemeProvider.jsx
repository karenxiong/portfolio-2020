import React from 'react';
import useDarkMode from 'hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';

const color = [
  '#2d00f7',
  '#6a00f4',
  '#8900f2',
  '#a100f2',
  '#b100e8',
  '#bc00dd',
  '#d100d1',
  '#db00b6',
  '#e500a4',
  '#f20089',
];

const borderColor = [
  'rgb(45, 0, 247, .2)',
  'rgb(106, 0, 244, .2)',
  'rgb(137, 0, 242, .2)',
  'rgb(161, 0, 242, .2)',
  'rgb(177, 0, 232, .2)',
  'rgb(188, 0, 221, .2)',
  'rgb(209, 0, 209, .2)',
  'rgb(219, 0, 182, .2)',
  'rgb(229, 0, 164, .2)',
  'rgb(242, 0, 137, .2)',
];

const brandGradiant = `linear-gradient(to right, ${color.join(', ')});`;
export default ({ children }) => {
  const [mode, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider
      theme={{
        mode,
        toggleTheme,
        color,
        borderColor,
        brandGradiant,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
