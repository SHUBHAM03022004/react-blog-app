import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

const Header = ({ match: { url } }) => {
  return (
    <header>
      <div className="navbar">
        <div className="left">
          <img alt="react-logo" src={logo} />
        </div>
        <div className="right">
          <ul>
            <li>
              {url === "/" ? (
                <Link to="/new" className="btn btn-new">
                  New Story
                </Link>
              ) : (
                <Link to="/" className="btn btn-new">
                  Home
                </Link>
              )}
            </li>
            <li>
              <Link to="/bookmark" className="btn btn-bookmarks">
                Bookmarks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
