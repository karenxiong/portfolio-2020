import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import GirlDog from 'assets/illustrations/girl-dog.png';
import Shoperon from 'assets/illustrations/shoperon-landing.svg';
import Pickups from 'assets/illustrations/pickups-landing.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4rem',
  },
  girl: {
    marginTop: '6rem',
  },
  caseStudy: {
    marginTop: '3rem',
  },
  intro: {
    '& div': {
      fontFamily: 'Lato',
      letterSpacing: '0.05rem',
      lineHeight: '21.6px',
      fontWeight: '700',
      fontSize: '1.12rem',
      color: 'rgba(51, 51, 51)',
    },
  },
}));

export const Writing = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid className={classes.root} container justifyContent="center" alignItems="center">
          <Grid className={classes.intro} container direction="column" xs={12}>
            <div>I enjoy writing UX case studies on existing products on my free time. </div>
          </Grid>
          <Grid className={classes.caseStudy} container xs={12} justifyContent="flex-start">
            <GatsbyLink to="/myshoperon">
              <img to="/shoperon" src={Shoperon} alt="my shoperon case study" />
            </GatsbyLink>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
