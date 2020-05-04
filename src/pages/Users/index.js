import React from 'react'

import LeftBar from '../components/LeftBar/LeftBar'
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'

import './style.css'

export default function Users() {
  return (
    <section className="container">
      <LeftBar />
      <h1>Encontrar usúarios</h1>
      <Search info="Procurar usúario" />
      <div className="users-find">
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </section>
  )
}