import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Mi Tienda</div>
      <ul style={styles.navLinks}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#f8f9fa',
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold' },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
};

export default NavBar;
