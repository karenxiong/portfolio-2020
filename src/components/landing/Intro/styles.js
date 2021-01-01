import styled from 'styled-components';

import { H1 } from 'components/common';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
    min-height: 90vh;
  }

  h5 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 0.75rem;
    }
  }
`;

export const Main = styled.div`
  flex: 3;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

export const Name = styled(H1)`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme.mode === 'light' ? 'unset' : 'difference')};
  }

  @media (max-width: 680px) {
    font-size: 2rem;
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
  }

  @media (max-width: 680px) {
    font-size: 0.75rem;
  }

  ${'' /* @media (max-width: 960px) {
    width: 100%;
  } */}
`;
