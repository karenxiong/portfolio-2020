import React, { useContext } from 'react';
import { Link as InternalLink } from 'gatsby';
import { ThemeContext } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Header } from 'components/theme';
import {
  H1,
  h1,
  H3,
  H5,
  HR,
  ListItem,
  FocusCaption,
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
import LocalScenario from 'assets/illustrations/local-scenario.svg';
import LocalRoughSketch from 'assets/illustrations/local-rough-sketch.svg';
import LocalRoughDesign from 'assets/illustrations/local-rough-design.svg';
import LocalFinalDesign from 'assets/illustrations/local-final-design.svg';
import LocalFirstIter from 'assets/illustrations/local-first-iter.svg';
import LocalSecondIter from 'assets/illustrations/local-second-iter.svg';
import LocalsBanner from 'assets/illustrations/locals-banner.svg';
import {
  Wrapper,
  Statistics,
  Stat,
  TwoColumnGridWrapper,
  CriteriaList,
  SynthesisList,
  Persona,
  SubSection,
} from './styles';

import { useStyles } from '../../myshoperon/MyShoperon/index.jsx';

export const Locals = ({ location }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid className={classes.root} container direction="column">
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <img className={classes.caseStudyBanner} src={LocalsBanner} alt="Locals Banner" />
          </Grid>
          <h1>Project Overview</h1>
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

          <h1 style={{ marginTop: '2.5rem' }}>Design Process</h1>
          <p>
            Throughout the project the double diamond design process was used. Each of the{' '}
            <Link style={{ fontSize: '1rem' }}>4</Link> phases were revisted with reiterations between the stages to
            further explore and better understand the problem space as well as to continuously improve on the solution.
          </p>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <img style={{}} src={DesignProcess} alt="design process diagram" />
          </Grid>

          <h1>Research</h1>

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
              <ListItem color={theme.color[1]}>
                Must be currently living in a multi-family building (condo/apartment).
              </ListItem>
              <ListItem color={theme.color[1]}>Must have resided in the building for a minimum of 1 year.</ListItem>
              <ListItem color={theme.color[1]}>Must be at least 18 years old.</ListItem>
            </CriteriaList>
          </TwoColumnGridWrapper>
          <h1>Synthesis</h1>
          <p>Through the 10 user interviews, common themes were found and 3 primary pain points were identified.</p>
          <TwoColumnGridWrapper>
            <SynthesisList>
              <li>
                <H5>
                  <span style={{ color: '#B72424' }}>pain point 01</span> - busy schedules
                </H5>
                With busy schedules, residents have a hard time physically meeting and getting to know their neighbours.
              </li>
              <li>
                <H5>
                  <span style={{ color: '#B72424' }}>pain point 02</span> - no real connections
                </H5>
                With only brief encounters in the hallways, residents find it difficult to connect with their
                neighbours.
              </li>
              <li>
                <H5>
                  <span style={{ color: '#B72424' }}>pain point 03</span> - missed social events
                </H5>
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
          <h1>Ideation</h1>
          <p>
            When first designing for Locals, a user flow chart was created to help work out a logical path as well as to
            visualize the path a user will take in order to complete a task. In the flow chart below, the users’ task is
            to introduce themselves in the introduction channel.
          </p>
          <SubSection>
            <H5>user flow</H5>
            <p>Send a message in the Introduction channel.</p>
            <H5>scenario</H5>
            <p>
              Samantha, a resident who moved in not too long ago, introduces herself to her new neighbours through the
              building’s community app.{' '}
            </p>
            <img
              style={{ margin: '0 auto 2.75rem auto', display: 'block' }}
              src={LocalScenario}
              alt="local scenario diagram"
            />
          </SubSection>
          <p>
            It was clear that users needed a platform to connect with their neighbours. With the flow chart in place and
            a logical path found, rough sketches were drawn and then converted to lofi wireframes for user testing.
          </p>
          <img style={{ margin: 'auto', display: 'block' }} src={LocalRoughSketch} alt="rough sketch" />
          <img style={{ margin: 'auto', display: 'block' }} src={LocalRoughDesign} alt="rough design" />
          <p>
            The goal for user testing the lofi wireframes were to see if they were straightforward and intuitive to
            navigate around. Another objective was to see if each components used in the wireframes were clear and
            understandable.
          </p>
          <h1>Iterations</h1>
          <p>
            Once user testings were completed and all of the user feedbacks are gathered, the following iterations were
            made below:
          </p>
          <SubSection>
            <H5>first iteration</H5>
            <p>
              Some users found the chat notifications card too limited. They understood that this notified and reminds
              users of unread messages but what about community activities? This iteration changes chat notifications to
              community notifications which will show notifications for unread direct messages, channel activities from
              your close friends, and request notifictions.
            </p>
            <img
              style={{ margin: '0 auto 2.75rem auto', display: 'block' }}
              src={LocalFirstIter}
              alt="local first iteration"
            />
            <H5>second iteration</H5>
            <p>
              While users were able to start direct messages with their neighbours by going to their profiles, there
              needed to be a more efficient way to start a direct message with someone from the first chat screen. This
              iteration includes adding an add button for users to search and start messaging their neighbours from the
              chat screen.
            </p>
            <img
              style={{ margin: '0 auto 2.75rem auto', display: 'block' }}
              src={LocalSecondIter}
              alt="local second iteration"
            />
          </SubSection>
          <h1>Final design</h1>
          <p>
            Once changes were made in the lofi wireframes and a second user testing was held for the second iterations,
            high fidelity wireframes are then created with the selected brand colours injected and tested for
            accessibility (minimum AA accessibility standards).
          </p>
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <img style={{ marginBottom: '56px' }} src={LocalFinalDesign} alt="final design" />
          </Grid>
          <h1>Learning outcomes</h1>
          <p>
            I was challenged at each phase of this project. I was solving an unfamiliar problem (I have never lived in a
            shared building before) and there was a lot to learn about the problem space itself before I could dive deep
            in the project. Nevertheless, these challenges proved to be a catalyst for my growth and drove me to perform
            new tasks and pushed me outside of my comfort zone with new experiences. Overall, I learned how to conduct
            more effective research as well as how to tackle unfamiliar problems before getting into the designs.{' '}
          </p>
        </Grid>
      </Container>
    </>
  );
};
