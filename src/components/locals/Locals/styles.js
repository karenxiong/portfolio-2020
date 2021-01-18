import styled from 'styled-components';
import Memoji from 'assets/illustrations/avatar.png';

import { H1 } from 'components/common';

export const Wrapper = styled.div`
  @media (max-width: 960px) {
  }
`;

export const CaseStudyWrapper = styled.div`
  align-items: center;

  p {
    line-height: 1.5rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};
  }

  @media (max-width: 960px) {
  }
`;

export const CaseStudyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-variant: small-caps;
  font-weight: 500;
  line-height: 2rem;
  border-bottom: 2px ${({ theme }) => (theme.mode === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')} solid;
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#212121')};

  a {
    color: ${({ theme }) => (theme.mode === 'light' ? '#212121' : '#fff')};
    &:visited: {
      color: ${({ theme }) => (theme.mode === 'light' ? '#212121' : '#fff')};
    }
  }

  ${'' /* position: sticky;
  top: 0px; */}

  div:nth-child(2n) {
    ${'' /* color: orange; */}
  }

  @media (max-width: 960px) {
    ${'' /* grid-template-columns: 1fr;
    padding: 0; */}
  }
`;

export const LocalHero = styled.div`
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: 2rem;
  padding: 2rem;
  margin: 1rem 0;
  background: ${({ theme }) => (theme.mode === 'light' ? '#dcdcdc' : '#181717')};

  @media (max-width: 960px) {
    height: 10rem;
    grid-template-columns: 1fr;
  }
`;
export const LocalHeroSummary = styled.div``;

export const CaseStudyAttributes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: minmax(0, 1fr);
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const CaseStudyAttribute = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
export const Statistics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 12rem);
  grid-template-rows: minmax(0, 1fr);
  justify-content: space-between;
  gap: 1rem;
  margin: 2.5rem;

  @media (max-width: 960px) {
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
    margin: 1.5rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 12rem;
    justify-content: center;
    gap: 2rem;
  }
`;
export const Stat = styled.div`
  text-align: center;

  h3 {
    color: ${({ color }) => color};
  }
  p {
    font-weight: 500;
  }
`;

export const ParticipantCriteria = styled.div`
  margin: 2.5rem;
  h5 {
    font-size: 1.25rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};
  }
  @media (max-width: 960px) {
    margin: 1.5rem;
  }
  @media (max-width: 680px) {
  }
`;
export const Criterias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 12rem);
  grid-template-rows: minmax(0, 1fr);
  justify-content: space-between;
  gap: 1rem;
  margin: 2.5rem;

  h5 {
    font-size: 1.25rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};
  }
  @media (max-width: 960px) {
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
    margin: 1.5rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 12rem;
    justify-content: center;
    gap: 2rem;
  }
`;
export const Criteria = styled.div`
  text-align: center;

  h3 {
    color: ${({ color }) => color};
  }
  p {
    font-weight: 500;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;
  }

  h5 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
      font-size: 1.25rem;
    }

    @media (max-width: 680px) {
    }
  }
`;

export const Name = styled(H1)`
  margin-bottom: 0.5rem;

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
    font-size: 2.5rem;
  }

  @media (max-width: 680px) {
  }

  ${'' /* @media (max-width: 960px) {
    width: 100%;
  } */}
`;

export const Status = styled.div`
  margin-bottom: 0;
  font-weight: 400;
  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
    font-size: 1.25rem;
  }

  @media (max-width: 680px) {
  }

  ${'' /* @media (max-width: 960px) {
    width: 100%;
  } */}
`;

export const Avatar = styled.img`
  /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
  background-image: url(${Memoji});

  /* make a square container */
  width: 125px;
  height: 125px;

  /* fill the container, preserving aspect ratio, and cropping to fit */
  background-size: cover;

  /* center the image vertically and horizontally */
  background-position: top center;

  /* round the edges to a circle with border radius 1/2 container size */
  border-radius: 50%;

  background-color: #fff1f1;

  @media (max-width: 960px) {
    font-size: 1.25rem;
  }

  @media (max-width: 680px) {
  }

  ${'' /* @media (max-width: 960px) {
    width: 100%;
  } */}
`;

export const AvatarBorder = styled.div`
  margin: 0 auto 1rem auto;

  background: ${({ theme }) => `-webkit-linear-gradient(${theme.color[0]}, ${theme.color[5]}, ${theme.color[9]});`}
  width: 125px;
  height: 125px;
  border-radius: 50%;
  padding: 0.25rem;
`;
