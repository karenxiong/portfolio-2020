import React from 'react';
import styled from 'styled-components';
import { HR, H4 } from 'components/common';

const StyledFocusCaption = styled.div`
  margin: 2.5rem 5rem;
  border: 1px solid ${({ color }) => color};
  h4 {
    margin: 0;
    padding: 0.5rem;
    color: ${({ color }) => color};
    background: ${({ secondaryColor }) => secondaryColor};
    text-align: center;
  }
  hr {
    margin: 0;
    background: ${({ color }) => color};
  }
  p {
    padding: 1rem;
    margin: 0;
  }
  strong {
    font-weight: 600;
    color: ${({ color }) => color};
  }

  @media (max-width: 960px) {
    margin: 2rem 4rem;
  }
  @media (max-width: 680px) {
    margin: 1.5rem;
  }
`;
export const FocusCaption = ({ title, color, secondaryColor, children }) => (
  <StyledFocusCaption color={color} secondaryColor={secondaryColor}>
    {title && (
      <>
        <H4>{title}</H4>
        <HR />
      </>
    )}
    <p>{children}</p>
  </StyledFocusCaption>
);
