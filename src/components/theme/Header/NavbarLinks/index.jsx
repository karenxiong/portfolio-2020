import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const ActiveColors = theme => ({
  '/': theme.mode === 'light' ? theme.color[0] : theme.darkGradiant[0],
  '/play': theme.mode === 'light' ? theme.color[4] : theme.darkGradiant[4],
  '/about': theme.mode === 'light' ? theme.color[8] : theme.darkGradiant[8],
});
console.log(ActiveColors['/work']);
const StyledLink = styled(AnchorLink)`
  color: ${({ active, theme, to }) =>
    active === 'true' ? ActiveColors(theme)[to] : theme.mode === 'light' ? '#686868' : '#CECECE'};
  font-weight: ${({ active }) => (active === 'true' ? '600' : '500')};
  ${({ active }) => !active && 'font-size: 0.88rem'};
  transition: all 0.5s ease;

  &:hover {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const NavbarLinks = ({ location, desktop }) => {
  const [activeLink, setActiveLink] = useState(location.pathname.replace('/', ''));
  console.log('activeLink: ', activeLink);
  const links = ['work', 'play', 'about'];
  // const links = ['work', 'about'];

  return (
    <Wrapper desktop={desktop}>
      <StyledLink as={Link} to="/" active={activeLink === '' ? 'true' : 'false'} onClick={() => setActiveLink('work')}>
        work
      </StyledLink>
      <StyledLink
        as={Link}
        to="/play"
        active={activeLink === 'play' ? 'true' : 'false'}
        onClick={() => setActiveLink('play')}
      >
        play
      </StyledLink>
      <StyledLink
        as={Link}
        to="/about"
        active={activeLink === 'about' ? 'true' : 'false'}
        onClick={() => setActiveLink('about')}
      >
        about
      </StyledLink>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
