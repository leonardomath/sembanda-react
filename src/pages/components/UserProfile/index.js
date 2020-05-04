import React from 'react'

import ButtonRadius from '../ButtonRadius/'

import './style.css'

export default function UserProfile() {
  return (
    <section className="user-profile">
      <img className="user-profile-avatar" src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/03/Liam-Gallagher-M.-Rossi-1280x720.jpg" alt="avatar" />
      <ul>
        <li className="username">Liam Gallagher</li>
        <li>Vocalista</li>
        <li><ButtonRadius title="Ver perfil" /></li>
      </ul>
    </section>
  )
}