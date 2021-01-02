import React from "react";
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;
  }
`

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  list-style-type: none;
  height: auto;
  max-height: 0;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`
const NavItem = styled(Link)`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    transition: color .25s ease-in-out;

    &:hover {
      color: #888;
    }
  }
`

function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem to='/contact'>
          <li>Contact</li>
        </NavItem>
        <NavItem to='/chartByRace'>
        <li>Racial Data Breakdown</li>
        </NavItem>
        <NavItem to='/'>
          <li>Home</li>
        </NavItem>
      </NavList>
    </NavWrapper>


  )

}

export default Nav;
