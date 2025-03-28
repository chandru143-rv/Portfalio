import React from 'react'
import { Link,Outlet} from 'react-router-dom'

const NavBar = () => {
  return (
    


    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>N</span>
            <span>D</span>
            <span>R</span>
            <span>U</span>
          </Link>

          {/* Navbar toggle button for mobile/tablet view */}
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

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Education" className="nav-link">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Skills" className="nav-link">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Project" className="nav-link">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Communication" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Outlet for nested routes */}
      <Outlet />
    </>
  );
};

export default NavBar;


