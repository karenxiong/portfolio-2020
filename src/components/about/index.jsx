import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Shoperon from 'assets/illustrations/shoperon-landing.svg';
import Karen from 'assets/thumbnail/karen-min.jpeg';
import Bobo from 'assets/thumbnail/snowie-min.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4rem',
  },
  pictures: {
    '@media (max-width: 960px)': {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  },
  karenPicture: {
    height: '186px',
    width: '186px',
    objectFit: 'cover',
    borderRadius: '28px',
  },
  snowiePicture: {
    height: '286px',
    width: '186px',
    objectFit: 'cover',
    borderRadius: '28px',
    '@media (max-width: 960px)': {
      height: '186px',
    },
  },
  intro: {
    // paddingLeft: '1rem',
    '& h1': {
      paddingTop: '8px',
      fontFamily: 'Lato',
      letterSpacing: '0.05rem',
      lineHeight: '31.2px',
      fontWeight: '700',
      fontSize: '26px',
      color: 'rgba(51, 51, 51)',
      marginBottom: '20px',
    },
    '& p': {
      fontFamily: 'Lato',
      letterSpacing: '0.05rem',
      lineHeight: '30px',
      fontWeight: '400',
      fontSize: '14px',
      color: 'rgba(102, 102, 102)',
    },
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid className={classes.root} container>
          <Grid className={classes.pictures} container direction="column" sm={12} md={3}>
            <img className={classes.karenPicture} src={Karen} alt="Karen profile picture" />
            <img className={classes.snowiePicture} src={Bobo} alt="Snowie profile picture" />
          </Grid>
          <Grid className={classes.intro} container direction="column" sm={12} md={9} justifyContent="flex-start">
            <h1>hey, i’m karen ✌🏼</h1>
            <p>
              I’m a UX Designer that’s passionate about improving the lives of others through design. I started my UX
              journey at the University of Toronto studying Digital Media and Psychology. I loved learning how impactful
              designs can have on our emotions and behaviours and applying that knowledge to bringing joy and happiness
              to the products I work with!
            </p>
            <p>
              Since graduating, I have led and kickstarted user-centred design methodologies in an early-stage startup
              company and have joined a digital consultant agency where I design to solve problems for a variety of
              different clients.
            </p>
            <p>
              When I’m not designing, you can catch me playing/walking with my doggo, Snowie, binge-watching Netflix,
              and cooking up new recipies. I also love meeting and talking to those who aren’t afraid to share their
              ideas with the world!{' '}
            </p>
            <p>
              If you’d like to chat you can reach me at <a href="mailto:xiongykaren@gmail.com">xiongykaren@gmail.com</a>
            </p>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
