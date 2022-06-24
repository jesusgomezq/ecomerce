import React from "react";
import Cartwidges from "../CartWidges/Cartwidges";
import {CgShoppingCart} from 'react-icons/cg'

const NavBar = () => {
  return (
      // Usamos un Navbar sencillo para navegar entre la aplicacion
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.airsoftcenter.nl/image/catalog/logo/Airsoft-Center-Logo-name2.png"
            width={170}
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            // style="--bs-scroll-height: 100px;"
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Armeria
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Revolver
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pistola
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Subfusil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fusil
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cargadores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Complementos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bbs
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <Cartwidges Icon={CgShoppingCart} size={"25px"} color={"white"}/>
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
