import styled from 'styled-components';

import { H1 } from 'components/common';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(0, 1fr);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 20px;
    grid-template-areas:
      'header'
      'details'
      'feed';
  }
`;

export const IntroWrapper = styled.div`
  align-items: center;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  ${'' /* overflow: hidden; */}

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const Details = styled.div`
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
  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};

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
