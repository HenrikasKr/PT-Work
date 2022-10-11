import React from "react";
import { Link } from "react-router-dom";

const OffCanvasMenu = () => {
  if(localStorage.language === undefined) {
    return (
      <>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasWithBackdrop"
        >
          <div className="offcanvas-header d-flex align-items-center mt-4">
            <Link
              to="/"
              className="d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="assets/img/logo-color.png"
                alt="logo"
                className="img-fluid ps-2"
              />
            </Link>
            <button
              type="button"
              className="close-btn text-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="far fa-close"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <Link to="/" className="nav-link">
                  Sobre
                </Link>
              <li>
                <Link to="/solutions" className="nav-link">
                Soluções
                </Link>
              </li>
  
              <li>
                <Link to="/sectors" className="nav-link">
                  Sectores
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contato
                </Link>
              </li>
              <li>
              <div className="dropdown">
              <button
                className={`btn btn-link dropdown-toggle `}
                type="button"
                id="dropdown-lang-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                
                <img className="flag-img" src="../../../assets/img/flag/pt.jfif" alt="PT Flag" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button onClick={()=> {localStorage.setItem("language", "en"); window.location.reload()}} 
                  className={`dropdown-item `}>EN<img className="flag-img" src="../../../assets/img/flag/us.png" alt="US Flag" /></button>
                </li>
              </ul>
            </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasWithBackdrop"
        >
          <div className="offcanvas-header d-flex align-items-center mt-4">
            <Link
              to="/"
              className="d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="assets/img/logo-color.png"
                alt="logo"
                className="img-fluid ps-2"
              />
            </Link>
            <button
              type="button"
              className="close-btn text-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="far fa-close"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <Link to="/" className="nav-link">
                  About
                </Link>
              <li>
                <Link to="/solutions" className="nav-link">
                  Solutions
                </Link>
              </li>
  
              <li>
                <Link to="/sectors" className="nav-link">
                  Sectors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
              <div className="dropdown">
              <button
                className={`btn btn-link dropdown-toggle `}
                type="button"
                id="dropdown-lang-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                
                <img className="flag-img" src="../../../assets/img/flag/us.png" alt="PT Flag" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button onClick={()=> {localStorage.clear(); window.location.reload()}} 
                  className={`dropdown-item `}>PT<img className="flag-img" src="../../../assets/img/flag/pt.jfif" alt="US Flag" /></button>
                </li>
              </ul>
            </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

export default OffCanvasMenu;
