import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
<>
<nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link"  to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to='/about'>About us</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link"  to='/blog'>Blog</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to='/contact'>Contact us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
