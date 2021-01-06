import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Sun from 'assets/icons/sun.svg';
import Moon from 'assets/icons/moon.svg';
import { Wrapper } from './styles';

const WhiteSun = styled(Sun)`
  circle,
  line {
    stroke: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
  }
`;

const ToggleTheme = () => {
  const theme = useContext(ThemeContext);
  const ModeIcon = theme.mode === 'light' ? Moon : WhiteSun;
  return (
    <Wrapper type="button" onClick={theme.toggleTheme}>
      <ModeIcon aria-label={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
