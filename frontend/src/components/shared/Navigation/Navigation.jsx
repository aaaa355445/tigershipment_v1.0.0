import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import Search from '../Search/Search';

const Navigation = () => {
    const brandStyle = {
        color: '#FF9933',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItem: 'center'

      };

      const categoryStyle = {
        color: "#000000",
        textDecoration: 'none', 
      };

      const dealsStyle = {
        color: "#000000",
        textDecoration: 'none',
        padding: "30px"
      };

      const accountStyle = {
        color: "#000000",
        textDecoration: 'none',
        padding: "30px"
      };

      const cartStyle = {
        color: "#000000",
        textDecoration: 'none',
      };


  return (
    <nav className= {styles.navbar}> 
        <Link style={brandStyle} to="/">
            <span>Tiger Shipment</span>
        </Link>
        <div className={styles.navItems}>
            <Link style={categoryStyle} to="/category">
                <span>Categories</span>
            </Link>
            <Link style={dealsStyle} to="/products">
                <span>Products</span>
            </Link>
        </div>
        <div className={styles.search}>
            <Search />
        </div>
        <div className={styles.navItems}>
            <Link style={accountStyle} to="/about">
                <span>About Us</span>
            </Link>
            <Link style={cartStyle} >
                <span>Become a seller</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navigation;