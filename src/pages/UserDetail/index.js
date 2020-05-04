import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import ButtonRadius from '../components/ButtonRadius'
import AvatarUser from '../components/AvatarUser'

import './style.css'

export default function UserDeail() {

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
        <input type="text" placeholder="Nome" />
        <input type="email" disabled placeholder="E-mail" />
        <input type="text" placeholder="Instrumento" />
        <input type="password" placeholder="Senha" />
        <ButtonRadius title="Salvar" />
      </section>
    </section>
  )
}