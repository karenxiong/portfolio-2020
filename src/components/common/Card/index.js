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
