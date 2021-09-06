import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Divider from '@material-ui/core/Divider';

import ToggleTheme from 'components/theme/Header/ToggleTheme';

import Brand from 'assets/icons/brand.svg';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Hamburger from './Hamburger';
import WorkMenu from './WorkMenu';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 10;
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#212121')};

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 75%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;

const LinkWrapper = styled.div`
  ${({ desktop }) =>
    desktop
      ? `
      display: flex;
      align-items: center;

			@media (max-width: 960px) {
					display: none;
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

const NavLink = styled(Link)`
  font-family: 'lato';
  color: ${({ active }) => (active ? '#A049BE' : '#666666')};
  font-weight: ${({ active }) => (active ? '700' : '500')};
  font-size: 14px;
  transition: all 0.5s ease;
  margin-left: 4rem;
  letter-spacing: 0.05rem;

  &:last-child {
    margin-right: unset;
  }

  @media (max-width: 960px) {
    margin-left: 1rem;
  }
`;

const NavbarLinks = ({ location, desktop }) => {
  const [activeLink, setActiveLink] = useState(() =>
    location.pathname === '/' ? location.pathname.replace('/', 'home') : location.pathname.replace('/', '')
  );
  const links = ['home', 'work', 'writing', 'about', 'contact'];

  return (
    <LinkWrapper desktop={desktop}>
      <NavLink to="/" active={activeLink === 'home'} onClick={() => setActiveLink('home')}>
        home
      </NavLink>
      <WorkMenu desktop={desktop} activeLink={activeLink} setActiveLink={setActiveLink} />
      <NavLink to="/writing" active={activeLink === 'writing'} onClick={() => setActiveLink('writing')}>
        writing
      </NavLink>
      <NavLink to="/about" active={activeLink === 'about'} onClick={() => setActiveLink('about')}>
        about
      </NavLink>
      <NavLink to="/contact" active={activeLink === 'contact'} onClick={() => setActiveLink('contact')}>
        contact
      </NavLink>
      {/* <ToggleTheme /> */}
    </LinkWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 63px;
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
  }
`;

const StyledDivider = styled(Divider)`
  position: sticky;
  top: 63px;
  background-color: #eeeeee;
  z-index: 9;
`;

const useStyles = makeStyles(() => ({
  root: {
    position: 'sticky',
    top: '0px',
    backgroundColor: '#fff',
    zIndex: 10,
  },
}));

export const Header = ({ location }) => {
  const [sidebar, toggle] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />

        <NavWrapper id="work">
          <Link style={{ height: 41 }} to="/">
            <Brand />
          </Link>
          <NavbarLinks location={location} desktop />
          <Hamburger sidebar={sidebar} toggle={toggle} />
        </NavWrapper>

        <Sidebar location={location} sidebar={sidebar} toggle={toggle}>
          <NavbarLinks location={location} />
        </Sidebar>
      </Container>
      <StyledDivider />
    </>
  );
};
