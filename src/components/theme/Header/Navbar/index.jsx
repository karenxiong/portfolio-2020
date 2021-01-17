import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0 2rem 0;

  @media (max-width: 960px) {
    padding: 1.5rem 0;
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
  }
`;

const Brand = styled.a`
  font-variant: small-caps;
  font-weight: 600;
  color: rgba(0, 0, 0, 0);
  background: ${({ theme }) => (theme.mode === 'light' ? theme.brandGradiant : theme.darkBrandGradiant)};
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
  }
`;

const Navbar = () => (
  <Wrapper id="work">
    <Brand as={Link} to="/">
      karenxiong
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
