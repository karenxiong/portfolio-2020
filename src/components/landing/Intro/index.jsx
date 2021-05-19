import React, { useContext } from 'react';
import styled, { keyframes, ThemeContext } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link as GatsbyLink } from 'gatsby';

import { Header } from 'components/theme';
import { Container, Button, Desktop, Mobile, Link, PrimaryButton, Feed } from 'components/common';
import download from 'assets/icons/download.svg';
import dev from 'assets/illustrations/dev.svg';
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
const scrollDown = keyframes`
  0%{
      transform: translateY(-15px);
      opacity: 0;
  }
  45%{
      transform: translateY(0px);
      opacity: 1;
  }
  65%{
      transform: translateY(-5px);
      opacity: 1;
  }
  100%{
      transform: translateY(15px);
      opacity: 0;
  }
`;
const ScrollDownWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid #8900f2;
  font-size: 30px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; //---you can romove this line---

  svg {
    color: #8900f2;
    animation: ${scrollDown} 2s ease infinite;
  }
`;

const ScrollDownButton = () => (
  <ScrollDownButtonWrapper>
    <AnchorLink href="#feed">
      <ScrollDownWrapper>
        <FontAwesomeIcon icon={faAngleDown} light />
      </ScrollDownWrapper>
    </AnchorLink>
  </ScrollDownButtonWrapper>
);

export const Intro = ({ location, page = 'home' }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Wrapper as={Container}>
        <Header location={location} />
        <IntroWrapper>
          <Details>
            <AvatarBorder as={GatsbyLink} to="/about">
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
              href="https://drive.google.com/file/d/1YVwG54h13AF9GG-OYOtu32lbPaADJNkm/view"
              target="_blank"
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
