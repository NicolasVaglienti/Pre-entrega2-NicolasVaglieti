/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  const categories = [
    { id: 1, name: "electronics", route: `/category/electronics`  },
    { id: 2, name: "jewelery", route: "/category/jewelery"  },
    { id: 3, name: "men's clothing", route: "/category/men's clothing"  },
    { id: 4, name: "women's clothing", route: "/category/women's clothing"  },
  ];

  return (
    <nav class="navbar navbar-expand-lg bg-dark p-2 mb-2 ">
      <div class="container-fluid">
        <Link class="navbar-brand text-white" to="/">
          LOGO
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item mx-3">
              <Link
                class="nav-link text-white active"
                aria-current="page"
                to="/"
              >
                Inicio
              </Link>
            </li>
            {categories.map((categoria) => {
              return (
                <li class="nav-item mx-3">
                <Link key={categoria.id} to={categoria.route} class="nav-link text-white active">
                  {categoria.name}
                </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
