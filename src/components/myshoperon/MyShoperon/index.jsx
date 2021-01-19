import React, { useContext } from 'react';
import { Link as InternalLink } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { Header } from 'components/theme';
import {
  H1,
  H2,
  H3,
  H5,
  HR,
  UnorderedList,
  UnorderedListItem,
  ListItem,
  Container,
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
} from 'components/common';

import DesignProcess from 'assets/illustrations/design-process-shoperon.svg';
import RoughSketch from 'assets/illustrations/rough-sketch-shoperon.png';
import UIKit from 'assets/illustrations/ui-kit-shoperon.png';
import { Wrapper, TwoColumnGridWrapper, KeyQuestions, KeyAchievements } from './styles';

export const MyShoperon = () => {
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
          <Hero>
            <HeroSummary>
              <H1>MyShoperon</H1>
              <p>An online platform that connects verified and rated neighbours to collect packages for each other.</p>
            </HeroSummary>
          </Hero>
          <CaseStudyAttributes>
            <CaseStudyAttribute>
              <H5>role</H5>
              <p>Lead UI/UX designer</p>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>timeline</H5>
              <p>Oct 2020 - present</p>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>skills</H5>
              <ul>
                <li>Product thinking</li>
                <li>Prototyping</li>
                <li>Interaction design</li>
                <li>Visual Design</li>
                <li>Information Architecture</li>
              </ul>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>tools</H5>
              <ul>
                <li>Figma</li>
                <li>JIRA</li>
              </ul>
            </CaseStudyAttribute>
          </CaseStudyAttributes>
          <HR />
          <BlockQuote cite="- Catherine Chen, Founder of MyShoperon">
            <p>
              “Karen is a highly professional, driven and hardworking individual. Given the nature of an early stage
              startup, things are always changing on the go or uncertain. Karen has been able to think outside the box,
              and to work on the tasks that are beyond the scope.
            </p>
            <p>
              Most important, Karen is an amazing team player, and works well with everyone on the team. She also has
              great communication and interpersonal skills!”
            </p>
          </BlockQuote>
          <H2>Project Overview</H2>
          <p>
            Online shopping has caused an operational nightmare to residential buildings. They are experiencing package
            onslaught, and struggling to keep up with the growing demand for online deliveries. MyShoperon helps
            streamline the package receiving process by connecting verified and rated neighbours to collect packages for
            each other.
          </p>
          <Quote>I was the sole designer of the founding team.</Quote>
          <p>
            I joined MyShoperon as the sole UI/UX designer when it was just a small team that consisted of the founder,
            a product owner, and a developer. During my time at MyShoperon, I led the UI/UX experience and the product
            design. Being a part of this journey has been a tough but rewarding experience, I have grown tremendously
            during my time at MyShoperon and have listed some of my key achievements below:
          </p>
          <TwoColumnGridWrapper>
            <UnorderedList>
              <UnorderedListItem color={theme.color[1]}>
                <H5>turned an idea into a functional prototype 💡</H5>
                <p>
                  Since MyShoperon is an early-stage startup company, we started out with just an idea of how we wanted
                  to solve a growing problem. I worked closely with the founder and product owner and created several
                  concepts of the app until we found one that satisfied both the business goals and objectives.
                </p>
              </UnorderedListItem>
              <UnorderedListItem color={theme.color[1]}>
                <H5>juggled different hats 🎩</H5>
                <p>
                  While my role is a UI/UX designer, I also worked and collaborated with the founder and product owner
                  to help shape the product vision and strategy of MyShoperon. Additionally, since I have some knowledge
                  in HTML and CSS, I worked closely with the developer on designing a product that was both desirable
                  and feasible.
                </p>
              </UnorderedListItem>
              <UnorderedListItem color={theme.color[7]}>
                <H5>created and established a ui kit 🎨</H5>
                <p>
                  While the design system is still a work-in-progress, having predefined components for the interface,
                  such as buttons, progress bars, and other aspects of the navigation, has helped maintain the
                  consistency in the look and feel across MyShoperon’s rich multi-platform.
                </p>
              </UnorderedListItem>
            </UnorderedList>
          </TwoColumnGridWrapper>
          <img
            style={{ width: '100%', margin: '3rem auto', display: 'block', maxWidth: '46rem' }}
            src={UIKit}
            alt="UI kit"
          />
          <H2>Design Process</H2>
          <p>
            With MyShoperon being an early-stage startup, we followed a lean UX process in creating the MVP product. We
            are currently on our way to the check phase.
          </p>
          <img style={{ margin: '3rem auto', display: 'block' }} src={DesignProcess} alt="design process diagram" />
          <p>
            During the think phase, I kept three key questions in mind to achieve and drive rapid validation and
            iteration cycles for the MVP:
          </p>
          <TwoColumnGridWrapper>
            <KeyQuestions>
              <ListItem color={theme.color[0]}>Who is the customer?</ListItem>
              <ListItem color={theme.color[1]}>What is their problem?</ListItem>
              <ListItem color={theme.color[7]}>What is the best, lighest solution I can build for them?</ListItem>
            </KeyQuestions>
          </TwoColumnGridWrapper>
          <img
            style={{ width: '100%', margin: '3rem auto', display: 'block', maxWidth: '32rem' }}
            src={RoughSketch}
            alt="rough sketch of designs"
          />
        </CaseStudyWrapper>
      </Wrapper>
      <Mobile as={Container}>{/* <Feed mobile /> */}</Mobile>
    </>
  );
};
