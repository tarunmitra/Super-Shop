import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h1 class="" ><span className="text-info fs-2">Super Shop</span></h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ">

              <li class="nav-item">
                <Link class="nav-link " to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/order">Oder</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin">Admin</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
     
    </div>
    
  );
};

export default Header;