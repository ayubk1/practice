import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav Class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
  <div Class="container-fluid">
    {/* <Link Class="navbar-brand" to="/">{props.title}</Link> */}
    <a Class="navbar-brand" href="#">{props.title}</a>
    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>
    <div Class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul Class="navbar-nav me-auto mb-2 mb-lg-0">
        <li Class="nav-item">
          <a Class="nav-link active"  href="#">{props.title2}</a>
        </li>
        <li Class="nav-item">
          <a Class="nav-link" href="#">About</a>
        </li>
      </ul>
      {/* <form Class="d-flex" role="search">
        <input Class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button Class="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div class={`form-check form-switch text-${props.mode === "dark"? "light" : "dark"}`}>
         <input onClick={props.enable} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label class="form-check-label" for="flexSwitchCheckDefault">{props.tchange}</label>
      </div>
    </div>
  </div>
</nav>

  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string
}
Navbar.defaultProps = {
  title: "whatnext",
  title2: "about"
}