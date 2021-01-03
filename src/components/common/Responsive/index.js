import styled from 'styled-components';

export const Desktop = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  @media (min-width: 961px) {
    display: none;
  }
`;
