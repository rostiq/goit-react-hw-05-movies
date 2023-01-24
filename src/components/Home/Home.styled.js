import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled(NavLink)`
  text-decoration: none;
  color: inherit;


  &:visited {
    color: gray;
  }

  &:hover {
    background-color: violet;
    border-style: none;
    color: bisque;
    box-shadow: 4px 4px aquamarine;
    height: 1rem;
    text-decoration: none;
    padding: 2px;
  }
`;
