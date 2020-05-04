import React from 'react'

import './style.css'

export default function ProfileSelection() {
  return (
    <select className="select">
      <option value="composicoes">Minhas composições</option>
      <option value="bandas">Albuns</option>
    </select >
  )
}