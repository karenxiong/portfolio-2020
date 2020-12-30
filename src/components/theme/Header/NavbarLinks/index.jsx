import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const StyledLink = styled(AnchorLink)`
  color: ${({ active }) => (active ? '#333333' : '#686868')};
  font-weight: ${({ active }) => (active ? '600' : '500')};

  &:hover {
    font-weight: 600;
  }
`;
const NavbarLinks = ({ desktop }) => {
  const [activeLink, setActiveLink] = useState('work');
  const links = ['work', 'play', 'about'];

  return (
    <Wrapper desktop={desktop}>
      {links.map(link => (
        <StyledLink href={`#${link}`} active={link === activeLink} onClick={() => setActiveLink(link)}>
          {link}
        </StyledLink>
      ))}
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
