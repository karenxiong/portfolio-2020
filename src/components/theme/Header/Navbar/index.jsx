import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Brand as={Link} to="/">
      John Doe
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
