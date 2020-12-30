import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={theme.toggleTheme}>
      <img src={theme.mode === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
