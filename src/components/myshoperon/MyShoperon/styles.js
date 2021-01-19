import styled from 'styled-components';

import { List, UnorderedList } from 'components/common';

export const Wrapper = styled.div`
  @media (max-width: 960px) {
  }
`;

export const TwoColumnGridWrapper = styled.div`
  margin: 1.5rem 5rem 3rem 5rem;
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
export const KeyQuestions = styled(List)`
  li {
    font-weight: 500;
    font-style: italic;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 960px) {
  }
  @media (max-width: 680px) {
    margin: 0;
  }
`;
