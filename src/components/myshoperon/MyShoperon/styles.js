import styled from 'styled-components';

import { List, UnorderedList } from 'components/common';

export const Wrapper = styled.div`
  @media (max-width: 960px) {
  }
`;

export const TwoColumnGridWrapper = styled.div`
  margin: 1.5rem 5rem 0rem 5rem;
  h5 {
    font-size: 1.25rem;
    color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#e6e6e6')};
  }
  @media (max-width: 960px) {
    margin: 1rem;
  }
  @media (max-width: 680px) {
    margin: 0 0 0 2rem;
  }
`;
export const KeyQuestions = styled.ul`
  margin: 0.5rem 5rem 2.5rem 5rem;
  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02rem;
    margin-bottom: 0.75rem;
    color: rgba(51, 51, 51, 1);
  }
  @media (max-width: 960px) {
    margin: 1rem;
  }
  @media (max-width: 680px) {
    margin: 0 0 0 2rem;
  }
`;
