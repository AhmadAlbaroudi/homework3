import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="/">
          <img
            className="logo"
            src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png"
          />
        </a>
        <NavLink to="/Login"> login </NavLink>
      </header>
    );
  }
}

export default Header;
