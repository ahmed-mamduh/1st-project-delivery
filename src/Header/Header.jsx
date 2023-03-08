import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header id='header' className='alt'>
        <div className='logo'>
          <NavLink to='/Home'>
            <strong>Car Dealer</strong> <span>Website</span>
          </NavLink>
        </div>

        <nav>
          <a href='#menu'>Menu</a>
        </nav>
      </header>
      <nav id='menu'>
        <ul className='links text-center'>
          <li>
            <NavLink to='/Home'>Home</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
