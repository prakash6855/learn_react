import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "2px solid #e80fda",
              }}
            ></div>
            <div
              className="bg-info rounded mx-2"
              onClick={() => {
                props.toggleMode("info");
              }}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "2px solid #e80fda",
              }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "2px solid rgb(15, 69, 232)",
              }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "2px solid #e80fda",
              }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "2px solid #e80fda",
              }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "2px solid #e80fda",
              }}
            ></div>
          </div>
          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={() => {
                props.toggleMode("null");
              }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Toggle mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Set title", aboutText: "About text" };
