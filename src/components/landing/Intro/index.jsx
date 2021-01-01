import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button, Feed, Link } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Main, Name, Status } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <div>
          <Name>Karen Xiong</Name>
          <h5>UI/UX Designer</h5>
          <Status>Currently designing @</Status>
          <Link href="https://myshoperon.com/">MyShoperon</Link>
        </div>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
      <Main>
        <Feed />
        <img src={dev} alt="I’m Karen and I’m a UX Designer!" />
      </Main>
    </IntroWrapper>
  </Wrapper>
);
