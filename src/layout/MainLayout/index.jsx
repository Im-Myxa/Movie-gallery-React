/* eslint-disable arrow-body-style */
import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './mainLayout.module.scss';

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Container className={styles.container}>
      <nav className="mt-3">
        <h1>
          {location.pathname === '/favorite' ? <div>Your Favorite Films</div> : <div>AllFilms</div>}
        </h1>
        <div className={styles.nav}>
          <NavLink to="/" className={styles.link}>
            <Nav.Item>
              <Button className="btn-secondary">All Films</Button>
            </Nav.Item>
          </NavLink>
          <NavLink to="/favorite" className={styles.link}>
            <Nav.Item>
              <Button className="btn-secondary">See Favorite Films</Button>
            </Nav.Item>
          </NavLink>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </Container>
  );
};

export default MainLayout;
