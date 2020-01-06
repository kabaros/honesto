import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Share Feedback</Link>
        </li>
        <li>
          <Link to="/view-feedback/given">My Feedback</Link>
        </li>
        <li>
          <Link to="/view-feedback/received">Team Feedback</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
