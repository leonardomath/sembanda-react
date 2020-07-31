import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'

import './style.css'


export default function Signin() {
 return (
   <>
   <section className="introduction">
    <NavBar />
    <div className="home_container">
      <div className="call">
        <h1 className="introduction_phrase">Crie seu repertório, edite, gerencie, e encontre pessoas para formar sua banda</h1>
          <Link to="/signup" className="start">Começar</Link>
      </div>
    </div>
   </section>
   
   </>
 )
}