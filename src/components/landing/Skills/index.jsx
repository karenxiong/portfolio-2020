import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dogWalk from 'assets/illustrations/dog-walk.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img
          src={dogWalk}
          alt="I am a problem solver, quick study, self starter, and excellent communicator with a passion for great design.
          I also love playing video games and dogs!"
        />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>
          I am a problem solver, quick study, self starter, and excellent communicator with a passion for great design.
          I also love playing video games and dogs!
        </p>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
