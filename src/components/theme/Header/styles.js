import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#212121')};
  width: 100%;
  ${'' /* position: sticky;
  top: 0px; */}
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
