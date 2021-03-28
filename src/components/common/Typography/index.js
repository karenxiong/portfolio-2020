import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Castoro';
  font-style: italic;
  font-weight: normal;

  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};
`;

export const H2 = styled.h2`
  font-family: 'Castoro';
  font-style: italic;
  font-size: 1.5rem;
  font-weight: normal;

  margin: 2.5rem 0 1rem 0;
  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : '#fff')};
`;

export const H3 = styled.h3`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0.75rem;
  color: ${({ theme }) => (theme.mode === 'light' ? '#686868' : '#fff')};
`;

export const H4 = styled.h4`
  font-variant: small-caps;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem auto;
  color: ${({ theme }) => (theme.mode === 'light' ? '#686868' : '#fff')};
`;

export const H5 = styled.h5.attrs(props => ({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  secondary: props.secondary && '#000000',
}))`
  font-variant: small-caps;
  font-size: 1rem;
  font-weight: 500;
  margin: ${({ secondary }) => (secondary ? '2.5rem 0 1rem 0' : '1rem 0')};
  color: ${({ theme, secondary }) => (theme.mode === 'light' ? secondary ?? '#686868' : '#fff')};
`;
