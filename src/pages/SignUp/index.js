import React from 'react'

import NavBar from '../components/NavBar'
import Radio from '../components/InputRadio'

import './style.css'

const index = () => {
  return (
    <div>
      <NavBar />
      <div className="box-signup">
        <div className="random-images" style={{ background: "url('https://source.unsplash.com/collection/827741/500x900') no-repeat center center"}}>
          
        </div>
        <div className="form-signup">
          <h1 className="form-signup-title">Nova conta</h1>
          <form method="post">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <Radio title="Guitarra" />
            <Radio title="Violão" />
            <Radio title="Baixo" />
            <Radio title="Bateria" />
            <Radio title="Teclado" />
            <Radio title="Vocal" />
            <button type="submit">Cadastrar-se</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default index
