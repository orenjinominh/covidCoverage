import React from "react";

import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
        <h3>Navigate here</h3>
        <ul>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
          <Link to='/chartByRace'>
           <li>Racial Data Breakdown</li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
        </ul>
    </nav>
  )

}

export default Nav;
