import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import ButtonRadius from '../components/ButtonRadius'
import AvatarUser from '../components/AvatarUser'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './style.css'

export default function UserDeail() {

  const history = useHistory()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [instrument, setInstrument] = React.useState('')
  const [avatar, setAvatar] = React.useState('')

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
        setAvatar(response.data.avatar_url)
      }
    }
    getData()
  }, [])

  function previewImage(e) {
    const file = document.querySelector('#file')
    document.querySelector('.avatar').src = window.URL.createObjectURL(file.files[0])
  }

  async function updateUser(e) {
    e.preventDefault()
    let formData = new FormData()
    const image = document.querySelector("#file");
    formData.append('file', image.files[0])
    formData.append('name', name)
    formData.append('email', email)
    formData.append('instrument', instrument)
    try {
      const response = await api.put("/user", formData, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Informações atualizadas.')
      }
    } catch (error) {
      toast.error("O sistema está indisponível no momento.");
    }
  }

  return (
    <>
      <ToastContainer />
    <section className="userDetail">
      <LeftBar />
      <section className="container">
        <form onSubmit={updateUser} method="post" encType="multipart/form-data">
          <input type="file" name="" id="file" onChange={previewImage} />
          <label htmlFor="file">
            <AvatarUser url={avatar} />
          </label>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="email"
            disabled
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <select
            onChange={({ target }) => setInstrument(target.value)}
            value={instrument}
          >
            <option value="" defaultValue disabled>
              Escolha seu instrumento
            </option>
            <option value="Guitarra">Guitarra</option>
            <option value="Violão">Violão</option>
            <option value="Baixo">Baixo</option>
            <option value="Bateria">Bateria</option>
            <option value="Teclado">Teclado</option>
            <option value="Vocal">Vocal</option>
          </select>
          <ButtonRadius title="Salvar" type="submit" />
        </form>
      </section>
    </section>
    </>
  );
}