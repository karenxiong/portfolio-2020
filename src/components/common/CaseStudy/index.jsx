import React from 'react';
import styled from 'styled-components';

export const Hero = styled.div`
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

export const TwoStepIteration = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem 1fr;
  grid-template-rows: minmax(0, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  text-align: center;
  h5,
  img {
    margin-bottom: 0px;
  }
  p {
    text-align: left;
    max-width: 21rem;
  }
  @media (max-width: 960px) {
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
  }
`;

export const Iteration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const BlockQuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 2rem 5rem;
  background: rgba(223, 217, 254, 0.4);

  p {
    font-style: italic;
  }

  @media (max-width: 960px) {
    padding: 2.5rem;
  }
  @media (max-width: 680px) {
    margin: 1rem 0;
    padding: 2rem;
  }
`;
const QuoteContent = styled.div`
  p {
    font-weight: 500;
    margin-bottom: 2rem;

    :last-child {
      margin-bottom: 0;
    }
  }
  @media (max-width: 960px) {
  }
  @media (max-width: 680px) {
  }
`;
const Cite = styled.p`
  font-weight: normal;
  margin-bottom: 0;
  align-self: flex-end;
`;
export const BlockQuote = ({ cite, children }) => (
  <BlockQuoteWrapper>
    <QuoteContent>{children}</QuoteContent>
    <Cite>{cite}</Cite>
  </BlockQuoteWrapper>
);

export const Quote = styled.blockquote`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 2.75rem 0;
  text-align: center;
`;

export const FocusBlock = styled.div`
  text-align: center;
  margin: 2rem 0;
  padding: 2rem 5rem;
  background: rgba(223, 217, 254, 0.4);

  @media (max-width: 960px) {
    padding: 2.5rem;
  }
  @media (max-width: 680px) {
    margin: 1rem 0;
    padding: 2rem;
  }
`;
export const FocusBlockHeader = styled.p`
  font-weight: 500;
  margin-bottom: 1.25rem;
`;
export const FocusBlockBody = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;
export const FocusBlockText = styled.span`
  color: #2d00f7;
`;
