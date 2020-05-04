import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import { GoSettings } from 'react-icons/go'

import LeftBar from '../components/LeftBar/LeftBar'
import UserDetails from '../components/UserDetails/'
import ProfileSelection from '../components/ProfileSelection'
import Album from '../components/Album'

export default function Profile() {
  return (
    <section className="container">
      <Link to="userDetail"><GoSettings className="settings" size={32} color="#C17E03" /></Link>
      <LeftBar />
      <UserDetails />
      <ProfileSelection />
      <section className="selection">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </section>
    </section>
  )
}