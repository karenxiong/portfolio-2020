import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const StyledLink = styled(AnchorLink)`
  color: ${({ active, theme }) =>
    active === 'true'
      ? theme.mode === 'light'
        ? theme.color[0]
        : theme.darkColor[0]
      : theme.mode === 'light'
      ? '#686868'
      : '#CECECE'};
  font-weight: ${({ active }) => (active === 'true' ? '600' : '500')};
  ${({ active }) => !active && 'font-size: 0.88rem'};
  transition: all 0.5s ease;

  &:hover {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const NavbarLinks = ({ desktop }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname.replace('/', ''));
  console.log('activeLink: ', activeLink);
  const links = ['work', 'play', 'about'];

  return (
    <Wrapper desktop={desktop}>
      <StyledLink as={Link} to="/" active={activeLink === '' ? 'true' : 'false'} onClick={() => setActiveLink('work')}>
        work
      </StyledLink>
      <StyledLink href="#play" active={activeLink === 'play' ? 'true' : 'false'} onClick={() => setActiveLink('play')}>
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
