import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import { Header } from 'components/theme';
import { Container, Button, Desktop, Mobile, Feed, Link } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Name, Status, Avatar, AvatarBorder } from './styles';

export const Intro = () => (
  <>
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <div>
            <AvatarBorder>
              <Avatar />
            </AvatarBorder>
            <Name>Karen Xiong</Name>
            <h5>UI/UX Designer</h5>
            <Status>Currently designing @</Status>
            <Link href="https://myshoperon.com/">MyShoperon</Link>
          </div>
          {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
        </Details>

        <Feed />
      </IntroWrapper>
    </Wrapper>
    <Mobile as={Container}>
      <Feed mobile />
    </Mobile>
  </>
);
