import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './style.css'
import { GoSettings } from 'react-icons/go'

import LeftBar from '../components/LeftBar/LeftBar'
import UserDetails from '../components/UserDetails/'
import ProfileSelection from '../components/ProfileSelection'
import Album from '../components/Album'

import api from '../../services/api'

export default function Profile() {

  const history = useHistory()

  const [name, setName] = React.useState('')
  const [city, setCity] = React.useState("");
  const [instrument, setInstrument] = React.useState("");
  const [avatar, setAvatar] = React.useState('')

  React.useEffect(() => {
    async function getDada() {
      const response = await api.get("/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      });
      if (response.data.error) {
        localStorage.removeItem("token");
        history.push("/");
      }
      setName(response.data.name)
      setCity(response.data.city)
      setInstrument(response.data.instrument)
      setAvatar(response.data.avatar_url)
    }
    getDada()
  })

  return (
    <section className="container">
      <Link to="userDetail"><GoSettings className="settings" size={32} color="#C17E03" /></Link>
      <LeftBar />
      <UserDetails name={name} city={city} instrument={instrument} avatar={avatar} />
      <ProfileSelection />
      <section className="selection">
      </section>
    </section>
  )
}