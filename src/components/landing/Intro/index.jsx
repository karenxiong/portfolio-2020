import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Header } from 'components/theme';
import { Container, Button, Desktop, Mobile, Link, PrimaryButton, Feed } from 'components/common';
import download from 'assets/icons/download.svg';
import dev from 'assets/illustrations/dev.svg';
import ScrollDown from 'assets/illustrations/scroll-down.svg';
import { Wrapper, IntroWrapper, Details, Name, Status, Avatar, AvatarBorder } from './styles';

const ScrollDownButtonWrapper = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 680px) {
  }
`;
const ScrollDownButton = () => (
  <ScrollDownButtonWrapper>
    <AnchorLink href="#feed">
      <img src={ScrollDown} alt="Scroll down"></img>
    </AnchorLink>
  </ScrollDownButtonWrapper>
);

export const Intro = ({ page = 'home' }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Wrapper as={Container}>
        <Header />
        <IntroWrapper>
          <Details>
            <AvatarBorder>
              <Avatar />
            </AvatarBorder>
            <Name>Karen Xiong</Name>
            <h5>UI/UX Designer</h5>
            <Status>Currently designing @</Status>
            <Link styles={{ display: 'block' }} href="https://myshoperon.com/">
              MyShoperon
            </Link>
            <PrimaryButton
              color={theme.color[2]}
              Icon={download}
              href="https://www.linkedin.com/in/karen-xiong/"
              iconLeft
              as="a"
            >
              Resume
            </PrimaryButton>
          </Details>
          <Feed page={page} />
          <ScrollDownButton />
        </IntroWrapper>
      </Wrapper>
      <Mobile as={Container}>
        <Feed id="feed" page={page} mobile />
      </Mobile>
    </>
  );
};
