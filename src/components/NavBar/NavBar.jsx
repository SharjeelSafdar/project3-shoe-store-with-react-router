import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core'
import styles from './NavBar.module.css';

function NavBar() {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Typography variant="h4">SHOE STORE</Typography>
            </div>
            <nav className={styles.navLinks}>
                <Link to="/" className={styles.link}>
                    <Typography variant="subtitle1">Home</Typography>
                </Link>
                <Link to="/men" className={styles.link}>
                    <Typography variant="subtitle1">Men</Typography>
                </Link>
                <Link to="/women" className={styles.link}>
                    <Typography variant="subtitle1">Women</Typography>
                </Link>
                <Link to="/kids" className={styles.link}>
                    <Typography variant="subtitle1">Kids</Typography>
                </Link>
                <Link to="/about" className={styles.link}>
                    <Typography variant="subtitle1">About</Typography>
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;
