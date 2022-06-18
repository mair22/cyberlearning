import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome(props) {
  return (
    <header className="header bg-dark" id="header">
      <div className="container">
        <NavLink className="logo" to="/">
          <i className="fab fa-atlassian" />
          Cyberlearn
        </NavLink>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Danh sách khóa học
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <form classname="form-inline my-2 my-lg-0">
          <input
            classname="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            classname="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        {/* <nav className="navbar"> */}
          <NavLink className="btn btn-success" to="/registerpage">Register</NavLink>
          <NavLink className="btn btn-primary" to="/loginpage">Login</NavLink>
        {/* </nav> */}
      </div>
    </header>
  );
}
