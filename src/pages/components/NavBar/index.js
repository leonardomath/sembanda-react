import React from 'react'

import './style.css'
import logo from './assets/logo.png'
import logoSvg from './assets/logo-svg.svg'
import logoSvgAlt from './assets/logo-alt.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <div className="logo">
          <Link to="/"><img src={logoSvg} alt="sem banda" /></Link>
        </div>
        <div className="signin">
          <form method="post">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Ir</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar