import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import GirlDog from 'assets/illustrations/girl-dog.png';
import Shoperon from 'assets/illustrations/shoperon-landing.svg';
import Pickups from 'assets/illustrations/pickups-landing.svg';
import FindWork from 'assets/illustrations/find-work-landing.svg';
import RightHome from 'assets/illustrations/right-home-landing.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    // marginTop: '4rem',
  },
  girl: {
    marginTop: '6rem',
  },
  caseStudy: {
    marginTop: '3rem',
    '@media (max-width: 960px)': {
      marginTop: '1.5rem',
    },
    '@media (max-width: 680px)': {
      marginTop: '0rem',
    },
  },
  intro: {
    '& h1': {
      fontFamily: 'Lato',
      letterSpacing: '0.05rem',
      lineHeight: '2.75rem',
      fontWeight: '700',
      fontSize: '2.25rem',
      color: 'rgba(51, 51, 51)',
      marginBottom: '1.5rem',
    },
    '& div': {
      fontFamily: 'Lato',
      letterSpacing: '0.05rem',
      lineHeight: '21.6px',
      fontWeight: '500',
      fontSize: '1.12rem',
      color: 'rgba(102, 102, 102)',
    },
  },
}));

export const Intro = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid className={classes.root} container justifyContent="center" alignItems="center">
          <Grid className={classes.intro} container direction="column" xs={6}>
            <h1>karen xiong</h1>
            <div>ux/ui designer & dog lover</div>
          </Grid>
          <Grid className={classes.girl} item xs={6}>
            <img src={GirlDog} alt="Girl with white doggie" />
          </Grid>
          <Grid className={classes.caseStudy} container xs={12} justifyContent="flex-start">
            <GatsbyLink to="/">
              <img loading="lazy" src={RightHome} alt="right at home case study" />
            </GatsbyLink>
          </Grid>
          <Grid className={classes.caseStudy} container xs={12} justifyContent="flex-end">
            <GatsbyLink to="/">
              <img loading="lazy" src={Pickups} alt="pickups case study" />
            </GatsbyLink>
          </Grid>
          <Grid className={classes.caseStudy} container xs={12} justifyContent="flex-start">
            <GatsbyLink to="/myshoperon">
              <img loading="lazy" src={Shoperon} alt="my shoperon case study" />
            </GatsbyLink>
          </Grid>
          <Grid className={classes.caseStudy} container xs={12} justifyContent="flex-end">
            <GatsbyLink to="/">
              <img loading="lazy" src={FindWork} alt="find work case study" />
            </GatsbyLink>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
