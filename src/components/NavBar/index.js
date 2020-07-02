import React from 'react';
import Logo from '../../assets/wealthsimple-pink.png';
import styles from './styles.module.css';

export default function NavBar(props) {
  return (
      <nav className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <span>
            <a href="/">
              <img 
                className={styles.logo} 
                src={Logo} 
                alt="Wealthsimple Pink Logo" 
              />
            </a>
          </span>
          <div className={styles.navBarLinkWrapper}>
            <span>
              <a href="/login">
                Log In
              </a>
            </span>
          </div>
        </div>
      </nav>
  );
}