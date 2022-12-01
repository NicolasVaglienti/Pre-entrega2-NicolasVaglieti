/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "../../services/firebase";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  async function findCategories() {
  try {
    const data = await getCategories();
    setCategories(data.map(item => ({ ...item, route: `/category/${item.name}` })))

  } catch(error) {
  } 
}
  useEffect(() => {
    findCategories()
  },[])
  const handleDropDown = () => {
    setIsOpen((previousState) => !previousState)
  }

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
            <li class={`nav-item dropdown ${isOpen ? 'show' : '' }`}>
              <a  
                onClick={handleDropDown} 
                class="nav-link dropdown-toggle text-white" 
                href="#" id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                >
                Categorias
              </a>
              <div class={`dropdown-menu ${isOpen ? 'show' : '' }`} aria-labelledby="navbarDropdownMenuLink">
              {categories?.map((categoria) => {
              return (
                <Link key={categoria.id} to={categoria.route} class="nav-link text-white active">
                  <p class="dropdown-item" href="#">
                  {categoria.name}
                </p>
                </Link>
              );
            })}
              </div>
            </li>
            <li>
            <Link to="/cart" class="nav-link text-white active">
                  <p class="dropdown-item" href="#"> Cart
                </p>
                </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/cart" class="nav-link text-white active">
      <CartWidget />
      </Link>
    </nav>
  );
}

export default Navbar;
