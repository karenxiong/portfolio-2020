import React from 'react';
import styled from 'styled-components';

export const HR = styled.hr`
  border: 0;
  background: ${({ theme }) => (theme.mode === 'light' ? '#8D8D8D' : '#dcdcdc')};
  margin: 1em 0;
  padding: 0;
`;
