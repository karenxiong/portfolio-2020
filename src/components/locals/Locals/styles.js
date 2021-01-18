import styled from 'styled-components';
import Memoji from 'assets/illustrations/avatar.png';

import { H1, List, ListItem } from 'components/common';

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

export const TwoColumnGridWrapper = styled.div`
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
export const CriteriaList = styled(List)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(0, auto);
  justify-content: space-between;
  gap: 1rem;

  h5 {
    font-size: 1.25rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};
  }
  li {
    margin: 0;
  }
  @media (max-width: 960px) {
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
    margin: 1.5rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

export const SynthesisList = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(0, auto);
  justify-content: space-between;
  gap: 3rem;

  h5 {
    font-size: 1.25rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};
    margin: 0;
  }

  li {
    margin: 0;

    *:last-child {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 960px) {
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
    margin: 1.5rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

export const Persona = styled.div`
  background: ${({ theme }) => (theme.mode === 'light' ? '#c4c4c4' : '#181717')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22rem;
  margin: 0 2.5rem;

  @media (max-width: 960px) {
    height: 16rem;
  }

  @media (max-width: 680px) {
    height: 12rem;
  }
`;
