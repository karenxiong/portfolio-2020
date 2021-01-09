import styled, { keyframes } from 'styled-components';

const rainbow = keyframes`
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 1rem;
  border-radius: 3px;
  color: ${({ theme }) => (theme.mode === 'light' ? theme.color[0] : theme.darkColor[0])};
  background: ${({ theme }) => theme.brandGradiant}
  background-size: 200% 200%;
  animation: ${rainbow} 2s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip: text;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgba(0, 0, 0, 0);
  }

  @media (max-width: 960px) {
    font-size: 1.25rem;
  }
  @media (max-width: 680px) {
  }
`;
