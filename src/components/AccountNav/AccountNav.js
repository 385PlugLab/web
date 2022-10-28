import { Link, navigate } from 'gatsby';
import React from 'react';
import * as styles from './AccountNav.module.css';

const AccountNav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
         <Link
          activeClassName={styles.activeLink}
          to={'/account/new-order/'}
          className={styles.webLink}
        >
          New Order
        </Link>
 <Link
          activeClassName={styles.activeLink}
          to={'/account/qr/'}
          className={styles.webLink}
        >
          Display QR Code
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/orders/'}
          className={styles.webLink}
        >
          History
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/address/'}
          className={styles.webLink}
        >
          Meeting Locations
        </Link>
       
        <Link
          activeClassName={styles.activeLink}
          to={'/account/viewed/'}
          className={styles.webLink}
        >
          Favorites
        </Link>
 <Link
          activeClassName={styles.activeLink}
          to={'/account/connections/'}
          className={styles.webLink}
        >
          My People
        </Link>
 <Link
          activeClassName={styles.activeLink}
          to={'/account/wallet/'}
          className={styles.webLink}
        >
          Wallet
        </Link>
 <Link
          activeClassName={styles.activeLink}
          to={'/account/settings/'}
          className={styles.webLink}
        >
          Settings
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AccountNav;
