import styled from 'styled-components';

import { List } from 'components/common';

export const Wrapper = styled.div`
  @media (max-width: 960px) {
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
  gap: 2rem;

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

export const SubSection = styled.div`
  margin: 2rem 4.5rem;
  h5 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};
  }
  p {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 960px) {
    margin: 1.5rem;
  }
  @media (max-width: 680px) {
  }
`;
