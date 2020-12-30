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

const StyledBrand = styled.a`
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => (theme.mode === 'light' ? '#000' : '#fff')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
  }
`;

const BrandSecondaryText = styled.span`
  color: ${({ theme }) => (theme.mode === 'light' ? '#7A7A7A' : '#fff')};
`;

const Brand = ({ primaryText, secondaryText }) => (
  <StyledBrand>
    {primaryText}
    <BrandSecondaryText>{secondaryText}</BrandSecondaryText>
  </StyledBrand>
);

const Navbar = () => (
  <Wrapper as={Container}>
    <Brand as={Link} to="/" primaryText="karen" secondaryText="xiong" />
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
