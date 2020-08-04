import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import ButtonRadius from '../components/ButtonRadius'
import AvatarUser from '../components/AvatarUser'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import './style.css'

export default function UserDeail() {

  const history = useHistory()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [instrument, setInstrument] = React.useState('')

  React.useEffect(() => {
    async function getData() {
      const response = await api.get('/user', {
        headers: {
          'Authorization': 'Bearer '+localStorage.getItem('token')
        }
      })
      if (response.data.error) {
        localStorage.removeItem('token')
        history.push('/')
      } else {
        setName(response.data.name)
        setEmail(response.data.email)
        setInstrument(response.data.instrument)
      }
    }
    getData()
  }, [history])

  function previewImage(e) {
    const file = document.querySelector('#file')
    document.querySelector('.avatar').src = window.URL.createObjectURL(file.files[0])
  }

  return (
    <section className="userDetail">
      <LeftBar />
      <section className="container">

        <input
          type="file"
          name="" id="file"
          onChange={previewImage} />
        <label htmlFor="file">
          <AvatarUser />
        </label>
        <input type="text" placeholder="Nome" value={name} />
        <input type="email" disabled placeholder="E-mail" value={email} />
        <input type="text" placeholder="Instrumento" value={instrument} />
        <input type="password" placeholder="Senha" />
        <ButtonRadius title="Salvar" />
      </section>
    </section>
  )
}