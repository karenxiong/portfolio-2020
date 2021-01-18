import React from 'react';
import styled from 'styled-components';

export const Hero = styled.div`
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
export const HeroSummary = styled.div``;

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
