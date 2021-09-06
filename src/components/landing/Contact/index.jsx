import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { H1 } from 'components/common';
import contact from 'assets/illustrations/contact.svg';

import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4rem',
  },
  caseStudy: {
    paddingLeft: '3rem',
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
  },
}));

export const Contact = ({ page }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid className={classes.root} spacing={2} container justifyContent="center" alignItems="center">
          <Grid className={classes.intro} container direction="column" xs={12} sm={6}>
            <h1>lets connect</h1>
            <ContactForm />
          </Grid>
          <Grid className={classes.caseStudy} container xs={12} sm={6}>
            {page !== 'about' && (
              <Thumbnail>
                <img src={contact} alt="I’m Karen and I’m a UX Designer!" />
              </Thumbnail>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
