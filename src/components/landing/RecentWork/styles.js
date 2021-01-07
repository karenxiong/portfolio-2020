import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.5rem 0 3rem 0;
  margin: 0;
  width: 100%;
  @media (o-width: 601px) {
    ${'' /* width: 100%; */}
  }

  @media (min-width: 993px) {
    ${'' /* width: 100%; */}
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 6fr 5fr;
  grid-template-rows: minmax(0, 1fr);
  gap: 2.5rem 2.5rem;

  @media (max-width: 960px) {
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  h4 {
    color: ${({ theme }) => (theme.mode === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme.mode === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  margin-top: 1rem;
  min-height: 145px;

  h4 {
    font-family: Castoro;
    font-weight: normal;
    font-style: italic; 
    font-weight 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: .8rem;
    line-height: 1.5rem;
  }

  @media (max-width: 1200px) {
    ${'' /* min-height: 130px; */}
  }
  @media (max-width: 680px) {
    min-height: 0;
    margin-top: 0;

    h4 {
      margin-bottom: 0.25rem;
    }
  }

`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme.mode === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme.mode === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;

  @media (min-width: 681px) and (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 680px) {
    margin-bottom: 0.5rem;
  }
`;

export const Hyphen = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0 0.25rem;

  @media (min-width: 681px) and (max-width: 1100px) {
    display: none;
  }
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => (theme.mode === 'light' ? '#333333' : 'white')};
  margin: 0;
  @media (min-width: 681px) and (max-width: 1100px) {
    margin-bottom: 0.5rem;
  }
`;

export const Date = styled.div`
  font-family: Castoro;
  font-weight: normal;
  font-size: 0.8rem;
  color: ${({ theme }) => (theme.mode === 'light' ? '#7a7a7a' : 'white')};
`;

export const CaseStudyButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;

  @media (min-width: 681px) and (max-width: 1100px) {
    ${'' /* margin-top: 0.5rem; */}
  }
`;
