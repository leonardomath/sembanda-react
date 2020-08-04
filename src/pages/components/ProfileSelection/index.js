import React from 'react'

import './style.css'

export default function ProfileSelection({ setSelect }) {
  return (
    <select className="select" onChange={e => setSelect(e.target.value)}>
      <option value="composicoes">Minhas composições</option>
      <option value="bandas">Albuns favoritos</option>
    </select >
  )
}