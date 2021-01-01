import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => (theme.mode === 'light' ? 'rgba(0, 0, 0, 0)' : '#fff')};
  background: ${({ theme }) => theme.brandGradiant}
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
  }
`;

const Navbar = () => (
  <Wrapper as={Container} id="work">
    <Brand as={Link} to="/">
      karenxiong
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
