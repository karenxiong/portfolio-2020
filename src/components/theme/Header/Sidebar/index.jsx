import React from 'react';
import { Wrapper } from './styles';

const Sidebar = ({ children, location, sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    {children}
  </Wrapper>
);

export default Sidebar;
