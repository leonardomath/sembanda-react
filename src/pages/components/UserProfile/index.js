import React from 'react'

import ButtonRadius from '../ButtonRadius/'

import './style.css'

export default function UserProfile({ users }) {
  if (!users) return null
  return users.map((user) => (
    <section className="user-profile">
      <img className="user-profile-avatar" src={user.avatar_url} alt="avatar" />
      <ul>
        <li className="username">{user.name}</li>
        <li>{user.instrument}</li>
        <li><ButtonRadius title="Ver perfil" /></li>
      </ul>
    </section>
  ))
}