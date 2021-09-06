import React, { useState } from 'react';
import { navigate } from 'gatsby';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  button: ({ active }) => ({
    justifyContent: 'left',
    fontFamily: 'lato',
    fontSize: '14px',
    transition: 'all 0.5s ease',
    marginLeft: '4rem',
    textTransform: 'lowercase',
    lineHeight: 'normal',
    letterSpacing: '0.05rem',
    padding: '0',
    minWidth: 'initial',
    '&:hover': {
      backgroundColor: 'inherit',
    },
    '@media (max-width: 960px)': {
      marginBottom: '1rem',
      marginLeft: '1rem',
    },
  }),
  menuItem: ({ active }) => ({
    fontFamily: 'lato',
    color: '#666666',
    fontSize: '14px',
    transition: 'all 0.5s ease',
    lineHeight: '16.8px',
    letterSpacing: '0.05rem',
    minWidth: 'initial',
    padding: '.5rem 3rem .5rem 1rem',
    paddingRight: '3rem',
    '&:hover': {
      backgroundColor: 'rgba(236, 223, 253, 0.25)',
    },
  }),
  paper: {
    borderTopLeftRadius: '1px',
    borderTopRightRadius: '1px',
  },
}));

export default function WorkMenu({ desktop, activeLink, setActiveLink }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const links = ['pickups', 'right at home', 'myshoperon', 'locals'];
  const linksUrl = {
    pickups: '/',
    'right at home': '/',
    myshoperon: '/myshoperon',
    locals: '/locals',
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        className={classes.button}
        style={{
          color: '#666666',
          ...(links.includes(activeLink) && {
            color: '#A049BE',
            fontWeight: 700,
          }),
        }}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        disableRipple
      >
        work
        {open ? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
      <Popper
        popperOptions={{
          ...(desktop && {
            modifiers: {
              offset: {
                offset: '0,19',
              },
            },
          }),
          ...(!desktop && {
            modifiers: {
              offset: {
                offset: '-32,0',
              },
            },
          }),
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classes.paper} variant="outlined">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {links.map(link => (
                    <MenuItem
                      className={classes.menuItem}
                      style={{
                        color: '#666666',
                        ...(link === activeLink && {
                          color: '#A049BE',
                          fontWeight: 700,
                        }),
                      }}
                      key={link}
                      onClick={event => {
                        setActiveLink(link);
                        handleClose(event);
                        navigate(linksUrl[link]);
                      }}
                    >
                      {link}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
