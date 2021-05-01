import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ location, sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks location={location} />
  </Wrapper>
);

export default Sidebar;
