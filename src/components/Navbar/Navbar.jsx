/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark p-2 mb-2 ">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <Link class="nav-link text-white active" aria-current="page" to="/">Inicio</Link>
        </li>
      </ul>
    </div>
  </div>
<CartWidget />
</nav>
  );
}

export default Navbar;
