import React from "react";
import logo from "../../../assets/img/home/header/logo.png"
import "../../../assets/styles/home/header/Navigation.css"
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light nav sticky-top">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand ms-5 me-5">
            <img src={logo} alt="" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
          <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
              <li class="nav-item me-2">
                <Link to="/who we are" class="nav-link" aria-current="page" style={{color:"#555555"}} >
                  Who we are
                </Link>
              </li>
              <li class="nav-item dropdown me-2">
                <Link
                  to="/what we do"
                  class="nav-link"
                  style={{color:"#555555"}}
                >
                  What we do
                </Link>
              </li>
              <li class="nav-item me-2">
                <Link to="/contact" class="nav-link" aria-current="page" style={{color:"#555555"}}>
                  Contact us
                </Link>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link" aria-current="page" href="#" style={{color:"#555555"}}>
                  Careers
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link" aria-current="page" href="#" style={{color:"#555555"}}>
                  Blog
                </a>
              </li>
            </ul>
            <button class="btn me-5 btn-nav" type="submit">
              Get Start Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
