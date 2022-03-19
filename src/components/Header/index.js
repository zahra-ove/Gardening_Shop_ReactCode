import React from 'react'
import { NavLink } from "react-router-dom";
import './header.css';

function index() {
  return (
    <>
      <header className="header-area">
          <div className="alazea-main-menu">
              <div className="classy-nav-container breakpoint-off">
                  <div className="container">
                      <nav className="classy-navbar justify-content-between" id="alazeaNav">
                          <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>
                          <div className="classy-navbar-toggler">
                              <span className="navbarToggler"><span></span><span></span><span></span></span>
                          </div>
                          <div className="classy-menu">
                              <div className="classycloseIcon">
                                  <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                              </div>
                              <div className="classynav">
                                  <ul>
                                      <NavLink
                                            className={(navData) => (navData.isActive ? 'activeMenu' : '')}
                                            to="/"
                                        >
                                            Shop
                                        </NavLink>

                                      <NavLink
                                            className={(navData) => (navData.isActive ? 'activeMenu' : '')}
                                            to="about"
                                        >
                                            About
                                        </NavLink>

                                      <NavLink
                                            className={(navData) => (navData.isActive ? 'activeMenu' : '')}
                                            to="contact"
                                        >
                                            Contact
                                        </NavLink>
                                  </ul>
                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </header>

      <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center bg-img-header">
            <h2>Shop</h2>
        </div>
      </div>
    </>
  )
}

export default index