import React from 'react';
import Logo from '../../assets/wealthsimple-pink.png';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
      <nav className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <span>
            <Link to="/">
              <img 
                className={styles.logo} 
                src={Logo} 
                alt="Wealthsimple Pink Logo" 
              />
            </Link>
          </span>
          <div className={styles.navBarLinkWrapper}>
            <Link to="/login">
              <span>
                Log In
              </span>
            </Link>
            &nbsp;|&nbsp;
            <Link to="/about">
              <span>
                About
              </span>
            </Link>
          </div>
        </div>
      </nav>
  );
}