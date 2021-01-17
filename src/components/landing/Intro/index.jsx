import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Header } from 'components/theme';
import { Container, Button, Desktop, Mobile, Feed, Link, PrimaryButton } from 'components/common';
import download from 'assets/icons/download.svg';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Name, Status, Avatar, AvatarBorder } from './styles';

export const Intro = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
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

          <Feed />
        </IntroWrapper>
      </Wrapper>
      <Mobile as={Container}>
        <Feed mobile />
      </Mobile>
    </>
  );
};
