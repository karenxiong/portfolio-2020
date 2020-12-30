import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme.mode === 'light' ? '#686868' : '#fff')};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 4rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
