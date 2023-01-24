import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

export const GetBackBtn = styled(NavLink)`
  cursor: pointer;
  background-color: violet;
  border-style: none;
  color: bisque;
  box-shadow: 4px 4px aquamarine;
  height: 1rem;
  text-decoration: none;
  padding: 2px;

  &:hover {
    box-shadow: 4px 4px rgba(127, 255, 212, 0.6);
    background-color: rgba(238, 130, 238, 0.6);
  }
`;
