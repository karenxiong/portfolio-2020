import React from 'react';
import styled from 'styled-components';

export const UnorderedList = styled.ul`
  margin-left: 0px;

  @media (max-width: 960px) {
    margin: 1.5rem;
  }
  @media (max-width: 680px) {
    margin: 1.5rem;
  }
`;
export const UnorderedListItem = styled.li`
  ::marker {
    font-size: 1.75em;
    color: ${({ color }) => color};
  }
`;

export const List = styled.ol`
  counter-reset: list;
  list-style: none;
  margin-left: 0px;

  @media (max-width: 960px) {
    margin: 1.5rem;
  }
  @media (max-width: 680px) {
  }
`;

export const ListItem = styled.li`
  counter-increment: list;
  position: relative;

  display: flex;
  align-items: flex-start;

  :before {
    content: counter(list);
    font-weight: 600;
    margin-right: 0.75rem;
    padding: 1px 8px;
    border-radius: 50%;
    color: white;
    background: ${({ color }) => color};
  }
`;
