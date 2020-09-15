import React from 'react'

import LeftBar from '../components/LeftBar/LeftBar'
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'

import api from '../../services/api'

import './style.css'

export default function Users() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    async function getUsers() {
      const response = await api.get("/users", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      setUsers(response.data)
    }
    getUsers()
  }, [])
  return (
    <section className="container">
      <LeftBar />
      <h1>Encontrar usúarios</h1>
      <Search info="Procurar usúario" />
      <div className="users-find">
        <UserProfile users={users} />
      </div>
    </section>
  )
}