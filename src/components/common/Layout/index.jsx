import React from 'react';
import { Header, Footer } from 'components/theme';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children, location }) => (
  <>
    <Global />
    <Header location={location} />
    {children}
    <Footer />
  </>
);
