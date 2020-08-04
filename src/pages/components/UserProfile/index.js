import React from 'react'

import ButtonRadius from '../ButtonRadius/'

import './style.css'

export default function UserProfile({ users:user }) {
  if (!user) return null
  return (
    <section className="user-profile">
      <img className="user-profile-avatar" src={user.avatar_url} alt="avatar" />
      <ul>
        <li className="username">{user.name}</li>
        <li>{user.instrument}</li>
        <li><ButtonRadius title="Ver perfil" /></li>
      </ul>
    </section>
  )
}