import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation () {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? classes.active : undefined}
              end //the link should be active only if the current link has / at the end since it will always be active when we use / and it will indicate home page as always active
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? classes.active : undefined}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

//NavLink is used insted of Link which is also used for navigating between pages but the difference is being the NavLink will give a special classname property className which will have a function as a value which returns classname and the function has an isActive arguements so that we can highlight the active page

export default MainNavigation;
