import React from 'react'

import './style.css'
import ButtonRadius from '../ButtonRadius'

function handleExit() {
  const box = document.querySelector('.overlay')
  box.style.display = 'none'
}

export default function Overlay() {
  return (
    <section className="overlay">
      <section className="box-register-album">
        <button id="btnExit" className="btnExit" onClick={handleExit}>x</button>
        <div className="avatar-album-register">
          <img src="https://target.scene7.com/is/image/Target/GUEST_f7e678bb-5d56-4006-b5ac-5d60c3a3f253?wid=488&hei=488&fmt=pjpeg" alt="album" />
        </div>
        <div className="album-description-register">
          <input type="text" placeholder="Nome do album" />
          <input type="text" placeholder="Nome da banda" />
          <ButtonRadius title="Adicionar" />
        </div>
      </section>
    </section>
  )
}