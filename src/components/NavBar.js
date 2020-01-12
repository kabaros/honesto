import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav
      className={`${styles.nav} navbar navbar-expand-lg navbar-light static-top`}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Honesto
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName={styles.activeLink}
                className={`${styles.navLink}`}
                to="/view-feedback/given"
              >
                Feedback Given
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName={styles.activeLink}
                className={`${styles.navLink}`}
                to="/view-feedback/received"
              >
                Feedback Received
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName={styles.activeLink}
                className={`${styles.navLink}`}
                to="/teams"
              >
                Teams
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
