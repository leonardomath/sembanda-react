import React from 'react'

import NavBar from '../components/NavBar'
import Radio from '../components/InputRadio'

import './style.css'
import AvatarUser from '../components/AvatarUser'

function previewImage(e) {
  const file = document.querySelector('#file')
  document.querySelector('.avatar').src = window.URL.createObjectURL(file.files[0])
}

const index = () => {
  return (
    <div>
      <NavBar />
      <div className="box-signup">
        <div className="random-images" style={{ background: "url('https://source.unsplash.com/collection/827741/500x900') no-repeat center center"}}>
          
        </div>
        <div className="form-signup">
          <h1 className="form-signup-title">Nova conta</h1>
          <form method="post" encType="form/data">
            <label htmlFor="file">
              <AvatarUser />
            </label>
            <input id="file" type="file" onChange={previewImage} />
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <select>
              <option value="" selected disabled>Escolha seu instrumento</option>
              <option value="Guitarra">Guitarra</option>
              <option value="Violão">Violão</option>
              <option value="Baixo">Baixo</option>
              <option value="Bateria">Bateria</option>
              <option value="Teclado">Teclado</option>
              <option value="Vocal">Vocal</option>
            </select>
            <button type="submit">Cadastrar-se</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default index
