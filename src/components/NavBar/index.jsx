import React from 'react';
import Logo from '../../assets/wealthsimple-pink.png';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
  return (
      <nav className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <span>
            <NavLink to="/">
              <img
                className={styles.logo}
                src={Logo}
                alt="Wealthsimple Pink Logo"
              />
            </NavLink>
          </span>
          <div className={styles.navBarLinkWrapper}>
            {
              props.isAuthenticated
                ? (
                  <React.Fragment>
                    <NavLink
                      to="/dashboard"
                      activeClassName={styles.active}
                    >
                      <span>
                        Dashboard
                      </span>
                    </NavLink>
                    &nbsp;|&nbsp;
                    <NavLink
                      to="/logout"
                      activeClassName={styles.active}
                    >
                      <span>
                        Logout
                      </span>
                    </NavLink>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <NavLink
                      exact to="/"
                      activeClassName={styles.active}
                    >
                      <span>
                        Home
                      </span>
                    </NavLink>
                    &nbsp;|&nbsp;
                    <NavLink
                      to="/login"
                      activeClassName={styles.active}
                    >
                      <span>
                        Log In
                      </span>
                    </NavLink>
                  </React.Fragment>
                )
            }
          </div>
        </div>
      </nav>
  );
}