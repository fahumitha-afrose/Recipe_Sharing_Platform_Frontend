import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin, setShowRegister }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/home">RECIPEDIA</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{ marginTop: "9px" }}>
  <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
</li>

            <li className="nav-item">
              <button className="nav-link active btn btn-link text-white" onClick={() => setShowLogin(true)}>Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active btn btn-link text-white" onClick={() => setShowRegister(true)}>Register</button>
            </li>
          </ul>
          <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

