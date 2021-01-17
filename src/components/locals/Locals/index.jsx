import React, { useContext } from 'react';
import { Link as InternalLink } from 'gatsby';
import { ThemeContext } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Header } from 'components/theme';
import { H1, H5, HR, Container, Button, Desktop, Mobile, Feed, Link, PrimaryButton } from 'components/common';
import download from 'assets/icons/download.svg';
import {
  Wrapper,
  CaseStudyWrapper,
  CaseStudyHeader,
  LocalHero,
  LocalHeroSummary,
  CaseStudyAttributes,
  CaseStudyAttribute,
} from './styles';

export const Locals = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Wrapper as={Container}>
        <Header />
        <CaseStudyHeader>
          <InternalLink to="/">back</InternalLink>
          <div>project overview</div>
          <div />
        </CaseStudyHeader>
        <CaseStudyWrapper>
          <LocalHero>
            <LocalHeroSummary>
              <H1>Locals</H1>
              <p>Build meaningful relationships with your neighbours.</p>
            </LocalHeroSummary>
          </LocalHero>
          <CaseStudyAttributes>
            <CaseStudyAttribute>
              <H5>role</H5>
              <p>Lead product designer</p>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>timeline</H5>
              <p>Jan - Apr 2020</p>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>skills</H5>
              <ul>
                <li>Product thinking</li>
                <li>User research</li>
                <li>Interaction design</li>
                <li>Visual Design</li>
              </ul>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>tools</H5>
              <ul>
                <li>Sketch</li>
                <li>InVision</li>
              </ul>
            </CaseStudyAttribute>
          </CaseStudyAttributes>
          <HR />
        </CaseStudyWrapper>
      </Wrapper>
      <Mobile as={Container}>{/* <Feed mobile /> */}</Mobile>
    </>
  );
};
