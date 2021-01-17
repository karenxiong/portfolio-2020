import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
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
  background: ${({ theme }) => theme.color[2]};

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: ${({ theme }) => theme.color[0]};
	`}
`;

const StyledCaseStudyButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => (theme.mode === 'light' ? color : 'white')};
  background: ${({ theme, color }) => (theme.mode === 'light' ? 'transparent' : color)};
  font-size: 0.8em;
  font-weight: 500;
  padding: 0.75em 1em;
  border: ${({ color }) => `1px solid ${color}}`};
  border-radius: 8px;
  ${'' /* margin-top: 1.5rem; */}

  svg {
    margin: 0 0.25rem;
    path {
      fill: ${({ theme, color }) => (theme.mode === 'light' ? color : 'white')};
    }
  }
  @media (max-width: 680px) {
    width: 100%;
    justify-content: center;
  }
`;
export const CaseStudyButton = ({ Icon, color, iconLeft, children }) => (
  <StyledCaseStudyButton color={color}>
    {iconLeft && <Icon aria-label={children} />}
    {children}
    {!iconLeft && <Icon aria-label={children} />}
  </StyledCaseStudyButton>
);
export const StyledPrimaryButton = styled(StyledCaseStudyButton)`
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
  width: 8rem;
  justify-content: center;
  color: white;
  background: ${({ color }) => color};

  svg {
    path {
      fill: white;
    }
  }

  @media (max-width: 680px) {
    width: 8rem;
  }
`;
export const PrimaryButton = ({ Icon, iconLeft, children, ...props }) => (
  <StyledPrimaryButton {...props}>
    {iconLeft && <Icon aria-label={children} />}
    {children}
    {!iconLeft && <Icon aria-label={children} />}
  </StyledPrimaryButton>
);
