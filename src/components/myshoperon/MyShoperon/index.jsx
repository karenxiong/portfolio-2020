import React, { useContext } from 'react';
import { Link as InternalLink } from 'gatsby';
import { ThemeContext } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Shoperon from 'assets/illustrations/shoperon-landing.svg';
import PackageDelivery from 'assets/illustrations/package-delivery.svg';

import { Header } from 'components/theme';
import {
  Caption,
  H1,
  H2,
  H3,
  H4,
  H5,
  HR,
  UnorderedList,
  UnorderedListItem,
  ListItem,
  Mobile,
  Link,
  Hero,
  HeroSummary,
  CaseStudyAttributes,
  CaseStudyAttribute,
  CaseStudyWrapper,
  CaseStudyHeader,
  BlockQuote,
  Quote,
  Desktop,
  TwoStepIteration,
  Iteration,
} from 'components/common';

import DesignProcess from 'assets/illustrations/design-process-shoperon.svg';
import RoughSketch from 'assets/illustrations/rough-sketch-shoperon.png';
import RoughSketchDesktop from 'assets/illustrations/rough-sketch-desktop-shoperon.svg';
import ShoperonFirstQrGif from 'assets/illustrations/shoperon-qr-1.gif';
import ShoperonSecondQrGif from 'assets/illustrations/shoperon-qr-2.gif';
import UIKit from 'assets/illustrations/ui-kit-shoperon.png';
import MyShoperonBanner from 'assets/illustrations/myshoperon-banner.svg';
import ShoperonFirstIteration from 'assets/illustrations/shoperon-first-iteration.svg';
import ShoperonSecondIteration from 'assets/illustrations/shoperon-second-iteration.svg';
import ShoperonIterationArrow from 'assets/illustrations/shoperon-iteration-arrow.svg';
import ShoperonAccessNav from 'assets/illustrations/shoperon-access-nav.svg';
import ShoperonAccessTab from 'assets/illustrations/shoperon-access-tab.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Wrapper, TwoColumnGridWrapper, KeyQuestions } from './styles';

export const useStyles = makeStyles(() => ({
  caseStudyBanner: {
    marginTop: '75px',
    marginBottom: '40px',
    '@media (max-width: 680px)': {
      marginTop: '30px',
    },
  },
  root: {
    '& h1': {
      fontFamily: 'Lato',
      letterSpacing: '0.05rem',
      lineHeight: '33.6px',
      fontWeight: '500',
      fontSize: '28px',
      color: 'rgba(0, 0, 0)',
      marginBottom: '1.5rem',
    },
    '& h2': {
      fontFamily: 'Lato',
      letterSpacing: '0.02rem',
      lineHeight: '24px',
      fontWeight: '400',
      fontSize: '18px',
      color: 'rgba(51, 51, 51)',
      marginBottom: '.75rem',
    },
    '& p': {
      fontFamily: 'Lato',
      letterSpacing: '0.02rem',
      lineHeight: '36px',
      fontWeight: '400',
      fontSize: '16px',
      color: 'rgba(51, 51, 51)',
      marginBottom: '1.5rem',
    },
    '& ul p': {
      fontFamily: 'Lato',
      letterSpacing: '0.02rem',
      lineHeight: '36px',
      fontWeight: '400',
      fontSize: '16px',
      color: 'rgba(51, 51, 51, .7)',
      marginBottom: '1.5rem',
    },
    '& strong': {
      fontFamily: 'Lato',
      letterSpacing: '0.02rem',
      lineHeight: '36px',
      fontWeight: '700',
      fontSize: '16px',
      color: 'rgba(51, 51, 51)',
      marginBottom: '1.5rem',
    },
  },
}));

export const MyShoperon = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid className={classes.root} container>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <img className={classes.caseStudyBanner} src={Shoperon} alt="my shoperon case study" />
          </Grid>

          <h1>introduction</h1>
          <p>
            Online shopping has caused an operational nightmare to residential buildings. They are experiencing package
            onslaught, and struggling to keep up with the growing demand for online deliveries.{' '}
            <strong>
              MyShoperon helps streamline the package receiving process by connecting verified and rated neighbours to
              collect packages for each other.
            </strong>
          </p>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <img style={{ marginBottom: '56px' }} src={PackageDelivery} alt="package delivery illustration" />
          </Grid>
          <p>
            I joined MyShoperon as the <strong>sole UI/UX designer of the founding team</strong> that consisted of the
            founder, a product owner, and a developer. During my time at MyShoperon, I led the UI/UX experience and
            kickstarted accessibility design. Being a part of this journey has been a tough but rewarding experience, I
            have grown tremendously during my time at MyShoperon and have listed some of my key achievements below:
          </p>

          <TwoColumnGridWrapper>
            <UnorderedList>
              <UnorderedListItem>
                <h2>Turned an idea into a functional prototype</h2>
                <p>
                  Since MyShoperon is an early-stage startup company, we started out with just an idea of how we wanted
                  to solve a growing problem. I worked closely with the founder and product owner and created several
                  concepts for the app until we found one that satisfied both the business goals and objectives.
                </p>
              </UnorderedListItem>
              <UnorderedListItem>
                <h2>Created and established a UI kit</h2>
                <p>
                  While the design system is still a work-in-progress, having predefined components for the interface,
                  such as buttons, progress bars, and other aspects of the navigation, has helped maintain the
                  consistency in the look and feel across MyShoperon’s rich multi-platform.
                </p>
              </UnorderedListItem>
            </UnorderedList>
          </TwoColumnGridWrapper>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <img
              style={{ width: '100%', margin: '0 auto 40px auto', display: 'block', maxWidth: '46rem' }}
              src={UIKit}
              alt="UI kit"
            />
          </Grid>

          <h1>design process</h1>
          <p>
            With MyShoperon being an early-stage startup, we followed a lean UX process in creating the MVP. With this
            process, our small team worked collaboratively together which called for constant iterations that allowed
            frequent feedback.
          </p>
          <img
            style={{ margin: '46px auto 40px auto', display: 'block' }}
            src={DesignProcess}
            alt="design process diagram"
          />
          <p>
            Since we are building for the MVP; in order to achieve and drive rapid validation and iteration cycles, I
            kept three key questions in mind during each phase:
          </p>
          <KeyQuestions>
            <UnorderedListItem>Who is the user?</UnorderedListItem>
            <UnorderedListItem>What is their problem?</UnorderedListItem>
            <UnorderedListItem>What is the best, simplest solution I can build for them?</UnorderedListItem>
          </KeyQuestions>
          <p style={{ marginBottom: '2.5rem' }}>
            One of the features I worked on is the <strong>package handoff</strong> between the shoperons and the
            neighbours. We wanted to create a reliable transaction that is efficient and intuitive, which will then
            result in package handoffs being quick and smooth.
          </p>

          <h1>first iteration</h1>
          <p>
            The first solution includes QR codes for quick handoffs. For a successful transaction to occur, both the
            neighbour and the shoperon must confirm the package handoff on both their sides.
          </p>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <Desktop>
              <img
                style={{ width: '100%', margin: '1rem auto 2rem auto', display: 'block' }}
                src={RoughSketchDesktop}
                alt="rough sketch of designs"
              />
            </Desktop>
            <Mobile>
              <img
                style={{ width: '100%', margin: '3rem auto', display: 'block', maxWidth: '32rem' }}
                src={RoughSketch}
                alt="rough sketch of designs"
              />
            </Mobile>
            <img
              style={{ width: '100%', margin: '2rem auto 2rem auto', display: 'block', maxWidth: '30.25rem' }}
              src={ShoperonFirstQrGif}
              alt="Iphone Qr 1"
            />
          </Grid>
          <p style={{ marginBottom: '2.5rem' }}>
            While having QR codes are a great feature to include for efficiency, it was not feasible for the MVP
            deadline. There was also the concern with users who may not have a functional camera to scan QR codes.
            Another solution was needed and it requires a much more simple approach.
          </p>

          <h1>second iteration</h1>
          <p>
            The second solution replaces the QR codes with verification codes. While verification codes are less
            efficient than QR codes, it serves the same purpose of having a reliable transaction that requires
            interactions from both parties for a successful transaction to occur. This iteration also eliminates the
            concerns for users with non-functional cameras.
          </p>
          <Grid container alignItems="center">
            <Grid container direction="column" alignItems="center" xs>
              <H5 secondary>first iteration</H5>
              <img
                style={{ width: '100%', display: 'block', maxWidth: '16rem' }}
                src={ShoperonFirstIteration}
                alt="Iphone mock of first iteration"
              />
            </Grid>
            <Grid item xs={1}>
              <img style={{ width: '100%' }} src={ShoperonIterationArrow} alt="arrow" />
            </Grid>
            <Grid container direction="column" alignItems="center" xs>
              <H5 secondary>second iteration</H5>
              <img
                style={{ width: '100%', display: 'block', maxWidth: '16rem' }}
                src={ShoperonSecondIteration}
                alt="Iphone mock of second iteration"
              />
            </Grid>
          </Grid>
          <img
            style={{ width: '100%', margin: '2rem auto 2rem auto', display: 'block', maxWidth: '30.25rem' }}
            src={ShoperonSecondQrGif}
            alt="Iphone Qr 2"
          />
          <p style={{ marginBottom: '2.5rem' }}>
            Verification codes eliminates the concern of users with a malfunctioning camera. While this method is less
            efficient than quickly scanning a QR code; it is important to keep in mind that this feature is for a MVP
            that only has a small set of core features. Including QR codes are definitely in the future plans that will
            go alongside the verification codes.
          </p>

          <h1>accessibility</h1>
          <p>
            Having an inclusive design played a huge role in the product designs. With our audience being anyone who
            resides in the future partnered building and is minimum 18 years old, we wanted our product to be accessible
            to anyone and everyone. We took the following steps to help ensure that the product is accessible:
          </p>
          <TwoColumnGridWrapper>
            <UnorderedList>
              <UnorderedListItem>
                <h2>Consistent navigation and components</h2>
                <p>
                  All repeated components occur in the same order in every page so that it is easier to predict where to
                  find things on each page. Also, creating and maintaining the design system was a priority. While it is
                  still a work in progress, we ensured that all of the components with the same functionalities are
                  consistent which would help users quickly identify those components on different pages.
                </p>
              </UnorderedListItem>
              <UnorderedListItem>
                <h2>Alternate text for images</h2>
                <p>
                  All of the images have alternate texts which will help individuals who have difficulty perceiving
                  visual content. Assistive technology can read these alternative text aloud, present it visually, or
                  convert it to braille.
                </p>
              </UnorderedListItem>
              <UnorderedListItem>
                <h2>Minimum AA accessibility standards</h2>
                <p>
                  To make certain that everyone will be able to see and read all of the content in the app, all the
                  text, icons, and any graphical objects are ensured to meet a minimum contrast ratio of 4:5:1.
                </p>
              </UnorderedListItem>
              <UnorderedListItem>
                <h2>Tab/Focus order</h2>
                <p>
                  When working on wireframes, all interactive components include indicators for a logical tab order.
                  This helps users who use screen readers or the tab button to navigate around the app easier while also
                  eliminating confusion that comes from random tab orders.
                </p>
              </UnorderedListItem>
            </UnorderedList>
          </TwoColumnGridWrapper>
          <p style={{ marginBottom: '2.5rem' }}>
            While these are just a scratch on the surface when it comes to inclusive design, our goal is to continue
            with these standards as well as to learn more about inclusive designs practices to include them in future
            iterations
          </p>

          <h1>key takeaways</h1>
          <p>
            Working in an early-stage startup was a steep learning curve. It was an eye-opening experience that taught
            me a lot about being lean and focusing on the necessary MVP core features. Some key takeaways from this
            project are:
          </p>
          <TwoColumnGridWrapper>
            <UnorderedList>
              <UnorderedListItem>
                <h2>Focus on building MVP core features</h2>
                <p>
                  In a startup, there is only so much time and effort that you can invest. It's important to focus on
                  the stripped-down version of what you envision to be your final product, with only a small set of core
                  features that can deliver the highest value for your users.
                </p>
              </UnorderedListItem>
              <UnorderedListItem>
                <h2>Don’t spend too much time on the fine details</h2>
                <p>
                  Earlier in my journey, I made the mistake of spending too much time on the UI and copy writing. Taking
                  a step back and reassessing the 3 key questions and user flows helped me to reprioritise the UX.
                </p>
              </UnorderedListItem>
              <UnorderedListItem>
                <h2>Focus on the problem</h2>
                <p>
                  At the end of the day, it is your users pains that you will be solving for so keeping that front of
                  mind is important as it's easy to lose sight of this when you're bogged down in the day to day.
                </p>
              </UnorderedListItem>
            </UnorderedList>
          </TwoColumnGridWrapper>
        </Grid>
      </Container>
    </>
  );
};
