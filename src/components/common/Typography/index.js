import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Castoro';
  font-style: italic;
  font-weight: normal;

  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};
`;

export const H5 = styled.h5`
  font-variant: small-caps;
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0;
  color: ${({ theme }) => (theme.mode === 'light' ? '#686868' : '#fff')};
`;
