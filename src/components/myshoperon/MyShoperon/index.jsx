import React, { useContext } from 'react';
import { Link as InternalLink } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { Header } from 'components/theme';
import {
  H1,
  H2,
  H3,
  H4,
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
  Desktop,
  TwoStepIteration,
  Iteration,
} from 'components/common';

import DesignProcess from 'assets/illustrations/design-process-shoperon.svg';
import RoughSketch from 'assets/illustrations/rough-sketch-shoperon.png';
import RoughSketchDesktop from 'assets/illustrations/rough-sketch-desktop-shoperon.svg';
import ShoperonFirstIphoneMock from 'assets/illustrations/shoperon-first-iphone-mock.svg';
import UIKit from 'assets/illustrations/ui-kit-shoperon.png';
import MyShoperonBanner from 'assets/illustrations/myshoperon-banner.svg';
import ShoperonFirstIteration from 'assets/illustrations/shoperon-first-iteration.svg';
import ShoperonSecondIteration from 'assets/illustrations/shoperon-second-iteration.svg';
import ShoperonIterationArrow from 'assets/illustrations/shoperon-iteration-arrow.svg';
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
          <img
            style={{ width: '100%', marginTop: '1rem', marginBottom: 0 }}
            src={MyShoperonBanner}
            alt="rough sketch of designs"
          />
          <CaseStudyAttributes>
            <CaseStudyAttribute>
              <H5>role</H5>
              <p>Lead UI/UX designer</p>
            </CaseStudyAttribute>
            <CaseStudyAttribute>
              <H5>timeline</H5>
              <p>Oct 2020 - Feb 2021</p>
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
                <li>Protopie</li>
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
            With MyShoperon being an early-stage startup, we followed a lean UX process in creating the MVP. With this
            process, our small team worked collaboratively together which called for constant iterations that allowed
            frequent feedback.
          </p>
          <img style={{ margin: '3rem auto', display: 'block' }} src={DesignProcess} alt="design process diagram" />
          <p>
            Since we are building for the MVP; in order to achieve and drive rapid validation and iteration cycles, I
            kept three key questions in mind during each phase
          </p>
          <TwoColumnGridWrapper>
            <KeyQuestions>
              <ListItem color={theme.color[0]}>Who is the customer?</ListItem>
              <ListItem color={theme.color[1]}>What is their problem?</ListItem>
              <ListItem color={theme.color[7]}>What is the best, lighest solution I can build for them?</ListItem>
            </KeyQuestions>
          </TwoColumnGridWrapper>
          <p>
            One of the features I worked on is the package handoff between the shoperons and the neighbours. We wanted
            to create a reliable transaction that is efficient and intuitive, which will then result in package handoffs
            being quick and smooth.
          </p>
          <H5 secondary>first iteration</H5>
          <p>
            The first solution includes <span style={{ fontWeight: '500' }}>QR codes</span> for quick handoffs. For a
            successful transaction to occur, both the neighbour and the shoperon must confirm the package handoff on
            both their sides.
          </p>
          <Desktop>
            <img
              style={{ width: '100%', margin: '1rem auto 3rem auto', display: 'block' }}
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
            style={{ width: '100%', margin: '3rem auto 2rem auto', display: 'block', maxWidth: '16.25rem' }}
            src={ShoperonFirstIphoneMock}
            alt="Iphone mock of first iteration"
          />
          <p>
            While having QR codes are a great feature to include for efficiency, it was not feasible for the MVP
            deadline. There was also the concern with users who may not have a functional camera to scan QR codes.
            Another solution was needed and it requires a much more simple approach.
          </p>
          <H5 secondary>second iteration</H5>
          <p>
            The second solution replaces the QR codes with verification codes. While verification codes are less
            efficient than QR codes, it serves the same purpose of having a reliable transaction that requires
            interactions from both parties for a successful transaction to occur. This iteration also eliminates the
            concerns for users with non-functional cameras.
          </p>
          <TwoStepIteration>
            <Iteration>
              <H5 secondary>first iteration</H5>
              <img
                style={{ width: '100%', display: 'block', maxWidth: '16rem' }}
                src={ShoperonFirstIteration}
                alt="Iphone mock of first iteration"
              />
              <p>Scannable QR codes in the first iteration was not feasible for the MVP deadline.</p>
            </Iteration>
            <img style={{ width: '100%' }} src={ShoperonIterationArrow} alt="arrow" />
            <Iteration>
              <H5 secondary>second iteration</H5>
              <img
                style={{ width: '100%', display: 'block', maxWidth: '16rem' }}
                src={ShoperonSecondIteration}
                alt="Iphone mock of second iteration"
              />
              <p>Verification codes are a more simple approach that serves the same purpose.</p>
            </Iteration>
          </TwoStepIteration>
          <img
            style={{ width: '100%', margin: '3rem auto 2rem auto', display: 'block', maxWidth: '16.25rem' }}
            src={ShoperonFirstIphoneMock}
            alt="Iphone mock of first iteration"
          />
          <p>
            Verification codes eliminates the concern of users with a malfunctioning camera. While this method is less
            efficient than quickly scanning a QR code; it is important to keep in mind that this feature is for a MVP
            that only has a small set of core features. Including QR codes are definitely in the future plans that will
            go alongside the verification codes.{' '}
          </p>

          <H2>Key takeaways</H2>
          <p>
            Working in an early-stage startup was a steep learning curve. It was an eye-opening experience that taught
            me a lot about being lean and focusing on the necessary MVP core features.
          </p>
          <p>Some key takeaways from this project are:</p>
          <TwoColumnGridWrapper>
            <UnorderedList>
              <UnorderedListItem color={theme.color[1]}>
                <H5>Focus on building MVP core features</H5>
                <p>
                  In a startup, there is only so much time and effort that you can invest. It's important to focus on
                  the stripped-down version of what you envision to be your final product, with only a small set of core
                  features that can deliver the highest value for your users.
                </p>
              </UnorderedListItem>
              <UnorderedListItem color={theme.color[1]}>
                <H5>Don't spend too much time on the fine details</H5>
                <p>
                  Earlier in my journey, I made the mistake of spending too much time on the UI and copy writing. Taking
                  a step back and reassessing the 3 key questions and user flows helped me to reprioritise the UX.
                </p>
              </UnorderedListItem>
              <UnorderedListItem color={theme.color[7]}>
                <H5>Focus on the problem</H5>
                <p>
                  At the end of the day, it is your users pains that you will be solving for so keeping that front of
                  mind is important as it's easy to lose sight of this when you're bogged down in the day to day.
                </p>
              </UnorderedListItem>
            </UnorderedList>
          </TwoColumnGridWrapper>
        </CaseStudyWrapper>
      </Wrapper>
      <Mobile as={Container}>{/* <Feed mobile /> */}</Mobile>
    </>
  );
};
