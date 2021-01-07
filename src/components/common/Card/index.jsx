import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CaseStudyDetailsCard = styled(Card)`
  padding: 0;
  margin-bottom: 1rem;
  background: transparent;

  @media (max-width: 680px) {
    margin-bototm: 1.5rem;
  }
`;

const StyledCaseStudyCard = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ background, theme }) => (theme.mode === 'light' ? background : '#181717')};
  height: 100%;

  img {
    svg: 0;
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 680px) {
    min-height: 13rem;
  }
`;
const Label = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  ${({ font }) => font && `font-family: ${font}`}
`;

export const CaseStudyCard = ({ label, Icon, background, font }) => (
  <StyledCaseStudyCard background={background}>
    <Icon aria-label={label} />
    <Label font={font}>{label}</Label>
  </StyledCaseStudyCard>
);
