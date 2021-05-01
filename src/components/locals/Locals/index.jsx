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
  ListItem,
  FocusCaption,
  Container,
  Mobile,
  Link,
  Hero,
  HeroSummary,
  CaseStudyAttributes,
  CaseStudyAttribute,
  CaseStudyWrapper,
  CaseStudyHeader,
  FocusBlock,
  FocusBlockHeader,
  FocusBlockBody,
  FocusBlockText,
} from 'components/common';

import DesignProcess from 'assets/illustrations/design-process.svg';
import LocalPersona from 'assets/illustrations/local-persona.svg';
import LocalIdeal from 'assets/illustrations/local-ideal.svg';
import { Wrapper, Statistics, Stat, TwoColumnGridWrapper, CriteriaList, SynthesisList, Persona } from './styles';

export const Locals = ({ location }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Wrapper as={Container}>
        <Header location={location} />
        <CaseStudyHeader>
          <InternalLink to="/">back</InternalLink>
          <div>project overview</div>
          <div />
        </CaseStudyHeader>
        <CaseStudyWrapper>
          <Hero>
            <HeroSummary>
              <H1>Locals</H1>
              <p>Build meaningful relationships with your neighbours.</p>
            </HeroSummary>
          </Hero>
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
          <H2>Project Overview</H2>
          <p>
            This is a capstone project that was created as part of the full-time User Experience program at{' '}
            <Link style={{ fontSize: '1rem' }} href="https://brainstation.io/course/toronto/user-experience-immersive">
              BrainStation
            </Link>
            .&nbsp;The goal of this project is to create a solution that tackles social isolation impacting residents
            residing in buildings.
          </p>
          <FocusCaption title="the problem" color="#B72424" secondaryColor="rgba(183, 36, 36, 0.15)">
            Feelings of belonging and connection to other people are essential to human health and happiness. However,
            according to CBC, “<strong style={{ color: theme.mode === 'light' ? '#333333' : 'white' }}>66%</strong> of
            Toronto residents only know a few neighbours — or none at all” (Pelley, 2018). This causes residents to feel
            isolated and <strong>disconnected</strong> within their own community.
          </FocusCaption>
          <FocusCaption title="the solution" color="#36983A" secondaryColor="rgba(54, 152, 58, 0.15)">
            Locals is a mobile app that focuses on community building. It <strong>connects</strong> residents with their
            neighbours who reside within the same building by facilitating easy and convenient communications between
            neighbours. Any social events are also easily and widely broadcasted to encourage and help bring neighbours
            together.
          </FocusCaption>
          <H2>Design Process</H2>
          <p>
            Throughout the project the double diamond design process was used. Each of the{' '}
            <Link style={{ fontSize: '1rem' }}>4</Link> phases were revisted with reiterations between the stages to
            further explore and better understand the problem space as well as to continuously improve on the solution.
          </p>
          <img style={{ margin: 'auto', display: 'block' }} src={DesignProcess} alt="design process diagram" />
          <H2>Research</H2>
          <p>Through secondary research conducted around the problem space, it was found that…</p>
          <Statistics>
            <Stat color={theme.color[0]}>
              <H3>1.9M</H3>
              <p>Canadians live in Condos</p>
            </Stat>
            <Stat color={theme.color[1]}>
              <H3>1 in 10</H3>
              <p>don’t know a single one of their neighbours</p>
            </Stat>
            <Stat color={theme.color[7]}>
              <H3>2 in 10</H3>
              <p>feel isolated in their own community</p>
            </Stat>
          </Statistics>
          <p>
            With more knowledge acquired through secondary research and insights, primary research of user interviews
            were then conducted. A participant criteria was established and 10 users were found through social media.
          </p>
          <TwoColumnGridWrapper>
            <H5>participant criteria</H5>
            <CriteriaList>
              <ListItem color={theme.color[0]}>
                Must be currently living in a multi-family building (condo/apartment).
              </ListItem>
              <ListItem color={theme.color[1]}>Must have resided in the building for a minimum of 1 year.</ListItem>
              <ListItem color={theme.color[7]}>Must be at least 18 years old.</ListItem>
            </CriteriaList>
          </TwoColumnGridWrapper>
          <H2>Synthesis</H2>
          <p>Through the 10 user interviews, common themes were found and 3 primary pain points were identified.</p>
          <TwoColumnGridWrapper>
            <SynthesisList>
              <li>
                <H5>pain point 01 - busy schedules</H5>
                With busy schedules, residents have a hard time physically meeting and getting to know their neighbours.
              </li>
              <li>
                <H5>pain point 03 - missed social events</H5>
                With only brief encounters in the hallways, residents find it difficult to connect with their
                neighbours.
              </li>
              <li>
                <H5>pain point 02 - no real connections</H5>
                Social events at buildings are often missed due to busy schedules or simply because it is forgotten.
              </li>
            </SynthesisList>
          </TwoColumnGridWrapper>
          <p>
            After gathering the research found and interview insights, a persona was created to help keep my focus on
            designing for what will satisfy the users needs. Due to time constraints, one user type was the primary
            focus rather than several that were found through research. This primary user type has the greatest needs
            and is also readily reachable for user testings.
          </p>
          {/* <Persona>persona</Persona> */}
          <img
            style={{ width: '100%', marginBottom: '2.25rem', display: 'block' }}
            src={LocalPersona}
            alt="local persona diagram"
          />
          <p>
            Based on the persona, Samantha Smith, she feels disconnected from her commnunity and it is clear that her
            work schedule interferes with her ability to meet and connect with her neighbours. With her busy work
            schedule, Samantha needs a way to connect and build on those relationships with her neighbours while she is
            on the go.
          </p>
          <FocusBlock>
            <FocusBlockHeader>How might we...</FocusBlockHeader>
            <FocusBlockBody>
              Help residents <FocusBlockText>connect</FocusBlockText> with their neighbours while also{' '}
              <FocusBlockText>building</FocusBlockText> on those relationships?
            </FocusBlockBody>
          </FocusBlock>
          <H2>Ideation</H2>
          <p>
            For the first iteration of Locals, inspiration was drawn from chatting platforms such as Slack, Facebook
            Messenger, and Discord. While having a chat feature was a priority, I made the initial mistake of solely
            focusing on the chat feature and not the overall community connecting/building aspect.
          </p>
          <img style={{ margin: '0 auto 2.75rem auto', display: 'block' }} src={LocalIdeal} alt="local ideal" />
          <p>
            I was really inspired by Slack’s chatting platform and how easy it is to go to different channels for
            different topics. I thought creating a sense of familiarity with a similar experienced app would be
            beneficial but later realized that users compared Slack to Locals during user testings. And because of that,
            I later changed my prototype to showcase a different approach as well as to incorporate more of a community
            building aspect within the app.
          </p>
        </CaseStudyWrapper>
      </Wrapper>
      <Mobile as={Container}>{/* <Feed mobile /> */}</Mobile>
    </>
  );
};
