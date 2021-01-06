import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;

const StyledCaseStudyButton = styled.button`
  display: flex;
  color: ${({ theme, color }) => (theme.mode === 'light' ? color : 'white')};
  background: transparent;
  font-size: 0.8em;
  font-weight: 500;
  padding: 0.75em 1em;
  border: ${({ theme, color }) => `1px solid ${theme.mode === 'light' ? color : 'white'}`};
  border-radius: 8px;

  svg {
    margin: 0 0.25rem;
    path {
      fill: ${({ theme, color }) => (theme.mode === 'light' ? color : 'white')};
    }
  }
`;
export const CaseStudyButton = ({ Icon, color, children }) => (
  <StyledCaseStudyButton color={color}>
    {children}
    <Icon aria-label={children} />
  </StyledCaseStudyButton>
);
