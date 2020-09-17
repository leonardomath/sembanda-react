import React from 'react'

import LeftBar from '../components/LeftBar/LeftBar'
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'

import api from '../../services/api'

import './style.css'

export default function Users() {
  const [users, setUsers] = React.useState([])
  const [searchUser, setSearchUser] = React.useState('')
  const [noUserFound, setNoUserFound] = React.useState(false)

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
  }, [noUserFound])

  React.useEffect(() => {
    async function showUser() {
      const response = await api.post('/search/user', {searchUser}, {
        headers: {
          Authorization: "Bearer "+ window.localStorage.getItem('token'),
        }
      })
      if (response.data && searchUser) {
        setUsers(response.data)
        console.log("Usuario buscado: " + response.data);
      }
    }
    if (searchUser != "") {
      showUser();
    }

    if (!searchUser) {
      setNoUserFound(!noUserFound)
    }
  }, [searchUser])

  return (
    <section className="container">
      <LeftBar />
  <h1>Encontrar usúarios</h1>
      <Search
        info="Procurar usúario"
        searchUser={searchUser}
        setSearchUser={setSearchUser}
      />
      <div className="users-find">
        <UserProfile users={users} />
      </div>
    </section>
  );
}