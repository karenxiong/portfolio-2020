import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button, H1, Feed } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Main } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <H1>Karen Xiong</H1>
        <h5>I’m Karen and I’m a UX Designer!</h5>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Main>
        <Feed />
        <img src={dev} alt="I’m Karen and I’m a UX Designer!" />
      </Main>
    </IntroWrapper>
  </Wrapper>
);
